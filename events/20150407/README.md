# Promise it won't hurt #

A Workshopper module that teaches you to use promises in javascript, [module github](https://github.com/stevekane/promise-it-wont-hurt).

Promises offer a very powerful abstraction for obtaining values asynchronously.
As javascript is a async-first language it is important to understand the options you have for handling asynchronicity.

You will learn the ins and outs of promises including error handling, value propagation, synchronous returns, and composition.

By the end of the workshop you will be comfortable using the [Q library](https://github.com/kriskowal/q) to work with promises AND writing your own functions that leverage promises to provide clean abstractions and error handling.

## Setup ##

Be sure you've gone through the
[initial setup found on the Austin NodeSchool website](http://nodeschool.io/austin/#getting-started),
including installing Node, and making sure `npm` is available from the command line.

## Installation & Update

Create a new directory to do your workshop work in.  Let's call it "promise-shop".
You will need to initialize npm in this repo and then use npm to install "q".

```
$ mkdir promise-shop && cd promise-shop
$ npm init
$ npm install q --save
$ npm install -g promise-it-wont-hurt@latest
```

**Note**: the workshop is being updated weekly. 
Please regularly rerun the above command to get the latest set of exercises.

## Usage Instructions

#### 1. Selecting a problem to work on

Once the workshop is installed, run `promise-it-wont-hurt` to print a menu
where you can select a problem to work on.

```
$ promise-it-wont-hurt
```

Problems are listed in rough order of difficulty. You are advised to complete them in order, as later problems
will build on skills developed by solving previous problems.

#### 2. Writing your solution

Once you have selected a problem, the workshop will remember which problem you are working on. 
Using your preferred editor, simply create a file to write your solution in.

#### 3. Testing your solution

Use the workshop's `run` command to point the workshop at your solution file. Your solution will loaded 
and passed the problem input. This usually won't perform any validation, it will only show the program output.

```
$ promise-it-wont-hurt run mysolution.js
```

#### 4. Verifying your solution

Your solution will be verified against the output of the 'official' solution. 
If all of the output matches, then you have successfully solved the problem!

```
$ promise-it-wont-hurt verify mysolution.js
```

## Code Away! ##

Make you're way through the workshop an exercise at a time. Please ask someone
if you get stuck, and/or
[contact Austin NodeSchool](http://nodeschool.io/austin/#contact) if you need help
outside of an event. Good luck and have fun!