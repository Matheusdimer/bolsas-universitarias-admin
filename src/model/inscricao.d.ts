import { Bolsa, Documento } from "./bolsa";

export interface InscricaoBolsa {
    id: number,
    bolsa: Bolsa,
    documentos: Array<Documento>,
    dataCriacao: Date,
    situacao: 'AGUARDANDO_ANALISE' | 'EM_ANALISE' | 'APROVADO' | 'REJEITADO' | 'AGUARDANDO_CORRECAO',
    motivoRetorno?: string,
    aluno: Aluno,
    observacoes?: string
}
