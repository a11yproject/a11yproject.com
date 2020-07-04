---
layout: post
title: Using captions with HTML's video element
description: How to implement captions for HTML video element.
category: How-to
author: Greg Tarnoff
date: 2013-07-17
updated_by: Alex Brenon
last_updated: 2019-04-21
further_reading:
  - url: https://www.3playmedia.com/solutions/how-it-works/how-to-guides/html5-video-captioning/
    title: How to Add Closed Captions & Subtitles to HTML5 Videos
    source: 3PlayMedia
  - url: https://support.google.com/youtube/topic/9257536
    title: YouTube Captions
    source: YouTube Help
  - url: https://www.speechpad.com/captions/ttml
    title: TTML (Timed Text Markup Language)
    source: Speechpad
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - howto
---

One of the great things about the internet is the ability to share video. 

With HTML we can now use video without the use of Flash. This makes video more accessible as the controls are located in the DOM. However, to do accessible video right, you need to include captions and transcripts.

In addition to making video accessible to those with hearing issues, having a transcript on the page can provide you localization of a video not always available in the local language. Transcripts also give all users an alternate way to access the information presented in a video. Additionally, with a transcript on your page, you may increase your search engine rankings by making your content easily indexed by search engine crawl spiders.

So how do we pull off putting captions into a video after the video has been produced? Fortunately, the video element has a solution for us. We have to provide a transcript file as a track element after the video source files.

```html
<video class="span12 readable" poster="your-video-poster.jpg" controls title="My Movie">
  <source  src="your-video.m4v" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  <source  src="your-video.ogg" type='application/ogg' />
  <source  src="your-video.webm" type='video/webm' />
  <track src="your-video-transcript.vtt" label="English Captions" kind="subtitles" srclang="en-us" default />
</video>
```

Many frameworks built on top of the video element make it even simpler to add in captions, like [Video.js](https://videojs.com/).

But what do these track files look like?


## WebVTT

One of the most commonly-used caption formats is Web Video Text Tracks (WebVTT), which is saved as a file with the extension `.vtt`. This is a specially formatted text document. It contains each of the cues numbered, followed by the start time & end time and finally the text. It is recommended to include in the text the name of the person talking. Some styling can be included in the text via basic HTML elements like `i` or `b`.

We start it by declaring it a WEBVTT file.

```
WEBVTT

1
00:00:09.000 --> 00:00:11.000
<b>Alice:</b> Curiouser and curiouser.

2
00:00:17.000 --> 00:00:18.000
<b>Rabbit:</b> I told you she was the right Alice!

3
00:00:19.000 --> 00:00:20.000
<b>Mouse:</b> I am not convinced.
```


## Other formats

In addition to the VTT file format, you can also use TTML (Time Text Markup Language) which is a specific XML format that is currently supported in Flash and used by some major properties on the Internet. If you are migrating from Flash, this may be the best choice as you may have the files already. 

TTML files look a bit more complex:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <body>
    <div>
      <p begin="00:00:9.00" end="00:00:11.00">
        Alice: Curiouser and curiouser.
      </p>
      <p begin="00:00:17:00" end="00:00:18:00">
        Rabbit: I told you she was the right Alice!
      </p>
    </div>
  </body>
</tt>
```

You may also see captions in formats like `.srt` or others that may work best for your needs.


## Transcribing

Now that you know how to implement it, you need to transcribe all of your videos. You can watch, and rewatch, and rewatch them to capture all of the talking perfectly timed (I watched that Alice in Wonderland trailer 30 or 40 times and it is only a minute long). 

One way to simplify this process is to use YouTube's auto-generated captions. Simply upload your video to YouTube (you can set it to private) and choose the auto-caption feature. Once these have been created, it should only take one or two reviews of the video to make sure the captions match and correct things like spelling and proper nouns. YouTube then lets you download the caption file in many different formats, including WebVTT and SRT.

There are also services that can completely handle the transcription for you. These will typically start at $1 per minute for transcription with a fee of $0.25 per minute for the needed timestamping. Some also have subscription services.

A few well-reviewed services include:

- [Verbalink](https://www.verbalink.io/)
- [Speechpad](https://www.speechpad.com/)
- [Rev](https://www.rev.com/transcription)
- [3PlayMedia](https://www.3playmedia.com/)
