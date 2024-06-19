import { Month } from "./classes.js";

const years = [
  2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
];

const months = [
  "Janurary",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
