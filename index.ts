// ESTE ARQUIVO RECEBE O SUDOKU E ENVIA O PROMPT PARA SUDOKU.TS
// QUE POR SUA VEZ, ALTERA O BLOCK.
// ESTE ARQUIVO TAMBÉM LIDA COM TODO O CONSOLE.LOG()
// E AVISA QUANDO O JOGO TERMINOU.

import  Prompt from 'prompt-sync'
import Sudoku from './class/Sudoku.ts';
const prompt = Prompt();

class Game{
    static startGame(): void{
        Sudoku.getSudoku(); // instancio a class Sudoku e crio a matriz do jogo
        const game: Array<Array<Array<number>>> = Sudoku.getGame(); // retorno a matriz do jogo
        
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
        
        const line: string = prompt('Qual linha deseja alterar? ');
        const column: string = prompt('Qual coluna deseja alterar? ');
        const value: string = prompt('Qual sua número deseja jogar? ');
        console.clear();
        console.log(`${line}${column} ${value}`);
        this.startGame();
    }
}
Game.startGame();