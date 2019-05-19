---
layout: post
title: "A primer to vestibular disorders"
description: "Key facts, definitions, demographics and causes of vestibular disorders."
author: gray_ghost
published: true
categories:
  - Background
further_reading:
  - title: "Designing Safer Web Animation For Motion Sensitivity"
    url: https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity
    source: Val Head
    year: 2015
---

Your Vestibular system is the sensory mechanism in the inner ear that detects movement of the head and helps to control balance.

Imagine a world where your internal gyroscope is not working properly. Very similar to being intoxicated, things seem to move of their own accord, your feet never quite seem to be stable underneath you, and your senses are moving faster or slower than the rest of syour body.

Your personal steady-cam is broken. Whatever you look at tends to move regardless of if you are moving. Let's take that feeling and check out that great new website with animations and parallax scrolling. Does your stomach want to jump out of your throat? Well for many people it does.

## What is it?

People with vestibular disorders have a problem with their inner ear. It affects their balance as well as their visual perception of their world around them.

Sometimes the sensation lasts only a short while, but others can experience it for years. Walking can become a challenge and they may experience a constant risk of falling. Concentration can be diminished, leaving a person unfocused and consequently unproductive. It is often viewed as a "hidden" disability because it has no outward showing symptoms.

## Who is at risk?

The cause may be from illness, injury, or a genetic condition, but anyone can suffer from a vestibular disorder. According to [vestibular.org](https://vestibular.org/understanding-vestibular-disorder), a resource for people with vestibular disorders, as many as 35% of adults aged 40 years or older in the United States have experienced some form of vestibular dysfunction.

## What should you consider?

Don't make animations, sliders, videos, or rapid movement start automatically. Give an indicator of what movement will happen on the site when someone takes action. Allow the option to turn off any animation and movement at any point in the process.

Also, with the CSS [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query you can write conditional CSS animations and transitions based on the user's preference exposed from the browser settings. For example, you can disable all animations and transitions for users who explicitly prefers reduced motion:

```
img {
  animation: slidein 3s;
}

@keyframes slidein {
  from {
    margin-left: 100%;
  }

  to {
    margin-left: 0%;
  }
}

button {
  transition: rotate 1s;
}

button:focus,
button:hover { 
  transform: rotate(360deg);
}

@media (prefers-reduced-motion: reduce) {

  *,
  ::before,
  ::after {
    animation-duration: 0.001s !important;
    transition-duration: 0.001s !important;
  }
  
}
```

Note that rather than setting `animation: none` and `transition: none`, we instead set the `animation-duration` and `transition-duration` properties to a short enough duration that the motion itself is no longer noticable. This is to prevent issues in any case there is a dependency on the animation to run (such as when listening to the [`animationend` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event)).
