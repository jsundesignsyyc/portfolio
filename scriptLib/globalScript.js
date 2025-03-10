
//footer with dynamic year display
// document.getElementById("footerYear").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    fetch("./elements/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
            updateFooterYear(); // Call function after footer loads
        })
        .catch(error => console.error("Error loading footer:", error));
});

function updateFooterYear() {
    let footerYearElement = document.getElementById("footerYear");
    if (footerYearElement) {
        footerYearElement.innerHTML = new Date().getFullYear();
        console.log("Footer year updated successfully.");
    } else {
        console.error("Error: Element with ID 'footerYear' not found.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (!hamburger || !navLinks) {
        console.error("Error: Hamburger or Nav Links not found!");
        return;
    }

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

