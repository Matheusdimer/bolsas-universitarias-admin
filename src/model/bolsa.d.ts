interface Bolsa {
    id: number,
    nome: string,
    descricao: string,
    requisitos: Array<{
        id: number,
        descricao: string,
    }>,
    documentos: Array<Documento>,
    editais: Array<{
        id: number,
        descricao: string,
        arquivoId: number,
        dataInicio: Date,
        dataFim: Date,
        dataResultado: Date,
    }>,
    editalAtivo: boolean,

}


interface Documento {
    id: number,
    nome: string,
    dataCriacao: Date,
    arquivoId?: number

}