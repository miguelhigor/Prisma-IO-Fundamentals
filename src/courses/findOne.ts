import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const course = await prisma.courses.findFirst({
        take: -1,
    });

    console.log("This is the first entry on 'courses' table: \n", course);
}

main();