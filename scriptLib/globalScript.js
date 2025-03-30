document.addEventListener("DOMContentLoaded", function () {
    // Load the footer dynamically
    fetch("./elements/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
            updateFooterYear(); // Call function after footer loads
        })
        .catch(error => console.error("❌ Error loading footer:", error));
});

function updateFooterYear() {
    let footerYearElement = document.getElementById("footerYear");
    if (footerYearElement) {
        footerYearElement.innerHTML = new Date().getFullYear();
        console.log("✅ Footer year updated successfully.");
    } else {
        console.error("❌ Error: Element with ID 'footerYear' not found.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => { // ✅ Delays execution in case of dynamic loading
        const hamMenu = document.querySelector(".ham-menu");
        const offScreenMenu = document.querySelector(".off-screen-menu");

        if (!hamMenu) {
            console.error("❌ Error: Hamburger menu not found! Make sure it exists in the HTML.");
            return;
        }

        if (!offScreenMenu) {
            console.error("❌ Error: Off-screen menu not found!");
            return;
        }

        hamMenu.addEventListener("click", () => {
            hamMenu.classList.toggle("active");
            offScreenMenu.classList.toggle("active");
            console.log("✅ Hamburger menu is working!");
        });
    }, 100); // ✅ Small delay to ensure dynamic content is loaded
});