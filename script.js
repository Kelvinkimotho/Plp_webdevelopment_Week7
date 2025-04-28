// This waits until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // This will retrieve saved theme from localStorage
    const currentTheme = localStorage.getItem("theme");

    // If a saved theme exists we apply it
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        // Here we set the default theme if no theme is saved
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light-mode");
    }

    // A button click event to toggle the theme
    document.getElementById("theme-toggle").addEventListener("click", function() {
        toggleTheme();
    });

    // This functions help us toggle between dark and light themes
    function toggleTheme() {
        console.log("Theme button clicked!");

        // Checking if current theme is dark, and switch accordingly
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light-mode");  // Here we save the new theme to localStorage
        } else {
            document.body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark-mode");  // Saving new theme to localStorage
        }

        console.log("Current Theme:", document.body.classList);  
    }

    // This is the animation effect for the button click
    document.getElementById("animateButton").addEventListener("click", function() {
        const neonBox = document.getElementById("neonBox");
        neonBox.classList.toggle("pulse");

        // Changing button text based on animation state
        if (neonBox.classList.contains("pulse")) {
            this.textContent = "Stop Pulsing!";
        } else {
            this.textContent = "Click Me!";
        }
    });
});
