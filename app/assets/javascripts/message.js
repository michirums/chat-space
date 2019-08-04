$(function(){
  function buildHTML(message){
    var imgHTML = ""
    message.image ? imgHTML = `<img src='${message.image}'>` : imgHTML = "";
    
    var html =`<div class="message" data-message_id="${message.id}">
                <div class="message__upper-info">
                  <div class="message__upper-info__talker">
                  ${message.user_name}
                  </div>
                  <div class="message__upper-info__date">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="message__text">
                  ${message.content}
                  <p>
                  ${imgHTML}
                  </p>
                </div>
              </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html  = buildHTML(data);
      $('.messages').append(html);
      $('.new_message')[0].reset();
      $('.new_message').removeAttr('disabled');
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })

    .fail(function(){
      alert('error');
    })

    .always(() => {
      $(".submit-btn").removeAttr("disabled");
    });
  });

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      last_message_id = $('.messages .message:last').data('message_id'); //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
      $.ajax({
        url: 'api/messages', //ルーティングで設定した通りのURLを指定
        type: 'get', //ルーティングで設定した通りhttpメソッドをgetに指定
        dataType: 'json',
        data: {id: last_message_id}, //dataオプションでリクエストに値を含める
      })

      .done(function(messages){
        var insertHTML = ''; //追加するHTMLの入れ物を作る
        messages.forEach(function (message){ //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
          insertHTML += buildHTML(message); //メッセージが入ったHTMLを取得
          $('.messages').append(insertHTML); //メッセージを追加
        })
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      })

      .fail(function(){
        alert('自動更新に失敗しました');
      })
    }
  };
  setInterval(reloadMessages, 5000);
});
