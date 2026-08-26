import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client";

const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", async (socket) => {
  const res = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  console.log(res);
  console.log("Hello Connection established successfully");
});
