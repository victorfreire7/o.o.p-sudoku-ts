# Matriz Sudoku - P.O.O

Este projeto foi desenvolvido como objetivo de estudos em POO e TypeScript. Ele cria a matriz de um jogo Sudoku utilizando conceitos POO com 3 classes para o funcionamento, sendo elas:

 - Block: A classe que cria e autentifica dois arrays com 1 números aleatórios de 1 a 6 inseridos em cada um deles, sem repetição. Esses arrays funcionam como os 'blocos' 3x2 do minigame.

 - Sudoku: A classe que faz uma Associação por Composição na classe 'Block' e gera 6 desses blocos.

 - Game: A class que faz Associação por Composição 'Sudoku' e lida com todo o terminal e prompts do usuário.

Este projeto utiliza  os padrões de projeto Singlton e Factory Method, encontrado em GoF.

# File Tree:


``` tree
    o.o.p-sudoku-ts/
    ├─ class/
    │  ├─ Block.ts
    │  └─ Sudoku.ts
    ├─ vscode/
    │  └─ settings.json
    ├─ .gitignore
    ├─ index.ts
    ├─ package-lock.json
    ├─ package.json
    ├─ README.md
    └─ tsconfig.json
```

# Modo de Iniciação:

```
    git clone https://github.com/victorfreire7/o.o.p-sudoku-ts.git
```

```
    npm install 
```

```
    npm run start 
```