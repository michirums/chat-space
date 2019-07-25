$(function(){
  $('#input-box').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'jason',
      processData: false,
      contentType: false
    })
  })
})