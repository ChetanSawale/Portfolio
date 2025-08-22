document.addEventListener("DOMContentLoaded", function () {
    // --- COMPLETE DARK MODE TOGGLE LOGIC ---
    const toggle = document.getElementById("darkModeToggle");

    // First, check if the toggle button actually exists on the page
    if (toggle) {
        // This function updates the button's icon based on the current theme
        function updateIcon() {
            if (document.body.classList.contains("dark-mode")) {
                // In dark mode, show the sun icon
                toggle.innerHTML =
                    '<img src="sun.svg" alt="Toggle light mode" style="width: 24px; height: 24px;">';
            } else {
                // In light mode, show the moon icon
                toggle.innerHTML =
                    '<img src="moon.svg" alt="Toggle dark mode" style="width: 24px; height: 24px;">';
            }
        }

        // Event listener for when the button is clicked
        toggle.addEventListener("click", () => {
            // 1. Switch the theme on the body
            document.body.classList.toggle("dark-mode");

            // 2. Save the user's preference to localStorage
            const isDarkMode = document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDarkMode ? "dark" : "light");

            // 3. Update the button's icon
            updateIcon();
        });

        // --- APPLY THEME ON PAGE LOAD ---
        // Check localStorage when the page loads to see if the user had a saved theme
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }

        // Set the correct icon when the page first loads
        updateIcon();
    }

    // --- SCROLL ANIMATION LOGIC ---
    const sections = document.querySelectorAll(".fade-in-section");

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.1, // 10% of the item must be visible to trigger
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                // Stop observing the element once it has animated in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });
});
