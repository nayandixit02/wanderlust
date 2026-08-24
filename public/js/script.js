(() => {
  "use strict";

  // ==========================================
  // 1. THEME SWITCHER (LIGHT / DARK MODE)
  // ==========================================
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");

  function getStoredTheme() {
    return (
      localStorage.getItem("exploro-theme") ||
      localStorage.getItem("wanderlust-theme") ||
      "light"
    );
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("exploro-theme", theme);
    if (themeIcon) {
      if (theme === "dark") {
        themeIcon.className = "fa-solid fa-sun text-warning";
        if (themeToggleBtn)
          themeToggleBtn.setAttribute("title", "Switch to Light Mode");
      } else {
        themeIcon.className = "fa-solid fa-moon text-primary";
        if (themeToggleBtn)
          themeToggleBtn.setAttribute("title", "Switch to Dark Mode");
      }
    }
  }

  // Initialize theme on script load
  const initialTheme = getStoredTheme();
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  // ==========================================
  // 2. BOOTSTRAP FORM VALIDATION
  // ==========================================
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  // ==========================================
  // 3. FLASH TOAST AUTO-DISMISS
  // ==========================================
  const flashAlerts = document.querySelectorAll(".toast-custom");
  flashAlerts.forEach((alert) => {
    setTimeout(() => {
      alert.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      alert.style.opacity = "0";
      alert.style.transform = "translateY(-20px)";
      setTimeout(() => {
        const container = alert.closest(".flash-container");
        if (container) container.remove();
        else alert.remove();
      }, 500);
    }, 4500);
  });

  // ==========================================
  // 4. TAX SWITCH TOGGLE HANDLER
  // ==========================================
  const taxSwitch = document.getElementById("taxSwitchCheck");
  if (taxSwitch) {
    taxSwitch.addEventListener("change", () => {
      const taxBadges = document.querySelectorAll(".tax-badge-info");
      taxBadges.forEach((badge) => {
        badge.style.display = taxSwitch.checked ? "inline-block" : "none";
      });
    });
  }

  // ==========================================
  // 5. WISHLIST FAVORITE TOGGLE
  // ==========================================
  const wishlistButtons = document.querySelectorAll(".card-heart-btn");
  wishlistButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle("favorited");
      const icon = btn.querySelector("i");
      if (icon) {
        if (btn.classList.contains("favorited")) {
          icon.classList.remove("fa-regular");
          icon.classList.add("fa-solid");
          icon.style.color = "#ef4444";
        } else {
          icon.classList.remove("fa-solid");
          icon.classList.add("fa-regular");
          icon.style.color = "";
        }
      }
    });
  });

  // ==========================================
  // 6. FILE UPLOAD IMAGE PREVIEW
  // ==========================================
  const fileInputs = document.querySelectorAll(".file-input-hidden");
  fileInputs.forEach((input) => {
    input.addEventListener("change", function () {
      const previewBox = document.getElementById("imagePreviewBox");
      const previewImg = document.getElementById("imagePreviewImg");
      const uploadText = document.getElementById("fileUploadText");
      if (this.files && this.files[0] && previewBox && previewImg) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewImg.src = e.target.result;
          previewBox.style.display = "block";
          if (uploadText)
            uploadText.innerText = "Selected: " + this.files[0].name;
        };
        reader.readAsDataURL(this.files[0]);
      }
    });
  });

  // ==========================================
  // 7. CATEGORY & LIVE SEARCH FILTERING
  // ==========================================
  const filterPills = document.querySelectorAll(".filter-pill");
  const listingCards = document.querySelectorAll(".listing-item-col");

  filterPills.forEach((pill) => {
    pill.addEventListener("click", function () {
      filterPills.forEach((p) => p.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-category");
      if (!category || category === "all") {
        listingCards.forEach((card) => (card.style.display = "block"));
        checkEmptyState();
        return;
      }

      listingCards.forEach((card) => {
        const title = card.getAttribute("data-title")?.toLowerCase() || "";
        const desc = card.getAttribute("data-description")?.toLowerCase() || "";
        const location = card.getAttribute("data-location")?.toLowerCase() || "";
        const country = card.getAttribute("data-country")?.toLowerCase() || "";

        const match =
          title.includes(category.toLowerCase()) ||
          desc.includes(category.toLowerCase()) ||
          location.includes(category.toLowerCase()) ||
          country.includes(category.toLowerCase());

        card.style.display = match ? "block" : "none";
      });

      checkEmptyState();
    });
  });

  function checkEmptyState() {
    const emptyState = document.getElementById("emptyListingState");
    if (!emptyState) return;
    const anyVisible = Array.from(listingCards).some(
      (c) => c.style.display !== "none"
    );
    emptyState.style.display = anyVisible ? "none" : "block";
  }

  // Quick Client Search Input Filter
  const searchInputs = document.querySelectorAll(".quick-search-input");
  searchInputs.forEach((inp) => {
    inp.addEventListener("input", function () {
      const q = this.value.toLowerCase().trim();
      if (!listingCards.length) return;

      listingCards.forEach((card) => {
        const title = card.getAttribute("data-title")?.toLowerCase() || "";
        const location = card.getAttribute("data-location")?.toLowerCase() || "";
        const country = card.getAttribute("data-country")?.toLowerCase() || "";

        if (title.includes(q) || location.includes(q) || country.includes(q)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      checkEmptyState();
    });
  });
})();
