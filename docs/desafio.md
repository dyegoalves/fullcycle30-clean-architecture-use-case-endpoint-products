# Clean Architecture: API de Listagem de Produtos

## Objetivo

Implementar a camada de API (Web) para a entidade **Product**. Assim como demonstrado em aula com a entidade Customer, o objetivo é criar um endpoint que exponha o caso de uso de listagem de produtos, permitindo acesso via requisições HTTP.

## Tecnologias e Ferramentas

- **Linguagem:** TypeScript
- **Testes:** End-to-End (E2E)
- **Base do Projeto:** [Repositório Template](https://github.com/devfullcycle/fc-clean-architecture.git) (Obrigatório)

## Estrutura Base (Obrigatória)

Utilizar o código base do curso (ou a continuidade dos desafios anteriores):

- Template oficial: https://github.com/devfullcycle/fc-clean-architecture.git
- Base própria — primeiro desafio (use cases da entidade `Product`): https://github.com/dyegoalves/fullcycle30-clean-architecture-use-case

## Requisitos Técnicos

- **Endpoint:** criar uma rota (ex.: `GET /product`) na API.
- **Integração:** essa rota deve chamar o Use Case `ListProduct` (criado no desafio anterior).
- **Resposta:** a API deve retornar um JSON contendo a lista de produtos cadastrados e o status code apropriado (**200**).

## Requisitos de Testes (Obrigatório)

Teste **End-to-End (E2E)**: é indispensável a criação de um teste automatizado que verifique o fluxo completo da API.

O teste deve:

- Simular uma requisição HTTP real para a rota criada.
- Validar se o status code retornado é **200**.
- Validar se o corpo da resposta (body) contém os dados esperados (JSON de produtos).

## Entregável

- **Link do Repositório:** link para o repositório no GitHub contendo a implementação.
- **README:** instruções de como rodar a API e os testes E2E.

## Regras de Entrega

- **Repositório Único:** é obrigatória a entrega de apenas um projeto por repositório.
- **Branch Principal:** todo o código deve estar na branch `main`.
- **Base Obrigatória:** projetos que não seguirem a estrutura base não serão aceitos.
