import { inputs } from "../utils/constants.js";
import { startingBudgetTemplate } from "../utils/constants.js";

export const userInput = () => {
  Array.from(inputs).forEach((input) => {
    input.addEventListener("input", () => {
      const inputValue = input.value;
      return inputValue;
    });
  });
};

export const postTemplate = () => {
  for (let i = 0; i < startingBudgetTemplate.length; i++) {
    const category = startingBudgetTemplate[i].name;
    const bodyTag = document.getElementById("body");
    const divtag = document.createElement("div");
    const inputTag = document.createElement("input");
    const unOrderedList = document.createElement("ul");
    inputTag.value = category;
    divtag.append(inputTag);
    bodyTag.append(divtag);
    divtag.append(unOrderedList);
    for (let j = 0; j < startingBudgetTemplate[i].items.length; j++) {
      const item = startingBudgetTemplate[i].items[j].name;
      const listItem = document.createElement("li");
      const inputTag2 = document.createElement("input");
      inputTag2.value = item;
      listItem.append(inputTag2);
      unOrderedList.append(listItem);
    }
  }
};
