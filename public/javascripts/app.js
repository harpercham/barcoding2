

$("form").submit(function(e){
  e.stopImmediatePropagation();
  e.stopImmediatePropagation();

    var form_data = ($(this).serializeArray()[0].value);

        //ajax post
        $.ajax({
            type: "POST",
            url: '/check',
            data: form_data
          
          ,
          success: function (data, textStatus, jQxhr) {
              $('#response pre').html(data);
              window.location = '/';
          },
          error: function (jqXhr, textStatus, errorThrown) {
              console.log(errorThrown);
          }
        })
        });


