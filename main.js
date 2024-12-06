const campoSenha = document.getElementById('campo-senha');
const botaoMais = document.querySelectorAll('.parametro-senha_botao')[1];
const botaoMenos = document.querySelectorAll('.parametro-senha_botao')[0];
const textoQuantidade = document.querySelector('.parametro-senha_texto');
let quantidadeCaracteres = 12;

// Função para gerar a senha
function gerarSenha() {
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';

    const opcoes = {
        maiusculo: document.querySelector('input[name="maiusculo"]').checked,
        minusculo: document.querySelector('input[name="minusculo"]').checked,
        numero: document.querySelector('input[name="numero"]').checked,
        simbolo: document.querySelector('input[name="simbolo"]').checked,
    };

    let caracteres = '';
    if (opcoes.maiusculo) caracteres += maiusculas;
    if (opcoes.minusculo) caracteres += minusculas;
    if (opcoes.numero) caracteres += numeros;
    if (opcoes.simbolo) caracteres += simbolos;

    if (!caracteres) {
        campoSenha.value = 'Selecione ao menos uma opção!';
        return;
    }

    let senha = '';
    for (let i = 0; i < quantidadeCaracteres; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[index];
    }

    campoSenha.value = senha;
}

// Alterar quantidade de caracteres
botaoMais.addEventListener('click', () => {
    if (quantidadeCaracteres < 30) {
        quantidadeCaracteres++;
        textoQuantidade.textContent = quantidadeCaracteres;
        gerarSenha();
    }
});

botaoMenos.addEventListener('click', () => {
    if (quantidadeCaracteres > 4) {
        quantidadeCaracteres--;
        textoQuantidade.textContent = quantidadeCaracteres;
        gerarSenha();
    }
});

// Gerar senha inicial
gerarSenha();
