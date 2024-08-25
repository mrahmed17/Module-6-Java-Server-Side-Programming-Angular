document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btn-toggle").forEach(function (btnToggle) {
    btnToggle.addEventListener("click", function () {
      const targetId = this.getAttribute("data-bs-target");
      const targetCollapse = document.querySelector(targetId);

      // Close other open collapses
      document.querySelectorAll(".collapse.show").forEach(function (collapse) {
        if (collapse !== targetCollapse) {
          collapse.classList.remove("show");
        }
      });

      // Toggle current collapse
      targetCollapse.classList.toggle("show");
    });
  });
});
