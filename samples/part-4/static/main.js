$(document).ready(function () {
    console.log('im readey')

    $('#firstBtn').click(function () {
        console.log('click on btn')
        $('p').text('maktab sharif')
    })
    $('.secondBtn').click(function () {
        console.log('click on btn')
        $('#cell').html('<span class="btn btn-warning">add span</span>')
        // $('tbody tr:last-child td:first-child').text('MmM')
        // $('tbody tr:eq(1) td:first-child').text('MmM')
    })
    $('button[course="maktab"]').click(function () {
        console.log('click on btn ')
        console.log(this)
        $(this).closest('tr').children().filter(':first-child').text('mohammad')
        // $(this).closest('tr').children().filter(':eq(0)').text("aa bb cc")

    })
    // تغییر رنگ سطرهای فرد
    // $('tr:odd').css('background','#f1f1f1')

    $('#refrence').click(function () {
        a_tag = '<a href="https://www.w3schools.com/jquery/jquery_selectors.asp">' + 'LINK -PLS CLICK' + '</a>'
        $(this).closest('tr').children().filter(':eq(0)').html(a_tag)
    })
    $("p.multiEvent").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });
    $("#hideBtn").click(function(){
     $("p.multiEvent").hide();
    });

    $("#showBtn").click(function(){
        $("p.multiEvent").show();
    });
    $("#toggleBtn").click(function(){
        $("p.multiEvent").toggle();
        // راه اول
        if($(this).hasClass('btn-primary')){
            $(this).removeClass('btn-primary')
            $(this).addClass('btn-warning')

        }
        else {
            $(this).removeClass('btn-warning')
            $(this).addClass('btn-primary')
        }
        // پایان راه اول
        // راه دوم
        // $(this).toggleClass('btn-warning','btn-primary')
        // پایان راه دوم
    });
    $("#slideUpBtn").click(function(){
        $("img").slideUp("slow");;
    })
    $("#slideDownBtn").click(function(){
        $("img").slideDown("slow");;
    })

    $('#add-email').click(function(){
        console.log('click here hooooooooooora')
        selectedInput = $('#exampleInputEmail1').val()
        if(selectedInput){

            console.log('email on input',$('#exampleInputEmail1').val())
            $('ul').append('<li>'+selectedInput+'</li>')
            $('#exampleInputEmail1').val('')
        }
        else {
            console.log('emptyyyyyyyyyyyyyyyyyyyyyyy')
            alert(':|')
        }
    })
    $('#clean-email').click(function(){
        console.log('clean')
        $('ul').empty()
        // $('ul').remove()
    })
    



})