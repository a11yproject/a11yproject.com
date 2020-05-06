[![The A11Y Project logo. An abstract human silhouette with outstretched arms centered in a dark blue circle.](http://a11yproject.com/img/README-logo.svg)](http://a11yproject.com)

# The A11Y Project

The Accessibility [(A11Y)](https://a11yproject.com/posts/a11y-and-other-numeronyms/) Project is an Open-source, community-driven effort to make digital accessibility easier. We do this by leveraging a worldwide community of developer knowledge.

The A11Y Project is guided by three principles:

1. **Digestible.** Articles on accessibility tend to be in-depth, sometimes to their detriment. We prefer to feature short, digestible pieces of content.
1. **Up-to-date.** We strive to keep information current with the latest standards and the realities of real-world technology support.
1. **Forgiving.** People make mistakes and digital accessibility can be difficult, so we seek to be encouraging.


## Contributing

You can learn about helping this project by reading our [Contributor documentation](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTRIBUTING.md) and [Content Style Guide](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTENT_STYLE_GUIDE.md). Please familiarize yourself with them before submitting content.


## Development

### Technology

The A11Y Project uses [Eleventy](https://www.11ty.io/) to manage its content. Eleventy relies on [Markdown](https://daringfireball.net/projects/markdown/syntax), [Sass](https://sass-lang.com/), [Nunjucks](https://mozilla.github.io/nunjucks/), and [JSON](https://www.json.org/) to function.

It may be helpful to familiarize yourself with these technologies, depending on what you want to do. For more information, check our our [Contributor documentation](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTRIBUTING.md).

### Requirements

You'll need access to the following programs and technology in order to get the website running on your computer to work on:

1. A command line application such as Terminal.
    - If you want to learn more about working in the command line, Wes Bos offers [a great free course](https://commandlinepoweruser.com/).
    - If you are using Windows, [Hyper](https://hyper.is/) is a good, free command-line application you can download, install, and run.
1. [Git](https://git-scm.com/) version control and a [GitHub account](https://github.com/).
    - You can check to see if Git is already installed on your computer by typing `git --version` into your command line application. If it is installed it will list the currently installed version (e.g. `git version 2.18.0`).
    - If you prefer to use a GUI to work with version control, GitHub offers a [free desktop app](https://desktop.github.com).
1. [Node.js](https://nodejs.org/en/), a programming environment powered by JavaScript.
    - You can check to see if Node.js is already installed on your computer by typing `node -v` into your command line application. If it is installed it will list the currently installed version (e.g. `v10.2.1`). The A11Y Project requires a minimum version of `10.14.2`.
    - It may also be helpful to use a program such as [nvm](https://github.com/creationix/nvm) to help manage your Node.js versions. This will ensure that the version of Node.js your computer uses to run various things won't conflict with an updated version.

### Installation

Once you have met [the prerequisites](#requirements), follow these steps to install the website on your computer:

1. Clone this repository by entering this command into your command line application: `https://github.com/a11yproject/a11yproject.com.git`. It will create a version controlled copy of the website in the directory you entered the command in.
1. Navigate into the project's [root directory](https://en.m.wikipedia.org/wiki/Root_directory) by typing `cd a11yproject.com` in your command line application.
1. Install the project's Node.js modules by typing `npm install` into your command line application. A list of these modules should be displayed after they are downloaded and installed.

### Running the website

After cloning and installing project Node.js modules, type `npm run a11yproject` into your command line application. This will tell Node.js to compile the project and turn it into a website.

Your command line application will then display some information about Jekyll, including a line that starts with `Local:`. You can copy the URL it points to (it should read something like `http://localhost:3000`) and paste it into a browser tab. This will load a local copy of the website that you can interact with to preview your changes.

You can also use the `External` URL to preview the local copy on another device connected to the same network, which helps you check to see how the site looks and functions on things like smartphones. This is done via [Browsersync](https://www.browsersync.io/).

Saving project files will make Node.js regenerate the website to reflect the changes you made. Your command line application will display some new messaging to reflect this, including any errors you might accidentally make. Don't worry! Since the site uses version control, you're not in danger of seriously breaking anything. If you fix the error, Node.js should continue to run.

You can tell Node.js to stop running by pressing the `Control` and `C` keys at the same time in your command line application, or by closing the command line application window or tab.

### Troubleshooting

If you are experiencing issues that prevent you from compiling the website, try running this command: `rm -rf node_modules/ && npm install`. This will tell your command line application to delete your Node.js modules and reinstall a fresh copy. Be sure to type the `rm` command exactly as described, as it is a command that instantly and permanently deletes what you instruct it to.

Removing Node.js modules can sometimes be helpful when you want to force the entire site to be regenerated from a "cold start".

Other issues about installing and running the website can be addressed in the site's [Issue Tracker](https://github.com/a11yproject/a11yproject.com/issues).
