import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            course: {
                create: {
                    name: "Vue",
                    duration: 100,
                    description: "VueJS course",
                    teacher: {
                        create: {
                            name: "Allan Doe",
                        },
                    },
                },
            },
            module: {
                create: {
                    name: "Components",
                    description: "Components module",
                },
            },
        },
    });

    console.log("New module and course added and connected using a pivot table:\n", result);
}

main();