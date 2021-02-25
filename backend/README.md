# 1. Utilizando Node.js e *typescript*:
- fazer um endpoint GET que retorna os conteúdos de um arquivo txt
- fazer um endpoint POST que recebe uma string e retorna o hash dela (SHA256)
- fazer autenticação por JWT
- tela de login em *React.js* com campo de usuário e senha

# 2. Dada a seguinte interface:

```ts
interface Numbers {
  number1: number,
  number2: number,
  number3: number,
}
```

Desenvolva uma função que recebe um objeto Numbers e retorne um buffer no seguinte formato:  
```32 bits com valor do number1 + 16 bits com valor do number2 + 8 bits com valor do number3 (formato Big Endian)```

Quantos bytes o buffer de retorno possui?
Qual o valor máximo da variável number3?


#### Notas

Há alguns elementos de DDD e MVC, mas não foi dada uma atenção muito grande à arquitetura;
 - Se de fato fosse algo que iria pro ar, uma revisão da arquitetura seria necessária