import { createCategorySection, createItemLine } from "./utils/btn-functions.js";
import { nextBtnPressed, previousBtnPressed, getCurrentMonth} from "./components/Months-scroll-btn.js";

document.addEventListener("DOMContentLoaded", () => {

    // DOM constants
    const addGroupBtn = document.getElementById('add-group-btn');
    const budgetPlanning = document.getElementById('budget-planning');
    const nextBtn = document.getElementById('next-btn');
    const previousBtn = document.getElementById('previous-btn')
    
    // Add group btn functionality 
    addGroupBtn.addEventListener('click', () => {
        const categorySection = createCategorySection();
        budgetPlanning.insertBefore(categorySection, addGroupBtn);
    });
    
    // Add item btn functionality
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-item-btn')) {
            const itemLine = createItemLine();
            const categoryInfo = event.target.closest('.category-info');
            const addItemBtn = event.target.closest('.add-item-btn')
            categoryInfo.insertBefore(itemLine, addItemBtn);
        }
    });
    
    // Next and previous button pressing functionality 
    getCurrentMonth()
    nextBtn.addEventListener('click', nextBtnPressed)
    previousBtn.addEventListener('click', previousBtnPressed)
    
});


