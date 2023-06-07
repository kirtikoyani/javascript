updatebtn.addEventListener("click", function (e) {
    e.preventDefault();
    let data_of_products = JSON.parse(localStorage.getItem("products"));
    let store_index = document.getElementById("store_index").value;
    if (pname.value == "") {
        alert("Please fill productname data");
    } else if (price.value == "") {
        alert("Please fill price data");
    } else if (color.value == "") {
        alert("Please fill color data");
    } else if(!checkbox.checked){
      alert("please fill the checkbox")
    }
    else {
        data_of_products[store_index].pname = pname.value;
        data_of_products[store_index].price = price.value;
        data_of_products[store_index].color = color.value;
        var radio_val;
        for (var i = 0; i < radio_ele.length; i++) {
            if (radio_ele[i].checked) {
                radio_val = radio_ele[i].value;
            }
        }
        data_of_products[store_index].catagary = radio_val;
        alert("update successful");
    }

    localStorage.setItem("products", JSON.stringify(data_of_products));
    close_popup();
})