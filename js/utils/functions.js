const createAddItemBtn = () => {
    const addItemBtn = document.createElement('button');
    addItemBtn.setAttribute('class', 'add-item-btn');
    addItemBtn.textContent = 'Add Item';
    return addItemBtn;
}

export const createItemLine = () => {
    const itemInfo = document.createElement('div');
    const itemName = document.createElement('input');
    const itemAmount = document.createElement('input');
    const span = document.createElement('span')
    itemInfo.setAttribute('class', 'item-info');
    itemName.setAttribute('class', 'item');
    itemAmount.setAttribute('class', 'amount');
    span.textContent = '$'
    span.appendChild(itemAmount);
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(span)
    return itemInfo;
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




