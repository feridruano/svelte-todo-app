# Svelte TodoMVC

## Knowledge
 
 ### Arrow Functions vs Function
[Difference Between Arrow and Regular Functions](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)
[6 Ways to Declare Javascript Functions](https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/)

 **Arrow Functions**
 - Always implicitly inherit `this` context from enclosing scope. No self `this` binding occurs.
   - Equivalent to _this = this pattern.
 - Not hoisted or lifted to global or local scope. Therefore, cannot be accessed before initialization.
 - Cannot be used for Constructors.
 - No local arguments variable.
 - Implicit returns (i.e no return keyword)

**Regular Functions**
- Opposite of Arrow Functions

**Detached Functions**
A reference to a function within another scope. Regular functions may return undefined if referenced function needs to access values within it's original scope. Arrow functions can still become detached functions but always implicitly inherit `this` context to original scope.

### Difference Between Imports
`import { foo } from 'bar'`
- Imports named exports (i.e `foo`) from `bar`.

`import foo from 'bar'`
- Imports the default export from `foo`.

`import type {foo} from 'bar'`
- Imports a **type** `foo` from `bar` that is used by Typescript for type checking. The import type will not be included in complied code.

### Notable Notes
I constantly confuse parameter declarations with destructing in arrow functions, especially when an arrow function takes an arrow function as a parameter. Just comes down to recognizing the difference better.