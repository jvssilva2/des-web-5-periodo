const joao = {
    nome: "João",
    idade: 23,
    profissao: "Desenvolvedor"
};

console.log(joao.hasOwnProperty('nome'));

Pessoa = function(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
}