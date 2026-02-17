// ESSA CLASS IMPORTA OS BLOCOS DO SUDOKU E CRIA O JOGO INTEIRO.
// O PARAMETRO ENVIADO É O PROMPT ENVIADO PELO USUÁRIO.
// ELA TAMBÉM VERIFICA SE AS LINHAS E COLUNAS ESTAO CORRETAS.

import Block from './Block.ts';

export default class Sudoku{
    private block: Block = new Block(); // vou usar essa instancia para criar os blocks com block.createBlock();
    private static sudoku: Sudoku | null = null; // explicação em 'getSudoku()'
    private game: Array<Array<Array<number>>> = [];

    setPromptInSudoku(): void {
        // aqui eu vou alterar o sudoku de acordo com o prompt
        // e depois executar getSudoku(); para retorna-lo
    }



    static getGame(): Array<Array<Array<number>>> | null {
        return Sudoku.sudoku.game;
    }

    static setGame(): void {
        
    }

    authGame(): void {
        
    }

    static getSudoku(): Sudoku { // to fazendo isso pra nao permitir uma instancia externa e nem uma segunda instancia
        if(Sudoku.sudoku) {
            return Sudoku.sudoku;
        }
        Sudoku.sudoku = new Sudoku();
        for(var i = 0; i < 6; i++){
            Sudoku.sudoku.game.push(Sudoku.sudoku.block.createBlock());
        }
        return Sudoku.sudoku;
    }
}