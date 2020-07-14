


// Copy email address ----------------------------------------------------------
// function getEmailOnly(element) {
//   var emailRegex = /^(?:mailto:?)([a-zA-Z0-9_\-.]+@[a-zA-Z0-9-]+\.[a-zA-Z\-.]{2,})(?:\?subject\=.*)?$/;
//   return emailRegex.exec(element.getAttribute("href"))[1]
// }

// function getEmailElements() {
//   return document.querySelectorAll("[data-mailto]")
// }

// function generateCopyEmailButton(element) {
//   var email = getEmailOnly(element);
//   var newEl = document.createElement("button");
//   newEl.className = "c-email-button";
//   newEl.setAttribute("data-copy-email", true);
//   newEl.setAttribute("type", "button");
//   newEl.addEventListener("click", function(e) {
//     navigator.clipboard.writeText(email).then(function () {
//       console.log(email + ' copy successful!');
//     }).catch(function (error) {
//       console.error('failed to copy ' + email);
//       window.alert("Please enable clipboard access for this site.");
//     });
//   })
//   newEl.innerText = "Copy"
//   element.after(newEl);
// }

// function processEmailHrefs() {
//   var emailElements = getEmailElements();
//   emailElements.forEach(generateCopyEmailButton);
// }

// navigator.clipboard && navigator.permissions && navigator.permissions.query({
//   name: 'clipboard-write'
// }).then(function (permissionStatus) {
//   // Will be 'granted', 'denied' or 'prompt':
//   if (permissionStatus.state === "granted") {
//     processEmailHrefs();
//   }

//   // Listen for changes to the permission state
//   permissionStatus.onchange = function () {
//     if (permissionStatus.state === "granted") {
//       processEmailHrefs();
//     }
//   };
// });

// generateCopyEmailButton();
