/* --- LOAD COMMON HEADER & FOOTER --- */

document.addEventListener("DOMContentLoaded", function () {

    /* HEADER */
    const header = `
    <header>
        <nav>
            <h2 class="logo-text">Deomali Public School</h2>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="facility.html">Facilities</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="mandatory.html">Mandatory</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;

    /* FOOTER */
    const footer = `
    <footer>
        <div class="footer-container">

            <div class="footer-section">
                <h3>About School</h3>
                <p>Deomali Public School, Similiguda, Koraput is committed to quality education and overall student development.</p>
            </div>

            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="facility.html">Facilities</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Contact</h3>
                <p>Email: school@gmail.com</p>
                <p>Phone: +91 9999999999</p>
                <p>Location: Similiguda, Koraput</p>
            </div>

        </div>

        <div class="footer-bottom">
            <p>© 2026 Deomali Public School | All Rights Reserved</p>
        </div>
    </footer>
    `;

    /* INSERT INTO PAGE */
    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;

});


/* --- ACTIVE MENU HIGHLIGHT --- */
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});