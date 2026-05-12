# 🎥 Roteiro do vídeo — CominAI

**Duração-alvo:** 2min30s a 3min
**Estilo:** screen-recording com narração em off (gravado no Loom ou similar)
**Locutora sugerida:** Beatriz (já é ex-recrutadora — voz autêntica, vende a dor)

---

## Estrutura

| Bloco | Duração | O que aparece na tela | Quem fala / Texto |
|---|---:|---|---|
| 1. Abertura | 0:00 – 0:15 | Logo + lousa do hackathon (foto) | Voz |
| 2. Dor | 0:15 – 0:45 | Quickin com candidatos empilhados + planilha + LinkedIn aberto | Voz |
| 3. Solução | 0:45 – 1:10 | Diagrama de arquitetura (mermaid renderizado) | Voz |
| 4. Demo Agente 1 + auto-envio prova | 1:10 – 1:50 | Terminal + JSON saída + Quickin/Slack | Voz |
| 5. Nota Coderbyte volta ao Quickin | 1:50 – 2:10 | Screen Coderbyte + Quickin atualizado | Voz |
| 6. Demo Agente 2 | 2:10 – 2:35 | Mockup HTML do agendamento + e-mail | Voz |
| 7. Roadmap + CTA | 2:35 – 2:50 | Slide com roadmap + URL da vaga no Quickin | Voz |

---

## Texto da narração (palavra por palavra)

### 1. Abertura (0:00 – 0:15) — 15s

> "Recrutar na R2 hoje é assim: 150 candidaturas por vaga, três plataformas que não conversam, e o recrutador virou a API humana entre elas.
>
> Esse é o **CominAI** — nossa proposta pro Hackathon 2026."

🎬 **Tela:** abre com a foto da lousa do brainstorm (com o título "Hackathon R2 Ventures 2026"), fade para o logo do CominAI.

---

### 2. A dor (0:15 – 0:45) — 30s

> "A gente conversou com o Brendo, que recruta Tech, com o time de Design, e usei minha própria experiência como ex-recrutadora de Business.
>
> Três dores se repetem todos os dias:
> Triagem manual de currículo e LinkedIn — abrir um por um, copiar e colar pra planilha.
> Definir entrevistadores, checar agendas, marcar reunião — duas horas por candidato.
> E conectar Quickin, Coderbyte, Fábrica de Provas, LinkedIn e Google Calendar — tudo no braço.
>
> No total, **quinze horas por semana** do recrutador em tarefa repetitiva que não exige julgamento humano."

🎬 **Tela:** mostra o Quickin com a lista de candidatos da vaga fake, depois alterna pra um split-screen: planilha + LinkedIn + Quickin + Calendar — visualmente caótico.

---

### 3. A solução (0:45 – 1:10) — 25s

> "A nossa proposta: **dois agentes de IA orquestrados pelo n8n**, plugados no Quickin que continua sendo a fonte da verdade.
>
> O **Agente 1** faz a triagem: lê o CV, lê o LinkedIn, compara com a vaga e devolve um score, pontos fortes, gaps, e **pontos a investigar na entrevista técnica**. Quem passa da nota de corte recebe o link da prova **automaticamente** — Coderbyte para Tech, case PDF para Design, Fábrica para Business.
>
> A nota da prova volta pro Quickin sozinha, via webhook. E quem passa da nota de corte vai pro **Agente 2**, que sugere a dupla de entrevistadores respeitando senioridade e diversidade, checa as agendas, e marca."

🎬 **Tela:** diagrama mermaid renderizado (do README.md), com setas animando o fluxo.

---

### 4. Demo Agente 1 (1:10 – 1:50) — 40s

> "Bora ver funcionando. Essa é uma vaga real que criei no Quickin: 'Engenheiro de Dados Pleno' [mostrar a vaga: https://app.quickin.io/#/job/6a03664c57bb6e0013704d27].
>
> Tenho dois candidatos: a Mariana, que parece forte no papel, e o Rafael, que é analista de dados querendo migrar.
>
> Rodo o Agente 1 — uma chamada de comando, ele lê o CV em PDF, o LinkedIn, e cospe esse JSON estruturado..."

