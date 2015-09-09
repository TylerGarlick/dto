# DTO (Data Transfer Objects)

[![Build Status](https://travis-ci.org/TylerGarlick/dto.svg?branch=master)](https://travis-ci.org/TylerGarlick/dto) [![Code Climate](https://codeclimate.com/github/TylerGarlick/dto/badges/gpa.svg)](https://codeclimate.com/github/TylerGarlick/dto) [![Test Coverage](https://codeclimate.com/github/TylerGarlick/dto/badges/coverage.svg)](https://codeclimate.com/github/TylerGarlick/dto/coverage) [![npm version](https://badge.fury.io/js/dto.svg)](http://badge.fury.io/js/dto) [![Dependencies](https://david-dm.org/tylergarlick/dto.svg)](https://david-dm.org/tylergarlick/dto)

## Overview

This library was created to solve the problem of taking a data model from a datasource and needing to remove, add, merge, or translate the data model to a similar or completely different object. 

There are similar libraries in other languages (DataMapper, DTO(C#), etc). I could never find a solution that allowed me to quickly and easily utilize a couple of different approaches: *projection*, *translation*, and *merging*.

## Getting Started

### Installation

Installation is simple, use npm to install.  Right now, this is a node targeted project. If I find a good reason to use it on the browser i'll possibly browserify it.

```js
npm install dto --save
```

Thats it!


## Projection
There are two simple ways to project (like a SQL SELECT statement) or simplify an object. I found myself deleting the properties on the object, or using libraries such as lodash to restrict the output. I decided to use Lazy.js for performance reasons.

### Only

Given an array of property names, the resulting object will only contain the supplied properties.

**Example**

```js
let Dto = require('dto');
let model = { name: { first: 'Tyler', last: 'Garlick'}, age: 33, gender: 'Male'};

let result = Dto.take.only(model, ['age', 'gender']);
// result = { age: 33, gender: 'Male' }
```

### Without

Given an array of property names, the resulting object will remove any properties supplied.

**Example**

```js
let Dto = require('dto');
let model = { name: { first: 'Tyler', last: 'Garlick'}, age: 33, gender: 'Male'};

let result = Dto.take.without(model, ['name']);
// result = { age: 33, gender: 'Male' }
```




