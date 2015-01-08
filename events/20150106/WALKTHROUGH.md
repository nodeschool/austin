# Intro to WebGL #

The Intro to WebGL NodeSchool workshop provides an introduction to WebGL via the
`three.js` node module. This workshop is different from the other NodeSchool
workshops in that there is no validation of the problems. You are still given
exercises to complete, but you validate them yourself, visually.

## Setup ##

Install the `introtowebgl` workshop:

`$ npm install -g introtowebgl`

## Launch the workshop ##

To launch the `introtowebgl` workshop, enter the command:

`$ introtowebgl`

You can then select the first problem to work through.

## Run the web application ##

Since this workshop covers WebGL, you'll need to run the code provided via a
web browser. The creator of the `introtowebgl` workshop provided some assets which
can be used to complete the exercises.

### Change directories to `introtowebgl/assets`

Change directories to the location of the `assets` directory within the
`introtowebgl` module:

`$ cd introtowebgl/assets`

#### Finding the `introtowebgl` module ####

If you are unsure where you've installed the `introtowebgl` module, you can simply
install it to your current directory by issuing the command:

`$ npm install introtowebgl`

Then change directories locally to:

`$ cd node_modules/introtowebgl/assets`

### Start the web app ###

There are multiple ways of running static files. One node module which allows us
to do this is the `node-static` module. If you'd like to use this module, install
it via the command:

`$ npm install -g node-static`

Then from the assets/&lt;app name&gt; directory (for instance, `assets/BoilerplateApp`),
issue the command:

`$ static`

To view the page, browse to http://127.0.0.1:8080/index.htm

## Code Away! ##

Make you're way through the workshop an exercise at a time. Please ask someone
if you get stuck. Good luck and have fun!
