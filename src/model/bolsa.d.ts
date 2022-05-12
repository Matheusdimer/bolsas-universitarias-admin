import {TipoBolsa} from "./constants";

interface Bolsa {
    id: number,
    nome: string,
    descricao: string,
    requisitos: Array<Requisito>,
    documentos: Array<Documento>,
    editais: Array<Edital>,
    editalAtivo: boolean,
    tipoBolsa?: TipoBolsa,
    tipoInscricao?: 'INTERNA' | 'EXTERNA',
    url?: string,
    fotoId?: number;
}

interface Requisito {
    id?: number,
    descricao: string,
}

interface Edital {
    id: number,
    descricao: string,
    arquivoId: number,
    dataInicio: Date,
    dataFim: Date,
    dataResultado: Date,
}

interface Documento {
    id: number,
    nome: string,
    dataCriacao: Date,
    arquivoId?: number

}
