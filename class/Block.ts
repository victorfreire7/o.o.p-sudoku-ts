// ESTE ARQUIVO POSSUI UMA CLASS QUE CRIA CADA BLOCO DO SUDOKU E VERIFICA 
// SE ELE É CORRETO.
// AO IMPORTA-LO EH NECESSARIO EXECUTAR O METODO DE CRIACAO

/* Formato dos blocos:

    [
        [0, 0, 0],
        [0, 0, 0]
    ]

    - createBlock(): Array<Array<Number>>
    - authBlock()
*/

/* lógica aplicada em authBlock(): Array<Array<number>> {}
    block[0][0] == block[1][0] 
    block[0][0] == block[1][1]
    block[0][0] == block[1][2]
    block[0][1] == block[1][0]
    block[0][1] == block[1][1]
    block[0][1] == block[1][2]
    block[0][2] == block[1][0]
    block[0][2] == block[1][1]
    block[0][2] == block[1][2] 
*/

interface TypeBlock {
    block: Array<Array<number>>
}

export default class Block implements TypeBlock{ // class que cria os blocos
    block: Array<Array<number>> = 
    [
        [0, 0, 0],
        [0, 0, 0]
    ];

    createBlock(): Array<Array<number>> {
        const b: Array<Array<number>> = [
            [0, 0, 0],
            [0, 0, 0]
        ];
        b[0][this.getRandomNumber(0, 2)] = this.getRandomNumber(1, 6);
        b[1][this.getRandomNumber(0, 2)] = this.getRandomNumber(1, 6);
        return this.authBlock(b);
    }

    authBlock(block: Array<Array<number>>): Array<Array<number>>{
        for(var i = 1; i < block.length; i++){ // i = 1, pois eu quero q o laço só se repita no primeiro array.
            for(var j = 0; j < block[i].length; j++){ // guardo cada number em block[i][j];
                for(var k = 0; k < block[i].length; k++){ // repito o processo pra conseguir a sequencia: j = 0, k = 0, k = 1, k = 2, j = 1; e assim por diante...
                    if(block[i-1][j] === block[i][k]){
                        if(block[i-1][j] > 0 && block[i][k] > 0){ // como iniciamos i por 1, eu faço [i-1] para acessar o primeiro array da sequencia.
                            var rand = this.getRandomNumber(1, 6);
                            if(rand === block[i][k]) rand = this.getRandomNumber(1, 6)
                            block[i][k] = rand
                            break;
                        }
                    }
                }
            }
        }
        return block;
    }

    getRandomNumber(min: number, max: number): number{ // retorna um numero aleatorio entre min e max
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}