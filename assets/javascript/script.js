const first_name = document.querySelector('#first-name')
const last_name = document.querySelector('#last-name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const send_form = document.querySelector('#send-form')  

function valid_email(email) {    
    const regex_email = new RegExp (
        /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/
    )

    if(email.value === '') {
        email.setAttribute("placeholder" , "* Required field")
        return
    } else {    
        if(regex_email.test(email.value)) {
            return true
        } else {
            alert("Preencha seu e-mail corretamente!")
        }
    } 

    return false   
         
}

function valid_name(name) {
    const regex_name = new RegExp(
        /^[a-zA-Z]+([a-zA-Z])/
    )

    if(name.value === '') {
        name.setAttribute("placeholder" , "* Required field")
        return
    } 

}

function valid_last_name(lastName) {

    if(lastName.value === '') {
        lastName.setAttribute("placeholder" , "* Required field")
        return
    }

}

send_form.addEventListener('click', (event) => {  
    
    event.preventDefault()   
    
    valid_name(first_name)

    valid_last_name(last_name)

    if(!valid_email(email)) {        
        return
    }      

}) 