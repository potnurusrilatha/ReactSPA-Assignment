export const Brewpages=["Home", "Menu", "Products", "About Us"]

function CoffeeItem(name, category, type, price, description, image) {
    this.name = name;
    this.category = category;
    this.type = type;
    this.price = price;
    this.description = description;
    this.image = image;
}

export const coffeeMenu = [
    new CoffeeItem("Espresso", "Coffee", "Hot", 2.5, "A strong and rich shot of coffee.", "espresso.jpg"),
    new CoffeeItem("Cappuccino", "Coffee", "Hot", 3.5, "Espresso with steamed milk and foam.", "cappuccino.jpg"),
    new CoffeeItem("Latte", "Coffee", "Hot", 4.0, "Smooth espresso with steamed milk.", "latte.jpg"),
    new CoffeeItem("Americano", "Coffee", "Hot", 3.0, "Espresso with hot water.", "americano.jpg"),
    new CoffeeItem("Mocha", "Coffee", "Hot", 4.5, "Espresso with chocolate and steamed milk.", "mocha.jpg"),
    new CoffeeItem("Macchiato", "Coffee", "Hot", 3.5, "Espresso with a dollop of frothy milk.", "macchiato.jpg"),
    new CoffeeItem("Iced Coffee", "Cold Drinks", "Cold", 3.5, "Chilled brewed coffee served over ice.", "iced-coffee.jpg"),
    new CoffeeItem("Iced Latte", "Cold Drinks", "Cold", 4.0, "Iced coffee with milk.", "iced-latte.jpg"),
    new CoffeeItem("Tea", "Tea", "Hot", 2.5, "A variety of hot teas.", "indian-tea.jpg"),
    new CoffeeItem("Chai Latte", "Tea", "Hot", 4.0, "Spiced tea with steamed milk.", "chai-latte.jpg"),
    new CoffeeItem("Green Tea", "Tea", "Hot", 3.0, "A refreshing and healthy green tea.", "green-tea.jpg"),
    new CoffeeItem("Matcha Latte", "Tea", "Hot", 4.5, "Smooth matcha green tea with steamed milk.", "matcha-latte.jpg"),
    new CoffeeItem("Hot Chocolate", "Non-Coffee", "Hot", 3.5, "Rich and creamy hot chocolate.", "hot-chocolate.jpg"),
    new CoffeeItem("Caramel Frappuccino", "Cold Drinks", "Cold", 5.0, "Blended coffee with caramel and whipped cream.", "caramel-frappuccino.jpg"),
    new CoffeeItem("Strawberry Smoothie", "Cold Drinks", "Cold", 4.5, "Refreshing strawberry and yogurt smoothie.", "strawberry-smoothie.jpg"),
    new CoffeeItem("Blueberry Muffin", "Food", "Snack", 2.5, "Soft and delicious blueberry muffin.", "blueberry-muffin.jpg"),
    new CoffeeItem("Croissant", "Food", "Snack", 3.0, "Flaky and buttery croissant.", "croissant.jpg"),
    new CoffeeItem("Bagel with Cream Cheese", "Food", "Snack", 3.5, "Toasted bagel with creamy cheese.", "bagel.jpg")
];

export default coffeeMenu;