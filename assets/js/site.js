(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navPanel = document.querySelector("[data-nav-panel]");

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navPanel.classList.toggle("is-open", !expanded);
    });

    navPanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navPanel.classList.remove("is-open");
      });
    });
  }

  const revealNodes = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealNodes.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.getAttribute("data-copy-target");
      const target = targetId ? document.getElementById(targetId) : null;
      if (!target) {
        return;
      }

      const value = "value" in target ? target.value : target.textContent || "";

      try {
        await navigator.clipboard.writeText(value);
        const previous = button.textContent;
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = previous;
        }, 1800);
      } catch (error) {
        if ("select" in target) {
          target.focus();
          target.select();
        }
      }
    });
  });

  document.querySelectorAll("[data-mailto-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const submitter = form.querySelector("[type='submit']");
      const statusNode = form.querySelector("[data-mailto-status]");
      const formData = new FormData(form);
      const emailTo = form.getAttribute("data-mailto-to") || "hello@bohodigitalservices.com";
      const lines = [];

      const primaryFields = [
        ["Name", formData.get("name")],
        ["Email", formData.get("email")],
        ["Business name", formData.get("business_name")],
        ["Website URL", formData.get("website_url")],
        ["Help needed", formData.get("help_type")],
        ["Budget range", formData.get("budget")],
        ["Timeline", formData.get("timeline")],
        ["Anything else worth knowing", formData.get("notes")],
      ];

      primaryFields.forEach(([label, value]) => {
        if (typeof value === "string" && value.trim()) {
          lines.push(`${label}: ${value.trim()}`);
        }
      });

      const fitValues = formData.getAll("fit");
      if (fitValues.length > 0) {
        lines.push("");
        lines.push("Fit checklist:");
        fitValues.forEach((value) => lines.push(`- ${value}`));
      }

      const subjectBase = typeof formData.get("help_type") === "string" && formData.get("help_type")
        ? formData.get("help_type")
        : "Website or SEO inquiry";
      const subject = `Boho inquiry: ${subjectBase}`;
      const body = lines.join("\n");
      const mailtoUrl = `mailto:${encodeURIComponent(emailTo)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (statusNode) {
        statusNode.textContent = "Opening your email app with the inquiry drafted.";
      }
      if (submitter) {
        submitter.textContent = "Opening email...";
        window.setTimeout(() => {
          submitter.textContent = "Draft inquiry email";
        }, 1800);
      }

      window.location.href = mailtoUrl;
    });
  });
})();
