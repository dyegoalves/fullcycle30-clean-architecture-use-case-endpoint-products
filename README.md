# Desafio — Clean Architecture: API de Listagem de Produtos

Camada de API (Web) para a entidade `Product`: endpoint `GET /product` que expõe o use case `ListProduct`, no padrão da entidade `Customer`.

Base: continuidade do **primeiro desafio** (use cases da entidade `Product`), a partir do repositório
[dyegoalves/fullcycle30-clean-architecture-use-case](https://github.com/dyegoalves/fullcycle30-clean-architecture-use-case) (mesma estrutura do template oficial [devfullcycle/fc-clean-architecture](https://github.com/devfullcycle/fc-clean-architecture.git)).

## Endpoint

| Método | Rota         | Descrição                           | Resposta       |
| ------- | ------------ | ------------------------------------- | -------------- |
| GET     | `/product` | Lista os produtos cadastrados         | `200` + JSON |
| POST    | `/product` | Cria um produto (`name`, `price`) | `200` + JSON |

Para popular e depois listar, veja [Como rodar](#como-rodar).

Resposta (JSON) do `GET`:

```json
{
  "products": [
    { "id": "123", "name": "Product 1", "price": 10 },
    { "id": "456", "name": "Product 2", "price": 20 }
  ]
}
```

## Estrutura

```
src/infrastructure/api/routes/product.route.ts              # rotas POST (cria) e GET (lista) /product
src/infrastructure/api/presenters/customer.presenter.ts     # presenter (customer, usado no formato XML)
src/infrastructure/api/express.ts                           # registra modelos (Customer, Product) e rotas
src/infrastructure/api/__tests__/product.e2e.spec.ts        # teste E2E (supertest)
```

O repositório também contém os use cases da entidade `Product` (Create, Find, List, Update), com testes de unidade e integração — continuidade dos desafios anteriores.

## Como rodar

### 1. Instalar dependências

```bash
npm install
```

### 2. Subir a API

```bash
npm run dev        # sobe a API em http://localhost:3000
```

### 3. Criar um produto — `POST /product`

Envia `name` e `price` no corpo JSON:

```bash
curl -X POST http://localhost:3000/product \
  -H 'Content-Type: application/json' \
  -d '{"name":"Product 1","price":10}'
```

Resposta (`200`):

```json
{ "id": "a1b2c3d4-...", "name": "Product 1", "price": 10 }
```

Repita para criar mais produtos (ex.: `{"name":"Product 2","price":20}`).

### 4. Listar os produtos — `GET /product`

```bash
curl http://localhost:3000/product
```

Resposta (`200`):

```json
{
  "products": [
    { "id": "a1b2c3d4-...", "name": "Product 1", "price": 10 },
    { "id": "e5f6...", "name": "Product 2", "price": 20 }
  ]
}
```

Sem produtos cadastrados, retorna `200` com `{"products":[]}`.

> O banco é SQLite em memória (`storage: ":memory:"`): os dados somem ao reiniciar a API.

## Como rodar os testes

```bash
npm test           # typecheck (tsc --noEmit) + testes com cobertura
```

Somente o teste E2E do Product:

```bash
npx jest src/infrastructure/api/__tests__/product.e2e.spec.ts
```

O teste E2E usa SQLite em memória, insere produtos e valida `status 200` e o corpo da resposta.
