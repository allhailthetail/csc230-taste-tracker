//console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
console.log("#1 - No Output");
console.log();
let favoriteFoods = ["Pizza", "Chicken Sandwich", "Hamburger", "Soup", "Salad", "Ramen", "Steak"];


// 2. Loop through the list and print: "One of my favorite foods is ______."
console.log("#2 - Print favorite foods");
for (i = 0; i < favoriteFoods.length; ++i) {
    console.log("One of my favorite foods is", favoriteFoods[i]);
}

// I discovered that breaks between log outputs are easy enough...
console.log();

// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
console.log("#3 - Print my food rating");
console.log("My #1 favorite food is", favoriteFoods[0]);
console.log("My #2 favorite food is", favoriteFoods[2]);
console.log("My #3 favorite food is", favoriteFoods[4]);
console.log("My #4 favorite food is", favoriteFoods[6]);
console.log("My #5 favorite food is", favoriteFoods[3]);
console.log("My #6 favorite food is", favoriteFoods[5]);
console.log("My #7 favorite food is", favoriteFoods[1]);

console.log();

// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
    console.log("Have you ever tried", foodName, "?");
    console.log("I always recommend", foodName, "to friends.");
    console.log("Trust me -", foodName, "is delicious.");
}

// 4b. Call the function at least 3 times
console.log("#4b - Print 3 recommendations");
printFoodRecommendation("Pizza");
console.log();
printFoodRecommendation("Steak");
console.log();
printFoodRecommendation("Ramen");

console.log();

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.

console.log("#5 - Foods Containing \"a\"");
for (let i = 0; i < friendFavorites.length; i++) {
    // Lowercase covers cases like Apple, Aardvark, Anteater, Apricot
    if (friendFavorites[i].toLowerCase().includes("a")) {
        console.log(friendFavorites[i]); // Ensure there's a semicolon here
    }
}

// 6. Store the result in an array called foodsWithA. Print out the array.
console.log("#6 - store \"a\" matches in foodsWithA");

let foodsWithA = [];

console.log("Storing Foods with A in array:");
for (let i = 0; i < friendFavorites.length; i++) {
    // Lowercase covers cases like Apple, Aardvark, Anteater, Apricot
    if (friendFavorites[i].toLowerCase().includes("a")) {
        foodsWithA.push(friendFavorites[i]);
    }
}

// Print the array
for (i = 0; i < foodsWithA.length; ++i) {
    console.log("Match \"a\":", foodsWithA[i]);
}


console.log();

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
console.log("#7 - longFoodNames > 6 char");

let longFoodNames = [];

for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length > 6) {
        longFoodNames.push(friendFavorites[i]);
    }
}

// Print the array
for (i = 0; i < foodsWithA.length; ++i) {
    console.log("Match len > 6:", longFoodNames[i]);
}

console.log();

// 8. Create another array shortFoodNames for foods 6 characters or shorter.
console.log("#8 - shortFoodNames <= 6 char");

let shortFoodNames = [];

for (i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length <= 6) {
        shortFoodNames.push(friendFavorites[i]);
    }
}

// Print the array
for (i = 0; i < shortFoodNames.length; ++i) {
    console.log("Match len <= 6:", shortFoodNames[i]);
}

console.log();

// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log("#9 - Conditional - ID which array is longer");

if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
    console.log("There are more short-named foods.");
} else {
    console.log("There are just as many long-named foods as short-named foods");    // Don't forget the edge case!
}

console.log();

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
console.log("#10 - Print longest food name & length");

// Blindly assign first val... (technique works well in my C++ course...)
let longest = longFoodNames[0];

// Well, we know the longest name will be in the longFoodNames Array:
for (i = 1; i < longFoodNames.length; i++) {
    if (longFoodNames[i].length > longest.length) {
        // If length of current is longer, reassign to longest var...
        longest = longFoodNames[i];
    }
}

console.log("The longest food name in the list is:", longest, "with", longest.length, "characters");

// ? Spring Rolls and Clam Chowder both have 11/12 (spaces exclusive/inclusive) characters in them.
//   There's a tie condition in the result, so I just returned the first...
