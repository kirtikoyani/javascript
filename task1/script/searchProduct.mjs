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
        // if(row.style.display == 'none'){
        // const node = document.createElement("h2");

        // // Create a text node:
        // const textnode = document.createTextNode("No Product Found");

        // // Append the text node to the "li" node:
        // node.appendChild(textnode);

        // // Append the "li" node to the list:
        // tBody.appendChild(node);
        // }
      }
    });
  };