---
name: Bug report
about: Is something not working as expected on the website? Let us know!
title: "[Bug] "
labels: "bug"
body:
  - type: markdown
    attributes:
      value: |
        Thank you for reporting a bug. Please fill out the following information:
  - type: textarea
    id: bug-report
    attributes:
      label: Bug description
      description: Please describe the bug you encountered. This includes the bug itself and where you encountered it.
    validations:
      required: true
  - type: textarea
    id: bug-report
    attributes:
      label: Expected outcome
      description: Please describe what you would expect to happen if the bug did not exist.
    validations:
      required: true
  - type: textarea
    id: reproduce
    attributes:
      label: Steps to reproduce
      description: Please describe the steps we can take to reproduce the bug. This will help us locate and fix it.
    validations:
      required: true
  - type: dropdown
    id: device
    attributes:
      label: What device were you using when you encountered the bug?
      multiple: true
      options:
        - Phone
        - Tablet
        - Laptop Computer
        - Desktop Computer
        - Other
    validations:
      required: true
  - type: input
    id: operating-system
    attributes:
      label: Operating system and version
      description: What operating system were you using? What version is the operating system?
    validations:
      required: true
- type: input
    id: operating-system
    attributes:
      label: Operating system and version
      description: What operating system were you using? What version is the operating system?
    validations:
      required: true
  - type: input
    id: browser
    attributes:
      label: Web browser and version
      description: What web browser were you using? What version is the web browser?
    validations:
      required: true
  - type: input
    id: assistive-technology
    attributes:
      label: Assistive technology and version (optional)
      description: Were you using any assistive technology? Examples include NVDA, VoiceOver, screen magnification, high contrast mode, etc.
  - type: textarea
    id: additional-information
    attributes:
      label: Additional information
      description: Is there anything else we should know about?
  - type: checkboxes
    id: code-of-conduct
    attributes:
      label: Code of Conduct
      description: By submitting this Issue, you agree to follow our [Code of Conduct](https://www.a11yproject.com/code-of-conduct/).
      options:
        - label: I have read, and agree to follow this project's Code of Conduct
          required: true
---
