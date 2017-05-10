## Landmarks
ARIA Landmark Roles are helpful landmarks that can be used by AT to navigate a website.

- [ ] `<header role="banner">` 
A region of the page that is site focused. Typically your global page header.

- [ ] `<nav role="navigation">` 
Contains navigational links.

- [ ] `<main role="main">` 
Focal content of document. Use only once.

- [ ] `<article role="article">` 
Represents an independent item of content. Use only once on outermost element of this type.

- [ ] `<aside role="complementary">` 
Supporting section related to the main content even when separated.

- [ ] `<footer role="contentinfo">` 
Contains information about the document (meta info, copyright, company info, etc).

- [ ] `<form role="search">` 
Add a `search` role to your primary search form.

## Language Attribute
Declaring a language attribute on the html element enables a screen reader to read out the text with correct pronunciation.

- [ ] `<html lang="en">` 
Specify a language with the lang attribute on the <html> element.

## Document Outline
- [ ] Use semantic headings and structure 

## Links
- [ ] Ensure links have `:focus` state. 
Ensure links are recognizable (underlined). 

## Images
- [ ] Use appropriate `alt` text. [Read article on using ALT text](http://a11yproject.com/posts/alt-text/) 

## Javascript
- [ ] Unobtrusive Javascript 
- [ ] Use unobtrusive Javascript (never use inline scripting).

## No-JS Alternatives 
- [ ] Provide alternatives for users without Javascript enabled.

## Forms
- [ ] Logical layout 
Tab order of the form follows a logical pattern.

- [ ] Associated `label` for all form controls (e.g. `input`, `select` etc.) 
(e.g. `<label for="name">Name:</label><input id="name" type="text">`)

- [ ] Make sure `placeholder` attributes are **NOT** being used in place of label tags. [WHATWG](http://www.whatwg.org/specs/web-apps/current-work/multipage/forms.html#attr-input-placeholder) 
An exception to this rule would be smaller forms with one or two fields (eg. search or log in forms)

- [ ] Group related form elements with `fieldset` and describe the group with `legend` 
Important for `<input type="radio">` and `<input type="checkbox">`

## Media (Audio and Video)
Providing text alternatives makes the audio information accessible to people who are deaf or hard of hearing. This also goes for search engines who are deaf and hard of hearing as well.

- [ ] Provide text transcripts 
- [ ] Synchronized subtitles for videos 

## Color and Contrast
Best done early in the process, by ensuring that the foreground and background colors of your site have sufficient contrast you will help make your site more readable for everyone. [Contrast Ratio](http://leaverou.github.com/contrast-ratio/) is one tool for checking the contrast of your colors for both standard vision and color deficient user.

- [ ] Test color contrast 

Test against different types of color blindness with a tool like http://colorfilter.wickline.org/.

If you are on a Mac, another option is [Michel Fortin's, Sim Daltonism](http://michelf.ca/projects/sim-daltonism/) color blindness simulator.

- [ ] Deuteranopia 
- [ ] Protanopia 
- [ ] Tritanopia 

## Testing
Navigating your site using a range of tools, such as just the keyboard or a screen reader, will help you understand how a blind, low-vision, or limited-mobility user will experience it.

- [ ] Test using a screen reader 
- [ ] Test using keyboard only
