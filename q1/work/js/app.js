$(function(){
//q1
  $("#q1").css("color","green"); //#q1の文字色を緑にする
//q2
  $("#q2").on("click",function(){//#q2をクリックすると実行
    $(this).css("background","pink");//#q2の背景色をピンクにする
  });
//q3
  $("#q3").on("click",function(){//#q3をクリックすると実行
    $(this).fadeOut(3000);//3秒かけてフェイドアウト
  });
//q4
  $("#q4").on("click",function(){ //#q4をクリックすると実行
    $(this).addClass("large");//#q4にlargeというクラスを追加
  });
//q5
  $("#q5").on("click",function(){//#q5をクリックすると実行
    $(this).prepend("DOMの中の前")//Q5のテキストの前に文字を追加
    .append("DOMの中の後")//Q5のテキストの後ろに文字を追加
    .before("DOMの前")//#q5要素の前に文字を追加
    .after("DOMの後");//#q5要素の後ろに文字を追加
  });
//q6
  $("#q6").on("click",function(){//#q6をクリックすると実行
    $(this).animate({"margin-top": 100,"margin-left":100},2000);//#q6のmarginを２秒かけて変更するアニメーション
  });
//q7
  $("#q7").on("click",function(){//#q7をクリックすると実行
    console.log(this);//コンソールにidのノードを表示
  });
//q8
  $("#q8").on({//#q8に対して
    mouseenter:function(){//マウスが重なったとき
      $(this).addClass("large");//#q8にlargeクラスを追加
    },
    mouseleave:function(){//マウスが離れたとき
      $(this).removeClass("large");//#q8からlargeクラスを削除
    }
  });
//q9
  $("#q9 li").on("click",function(){//#q9 liをクリックすると
    const index = $(this).index();//クリックした要素が兄弟要素の中で何番目にあるのかを取得、変数indexの代入
    alert(index);//変数indexをアラートとして表示
  });
//q10
  $("#q10 li").on("click",function(){//#q10 liをクリックすると
    const index = $(this).index();//クリックした要素が兄弟要素の中で何番目にあるのかを取得、変数indexの代入
    $("#q11 li").eq(index).addClass("large-text");//#q11 liの〇番目にlarge-taxtクラスを追加
  });
});