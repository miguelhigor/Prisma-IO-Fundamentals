import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function logicOperators() {
    const result = await prisma.courses.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: "JS",
                    },
                },
                {
                    name: {
                        contains: "Elixir",
                    },
                },
            ],
            AND: {
                duration: 150,
            },
        },
    });

    console.log("These are the entries on 'courses' with 'JS' OR 'Elixir' in the 'name' field AND a duration equals to 150: \n", result);
}

logicOperators();


async function caseInsensitive() {
    const result = await prisma.courses.findMany({
        where: {
            name: {
                endsWith: "JS",
                mode: "insensitive",
            },
        },
    });

    console.log("These are the entries on 'courses' with 'JS' (case insensitive) in the 'name' field: \n", result);
}

caseInsensitive();
