var loop = setInterval(function() {
  //li先頭要素のクローンを作成
  var clone = $(".slide li:first").clone(true);
  //li先頭要素のマージントップにマイナスを指定しアニメーションさせる
  $(".slide li:first").animate({
  marginTop : "0px"
  }, {
    //切り替えのスピード
  duration : 1500,
  complete : function() {
      //処理完了時に先頭要素を削除
      $(".slide li:first").remove();
      //クローンをliの最後に追加
      clone.clone(true).insertAfter($(".slide li:last"));
  }
  });
}, 1500);