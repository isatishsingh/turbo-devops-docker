import express from "express";
import { prisma } from "@repo/db/client";

const app = express();

app.get("/", async (req, res) => {
  const data = await prisma.user.findMany();

  res.json({
    data,
  });
});

app.post("/", async (req, res) => {
  await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  res.json({
    message: "Post operation done successfully",
  });
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
