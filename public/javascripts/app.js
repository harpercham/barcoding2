
$('button').click(function () {
    var i = ((this.id).split(/(\d+)/))[1];
    var action = ((this.id).split(/(\d+)/))[0];

    var password = prompt("Please enter password");
    
    if (password !== '69570113') {
        alert('Action: failed/cancelled');
    }
    else {
    alert(action.concat(' successfully'));
    $("#row".concat(i))[0].innerText = action;
    if (action == 'approved') { $("#row".concat(i))[0].style.color = "#008000"; }
    if (action == 'rejected') { $("#row".concat(i))[0].style.color = "#FF0000"; }
    $.ajax({
        type: "POST",
        url: '/'.concat(action),
        data: i
      });
    }
});

$("form").submit(function(){
    event.preventDefault(); //prevent default action 
    var form_data = ($(this).serializeArray()[0].value);

        //ajax post
        $.ajax({
            type: "POST",
            url: '/check',
            data: form_data
          }).done(function (response) { //
            $("#server-results").html(response);
        });
        location.href="./item";

    });


