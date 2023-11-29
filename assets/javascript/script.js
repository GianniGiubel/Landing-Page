const first_name = document.querySelector('#first-name')
const last_name = document.querySelector('#last-name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const send_form = document.querySelector('#send-form')  

function valid_name(name) {
    const regex_name = new RegExp(
        /^[a-zA-Z]+(\s[a-zA-Z]+)?$/
    )

    if(name.value === '') {
        name.setAttribute("placeholder" , "* Required field")
        name.classList.add("highlight")        
    } else {
        name.classList.remove("highlight")
        if(regex_name.test(name.value)) {
            return true
        } else {
            alert("Preencha seu nome (segundo nome(opcional)) sem utilizar números ou caracteres especiais!")
        }
    }

    return false

}

function valid_last_name(lastName) {
    const regex_last_name = new RegExp(
        /^[a-zA-Z]+(\s[a-zA-Z]+)?$/
    )

    if(lastName.value === '') {
        lastName.setAttribute("placeholder" , "* Required field")  
        lastName.classList.add("highlight")       
    } else {
        if(regex_last_name.test(lastName.value)) {
            return true
        } else {
            alert("Preencha seu sobrenome (segundo sobrenome(opcional)) sem utilizar números ou caracteres especiais!")
        }
    }

    return false

}

function valid_email(email) {    
    const regex_email = new RegExp (
        /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,}?$/
    )

    if(email.value === '') {
        email.setAttribute("placeholder" , "* Required field")
        email.classList.add("highlight")         
    } else {    
        if(regex_email.test(email.value)) {
            return true
        } else {
            alert("Preencha seu e-mail corretamente!")
        }
    } 

    return false   
         
}

function valid_message(message) {
    const regex_message = new RegExp(
        /^((?!\b(pênis|penis|desgraçado|desgracado|cacete|vagina|vágina)\b).)+?$/i
    )

    if(message.value !== '') {
        if(regex_message.test(message.value)) {
            return true
        } else {
            alert("Sua mensagem não pode conter palavras proibidas!")
            return false
        }
    }
}

function valid_form(){

    if(!valid_name(first_name)) {
        return
    }

    if(!valid_last_name(last_name)) {
        return
    }

    if(!valid_email(email)) {        
        return
    } 

    if(!valid_message(message)) {
        return
    }

}

send_form.addEventListener('click', (event) => {        
    
    valid_form() 

}) 