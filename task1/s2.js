var radio_ele = document.getElementsByName("mac");
let addElm = document.getElementById("showProduct");

//  store data in localStorage

let updatebtn = document.getElementById("updatebtn");
updatebtn.style.display = "none";
let store_index = document.getElementById("store_index");
let signupbtn = document.getElementById("submit");
let checkbox = document.getElementById("checkbox");
let element = document.getElementById("parent_div");
let element2 = document.getElementById("child_div");
let myTable = document.getElementById("myTable");
let table_parent = document.getElementById("table_parent");
let tBody = document.getElementById("showProduct");
const label = document.querySelectorAll("label");
const btn = document.querySelectorAll("button");


function saveData(e) {
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
// data display on screen of local storage

function showData() {
  tBody.innerHTML = "";

  let data_of_products = JSON.parse(localStorage.getItem("products"));
  data_of_products.forEach((item, i) => {
    let tr = document.createElement("tr");
    tr.className =
      "bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600 border border-blue-500";
    tr.innerHTML = `<td style="padding:7px">${[i + 1]}</td>
          <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
        >
        ${data_of_products[i].pname}
        </th>
        <td class="px-6 py-4">${data_of_products[i].color}</td>
        <td class="px-6 py-4">${data_of_products[i].catagary}</td>
        <td class="px-6 py-4">${data_of_products[i].price}</td>
        <td class="px-6 py-4 text-right">
          <a
            href="#"
            class="font-medium text-blue-600 light:text-blue-500 hover:underline"
            onclick="edit(${i})" >Edit</a
          >
        </td>
        <td class="px-6 py-4 text-right">
          <a
            href="#"
            class="font-medium text-red-600 light:text-blue-500 hover:underline"
            onclick="deleted(${i})"
            >Delete</a
          >
        </td>`;

    addElm.appendChild(tr);
  });
}
showData();

// edit the data in localStorage & display on screen

function edit(i) {

  element.style.display='none';
  element2.style.display='none';
  const Timeout = setTimeout(form_popup, 500);

  function form_popup() {
    // formdisplay();
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

  document.getElementById("close").style.display = "block";

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
// update data on click edit


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

// close popup box

function close_popup() {

  let classesToAdd = [ 'bg-gradient-to-r', 'from-blue-300','to-blue-600', 'shadow-lg','text-white' ];
  element.classList.remove("bg-white");
  element.classList.add("from-blue-300");
  element2.classList.remove(...classesToAdd);
  btn.forEach((btnItem) => {
    btnItem.classList.remove("bg-white");
    btnItem.classList.remove("text-black");
  });
  label.forEach((labelItem) => {
    labelItem.classList.remove("text-white");
  });
  document.getElementById('close').style.display = "block";
  signupbtn.style.display = "block";
  updatebtn.style.display = "none";

  showData();

emptyform();
}

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

const searchFun = () => {
  let filter = document
    .getElementById("hs-table-search")
    .value.toUpperCase();

  let tr = myTable.getElementsByTagName("tr");

  Array.from(tr).filter((row, index) => {
    let td = row.getElementsByTagName("th")[0];
    if (td) {
      let textValue = td.innerHTML.toUpperCase();
      row.style.display = textValue.indexOf(filter) > -1 ? "" : "none";
    }
  });
};

function emptyform(){
  pname.value = "";
  color.value = "";
  price.value = "";
checkbox.checked = false;
}


// const searchFun = () => {
//   let filter = document
//     .getElementById("hs-table-search")
//     .value.toUpperCase();

//   let myTable = document.getElementById("myTable");

//   let tr = myTable.getElementsByTagName("tr");

//   for (var i = 1; i < tr.length; i++) {
//     let td = tr[i].getElementsByTagName("th")[0];
//     if (td) {
//       let textvalue = td.innerHTML;

//       if (textvalue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// };



//close popup

  // let classesToAdd = [ 'bg-gradient-to-r', 'from-blue-300','to-blue-600', 'shadow-lg','text-white' ];
  // element.classList.remove("bg-white");
  // element.classList.add("from-blue-300");
  // element2.classList.remove(...classesToAdd);
  // btn.forEach((btnItem) => {
  //   btnItem.classList.remove("bg-white");
  //   btnItem.classList.remove("text-black");
  // });
  // label.forEach((labelItem) => {
  //   labelItem.classList.remove("text-white");
  // });
  // document.getElementById('close').style.display = "block";
  // signupbtn.style.display = "block";
  // updatebtn.style.display = "none";