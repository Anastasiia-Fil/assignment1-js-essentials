
"use strict";

// 1) Sample staff data 

const staffList = [
  { name: "Ava Kim", position: "Manager", salary: 72000 },
  { name: "Noah Patel", position: "Developer", salary: 68000 },
  { name: "Mia Chen", position: "Designer", salary: 64000 },
  { name: "Liam Smith", position: "Support", salary: 52000 },
  { name: "Sophia Brown", position: "HR", salary: 59000 }
];

// 2) Toggle states
let nameAscending = true;
let salaryAscending = true;

// 3) HTML elements
const tableBody = document.getElementById("staffTableBody");
const sortNameBtn = document.getElementById("sortNameBtn");
const sortSalaryBtn = document.getElementById("sortSalaryBtn");

// 4) Start: show the table
displayTable(staffList);

// 5) Button events
sortNameBtn.addEventListener("click", sortByName);
sortSalaryBtn.addEventListener("click", sortBySalary);


// Functions


function displayTable(list) {
  tableBody.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const person = list[i];

    const row = document.createElement("tr");

    row.innerHTML =
      "<td>" + person.name + "</td>" +
      "<td>" + person.position + "</td>" +
      "<td>" + person.salary.toLocaleString() + "</td>";

    tableBody.appendChild(row);
  }
}


function sortByName() {
  
  const sortedList = staffList.slice();

  sortedList.sort(function (a, b) {
    if (nameAscending) {
      return a.name.localeCompare(b.name); // A -> Z
    } else {
      return b.name.localeCompare(a.name); // Z -> A
    }
  });

  nameAscending = !nameAscending;

  sortNameBtn.textContent = nameAscending
    ? "Sort by Name (A → Z)"
    : "Sort by Name (Z → A)";

  displayTable(sortedList);
}

function sortBySalary() {
  const sortedList = staffList.slice();

  sortedList.sort(function (a, b) {
    if (salaryAscending) {
      return a.salary - b.salary; // Low -> High
    } else {
      return b.salary - a.salary; // High -> Low
    }
  });

  salaryAscending = !salaryAscending;

  sortSalaryBtn.textContent = salaryAscending
    ? "Sort by Salary (Low → High)"
    : "Sort by Salary (High → Low)";

  displayTable(sortedList);
}

//FOOTER
(function () {
  const now = new Date();

  const year = document.getElementById("year");
  const today = document.getElementById("today");

  if (year !== null) {
    year.textContent = now.getFullYear();
  }

  if (today !== null) {
    today.textContent = now.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
})();