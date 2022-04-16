import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.teachers.findMany({
        include: {
            course: true,
        },
    });

    console.log("All teachers and their courses:\n", result);
}

main();