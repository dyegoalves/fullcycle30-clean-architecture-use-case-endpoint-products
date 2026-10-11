# Desafio — Clean Architecture: Use Cases para a Entidade Product

Implementação dos 4 use cases da entidade `Product` (Create, Find, List, Update), seguindo o padrão da entidade `Customer`, com testes de unidade e de integração para cada use case.

Base: [devfullcycle/fc-clean-architecture](https://github.com/devfullcycle/fc-clean-architecture.git)

## Estrutura

```
src/usecase/product/
├── create/   create.product.dto.ts  create.product.usecase.ts  create.product.unit.spec.ts  create.product.integration.spec.ts
├── find/     find.product.dto.ts    find.product.usecase.ts    find.product.unit.spec.ts    find.product.integration.spec.ts
├── list/     list.product.dto.ts    list.product.usecase.ts    list.product.unit.spec.ts    list.product.integration.spec.ts
└── update/   update.product.dto.ts  update.product.usecase.ts  update.product.unit.spec.ts  update.product.integration.spec.ts
```

- **Unit**: use case isolado, repositório mockado (Jest).
- **Integration**: repositório Sequelize real com SQLite em memória.

## Como rodar

```bash
npm install
npm test          # typecheck (tsc --noEmit) + testes com cobertura (100% nos use cases)
```

Somente os testes do Product:

```bash
npx jest src/usecase/product
```
