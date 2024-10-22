// Array de objetos contendo o nome e a nota dos alunos
const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Ana', nota: 5.8 },
    { nome: 'Pedro', nota: 6.0 },
    { nome: 'Mariana', nota: 8.2 },
    { nome: 'Carlos', nota: 4.3 },
    { nome: 'Juliana', nota: 9.1 },
];

// Função para retornar alunos com nota maior ou igual a 6 utilizando forEach
function filtraAprovados(alunos) {
    const aprovados = [];
    
    alunos.forEach(function(aluno) {
        if (aluno.nota >= 6) {
            aprovados.push(aluno); // Adiciona o aluno ao array de aprovados
        }
    });

    return aprovados;
}

// Chamando a função para obter os alunos aprovados
const alunosAprovados = filtraAprovados(alunos);

// Exibindo os alunos aprovados
console.log(alunosAprovados);
