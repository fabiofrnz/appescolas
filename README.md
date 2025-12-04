# 🏫 Sistema de Relatório de Escolas e Access Points (NRE)

Um painel web interativo para gerenciamento e visualização de dados de conectividade, equipamentos e infraestrutura de rede de escolas estaduais.

Este projeto foi migrado de um script Python (CLI) para uma aplicação Web moderna (Client-side), permitindo fácil acesso via navegador, filtragem dinâmica e exportação de relatórios em PDF.

## ✨ Funcionalidades

* **🔍 Busca Avançada:** Pesquise escolas por Nome, INEP, Município ou Endereço IP.
* **📡 Monitoramento de APs:** Vinculação automática de Access Points (Ruckus) às escolas baseada no nome da instituição. Visualização de status (Online/Offline), MAC, Modelo e Canais.
* **📊 Relatórios Filtrados:** Filtre múltiplas escolas por Município e Situação da Internet (Fibra, Satélite, etc.).
* **📄 Exportação PDF:** Gere relatórios formatados em PDF diretamente pelo navegador para impressão ou arquivamento.
* **✏️ Edição em Tempo Real:** Permite a edição rápida de dados cadastrais da escola (persistência em sessão).
* **📱 Interface Responsiva:** Layout limpo e adaptável para diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias nativas da web, sem necessidade de servidores backend complexos (Serverless/Static):

* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização personalizada (sem frameworks pesados).
* **JavaScript (Vanilla ES6+):** Lógica de negócios, manipulação do DOM e processamento de dados CSV.
* **Bibliotecas Externas:**
    * [`jsPDF`](https://github.com/parallax/jsPDF): Para geração de arquivos PDF.
    * [`jspdf-autotable`](https://github.com/simonbengtsson/jsPDF-AutoTable): Para criação automática de tabelas dentro dos PDFs.

## 🚀 Como Executar

Como esta é uma aplicação puramente **client-side** (roda no navegador), não é necessário instalar Python, Node.js ou bancos de dados.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repo.git](https://github.com/seu-usuario/nome-do-repo.git)
    ```
2.  **Acesse a pasta:**
    ```bash
    cd nome-do-repo
    ```
3.  **Execute:**
    * Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge).

## 📂 Estrutura do Projeto

```text
/
├── index.html      # Estrutura principal e importação de bibliotecas
├── styles.css      # Estilos visuais, tabelas e layout
├── script.js       # Lógica da aplicação e base de dados (CSV embutido)
└── README.md       # Documentação do projeto
