import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.modules.create({
        data: {
            name: "Websockets",
            description: "Websockets 101",
            courses: {
                create: {
                    course: {
                        connect: {
                            name: "Node",
                        },
                    },
                },
            },
        },
    });

    console.log("New module added and connected to 'courses' using a pivot table:\n", result);
}

main();