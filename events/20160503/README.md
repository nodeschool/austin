## Browserify Adventure ##
Learn how to use [Broswerify] (http://browserify.org) through Node with the [browserify-adventure](https://github.com/substack/browserify-adventure) workshop.

## Setup ##

Be sure you've gone through the [initial setup found on the Austin NodeSchool website](http://nodeschool.io/austin/#getting-started), including installing Node, and making sure `npm` is available from the command line.

### Install the Workshop

Use `npm` to install the workshop globally. This will place the workshop binary in your `PATH` so that you can access it from the command line.

```
$ npm install -g browserify-adventure
```

For this workshop, you'll also need to install `browserify` globally (since it is used throughout the exercises):

```
$ npm install -g browserify
```

### Setup your Workspace

Create a new directory to do your workshop work in.  Let's call it "browserify".

```
$ mkdir browserify && cd browserify
```

## Workshoop Instructions

### 1. Select a problem to work on

With the workshop installed, run `browserify-adventure` to print a menu where you can select a problem to work on.

```
$ browserify-adventure
```

Problems are listed in rough order of difficulty. You are advised to complete them in order, as later problems will build on skills developed by solving previous problems.

### 2. Write your solution

Once you have selected a problem, the workshop will remember which problem you are working on. Using your preferred editor, simply create a file to write your solution in.

### 3. Test your solution

This workshop requires that you run your solution through `browserify` first, then pipe that output to the `browserify-adventure` workshop. Use the workshop's `run` command to test your solution. Your solution will be loaded and passed the problem input. This usually won't perform any validation, it will only show the program output.

```
$ browserify solution.js | browserify-adventure run
```

### 4. Verify your solution

This workshop requires that you run your solution through `browserify` first, then pipe that output to the `browserify-adventure` workshop. Using the workshop's `verify` command, your solution will be verified against the output of the "official" solution. If all of the output matches, then you have successfully solved the problem!

```
$ browserify solution.js | browserify-adventure verify
```

## Code Away! ##

Make you're way through the workshop an exercise at a time. Please ask someone if you get stuck, and/or [contact Austin NodeSchool](http://nodeschool.io/austin/#contact) if you need help outside of an event. Good luck and have fun!
