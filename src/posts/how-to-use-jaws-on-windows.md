---
title: HOWTO: Use JAWS on Windows
description: "Step-by-step guide on effectively using JAWS, a screen reader software, to navigate Windows, read documents, browse the web, and explore advanced features for individuals with visual impairments."
category: How-to
author: Ilknur Eren
date: 2022-06-04
tags:
  - howto
---

## Introduction
JAWS, Job Access With Speech, is a screen reader for Windows operating system users. JAWS assists individuals with visual impairments with interacting with computers by helping them navigate applications, read documents and browse the web on Windows operating systems. 
According to [WebAIM](https://webaim.org/projects/screenreadersurvey9/#primary), JAWS is the most popular screen reader on the market as of 2023.

In this article, we will provide step-by-step instructions on how to start using JAWS on Windows.

## User Guide
## Install JAWS
First, the user needs to install JAWS in order to use it. JAWS have several subscription plans for their users. JAWS can be installed on their website, [Freedom Scientific website](https://www.freedomscientific.com/products/software/jaws/). You can purchase a valid license that fits you. After purchasing a license, you can find JAWS on your download file or a file you saved the program in. Double click on it to start the installation process. The installer will guide you through the installation process, which will help you choose your desired language and installation options. After successfully downloading JAWS, restart your computer to finalize the set-up. You now have JAWS and are ready to use it.
Note for Developers: [Assistive Labs](https://assistivlabs.com/) is a tool to remotely connect developers to screen readers like JAWS on any device. 

### Getting Started with JAWS, (Basic commands)
Once JAWS is installed and you have restarted your computer, you are ready to use JAWS! You can manually launch JAWS by double clicking on the JAWS icon on your desktop or selecting it from your Start menu. After running JAWS, you can use your keyboard shortcuts to interact with your computer. Below are some basic commands you can familiarize yourself with to get started using JAWS.
- INSERT + H: This commands opens the JAWS Help system. The JAWS Help system provides comprehensive documentation on how to use JAWS effectively.
- Arrow Keys (Basic Navigation): JAWS relies on keyboard commands for navigation. Arrow keys allow you to move between elements on the screen, such as links, heading or form fields.
- TAB Key: Pressing TAB Key allows you to move forward between interactive elements in the application. 
- SHIFT + TAB Key: (Reverse Tab) Moves the focus backwards using your keyboard.
- H: Pressing the H key moves you between headings.
- INSERT + DOWN ARROW: This keyboard shortcut will allow you to read the current line in the website.
- INSERT + UP ARROW: This keyboard shortcut will allow you to read from the current position to the top of the document or application.
- ALT + TAB: This keyboard shortcut will allow you to switch between open applications or windows.
- WINDOWS KEY + M: This will minimize all windows, allowing you to access the desktop quickly.
- Control + F: This key allows you to open the search feature within your browser.
- INSERT + SPACE, J: This keyboard short opens Command Search, where you can browse JAWS commands.

Listed here are some basic keyboard shortcuts you can use to start using JAWS right away. For a full list of shortcut commands, you can visit [JAWS website](https://doccenter.freedomscientific.com/doccenter/doccenter/rs25c51746a0cc/2011-10-04_jawsandmagicreadingcommands/JAWSKeystrokes.htm). Help
JAWS provide many keyboard shortcuts for a variety of reasons. In the next section, we will explore some advanced features JAWS provide to their users. 

### Advanced features
JAWS is an incredible screen reader that has many advanced features you can explore. On top of providing a great screen reader experience, below are some advanced features you can try to customize JAWS.
- INSERT + J: This command opens JAWS settings. After opening JAWS settings, you can navigate through the various options to customize JAWS. Some options include:
-- Adjusting verbosity level to determine the amount of detail JAWS provides when reading text.
-- Customize punctuation settings to control how JAWS pauses and pronounces words. 
-- Voice Adjustment section. Here, you can modify voice speed, pitch, volume, and other voice-related settings to suit your preferences.

- INSERT + SPACE followed by the letter O: This keyboard command will open OCR, which is Optical Character Recognition. Move your cursor over the desired text and JAWS will read it aloud to you. OCR can be extremely helpful for accessing content in image-based PDFs. 
- INSERT + SPACE followed by V: Some applications may not be fully accessible to screen readers like JAWS. In those cases, we can use the feature called “Virtualizing”. This will allow JAWS to interact with the application’s interface more effectively, allowing you to navigate and access content within the application.

## JAWS for developers
It’s important for developers to test their website to make sure it's accessible. Understanding how individuals using JAWS interact with your website is extremely important. Below are some basic key controls to consider.
- Utilizing Semantic HTML
-- It’s extremely important to use correct semantic HTML for accessibility. Correct HTML gives JAWS and other screen readers information. For example, using correct `h` tags will give users access to headings with H Command. Using `nav` tags will inform your users that they are on a navigation field when going through the page. 

- Navigating Interactive Elements
-- The Enter/Space keyboard key allows JAWS to activate buttons, links and other interactive elements. Developers should make sure these elements are keyboard focusable.
-- Tab Key allows users to navigate through interactive elements. Developers should Tab through their website to make sure all correct elements are focusable to screen readers.

- Navigating Tables
-- JAWS allows users to navigate tables with CTRL + ALT + ARROW command key. Developers should make sure that the tables have all appropriate headers to convey meaningful messages to users.

## Conclusion
By following this comprehensive guide, you can download and use JAWS to navigate applications, read documents and browse the web. You can first start using JAWS basic commands to navigate through the web and applications. In time, you can explore advanced features and customize JAWS with your own shortcuts. JAWS is an incredible tool that opens the web and a world of tech to people with visual impairments.
