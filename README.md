simpleA11Y
==========

Making #A11Y tips and tricks easier to digest and leveraging the community into the cloud.

## Gems

Run the following to install the necessary gems:

    gem install jekyll rdiscount compass

## Markup

Posts are all written in [Markdown](http://daringfireball.net/projects/markdown/).

## Stylesheets

The site is built on a customized [Compass](http://compass-style.org/) port of [Twitter Bootstrap](http://twitter.github.com/bootstrap).

## Rake tasks

The following tasks are available (use `rake -T` to list them):

    rake build        # Build site with Jekyll
    rake check_links  # Check links for site already running on localhost:4000
    rake clean        # Clean up generated site
    rake server       # Start server with --auto
    rake check        # Check if site will run on Github pages