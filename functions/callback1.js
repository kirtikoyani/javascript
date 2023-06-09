///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
  };

  const upperFirstWord = function (str) {
    const [first,second, ...others] = str.split(' ');
    return [first.toUpperCase(),second.repeat(2), ...others].join(' ');
  };

  // Higher-order function
  const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
  };

  transformer('JavaScript is the best!', upperFirstWord);
  transformer('JavaScript is the best!', oneWord);