import "./styles.css";

//テキストボックスの値を取得し、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);
};

//追加ボタンクリックでonClickAdd発生
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
