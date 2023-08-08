$(function(){
  $(".drawer_button,.drawer_bg").on("click",function(){//".drawer_button"か.drawer_bgをクリックすると実行
    $(".drawer_button").toggleClass("active");//.drawer_buttonにactivクラスがなければ追加、あれば削除
    $(".drawer_bg").fadeToggle();//.drawer_bgが表示されていなければフェードイン、表示されていたらフェードアウト
    $("nav").toggleClass("open");//navにopenクラスがなければ追加、あれば削除
  });
});