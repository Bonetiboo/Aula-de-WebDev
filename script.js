
console.log("Mensagem Normal"). // Apenas aparece uma mensagem normalmente no console.

console.info("Informação"). // Apenas aparece uma informação normalmente no console (quase igual o .log).

console.warn("Aviso"). // Aparece um aviso no console, em amarelo.

console.error("Erro"). // Aparece um erro no console, em vermelho.

console.table([
    {
        id: 1, tarefa: "EstudarJS"
    },
    {
        id: 2, tarefa: "Praticar código"
    }
]) // Cria uma tabela no console.

console.group("Grupo de logs")

console.log("log 1")
console.log("log 2")
console.log("log 3")

console.groupEnd. // Cria um grupo de diversos console.

console.time("Timer")

let casa = prompt("Escreva [casa]")

if (casa == "casa") {
    console.log("casa")
}

console.timeEnd("Timer") // Cria um timer no console.

// Comentário de uma linha. Simples comentário.

/*
Comentário de diversas linhas
Comentário de diversas linhas
Comentário de diversas linhas
Comentário de diversas linhas
Comentário de diversas linhas
Comentário de diversas linhas
*/

Variáveis

var antigo = "Forma antiga de declarar variáveis."

let usarName = "Maria"

const API_URL = "url"

let texto = "Olá"
console.log("texto = " + texto + " " + "tipo =" + " " + typeof(texto))

let numero = 69
console.log("numero = " + numero + " " + "tipo =" + " " + typeof(numero))

let isCompleted = false
console.log("isCompleted = " + isCompleted + " " + "tipo =" + " " + typeof(isCompleted))

let semValor
console.log("semValor = " + semValor + " " + "tipo =" + " " + typeof(semValor))

let nulo = null
console.log("nulo = " + nulo + " " + "tipo =" + " " + typeof(nulo))

let uniqueId = Symbol("id")
console.log("tipo =" + " " + typeof(uniqueId))
console.log(uniqueId)

let bigNumero = 999999999999999999999999699999999999999n
console.log("bigNumero = " + bigNumero + " " + "tipo =" + " " + typeof(bigNumero))

let tasks = [
{
  id: 1,
  title: "Aprender JavaScript",
  completed: false,
  assignee: {
    name: "João",
    email: "joao@example.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  }
}
]

console.table(tasks)

let hoje = new Date()
console.log(hoje)

let amanha = new Date("03-18-2026")
console.log(amanha)

let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
console.log(pattern.test("+55(11)92299-0899")); // true
console.log(pattern.test("+55(32)4888-9982"));  // true

console.log(parseFloat("42.54967854"))
console.log("42")
console.log (Boolean(""))

let a = 10
let b = 3

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

let contador1 = 0
let contador2 = 0

console.log(++contador1)
console.log(++contador1)

console.log(contador2++)
console.log(contador2++)

let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 2; // x = 0
x **= 3; // x = 0 (0 elevado a 3)

console.log(10 == "10");   // true (compara valor somente)
console.log(10 === "10");  // false (compara valor e tipo)
console.log(5 != "5");     // false (valor é igual)
console.log(5 !== "5");    // true (valor igual, mas tipo diferente)

console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)
