$(function(){
  function buildHTML(message){
    var imgHTML = ""
    message.image ? imgHTML = `<img src='${message.image}'>` : imgHTML = "";
    var html =`<div class="message">
                <div class="message__upper-info">
                  <div class="message__upper-info__talker">
                  ${message.name}
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
  })
})