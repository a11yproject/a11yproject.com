# Contributing to The A11Y Project

Want to help? Here's how. Please be sure to check our [Code of Conduct](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CODE_OF_CONDUCT.md) and [Content Style Guide](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTENT_STYLE_GUIDE.md) before contributing. Questions or concerns about contributing can be addressed in the site's [Issue Tracker](https://github.com/a11yproject/a11yproject.com/issues).


## Table of Contents

1. [About this site](#about-this-site)
    - [Git and GitHub](#git-and-github)
    - [Build process](#build-process)
    - [Important branches](#important-branches)
    - [Editing files](#editing-files)
1. [Submitting content](#submitting-content)
    - [Content style guide](#content-style-guide)
    - [Articles](#articles)
    - [Events](#events)
    - [Patterns](#patterns)
    - [Resources](#resources)
    - [Promotions, partnership deals, and SEO scams](#promotions-partnership-deals-and-seo-scams)
    - [Rejection](#rejection)
1. [Fixing things](#fixing-things)
    - [Reporting Issues](#reporting-issues)
    - [Submitting Pull Requests](#submitting-pull-requests)
    - [Stale Issues and Pull Requests](#stale-issues-and-pull-requests)
    - [Labels](#labels)
    - [Updating Articles](#updating-articles)
1. [License](#license)


## About this site

Following is information about how the site operates. Instructions on how to get the site running locally on your computer can be found in the [`README`](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/README.md).

### Git and GitHub
The A11Y Project is an [Open Source](https://en.m.wikipedia.org/wiki/Open-source_software) project. It uses [Git](https://git-scm.com/) and [GitHub](https://github.com/) to handle publishing new content and features, as well as coordinating maintenance.

People working on more sophisticated aspects of the site (new features, bug fixes, etc.) are expected to have at least some familiarity with version control, GitHub's key functionality, and [using feature branches to work locally](#set-up-locally).

If you are looking for a place to get started learning about Git and contributing to an Open Source project, [Egghead.io offers a great introductory course](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

### Build process
This project uses [Jekyll](https://jekyllrb.com/) to convert project files into a website that a browser can read and display. You'll need to make sure you've run all the commands in our [`README`](https://github.com/a11yproject/a11yproject.com#local-development) to get Jekyll working.

Any changes you save will cause the local version of the site to recompile. You can then refresh the browser tab that has your local instance of the site open to preview your edits.

### Important branches

`gh-pages` is the [production branch](https://www.atlassian.com/git/tutorials/using-branches). This is the live website.

If you have a feature request, we suggest first [filing an Issue](https://github.com/a11yproject/a11yproject.com/issues/new) to discuss it (please read [how to report an issue first](#reporting-issues)). Once that feature has been approved you can start coding! Create a new [feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) from `gh-pages`, and name it something that references the feature you'll be working on. For example a feature to increase the site's type size could be: `increase-font-size`.

A list of [all active branches are available here](https://github.com/a11yproject/a11yproject.com/branches).

### Editing files

This site uses specific kinds of files to help run the site efficiently. [Jekyll](https://jekyllrb.com/) will take these files and compile them into HTML, CSS, and other browser-friendly code.

Please make all edits in these files, and **not** the compiled code. If you edit the compiled code it will be overwritten the next time any file is saved and all your hard work will be lost!

Some of the main files this site uses are:

#### Markdown

[Markdown](https://daringfireball.net/projects/markdown/syntax) is a lightweight markup language that makes writing easier. We use it to organize our blog posts, as well as our main site pages. It uses `.md` files and compiles into HTML.

#### Sass

[Syntactically Awesome Style Sheets (Sass)](https://sass-lang.com/) is an extension of the CSS language that adds many helpful features. Using it helps keep our site's visual presentation consistent. It uses `.scss` files and compiles into CSS.

#### YAML

[YAML Ain't Markup Language (YAML)](http://yaml.org/) is a human-readable markup language that's good for writing structured data. This structured data is used throughout the site as a way to keep information both consistent and human-readable. It uses `.yml` files.


## Submitting content

As we are an Open Source project, The A11Y Project tries to only promote content that is free, or has a low barrier to entry. We're not too keen on partnership deals or promotions.

### Content style guide

The A11Y Project has a [Style Guide](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTENT_STYLE_GUIDE.md) to help our content have a consistent voice and tone. Please take a moment to familiarize yourself with it.

### Articles

#### Pitching

Have an idea for an article? We'd love to know what you want to contribute!

1. Search to make sure someone hasn't claimed the article already.
1. Claim an article by starting a new Issue with "Article: Your title" as the Issue title. This will help us keep track of who is working on what. The final, published title can be different from the Issue name.

We also have a [list of articles](https://github.com/a11yproject/a11yproject.com/issues/12) we'd love to see written.

#### Writing

Articles are written using [Markdown](#markdown), using a special formatting technique called [front matter](https://jekyllrb.com/docs/frontmatter/). Jekyll uses front matter information to create things like author attribution, categories, and page layout.

To get started writing an article, [create a feature branch](#important-branches) and create a new Markdown file in the [`_posts` directory](https://github.com/a11yproject/a11yproject.com/tree/gh-pages/_posts). The Markdown's file name should reflect the intended publishing date and the title of the article. For example, a post about accessible typography may have a filename along the lines of `2018-09-12-accessible-typography.md`

Copying [our example post](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/_posts/example-post.md), then updating its filename and front matter to match your article can be an easy way to help ensure everything is formatted properly.

#### Submitting

Once you are satisfied with your article's content, [submit a Pull Request](#submitting-pull-requests) so it can be reviewed. Reviews will be conducted using [GitHub's review tools](https://github.com/features/code-review/). Project maintainers may request additional updates for clarification or technical accuracy.

Be sure to also add yourself to [`authors.yml`](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/_data/authors.yml) so you can get credit for your work!

Once both the project maintainers and author are satisfied with the article, it will be merged by a project maintainer and published automatically.

### Events

Have an accessibility-themed event you would like to promote? There are two ways you can get your event added to the project: Either [create a new event Issue](https://github.com/a11yproject/a11yproject.com/issues/new?template=request-to-add-an-event.md), or [edit the `events.yml` file](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/_data/events.yml) directly and submit a Pull Request.

Events can either be Regional (in-person), or Webinars (online). You'll want to add the following information about your event:

- Event title.
- A brief description (2-3 sentences).
- Web address (URL) for more info.
- Event type (Regional or Webinar or both).
- Social Media Hashtag (if applicable).
- Date the event is occurring (yyyy-mm-dd).
- Physical address of event (if applicable).
- An optional link to a mapping service such as Google Maps that uses the supplied physical address.

### Patterns

If you'd like to submit a [Pattern](https://a11yproject.com/patterns) make sure to do the following:

1. [Make a CodePen](https://codepen.io/pen) (or use an equivalent service such as [JSFiddle](https://jsfiddle.net/) or [JSBin](https://jsbin.com/)). Please try not to use preprocessing libraries ([Sass](http://sass-lang.com/), [Less](http://lesscss.org/), [HAML](http://haml.info/), etc.) if at all possible—this helps keep the barrier for entry lower, as well as ensuring your code is future-proof.
1. [Submit your CodePen to our Issue Tracker](https://github.com/a11yproject/a11yproject.com/issues/new) with the name of your pattern as the title.
1. Discuss community feedback. Please keep the feedback and discussion relevant to the pattern submitted. Submit new patterns as separate Issues, and discuss them in their respective threads.
1. When feedback is concluded, the pattern will be added to the site by project maintainers.

### Resources

Did you create or find a great accessibility-related resource that you think other people would find useful? Add it to the [Resources](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/_data/resources.yml) file under the appropriate category. Please be sure to include the resource's title, description, and a URL where it can be accessed.

### Promotions, partnership deals, and SEO scams

We are not interested in quid pro quo schemes to boost your site's SEO ranking. We are also not interested in partnership or affiliate linking programs.

Acceptance of content suggestions such as resources are weighed on the quality of the actual content, the accessibility of the site it is hosted on, the organization's status in the industry, and the organization's mission.

### Rejection

Project maintainers may elect to not accept your submitted content if they feel it is not in line with the site's goals. This will be handled on a case-by-case basis.

## Fixing things

### Reporting Issues

Have you noticed something inaccurate or inaccessible? You can help make it better!

1. File an [Issue](https://github.com/a11yproject/a11yproject.com/issues/new?template=a11yproject-com-bug-report.md).
1. Preface your Issue title as an:
    - `Inaccuracy` for incorrect or inaccurate information (e.g. "Inaccuracy: Visually hidden CSS missing property declaration").
    - `Inaccessibility` for an accessibility issue (e.g. "Inaccessibility: Low contrast link color").
    - `Bug` for site issues (e.g. "Bug: Link at archive not working").

**Issues are not to be used for free accessibility help**. Project maintainers may close reported Issues at their discretion.

### Submitting Pull Requests

Creating a descriptive [Issue](https://github.com/a11yproject/a11yproject.com/issues/new/choose) and assigning it to yourself before you send your Pull Request will help get it accepted. It will provide a better understanding of what your request entails and why it was made. It also helps to link the Issue to the Pull Request and vice-versa (eg. "This Pull Request addresses Issue XX").

Project maintainers may reject Pull Requests at their discretion.

When submitting your Pull Request, please include the text "closes" or "fixes" and then the issue number.
For example:
> Fixes #101.
This will help us automatically close the issue upon merging the Pull Request!

### Stale Issues and Pull Requests

Project maintainers will close Issues and Pull Requests if they become stale, leaving a note for the author as to why. This keeps our Issue tracker and code work clean and up-to-date, and helps project maintainers focus their attention where it is needed.

#### Stale Issues

An Issue is considered to be in a "stale" state when any of the following conditions are met:

- The last comment was made over six months ago.
- There has been no activity since.
- The question isn't open.
- Someone has attempted to address the Issue, no with no followup participation from the author.

#### Stale Pull Requests

A Pull Request (PR) is considered to be in a "stale" state when the following conditions are met:

- The last comment was made over six months ago.
- There has been no activity since.
- Someone has attempted to move the PR along with no followup from the author.

### Labels

[Labels](https://github.com/a11yproject/a11yproject.com/labels) allow the project maintainers to quickly sort filter and site [Issues](#reporting-issues) and [Pull Requests](#submitting-pull-requests). They will be added and removed as needed.

### Updating Articles

When updating articles, leave the original publish date and author as-is. Add the following to the front matter:

```
updated_by: editor_name
last_updated: 2019-##-##
```

## License

By contributing your code, you agree to license your contribution under the terms of the [APLv2](http://www.apache.org/licenses/LICENSE-2.0.html).
