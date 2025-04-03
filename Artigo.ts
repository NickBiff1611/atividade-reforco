import { MaterialLeitura } from "./MaterialLeitura";

export class Artigo implements MaterialLeitura{
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date){
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhes(): void {
        console.log(`Artigo: ${this.titulo}, Autor: ${this.autor}, Data de Publicação: ${this.dataPublicacao.toLocaleDateString}`)
    }

    cadastrar(): string {
        return ("O Artigo foi cadastrado: " + this.titulo)
    }
}