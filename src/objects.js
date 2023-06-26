const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  };

};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
 return object[property];

  };


const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
  
};

const isOver65 = person => {
  return person.age >65;
};

const getAges = people => {
return people.map(people => people.age);
};

const findByName = (name, people) => {
 return people.find(people => people.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  let sum = 0;
  const count = people.length;

  for (let i = 0; i < count; i++) {
    sum += people[i].age;
  }

  const average = sum / count;
  return average;
  };

const createTalkingPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
    introduce: function(friendName) {
      return 'Hi ' + friendName + ', my name is ' + this.name + ' and I am ' + this.age + '!';
    }
  };

  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
