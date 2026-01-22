# we-template

Clone any Git repository as a fresh boilerplate project without history.

## Installation

No installation required! Use with `npx`:

```bash
npx we-template <repo-url> <project-name>

bash
npm install -g we-template
Usage
Basic Usage
bash
npx we-template https://github.com/user/nestjs-boilerplate.git my-api
This will:

Clone the repository (shallow clone)

Remove .git history

Update package.json with your project name

Initialize a fresh Git repository

Create initial commit

With SSH URLs
bash
npx we-template git@github.com:user/nextjs-template.git my-app
Specific Branch
bash
npx we-template https://github.com/user/repo.git my-project -b develop
Skip Git Initialization
bash
npx we-template https://github.com/user/repo.git my-project --no-git
Options
-b, --branch <branch> - Clone a specific branch (default: main)

--no-git - Skip git initialization after cloning

-V, --version - Output the version number

-h, --help - Display help information

Examples
NestJS Project
bash
npx we-template https://github.com/yourorg/nestjs-boilerplate.git my-nest-api
cd my-nest-api
npm install
npm run start:dev
Next.js Project
bash
npx we-template https://github.com/yourorg/nextjs-boilerplate.git my-next-app
cd my-next-app
npm install
npm run dev
```bash



  # wetemplate
