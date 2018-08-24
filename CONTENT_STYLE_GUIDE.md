# Content Style Guide

A consistent writing style will help site content feel unified and aid with comprehension. Please check our [Contributing Guidelines](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTRIBUTING.md) before submitting. Questions or concerns about the Content Style Guide can be addressed in the site's [Issue Tracker](https://github.com/a11yproject/a11yproject.com/issues).


## Table of Contents

1. [General approach](#general-approach)
    1. [Themes](#themes)
    1. [Tone](#tone)
1. [Authoring](#authoring)
    1. [Written language](#written-language)
    1. [Reading level](#reading-level)
    1. [Punctuation](#punctuation)
    1. [Styling](#styling)
    1. [Capitalization](#capitalization)
    1. [Concepts and terminology](#concepts-and-terminology)
    1. [User or Person?](#user-or-person)
    1. [Acronyms](#acronyms)
    1. [Assumptive phrases](#assumptive-phrases)
    1. [Gender](#gender)
    1. [Ableist language](#ableist-language)
    1. [Profanity](#profanity)
    1. [Multimedia](#multimedia)
    1. [Spell-check](#spell-check)
1. [Markdown](#)
    1. [Front matter](#front-matter)
    1. [Line breaks](#line-breaks)
    1. [Headings](#headings)
    1. [Paragraphs](#paragraphs)
    1. [Lists](#lists)
    1. [Links](#links)
    1. [Images](#images)
    1. [Code](#code)
    1. [Horizontal rules](#horizontal-rules)
    1. [Inline HTML](#inline-html)
1. [Important terms](#inline-html)
    1. [The A11Y Project](#the-a11y-project)
    1. [a11y/accessibility](#a11y-accessibility)
    1. [GitHub](#github)
    1. [People, organizations, titles, and honorifics](#people-organizations-titles-and-honorifics)
    1. [Other proper nouns](#other-proper-nouns)


## General approach

### Themes

- **Short:** Attention spans are short online. Aim for brief, succinct article lengths.
- **Focused:** Keep it digestible and to a single topic. Articles that span multiple areas and topics should be broken up.
- **Accessible:** Use plain language and avoid jargon if possible. Explain complicated concepts by breaking them down.

### Tone

We prefer an active tone, where the subject of the sentence performs the action.

#### Example

> **Do:** Some people navigate via keyboard.
>
> **Don't:** It was discovered earlier that some people navigate using keyboard input.


## Authoring

### Written language

Use American English spelling, unless quoting in context.

#### Example

> **Do:** color
>
> **Don't:** colour

### Reading level

Try not to exceed a seventh grade reading level. Avoid unnecessary jargon and extended metaphors. There are resources that can help you [calculate how complex your writing is](http://www.hemingwayapp.com/).

### Punctuation

- Use complete sentences.
- Use exclamation points sparingly.
- Avoid rhetorical questions.
- Avoid trailing thoughts/ellipses.
- Avoid comma splices, em dash phrases, and semicolons. Using them increases the cognitive load when parsing the sentence.
- Use parenthetical phrases with discretion.

### Styling

- Use bold and italic text styling sparingly. Long sections of text set with these text styles have been known to be a Dyslexia trigger.
- Do not underline text. Underlined text is reserved for links.

### Capitalization

- Avoid writing in all caps. Some assistive technology may read out each letter individually in sequence if it is authored using all capital letters. Large sections of text set in all caps has also been known to be a Dyslexia trigger, as well as being difficult to parse for people who are learning English or who have cognitive concerns.
- Capitalize words in a hashtag (e.g. #ThisReadsWell).

### Concepts and terminology

If possible, link to supporting articles when discussing new concepts and terminology. Please use high-quality sources, preferably sites with good accessibility support. This provides the reader with more detail on the subject without having to extend your article's length. It is also provides an alternate way of understanding the subject you introduce.

Avoid analogies, similes, and metaphors that are too reliant on demographic, geography, religion, or culture.

#### Example

> [Responsive Web Design (RWD)](https://alistapart.com/article/responsive-web-design) allows us to create flexible, accessible layouts. Content in RWD behaves like water, fitting whatever container it is placed in.

### User or Person?

Prefer the terms "person" or "people" over "user" or "users".

#### Example

> **Don't:** Most users have smartphones
>
> **Do:** Some people prefer a large font size.

### Acronyms

Spell out an acronym in full before using the shorthand version.

#### Example

> A User Interface (UI) is the space where interaction between humans and machines occur. The goal of a UI is to make it easy, efficient, and enjoyable to operate a machine.

### Assumptive phrases

The reader may have a different level of experience than you on the topic you're writing about. Avoid using terms like "just", "simply", "easily", "obviously", etc.

If you make a statement about how a population behaves, please also make sure to cite a trustworthy source.

### Gender

Use "they" when discussing an individual unless they have made their preferred gender known.

### Ableist language

Avoid using ableist language, unless quoting in context. Ableist language uses words or phrases that have a negative connotation for people with disabilities.

Don't describe an individual as having a disability unless it is relevant to the point you are trying to make. When discussing an individual, use the term they choose to self-identify with.

#### Further reading

- [Autistic Hoya: Ableism/Language](https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html)
- [Guidelines for Writing About People With Disabilities](https://adata.org/factsheet/ADANN-writing)
- [Choosing Words for Talking About Disability - American Psychological Association](https://www.apa.org/pi/disability/resources/choosing-words.aspx)
- [Introduction to Disability Terminology - Disability in Kidlit](http://disabilityinkidlit.com/2016/07/08/introduction-to-disability-terminology/)
- [Conscious Style Guide](https://consciousstyleguide.com/)

#### Examples

> **Don't:** This is crazy!
>
> **Do:** This seems confusing!

> **Don't:** They're bound to a wheelchair.
>
> **Do:** They use a wheelchair.

> **Don't:** She's handicapable.
>
> **Do:** Alice is blind.

> **Don't:** They're able-bodied.
>
> **Do:** They do not have a disability.

### Profanity

Don't use profane terms unless quoting in context.

#### Example

> **Do:** Our project manager said, "Ugh, accessibility. Not that shit again." Reader, it was time to act.
>
> **Don't:** Writing transcripts is fucking tedious.

### Multimedia

- Ensure interactive multimedia can be fully operated by keyboard input.
- Multimedia should be able to be paused, and should load in a paused state.
- Don't use multimedia that will automatically steal keyboard focus.
- Multimedia with audio should provide both subtitles and transcripts of any spoken dialog or important sounds.
- Don't use multimedia that uses rapidly blinking, flashing, or strobing content. This may trigger photosensitive seizure disorders.

### Spell-check

Many code editors have spell checking extensions. Please check your spelling before submitting content. This is a courtesy to both your readers and the people who will review your contribution.


## Markdown

The A11Y Project uses [GitHub-flavored Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Front matter

Jekyll uses front matter information to create things like author attribution, categories, and page layout. Copying an existing file, then updating its filename and front matter to can be an easy way to help ensure everything is formatted properly.

### Line breaks

Use a single newline to separate block-level content like headings, lists, images, code blocks, etc. The exception is second-level headings, where it should be two newlines. This helps visualize the overall structure of content in a code editor.

### Headings

- Use ordered headings to provide a meaningful high-level outline of your content.
- There should be only one first-level heading per page.
- Use pound/hash signs (`#`), not underlines (`---` or `===`) to designate first-level headings.
- Use sentence case for headings (e.g. Quick Tip: Don't auto-play video, music and more).
- Try to not use headings level 4 through 6. If your content is that detailed, it may need to be broken into separate articles.

### Paragraphs

- Try to keep your paragraphs on the shorter side. 5 to 6 sentences maximum.
- Don't indent your first paragraph with space characters (e.g. `⋅⋅⋅Three spaces before a paragraph will indent it.`).

### Lists

- Put a period at the end of every list item.
- Uses dashes (`-`) for unordered lists.
- Use the number one (`1.`) for ordered lists.
- Use one space after a list item.
- Indent nested lists with four spaces (e.g. `⋅⋅⋅⋅-`).

### Links

- Links should provide context for the content they link to. Avoid using ambiguous terms like "click here".
- Use Markdown-style links (`[link text](URL)`) instead of HTML.
- Links should not open in new tabs or windows.

### Images

- Use Markdown-style images (`![alternate description](image url)`) instead of HTML.
- Provide meaningful alternative (alt) descriptions for images. Alt descriptions should concisely describe the image's content.
- Use complete sentences for your alt descriptions (e.g. `![A happy-looking Labrador Retriever puppy sitting in a clay flower pot.](image url)`). Including punctuation in your alt description will help some assistive technology pronounce it clearly.
- Do not use ambiguous terms like "image", "ScreenCapture at Wed Aug 22", "post image", etc.
- Do not use height and width attributes.

### Code

- Use single backticks to enclose inline code (e.g. The `footer` element typically contains metadata about its section.).
- Use triple backticks before and after a multi-line block of code.
- Do not use multi-line blocks of code to create diagrams, flowcharts, or other illustrations.

### Horizontal rules

- Use three hyphens (`---`) to create a horizontal rule.
- Use horizontal rules to denote thematic breaks in content
- Do not use horizontal rules for decoration.

### Inline HTML

Use HTML only when Markdown cannot accurately describe your content. Use relevant, semantic HTML elements and attributes. An example of this would be a video embed.


## Important terms

### The A11Y Project

This website's name is spelled with a capital T, A, Y, and P.

#### Example

> **Don't:** a11y Project

> **Do:** The A11Y Project

The A11Y Project also uses the following terms as proper nouns when discussing accessibility-related content:

- How-tos
- Myths

### a11y/accessibility
"a11y" is a [numeronym](https://a11yproject.com/posts/a11y-and-other-numeronyms/) that is short for "accessibility". The number 11 stands for the 11 letters between the first and last letters of the word.

The numeronym is to not be used in formal writing. Use the full word, unless quoting in context.

#### Example

> **Don't:** When we talk about a11y, we are discussing...

> **Do:** "The number of developers interested in accessibility a11y (accessibility) is rising quickly."

### GitHub

Capitalize the terms critical to using GitHub:

- Branch
- Clone
- Fork
- Git
- Issue
- Pull Request
- Release

### People, organizations, titles, and honorifics

Honor how someone or something choses to officially spell their name.

#### Example

> danah boyd is a technology and social media scholar. She is a Principal Researcher at Microsoft Research, the founder and president of Data & Society Research Institute, and a Visiting Professor at New York University.

### Other proper nouns

These terms are commonly used on the site, or in the accessibility community.

- Cascading Style Sheets (CSS)
- Document Object Model (DOM)
- High Contrast Mode
- Hypertext Markup Language (HTML)\
- JavaScript (JS)
- JavaScript Object Notation (JSON)
- Landmark
- Meetup
- Scalable Vector Graphics (SVG)
- Web Accessibility Initiative Accessible Rich Internet Applications (WAI-ARIA/ARIA)
- World Wide Web Consortium (W3C)
- Web Content Accessibility Guidelines (WCAG)
- Webinar
- YAML (YAML Ain't Markup Language)
