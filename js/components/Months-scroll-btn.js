import { months } from "../utils/constants.js";

// Gets current month that we are in right now 
export const getCurrentMonth = () => {
    const monthElement = document.getElementById('month')
    let date = new Date()
    let index = date.getMonth()
    monthElement.innerHTML = months[index]
    
}
// Function when next btn is pressed 
export const nextBtnPressed = () => {
    let index = getCurrentIndex();
    index = (index + 1) % months.length; // Wrap around to the beginning if end is reached
    updateMonth(index);
}
// Fucntion when previous btn is pressed 
export const previousBtnPressed = () => {
    let index = getCurrentIndex();
    index = (index - 1 + months.length) % months.length; // Wrap around to the end if beginning is reached
    updateMonth(index);
}

// Gets the current index # of the month that is currently displayed 
const getCurrentIndex = () => {
    const monthElement = document.getElementById('month');
    const currentMonth = monthElement.innerHTML.trim();
    return months.indexOf(currentMonth);
}

// Updates the the monthElement to display the new month
const updateMonth = (index) => {
    const monthElement = document.getElementById('month');
    monthElement.innerHTML = months[index];
}