function receivesAFunction(callback) {
    callback(); // Calls the provided function
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {}; // Returns a named function
  }
  
  function returnsAnAnonymousFunction() {
    return function () {}; // Returns an anonymous function
  }
  
  // Export functions for testing (if using Node.js environment)
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  