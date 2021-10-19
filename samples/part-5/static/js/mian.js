$(document).ready(function(){
    console.log('ready?')
    $('#addTodo').click(function (){
        console.log('yessssssssssssssssssssss')
        text_val = $('#todoInput').val()
        li_tag = `<li class="list-group-item">
        <span class="textTodo">
        ${text_val}
        </span>
       <span class="float-right btn btn-danger btn-sm mx-1"><i class="fa fa-close "></i></span>
       <span class="float-right btn btn-primary btn-sm editBtn"><i class="fa fa-edit "></i></span></li>`
        $('#todoList').append(li_tag)
    })

    $('body').on('click','.editBtn',function(){
        console.log('dare kar minkone')
        console.log($(this))
        old_text =  $(this).closest('li').find('.textTodo').text()
        input = `<input type="text"  placeholder="Enter todo" style="width:70%" value="${old_text}" >`
        $(this).closest('li').find('.textTodo').html(input)

    })
})
