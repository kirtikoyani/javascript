let submit = document.getElementById("submit");
let checkbox = document.getElementById("checkbox");
let element = document.getElementById("parent_div");
let element2 = document.getElementById("child_div");
let myTable = document.getElementById("myTable");
let table_parent = document.getElementById("table_parent");
let tBody = document.getElementById("showUser");
let label = document.querySelectorAll("label");
let btn = document.querySelectorAll("button");
let title = document.getElementById("formTitle");
let form_parent= document.getElementById('form_parent');
form_parent.style.display='none';
let updatebtn = document.getElementById("updatebtn");
updatebtn.style.display = "none";

// form display when click on add product btn

function formdisplay(){
    form_parent.style.display='block';
    table_parent.style.display='none';
    title.innerText='Add Product';
}

//  store data in localStorage

function saveData(e) {
  let user_add_data = [];
  user_add_data = JSON.parse(localStorage.getItem("api_data"))
    ? JSON.parse(localStorage.getItem("api_data"))
    : [];

  user_add_data.push({
    first_name: fname.value,
    last_name: lname.value,
    email: email.value,
    avatar: img.value,
    id: "",
  });
  localStorage.setItem("api_data", JSON.stringify(user_add_data));

  console.log(user_add_data);
  alert("login successful");
  e.preventDefault();
  showData();
  emptyform();
}
// saveData()

async function fetchUserData() {
  const response1 = await fetch(`https://reqres.in/api/users?page=1`);
  // const response2 = await fetch(`https://reqres.in/api/users?page=2`);
  const response2 = await JSON.parse(localStorage.getItem("api_data"));

  const userData1 = await response1.json();
  const userData2 = await response2;
  if (userData2 != null) {
    var newarrayUsers = [...userData1.data, ...userData2];
    for (i in newarrayUsers) {
      newarrayUsers[i].id = +i + 1;
    }
  } else {
    newarrayUsers = userData1.data;
  }
//   let all_user_data = [];

//   all_user_data = JSON.parse(localStorage.getItem("all_user_data"))
//     ? JSON.parse(localStorage.getItem("all_user_data"))
//     : [];
//         all_user_data.push(...newarrayUsers);

//     localStorage.setItem("all_user_data", JSON.stringify(all_user_data));
  return newarrayUsers;
}
let showData = async(e) => {

    let users =  await fetchUserData();
    // console.log(users);
    // //   console.log(all_user_data);
    // let all_user_data = [];
    //    all_user_data = JSON.parse(localStorage.getItem("all_user_data"))
    //   ? JSON.parse(localStorage.getItem("all_user_data"))
    //   : [];
    //   all_user_data.push(...users);
    //   localStorage.setItem("all_user_data", JSON.stringify(all_user_data));

    // let all_users = JSON.parse(localStorage.getItem("all_user_data"));
    // console.log(all_users)
    users.forEach((i) => {
        let tr = document.createElement("tr");
        tr.className =
          "bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600 border border-blue-500";
        tr.innerHTML = `<td style="padding:7px">${i.id}</td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white">${i.first_name}
            </th>
            <td class="px-6 py-4">${i.last_name}</td>
            <td class="px-6 py-4">${i.email}</td>
            <td class="px-6 py-4"><img src="${i.avatar}" alt=""></td>
            <td class="px-6 py-4 text-right"><a href="#" class="font-medium text-blue-600 light:text-blue-500 hover:underline" onclick="edit(${i.id})" >
            Edit</a>
            </td>
            <td class="px-6 py-4 text-right">
              <a href="#" class="font-medium text-red-600 light:text-blue-500 hover:underline" onclick="deleted(${i.id})">Delete</a>
            </td>`;

        tBody.appendChild(tr);
    });
};
showData();
// edit the data in localStorage & display on screen

async function edit(i) {

    const Timeout = setTimeout(form_popup, 500);

    function form_popup() {
      formdisplay();
      element.style.display='block';
      element2.style.display='block';
      title.innerText='Edit Product';
      let classesToAdd = [ 'bg-gradient-to-r', 'from-blue-300','to-blue-600', 'shadow-lg','text-white' ];
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
    let users =  await fetchUserData();
    document.getElementById("close").style.display = "block";
    store_index.value = i;
    // console.log(users[i-1])
    // let data_of_products = JSON.parse(localStorage.getItem("all_user_data"));
    // console.log(data_of_products)
    fname.value = users[i-1].first_name;
    lname.value = users[i-1].last_name;
    email.value = users[i-1].email;
    img.value = users[i-1].avatar;

    submit.style.display = "none";
    updatebtn.style.display = "block";
    showData();
  }
// close popup box

function close_popup() {
    location.reload();
    showData();
    clearForm();
  }
  // deleted data

function deleted(i) {

    if (confirm("Are you sure to delete the item??") == true) {
        let data_of_products = JSON.parse(localStorage.getItem("products"));
        data_of_products.splice(i, 1);
        localStorage.setItem("products", JSON.stringify(data_of_products));
        showData();
    };

  }

  // clear form

function clearForm(){
    pname.value = "";
    color.value = "";
    price.value = "";
  checkbox.checked = false;
  }