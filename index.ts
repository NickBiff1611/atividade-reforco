import { Artigo } from "./Artigo";
import { Livro } from "./Livro";
import { Revista } from "./Revista";

const Livro1 = new Livro("Pequeno Principe", "Nicolas Biff", 300)
console.log(Livro1.cadastrar)
console.log("n/")
Livro1.exibirDetalhes();

const Revista1 = new Revista("Quatro Rodas", "João Marlon", 3)
console.log(Revista1.cadastrar)
console.log("n/")
Revista1.exibirDetalhes();

const Artigo1 = new Artigo("Peixario", "Lucas Borges", new Date(2021,5,14))
console.log(Artigo1.cadastrar)
console.log("n/")
Artigo1.exibirDetalhes();
