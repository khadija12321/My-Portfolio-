document.addEventListener("DOMContentLoaded", function() {
    var portfolioLinks = document.querySelectorAll("portfolios a");
    var portfolioItems = document.querySelectorAll("portfolio-items");

    portfolioLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            var filter = this.getAttribute("data-filter");

            portfolioItems.forEach(function(item) {
                if (filter === "All" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
