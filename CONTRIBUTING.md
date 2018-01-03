[![https://a11yproject.com](https://a11yproject.com/img/README-logo.svg)](https://a11yproject.com)
# Contributing to A11Y Project
Do you enjoy web accessibility and want to help? **Here's how.**

## Table of Contents

1. [Git and GitHub](#git-and-github)
1. [Pattern Submissions](#pattern-submissions)
1. [Writing Articles](#writing-articles)
1. [Adding Resources](#adding-resources)
1. [Adding Events](#adding-events)
1. [Reporting Issues](#reporting-issues)
1. [Stale Issues](#stale-issues)
1. [Key Branches](#key-branches)
1. [Build Process](#build-process)
1. [Pull Requests](#pull-requests)
1. [Labels](#labels)
1. [Set Up Locally](#to-set-up-locally)
1. [License](#license)

## Git and GitHub
The A11Y Project is an Open Source project. It uses [Git](https://git-scm.com/) and [GitHub](http://github.com/) to handle coordinating maintenance of the site and the publishing of new content and features.

People working on more sophisticated aspects of the site (new features, bug fixes, etc.) are expected to have at least some familiarity with version control, GitHub's key functionality, and using [feature branches to work locally](#set-up-locally).

If you are looking for a place to get started learning about Git and contributing to an Open Source project, [Egghead.io offers a great introductory course](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

## Pattern Submissions
If you'd like to submit a [Pattern](https://a11yproject.com/patterns) make sure to do the following:

1. [Make a CodePen](https://codepen.io/pen) (or use an equivalent service such as [JSFiddle](https://jsfiddle.net/) or [JSBin](https://jsbin.com/)). **Note**: Please try not to use preprocessing libraries ([Sass](http://sass-lang.com/), [Less](http://lesscss.org/), [HAML](http://haml.info/) etc.) if at all possible.
2. [Submit your pen to our Issue Tracker](https://github.com/a11yproject/a11yproject.com/issues/new) with the name of your pattern as the title.
3. Wait for the community to give you feedback and approval. **Note:** Keep the feedback and discussion to the pattern submitted and avoid discussing other patterns. Submit new patterns as separate Issues.
4. “Git” down and boogie

    ![Boogie dance.](http://bukk.it/gitdown.gif)

## Writing Articles
We have a [list of articles](https://github.com/a11yproject/a11yproject.com/issues/12) we'd love to see written. Have an idea for an article? We'd love to know what you want to contribute.

1. Search to make sure someone hasn't snagged the article already.
2. Claim an article by starting a new Issue with "Article: your title" as the Issue title. The final title can (or probably should) be different.
3. When you check&ndash;in, reference that Issue number in the commit, e.g., `re: #32`
4. Articles are written in plain text at a linkable location on the web. We recommend using GitHub's [gists](https://gist.github.com). Link us to your [gist](https://gist.github.com) in the [Issue field](https://github.com/a11yproject/a11yproject.com/issues) for your article and we'll be sure to clone and update our site to incorporate your work. When you are ready to submit the article via a Pull Request, we have a [sample post file](_posts/example-post.md) to get you started.

### Plain-text Workflow for Article Submission
1. Make a [gist](https://gist.github.com).
2. Start a conversation about it in an [Issue](https://github.com/a11yproject/a11yproject.com/issues).
3. Roll the article in yourself via a Pull Request (gist only) **or** ask someone to help you.

### Article Style Guide

Here are some suggestions and tips on writing your article:

- **Short** - Aim for a timed reading length of approximately two minutes.
- **Focused** - Keep it digestible and to a single topic. Articles that span multiple areas and topics are better broken up.
- **Accessible** - Strive to use plain language, avoid jargon if possible, and explain complicated concepts.

## Adding Resources

Find a great resource that you think will be useful to others?

- Add the URL and title to the [Resources](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/_data/resources.yml) page under the appropriate category.

### Writing in YAML

[YAML](http://yaml.org/) is a human-readable markup language that's good for writing structured data. Even if you've never written anything in a `.yml` file, it shouldn't be too hard to understand the structure of our site's content.

For example, here is an ordered list:

```yaml
- 'one'
- 'two'
- 'three'
```

Here is a dictionary, where each value has a name:

```yaml
  thing1: 'a string value'
  thing2: 2
  thing3: 3
```

And here is how we could make the value of `thing1` a list:

```yaml
thing1:
  - 'first'
  - 'second'
  - 'third'
```

YAML data is structured by spaces (you can not use tabs!), so an indented line means the content is nested within the parent. For more information, you can visit the [official YAML site](http://yaml.org/about.html), or check out this [cheatsheet](https://cheat.readthedocs.io/en/latest/yaml.html).  

## Adding Events
Have an accessibility focused event you would like to promote?  Whether it's in person or online, you have two way you can get your event added to the project. Either [create a new Issue](https://github.com/a11yproject/a11yproject.com/issues/new), or [edit the `events.yml` file](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/_data/events.yml) directly and submit a Pull Request.

You'll want to add the following information about your event:

- Event title
- Date of event
- A brief description
- Web address (URL) for more info
- Physical address of event (if applicable)
- Social Media Hashtag (if applicable)

## Reporting Issues
Notice something inaccurate? Noticed something inaccessible on this site? You think you can code something up better?

- File an [Issue](https://github.com/a11yproject/a11yproject.com/issues).
- Preface your Issue title as an:
    - `Inaccuracy` for incorrect or inaccurate information (e.g. "Inaccuracy: Visually hidden CSS missing property declaration")
    - `Inaccessibility` for an accessibility issue (e.g. "Inaccessibility: Low contrast link color")
    - `Bug` for site issues (e.g. "Bug: Link at archive not working") 

**Issues are not to be used for** free help on your website. Use [Stack Overflow](https://stackoverflow.com) for that.

## Stale Issues
An Issue is considered in a "stale" state when the following conditions are met:

- Last comment was made over one year ago
- No movement since
- Not an open question
- Someone has attempted to address the Issue, no comment from the author

When an Issue has become stale a project maintainer will close the Issue, leaving a note for the author to open a new Issue if so desired.

## Key Branches

- `gh-pages` is the [master branch](https://www.atlassian.com/git/tutorials/using-branches). This is the live website.

If you have a feature request, we suggest filing an Issue initially to discuss it. Once that feature has been accepted you'll can start coding to your heart's content. Start a separate branch and use the following naming convention for your [feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow):

- `feature/name_of_feature`

## Build Process
- In order to create a site build you'll need to make sure you've run through all the listed commands in the order they appear from our [`README.md`](https://github.com/a11yproject/a11yproject.com#local-development)
- CSS changes must be done in `.scss` files, never directly in the compiled CSS.

## Pull Requests

Filing a descriptive issue and assigning it to yourself before you send your request will help in get your commit accepted. It will provide a better understanding of what your request entails and why it was made. It also helps to link the Issue to the Pull Request and vice-versa (eg. "This Pull Request addresses Issue XX").

## Labels

Labels allow the project maintainers to quickly sort filter and site Issues and Pull Requests. They will be added and removed as needed.

## Set up Locally

You can take all the files of this site and run them just on your computer as if it were live online, only it's just on your machine. This is ideal for working on new features and verifying that fixes to issues work.

### Requirements

- [Jekyll](https://jekyllrb.com/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Git](https://git-scm.com/)

If you have installed [GitHub Desktop](https://desktop.github.com), Git was also installed automatically.

To copy the repository's files from here onto your computer and to view and serve those files locally, at your computer's command line type:

```bash
git clone https://github.com/a11yproject/a11yproject.com.git
cd a11yproject.com
script/bootstrap
script/server
```
Then open [http://localhost:4000](http://localhost:4000) in your browser.

## License

By contributing your code, you agree to license your contribution under the terms of the [APLv2](http://www.apache.org/licenses/LICENSE-2.0.html).
