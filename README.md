# WP Pager Landing Page Site

## Contribute
### With Container Engine
#### Build an Image
To build an image, navigate to the root of the project and run this command.

With Podman:
```bash
podman-compose build
```

With Docker:
```bash
docker compose build
```

#### Create `node_modules`
Run this command to install npm packages and generate a `node_modules` directory on your local machine.

With Podman:
```bash
podman-compose run --rm app npm i
```

With Docker:
```bash
docker compose run --rm app npm i
```

#### Run the Container
To run a container, navigate to the root of the project and run this command.

With Podman:
```bash
podman-compose up
```

With Docker:
```bash
docker compose up
```

You can visit [localhost:3000](http://localhost:3000) to see your documentation.

#### Enter the Container
To enter inside of the container, run this command.

With Podman:
```bash
podman-compose exec app sh
```

With Docker:
```bash
docker compose exec app sh
```

You'll be able to run NPM commands inside of the container.

#### Destroy the Container
Run this command to stop and destroy the container.

With Podman:
```bash
podman-compose down
```

With Docker:
```bash
docker compose down
```

### NPM Command
#### Install Dependencies
```bash
npm i
```

#### Watch File Changes
```bash
npm run dev
```

Navigate to [localhost:3000](http://localhost:3000) to see your documentation.
