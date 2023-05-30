const listEmtpy = document.getElementById("listContent");
const imgEmpty = document.getElementById("imgEmpty");
const popupMesaje = document.getElementById("popupMesaje");
const InputText = document.getElementById("input-text");
const encode = () => {
  const list = document.getElementById("listContent");

  const checkbox = document.getElementById("checkbox");

  if (InputText.value === "") {
    inputPopupMesage("Sin texto");
  }

  if (InputText.value !== "") {
    if (textValidator()) {
      inputPopupMesage("No se permiten acentos/mayúsculas");
    } else {
      const newRow = document.createElement("div");
      const textEncoded =
        checkbox.value === "on"
          ? encodeText(InputText.value)
          : decodeText(InputText.value);

      newRow.innerHTML = `
        <span class="row-item"
          >${textEncoded}</span>
        <div class="list-options">
          <button">
            <img class="eye-img" src="public/eye.png" alt="copy img" />
          </button>
          <button onclick="copyItem(this)">
            <img src="public/copy.png" alt="copy img" />
          </button>
          <button class="delete-img" onclick="deleteItem(this)">
            <img src="public/delete.png" alt="copy img" />
          </button>
        </div>
        `;
      newRow.classList.add("row");
      InputText.value = "";
      list.appendChild(newRow);
      imgEmpty.style.display = "none";
    }
  }
};

const textValidator = () => {
  let validador = InputText.value.match(/^[a-z]*$/);
  if (!validador || validador === 0) {
    return true;
  }
};

const inputPopupMesage = (value, bg = "#e63946") => {
  const PopupMesage = document.getElementById("popupMesageText");
  popupMesaje.style.display = "flex";
  popupMesaje.style.opacity = "1";
  PopupMesage.style.backgroundColor = bg;
  setTimeout(() => {
    popupMesaje.style.display = "none";
    popupMesaje.style.opacity = "0";
  }, 5000);
  PopupMesage.innerText = value;
};

const encodeText = (stringEncriptada) => {
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

const decodeText = (stringDesencriptada) => {
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

const deleteItem = (row) => {
  row.parentElement.parentElement.parentElement.remove();
  inputPopupMesage("Texto Eliminado");
  if (listEmtpy.textContent === "") {
    imgEmpty.style.display = "flex";
  }
};

const copyItem = (row) => {
  const text = row.parentElement.parentElement.parentElement.firstElementChild;
  inputPopupMesage("Texto Copiado", "#ee6c4d");
  navigator.clipboard.writeText(text.textContent);
};
