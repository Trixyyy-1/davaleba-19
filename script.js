const infoList = document.getElementById("cxrili");

function addInfo() {
  const info = prompt("listi");

  if (info) {
    const li = document.createElement("li");
    li.textContent = info;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "remove";

    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(deleteButton);

    infoList.appendChild(li);
  } else {
    alert("sheiyvane informacia tore daibridebi");
  }
}
