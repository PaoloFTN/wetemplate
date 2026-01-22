#!/usr/bin/env node

import { execSync } from "child_process";
import { rmSync, cpSync, existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

function createFromRepo(repoUrl: string, projectName: string) {
  const targetPath = join(process.cwd(), projectName);
  const tempDir = join(process.cwd(), `.temp-${Date.now()}`);

  if (existsSync(targetPath)) {
    console.error(`❌ Directory ${projectName} already exists`);
    process.exit(1);
  }

  try {
    console.log(`📦 Cloning repository: ${repoUrl}...`);
    execSync(`git clone --depth 1 ${repoUrl} ${tempDir}`, {
      stdio: "inherit",
    });

    // Remove the .git folder to detach from the original repository
    console.log("🧹 Cleaning up git history...");
    rmSync(join(tempDir, ".git"), { recursive: true, force: true });

    // Update package.json name
    console.log("📝 Updating package.json...");
    const packageJsonPath = join(tempDir, "package.json");
    if (existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
      packageJson.name = projectName;
      writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }

    // Copy to target path
    console.log("📁 Creating project...");
    cpSync(tempDir, targetPath, { recursive: true });

    // Initialize a new git repository
    console.log("🎉 Initializing git...");
    execSync("git init", { cwd: targetPath, stdio: "inherit" });
    execSync("git add .", { cwd: targetPath, stdio: "inherit" });

    // Initial commit
    console.log(`✅ Project ${projectName} created successfully!`);
    console.log(
      `\nNext steps:\n  cd ${projectName}\n  npm install\n  npm run dev`,
    );
  } catch (error) {
    console.error("❌ Error creating project:", error);
    process.exit(1);
  } finally {
    if (existsSync(tempDir)) {
      rmSync(tempDir, { recursive: true, force: true });
    }
  }
}

// Parse arguments
const [repoUrl, projectName] = process.argv.slice(2);

if (!repoUrl || !projectName) {
  console.error("Usage: boilerplate-cli <repo-url> <project-name>");
  console.error("\nExamples:");
  console.error(
    "  boilerplate-cli https://github.com/user/nestjs-template.git my-api",
  );
  console.error(
    "  boilerplate-cli git@github.com:user/nextjs-template.git my-app",
  );
  process.exit(1);
}

createFromRepo(repoUrl, projectName);
