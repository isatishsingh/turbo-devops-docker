import { prisma } from "@repo/db/client";

export const dynamic = 'force-dynamic';

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


// export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'
