# Arrays

### Arrays são Objetos

A primeira coisa que você precisa saber sobre Arrays é que eles são um tipo de objeto

Quando criamos um array com 3 elementos

```js
let movies = ['Kill Bill', 'The Hateful Eight', 'Django Unchained']
```

internamente, ele está sendo criado assim:

```js
let movies = {'0': 'Kill Bill', '1': 'Hateful Eight', '2': 'Django Unchained'}
```

Essa implementação faz com que nosso Array receba métodos e propriedades de "seus pais" (**Array.prototype** e **Object.prototype**) através de um conceito chamado de **Prototype Chain**

Como tudo na vida existe um preço, essa implementaço de Array é bem mais **lenta** que em outras linguagens como Java e C, mas não há nada com que se preocupar, esse trade-off vale a pena no final das contas

Por ser um objeto, nosso Array pode se beneficiar de vários comportamentos de um Objeto, como por exemplo:

1) Deletar um elemento do array
```js
let movies = ['Kill Bill', 'The Hateful Eight', 'Django Unchained']
delete movies[1] //["Kill Bill", empty, "Django Unchained"]
movies.length    //3
```

Essa operação não é muito útil, de fato. Ela não atualiza o array da forma correta, mas é bom saber que isso é possível graças ao nosso Array ser um Objeto.
tip: O melhor jeito de remover um elemento do Array é utilizando o método ``splice`` ou ``filter`` 

### Array.prototype

Nosso Array receber vários métodos e propriedades de "seu pai direto". A propriedade mais conhecida de qualquer Array em qualquer linguagem é a **length**. Ela nos retorna o tamanho atual do Array.

```js
let movies = ['Kill Bill', 'The Hateful Eight', 'Django Unchained']
movies.length //3
```

Um fato interessante do Array no JS é que ele não é limitado pelo seu indice **(upper bound)**. Isso significa que eu posso adicionar uma variável em qualquer posição do Array, mesmo que ela nem exista:

```js
let movies = ['Kill Bill', 'The Hateful Eight', 'Django Unchained']
movies[1000] = 'Inglourious Basterds'
movies.length //1001
```

Isso em linguagens como Java resultaria em erro.

Uma das primeiras coisas ao se aprender sobre Arrays é conhecer todas as funções existente. Isso fará com que o código escrito seja mais legível e eficiente.

### Referência

Objetos em JS são passados por referência, ou seja, quando um objeto é criado, existe uma posição na memória do computador que vai armazenar o valor daquele objeto e para todos os lugares que ele for referenciado, o valor que está em memŕia será alterado. 

Resumindo: se você modificar o objeto em um canto, estará modificando em todos os lugares que ele está sendo usado.

Isso vale para Objetos, Arrays e Funções, já que todos são Objetos

### Criar um Array

Existem 3 formas de se criar um array:

1) Forma literal (recomendada)
```js
let movies = [];
```

2) Usando o construtor
```js
let movies = new Array();
```

3) Usando os métodos do prototype
```js
Array.from('Pulp Fiction'); //["P", "u", "l", "p", " ", "F", "i", "c", "t", "i", "o", "n"]
Array.of('Reservoir Dogs', 'Inglourious Basterds'); //["Reservoir Dogs", "Inglourious Basterds"]
tip: Array(42) é diferente de Array.of(42)
```

### Métodos

Existem 3 métodos que são considerados os mais importantes quando trabalhamos com Arrays: **map, filter e reducer**

Elas são importantes porque aplicam um conceito muito importante chamado de **imutabilidade**. Esse conceito prega que não se deve modificar um objeto existente, ao invés disso, criamos um novo objeto e atribuir a ele o novo valor

A regra é simples:

1) Preciso retornar um booleano?

Preciso percorrer o array todo?
  1.1 Sim ``every``
  1.2 Não ``some, includes``

2) Preciso retornar um novo array?

Preciso modificar o array original?
  2.1 Sim ``splice, copyWithin, flatMap``
  2.2 Não ``map, filter, slice, concat``

3) Preciso retornar um único valor?

Precisa ser um elemento do array?
  3.1 Sim ``find, pop, shift``
  3.2 Não ``reduce, push, unshift, join``

4) Preciso retornar um índice? ``findIndex, indexOf, lastIndexOf ``

5) Preciso retornar um iterator? ``values, entries, keys``

6) Eu não preciso que retorne nada? ``forEach, sort, reverse, fill, flat``
