# Aquis Frontend Interviews

This mono-repo contains problems that can be used in the live coding portion of Aquis Frontend team technical interviews.

## Pre Interview Setup

1. Get the interview laptop
2. If repo isn't present clone it
3. Checkout and pull latest `main` branch
4. Install dependencies in each folder
5. Ensure there are no staged/unstaged changes e.g. answers from last interview
6. Check apps are working:

- `cd lodash && npm t`
- `cd ../react && npm run dev`
- `cd ../styling && npm run dev`

7. Check any desired extensions e.g. Prettier are installed and working

## Apps

### Lodash

Tests intermediate/advanced JavaScript knowledge.
Requires candidate to implement a lodash/underscore like functions:

- **memoize**: function to create a memoized function
- **throttle**: function to create a throttled function

These functions have a similar implementation so you should pick one of the two for the candidate to implement.

The `once.js` function can be used as an example if the candidate is struggling or unfamiliar with the concept of closures.

As extra credit the candidate can be asked to implement additional tests.

#### Running tests

- check the `test.js` files to ensure the tests are not skipped or marked as todo.
- `npm test`

### React

Tests basic React knowledge.
Requires candidate to refactor a form into multiple sections.

Ideally the candidate will quickly complete the task and also perform some smart refactorings.

#### Running the app

- `npm run dev`

### Styling

Tests intermediate CSS knowledge.
Requires a candidate to create a grid of images.

#### Running the app

- `npm run dev`
