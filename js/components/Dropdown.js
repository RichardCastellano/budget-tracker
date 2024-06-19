import { months, years } from "../utils/constants.js";

export const initializeDropdown = () => {
  const selectTag = document.getElementById("dropdown");
  for (const year of years) {
    for (let i = 0; i < months.length; i++) {
      const month = months[i];
      const optionTag = document.createElement("option");
      optionTag.value = `${year}-${(i + 1).toString().padStart(2, "0")}`;
      optionTag.textContent = `${month} ${year}`;
      selectTag.append(optionTag);
    }
  }
};
