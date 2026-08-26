import { prisma } from "@repo/db/client";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
