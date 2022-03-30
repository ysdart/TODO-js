import "./styles.css";

//入力欄から未完了のTODOへの要素作成
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
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了buttonの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素(li)
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //li以下を初期化
    addTarget.textContent = null;

    //pタグ作成
    const p = document.createElement("p");
    p.innerText = text;

    //戻すbuttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すbuttonの親タグ(li)を完了リストから削除
      deleteFromCompleteList(backButton.parentNode);
    });

    //liタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  }); //完了ボタン終了

  //buttopn(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除buttonの親タグ(li)を未完了リストから削除(外部関数化)
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
}; //未完了のTODOへの要素作成終了

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//完了リストから指定の要素を削除
const deleteFromCompleteList = (deleteTarget) => {
  document.getElementById("complete-list").removeChild(deleteTarget);
};

//追加ボタンクリックでonClickAdd発生
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
