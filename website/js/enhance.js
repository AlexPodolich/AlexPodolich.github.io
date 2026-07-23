/* Progressive enhancements: scroll-reveal, sticky-nav state, active section, footer year */
(function () {
    "use strict";

    // --- Footer year ---
    var yearEl = document.getElementById("year");
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

    // --- Sticky nav background on scroll ---
    function onScroll() {
        document.body.classList.toggle("scrolled", window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // --- Scroll reveal ---
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add("in-view"); });
    }

    // --- Active nav link based on section in view ---
    var navLinks = Array.prototype.slice.call(document.querySelectorAll("#sidemenu a"));
    var sections = navLinks
        .map(function (link) { return document.querySelector(link.getAttribute("href")); })
        .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.getAttribute("id");
                    navLinks.forEach(function (link) {
                        link.classList.toggle("active", link.getAttribute("href") === "#" + id);
                    });
                }
            });
        }, { threshold: 0.5 });
        sections.forEach(function (sec) { spy.observe(sec); });
    }
})();
