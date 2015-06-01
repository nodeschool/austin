# Learn You Mongo #

Learn how to use Mongo through Node with the [learnyoumongo](https://github.com/evanlucas/learnyoumongo) workshop.

## Setup ##

Be sure you've gone through the [initial setup found on the Austin NodeSchool website](http://nodeschool.io/austin/#getting-started), including installing Node, and making sure `npm` is available from the command line.

### Install the Workshop

Use `npm` to install the workshop globally. This will place the workshop binary in your `PATH` so that you can access it from the command line.

```
$ npm install -g learnyoumongo
```

### Setup your Workspace

Create a new directory to do your workshop work in.  Let's call it "learnyoumongo".

```
$ mkdir learnyoumongo && cd learnyoumongo
```

## Workshoop Instructions

### 1. Select a problem to work on

With the workshop installed, run `learnyoumongo` to print a menu where you can select a problem to work on.

```
$ learnyoumongo
```

Problems are listed in rough order of difficulty. You are advised to complete them in order, as later problems will build on skills developed by solving previous problems.

### 2. Write your solution

Once you have selected a problem, the workshop will remember which problem you are working on. Using your preferred editor, simply create a file to write your solution in.

### 3. Test your solution

Use the workshop's `run` command to point the workshop at your solution file. Your solution will loaded and passed the problem input. This usually won't perform any validation, it will only show the program output.

```
$ learnyoumongo run mysolution.js
```

### 4. Verify your solution

Your solution will be verified against the output of the 'official' solution. If all of the output matches, then you have successfully solved the problem!

```
$ learnyoumongo verify mysolution.js
```

## Code Away! ##

Make you're way through the workshop an exercise at a time. Please ask someone if you get stuck, and/or [contact Austin NodeSchool](http://nodeschool.io/austin/#contact) if you need help outside of an event. Good luck and have fun!
