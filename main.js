document.addEventListener("DOMContentLoaded", () => {
  const filterHeaders = document.querySelectorAll(".filter-group h4");

  filterHeaders.forEach(header => {
    header.style.cursor = "pointer";
    header.addEventListener("click", () => {
      const list = header.nextElementSibling;
      if (list.style.display === "none") {
        list.style.display = "block";
      } else {
        list.style.display = "none";
      }
    });

    // Default collapsed on mobile
    if (window.innerWidth <= 768) {
      const list = header.nextElementSibling;
      if (list) list.style.display = "none";
    }
  });

  


});

