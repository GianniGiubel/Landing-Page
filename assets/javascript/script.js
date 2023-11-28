const input_form = [...document.querySelectorAll('.input_form')]
const send_form = document.querySelector('#send-form')  

function valid_email() {
    console.log("hello!")
}

function check_empty_input() {
    const empty_input = input_form.filter((input) => input.value === '')
    empty_input.forEach((input) => input.setAttribute("placeholder" , "* Required field"))
    
    if(empty_input.length == 0) {
        valid_email()
    }
}

function valid_form() {
    check_empty_input()
} 

send_form.addEventListener('click', () => {     
    valid_form()
}) 