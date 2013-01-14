---
layout: post
title: |
    Quick Tip: Never use maximum-scale=1.0
tldr: Why you never ever should use maximum-scale=1.0 in your viewport meta tag.
# date: 
# last_updated:
categories:
  - Quick Tip
---
Using the viewport meta tag the wrong way can hinder users with visual problems to use your website. By setting `maximum-scale=1.0`, you are disabling the functionality to use pinch zoom on mobile devices, and forcing users to view your page a certain way.

The **bad** way:

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">


The **good** way:

    <meta name="viewport" content="width=device-width, initial-scale=1.0">


Avoiding `maximum-scale=1.0` allows your site to meet users needs and provide a better experience.