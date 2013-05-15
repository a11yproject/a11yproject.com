[![http://a11yproject.com](http://a11yproject.com/img/README-logo.svg)](http://a11yproject.com)
# Contributing to A11Y Project
Do you enjoy web accessibility and want to help? **Here's how you can help.**

## Writing articles
We have a list of articles we'd love to see written. Have an idea for an article? We'd love to know what you want to contribute.

1. Search to make sure someone hasn't snagged the article already.
2. Claim an article by starting a new issue with "Article: your title" as the issue title. The final title can (or probably should) be different.
3. When you check&ndash;in, reference that issue number in the commit, e.g., `re: #32`
4. Articles can either be submitted via a pull request or written in plain text at a linkable location on the web. We recommend using GitHub's [gists](https://gist.github.com) (but [OK So Clap](http://oksoclap.com/) is another option if gists aren't your thing). Link us to your [gist](https://gist.github.com) (or your [clap](http://oksoclap.com/)) in the [issue field](https://github.com/a11yproject/a11yproject.com/issues) for your article and we'll be sure to clone and update our site accordingly with your masterpiece. If you are submitting the article via pull request, we have a lovely [sample post file](_posts/example-post.md) to get you started. 

### Plain-text Workflow for Article Submission
1. Make a [gist](https://gist.github.com) or a [clap](http://oksoclap.com/)
2. Start a conversation about it in an [issue](https://github.com/a11yproject/a11yproject.com/issues)
3. Roll the article in yourself via a pull request (gist only) **OR** ask someone to help you.

### Article style guide

Here are some suggestions and tips on writing your article:

- Short - Aim for a timed reading length of approximately two minutes.
- Focused - Keep it digestable and to a single topic. Articles that span multiple areas and topics are better broken up.

## Reporting issues
Notice something inaccurate? Noticed something inaccessible on this site? You think you can code something up better?

- File an issue.
- Preface your issue as either an `inaccuracy`, a `inaccessibility`, or a `bug` (for site issues) (e.g. "Bug: Link at archive not working"). 
- **ISSUES ARE NOT** free help on your website. Use [Stack Overflow](http://stackoverflow.com) for that.

## Key branches

- `gh-pages` is the "master" branch. This is the website.

If you have a feature request(s) we suggest filing an issue initially to discuss your feature. Once that feature has been accepted you'll be off and running to feature making madness. Start a separate branch and use the following naming convention for your *feature branch*:

- `feature/name_of_feature` 

## Build Process
- In order to create a site build you'll need to make sure you've run through all the listed commands in the order they appear from our [README.md](https://github.com/a11yproject/a11yproject.com#local-development)
- CSS changes must be done in ``.sass`` files first, never just the compiled files. We use [Codekit](http://incident57.com/codekit) to compile our *Sass* and *Compass*.


## Pull requests

- Filing a descriptive issue then assigning it to yourself before you commit would really help get your commit accepted.


## License

By contributing your code, you agree to license your contribution under the terms of the [APLv2](https://github.com/twitter/bootstrap/blob/master/LICENSE).
