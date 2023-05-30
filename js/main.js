const listEmtpy = document.getElementById("listContent");
const imgEmpty = document.getElementById("imgEmpty");
const popupMesaje = document.getElementById("popupMesaje");
const InputText = document.getElementById("input-text");
const pairs = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

const encoder = () => {
  const list = document.getElementById("listContent");
  const checkbox = document.getElementById("checkbox");

  if (InputText.value === "") {
    inputPopupMesage("Sin texto");
    return;
  }

  if (textValidator()) {
    inputPopupMesage("No se permiten acentos/mayúsculas");
    return;
  }

  const newRow = document.createElement("div");
  const textEncoded =
    checkbox.value === "on"
      ? encodeText(InputText.value)
      : decodeText(InputText.value);

  newRow.innerHTML = `
        <span class="row-item"
          >${textEncoded}<span class="hidden"></span></span>
        <div class="list-options">
          <label class="switcher">
            <input
              id="checkbox"
              type="checkbox"
              value="on"
              onclick="hiddenItem(this)"
            />
            <img class="eye-img" src="public/eye.png" alt="copy img" />
          </label>
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
};

const textValidator = () => {
  const isValidate = /[^a-z 0-9]/g.test(InputText.value);
  return isValidate;
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

const encodeText = (encodeValue) => {
  encodeValue = encodeValue.toLowerCase();

  for (let i = 0; i < pairs.length; i++) {
    if (encodeValue.includes(pairs[i][0])) {
      encodeValue = encodeValue.replaceAll(pairs[i][0], pairs[i][1]);
    }
  }
  return encodeValue;
};

const decodeText = (decodeValue) => {
  decodeValue = decodeValue.toLowerCase();

  for (let i = 0; i < pairs.length; i++) {
    if (decodeValue.includes(pairs[i][1])) {
      decodeValue = decodeValue.replaceAll(pairs[i][1], pairs[i][0]);
    }
  }
  return decodeValue;
};

const changeValue = () => {
  const btnEncode = document.getElementById("btnEncode");
  const checkbox = document.getElementById("checkbox");
  checkbox.value = checkbox.value === "on" ? "off" : "on";
  btnEncode.textContent =
    checkbox.value === "on" ? "Encriptar" : "Desencriptar";
};

const deleteItem = (row) => {
  row.parentElement.parentElement.remove();
  inputPopupMesage("Texto Eliminado");
  if (listEmtpy.textContent === "") {
    imgEmpty.style.display = "flex";
  }
};

const copyItem = (row) => {
  const text = row.parentElement.parentElement.firstElementChild;
  inputPopupMesage("Texto Copiado", "#ee6c4d");
  navigator.clipboard.writeText(text.textContent);
};

const hiddenItem = (row) => {
  let initial =
    row.parentElement.parentElement.parentElement.firstElementChild
      .firstElementChild;
  if (row.value === "off") {
    initial.style.opacity = "1";
    initial.style.display = "block";
    row.value = "on";
  } else {
    initial.style.opacity = "0";
    initial.style.display = "none";
    row.value = "off";
  }
};
