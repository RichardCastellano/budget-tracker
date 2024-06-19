import {months, years} from '../utils/constants.js'

for (let i = 0; i < years.length; i++) {
  let year = years[i];
  for (let j = 0; j < months.length; j++) {
    let month = months[j];
    const selectTag = document.getElementById("month-dropdown");
    let optionTag = document.createElement("option");
    optionTag.textContent = `${month} ${year}`;
    selectTag.append(optionTag);
  }
}
