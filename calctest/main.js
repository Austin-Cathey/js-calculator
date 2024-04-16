let people = [
    { name: 'Autumn', city: 'Durham' },
    { name: 'Parker', city: 'Raleigh' },
    { name: 'Kerry', city: 'Durham' }
  ]
  
  findPeopleByCity('Durham', people)
  // [
  //   {name: "Autumn", city: "Durham"},
  //   {name: "Kerry", city: "Durham"},
  // ]
  
  findPeopleByCity('Raleigh', people)
  // [{name: "Parker", city: "Raleigh"}]

  for (let citizens of people) {
    findPeopleByCity = city.Durham
  }

  function findPeopleByCity ('Durham', people)