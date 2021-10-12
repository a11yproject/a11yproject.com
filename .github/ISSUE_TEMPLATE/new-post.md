---
name: New post
about: Suggest a post you'd like to write
title: "[Post] "
labels: "post"
body:
  - type: markdown
    attributes:
      value: |
        Thank you for your interest in writing a post! Please fill out the following information:
  - type: textarea
    id: description
    attributes:
      label: Your idea
      description: Please describe the post you'd like to write in 2–4 sentences, and how that post would be a good match for The A11Y Project.
    validations:
      required: true
  - type: textarea
    id: outline
    attributes:
      label: Outline (optional)
      description: Optionally include a proposed outline for the post.
  - type: textarea
    id: additional-information
    attributes:
      label: Additional information
      description: Is there anything else we should know?
  - type: checkboxes
    id: contributing-guidelines
    attributes:
      label: Contributing Guidelines
      description: By submitting this issue, you agree to follow our [Contributing Guidelines](https://www.a11yproject.com/contributing-guidelines/).
      options:
        - label: I have read, and agree to follow this project's Contributing Guidelines
          required: true
  - type: checkboxes
    id: content-style-guide
    attributes:
      label: Content Style Guide
      description: By submitting this Issue, you agree to follow our [Content Style Guide](https://www.a11yproject.com/content-style-guide/).
      options:
        - label: I have read, and agree to follow this project's Content Style Guide
          required: true
  - type: checkboxes
    id: code-of-conduct
    attributes:
      label: Code of Conduct
      description: By submitting this Issue, you agree to follow our [Code of Conduct](https://www.a11yproject.com/code-of-conduct/).
      options:
        - label: I have read, and agree to follow this project's Code of Conduct
          required: true
---
