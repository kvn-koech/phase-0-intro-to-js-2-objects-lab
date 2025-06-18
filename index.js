// Write your solution in this file!

const employee = {
  name: 'Sam',
  streetAddress: '11 Broadway'
};

//updateEmployeeWithKeyAndValue()

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value

  };
}

//destructivelyUpdateEmployeeWithKeyAndValue()

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
};

// deleteFromEmployeeByKey()

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
};

// destructivelyDeleteFromEmployeeByKey()

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
};
