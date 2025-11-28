# WP Pager Landing Page Site

## Contribute
### With Container Engine
> [!NOTE]
> If you use [🐳 Docker](https://app.docker.com/) instead of [🦦 Podman](https://podman.io/), just replace `podman-compose` with `docker compose`, and `podman` with `docker` in code examples below.

#### Build an Image
To build an image, navigate to the root of the project and run this command:

```bash
podman-compose build
```

#### Create `node_modules`
Run this command to install npm packages and generate a `node_modules` directory on your local machine:

```bash
podman-compose run --rm app npm i
```

#### Run the Container
To run a container, navigate to the root of the project and run this command:

```bash
podman-compose up
```

You can visit [localhost:3000](http://localhost:3000) to see your documentation.

#### Enter the Container
To enter inside of the container, run this command:

```bash
podman-compose exec app sh
```

You'll be able to run NPM commands inside of the container.

#### Destroy the Container
Run this command to stop and destroy the container:

```bash
podman-compose down
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
