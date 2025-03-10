document.addEventListener("DOMContentLoaded", function () {
    const scrollDown = document.getElementById("scroll-down");

    scrollDown.addEventListener("click", function () {
        const projectsSection = document.getElementById("projects");
        projectsSection.scrollIntoView({ behavior: "smooth" });
    });
}); 