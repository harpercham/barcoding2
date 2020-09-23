

$("form").submit(function(){
    event.preventDefault(); //prevent default action 
    var form_data = ($(this).serializeArray()[0].value);

        //ajax post
        $.ajax({
            type: "POST",
            url: '/check',
            data: form_data
          })
        window.location.reload();
    });


