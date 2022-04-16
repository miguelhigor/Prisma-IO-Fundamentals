import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            name: "Node",
        },
        data: {
            duration: 200,
        },
    });

    console.log("Updated duration field from 'courses' where course name is 'Node': \n", result);
}

main();