export const createItemLine = () => {
    const itemInfo = document.createElement('div');
    const itemName = document.createElement('input');
    const itemAmount = document.createElement('input');
    itemInfo.setAttribute('class', 'item-info');
    itemName.setAttribute('class', 'item');
    itemAmount.setAttribute('class', 'amount');
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemAmount);
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
    categoryInfo.setAttribute('class', 'category-info')
    categoryInfo.appendChild(categoryName);
    categoryInfo.appendChild(addItemBtn);
    return categoryInfo;
}




