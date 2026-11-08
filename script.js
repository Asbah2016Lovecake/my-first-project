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
const applicationForm = document.getElementById("addApplicationForm");
const tableBody = document.getElementById("applicationsTableBody");

applicationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // GET FORM VALUES
    const company = document.getElementById("company").value;
    const position = document.getElementById("position").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    // CREATE A NEW TABLE ROW
    const newRow = document.createElement("tr");

    // ADD CELLS
    newRow.innerHTML = `
        <td>${company}</td>
        <td>${position}</td>
        <td>${date}</td>
        <td>${status}</td>
    `;

    // ADD ROW TO TABLE
    tableBody.appendChild(newRow);

    // CLEAR FORM
    applicationForm.reset();

});