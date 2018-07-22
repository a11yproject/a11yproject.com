---
layout: post
title: | 
    How&ndash;to: Using Caption Services with HTML5 Video
description: How to implement captions on HTML5 video (and audio) elements.
published: true
author: Greg Tarnoff
categories:
  - How-tos
---

One of the great things about the internet is the ability to share video. With HTML5 we can now use video without the use of Flash. This makes video more accessible as the controls are located in the DOM. However, to do accessible video right, you need to include captions and transcripts. 

In addition to making video accessible to those with hearing issues, having a transcript on the page can provide you localization of a video not always available in the local language. With a transcript on your page, you may increase your search engine rankings by making your content easily indexed by search engine crawl spiders.

So how do we pull off putting captions into a video after the video has been produced? Fortunately, the HTML5 video tag has a solution for us. We have to provide a transcript file in either XML or a VTT as a track element after your video source files.


    <video class="span12 readable" poster="your-video-poster.jpg" controls tabindex="0" title="My Movie">
        <source  src="your-video.m4v" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        <source  src="your-video.ogg" type='application/ogg' />
        <source  src="your-video.webm" type='video/webm' />
        <track src="your-video-transcript.vtt" label="English Captions" kind="subtitles" srclang="en-us" default />
    </video>

But what do these track files look like? 

## VTT
VTT is a specially formatted text document. It contains each of the queues numbered, followed by the start time & end time and finally the text. It is recommended to include in the text the name of the person talking. Some styling can be included in the text via basic HTML elements like ```i``` or ```b```.

We start it by declaring it a WEBVTT file.

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

## TTML

In addition to the VTT file format, you can also use TTML (Time Text Markup Language) which is a specific XML format that is currently supported in Flash and used by some major properties on the internet. If you are migrating from Flash, this may be the best choice as you may have the files already. 


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


## Transcribing
Now that you know how to implement it, you need to transcribe all of your videos. You can watch, and rewatch, and rewatch them to capture all of the talking perfectly timed (I watched that Alice in Wonderland trailer 30 or 40 times and it is only a minute long). However, there are services that can handle the transcription for you. These will typically start at $1 per minute for transcription with a fee of $0.25 per minute for the needed timestamping.

A few well-reviewed services include:
- [https://verbalink.com/](https://verbalink.com/)
- [https://www.speechpad.com/](https://www.speechpad.com/)
- [https://www.rev.com/transcription](https://www.rev.com/transcription)
