import { MaterialLeitura } from "./MaterialLeitura";

export class Livro implements MaterialLeitura{
    titulo: string;
    autor: string;
    nomePagina: number;

    constructor(titulo: string, autor: string, nomePagina: number){
        this.titulo = titulo;
        this.autor = autor;
        this.nomePagina = nomePagina;
    }

    exibirDetalhes(): void {
        console.log(`titulo: ${this.titulo}, Autor: ${this.autor}, Pagina: ${this.nomePagina}`)
    }

    cadastrar():string {
        return "O Livro foi cadastrado: " + this.titulo;
    }
}