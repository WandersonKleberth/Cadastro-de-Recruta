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
    <p>Idade: ${age} anos</p>
    <button onclick="backToForm()">Voltar ao formulário</button>
    `;

    document.querySelector(".card").innerHTML = result;
}

document.querySelector("form").addEventListener("submit", handleSubmit);

function calculateAge (yearOfBirth) {
    const thisYear = new Date().getFullYear();
    return thisYear - yearOfBirth;
}

function backToForm() {
    const form = `
    <h1>Cadastro de Recrutas</h1>
    <h2>Preencha suas informações</h2>
    <form>
        <div class="form-group">
            <label for="firstName">Primeiro Nome:</label>
            <input type="text" id="firstName" name="firstName" placeholder="Digite seu primeiro nome" required>
        </div>
        <div class="form-group">
            <label for="lastName">Sobrenome:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Digite seu sobrenome" required>
        </div>
        <div class="form-group">
            <label for="fieldOfStudy">Campo de Estudo:</label>
            <input type="text" id="fieldOfStudy" name="fieldOfStudy" placeholder="Digite seu campo de estudo"
                required>
        </div>
        <div class="form-group">
            <label for="birthDate">Ano de Nascimento:</label>
            <input type="date" id="birthDate" name="birthDate" required>
        </div>
        <div class="form-group text-center"> <!-- Novo elemento div para centralizar o botão -->
            <button type="submit">Enviar</button>
        </div>
    </form>
    `;
    
    document.querySelector(".card").innerHTML = form;
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

