import {Bolsa, Documento} from "./bolsa";

declare enum SituacaoBolsa {
    AGUARDANDO_ANALISE,
    EM_ANALISE,
    APROVADO,
    REJEITADO,
    AGUARDANDO_CORRECAO
}

interface InscricaoBolsa {
    id: number,
    bolsa: Bolsa,
    documentos: Array<Documento>,
    dataCriacao: Date,
    situacao: SituacaoBolsa,
    motivoRetorno?: string,
    aluno: Aluno,
}
