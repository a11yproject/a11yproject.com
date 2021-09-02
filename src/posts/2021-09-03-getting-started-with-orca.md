---
title: Getting started with Orca screen reader on Gnome desktop environment on Ubuntu 20.04 LTS
description: A quick overview of getting started with Orca on Gnome desktop environment on Ubuntu 20.04 LTS.
category: Assistive technology
author: Joseph mawa
date: 2021-09-03
further_reading:
  - title: Orca screen reader documentation
    url: https://help.gnome.org/users/orca/stable/index.html.en
    source: Gnome foundation
  - title: Orca screen reader tutorial
    url: https://techblog.wikimedia.org/2020/07/02/an-orca-screen-reader-tutorial/
    source: Wikimedia foundation
tags:
  - assistivetechnology
---

## Introduction to Orca

Orca is a free, open-source screen reader developed under the GNOME project. Several Linux distributions have it installed by default.

This article will introduce you to the basics of Orca on Gnome desktop environment on Ubuntu version 20.04 LTS. There might be some slight variations if you are using a different desktop environment or using GNOME on a different Linux distribution. You need to consult the manual for your Linux distribution or desktop environment.

## Launching Orca

There are three ways you can launch Orca on Ubuntu 20.04 LTS. Below are the descriptions of these three methods.

- Use the keyboard shortcut <kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>S</kbd>.
- Type `orca` on a terminal window and then press the <kbd>Return</kbd> key. Alternatively, you can type `orca` in the Run dialog and press the <kbd>Return</kbd> key. You can use the key combination <kbd>Alt</kbd> + <kbd>F2</kbd> to open the Run dialog and the <kbd>ESC</kbd> key to close it.
- Open the Settings dialog and then select Universal access. You can then toggle the screen reader on or off.

After launching Orca, it will immediately start narrating the content of the focused application.

## The Orca Modifier keys

The modifier key used by Orca depends on the keyboard layout. Orca has two keyboard layouts, namely:

- Desktop keyboard layout
- Laptop keyboard layout

The Desktop keyboard layout is the default keyboard layout. Its Modifier key is the key combination <kbd>Insert</kbd> + <kbd>KP_Insert</kbd>. You can also use <kbd>KP_0</kbd> instead of <kbd>Insert</kbd> + <kbd>KP_Insert</kbd>. If it is your first time using Orca, most likely you are in the Desktop keyboard layout.

The modifier key for the Laptop layout is <kbd>CapsLock</kbd> .

You can change the keyboard layout from the preferences section. The preferences section is accessible by pressing the key combination <kbd>Orca modifier</kbd> + <kbd>Space</kbd> when the screen reader is on. You can also open the preferences section when launching Orca from the terminal by using the command `orca -S` instead of `orca`.

## The Learn Mode

There is a feature in Orca referred to as Learn Mode. It is a valuable feature if you are still learning Orca. It helps you to access the documentation quickly. If you press any key in this mode, Orca will announce the pressed keystroke and the associated Orca command bound to it.

Below is a table showing the keyboard shortcuts associated with the Learn Mode.

| Command                                | Description                                                    |
| -------------------------------------- | -------------------------------------------------------------- |
| <kbd>orca modifier</kbd> + <kbd>H</kbd> | Turn on Learn Mode                                             |
| <kbd>F1</kbd>                          | Open Orca documentation                                        |
| <kbd>F2</kbd>                          | Open shortcuts that apply _orca-wide_                          |
| <kbd>F3</kbd>                          | Open shortcuts that apply to the currently focused application |
| <kbd>Up</kbd> or <kbd>Down</kbd>       | Navigate open list of shortcuts                                |
| <kbd>ESC</kbd>                         | Turn off Learn Mode                                            |

## Reading documents and webpages

You can navigate through a document or an application as Orca narrates it for you. You can do that using the application's built-in caret navigation mode. Before we look at the basic navigation shortcuts, you should take note of the following.

- According to the orca documentation, caret navigation is turned off by default in some applications. You can toggle it on and off using the <kbd>F7</kbd> key in some Gnome applications.
- There is a bug reported in [Firefox doesn't work with Orca screen reader](https://bugzilla.redhat.com/show_bug.cgi?id=1221521) issue which prevents Firefox from working smoothly with Orca. The workaround is to launch Orca before launching Firefox.

Below are some of the keyboard shortcuts for navigating through a document, webpage, or application.

| Command                                                                  | Description                                 |
| ------------------------------------------------------------------------ | ------------------------------------------- |
| <kbd>Left</kbd> and <kbd>Right</kbd>                                     | Navigate the document and read by character |
| <kbd>Ctrl</kbd> + <kbd>Left</kbd> and <kbd>Ctrl</kbd> + <kbd>Right</kbd> | Navigate the document and read by word      |
| <kbd>Up</kbd> and <kbd>Down</kbd>                                        | Navigate the document and read by line      |
| <kbd>Shift</kbd> with the above commands                                 | To select and unselect text                 |

## Conclusion

This article covers the basics of getting started with Orca on Gnome desktop environment running on Ubuntu 20.04 LTS. As already mentioned, there might be slight variations if you are using a different desktop environment or Linux distribution. What we have covered here is just enough to get you started using Orca. You can roll up your sleeves and dive into the Orca documentation to get the full taste of this screen reader.
