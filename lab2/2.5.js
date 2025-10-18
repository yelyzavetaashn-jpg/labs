const favoriteDishes = [
    { name: "Remy", dish: "Ratatouille" },
    { name: "Linguini", dish: "Spaghetti" },
    { name: "Colette", dish: "Ravioli" }
];

const findDishByName = (name) => {
    for (const record of favoriteDishes) {
        if (record.name === name) {
            return record.dish;
        }
    }
};

console.log(findDishByName("Colette"));



const dishes = {
    "Remy": "Ratatouille",
    "Linguini": "Spaghetti",
    "Colette": "Ravioli"
};

const getDish = (name) => {
    const dish = dishes[name];
    return dish;
};

console.log(getDish("Remy"));
