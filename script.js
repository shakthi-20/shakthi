// Set footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Reveal + copy email when button clicked (email not written directly in HTML)
const revealBtn = document.getElementById("reveal-email");
const emailData = document.getElementById("email-data");
const emailStatus = document.getElementById("email-status");

if (revealBtn && emailData) {
  revealBtn.addEventListener("click", async () => {
    const user = emailData.dataset.user;
    const domain = emailData.dataset.domain;
    if (!user || !domain) return;

    const email = `${user}@${domain}`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
        if (emailStatus) {
          emailStatus.textContent = `Copied: ${email}`;
        }
      } else {
        if (emailStatus) {
          emailStatus.textContent = email;
        }
      }
    } catch (err) {
      if (emailStatus) {
        emailStatus.textContent = email;
      }
    }
  });
}
