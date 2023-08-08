$(function(){
  $(".nav li").on("click",function(){//.nav liをクリックしたら実行
    const index = $(".nav li").index(this);//クリックした.nav liが兄弟の中で何番目かを取得し、変数indexへ代入
    $(".description li").addClass("is-hidden"); //..description liにis-hiddenクラスを追加
    $(".description li").eq(index).removeClass("is-hidden");//クリックした〇番目の.description liのみ"is-hiddenクラスを削除
  });
});