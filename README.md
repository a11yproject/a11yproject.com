![A11Y.](https://github.com/a11yproject/a11yproject.com/blob/main/src/img/social/og-image-home.png?raw=true)

# The A11Y Project

The Accessibility [(A11Y)](numeronyms) Project is an Open-source, community-driven effort to make digital accessibility easier.


## Contributing

You can learn about helping this project by reading our [Code of Conduct](coc), [Contributor documentation](contributing-guidelines), and [Content Style Guide](content-style-guide). Please familiarize yourself with them before submitting content.

This `README` is focused on the technical side of the project. If you are interested in contributing information like Posts or Resources, please refer to our [Contributing Guidelines](contributing-guidelines).


## Development

### Technology

The A11Y Project uses [Eleventy](11ty) to manage its content. Eleventy relies on [Markdown](markdown), [Sass](sass), [Nunjucks](nunjucks), and [JSON](json) to function.

It may be helpful to familiarize yourself with these technologies, depending on what you want to do. For more information, check our our [Contributor documentation](contributing-guidelines).

### Requirements

You'll need access to the following programs and technology in order to get the website running on your computer to work on:

1. A command line application such as Terminal.
    - If you want to learn more about working in the command line, Wes Bos offers [a great free course](terminal).
    - If you are using Windows, [Hyper](hyper) is a good, free command-line application you can download, install, and run.
1. [Git](git) version control and a [GitHub account](github).
    - You can check to see if Git is already installed on your computer by typing `git --version` into your command line application. If it is installed it will list the currently installed version (e.g. `git version 2.18.0`).
    - If you prefer to use a GUI to work with version control, GitHub offers a [free desktop app](github-app).
1. [Node.js](node), a programming environment powered by JavaScript.
    - You can check to see if Node.js is already installed on your computer by typing `node -v` into your command line application. If it is installed it will list the currently installed version (e.g. `v10.2.1`). The A11Y Project requires a minimum version of `10.14.2`.
    - It may also be helpful to use a program such as [nvm](nvm) to help manage your Node.js versions. This will ensure that the version of Node.js your computer uses to run various things won't conflict with an updated version.

### Installation

Once you have met [the prerequisites](#requirements), follow these steps to install the website on your computer:

1. Clone this repository by entering this command into your command line application: ` git clone https://github.com/a11yproject/a11yproject.com.git`. It will create a version controlled copy of the website in the directory you entered the command in.
1. Navigate into the project's [root directory](root) by typing `cd a11yproject.com` in your command line application.
1. Install the project's Node.js modules by typing `npm install` into your command line application. A list of these modules should be displayed after they are downloaded and installed.

### Running the website

After cloning and installing project Node.js modules, type `npm run a11yproject` into your command line application. This will tell Node.js to compile the project and turn it into a website.

Your command line application will then display some information about Jekyll, including a line that starts with `Local:`. You can copy the URL it points to (it should read something like [`http://localhost:3000`](localhost)) and paste it into a browser tab. This will load a local copy of the website that you can interact with to preview your changes.

You can also use the `External` URL to preview the local copy on another device connected to the same network, which helps you check to see how the site looks and functions on things like smartphones. This is done via [Browsersync](browsersync).

### Updating the website

Saving project files will make Node.js regenerate the website to reflect the changes you made. Your command line application will display some new messaging to reflect this, including any errors you might accidentally make. Don't worry! Since the site uses version control, you're not in danger of seriously breaking anything. If you fix the error, Node.js should continue to run.

Make sure you edit the files in the `src/` subdirectory. Any edits made in the `dist` subdirectory will be overwritten by the next change to any file in `src/` and all your hard work will be lost!

### Quitting

You can tell Node.js to stop running by pressing the <kbd>Control</kbd> and <kbd>C</kbd> keys at the same time in your command line application, or by closing the command line application window or tab.

## Troubleshooting

Please refer to our [Troubleshooting documentation](https://github.com/a11yproject/a11yproject.com/blob/main/TROUBLESHOOTING.md) for help with issues running the site.


[numeronyms]: https://a11yproject.com/posts/a11y-and-other-numeronyms/
[coc]: https://a11yproject.com/code-of-conduct/
[contributing-guidelines]: https://a11yproject.com/contributing-guidelines/
[content-style-guide]: https://a11yproject.com/content-style-guide/
[11ty]: https://www.11ty.io/
[markdown]: https://daringfireball.net/projects/markdown/syntax
[sass]: https://sass-lang.com/
[nunjucks]: https://mozilla.github.io/nunjucks/
[json]: https://www.json.org/
[terminal]: https://commandlinepoweruser.com/
[hyper]: https://hyper.is/
[git]: https://git-scm.com/
[github]: https://github.com/
[github-app]: https://desktop.github.com
[node]: https://nodejs.org/en/
[nvm]: https://github.com/creationix/nvm
[root]: https://en.m.wikipedia.org/wiki/Root_directory
[localhost]: http://localhost:3000
[browsersync]: https://www.browsersync.io/
