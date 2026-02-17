// ESTE ARQUIVO RECEBE O SUDOKU E ENVIA O PROMPT PARA SUDOKU.TS
// QUE POR SUA VEZ, ALTERA O BLOCK.
// ESTE ARQUIVO TAMBÉM LIDA COM TODO O CONSOLE.LOG()
// E AVISA QUANDO O JOGO TERMINOU.
/*
const prompt2 = require('prompt-sync')();


console.log('    1  2  3       4  5  6')
console.log('A', [0, 0, 2], '|', [3, 0, 0]);
console.log('B', [4, 0, 6], '|',[5, 0, 1]);
console.log('  ------------+-----------')
console.log('C', [5, 0, 0], '|',[0, 0, 2]);
console.log('D', [0, 0, 3], '|',[1, 0, 0]);
console.log('  ------------+-----------')
console.log('E', [3, 0, 0], '|',[0, 0, 4]);
console.log('F', [0, 1, 4], '|',[2, 5, 0]);
console.log();
const next = prompt2('Qual sua próxima jogada? ')
console.clear();
console.log(next);
*/

import Sudoku from './class/Sudoku';

abstract class Game{
    constructor(
        private readonly prompt: Record<string, unknown> = require('prompt-sync')()
    ){}

    startGame(): void{
        console.log(Sudoku.getSudoku());
    }
}
