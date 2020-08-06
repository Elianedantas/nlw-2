// procurar o botão
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener('click', cloneField)

// executar uma açao
function cloneField() {
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpar
        field.value = ""
    })

    // colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
