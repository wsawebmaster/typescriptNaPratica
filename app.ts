interface Teste {
  nome: string,
  idade: number
}

interface humano {
  nome: string,
  idade: number,
  endereco: string
}

class Mamifero {
  public quandidadeDePatas: number;
  public temPelos: boolean;
  public nome: string;

  constructor(nome: string, quantidadeDePatas: number, temPelos: boolean) {
    this.nome = nome;
    this.quandidadeDePatas = quantidadeDePatas;
    this.temPelos = temPelos;
  }

  public dizerNome() {
    console.log('meu nome é: ', this.nome);
  }
}

const cachorro = new Mamifero('billy', 4, true)
cachorro.dizerNome();

const object: Teste = {
  nome: 'string',
  idade: 23
}
