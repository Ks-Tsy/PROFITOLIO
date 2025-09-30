// ===== Highlight active nav link =====
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// ===== Smooth scroll for internal links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===== Portfolio Lightbox =====
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.style.display = "none";
lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,0.8)";
lightbox.style.zIndex = "1000";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
document.body.appendChild(lightbox);

const content = document.createElement("div");
content.style.maxWidth = "90%";
content.style.maxHeight = "80%";
lightbox.appendChild(content);

const img = document.createElement("img");
img.style.width = "100%";
img.style.height = "auto";
img.style.borderRadius = "10px";
content.appendChild(img);

const video = document.createElement("iframe");
video.style.width = "100%";
video.style.height = "500px";
video.style.borderRadius = "10px";
video.style.display = "none";
video.setAttribute("allowfullscreen", "");
content.appendChild(video);

const close = document.createElement("span");
close.innerHTML = "&times;";
close.style.position = "absolute";
close.style.top = "20px";
close.style.right = "30px";
close.style.fontSize = "40px";
close.style.color = "#fff";
close.style.cursor = "pointer";
lightbox.appendChild(close);

close.addEventListener("click", () => {
  lightbox.style.display = "none";
  video.src = "";
});

// Open lightbox for images
document.querySelectorAll(".portfolio-item img").forEach(el => {
  el.addEventListener("click", () => {
    lightbox.style.display = "flex";
    img.src = el.src;
    img.style.display = "block";
    video.style.display = "none";
  });
});

// Open lightbox for video links
document.querySelectorAll(".portfolio-item a").forEach(link => {
  if (link.href.includes("youtube") || link.href.includes("vimeo")) {
    link.addEventListener("click", e => {
      e.preventDefault();
      lightbox.style.display = "flex";
      img.style.display = "none";
      video.style.display = "block";
      video.src = link.href.replace("watch?v=", "embed/");
    });
  }
});

// Close lightbox when clicking background
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    video.src = "";
  }
});
 


