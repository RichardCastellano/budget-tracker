import { createCategorySection, createItemLine } from "./utils/functions.js";

document.addEventListener("DOMContentLoaded", () => {
    const addGroupBtn = document.getElementById('add-group-btn');
    const body = document.getElementById('body');
    
    addGroupBtn.addEventListener('click', () => {
        const categorySection = createCategorySection();
        body.insertBefore(categorySection, addGroupBtn);
    });
    
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-item-btn')) {
            const itemLine = createItemLine();
            const categoryInfo = event.target.closest('.category-info');
            const addItemBtn = event.target.closest('.add-item-btn')
            categoryInfo.insertBefore(itemLine, addItemBtn);
        }
    });
});


