# Content Style Guide

A consistent writing style will help site content feel unified and aid with comprehension. Please check our [Contributing Guidelines](https://github.com/a11yproject/a11yproject.com/blob/gh-pages/CONTRIBUTING.md) before submitting. Questions or concerns about the Content Style Guide can be addressed in the site's [Issue Tracker](https://github.com/a11yproject/a11yproject.com/issues).


## Table of Contents

1. [General approach](#general-approach)
    - [Themes](#themes)
    - [Tone](#tone)
1. [Authoring](#authoring)
    - [Written language](#written-language)
    - [Reading level](#reading-level)
    - [Punctuation](#punctuation)
    - [Styling](#styling)
    - [Capitalization](#capitalization)
    - [Concepts and terminology](#concepts-and-terminology)
    - [User or Person?](#user-or-person)
    - [Acronyms](#acronyms)
    - [Assumptive phrases](#assumptive-phrases)
    - [Gender](#gender)
    - [Ableist language](#ableist-language)
    - [Profanity](#profanity)
    - [Multimedia](#multimedia)
    - [Spell-check](#spell-check)
1. [Markdown](#)
    - [Front matter](#front-matter)
    - [Line breaks](#line-breaks)
    - [Headings](#headings)
    - [Paragraphs](#paragraphs)
    - [Lists](#lists)
    - [Links](#links)
    - [Images](#images)
    - [Code](#code)
    - [Horizontal rules](#horizontal-rules)
    - [Inline HTML](#inline-html)
1. [Important terms](#inline-html)
    - [The A11Y Project](#the-a11y-project)
    - [a11y/accessibility](#a11y-accessibility)
    - [GitHub](#github)
    - [People, organizations, titles, and honorifics](#people-organizations-titles-and-honorifics)
    - [Other proper nouns](#other-proper-nouns)


## General approach

### Themes

- **Short:** Attention spans are limited. Aim for brief, succinct article lengths.
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
- Use parentheses with care.

### Styling

- Use bold and italic text styling sparingly, and when semantically appropriate. Long sections of text set with these text styles have been known to be a Dyslexia trigger.
- Do not underline text. Underlined text should be reserved for links.

### Capitalization

- Avoid writing in all caps. Some assistive technologies will announce all cap words as individual letters. 
- Capitalize words in a hashtag (e.g. #ThisReadsWell).

### Concepts and terminology

If possible, link to supporting articles when discussing new concepts and terminology, preferably sites with good accessibility support. This provides the reader with more detail on the subject without having to extend your article's length. It is also provides an alternate way of understanding the subject you introduce.

Avoid analogies, similes, and metaphors that are too reliant on demographic, geography, religion, or culture.

#### Example

> [Responsive Web Design (RWD)](https://alistapart.com/article/responsive-web-design) allows us to create flexible, accessible layouts. Content in RWD behaves like water, fitting whatever container it is placed in.

### User or Person?

Prefer the terms "person" or "people" over "user" or "users".

#### Example

> **Do:** Some people prefer a large font size.
>
> **Don't:** Most users have smartphones

### Acronyms

Spell out an acronym in full before using the shorthand version.

#### Example

> A User Interface (UI) is the space where interaction between humans and machines occur. The goal of a UI is to make it easy, efficient, and enjoyable to operate a machine.

### Assumptive phrases

The reader may have a different level of experience than you on the topic you're writing about. Avoid using terms like "just", "simply", "easily", "obviously", etc.

If you make a statement about how a population behaves, please also make sure to cite a trustworthy source.

### Gender

Use "they" when discussing a person unless they have made their preferred gender known.

### Ableist language

Avoid using ableist language, unless quoting in context. Ableist language uses words or phrases that have a negative connotation for people with disabilities.

Don't describe a person as having a disability unless it is relevant to the point you are trying to make. When discussing an individual, use the term they choose to self-identify with.

#### Further reading

- [Autistic Hoya: Ableism/Language](https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html)
- [Guidelines for Writing About People With Disabilities](https://adata.org/factsheet/ADANN-writing)
- [Choosing Words for Talking About Disability - American Psychological Association](https://www.apa.org/pi/disability/resources/choosing-words.aspx)
- [Introduction to Disability Terminology - Disability in Kidlit](http://disabilityinkidlit.com/2016/07/08/introduction-to-disability-terminology/)
- [Conscious Style Guide](https://consciousstyleguide.com/)

#### Examples

> **Do:** This seems confusing!
>
> **Don't:** This is crazy!

> **Do:** They use a wheelchair.
>
> **Don't:** They're bound to a wheelchair.

> **Do:** Alice is blind.
>
> **Don't:** She's handicapable.

> **Do:** They do not have a disability.
>
> **Don't:** They're able-bodied.

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
- There should be only one first-level heading per page. Blog posts don't need first level headings, as Jekyll will automatically convert the title section of your post's front matter into a first-level heading.
- For non-blog post content, use pound/hash signs (`#`), not underlines (`---` or `===`) to designate first-level headings.
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
- Provide [meaningful alternative (alt) descriptions for images](https://a11yproject.com/posts/alt-text/). Alt descriptions should concisely describe the image's content.
- Use complete sentences for your alt descriptions (e.g. `![A happy-looking Labrador Retriever puppy sitting in a clay flower pot.](image url)`). Including punctuation in your alt description will help some assistive technology pronounce it clearly.
- Do not use ambiguous terms like "image", "ScreenCapture at Wed Aug 22", "post image", etc.
- Do not use height and width attributes.

### Code

- Use single backticks to enclose inline code (e.g. The `footer` element typically contains metadata about its section.).
- Use triple backticks before and after a multi-line block of code.
- Do not use multi-line blocks of code to create diagrams, flowcharts, or other illustrations.

### Horizontal rules

- Use three hyphens (`---`) to create a horizontal rule.
- Use horizontal rules for breaks in paragraph content
- Do not use horizontal rules for decoration.

### Inline HTML

Use HTML only when Markdown cannot accurately describe your content. Use [relevant, semantic HTML elements](https://alistapart.com/article/conversational-semantics) and attributes. Examples of this would be: 

- A video embed.
- A definition list.
- Elements like `<kbd>` and `<samp>`, which do not have Markdown equivalents.


## Important terms

### The A11Y Project

This website's name is spelled with a capital T, A, Y, and P.

#### Example

> **Do:** The A11Y Project

> **Don't:** a11y Project

The A11Y Project also uses the following terms as proper nouns when discussing accessibility-related content:

- How-tos
- Myths

### a11y/accessibility
"a11y" is a [numeronym](https://a11yproject.com/posts/a11y-and-other-numeronyms/) that is short for "accessibility". The number 11 stands for the 11 letters between the first and last letters of the word.

The numeronym is to not be used in formal writing. Use the full word, unless quoting in context.

#### Example

> **Do:** "The number of developers interested in accessibility a11y (accessibility) is rising quickly."

> **Don't:** When we talk about a11y, we are discussing...


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

Honor how someone or something chooses to officially spell their name.

#### Example

> danah boyd is a technology and social media scholar. She is a Principal Researcher at Microsoft Research, the founder and president of Data & Society Research Institute, and a Visiting Professor at New York University.

### Other proper nouns

These terms are commonly used on the site, or in the accessibility community.

- [Cascading Style Sheets](https://www.w3.org/Style/CSS/Overview.en.html) (CSS)
- [Document Object Model](https://www.w3.org/DOM/) (DOM)
- [High Contrast Mode](https://support.microsoft.com/en-us/help/13862/windows-use-high-contrast-mode)
- [Hypertext Markup Language](https://www.w3.org/html/) (HTML)
- [JavaScript](https://www.w3.org/standards/techs/js) (JS)
- [JavaScript Object Notation](https://www.json.org/) (JSON)
- [Landmark](https://www.w3.org/WAI/PF/aria/roles#landmark_roles)
- [Meetup](https://www.meetup.com/)
- [Scalable Vector Graphics](https://www.w3.org/Graphics/SVG/) (SVG)
- [Web Accessibility Initiative Accessible Rich Internet Applications](https://www.w3.org/WAI/standards-guidelines/aria/) (WAI-ARIA/ARIA)
- [World Wide Web Consortium](https://www.w3.org/) (W3C)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG)
- [Webinar](https://en.m.wikipedia.org/wiki/Web_conferencing)
- [YAML](http://yaml.org/) (YAML Ain't Markup Language)
