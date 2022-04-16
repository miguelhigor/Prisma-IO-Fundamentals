import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const dataToCreate = {
        name: "Node",
        duration: 333,
        description: "Curso de NodeJS",
        teacher: {
            connectOrCreate: {
                where: {
                    name: "Jane Doe",
                },
                create: {
                    name: "Jane Doe",
                },
            },

        },
    };

    const result = await prisma.courses.create({
        data: dataToCreate,
    });

    console.log("New data entry on table 'courses':\n", result);
}

main();