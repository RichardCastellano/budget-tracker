const createItemLine = () => {
    const itemInfo = document.createElement('div');
    const itemName = document.createElement('input');
    const itemAmount = document.createElement('input');
    itemInfo.setAttribute('class', 'item-info');
    itemName.setAttribute('class', 'item');
    itemAmount.setAttribute('class', 'amount');
    itemInfo.append(itemName);
    itemInfo.append(itemAmount);
    return itemInfo;
}

const createAddItemBtn = () => {
    const addItemBtn = document.createElement('button');
    addItemBtn.setAttribute('class', 'add-item-btn');
    addItemBtn.textContent = 'Add Item';
    return addItemBtn;
}

export const createCategorySection = () => {
    const categoryInfo = document.createElement('div');
    const categoryName = document.createElement('input');
    const addItemBtn = createAddItemBtn();
    categoryInfo.append(categoryName);
    categoryInfo.append(addItemBtn);
    return categoryInfo;
}


