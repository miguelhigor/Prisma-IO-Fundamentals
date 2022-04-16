import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            fk_id_course: "<insert id from courses>",
            fk_id_module: "<insert id from modules>",
        },
    });

    console.log("New relation between modules and courses added using a pivot table:\n", result);
}

main();