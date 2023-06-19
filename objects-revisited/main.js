const business = {
  opens: '9am',
  closes: '5pm',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    'lawrence wang': {
      position: 'developer',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th']
    },
    lynn: {
      position:'clinician',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th']
    },
    cat: {
      position:'manager',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F']
    },
    ross: {
      position:'analyst',
      daysOfWeekWorking: ['T', 'W']
    }
  }
}

document.addEventListener('DOMContentLoaded', appStart)

function appStart(event) {
  addWeekends();
  for(const employee in business.employees) {
    business.employees[employee].fullTime = business.employees[employee].daysOfWeekWorking.length >= 5;
  }
   const y = addEmployees();
   //object keys only show 4 peopel because the API call is not compete yet, need to add code to delete only when API is complete
}

function addWeekends() {
  const weekends = ['Sa', 'Su']
  business.daysOpen.push(...weekends);
  for (const employee in business.employees) {
    business.employees[employee].daysOfWeekWorking.push(...weekends);
  }
}

function addEmployees() {
  const newJobs =['driver', 'IT', 'accountant', 'CEO']
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    const newEmployeesData = xhr.response
    for (let i = 0; i < 4 ; i++){
      business.employees[newEmployeesData[i].name] = {
        position: newJobs[i],
        daysOfWeekWorking: randomWorkWeekdays(),
        get fullTime () {
          return this.daysOfWeekWorking.length >= 5;
        }
      };
      business.totalEmployees++;
    }
  })
  xhr.send();
}

function randomWorkWeekdays () {
  const weekdaysOpen = ['M', 'T', 'W', 'Th', 'F'];
  // first get number of days
  const numOfDays = Math.floor(Math.random() * weekdaysOpen.length) + 1;
  // then get a list of random index
  const randomDaysIndex = [];
  let i = 0;
  while (i < numOfDays) {
    const randomNum = Math.floor(Math.random() * weekdaysOpen.length);
    // avoid duplicate indices
    if (!randomDaysIndex.includes(randomNum)) {
      randomDaysIndex.push(randomNum);
      i++;
    }
  }
// finally sort the index and pick the week days based off the index
// and sorted randomDays array
  const sortedRandomDaysIndex = randomDaysIndex.sort();
  const randomDays = [];
  for (let i = 0; i < numOfDays; i++) {
    randomDays.push(weekdaysOpen[sortedRandomDaysIndex[i]]);
  }

  return randomDays;
}

function deleteEmployee(employeeName) {
  if (business.employees.hasOwnProperty(employeeName)){
    delete business.employees[employeeName];
    business.totalEmployees --;
  }
}


// randomWorkWeekdays();
// addEmployees();
