const alunos = [
    {nome:'Violeta Pêra', nota: 6},
    {nome:'Edna Moda', nota:10},
    {nome:'Helena Pêra', nota: 4},
    {nome:'Buddy Pine', nota: 3},
    {nome:'Beto Pera', nota: 2},
    {nome:' Lúcio Barro', nota: 9},
    {nome:'Roberto Pêra', nota: 5}
]

const FiltroAlunosAprovado = (alunos) =>
    alunos.filter(alunos => alunos.nota >= 6);


const alunosAprovados = FiltroAlunosAprovado(alunos)

console.log(alunosAprovados)