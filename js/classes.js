class Month {
  constructor() {
    this.categories = [];
  }

  getCategory(categoryName) {
    return this.categories.find((cat) => cat.name === categoryName);
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

  getItemsInACategory(categoryName) {
    const category = this.getCategory(categoryName);
    return category.items
  }
}

