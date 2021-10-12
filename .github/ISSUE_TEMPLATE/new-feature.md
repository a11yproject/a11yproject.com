---
name: New feature
about: Propose new functionality.
title: "[Feature] "
labels: "feature"
body:
  - type: markdown
    attributes:
      value: |
        Thank you for suggesting a feature. Please fill out the following information:
  - type: textarea
    id: feature-suggestion
    attributes:
      label: Feature suggestion
      description: Please describe the functionality you would like to have added to the site, and why you are proposing it.
    validations:
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
