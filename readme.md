# we-template

Clone any Git repository as a fresh boilerplate project without history.

## Installation

No installation required. Use with npx:

```bash
npx we-template <repo-url> <project-name>
```

Or install globally:

```bash
npm install -g we-template
```

## Usage

### Basic usage

```bash
npx we-template https://github.com/user/nestjs-boilerplate.git my-api
```

This will:
1. Clone the repository (shallow clone)
2. Remove .git history
3. Update package.json with your project name
4. Initialize a fresh Git repository
5. Create the initial commit

### With SSH URLs

```bash
npx we-template git@github.com:user/nextjs-template.git my-app
```

### Specific branch

```bash
npx we-template https://github.com/user/repo.git my-project -b develop
```

### Skip git initialization

```bash
npx we-template https://github.com/user/repo.git my-project --no-git
```

## Options

- `-b, --branch <branch>` — Clone a specific branch (default: `main`)
- `--no-git` — Skip git initialization after cloning
- `-V, --version` — Output the version number
- `-h, --help` — Display help information

## Examples

### NestJS project

```bash
npx we-template https://github.com/yourorg/nestjs-boilerplate.git my-nest-api
cd my-nest-api
npm install
npm run start:dev
```

### Next.js project

```bash
npx we-template https://github.com/yourorg/nextjs-boilerplate.git my-next-app
cd my-next-app
npm install
npm run dev
```

### Private repository

Make sure you have SSH keys configured:

```bash
npx we-template git@github.com:yourorg/private-template.git my-private-project
```

## Why we-template

- No history: Start fresh without boilerplate commit history
- Any repository: Works with public or private repositories
- Fast: Shallow clone for speed
- Simple: No configuration files needed
- Framework agnostic: Works with any project type

## Requirements

- Node.js 18+
- Git installed locally

## License

MIT
