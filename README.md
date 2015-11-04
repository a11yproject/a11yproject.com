[![http://a11yproject.com](http://a11yproject.com/img/README-logo.svg)](http://a11yproject.com)

A11Y Project
==========
Making *#A11Y* tips and tricks easier to digest and leveraging the community into the cloud. The Accessibility Project is a community&ndash;driven effort to make web accessibility easier.

This site is the product of a community of people who want to help to make web accessibility&hellip;well, accessible. Our goal is to accomplish this with 3 tenets in mind:

1. **Digestible.** Articles on accessibility tend to be in-depth. We feature short, digestible pieces of content.
2. **Up-to-date.** The project is hosted on Github so information can be current with the latest standards.
3. **Forgiving.** People make mistakes and web accessibility is hard, so we seek to be encouraging.

##Contributing
========
Everything you need to know about contributing to this project can be found in our [Contributor Docs](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTRIBUTING.md)

##Requirements
========
In order to contribute to the website&rsquo;s codebase, you&rsquo;ll need to know a bit about [Jekyll](https://github.com/mojombo/jekyll), [Compass](http://compass-style.org), [Sass](http://sass-lang.com), [Bootstrap](http://getbootstrap.com), [Bash](http://www.gnu.org/software/bash/manual/bashref.html#What-is-Bash_003f) and [Markdown](http://daringfireball.net/projects/markdown/). You'll also need to know how to install *[Ruby Gems](https://rvm.io)* and of course have *[Ruby](http://www.ruby-lang.org/en/downloads/)* installed on your machine.

###Gem Installation
Use the ``bundle`` command to install the necessary gems for the **A11Y Project**. (**Hint**: All the cool kids use [ruby version manager](https://rvm.io) to organize ``gemset`` dependencies):
If you don't have [bundler](http://gembundler.com) installed you'll need to run ``gem install bundler`` before using ``bundle``.

    $ bundle

##Under the Hood
========
###Markup
Posts are all written in [Markdown](http://daringfireball.net/projects/markdown).

###Stylesheets
Authored with [Compass](http://compass-style.org) and [Sass](http://sass-lang.com).

###Framework
The site is built on a customized [Compass](http://compass-style.org/) port of [Bootstrap](http://getbootstrap.com). [Jekyll](https://github.com/mojombo/jekyll) is used for templating and posts.

##Local Development
========
The following are tasks which can be run from your shell of choice. Some of us use [iTerm](http://iterm.sourceforge.net/downloads.shtml) for Mac but whatevs.

###Rake Commands
The following ``rake`` tasks are available and are used for testing the site locally, on your own machine (use `rake -T` to list them):

    rake build        # Build site with Jekyll
    rake check_links  # Check links for site already running on localhost:4000
    rake clean        # Clean up generated site
    rake server       # Start the server
    rake check        # Check if site will run on Github pages

**Local Server**

Trigger the local server by executing the ``rake server`` task. Your local copy will now be accessible at `http://localhost:4000`.
