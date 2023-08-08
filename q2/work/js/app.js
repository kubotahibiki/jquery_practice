$(function(){
  $(".modal_open_button").on("click",function(){//.modal_open_buttonをクリックすると
    $(".modal_win").fadeIn();//.modal_winをフェイドイン
  });
  $(".modal_close_button").on("click",function(){//.modal_close_buttonをクリックすると
      $(".modal_win").fadeOut();//.modal_winをフェイドアウト
  });
});