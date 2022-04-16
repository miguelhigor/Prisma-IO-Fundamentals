import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.delete({
        where: {
            name: "Node"
        }
    });

    console.log("Deleted entry from 'courses' where course name is 'Node': \n", result);
}

main();