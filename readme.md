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

- run `pnpm monorepo:init` to initialize the monorepo.

  - update env files accordingly.

- run `pnpm install` to install all dependencies.

- run `pnpm dev` to start the development server.

- run `pnpm build` to build the project.

- run `pnpm start` to start the production server.

#### Docker Local Development

- run `docker compose -f ./docker/compose/docker-compose.dev.yaml build` to build the development server.
- run `docker compose -f ./docker/compose/docker-compose.dev.yaml up` to start the development server.

**WINDOWS**: Use the command dev:windows in Dockerfile

Note: _the project is currently setup to run linter in development watch mode to enforce best practices while coding you can remove that easily tweaking the dev commands_

_Remove eslint plugin from `@app/client/vite.config.ts`_
_Remove `eslint src --ext .js,.jsx,.ts,.tsx --fix && ` from @app/server/nodemon.json_

##### MongoDb Connection

On first build of the container MongoDB will create users for the database if you forget to set these users in your .env you will the to remove the container and rebuild it again.

`docker compose -f ./docker/compose/docker-compose.dev.yaml down --rmi=all --volumes`

##### Known Issues

The client app gets this error:
_workaround: remove mounted node_modules from the docker-compose.dev.yaml file, rebuild project, include them again and rebuild a second time_

The server app gets this error: _Adress already in use_
_workaround: restart containers_

#### Docker Production Build

run `docker compose -f ./docker/compose/docker-compose.prod.yaml build` to build the production server.
