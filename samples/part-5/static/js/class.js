

$(document).ready(function(){
    console.log('ready?')
    $('#addTodo').click(function(){
        console.log('hiiiiiiiiiii')
        input_val = $('#todoInput').val()
        li_tag = `<li class="list-group-item">
        <span class="textTodo">
        ${input_val}
        </span>
        <span class=" btn btn-danger btn-sm float-right deleteBtn" ><i class="fa fa-close "></i></span>
        <span class="float-right btn btn-primary btn-sm mx-1 editBtn"><i class="fa fa-edit "></i></span>
        </li>`
        $('.list-group').append(li_tag)
        $('#todoInput').val('')
    })

    $('body').on('click','.editBtn',function(){
        console.log('dare kar minkone')
        console.log($(this))
        console.log($(this).closest('li'))
        old_text =  $(this).closest('li').find('.textTodo').text()
        input = `<input type="text"  placeholder="edit todo" style="width:70%" value="${old_text}" >
        <span class="float-right btn btn-primary btn-sm mx-1 plusBtn"><i class="fa fa-plus "></i></span>
        `
        $(this).closest('li').find('.editBtn').hide()
        $(this).closest('li').find('.deleteBtn').hide()
        // $(this).closest('li').find('.deleteBtn').css('display','none')

        $(this).closest('li').find('.textTodo').html(input)

    })
})
