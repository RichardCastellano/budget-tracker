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

  deleteCategory(categoryName) {
    this.categories = this.categories.filter(cat => cat.name !== categoryName)
  }
  
  deleteItemInCategory(categoryName, itemName) {
    const category = this.getCategory(categoryName)
    category.items = this.getItemsInACategory(categoryName).filter(item => item.name !== itemName)
  }

  deletAllCategories() {
    this.categories = []
  }
  
  deleteAllItemsInACategory(categoryName) {
    const category = this.getCategory(categoryName)
    category.items = []
  }

  updateAmountValue(categoryName, itemName, newAmount) {
    const item = this.getSpecficItemInACategory(categoryName, itemName)
    item.amount = newAmount
  }
}


// handle errors like check for duplicates on categories and items


