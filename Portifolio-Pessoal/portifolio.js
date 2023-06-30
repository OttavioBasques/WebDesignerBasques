//Obter valores do formulário
function validarForm() {
    var nome = document.getElementById('Nome').value
    var email = document.getElementById('Email').value
    var msg = document.getElementById('Msg').value
    //Validar as informações
    if (nome == "") {
        alert('Preencha todos os campos requeridos')
        return false //Impede o envio do formulário
    }
    if (email == "")  {
        alert('Preencha todos os campos requeridos')
        return false
    }
    if (msg == "") {
        alert('Preencha todos os campos requeridos')
        return false
    }
    //Codificar e gravar cookies
    document.cookie = `nome=${encodeURIComponent(nome)}`
    document.cookie = `email=${encodeURIComponent(email)}`
    document.cookie = `msg=${encodeURIComponent(msg)}`

    
    //Enviar formulário válido
    return true
    

}