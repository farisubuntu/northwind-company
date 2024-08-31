import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prismaClient = new PrismaClient().$extends(withAccelerate());
export default prismaClient;

/*
Add caching to your Accelerate queries

await prisma.user.findMany({ 
  where: { 
    email: { 
      contains: "alice@prisma.io",
    },
  },
  cacheStrategy: { ttl: 60 },
});

*/
