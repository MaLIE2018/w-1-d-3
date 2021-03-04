  // comment 
  //console.log("hello world");

  const name = "max";
  console.log(name);
  let surname = 'Yaremoko';
  let age = 25;
  let isApproved = true;
  let firstName = undefined;
  let isSelected = null;

  let person = {
      name: 'Tetiana',
      age: 25,
  };
  //Dor Notation

  person.name = 'John';

  // Bracket Notation

  let selection = 'name';
  person[selection] = 'mary';
  person['name'] = 'Mary';

  person['surname'] = 'yakomoto';

  let selectColors = ['red', 'blue'];

  selectColors[2] = 'green';

  console.log(selectColors.length);

  selectColors.push('green');

  console.log(person.name);


  function greet() {
      console.log('Hello World');
  }

  greet();

  function square(number) {
      return number * number;
  }

  let result = square(3);
  console.log(result)