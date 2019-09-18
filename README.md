[![The A11Y Project logo. An abstract human silhouette with outstretched arms centered in a dark blue circle.](http://a11yproject.com/img/README-logo.svg)](http://a11yproject.com)

# The A11Y Project

The Accessibility [(A11Y)](https://a11yproject.com/posts/a11y-and-other-numeronyms/) Project is a community-driven effort to make web accessibility easier. We do this by leveraging a worldwide community of developer knowledge.

The A11Y Project is guided by three principles:

1. **Digestible.** Articles on accessibility tend to be in-depth, sometimes to their detriment. We prefer to feature short, digestible pieces of content.
1. **Up-to-date.** We strive to keep information current with the latest standards and the realities of real-world technology support.
1. **Forgiving.** People make mistakes and web accessibility can be difficult, so we seek to be encouraging.


## Contributing

You can learn about helping this project by reading our [Code of Conduct](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CODE_OF_CONDUCT.md), [Contributor documentation](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTRIBUTING.md), and [Content Style Guide](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTENT_STYLE_GUIDE.md). Please familiarize yourself with them before submitting content.


## Local development

### Requirements

In order to get the website running locally on your computer, you'll need access to the following programs and technology:

1. A command line application such as Terminal.
1. [Git](https://git-scm.com/) version control and a [GitHub account](https://github.com/).
    - You can check to see if Git is already installed on your computer by typing `git --version` into your command line application. If it is installed it will list the currently installed version (e.g. `git version 2.18.0`).
    - If you prefer to use a GUI to work with version control, GitHub offers a [free desktop app](https://desktop.github.com).
1. The [Ruby](https://www.ruby-lang.org/) programming language.
    - You can check to see if Ruby is already installed on your computer by typing `ruby -v` into your command line application. If it is installed it will list the currently installed version (e.g. `ruby 2.4.0p0 (2016-12-24 revision 57164) [x86_64-darwin17]`).
    - It may also be helpful to use [rbenv](https://github.com/rbenv/rbenv), a command line program that helps manage your Ruby versions.
1. [bundler](https://bundler.io/), a command line application that helps manage [Ruby Gems](https://teamtreehouse.com/library/what-are-ruby-gems).

### Technology

The A11Y Project uses [Jekyll](https://jekyllrb.com/) to manage its content. Jekyll relies on [Markdown](https://daringfireball.net/projects/markdown/syntax), [Sass](https://sass-lang.com/), and [YAML](http://yaml.org/) to function. It may be helpful to familiarize yourself with these technologies, depending on what you want to do. For more information, check our our [Contributor documentation](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTRIBUTING.md).

### Installation

Once you have met [the prerequisites](#requirements), follow these steps to install the website on your computer:

1. [Fork the repository](https://help.github.com/en/articles/fork-a-repo) to create a copy of the project you can work with.
1. Clone a copy of the repository to your computer by entering this command into your command line application: `git clone https://github.com/your_github_username/a11yproject.com.git`, where `your_github_username` corresponds to the username you use to log into the site (for example, our username is `a11yproject`). This will create a version controlled copy of the website in the directory you entered the command in.
1. Navigate into the project's [root directory](https://en.m.wikipedia.org/wiki/Root_directory) by typing `cd a11yproject.com` in your command line application.
1. Install the project's Ruby Gems by typing `bundle install` into your command line application. A list of Ruby Gems will be displayed after they are downloaded and installed.

### Running the website

After cloning and installing project Ruby Gems, type `jekyll serve` into your command line application. This will tell Jekyll to compile the project and turn it into a website.

Your command line application will then display some information about Jekyll, including a line about `Server address:`. You can copy the URL it points (it should read something like `http://127.0.0.1:4000`) to and paste it into a browser tab. This will load a local copy of the website that you can interact with to preview your changes.

Saving project files will make Jekyll regenerate the website to reflect the changes you made. Your command line application will display some new messaging to reflect this, including any errors you might accidentally make. Don't worry! Since the site uses version control, you're not in danger of seriously breaking anything. If you fix the error, Jekyll should continue to run.

You can tell Jekyll to stop running by pressing the `Control` and `C` keys at the same time in your command line application.

### Troubleshooting

If you are experiencing Ruby issues that prevent you from compiling the website, try this command instead: `bundle exec jekyll serve`. This will tell bundler to execute the command instead of Ruby.

If `jekyll serve` was the last command you typed into your command line application, you can press the up arrow on your keyboard to bring it back, then hit `Enter` to run it again. This can sometimes be helpful when you want to force the entire site to be regenerated from a "cold start".

Other issues about installing and running the website can be addressed in the site's [Issue Tracker](https://github.com/a11yproject/a11yproject.com/issues).
