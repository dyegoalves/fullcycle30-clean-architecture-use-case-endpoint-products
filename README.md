# Desafio — Clean Architecture: API de Listagem de Produtos

Camada de API (Web) para a entidade `Product`: endpoint `GET /product` que expõe o use case `ListProduct`, no padrão da entidade `Customer`.

Base: continuidade do desafio de use cases da entidade `Product`, a partir do repositório
[dyegoalves/fullcycle30-clean-architecture-use-case](https://github.com/dyegoalves/fullcycle30-clean-architecture-use-case) (mesma estrutura do template oficial [devfullcycle/fc-clean-architecture](https://github.com/devfullcycle/fc-clean-architecture.git)).

## Endpoint

| Método | Rota       | Descrição                          | Resposta         |
| ------ | ---------- | ---------------------------------- | ---------------- |
| GET    | `/product` | Lista os produtos cadastrados      | `200` + JSON     |
| POST   | `/product` | Cria um produto (`name`, `price`)  | `200` + JSON     |

Para popular e depois listar:

```bash
curl -X POST http://localhost:3000/product -H 'Content-Type: application/json' -d '{"name":"Product 1","price":10}'
curl http://localhost:3000/product
```

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
src/infrastructure/api/routes/product.route.ts              # rota GET /product -> ListProductUseCase
src/infrastructure/api/presenters/customer.presenter.ts     # presenter (customer, usado no formato XML)
src/infrastructure/api/express.ts                           # registra modelos (Customer, Product) e rotas
src/infrastructure/api/__tests__/product.e2e.spec.ts        # teste E2E (supertest)
```

O repositório também contém os use cases da entidade `Product` (Create, Find, List, Update), com testes de unidade e integração — continuidade dos desafios anteriores.

## Como rodar

```bash
npm install
npm run dev        # sobe a API em http://localhost:3000
```

Requisição de exemplo:

```bash
curl http://localhost:3000/product
```

## Como rodar os testes

```bash
npm test           # typecheck (tsc --noEmit) + testes com cobertura
```

Somente o teste E2E do Product:

```bash
npx jest src/infrastructure/api/__tests__/product.e2e.spec.ts
```

O teste E2E usa SQLite em memória, insere produtos e valida `status 200` e o corpo da resposta.
