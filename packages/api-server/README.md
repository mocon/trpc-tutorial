# tRPC `express` API server

#### Build Docker image:

```sh
docker build -t trpc-express .
```

#### Development

```sh
docker compose -f docker-compose.dev.yml up
```

#### Production

```sh
docker compose up --build
```
