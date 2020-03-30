$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =`<div class="message">
      <div class="message__info">
      <p class="message__info--name">
      ${message.user_name}
      </p>
      <p class="message__info--date">
      ${message.created_at}
      </p>
      </div>
      <p class="message__content">
      ${message.content}
      </p>
      
      </div>`
      return html;
      } else {
      var html =`<div class="message">
      <div class="message__info">
      <p class="message__info--name">
      ${message.user_name}
      </p>
      <p class="message__info--date">
      ${message.created_at}
      </p>
      </div>
      <p class="message__content">
      ${message.content}
      </p>
      
      </div>`
      return html;
      };
    }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);      
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
});