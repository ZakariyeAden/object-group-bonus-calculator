// array of employee objects
const employees = [
    {
        name: 'Atticus',
        employeeNumber: '2405',
        annualSalary: '47000',
        reviewRating: 3
    },
    {
        name: 'Jem',
        employeeNumber: '62347',
        annualSalary: '63500',
        reviewRating: 4
    },
    {
        name: 'Scout',
        employeeNumber: '6243',
        annualSalary: '74750',
        reviewRating: 5
    },
    {
        name: 'Robert',
        employeeNumber: '26835',
        annualSalary: '66000',
        reviewRating: 1
    }, {
        name: 'Mayella',
        employeeNumber: '89068',
        annualSalary: '35000',
        reviewRating: 1
    }
];

console.log('array of employee data: ', employees);


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
    // your logic here
    // how do we assign properties when pushing to an array?
    let newBonusPercentage;
    
    // test that employee.reviewRating works
    console.log(employee.reviewRating);
    // calculate bonus percentage so we can push it to our array object
    if (employee.reviewRating < 2) { // no bonus
      // employeeBonus.bonusPercentage = 0;
      console.log(employeeBonus.bonusPercentage)
        newBonusPercentage = 0;
        console.log('no bonus');
    } else if (employee.reviewRating === 3) { // should receive a base bonus of 4% of their base annual income.
      newBonusPercentage = .04
      console.log('should receive a base bonus of 4% of their base annual income.');
    } else if (employee.reviewRating === 4) { // should receive a base bonus of 6% of their base annual income.
      newBonusPercentage = .06  
      console.log('should receive a base bonus of 6% of their base annual income.');
    } else if (employee.reviewRating === 5) { // receive a base bonus of 10% of their base annual income.
      newBonusPercentage = .1   
      console.log('receive a base bonus of 10% of their base annual income.');
    } else if (employee.employeeNumber.length > 4) {
        // this means they have been with the company
        // for longer than 15 years, and should receive an additional 5%.
        newBonusPercentage = .05  
        console.log('for longer than 15 years, and should receive an additional 5%..');
    } else if (employee.annualSalary > 65000) { // they should have their bonus adjusted down 1%.
      // NOTE: this equation isn't working, find new solution
      newBonusPercentage = employee.annualSalary - .01
      console.log('they should have their bonus adjusted down 1%.');
    } else if (newBonusPercentage > .13 || newBonusPercentage < 0) { // No bonus can be above 13% or below 0% total.
      console.log('No bonus can be above 13% or below 0% total.');
    }


    let newTotalBonus = newBonusPercentage * employee.annualSalary

    // added Number to convert string values to number values
    totalCompensation = Number(employee.annualSalary) + Number(newTotalBonus);

    let employeeBonus = {
      name: employee.name,
      bonusPercentage: newBonusPercentage,
      // expected value for Atticus is 48,880
      totalCompensation: totalCompensation,
      totalBonus: newTotalBonus
  };
  console.log(employeeBonus);

    return employeeBonus;
}
calculateIndividualEmployeeBonus(employees[0]);
