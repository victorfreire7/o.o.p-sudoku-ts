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
        const b: Array<Array<number>> = this.block;
        b[0][this.getRandomNumber(0, 2)] = this.getRandomNumber(1, 6);
        b[1][this.getRandomNumber(0, 2)] = this.getRandomNumber(1, 6);
        console.log('block antes da auth: ' + b);
        this.authBlock(b);
        return b;
    }

    /* lógica necessaria:

        if(
            block[0][0] == block[1][0] ||
            block[0][0] == block[1][1] ||
            block[0][0] == block[1][2] ||
            block[0][1] == block[1][0] ||
            block[0][1] == block[1][1] ||
            block[0][1] == block[1][2] ||
            block[0][2] == block[1][0] ||
            block[0][2] == block[1][1] ||
            block[0][2] == block[1][2] 
        )
    
    */

    authBlock(block: Array<Array<number>>): Array<Array<number>>{
        for(var i = 0; i < block.length; i++){ // ACESSO O ARRAY 1, E DEPOIS O ARRAY 2
            for(var j = 0; j < block[i].length; j++){ // [I][J] ACESSA O VALOR DO ARRAY I SELECIONADO
                var temp = j;
                // console.log('j: ' + j)
                for(var k = 0; k < block[i].length; k++){
                    
                    if(temp !== k){
                        if(block[i][temp] !== 0){
                            if(block[i][temp] == block[i+1][k]){
                                block[i+1][k] = this.getRandomNumber(1, 6);
                                console.log('repetiu')
                                break;
                            }
                        }
                    }
                }
            }
        }

        console.log('novo block: ' + block);

        // this.authBlock(block);
        return block;
    }

    getRandomNumber(min: number, max: number): number{ // retorna um numero aleatorio entre min e max
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

const b = new Block();
console.log(b.createBlock())
