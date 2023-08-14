// API
$(function () {
  function goDone(response){  //通信に成功した場合の処理内容
    $(".message").remove(); //メッセージを削除
    const totalResults=response[0]["opensearch:totalResults"];  //検索結果の総数
    if(totalResults===null){  //検索結果が0個（null）の場合、以下のメッセージを表示する
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
    }else{//表示するデータがある（追加で表示できる）場合
      for (index in response[0].items){ //取得したデータをHTML文に入れるループ処理
        const htmlCode = '<li class="lists-item"><div class="list-inner"><p>タイトル：'+(response[0].items[index].title ? response[0].items[index].title : "タイトル不明")+'</p><p>作者：'+(response[0].items[index]["dc:creator"]? response[0].items[index]["dc:creator"] : "作者不明")+'</p><p>出版社：'+(response[0].items[index]["dc:publisher"] ? response[0].items[index]["dc:publisher"]:"出版社不明")+'</p><a href="'+response[0].items[index]["@id"]+'" target="_blank">出版情報</a></div></li>';
        $(".lists").prepend(htmlCode);  //上記HTMLを表示（.listsの子要素として）
      };
    };
  };
  function gofail(err){//通信に失敗した場合の処理
    $(".message").remove(); //メッセージを削除
    if(err.status===0){//ステータスコードが0（レスポンスが返ってこない場合、正常に通信が行われなかった場合）
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');//エラーメッセージを表示
    }else if(err.status===400){//ステータスコードが400（リクエストが不正である、クライアント側のエラーの場合）
      $(".lists").before('<div class="message"> 検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>');//エラーメッセージを表示
    }else{//上記以外の場合（予期せぬエラーの場合）
      $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>');//エラーメッセージを表示
    };
  }
  function goReset(){ //リセットボタンを押したときの処理
    page = 1, //ページ数をリセット
    text = "";  //検索回数確認用テキストをリセット
    $(".lists").empty();  //検索結果（.listsの子）を削除
    $(".message").remove(); //メッセージを削除
    $("#search-input").val(""); //検索ボックスを空欄に
  };
  let page=1; //ページ数初期設定（1）
  let text="";//検索回数確認用テキスト初期設定
  //let searchWord="";//検索ボックスのテキストを入れる変数
  $(".search-btn").on("click", function () {  //検索ボタンを押したときの処理
    const searchWord = $("#search-input").val();  //検索ボックスのテキストを取得
    if(searchWord !== text){//同じワードでの検索が１回目かどうか(searchWordはtextの値か)？
      page = 1;//1回目ならpage=1を代入
      $(".lists").empty();//1回目なら.listsの要素を削除
      text = searchWord;//1回目ならtextにsearchWordを代入
    }else{//同じワードでの検索が2回目以降なら
      page++;//pageの値を+1
    }
    $.ajax({
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=`+searchWord+ "&format=json&p="+page + "&count=20", method: "GET"  //実行するURLとメソッド（GET）
    }).done(function (response) {//通信に成功した場合
      goDone(response["@graph"]);  //関数goDoneを実行
    }).fail(function (err) {//通信に失敗した場合
      gofail(err);//関数gofailを実行
    });
    $(".reset-btn").on("click", function () {//リセットを押したときの処理
      goReset();//goReaetを実行
    });
  });
});