🎬 **Tela:** terminal rodando `python main.py --batch example_data/`. Cursor destaca:
> - Score da Mariana: **92/100** — recomendação: avancar_para_prova
> - Score do Rafael: **48/100** — recomendação: talent_pool

> "Mariana passou da nota de corte de 70. O n8n manda o link do Coderbyte automaticamente pra ela e atualiza o Quickin. O Rafael recebe um e-mail de feedback e vai pro talent pool — sem ninguém precisar olhar."

🎬 **Tela:** Quickin atualizado + mensagem no Slack mostrando o auto-envio da prova.

---

### 5. Coderbyte volta pro Quickin (1:50 – 2:10) — 20s

> "Dois dias depois, a Mariana fez a prova: 87 na nota. O Coderbyte chama o webhook do n8n, que integra essa nota direto no Quickin como nota interna. Sem cópia manual.
>
> Como ela passou da nota de corte de novo, o Agente 2 é disparado **automaticamente** na sequência."

🎬 **Tela:** screen da nota do Coderbyte + Quickin já atualizado.

---

### 6. Demo Agente 2 (2:10 – 2:35) — 25s

> "Em segundos, o Agente 2 sugere a dupla — Camila, tech lead, um degrau acima, mulher; e Diego, eng. pleno. Consulta o Google Calendar dos dois, descarta os horários com conflito, e propõe três slots prontos pra mandar.
>
> O e-mail sai pela Quickin com os botões. Quando a Mariana clicar, o evento aparece no Calendar dos dois entrevistadores — **com os pontos a investigar do Agente 1 anexados na descrição**, pra entrevista já começar afiada."

🎬 **Tela:** abre o `mockup.html` do Agente 2, faz scroll suave mostrando os slots e o e-mail.

> "Tudo isso volta pro Quickin como nota interna. **O recrutador sempre tem a palavra final** — o agente recomenda, ele aprova."

---

### 6. Roadmap + CTA (2:30 – 2:45) — 15s

> "No hackathon, entregamos o Agente 1 funcionando, o workflow n8n, o mockup do Agente 2, e a vaga-piloto no Quickin pra rodarmos o primeiro experimento real.
>
> Próximo passo: Sprint 1 — Agente 2 em produção. Sprint 4 — Agente 3, que sintetiza feedback de entrevista, identifica vieses e propõe a decisão final.
>
> **CominAI:** menos copy-paste, mais conversa de gente."

🎬 **Tela:** slide de fechamento com roadmap em 4 sprints + link do GitHub + nomes do time.

---

## Checklist de gravação

- [ ] Abrir o Quickin na vaga fake: https://app.quickin.io/#/job/6a03664c57bb6e0013704d27
- [ ] Abrir o terminal já com o comando pronto
- [ ] Abrir o `mockup.html` numa aba do navegador
- [ ] Abrir o `README.md` em outra aba (com diagrama mermaid renderizado — usar GitHub preview ou um VSCode com mermaid)
- [ ] Mensagem fake no Slack (pode ser um screenshot mockado)
- [ ] Foto da lousa em alta resolução
- [ ] Microfone em local silencioso
- [ ] Gravar em 1080p
- [ ] **Não enrolar** — se passar de 3min, cortar partes da demo do Agente 1 e mostrar só o resultado

## Dicas de gravação

1. **Grave a narração separada do screencast** — fica mais limpo. Junta na edição (CapCut, Descript, ou o próprio Loom já mistura bem).
2. **Use o Descript** se tiver — gera legenda automaticamente, ajuda muito pra clareza.
3. **Velocidade da narração:** 130-150 palavras por minuto. Esse roteiro tem ~430 palavras → ~3min se falado em ritmo normal. Se quiser mais curto, corte os adjetivos do bloco 4.
4. **Música de fundo:** baixa, instrumental, sem letra. YouTube Audio Library tem opções livres.
