function edit(i) {

    element.style.display='none';
    element2.style.display='none';
    const Timeout = setTimeout(form_popup, 500);

    function form_popup() {
      formdisplay();
      let classesToAdd = [ 'bg-gradient-to-r', 'from-blue-300','to-blue-600', 'shadow-lg','text-white' ];
      element.style.display='block';
      element2.style.display='block';
      element.classList.add("bg-white");
      element.classList.remove("from-blue-300");
      element2.classList.add(...classesToAdd);
      btn.forEach((btnItem) => {
        btnItem.classList.add("bg-white");
        btnItem.classList.add("text-black");
      });
      label.forEach((labelItem) => {
        labelItem.classList.add("text-white");
      });
    }

    // document.getElementById("close").style.display = "block";

    store_index.value = i;
    let data_of_products = JSON.parse(localStorage.getItem("products"));
    pname.value = data_of_products[i].pname;
    color.value = data_of_products[i].color;
    price.value = data_of_products[i].price;

    function gender(j) {
      radio_ele[j].checked = true;
    }
    if (data_of_products[i].catagary === radio_ele[0].value) {
      gender(0);
    } else if (data_of_products[i].catagary === radio_ele[1].value) {
      gender(1);
    }
    signupbtn.style.display = "none";
    updatebtn.style.display = "block";
    showData();
  }