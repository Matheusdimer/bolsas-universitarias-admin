declare enum Sexo {
    MASCULINO,
    FEMININO,
    OUTRO
}

interface Aluno {
    id: number,
    nome: string,
    dataNascimento: Date,
    cpf: string,
    usuario: User,
    endereco?: Endereco,
    email?: string,
    contato?: string,
    sexo: Sexo,
}

interface User {
    username: string,
    password: string
}

interface Endereco {
    id: number,
    logradouro: string,
    bairro: string,
    municipio: Municipio,
    estado: Estado,
    cep: number,
}

interface Municipio {
    id: number,
    nome: string,
    estado: Estado,
}

interface Estado {
    id: number,
    nome: string,
    sigla: string,
}