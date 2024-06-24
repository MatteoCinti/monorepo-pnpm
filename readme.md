# Monorepo Template

> A monorepo template used to manage multiple packages with pnpm workspaces. Easy to deploy and run with ready containers.
>
> - The frontend is a react app setup with vite, typescript, and tailwindcss.
> - The backend is an express app setup with typescript.
> - Husky will run prettier and eslint on commit.

## Requirements

_To run on local machine the requirements are_

- Node >=20
- pnpm >=6
- Docker desktop | Docker engine

## Configuration

#### Docker

You can add a .env file in the docker folder to change the default configuration.

## Getting Started

#### Local Development

run `pnpm install` to install all dependencies.
run `pnpm dev` to start the development server.
run `pnpm build` to build the project.
run `pnpm start` to start the production server.

#### Docker Local Development

run `docker compose -f ./docker/compose/docker-compose.dev.yaml build` to build the development server.
run `docker compose -f ./docker/compose/docker-compose.dev.yaml up` to start the development server.

_Note: the project is currently setup to run linter in development watch mode to enforce best practices while coding you can remove that easily tweaking the dev commands_

_Remove eslint plugin from @app/client/vite.config.ts_
_Remove `eslint src --ext .js,.jsx,.ts,.tsx --fix && ` from @app/server/nodemon.json_
