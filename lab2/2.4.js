function fn() {
    const obj1 = { name: "Twilight Sparkle" };
    let obj2 = { name: "Rainbow Dash" };

    obj1.name = "Fluttershy";
    obj2.name = "Pinkie Pie";

    
    obj2 = { name: "Rarity" };

    console.log(obj1);
    console.log(obj2);
}
fn();

const createUser = (name, city) => ({ name, city });
console.log(createUser('Princess Celestia', 'Canterlot'));
