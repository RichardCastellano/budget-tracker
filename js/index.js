import { initializeDropdown } from "./components/dropdown.js";
import { userInput, postTemplate } from "./components/BudgetTemplate.js";
import { startingBudgetTemplate } from "./utils/constants.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeDropdown();
  userInput()
  postTemplate()
});

