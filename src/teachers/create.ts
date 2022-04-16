import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.teachers.create({
        data: {
            name: "John Doe",
        },
    });

    console.log("New data entry on table 'teachers':\n", result);
}

main();