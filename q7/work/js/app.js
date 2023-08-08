$(function(){
  $(".btn__submit").on("click", function(){
    console.log("名字");//コンソールに名字と表示
    console.log($("#family__name").val());//コンソールに"#family__nameの値を表示
    console.log("名前");//コンソールに名前と表示
    console.log($("#given__name").val());//コンソールに#given__nameの値を表示
    console.log("生年月日"); //コンソールに生年月日と表示
    console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日"); 
    //コンソールに.year、.month、.dayの値と文字を表示
    console.log("性別");//コンソールに性別と表示
    console.log($('input:radio[name="gender"]:checked').val()); //コンソールにname=genderのチェックされた値を表示
    console.log("職業");//コンソールに職業と表示
    console.log($(".occupation").val());//コンソールに.occupationの値を表示
    console.log("アカウント名");//コンソールにアカウント名と表示
    console.log($("#account__name").val()); //コンソールに#account__nameの値を表示
    console.log("メールアドレス"); //コンソールにメールアドレスと表示
    console.log($("#email").val());//コンソールに#emailの値を表示
    console.log("パスワード"); //コンソールにパスワードと表示
    console.log($("#password").val()); //コンソールに#passwordの値を表示
    console.log("確認用パスワード"); //コンソールに確認用パスワードと表示
    console.log($("#duplication__password").val()); //コンソールに#duplication__passwordの値を表示
    console.log("住所"); //コンソールに住所と表示
    console.log($("#address").val()); //コンソールに#addressの値を表示
    console.log("電話番号"); //コンソールに電話番号と表示
    console.log($("#tel").val()); //コンソールに#telの値を表示
    console.log("購読情報"); //コンソールに購読情報と表示
    $("input:checkbox[name='subscription']:checked").each(function(){
      //name='subscriptionで選択された値の数に応じてループ処理
      console.log($(this).val());//コンソールにname='subscription'で選択された値を表示
    });
  })
});