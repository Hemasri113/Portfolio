document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const anchor = document.querySelector(link.getAttribute("href"));
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".project-card").forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});

const sectionObserver = new IntersectionObserver((sections) => {
  sections.forEach(section => {
    if (section.isIntersecting) {
      section.target.classList.add("fade-in");
      sectionObserver.unobserve(section.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll("section").forEach(sec => {
  sectionObserver.observe(sec);
});

window.addEventListener("scroll", () => {
  const headerEl = document.querySelector("header");
  if (headerEl) {
    headerEl.classList.toggle("shrink", window.scrollY > 50);
  }
});

const typeTarget = document.querySelector(".typed-text");
if (typeTarget) {
  const labels = ["Web Developer", "Programmer", "Learner"];
  let idx = 0, charPos = 0, removing = false;
  function typingEffect() {
    typeTarget.textContent = labels[idx].substring(0, charPos);
    if (!removing && charPos < labels[idx].length) {
      charPos++;
    } else if (removing && charPos > 0) {
      charPos--;
    } else {
      removing = !removing;
      if (!removing) idx = (idx + 1) % labels.length;
    }
    setTimeout(typingEffect, removing ? 100 : 200);
  }
  typingEffect();
}

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const userName = document.getElementById("name").value.trim();
    const userEmail = document.getElementById("email").value.trim();
    const userMsg = document.getElementById("message").value.trim();
    if (!userName || !userEmail || !userMsg) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Message submitted successfully!");
    contactForm.reset();
  });
}