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

// const prompt2 = require('prompt-sync')();
import  Prompt from 'prompt-sync'
const prompt = Prompt();
import Sudoku from './class/Sudoku.ts';
import { start } from 'node:repl';

class Game{
    // constructor(
    //     private prompt = Prompt()
    // ){}

    startGame(): void{
        Sudoku.getSudoku();
        const game: Array<Array<Array<number>>> = Sudoku.getGame();
        
        console.log('    1  2  3       4  5  6')
        console.log('A', game[0][0], '|', game[1][0]);
        console.log('B', game[0][1], '|', game[1][1]);
        console.log('  ------------+-----------')
        console.log('C', game[2][0], '|', game[3][0]);
        console.log('D', game[2][1], '|', game[3][1]);
        console.log('  ------------+-----------')
        console.log('E', game[4][0], '|', game[5][0]);
        console.log('F', game[4][1], '|', game[5][1]);
        console.log();
        
        // const index: string = prompt('Qual posição deseja alterar? ');
        // const value: string = prompt('Qual sua próxima jogada? ');
        // console.clear();
        // console.log(`index: ${index}`);
        // console.log(`value: ${value}`);
    }
}

const game = new Game();
game.startGame();

