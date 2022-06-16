export declare enum TipoBolsa {
  MUNICIPAL = 'MUNICIPAL',
  ESTADUAL = 'ESTADUAL',
  FEDERAL = 'FEDERAL',
  INSTITUCIONAL = 'INSTITUCIONAL',
  CONVENIO = 'CONVENIO'
}

export enum SituacaoBolsa {
  AGUARDANDO_ANALISE = 'AGUARDANDO_ANALISE',
  EM_ANALISE = 'EM_ANALISE',
  APROVADO = 'APROVADO',
  REJEITADO = 'REJEITADO',
  AGUARDANDO_CORRECAO = 'AGUARDANDO_CORRECAO'
}

export const SituacoesBolsa: { [situacao: string]: { description: string, class: string } }  = {
  AGUARDANDO_ANALISE: { description: 'Aguardando análise', class: 'badge-info' },
  EM_ANALISE: { description: 'Em análise', class: 'badge-primary' },
  APROVADO: { description: 'Aprovado', class: 'badge-success' },
  REJEITADO: { description: 'Rejeitado', class: 'badge-danger' },
  AGUARDANDO_CORRECAO: { description: 'Aguardando correção', class: 'badge-warning' },
}

export const TiposBolsa = [
  { id: 'MUNICIPAL', description: 'Municipal'},
  { id: 'ESTADUAL', description: 'Estadual'},
  { id: 'FEDERAL', description: 'Federal'},
  { id: 'INSTITUCIONAL', description: 'Institucional'},
  { id: 'CONVENIO', description: 'Convênio'},
];

export const Sexos = [
  { id: 'MASCULINO', description: 'Masculino'},
  { id: 'FEMININO', description: 'Feminino'},
  { id: 'OUTRO', description: 'Outro'},
];

export const TiposInscricao = [
  { id: 'INTERNA', description: 'Interna'},
  { id: 'EXTERNA', description: 'Externa'}
];
