<div align="center">
  <a href="https://github.com/appalaszynski/javascript-exercises">
    <img src="https://user-images.githubusercontent.com/35331661/37843001-f44658a4-2ec3-11e8-9779-974c4a0bac62.png" width="116px">
  </a>
  <br>
  <h1>JavaScript Exercises</h1>
  <p>
    <em>Collection of JavaScript exercises great for preparing for an interview</em>
  </p>
  <p>
    <a href="https://github.com/appalaszynski/javascript-exercises/commits/master">
      <img src="https://img.shields.io/github/last-commit/appalaszynski/javascript-exercises.svg" />
    </a>
  </p>
  <br>
  <br>
</div>

Series of interesting JavaScript exercises that I solve during my education. For each exercise I included several possible solutions. Thanks to [Jest](https://facebook.github.io/jest/) test framework You can easily check the correctness of Your solution.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Exercises](#exercises)

---

## Prerequisites

* [Node.js](https://nodejs.org)
* [NPM](https://github.com/npm/npm)
* [Jest](https://facebook.github.io/jest/)

---

## Installation

Clone the repo.

```bash
$ git clone https://github.com/appalaszynski/switch-gulp-to-webpack.git
```

Install Jest globally.

```bash
$ npm install -g jest
```

---

## Usage

Each exercise directory contains `index.js` file with exercise contents and `test.js` file with tests validating solution correctness.

### Running all tests

```bash
$ jest
```

### Running tests for specific exercise

To run test for specific exercise simply add its directory path to `jest` command, e.g.

```bash
$ jest exercises/ReverseString
```

You can also run Jest in watch mode by adding `--watch` flag.

---

## Exercises

- [Reverse String](https://github.com/appalaszynski/javascript-exercises/blob/master/exercises/ReverseString/index.js)
- [Palindrome](https://github.com/appalaszynski/javascript-exercises/blob/master/exercises/Palindrome/index.js)


