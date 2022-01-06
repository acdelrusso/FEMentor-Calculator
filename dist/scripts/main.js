
var tip;

$('.input__percent').click(function(){



    $('.input__percent').removeClass('active');

    $(this).addClass('active');

    var tip = Number($(this).attr('id'));
    console.log(tip);

   
});

$(document).on('keypress', function(e, tip){

    

    if(e.which == 13){

        var bill = parseFloat($('#bill').val());
        var people = parseFloat($('#number-of-people').val());
        var tip = parseFloat($('.active').attr('id'));

        if ($('#custom-percent').val() > 0){
            tip = parseFloat($('#custom-percent').val())
        }

        console.log(bill, people, tip);

        $('.a3').text('$' + parseFloat((bill * (tip / 100)) / people).toFixed(2));

        $('.a7').text('$' + parseFloat((bill + (bill * (tip / 100)))/people).toFixed(2));

    };

    
});

$('.results__reset').click(function(){
    $('.input__percent').removeClass('active');
    $('input').val('0');
    $('#custom-percent').val('Custom');
    $('.results__result').text('$0.00');
})
