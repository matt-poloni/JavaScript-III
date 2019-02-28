/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Unless bound to a different context, `this` always points to the window/console.
* 2. Implicit Binding: When using an object's method, `this` is automatically bound to the object calling the method.
* 3. New Binding: When constructing new objects, within the constructor function, `this` automatically refers to the object being constructed.
* 4. Explicit Binding: Using `call`, `apply`, or `bind` explicitly binds the `this` keyword to the context you specify.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function accomplishesNothing() {
  return this; //returns the Window object instead of accomplishesNothing()
}
console.log(accomplishesNothing());

// Principle 2

// code example for Implicit Binding
const exampleObj = {
  name: 'THE OBJECT',
  describe: function(descriptor) {
    console.log(`Here, we can access ${this.name}'s name because the binding is ${descriptor}.`)
  },
};
exampleObj.describe('implicit');

// Principle 3

// code example for New Binding
function Explainer(whatever) {
  this.whatever = whatever;
  this.explain = function() {
    console.log(`Because I used the 'this' keyword in the constructor, this object will say ${this.whatever} it is that I passed into it at the point of construction.`)
  }
}
const principleThree = new Explainer('WHATEVER');
principleThree.explain();
const nonsense = new Explainer('A*&^$#^*()Z');
nonsense.explain();

// Principle 4

// code example for Explicit Binding
function explicitExplanation() {
  console.log(`Think back to our first object. Even outside of it, we can still bind 'this' to ${this.name} by using 'call', 'apply', or 'bind'.`)
}
const principleFour = explicitExplanation.bind(exampleObj);
principleFour();