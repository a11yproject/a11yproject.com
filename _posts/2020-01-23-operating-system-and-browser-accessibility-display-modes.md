---
layout: post
title: "Operating System and Browser Accessibility Display Modes"
description: "Accessibility display modes are are pre-defined display configurations you can tell your device to use to read and take action on content."
author: eric_bailey
published: true
categories:
  - Assistive Technology
further_reading:
  - url: https://www.kooslooijesteijn.net/blog/dark-mode-design-considerations
    title: "Dark mode design con­sider­ations"
    source: Koos Looijesteijn
  - url: https://adrianroselli.com/2017/11/os-high-contrast-versus-inverted-colors.html
    title: "OS: High Contrast versus Inverted Colors"
    source: Adrian Roselli
  - url: https://valhead.com/2017/06/23/reduced-motion-query/
    title: "The reduced motion query at a glance"
    source: Val Head
  - url: https://www.gwhitworth.com/blog/2017/04/how-to-use-ms-high-contrast/
    title: "How to use -ms-high-contrast"
    source: Greg Whitworth
---

Most computers, laptops, tablets, smartphones, and web browsers have specialized tools to help people read and take action on the content they display. Some of these tools are display modes, which are pre-defined display configurations you can tell your device to use.

Five such modes are Dark Mode, Increased Contrast Mode, Inverted Colors Mode, Reduced Motion Mode, and High Contrast Mode. Following is an explanations of each of these mode, who can benefit from it, how to enable it on your device or browser (if supported), and how to support it in code.

## Dark Mode

The User Interfaces (<abbr>UI</abbr>) that make up most Operating Systems (<abbr>OS</abbr>es) traditionally use lighter colors like white and light grays. Dark Mode is a toggle that instructs this UI to use darker colors, typically black and dark grays.

It is helpful for:

