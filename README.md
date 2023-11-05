# Cart-React

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o Node.js e o Git em sua máquina.

## Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/NikisGabriel/cart-react.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Imagens

![Imagem da página inicial do projeto](https://github.com/NikisGabriel/cart-react/blob/main/documents/cart-app-home.png)
![Imagem principal do projeto](https://github.com/NikisGabriel/cart-react/blob/main/documents/cart-app.png)

## Tecnologias Utilizadas

- JavaScript
- TypeScript
- Git
- Vite
- React
- Styled-components
- React Router

## API Externa

Este projeto consome a API externa Fake Store API para dados de produtos. [Fake Store API](https://fakestoreapi.com/)

## Padrões de Codificação

- **Nomenclatura:**

  - Componentes: Utilizam o padrão PascalCase.
  - Contextos: Utilizam o padrão PascalCase com o sufixo "Context".
  - Provedores: Seguem o padrão PascalCase com o sufixo "Provider".
  - Hooks: Seguem o padrão camelCase com o prefixo "use".
  - Funções: Seguem o padrão camelCase.
  - Constantes e variáveis: Seguem o padrão camelCase.
  - Tipos: Seguem o padrão camelCase com o sufixo "Type".

- **Estrutura de Arquivos:**
  - `src`: Contém o código-fonte da aplicação.
    - `assets`: Inclui recursos estáticos como imagens, fontes e estilos.
    - `components`: Reúne componentes React reutilizáveis.
    - `contexts`: Contém Contexts e Providers do React para compartilhamento de estados.
    - `hooks`: Agrupa hooks personalizados do React.
    - `pages`: Mantém as páginas da aplicação.
    - `types`: Contém tipos definidos em TypeScript.
    - `App.tsx`: O componente raiz da aplicação React, responsável pelo roteamento com React Router.
    - `main.tsx`: Ponto de entrada principal da aplicação, responsável por configurar os principais Providers.
    - `styled.d.ts`: Declarações TypeScript para aprimorar a tipagem do styled-components.
  - `index.html`: A página principal da aplicação.
  - `vite.config.ts`: Configurações do Vite.
  - `tsconfig.json`: Configurações do TypeScript.
  - `documents`: Pasta destinada à documentação do projeto.
  - `package.json`: Arquivo para gerenciamento de dependências e informações do projeto.

## Possíveis Atualizações

Entre as ideias de atualização para o projeto, estão:

- Adição de uma interface responsiva.
- Maior abstração de componentes, como o botão.
- Criação de uma página de erro 404.

## Observações

Este projeto foi um dos primeiros desenvolvidos de forma independente. Foi criado com foco em estudos, especialmente explorando a criação de um sistema de carrinho de compras. Além disso, foram aplicados conceitos avançados, como o uso do `useReducer` para o gerenciamento de um estado compartilhado.
