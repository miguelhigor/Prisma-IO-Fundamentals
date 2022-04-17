import { PrismaClient, Prisma, Courses } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.$queryRaw<Courses[]>(
        Prisma.sql`
            SELECT * FROM courses
        `,
    );

    console.log("All data in 'courses' using the queryRaw method:\n", result);
}

main();