- People who want to reduce eye strain in a low or no light environment,
- and/or who have certain [low vision](https://webaim.org/articles/visual/lowvision) or photosensitive conditions.

An example of a situation where Dark Mode could be useful is checking your phone in bed with the lights off.

### What it affects

Dark Mode will update **all** UI of the OS that supports it. Most apps developed by the company that creates the operating system will also support Dark Mode. Third party apps, websites, and web apps support Dark Mode **only** if the people who write the necessary code to enable it.

<figure role="figure" aria-label="daverupert.com has support for Dark Mode.">
  <img alt="A side-by-side comparison of light and dark themes for the home page daverupert.com. The navigation, text, background, and link colors update, but the logo and illustration of Dave as a fantasy warrior remain the same." src="/img/posts/2020-01-23-operating-system-and-browser-accessibility-display-modes/dark-mode.png">
  <figcaption><a href="https://daverupert.com/">daverupert.com</a> has support for Dark Mode.</figcaption>
</figure>

### How to enable it

Assumes the latest version of each Operating System or browser.

#### Android

1. Go to **Settings**.
1. Go to **Display**.
1. Set the **Dark Theme** toggle to the **on** position.

#### iOS

1. Go to **Settings**.
1. Go to **Display and Brightness**.
1. Select the **Dark** option for **Appearance**.

#### macOS

1. Go to **System Preferences**.
1. Go to **General**.
1. Select the **Dark** option for **Appearance**.

#### Windows

1. Go to **Settings**.
1. Go to **Personalization**.
1. Go to **Colors**.
1. Select the **Dark** option for **Choose your default app mode**.

### How to target it in code

You can use the [`prefers-color-scheme` media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) to to target Dark Mode in CSS. In the following example, we set our web page to default to black text on a white background, but update to be white text on a black background when Dark Mode is enabled:

``` css
body {
  background-color: #ffffff;
  color: #000000;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #000000;
    color: #ffffff;
  }
}
```

## Increased Contrast Mode

This mode is only available on macOS and iOS. It will increase the difference in color values between the gray colors used for the OS visuals, as well as drawing more obvious borders between different UI elements.

This is helpful for:

- People experiencing low vision conditions,
- and/or who have lower quality displays,
- and/or less technologically literate people, who may need the difference between different parts of the OS visuals to be more obvious.

An example of one of these conditions could be vision-related issues caused by Glaucoma. Here, the increased contrast and borders may help a person who has blurry central vision and a loss of peripheral vision understand the boundaries of different parts of the interface.

### What it affects

Increased Contrast Mode will update **all** UI elements for macOS and iOS. Most apps developed by Apple will also support this mode. Third party apps that use Apple’s interface library will also support this mode, but custom, nonstandard UI elements will **not** be supported. Websites and web apps do **not** support this mode.

<figure role="figure" aria-label="Preview.app comparing regular and Increased Contrast Mode.">
  <img alt="A comparison of regular and Increased Contrast Mode UI. The bottom screenshot is Preview in regular mode. The buttons on the app’s toolbar are light gray gradient on a medium gray background. The top screenshot is Preview in Increased Contrast Mode. The buttons on the app’s toolbar are solid white with a black outline. A black outline has also been applied to the overall app window border. Preview is displaying a photo of a Mallard duck." src="/img/posts/2020-01-23-operating-system-and-browser-accessibility-display-modes/increased-contrast-mode.png">
  <figcaption>Preview.app comparing regular and Increased Contrast Mode.</figcaption>
</figure>

### How to enable it

Assumes the latest version of each Operating System or browser.

#### iOS

1. Go to **Settings**.
1. Go to **Accessibility**.
1. Go to **Display & Text Size**.
1. Set the **Increase Contrast** toggle to the **on** position.

#### macOS

1. Go to **System Preferences**.
1. Go to **Accessibility**.
1. Go to **Display**.
1. Check **Increase contrast**.

## Inverted Colors Mode

When Inverted Colors Mode is activated, the color of every pixel on the screen is reversed. Black becomes white, red becomes turquoise, green becomes purple, etc.

Because it affects all content displayed on the screen, Inverted Colors Mode can be very helpful in situations where a light-colored interface does not provide Dark Mode support. Here, Inverted Colors Mode can force a bright UI into kind of jury-rigged Dark Mode. Keep in mind that the opposite also applies. A dark UI will turn light if Inverted Colors Mode is active.

This is helpful for:

- People who want to reduce eye strain in a low or no light environment,
- and/or who have certain [low vision](https://webaim.org/articles/visual/lowvision) or photosensitive conditions.

An example of one of these conditions could be someone avoiding triggering a migraine by using Inverted Colors Mode to turn a brightly-colored application they need to use for work dark.

### What it affects

Inverted Colors Mode affects **all** content displayed on the screen: Operating System UI, first and third party apps, and web content.

<figure role="figure" aria-label="Safari will automatically invert images when Inverted Color Mode is activate.">
  <img alt="A side-by-side comparison of regular and Inverted Colors Mode. The left screenshot is a Washington Post review of a Hokusai exhibit, including a headline, feature image of Mount Fuji, author photo and intro paragraph. The article’s design uses black text on a white background. The right screenshot is the same article, but with Inverted Colors Mode activated. The article is now white text on a black background." src="/img/posts/2020-01-23-operating-system-and-browser-accessibility-display-modes/inverted-colors.png">
  <figcaption>Safari will automatically invert images when Inverted Color Mode is activate.</figcaption>
</figure>

#### How to enable it

Assumes the latest version of each Operating System or browser.

#### Android

1. Go to **Settings**.
1. Go to **System**.
1. Go to **Accessibility**.
1. Set the **Color Inversion** toggle to the **on** position.

#### iOS

1. Go to **Settings**.
1. Go to **Accessibility**.
1. Go to **Display & Text Size**.
1. Set the **Smart Invert** or **Classic Invert** toggle to the **on** position.

#### macOS

1. Go to **System Preferences**.
1. Go to **Accessibility**.
1. Go to **Display**.
1. Check **Invert colors**.

#### Windows

1. Go to **Settings**.
1. Go to **Ease of Access**.
1. Go to **Magnifier**.
1. Set the **Invert colors** toggle to the **on** position.
1. Set the **Magnifier** toggle to the **on** position.

### How to target it in code

You can use the [`inverted-colors` media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors) to to target Dark Mode in CSS. In the following example, we invert images and video when Inverted Colors Mode is active. This keeps them looking the way they were intended, while allowing the rest of the UI to change:

``` css
@media (inverted-colors: inverted) {
  img,
  video {
    filter: invert(100%);
  }
}
```

## Reader Mode

This mode is a feature found in most web browsers. When activated, it takes the content identified as the primary content of a web page and converts it into a format that is easier to read.

Part of this easier reading experience involves removing most, if not all the surrounding content. This includes things like headers, footers, sidebars, comments, etc.

Many Reader Modes also allow the person using it to configure how this content is presented, including preferences for things like background color, text color, font, line height, and line spacing.

 This is helpful for:

- People who have certain low vision or photosensitive conditions,
- and/or people who have [motor disabilities](https://webaim.org/articles/motor/),
- and/or who have a [cognitive disability](https://webaim.org/articles/cognitive/),
- and/or who want a pleasant reading experience.

An example of one of these conditions could be someone who has Attention-Deficit/Hyperactivity Disorder (<abbr>ADHD</abbr>) using Reader Mode to remove distracting animated sidebar features from a news article.

### What it affects

Reader Mode is only available in certain web browsers, and **may not** work on every web page you visit. Each version has its own set of specialized checks it uses to determine what the main content of the page is, and if it can be presented.

<figure role="figure" aria-label="Firefox’s Reader Mode applied to a blog post.">
  <img alt="A side-by-side comparison of regular and Reader Mode. The left screenshot is a blog post from the website Damn Interesting about the Mystery Lake of the Himalayas. It features a headline, author, publish date, feature image of the lake, and intro paragraph. The right screenshot is the same blog post, only viewed in Firefox’s Reader Mode. Damn Interesting’s design has been removed in favor of a simple text presentation." src="/img/posts/2020-01-23-operating-system-and-browser-accessibility-display-modes/reader-mode.png">
  <figcaption><a href="https://support.mozilla.org/en-US/kb/firefox-reader-view-clutter-free-web-pages">Firefox’s Reader Mode</a> applied to a blog post.</figcaption>
</figure>

### How to enable it

Assumes the latest version of each Operating System or browser.

#### Android Chrome

Install a [reading app](https://play.google.com/store/apps/collection/cluster?clp=ogosCBEqAggIMiQKHmNvbS5pZGVhc2hvd2VyLnJlYWRpdGxhdGVyLnBybxABGAM%3D:S:ANO1ljK-5Rk&gsr=Ci-iCiwIESoCCAgyJAoeY29tLmlkZWFzaG93ZXIucmVhZGl0bGF0ZXIucHJvEAEYAw%3D%3D:S:ANO1ljIoeUw&hl=en_US).

#### Desktop Chrome

Install a [reader view extension](https://chrome.google.com/webstore/search/reader%20view).

#### Edge

In the browser’s **Address Bar**, activate the **Enter Immersive Reader** button.

#### Firefox

In the browser’s **Address Bar**, activate the **Toggle reader view** button.

#### Internet Explorer 11 (Windows 8.1 and up)

In the browser’s **Address Bar**, activate the **Read** button.

#### iOS Safari

1. In the browser’s **Address Bar**, activate the **Text Resizing** button.
1. Select the **Show Reader View** option.

#### macOS Safari

In the browser’s **Address Bar**, activate the **Show Reader View** button.

### How to target it in code

You can use a combination of [HTML elements and attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), as well as [Schema.org microdata](https://schema.org/) to semantically describe the main content of your page. Front end developer Mandy Michael explains this in more detail in her article, [<cite>Building websites for Safari Reader Mode and other reading apps</cite>](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9).

## Reduced Motion Mode

With this mode, a person can express a preference for animation to be slowed down, or removed entirely.

It is helpful for:

- People who have certain photosensitive conditions,
- and/or who have a cognitive or vestibular disability,
- and/or who want a distraction-free reading experience.

An example of one of these conditions could be someone avoiding animations that trigger vertigo.

### What it affects

Reduced Motion mode affect **all** OS animations that support it. Most apps developed by the company that creates the operating system will also support Reduced Motion mode. Third party apps, websites, and web apps support this mode **only** if the people who make it elect to use the special code required to enable it.

### How to enable it

Assumes the latest version of each Operating System or browser.

#### Android

1. Go to **Settings**.
1. Go to **System**.
1. Go to **Accessibility**.
1. Set the **Remove animations** toggle to the **on** position.

#### iOS

1. Go to **Settings**.
1. Go to **Accessibility**.
1. Go to **Motion**.
1. Set the **Reduce Motion** toggle to the **on** position.

#### macOS

1. Go to **System Preferences**.
1. Go to **Accessibility**.
1. Go to **Display**.
1. Check **Reduce motion**.

#### Windows

1. Go to **Settings**.
2. Go to **Ease of Access**.
3. Go to **Display**.
4. Set the **Show animations in Windows** toggle to the **on** position.

#### Web browsers
It is also possible to force most browser-based animations to stop playing via installing specialized browser extensions or JavaScript [bookmarklets](https://en.m.wikipedia.org/wiki/Bookmarklet). Scott Vinkle’s [Togglific](https://svinkle.github.io/togglific/) is one such way to go about doing this.

### How to target it in code

You can use the [`prefers-reduced-motion` media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) to to target Reduced Motion Mode in CSS. In the following example, we remove CSS animation when Reduced Motion Mode is active:

``` css
.my-animated-component {
  animation-duration: 250ms;
  animation-iteration-count: infinite;
  animation-name: jump-and-bounce;
}

@media (prefers-reduced-motion: reduce) {
  .my-animated-component {
    animation: none;
  }
}
```

## High Contrast Mode

This mode prioritizes legibility of content above all else. When activated, it maximizes the contrast between OS content and the background it is placed on top of, even at the expense of the appearance of the UI. High Contrast Mode comes with preset color themes, and also allows you to create your own. This allows someone to select combinations of colors that work best for them.

It is helpful for:

- People who have low vision or photosensitive conditions,
- and/or who are using their device in an environment with very bright light and glare.

An example of one of these conditions could be someone with cataracts who wants to stay up to date on social media.

<figure role="figure" aria-label="High Contrast Mode #1 theme.">
  <img alt="Screenshot of High Contrast Mode running on Windows 10. A Wikipedia page for Bodiam Castle is in the background, displayed in Internet Explorer 11. In the foreground is a window showing Window’s File Explorer. Content for both the Operating System UI and web content have been updated to display high contrast color values." src="/img/posts/2020-01-23-operating-system-and-browser-accessibility-display-modes/high-contrast-mode.png">
  <figcaption>High Contrast Mode #1 theme.</figcaption>
</figure>

### What it affects

High Contrast Mode is **only** available for Windows (versions 7 and up). For web content, it will **only** work with Internet Explorer (versions 10 and 11), as well as Edge (any version). It affects **all** UI elements of Windows, as well as apps developed by Microsoft. It will also work for most third party apps. Most websites will have at least **partial** support, with support depending on how they are coded.

### How to enable it

Assumes the latest version of each Operating System or browser.

#### Windows

1. Go to **Settings**.
1. Go to **Ease of Access**.
1. Go to **High Contrast**.
1. Select a theme from the **Choose a theme** dropdown and then activate the **Apply** button.

### How to target it in code

High Contrast Mode will automatically be applied to web content described semantically in HTML, so long as you are using Internet Explorer versions 10 or 11, or any version of Microsoft Edge. For example, paragraphs of text described using the `p` element will automatically update when High Contrast Mode is activated. It will also update the same way if you use the `a` element for links, the `button` element for actions, the `input` element for form controls, etc.

In situations where the HTML cannot be modified, High Contrast Mode styling can be tweaked using the [`-ms-high-contrast` media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/-ms-high-contrast) in CSS. In these situations, you should use a specialized subset of [CSS2 system color keywords](https://www.w3.org/TR/2018/REC-css-color-3-20180619/#css2-system), as High Contrast Mode theme colors are dynamic. `-ms-high-contrast` will eventually be replaced with an upcoming [`forced-colors` media query](https://www.w3.org/TR/css-color-adjust-1/#forced-colors-mode).

## Multiple modes

It is possible to have more than one display mode active at the same time. For example, a device could be set to have Reduced Motion Mode, Increased Contrast Mode, and Dark Mode all working in coordination. This is by design, as it lets a person make their device work in a way that is easy and comfortable for them to operate.
