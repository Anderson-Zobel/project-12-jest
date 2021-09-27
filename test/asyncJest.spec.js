// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('1 - O retorno do telefonema', () => {
  it('pick up the call', () => {
    expect(answerPhone(true)).resolves.toEqual('Hello!');
  });

  it('busy', () => {
    expect(answerPhone(false)).rejects.toEqual(new Error('unfortunately we can\'t answer'));
  });
});
