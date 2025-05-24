
## Monitoramento Florestal em Tempo Real

Bem-vindo ao projeto _MoniForest_, uma aplicação web que reúne dados geográficos e operacionais de equipamentos em operações florestais, proporcionando a gestores e equipes de campo uma visão unificada e atualizada dos ativos.

---

### 🎯 Propósito

Disponibilizar um painel interativo para:

- **Localizar equipamentos** no mapa em tempo real.  
- **Visualizar status operacionais** (Operando, Manutenção, Parado).  
- **Analisar produtividade diária** de cada máquina.  
- **Consultar histórico de eventos** para diagnósticos e planejamento de manutenção.  

---

### 🚀 Principais Funcionalidades

1. **Mapas Interativos**  
   - Exibição dos ativos via Leaflet com marcadores customizados.  
   - Zoom e navegação fluida, ajustáveis à área de interesse.  

2. **Pop-ups e Tooltips Dinâmicos**  
   - Ao passar o mouse ou clicar no equipamento, mostra informações resumidas e detalhadas.  
   - Histórico cronológico de estados no componente de pop-up.  

3. **Filtros Inteligentes**  
   - Busca por nome do equipamento.  
   - Seleção por status (Operando | Manutenção | Parado).  

4. **Design Modular e Reutilizável**  
   - Componentes construídos com shadcn/ui e Lucide-React.  
   - Estilos adaptáveis via TailwindCSS sem dependências extras.  

---

### 🛠️ Tecnologias Utilizadas

| Camada         | Ferramenta                                 |
| -------------- | ------------------------------------------ |
| **Frontend**   | React 19 + TypeScript                      |
| **Build**      | Vite                                       |
| **UI/Estilo**  | TailwindCSS, shadcn/ui, Lucide-React       |
| **Mapas**      | Leaflet, React-Leaflet                     |
| **HTTP Client**| Axios (simulação de API via JSON local)    |
| **Qualidade**  | ESLint (ordenamento de imports), Prettier  |

---

### 💡 Por que essas escolhas?

**React 19 + TypeScript**  
React fornece uma base sólida para interfaces reativas, e o TypeScript adiciona tipagem estática, melhorando a manutenção e reduzindo erros em tempo de desenvolvimento. A versão 19 traz melhorias de performance e hooks mais estáveis.

**Vite**  
Substitui o Create React App (CRA) ao oferecer builds extremamente rápidas, recarga instantânea e configuração mínima — ideal para projetos modernos que exigem agilidade.

**TailwindCSS**  
Permite estilização rápida com classes utilitárias, reduzindo CSS customizado e melhorando consistência visual. Facilita a criação de layouts responsivos sem sair do HTML/JSX.

**shadcn/ui + Lucide-React**  
- _shadcn/ui_ fornece componentes modulares e personalizáveis, sem sobrecarga de bibliotecas inteiras.  
- _Lucide-React_ oferece ícones vetoriais leves e consistentes, integrados ao Tailwind, garantindo harmonia visual.

**Leaflet + React-Leaflet**  
Escolhido pela documentação clara, performance e comunidade ativa. Permite renderizar mapas interativos com suporte nativo a marcadores, pop-ups e outros plugins.

**ESLint & Prettier**  
- _ESLint_ organiza imports e sinaliza padrões inconsistentes.  
- _Prettier_ padroniza formatação de código e ordena classes Tailwind, garantindo legibilidade.

**Axios + JSON local**  
Simulação de API local via JSON facilita testes sem backend; a transição para chamadas reais é trivial, mantendo a mesma interface.

---

### ⚙️ Como Executar Localmente

1. **Clone este repositório**  
   ```bash
   git clone https://github.com/seu-usuario/florestal-monitor.git
   cd florestal-monitor
```

2. **Instale dependências**

   ```bash
   npm install
   ```
3. **Inicie o ambiente de desenvolvimento**

   ```bash
   npm run dev
   ```
4. **Acesse em** `http://localhost:5173`

---

### 📐 Arquitetura de Componentes

* **`<MapContainer>`**: Inicializa o mapa e centraliza a visualização.
* **`<Marker>`**: Posiciona cada equipamento com ícone colorido conforme modelo/status.
* **`<Popup>`**: Exibe histórico completo de estados com scroll interno.
* **`<Tooltip>`**: Mostra resumo rápido ao hover.
* **Hooks customizados**:

  * Captura e processa dados de `data/*.json`.
  * Lógica de filtro e ordenação de registros.

---

### 🖼️ Demonstração Visual

*Mapa interativo com marcadores e pop-ups detalhados.*

![image](https://github.com/user-attachments/assets/a7985df4-6176-4bac-bfc1-5b22aeca1024)


---

### 📝 Considerações Finais

Este projeto demonstra habilidades em React moderno, bibliotecas de mapeamento e boas práticas de UX/UI. Em produção, basta substituir a simulação JSON por chamadas a APIs reais para garantir escalabilidade e segurança.

<div align="center">
  <strong>Obrigado pela visita ao meu portfólio!</strong>
</div>

