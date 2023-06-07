function saveData(e) {
    // title.innerText='Add Product';
      let data_of_products = [];
      data_of_products = JSON.parse(localStorage.getItem("products"))
        ? JSON.parse(localStorage.getItem("products"))
        : [];
      for (var i = 0; i < radio_ele.length; i++) {
        if (radio_ele[i].checked) {
          var radio_val = radio_ele[i].value;
          console.log(radio_val);
        }
      }
      data_of_products.push({
        pname: pname.value,
        price: price.value,
        color: color.value,
        catagary: radio_val,
      });
      localStorage.setItem("products", JSON.stringify(data_of_products));
      alert("added product successfully");
      e.preventDefault();
      showData();
      emptyform();
    }
