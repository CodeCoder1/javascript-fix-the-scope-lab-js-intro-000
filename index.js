var animal = 'dog';

function myAnimal() {
  return animal;
}


function yourAnimal() {
  var animal = 'cat';
  console.log('I think i\'ll put this ${animal} in the zoo');
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work+
  return aniaml;
}
yourAnimal  ();


function add2(n) {
  return n + 2;

  // Feel free to move things around!
  
}


var theFunk = funkyFunction ()
theFunk = "FUNKY!";

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

