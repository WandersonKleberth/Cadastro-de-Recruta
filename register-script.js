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