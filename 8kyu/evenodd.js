let even_or_odd = (number) =>{
  if (number%2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// One-line shorthand code for if-else statement.
// This is called the conditional operator
let even_or_odd2 = (number) =>{
  return number % 2 ? "Odd" : "Even";
}