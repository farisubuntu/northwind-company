Install the latest version of Prisma Client and Accelerate Prisma Client extension

```shell
$ npm install @prisma/client@latest @prisma/extension-accelerate
```

Generate Prisma Client for Accelerate (`Serverless | Edge | Long-running`)
`Serverless` selected

```shell
npx prisma generate --no-engine
```

Extend your Prisma Client instance to add the Accelerate extension

```shell
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

```


Add caching to your Accelerate queries

```ts
await prisma.user.findMany({ 
  where: { 
    email: { 
      contains: "alice@prisma.io",
    },
  },
  cacheStrategy: { ttl: 60 },
});
```

Once you have added Accelerate to your application you can view your project usage in the [insights tab.](https://console.prisma.io/clyijemoe0bpnwm3j8cplo502/clyijgxpn0bprwm3jvzj84fop/clyijgxpo0bpswm3jevopnibl/accelerate/insights)

To learn more about `cacheStrategy` and how Accelerate works, [see documentation](https://www.prisma.io/docs/data-platform/accelerate/concepts).

---


for setting `postresql`:

[https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-linux/](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-linux/)
