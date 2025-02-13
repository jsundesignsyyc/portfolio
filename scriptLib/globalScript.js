
//footer with dynamic year display
// document.getElementById("footerYear").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    let footerYearElement = document.getElementById("footerYear");

    if (footerYearElement) {
        footerYearElement.innerHTML = new Date().getFullYear();
        console.log("Footer year updated successfully.");
    } else {
        console.error("Error: Element with ID 'footerYear' not found.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the page title
    let pageTitle = document.title;
    
    // Select the last <li> inside the topBar
    let topBarTitle = document.querySelector(".topBar ul li:last-child");

    // Set the top bar title based on the page title
    if (topBarTitle) {
        topBarTitle.textContent = pageTitle;
    }
});