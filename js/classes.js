class Month {
  constructor() {
    this.categories = [
      {
        name: "Income",
        items: [
          { name: "Paycheck 1", amount: 0 },
          { name: "Paycheck 2", amount: 0 },
        ],
      },
      {
        name: "Savings",
        items: [{ name: "Emergency Fund", amount: 0 }],
      },
      {
        name: "Housing",
        items: [
          { name: "Mortgage/Rent", amount: 0 },
          { name: "Natural Gas", amount: 0 },
          { name: "Electricity", amount: 0 },
          { name: "Internet", amount: 0 },
        ],
      },
      {
        name: "Transportation",
        items: [{ name: "Gas", amount: 0 }],
      },
      {
        name: "Food",
        items: [{ name: "Groceries", amount: 0 }],
      },
      {
        name: "Personal",
        items: [
          { name: "Phone", amount: 0 },
          { name: "Spotify", amount: 0 },
          { name: "Netflix", amount: 0 },
        ],
      },
      {
        name: "Lifestyle",
        items: [
          { name: "Clothes", amount: 0 },
          { name: "Pet Care", amount: 0 },
        ],
      },
      {
        name: "Insurance",
        items: [
          { name: "Auto Insurance", amount: 0 },
          { name: "Home Insurance", amount: 0 },
          { name: "Life Insurance", amount: 0 },
        ],
      },
    ];
  }

  getCategory(categoryName) {
    return this.categories.find((cat) => cat.name === categoryName);
  }

  getItemsInACategory(categoryName) {
    const category = this.getCategory(categoryName);
    return category.items;
  }

  getSpecficItemInACategory(categoryName, itemName) {
    return this.getCategory(categoryName).items.find(
      (item) => item.name === itemName
    );
  }

  addCategory(categoryName) {
    const category = {
      name: categoryName,
      items: [],
    };
    this.categories.push(category);
  }

  addItemToCategory(categoryName, itemName) {
    const item = {
      name: itemName,
      amount: 0,
    };
    const category = this.getCategory(categoryName);
    category.items.push(item);
  }

  deleteCategory(categoryName) {
    this.categories = this.categories.filter(
      (cat) => cat.name !== categoryName
    );
  }

  deleteItemInCategory(categoryName, itemName) {
    const category = this.getCategory(categoryName);
    category.items = this.getItemsInACategory(categoryName).filter(
      (item) => item.name !== itemName
    );
  }

  deletAllCategories() {
    this.categories = [];
  }

  deleteAllItemsInACategory(categoryName) {
    const category = this.getCategory(categoryName);
    category.items = [];
  }

  updateAmountValue(categoryName, itemName, newAmount) {
    const item = this.getSpecficItemInACategory(categoryName, itemName);
    item.amount = newAmount;
  }
}

// handle errors like check for duplicates on categories and items
let june = new Month();
console.log(june);
