function hideElement(element: HTMLElement) {
  element.classList.add("blur-sm");
  element.classList.add("opacity-0");
  if (element.classList.contains("fade-in")) {
    return;
  }
  if (element.classList.contains("scroll-from-left")) {
    element.classList.add("translate-x-full");
    return;
  }
  if (element.classList.contains("scroll-from-right")) {
    element.classList.add("-translate-x-full");
    return;
  }
  element.classList.add("translate-y-full");
  element.classList.add("md:delay-300");
}

function animateElement(element: HTMLElement) {
  element.classList.remove("blur-sm");
  element.classList.remove("opacity-0");
  if (element.classList.contains("fade-in")) {
    return;
  }
  if (element.classList.contains("scroll-from-left")) {
    element.classList.remove("translate-x-full");
    return;
  }
  if (element.classList.contains("scroll-from-right")) {
    element.classList.remove("-translate-x-full");
    return;
  }
  element.classList.remove("translate-y-full");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target as HTMLElement;
    if (entry.isIntersecting) {
      animateElement(target);
    } else {
      hideElement(target);
    }
  });
});

const animationElements = document.querySelectorAll(
  ".scroll-from-left, .scroll-from-right, .scroll-from-bottom, .fade-in",
);

animationElements.forEach((element) => {
  observer.observe(element);
});
