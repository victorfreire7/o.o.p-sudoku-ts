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
    block: Array<Array<number>> = [
        [0, 0, 0],
        [0, 0, 0]
    ];
}
