const encriptar = () => {
  const list = document.getElementById("listContent");
  const InputText = document.getElementById("input-text");
  const checkbox = document.getElementById("checkbox");

  if (InputText.value !== "") {
    const newRow = document.createElement("div");

    const textEncoded =
      checkbox.value === "on"
        ? encriptarTexto(InputText.value)
        : desencriptarTexto(InputText.value);

    newRow.innerHTML = `
  <div class="row">
    <span class="row-item"
      >${textEncoded}</span
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

    InputText.value = "";
    list.appendChild(newRow);
  }
};

const encriptarTexto = (stringEncriptada) => {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
};

const desencriptarTexto = (stringDesencriptada) => {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
};

const changeValue = () => {
  const btnEncode = document.getElementById("btnEncode");
  const checkbox = document.getElementById("checkbox");
  checkbox.value = checkbox.value === "on" ? "off" : "on";
  btnEncode.textContent =
    checkbox.value === "on" ? "Encriptar" : "Desencriptar";
};
