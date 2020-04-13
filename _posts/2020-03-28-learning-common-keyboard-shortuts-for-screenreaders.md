---
layout: post
title: "Learning common keyboard shortcuts for screen readers"
description: "Keyboard shortcuts are hard to learn. Here are some other ways that can help that learning."
author: anevins12
published: true
categories:
  - Assistive Technology
further_reading:
  - url: https://dequeuniversity.com/screenreaders/
    title: "Screen Reader Keyboard Shortcuts and Gestures"
    source: Deque University
  - url: https://gist.github.com/anevins12/a9cc6548fcbab5f55c1dc3c7bbb0f4bd
    title: "Source JSON file of the mindmap that can be imported into http://app.mindmapmaker.org/"
    source: Github
---

Keyboard shortcuts are often presented to us in a list or a table. Lists and tables are great for some people, while others may be overwhelmed from the sheer number of commands to learn. Sometimes a more visual approach could help some people learn these commands.

## Learning with a mind map
Creating a mind map of keyboard shortcuts can help people to learn those shortcuts easier than in lists and tables. 

A mind map is a diagram that visually organises information into groups. Shortcuts that belong to one screen reader for example would be visually branched off into a smaller group. Learning groups of shortcuts can be easier than learning individual shortcuts.

Here's a mind map of the common keyboard shortcuts in popular screen readers: ![A mind map of common screen reader commands, such as quick keys to navigate by elements, keys for reading content, and reviewing listings of certain elements.](/img/posts/2020-03-28-learning-common-keyboard-shortuts-for-screenreader/common-keyboard-shortcuts-mindmap.png)

The mind map is not an exhaustive listing of screen reader functionality, but shows many of the common commands to help you get a handle on starting out. For example, to learn more about how to 'list all landmarks', you can follow the mapping of branches to the different screen reader software, where the commands will be listed:
- List all landmarks -> JAWS -> R or ;
- List all landmarks -> NVDA -> D
- List all landmarks -> Narrator -> D
- List all landmarks -> VoiceOver iOS -> Two finger twist (the rotor menu)
- List all landmarks -> TalkBack -> Swipe up then right (the local context menu)

The shortcuts are taken from [Deque on shortcuts and gestures](https://dequeuniversity.com/screenreaders/).

## Watching other people
Looking up videos on how to do those shortcuts can reinforce that learning and trying them out yourself is even better.

An example of using the 'rotor' menu with VoiceOver on iOS is illustrated the following YouTube video: [VoiceOver Rotor Gestures - Ballyland Rotor app](https://www.youtube.com/watch?v=yzVHVJoIyKM)

The presenter demonstrates the common hand movements to bring up the rotor menu, as well as other interesting ways. [Apple recommends](https://support.apple.com/en-gb/guide/iphone/iph3e2e3a6d/ios#iphaeb063ca0) placing two fingers on your device and then rotating them to show the rotor menu, but by watching the video we learn that you can also use other gestures that best suit you:
- Touching the screen with your thumb and then flicking with your index finger of the same hand, seen at [0:13] until [0:16] in the video
- Touching the screen with one finger on one hand and then using a finger from the other hand to make a dialing movement, seen at [0:17] until [0:24] in the video
- Touching the screen with one finger from each hand and making a virtual dialing movement with both fingers rotating in the same direction, seen at [0:25] until [0:30] in the video

## Learning with a quiz
Other individuals may learn better testing their memory through a quiz. If creating a quiz may be too time consuming, there is a bookmark available below.

Bookmarklet: [Quiz for Keyboard shortcuts on Deque](javascript:(() => %7B $('.data.shortcuts tr').each((i, v) => %7B const inputLabel = $('[scope="row"]', v).text(); const $input = `<input aria-label="$%7BinputLabel%7D" type="text" />`; $('td:last-child', v).html($input); %7D)%7D)();) (drag to bookmarklets bar or right click and save as bookmark).

This quiz bookmarklet works on the [Deque screen reader shortcut pages](https://dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts). It replaces shortcuts inside tables into input fields that are ready to fill in. You can use this bookmarklet on the following pages:
- [JAWS Deque screen reader shortcuts](https://dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts)
- [NVDA Deque screen reader shortcuts](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)
- [Narrator Deque screen reader shortcuts](https://dequeuniversity.com/screenreaders/narrator-keyboard-shortcuts)
- [VoiceOver Deque screen reader shortcuts](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)

Demonstrating the quiz bookmarklet on the [JAWS Deque screen reader shortcuts](https://dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts) page:
![The quiz bookmarklet testing common shortcuts such as, 'Stop Reading' and 'Start reading continuously from this point.'](/img/posts/2020-03-28-learning-common-keyboard-shortuts-for-screenreader/quiz-bookmarklet-on-deque-with-jaws-shortcuts.png)

In an ideal world we would be using common screen readers daily to help us learn through experience. While these learning techniques can be helpful, they may not be right for everyone.
