import "./styles.css";

//テキストボックスの値を取得し、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグ生成
  const li = document.createElement("li");
  li.className = "list-row";

  //pタグ作成
  const p = document.createElement("p");
  p.innerText = inputText;

  //buttopn(完了)タグ作成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    alert("完了");
  });

  //buttopn(削除)タグ作成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    alert("削除");
  });

  //liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completebutton);
  li.appendChild(deletebutton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//追加ボタンクリックでonClickAdd発生
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
