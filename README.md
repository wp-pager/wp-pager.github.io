# WP Pager Landing Page Site

## Development
### Without Docker
You'll need to have Node and NPM installed on your machine to run it locally.

#### Install Dependencies
```bash
npm i
# or
yarn
```

#### Watch File Changes
```bash
npm run dev
# or
yarn dev
```

Navigate to `http://localhost:3000` to see your documentation.

### With Docker
#### Build an image
To build an image, navigate to the root of the project that contains `Dockerfile` and run this command:
```bash
docker compose build
```

#### Run the container
To run a container, navigate to the root of the project that contains `Dockerfile` and run this command:
```bash
docker compose up -d
```

You can visit `http://localhost:3000` to see your documentation.

#### Enter the container
To enter inside of the container, run this command:
```bash
docker exec -it wp-pager-landing sh
```

You'll be able to run NPM commands inside of the container.

#### Stop the container
```bash
docker compose down
```
