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