FROM oven/bun:1

WORKDIR /usr/src/app

ARG DATABASE_URL

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws-server ./apps/ws-server

RUN bun install

ENV DATABASE_URL=${DATABASE_URL}
RUN bun run db:generate

EXPOSE 3001

CMD ["bun", "run", "start:websocket"]