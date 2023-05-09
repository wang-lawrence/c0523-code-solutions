const student = {
  firstName: 'Lawrence',
  lastName: 'Wang',
  age: 31,
}

const fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName)

student.liveInIrvine = false
student.previousOccupation = 'Actuary'

console.log('value of student.liveInIrvine: ', student.liveInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation)

const vehicle = {
  make: 'Toyota',
  model: 'RAV4',
  year: 2005,
}

vehicle["color"] = 'Silver'
vehicle["isConvertible"] = false

console.log('value of vehicle["color"]: ', vehicle['color'])
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible'])
console.log('value of vehicle: ', vehicle)

const pet = {
  name: 'Lakitu',
  type: 'Hedgehog',
}

delete pet.name
delete pet.type
console.log('value of pet: ', pet)
