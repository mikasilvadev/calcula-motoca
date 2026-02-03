# Projeto CalculaMotoca
Controlador financeiro para pessoas autônomas. Planeje suas metas, registre ganhos e gastos com rapidez.

## Visão Geral
O **CalculaMotoca** é um aplicativo para pessoas que precisam de uma ferramenta ágil para controle financeiro. Diferente de apps de contabilidade complexos, aqui o foco é:
* **Ações claras**
* **Lançamentos Rápidos**
* **Feedback visual**

## Stack
O projeto utiliza uma arquitetura moderna, separada entre um Front-end ágil e um Back-end escalável:

| Camada | Tecnologia | Função |
| :---    | :--- | :--- |
| **Front-end** | **React + TypeScript** | Interface reativa e segura com tipos. |
| **Estilização** | **Tailwind CSS (v4)** | Design moderno e utilitário. |
| **Back-end** | **ASP.NET Core Web API** | Servidor robusto em C#. |
| **Banco Online** | **MySQL** | Sincronização em nuvem para multi-dispositivo. |
| **Banco Local** | **SQLite (IndexedDB)** | Persistência offline-first. |
| **Autenticação** | **JWT** | Segurança padrão de mercado por tokens. |

## Principais Funcionalidades
* ** Gestão de Metas:** Defina um valor alvo e receba o cálculo de quanto precisa ganhar por dia trabalhado.
* ** Lançamento Rápido:** Fechamento do dia com botões de atalho para gastos frequentes (gasolina, lanche, manutenção).
* ** Contas e Caixinhas:** Separe o dinheiro do banco, da carteira e das reservas.
* ** Dashboard Motivacional:** Progresso da meta em tempo real e projeções financeiras.
* ** Offline-First:** O app funciona perfeitamente sem internet, sincronizando os dados quando a conexão retorna.

## Roadmap de Desenvolvimento
O projeto está dividido em duas grandes etapas:

### 1. MVP (Em progresso )
- [x] Setup do ambiente (React, TS, Tailwind v4).
- [x] Design System básico (Buttons, Cards, Inputs).
- [ ] Lógica de Metas e Calendário de trabalho.
- [ ] Persistência local (SQLite/IndexedDB).
- [ ] Exportação/Importação via JSON.

### 2. V1 (Futuro)
- [ ] API C# com Autenticação JWT.
- [ ] Banco de dados MySQL na nuvem.
- [ ] Sincronização automática (Push/Pull).
- [ ] Instalação como PWA no celular.

## Como rodar o projeto localmente

```bash
# Clone o repositório
git clone [https://github.com/mikasilvadev/calcula-motoca.git](https://github.com/mikasilvadev/calcula-motoca.git)

# Entre na pasta
cd calcula-motoca

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
