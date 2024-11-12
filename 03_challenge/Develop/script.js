// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  let numberOfEmployees = [];
  const employeeInquiry = true;

  while (employeeInquiry) {
    let firstName = window.prompt("What is the employee's first name?");
    let lastName = window.prompt("What is the employee's last name?");
    let salary = window.prompt("What is the employee's salary?"); //'100'
 
    if (isNaN(salary)) {
      salary = 0;
    }

    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary) //100.00
    };
numberOfEmployees.push(newEmployee)
    employeeInquiry = window.confirm("Would you like to add another employee?");
    
    }

  
  return numberOfEmployees;
} 

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
  employeesArray.forEach(employee => {
    totalSalary = totalSalary + employee.salary;
  });
  const avgSalary = totalSalary / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length}
     employee(s) is $${avgSalary.toFixed(2)}`);
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const calcRandom = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[calcRandom];
  console.log(`"Congratualations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!"`);
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);