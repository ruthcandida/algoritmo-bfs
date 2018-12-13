# Algoritmo de busca em largura

O algoritmo foi projetado para realizar uma busca em largura em um arvore qualquer. Este projeto foi contruído em uma arquitetura de API e possui 3 funções: treeBfs, searchNode e deleteNode.

* **treeBfs** - função que percorre um grafo (src/test/grafo.json) e retorna um array com a ordem de nós visitados 

* **searchNode** - função que retorna um nó de acordo com o id passado no parâmetro da url como queryString

* **deleteNode** - função que deleta um nó de acordo com o id passado no parâmetro da url como queryString

## Executando o serviço

Para inicializar o projeto execute o camando:

```
npm run dev
```

Por padrão é iniciado na porta 3000 na url **http://localhost:3000** . Para testar as APIs foi utilizado o [Postman](https://www.getpostman.com/)

## Testes

Um conjunto de testes foi criado baseado na biblioteca Supertest

Comando:

```
npm run test
```

## Documentação

Documentação das 3 API's contruídas

* http://localhost:3000/bfs - POST: colocar no body o arquivo.json com o grafo
* http://localhost:3000/search-node?id= - POST: colocar no body o arquivo.json com o grafo e o id do node a ser buscado
* http://localhost:3000/delete-node?id= - POST: colocar no body o arquivo.json com o grafo e o id do node a ser deletado
