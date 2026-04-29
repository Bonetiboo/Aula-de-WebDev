// // Tipos de array

// const teste = new Array ("Teste1", "Teste2");
// const letras = Array.from("JavaScript");
// const prioridades = Array.of("Alta", "Média", "Baixa");

// console.log(teste, letras, prioridades);

// // Array literal (forma mais comum)

// const tarefas = [
//     'Estudar JavaScript',
//     'Revisar código',
//     'Varrer a casa',
//     'Comer'
// ];

// console.log("Array de tarefas: ", tarefas)
// console.log("Primeira tarefa: ", tarefas[0])
// console.log("Última tarefa: ", tarefas[tarefas.length-1])

// const nomes = ["Rafael"]
// nomes[0] = "daniel"
// console.log(nomes)

// nomes.push("rafael") // Coloca um elemento no array
// console.log(nomes)

// nomes.push("Sem nome")
// console.log(nomes)

// nomes.pop() // Tira o último elemento do array
// console.log(nomes)

// nomes.unshift("felipe") // Coloca um elemento no índice 0
// console.log(nomes)

// nomes.shift() // Tira o elemento de índice 0
// console.log(nomes)

// nomes.push("josé")
// nomes.push("augusto")
// nomes.push("lucas")
// nomes.push("roberto")
// nomes.push("andré")
// nomes.push("aristóteles")

// // Parâmetros do splice: o primeiro é o índice, o segundo é quantos elementos serão retirados e o terceiro é o elemento que será adicionado

// nomes.splice(2,1) // Retira um elemento do array no índice específico
// console.log(nomes)

// nomes.splice(2,0,"josé") // Põe um elemento no array no índice específico
// console.log(nomes)

// nomes.splice(2,1,"josefina") // Retira o atual e põe um novo elemento no índice específico
// console.log(nomes)

// // Repetição para arrays

// // forEach

// nomes.forEach((t, i) => {
//     console.log(`${i+1}.${t}`)
// })

// // .map

// const nomesComMaiusculo = nomes.map(t => t.toUpperCase(0))
// console.log(nomesComMaiusculo)

// // filter: filtra o array

// const nomesComL = nomes.filter(t => t.toLowerCase().includes("l"))
// console.log(nomesComL)

// // find: encontra o primeiro elemento que cumpre o critério

// const nomeComL = nomes.find(t => t.toLowerCase().includes("l"))
// console.log(nomeComL)

// // findIndex: encontra o índice do primeiro elemento que cumpre o critério

// const indice = nomes.findIndex(t => t.toLowerCase().includes("l"))
// console.log(indice)

// // reduce: para fazer somas

// const somaComprimentos = nomes.reduce((total,t) => + total + t.length, 0)
// console.log(somaComprimentos)

// Objetos

const tarefa = {
    id: 1,
    titulo: "Aprender sobre objetos",
    descricao: "Estudar propriedades e metodos",
    concluida: false,
    prioridade: "alta",
    dataCriacao: new Date()
}

// console.log(tarefa)
// console.log(tarefa.titulo) // para pegar um atributo específico do objeto
// console.log(tarefa["titulo"])

// const projetoTaskMaster = {
//   nome: "TaskMaster",
//   version: "1.0",
//   autor: "Curso JavaScript",
//   tarefas: [],
//   adicionarTarefa(titulo, prioridade = "média") {
//     const novaTarefa = {
//       id: this.tarefas.length + 1,
//       titulo,
//       prioridade,
//       concluida: false,
//       criada: new Date()
//     };
//     this.tarefas.push(novaTarefa);
//     console.log(`Tarefa "${titulo}" adicionada.`);
//     return novaTarefa;
//   },
//   listarTarefas() {
//     console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
//     this.tarefas.forEach(t => console.log(`- ${t.id}: ${t.titulo} (${t.prioridade})`));
//   }
// };

// console.log(projetoTaskMaster)
// console.log(projetoTaskMaster.tarefas)
// projetoTaskMaster.adicionarTarefa("Estudar JS", "Alta")

// for (let prop in tarefa) {
//     console.log(`${prop}`)
// }

// console.log(Object.keys(tarefa))
// console.log(Object.values(tarefa))

// const prioridades = ["baixa", "media", "alta"]

// const [baixa, media, alta] = prioridades

// const prioridades2 = [...prioridades]

// prioridades.push("altíssima")

// console.log(prioridades)
// console.log(prioridades2)

