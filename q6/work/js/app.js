$(function () {
  const list = $('.food-list [data-category-type]');  // .food-listのdate値を取得
  $(".select-box").on('change', function() {//.select-boxの値が変化したら
    let select = $(this).val();// .select-boxの値を取得
    if (select == 'all'){//$selectの値がallの場合
        list.show();//$listのすべてを表示
    }else{//$selectの値がallではないの場合
      list.hide();//$listのすべてを非表示
      list.filter('[data-category-type = "' + select + '"]').show();//$selectに指定されたデータ型を持つ$listのみを表示
    }
  });
});