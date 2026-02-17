// ESSA CLASS IMPORTA OS BLOCOS DO SUDOKU E CRIA O JOGO INTEIRO.
// O PARAMETRO ENVIADO É O PROMPT ENVIADO PELO USUÁRIO.
// ELA TAMBÉM VERIFICA SE AS LINHAS E COLUNAS ESTAO CORRETAS.

import Block from './Block';

export default class Sudoku{
    private block: Block = new Block(); // vou usar essa instancia para criar os blocks com block.createBlock();
    private static sudoku: Sudoku | null = null; // explicação em 'getSudoku()'

    private constructor(
        private prompt?: string // nao torno obrigatorio pois na primeira (e unica) instancia do sudoku eu nao envio um prompt.
    ) {}

    setPromptInSudoku(): void {
        // aqui eu vou alterar o sudoku de acordo com o prompt
        // e depois executar getSudoku(); para retorna-lo
    }

    static getSudoku(prompt: string | null = null): Sudoku { // to fazendo isso pra nao permitir uma instancia externa e nem uma segunda instancia
        if(Sudoku.sudoku) {
            return Sudoku.sudoku;
        }
        Sudoku.sudoku = new Sudoku(prompt);
        return Sudoku.sudoku;
    }
}
