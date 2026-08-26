FROM oven/bun:1

WORKDIR /usr/src/app

COPY package* .

RUN bun install

COPY . .

RUN bun run generate:db

EXPOSE 3001

CMD [ "bun","start:ws-server" ]