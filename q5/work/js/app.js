$(function () {
  $(".dropdwn li").on({//.dropdwn liに対して
    mouseenter:function(){//マウスが重なったとき
      $(this).children("ul").stop().slideDown();//.dropdwn liの子要素ulをスライドダウン
    },
    mouseleave:function(){//マウスが離れたとき
      $(this).children("ul").stop().slideUp();//.dropdwn liの子要素ulをスライドアップ
    }
  });
});
