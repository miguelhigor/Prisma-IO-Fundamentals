import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const dataToCreate = {
        name: 'Node',
        duration: 100,
        description: 'NodeJS Course',
    };

    const result = await prisma.courses.create({
        data: dataToCreate,
    });

    console.log("New data entry on table 'courses':\n", result);
}

main();