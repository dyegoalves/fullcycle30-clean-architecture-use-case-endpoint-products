# Clean Architecture: Use Cases para a Entidade Product

## Objetivo

Seguindo o padrão apresentado nas aulas sobre a entidade `Customer`, sua missão agora é replicar a arquitetura para a entidade `Product`.

Você deve implementar os casos de uso para as operações básicas (CRUD) e garantir a confiabilidade através de uma estratégia de testes completa.

## Tecnologias e Padrões

| Item          | Valor                                   |
| ------------- | --------------------------------------- |
| Linguagem     | TypeScript                              |
| Arquitetura   | Clean Architecture (Use Cases)          |
| Testes        | Unidade e Integração                    |
| Base do Projeto | Repositório Template (Obrigatório)    |

## Estrutura Base (Obrigatória)

Para realizar este desafio, é obrigatório utilizar o código base disponibilizado pelo curso:

<https://github.com/devfullcycle/fc-clean-architecture.git>

## Requisitos Técnicos

Você deve criar os 4 Use Cases abaixo para a entidade `Product`:

- **Create**: Criação de um produto.
- **Find**: Busca de um produto por ID.
- **List**: Listagem de todos os produtos.
- **Update**: Atualização dos dados de um produto.

> **Dica:** Utilize os DTOs (Input/Output) para isolar seus Use Cases.

## Requisitos de Testes (Atenção Máxima)

Para este desafio ser aceito, a cobertura de testes deve ser total. Para **cada um** dos 4 Use Cases acima, você deve implementar obrigatoriamente:

- **Testes de Unidade**: Validando a lógica de negócio isolada (com mocks).
- **Testes de Integração**: Validando o fluxo completo com o banco de dados.

**Exemplo:** O UseCase `UpdateProduct` deve ter seu arquivo de teste de unidade **e** seu arquivo de teste de integração.

## Entregável

- **Link do Repositório**: O link para o seu repositório no GitHub contendo a implementação.
- **README**: Instruções de como rodar os testes.

## Regras de Entrega

- **Repositório Único**: É obrigatória a entrega de apenas um projeto por repositório.
- **Branch Principal**: Todo o código deve estar na branch `main`.
- **Base Obrigatória**: Projetos que não seguirem a estrutura base não serão aceitos.
