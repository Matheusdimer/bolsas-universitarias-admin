declare enum TipoBolsa {
    MUNICIPAL = 'M',
    ESTADUAL = 'E',
    FEDERAL = 'F',
    INSTITUCIONAL = 'I',
    CONVENIO = 'C'
}

interface Bolsa {
    id: number,
    nome: string,
    descricao: string,
    requisitos: Array<Requisito>,
    documentos: Array<Documento>,
    editais: Array<Edital>,
    editalAtivo: boolean,
    tipo: TipoBolsa,

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
