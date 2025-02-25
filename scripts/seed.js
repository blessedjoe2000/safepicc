const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    const categories = [
      {
        name: "Diabetics",
      },
      {
        name: "Fitness",
      },
      {
        name: "Others",
      },
    ];

    for (const category of categories) {
      await database.category.create({
        data: {
          name: category.name,
        },
      });
    }

    console.log("seeding successful");
  } catch (error) {
    console.log("an error occured while seeding", error);
  } finally {
    await database.$disconnect();
  }
}

main();
