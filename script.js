/* =====================================================
   INTRO PAGE
===================================================== */

const continueBtn =
    document.getElementById("continueBtn");

const intro =
    document.getElementById("intro");

const mainSite =
    document.getElementById("mainSite");


continueBtn.addEventListener("click", function () {

    intro.classList.add("hide");

    setTimeout(function () {

        mainSite.classList.add("show");

        document.body.style.overflow = "auto";

    }, 500);

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("show");

});


/* Close menu after clicking a link */

document.querySelectorAll(".navbar a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("show");

        });

    });



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for contacting Easy Future Link Contracting LLC. We will get back to you shortly."
    );

    contactForm.reset();

});



/* =====================================================
   FOOTER YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .service, .why-item, .project"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});