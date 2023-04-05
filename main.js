function handleComment() {
    /* CANCEL ALL OTHERS */
    const other_reply_containers = document.querySelectorAll('[id^=reply-form-container]')
    const other_edit_containers = document.querySelectorAll('[id^=edit-form-container]')
    other_reply_containers.forEach(e=>e.style.display="none")
    other_edit_containers.forEach(e=>e.style.display="none")

    const form_container = document.querySelector(`#comments`)
    if (form_container) {
        form_container.style.display = 'block';
    }
}

function handleCancelComment() {
    const reply_form_container = document.querySelector(`#comments`)
    if (reply_form_container) {
        reply_form_container.style.display = 'none';
    }
}

function handleReply(response_id) {
    /* CANCEL ALL OTHERS */
    const other_reply_containers = document.querySelectorAll('[id^=reply-form-container]')
    const other_edit_containers = document.querySelectorAll('[id^=edit-form-container]')
    const main_comment_container = document.querySelector('#comments')
    other_reply_containers.forEach(e=>e.style.display="none")
    other_edit_containers.forEach(e=>e.style.display="none")
    main_comment_container.style.display = 'none'
    
    const reply_form_container = document.querySelector(`#reply-form-container-${response_id}`)
    if (reply_form_container) {
        reply_form_container.style.display = 'block';
    }

    
}

function handleCancel(response_id) {
    const reply_form_container = document.querySelector(`#reply-form-container-${response_id}`)
    if (reply_form_container) {
        reply_form_container.style.display = 'none';
    }
}

function handleEdit(response_id) {
    /* CANCEL ALL OTHERS */
    const other_reply_containers = document.querySelectorAll('[id^=reply-form-container]')
    const other_edit_containers = document.querySelectorAll('[id^=edit-form-container]')
    const main_comment_container = document.querySelector('#comments')
    other_reply_containers.forEach(e=>e.style.display="none")
    other_edit_containers.forEach(e=>e.style.display="none")
    main_comment_container.style.display = 'none'

    const reply_form_container = document.querySelector(`#edit-form-container-${response_id}`)
    if (reply_form_container) {
        reply_form_container.style.display = 'block';
    }
}

function handleCancelEdit(response_id) {
    const reply_form_container = document.querySelector(`#edit-form-container-${response_id}`)
    if (reply_form_container) {
        reply_form_container.style.display = 'none';
    }
}
