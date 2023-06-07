// deleted data

function deleted(i) {

    if (confirm("Are you sure to delete the item??") == true) {
        console.log("delete", i);
        let data_of_products = JSON.parse(localStorage.getItem("products"));
        data_of_products.splice(i, 1);
        localStorage.setItem("products", JSON.stringify(data_of_products));
        showData();
    };

  }