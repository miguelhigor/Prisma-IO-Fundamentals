import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const result = new Array();
    const take = 50;
    let skip = 0;

    let existsData = true;

    while (existsData) {
        const res = await prisma.courses.findMany({
            skip: skip,
            take: take,
        });

        skip += take;
        result.push(...res);

        if (!res.length)
            existsData = false;
    }

    console.log("All data in 'courses' using the pagination method:\n", result);
}

main();