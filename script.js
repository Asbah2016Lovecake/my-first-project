// STRING
let companyName = "Google";

// NUMBER
let totalApplications = 12;

// BOOLEAN
let isLoggedIn = true;

// NULL
let selectedStatus = null;

// UNDEFINED
let userName;

// DISPLAY VALUES
console.log(companyName);
console.log(totalApplications);
console.log(isLoggedIn);
console.log(selectedStatus);
console.log(userName);
// ARRAY
let companies = ["Google", "Microsoft", "Amazon", "Apple"];

// DISPLAY THE ARRAY
console.log(companies);

// ACCESS INDIVIDUAL ITEMS
console.log(companies[0]);
console.log(companies[1]);

// ADD A NEW COMPANY
companies.push("Netflix");

console.log(companies);

// REMOVE THE LAST COMPANY
companies.pop();

console.log(companies);

// COUNT COMPANIES
console.log(companies.length);
// ARRAY
let companiesList = ["Google", "Microsoft", "Amazon", "Apple"];

// DISPLAY THE ARRAY
console.log(companiesList);

// ACCESS INDIVIDUAL ITEMS
console.log(companies[0]);
console.log(companies[1]);

// ADD A NEW COMPANY
companies.push("Netflix");

console.log(companies);

// REMOVE THE LAST COMPANY
companies.pop();

console.log(companies);

// COUNT COMPANIES
console.log(companies.length);
let application = {
    company: "Google",
    position: "Web Developer",
    status: "Interview",
    date: "2026-11-07"
};

console.log(application);

console.log(application.company);
console.log(application.position);
console.log(application.status);
let applications = [
    {
        company: "Google",
        position: "Web Developer",
        status: "Interview"
    },
    {
        company: "Microsoft",
        position: "Designer",
        status: "Applied"
    },
    {
        company: "Amazon",
        position: "Developer",
        status: "Rejected"
    }
];

console.log(applications);
console.log(applications[0].company);
console.log(applications[1].status);
// FUNCTION
function greetUser() {
    console.log("Welcome to Career Compass!");
}

// CALL THE FUNCTION
greetUser();


// FUNCTION WITH PARAMETERS
function welcomeCompany(company) {
    console.log("Welcome, " + company);
}

welcomeCompany("Google");
welcomeCompany("Microsoft");


// FUNCTION THAT RETURNS A VALUE
function addApplications(first, second) {
    return first + second;
}

let total = addApplications(5, 7);

console.log(total);
// FOR LOOP
for (let i = 0; i < 5; i++) {
    console.log("Application number: " + i);
}


// FOR...OF LOOP

for (let company of companiesList) {
    console.log(company);
}
// SELECT THE BUTTON
const testButton = document.getElementById("testButton");

if (testButton) {
    testButton.addEventListener("click", function() {
        alert("JavaScript is working!");
    });
} else {
    console.log("Button not found!");
}
// ADD APPLICATION FORM
// JOB TRACKER APPLICATION

const applicationForm = document.getElementById("addApplicationForm");
const tableBody = document.getElementById("applicationsTableBody");
const statusFilter = document.getElementById("statusFilter");

const storageKey = "jobTrackerApplications";


// CREATE A TABLE ROW

function createApplicationRow(application) {

    const newRow = document.createElement("tr");

    const companyCell = document.createElement("td");
    companyCell.textContent = application.company;

    const positionCell = document.createElement("td");
    positionCell.textContent = application.position;

    const dateCell = document.createElement("td");
    dateCell.textContent = application.date;

    const statusCell = document.createElement("td");
    statusCell.textContent = application.status;

    const actionCell = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        newRow.remove();
        saveApplications();
    });

    actionCell.appendChild(deleteButton);

    newRow.appendChild(companyCell);
    newRow.appendChild(positionCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(statusCell);
    newRow.appendChild(actionCell);

    return newRow;
}


// SAVE APPLICATIONS

function saveApplications() {

    const rows = tableBody.querySelectorAll("tr");

    const savedApplications = Array.from(rows).map(row => ({
        company: row.cells[0].textContent,
        position: row.cells[1].textContent,
        date: row.cells[2].textContent,
        status: row.cells[3].textContent
    }));

    localStorage.setItem(storageKey, JSON.stringify(savedApplications));
}


// LOAD APPLICATIONS

function loadApplications() {

    const savedData = localStorage.getItem(storageKey);

    if (savedData !== null) {

        const savedApplications = JSON.parse(savedData);

        tableBody.innerHTML = "";

        for (let application of savedApplications) {
            tableBody.appendChild(createApplicationRow(application));
        }

    } else {

        const existingRows = tableBody.querySelectorAll("tr");

        const initialApplications = Array.from(existingRows).map(row => ({
            company: row.cells[0].textContent,
            position: row.cells[1].textContent,
            date: row.cells[2].textContent,
            status: row.cells[3].textContent
        }));

        tableBody.innerHTML = "";

        for (let application of initialApplications) {
            tableBody.appendChild(createApplicationRow(application));
        }

        saveApplications();
    }

}


// ADD APPLICATION

applicationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const application = {
        company: document.getElementById("company").value,
        position: document.getElementById("position").value,
        date: document.getElementById("date").value,
        status: document.getElementById("status").value
    };

    tableBody.appendChild(createApplicationRow(application));

    saveApplications();

    applicationForm.reset();

});


// FILTER APPLICATIONS

statusFilter.addEventListener("change", function() {

    const rows = tableBody.querySelectorAll("tr");

    for (let row of rows) {

        const status = row.cells[3].textContent;

        if (statusFilter.value === "All" || status === statusFilter.value) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    }

});


// START THE APPLICATION

loadApplications();