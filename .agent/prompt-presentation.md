prompt-padrao-r2-apresentacoes.md
# PROMPT PADRÃO — R2 VENTURES

> **Como usar:**
> 1. Abra o claude.ai/design (Slide Deck)
> 2. Anexe o arquivo `r2-design-system.html`
> 3. Anexe a apresentação que você quer reformatar (PPT, PDF, Google Slides, ou cole o conteúdo bruto)
> 4. Cole o prompt abaixo na conversa
> 5. A IA vai refazer a apresentação seguindo o design system da R2 ventures

---

## PROMPT PARA COLAR

Vou te enviar uma apresentação existente. Sua tarefa é **refazê-la inteira** seguindo o design system da R2 ventures que está anexado no arquivo `r2-design-system.html`.

### Protocolo obrigatório

**Antes de começar, leia nesta ordem:**

1. O bloco de **regras invioláveis** no topo do `r2-design-system.html` (logo após `<!DOCTYPE>`)
2. A seção **04B — Tamanhos exatos** (tabela cirúrgica de fontes)
3. A seção **09 — Templates de slide** (15 templates disponíveis)
4. A seção **09B — Densidade de conteúdo** (limites por template)
5. A seção **09C — Fluxo e sequência** (ordem dos slides)
6. A seção **09D — Erros comuns** (anti-exemplos pra não repetir)

### Como reformatar

**Passo 1 — Extrair conteúdo da apresentação original:**
Leia a apresentação anexada. Identifique cada slide e o que ele comunica:
- Título principal
- Texto de apoio
- Dados, números, percentuais
- Bullets ou listas
- Imagens (se houver — apenas anote a posição, vou reaplicar)
- Tabelas
- Depoimentos / citações

**Passo 2 — Mapear cada slide original a um template do DS:**

| Slide original | Template R2 a usar |
|---|---|
| Slide de abertura/capa | **09.01** Capa padrão R2 |
| Abertura de capítulo / divisor de seção | **09.04** Divisória |
| Slide com texto + bullets | **09.05** Conteúdo claro ou **09.06** Conteúdo escuro |
| Slide com 1 número grande em destaque | **09.07** Big number |
| Slide com depoimento / citação | **09.08** Depoimento |
| Slide com imagem + texto | **09.09** Imagem + conteúdo |
| Slide de fechamento / contato | **09.10** Encerramento |
| Slide com comparação (R2 vs concorrente) | **09.11** Tabela comparativa |
| Slide com timeline / história | **09.12** Timeline horizontal |
| Slide com cronograma / roadmap | **09.13** Cronograma Gantt |
| Slide com planos / opções de pricing | **09.14** Opções lado a lado |

**Se um slide original não encaixa em nenhum template:** quebre o conteúdo em mais de um slide usando templates diferentes. **Nunca invente layout novo.**

**Passo 3 — Reformatar respeitando os limites:**

Pra cada slide, aplique as regras absolutas:

- **Capa**: apenas grafismo + logo + título. Remova eyebrow, subtítulo, data, cliente, valor, autor, rodapé. Se a capa original tinha esses elementos, jogue fora — eles não cabem no template R2.
- **Tamanhos de fonte**: copie exatamente da tabela 04B. Não importa qual era o tamanho da apresentação original.
- **Bullets**: máximo 4 por slide. Se tinha mais, divida em 2 slides ou agrupe por tema.
- **Lead/descrição**: máximo 3 linhas. Se passou, edite o texto pra encurtar.
- **Hierarquia**: sempre Label → Título → Lead → Meta. Se a ordem original era diferente, reordene.
- **Cores**: substitua qualquer cor que não esteja na paleta R2 (azul-500, vermelho-500, branco, preto, e variações da paleta).
- **Tipografia**: substitua qualquer fonte por Kumbh Sans (display) ou Rajdhani (tech/labels).
- **Rodapé**: cada slide de conteúdo tem rodapé com APENAS o logo R2 ventures à esquerda. Sem paginação. Sem texto adicional. Capa, divisória e encerramento não têm rodapé.

**Passo 4 — Validar fluxo da apresentação:**

- O primeiro slide é a capa (09.01)
- Toda nova seção começa com uma divisória (09.04)
- O último slide é o encerramento (09.10)
- A sequência alterna fundos claro/escuro pra dar ritmo

### Regras absolutas que se sobrepõem ao conteúdo original

Se a apresentação original tem algo que **não cabe no DS**, descarte:

- ❌ Fontes diferentes de Kumbh Sans e Rajdhani
- ❌ Cores fora da paleta R2 (verdes, amarelos, gradientes coloridos, etc.)
- ❌ Layouts customizados não previstos nos templates
- ❌ Eyebrow/subtítulo/rodapé na capa
- ❌ Mais de 4 bullets em um slide
- ❌ Mais de 1 título por slide
- ❌ Tamanhos de fonte fora da tabela 04B
- ❌ Setas decorativas, ícones aleatórios, ornamentos visuais
- ❌ Paginação no rodapé
- ❌ Animações, transições, efeitos

### Quando não tiver certeza

- **Se um slide original não encaixar em nenhum template:** divida em 2 ou 3 slides usando templates do DS.
- **Se faltar informação pra preencher um template:** mantenha como `[Inserir aqui]` e me avise no final quais campos ficaram em aberto.
- **Se a apresentação original for muito longa:** pode ficar mais longa na versão R2 (slides divididos), mas nunca mais curta perdendo conteúdo.
- **Se houver imagens:** marque a posição com `[Imagem do slide original]` — eu reaplicarei depois.

### Formato de entrega

Crie a apresentação como **slide deck editável no claude.ai/design**, com cada slide em página separada usando HTML/CSS que replica exatamente os estilos do DS anexado. Os slides devem ser visualmente idênticos aos templates documentados.

### Antes de entregar, valide

Rode esse checklist em cada slide. Se algum item falhar, refaça antes de me devolver:

- [ ] A capa tem APENAS logo + título?
- [ ] Cada slide de conteúdo tem rodapé com APENAS o logo R2 ventures à esquerda?
- [ ] Nenhum slide tem paginação?
- [ ] Todos os tamanhos de fonte estão na tabela 04B?
- [ ] Nenhum slide tem mais de 4 bullets?
- [ ] Nenhum slide tem 2 títulos?
- [ ] Toda nova seção começa com divisória (09.04)?
- [ ] O último slide é o encerramento (09.10)?
- [ ] Todas as cores são da paleta R2?
- [ ] Todas as fontes são Kumbh Sans ou Rajdhani?
- [ ] Nenhum dado, número ou nome foi inventado?
- [ ] Nenhum elemento visual fora do DS foi usado?

Quando terminar, me devolva:
1. A apresentação reformatada
2. Lista de quais slides originais foram divididos em mais slides (e por quê)
3. Lista de elementos do original que foram descartados (e por quê)
4. Campos `[Inserir aqui]` que ficaram em aberto, se houver