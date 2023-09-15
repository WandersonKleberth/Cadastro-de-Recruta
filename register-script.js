function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target)

    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const fieldOfStudy = formData.get("fieldOfStudy")
    const birthDate = formData.get("birthDate")

    const age = calculateAge(new Date(birthDate).getFullYear())

    const result = `

    <h1>Informações do Recruta</h1>
    <p>Nome: ${firstName.toUpperCase()} ${lastName.toUpperCase()}</p>
    <p>Campo de Estudo: ${fieldOfStudy.toUpperCase()}</p>
    <p>Idade: ${age} anos</p>`;

    document.querySelector(".card").innerHTML = result;
}

document.querySelector("form").addEventListener("submit", handleSubmit);

function calculateAge (yearOfBirth) {
    const thisYear = new Date().getFullYear();
    return thisYear - yearOfBirth;
}

//Aqui está uma forma um pouco mais simples do codigo JS

// function handleSubmit(event) {
//     event.preventDefault();

//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const fieldOfStudy = document.getElementById("fieldOfStudy").value;
//     const birthDate = document.getElementById("birthDate").value;

//     const mensagem = `
//     Nome: ${firstName.toUpperCase()} ${lastName.toUpperCase()}
//     Campo de Estudo: ${fieldOfStudy.toUpperCase()}
//     Data de Nascimento: ${birthDate.toUpperCase()}`;

//     alert(mensagem);
// }
// document.querySelector("form").addEventListener("submit", handleSubmit);

