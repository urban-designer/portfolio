document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const preview = document.getElementById("preview");

  links.forEach(link => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();
      const url = link.getAttribute("href");

      try {
        const response = await fetch(url);
        const content = await response.text();
        preview.innerHTML = content;
      } catch (error) {
        preview.innerHTML = `<p style="color:red;">Error loading content.</p>`;
        console.error(error);
      }
    });
  });
});
