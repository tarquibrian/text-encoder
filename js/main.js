const encriptar = () => {
  const list = document.getElementById("listContent");
  const newRow = document.createElement("div");
  const msg = "hola gente";
  newRow.innerHTML = `
  <div class="row">
    <span class="row-item"
      >items1 </span
    >
    <div class="list-options">
      <button>
        <img class="eye-img" src="public/eye.png" alt="copy img" />
      </button>
      <button><img src="public/copy.png" alt="copy img" /></button>
      <button class="delete-img">
        <img src="public/delete.png" alt="copy img" />
      </button>
    </div>
  </div>
  `;
  list.appendChild(newRow);
  console.log(list);
};
