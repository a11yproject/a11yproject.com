# Troubleshooting

Here are solutions to some common problems you may encounter working on the website.


## Node.js

First, check to see which version of [Node.js](https://nodejs.org/en/) you are using. Node.js may not be installed on your computer, so make sure it is installed before attempting any other solutions.

You can type `node -v` into your command line application to check which version of Node.js is present. The A11Y Project requires a minimum version of `10.14.2`. A too new version of Node.js may also not work, the same way a too old version won't.


## Node.js modules

Modules are collections of code that help to do one specific task. They are combined by Node.js to orchestrate more complicated tasks.

### Installing

The site will not run if you don't install the modules Node.js needs to build the website.

You can install the Node.js modules The A11Y Project needs to run by typing `npm install` into your command line application.

### Removing and reinstalling

Removing Node.js modules can sometimes be helpful when you want to force the entire site to be regenerated from a "cold start".

Try running this command: `rm -rf node_modules/ && npm install`. This will tell your command line application to delete your Node.js modules and reinstall a fresh copy. Be sure to type the `rm` command **exactly as described**, as it is a command that instantly and permanently deletes what you instruct it to.


## localhost

On a network, a localhost is a shorthand way for a computer to identify itself. Many web projects use localhost as a server when working, with a server being specialized kind of computer used to send website information to those who request it.

Sometimes another program will use the space on localhost that The A11Y Project tries to occupy, causing the project to be unable to run. This is like trying to call a phone number and getting a busy signal.

To fix this issue, try quitting your command line application and restarting it, then re-running `npm start` in the root directory of The A11Y Project. You may also need to reboot your computer.


## Other issues

Other issues about installing and running the website can be addressed in the site's [Issue Tracker](https://github.com/a11yproject/a11yproject.com/issues).
