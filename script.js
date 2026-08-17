const categoryButtons = document.querySelectorAll(".categories a");

const products = document.querySelectorAll(".product-card");

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const category = button.textContent;

        products.forEach(function(product) {

            const productName =
                product.querySelector("h3").textContent;

            if (category === "All") {

                product.style.display = "inline-block";

            } else if (
                productName
                    .toLowerCase()
                    .includes(category.toLowerCase().slice(0, -1))
            ) {

                product.style.display = "inline-block";

            } else {

                product.style.display = "none";

            }

        });

    });

});