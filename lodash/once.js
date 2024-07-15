/**
 * IGNORE THE CODE BELOW UNLESS YOU NEED A HINT
 * The function below shows an example of closure in JavaScript.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * [Scroll down for details]
 * 






























 * 
 * 
 * 
 * 



 */

/**
 * Creates a function that invokes `func` only once.
 *
 * @example
 * const initialiseSomething = () => {
 *  console.log('Doing one time setup, only run this once per user session')
 * }
 *
 * const initOnce = once(initialiseSomething);
 * initOnce() // logs the message
 * initOnce() // <does nothing in any subsequent call>
 *
 *
 * @param {Function} func The function to restrict to a single invocation.
 * @returns {Function} Returns the new restricted function.
 */
export const once = (func) => {
  let wasCalled = false; //tracks if function has been called

  return (...args) => {
    // returned function has access to wasCalled and func due to closure
    // the returned function retains access to wasCalled even after the function finishes executing
    // it's not possible for any other code to modify wasCalled
    if (!wasCalled) {
      wasCalled = true;
      return func(...args);
    }
  };
};

/**
 * Outer Function (once): The once function takes another function func as an argument. This is the function that you want to ensure is only called once.
* State Preservation: Inside once, a variable wasCalled is declared and initialized to false. This variable is used to track whether func has been called. Since wasCalled is defined in the outer function (once), it's not accessible from outside, making it a private state.

Inner Function: The once function returns a new function that takes any number of arguments (...args). This inner function has access to wasCalled and func due to closures.

Closure in Action: When the returned function is called for the first time, it checks if wasCalled is false. Since it is, it sets wasCalled to true and then calls func with all provided arguments. On subsequent calls, since wasCalled is now true, the condition fails, and func is not called again.

Memory Retention: The key aspect here is that the returned function retains access to wasCalled even after the once function has finished executing. This retention is possible because of closure, which essentially "closes over" the environment in which it was created, keeping alive all the variables needed by the function.

Privacy and Encapsulation: The wasCalled variable acts as a private state for the returned function. It cannot be accessed or modified from outside, demonstrating how closures can be used to encapsulate state within a function, providing privacy.
 */
