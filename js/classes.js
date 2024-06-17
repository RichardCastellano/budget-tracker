class Month {
  constructor() {
    this.categories = [];
  }

  getCategory(categoryName) {
    return this.categories.find((cat) => cat.name === categoryName);
  }

  getItemsInACategory(categoryName) {
    const category = this.getCategory(categoryName);
    return category.items;
  }

  getSpecficItemInACategory(categoryName, itemName) {
     return this.getCategory(categoryName).items.find(item => item.name === itemName)
  }

  addCategory(categoryName) {
    const category = {
      name: categoryName,
      items: []
    }
    this.categories.push(category)
  }

  addItemToCategory(categoryName, itemName) {
    const item = {
      name: itemName,
      amount: 0,
    };
    const category = this.getCategory(categoryName);
    category.items.push(item);
  }
}


// add a way to remove categories and items 
// add a way to update value of amounts
// handle errors like check for duplicates on categories and items