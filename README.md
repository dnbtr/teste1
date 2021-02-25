## Teste 1
- Teste para entrevista.
- Feito usando Typescript, NodeJS, Express, ReactJS e react-bootstrap.

---

### Como iniciar
- Baixar o reposítório `$ git clone https://github.com/dnbtr/teste1.git`
- Baixar dependências `$ yarn install`, tanto na pasta `frontend` quanto na `backend`
- Iniciar o backend `$ yarn run dev` na pasta `backend`;
- Iniciar o frontend `$ yarn start` na pasta `frontend`;

---

### Endpoints
#### POST - http://localhost:3333/login
JSON do Request:
```json
{
	"email": "email@email.com",
	"password": "teste"
}
```

#### POST - http://localhost:3333/numbers?signed=[BOOLEAN]
JSON do Request:
```json
{
	"number1": 4294967295,
	"number2": 65535,
	"number3": 255
}
```
#### GET - http://localhost:3333/get_hash?string=[STRING]
- Qualquer string enviada na query terá o seu SHA256 retornado.
  
#### GET - http://localhost:3333/get_text/[FILENAME]?html=[BOOLEAN]
- Foram fornecidos dois .txt de teste (na pasta ./backend/src/data)
  - Qualquer .txt que estiver naquela pasta será lido, desde que o nome correto seja fornecido (apenas o nome, sem extensão)

---

## Notas

- Há alguns elementos de DDD e MVC, mas não foi dada uma atenção muito grande à arquitetura;
 - Se de fato fosse algo que iria pro ar, uma revisão da arquitetura seria necessária

- **Os valores negativos não estão sendo calculados corretamente no buffer final**
  - Isso ainda será ajustado.

---

Valores máximos dos números
```
**Signed** (primeiro bit sinalizando se número é positivo ou negativo)
  - Para o número de 32 bits: **-2147483648 <= 2147483647**
  - Para o número de 16 bits: **-32768 <= 32767**
  - Para o número de 8 bits: **128 <= 127**

**Unsigned** (primeiro bit usado para armazenar mais informação)
  - Para o número de 32 bits: **0 <= 4294967295**
  - Para o número de 16 bits: **0 <= 65535**
  - Para o número de 8 bits: **0 <= 255**
```
---

O Buffer de retorno possui 7 bytes, com os seguintes valores máximos:
```text
*signed*
Máximo: 36028797010575230 (74 ff ff ff ff 7f ff 7f)
Mínimo: atualmente valores são retornados incorretamente
  - Este ponto exige mais pesquisa de como fazer a conversão

*unsigned*
Máximo: 72057594037927940 (ff ff ff ff ff ff ff)
Mínimo: 0
```
*O valor máximo da variável number3 é 255 (para unsigned) e 127 (signed).*

---

### Descrição original do teste
```text
# 1. Utilizando Node.js e *typescript*:
- fazer um endpoint GET que retorna os conteúdos de um arquivo txt
- fazer um endpoint POST que recebe uma string e retorna o hash dela (SHA256)
- fazer autenticação por JWT
- tela de login em *React.js* com campo de usuário e senha

# 2. Dada a seguinte interface:

interface Numbers {
  number1: number,
  number2: number,
  number3: number,
}

Desenvolva uma função que recebe um objeto Numbers e retorne um buffer no seguinte formato:  
32 bits com valor do number1 + 16 bits com valor do number2 + 8 bits com valor do number3 (formato Big Endian)

Quantos bytes o buffer de retorno possui?
Qual o valor máximo da variável number3?
```