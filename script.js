const CADASTRO = "https://estagios-ine-api.onrender.com/api/v1/auth/cadastro";
const LOGIN = "https://estagios-ine-api.onrender.com/api/v1/auth/login";

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const entrar = document.querySelector("#entrar");
const cadastrar = document.querySelector("#cadastrar");

entrar.addEventListener("click", async () => {
	try {
		const { data } = await axios.post(LOGIN, {
			email: email.value,
			senha: senha.value,
		});
		sessionStorage.setItem("token", data.token);
		const logout = document.querySelector("#logout");
		logout.classList.remove("hidden");
		const body = document.querySelector("body");
		const boasvindas = document.createElement("h1");
		boasvindas.style = "font-size: 2rem; color: white; text-align: center;";
		boasvindas.innerHTML = `Olá, ${data.usuario.nome}`;
		body.appendChild(boasvindas);
	} catch (error) {
		alert(error.message);
		return;
	}
});

cadastrar.addEventListener("click", async () => {
	try {
		const { data } = await axios.post(CADASTRO, {
			nome: nome.value,
			email: email.value,
			senha: senha.value,
		});
		alert("Usuário cadastrado com sucesso!");
	} catch (error) {
		alert(error.message);
		return;
	}
});
