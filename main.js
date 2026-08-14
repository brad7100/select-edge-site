const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const year = document.getElementById("year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const form = document.getElementById("contact-form");
const success = document.getElementById("form-success");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Select Edge inquiry — ${interest || "General"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`
    );

    window.location.href = `mailto:brad@selectedge.com?subject=${subject}&body=${body}`;

    if (success) {
      success.classList.add("show");
    }
    form.reset();
  });
}
