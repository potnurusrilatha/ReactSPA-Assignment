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
    new CoffeeItem("Espresso", "Coffee", "Hot", 2.5, "A strong and rich shot of coffee.", "../../assets/images/espresso.jpg"),
    new CoffeeItem("Cappuccino", "Coffee", "Hot", 3.5, "Espresso with steamed milk and foam.", "../../assets/images/cappuccino.jpg"),
    new CoffeeItem("Latte", "Coffee", "Hot", 4.0, "Smooth espresso with steamed milk.", "../../assets/images/latte.jpg"),
    new CoffeeItem("Americano", "Coffee", "Hot", 3.0, "Espresso with hot water.", "images/americano.jpg"),
    new CoffeeItem("Mocha", "Coffee", "Hot", 4.5, "Espresso with chocolate and steamed milk.", "images/mocha.jpg"),
    new CoffeeItem("Macchiato", "Coffee", "Hot", 3.5, "Espresso with a dollop of frothy milk.", "images/macchiato.jpg"),
    new CoffeeItem("Iced Coffee", "Cold Drinks", "Cold", 3.5, "Chilled brewed coffee served over ice.", "images/iced-coffee.jpg"),
    new CoffeeItem("Iced Latte", "Cold Drinks", "Cold", 4.0, "Iced coffee with milk.", "images/iced-latte.jpg"),
    new CoffeeItem("Tea", "Tea", "Hot", 2.5, "A variety of hot teas.", "images/indian-tea.jpg"),
    new CoffeeItem("Chai Latte", "Tea", "Hot", 4.0, "Spiced tea with steamed milk.", "images/chai-latte.jpg"),
    new CoffeeItem("Green Tea", "Tea", "Hot", 3.0, "A refreshing and healthy green tea.", "images/green-tea.jpg"),
    new CoffeeItem("Matcha Latte", "Tea", "Hot", 4.5, "Smooth matcha green tea with steamed milk.", "images/matcha-latte.jpg"),
    new CoffeeItem("Hot Chocolate", "Non-Coffee", "Hot", 3.5, "Rich and creamy hot chocolate.", "images/hot-chocolate.jpg"),
    new CoffeeItem("Caramel Frappuccino", "Cold Drinks", "Cold", 5.0, "Blended coffee with caramel and whipped cream.", "images/caramel-frappuccino.jpg"),
    new CoffeeItem("Strawberry Smoothie", "Cold Drinks", "Cold", 4.5, "Refreshing strawberry and yogurt smoothie.", "images/strawberry-smoothie.jpg"),
    new CoffeeItem("Blueberry Muffin", "Food", "Snack", 2.5, "Soft and delicious blueberry muffin.", "images/blueberry-muffin.jpg"),
    new CoffeeItem("Croissant", "Food", "Snack", 3.0, "Flaky and buttery croissant.", "images/croissant.jpg"),
    new CoffeeItem("Bagel with Cream Cheese", "Food", "Snack", 3.5, "Toasted bagel with creamy cheese.", "images/bagel.jpg")
];

export default coffeeMenu;