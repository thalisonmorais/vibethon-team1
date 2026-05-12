# Roadmap — CominAI

## Sprint 0 — Hackathon (entregue) ✅

- [x] Definição do problema com base em entrevistas com Brendo (Tech) e recrutador(a) de Design
- [x] Arquitetura ponta-a-ponta validada com Quickin como hub
- [x] **Agente 1 (Triagem)** funcional em Python + Claude
- [x] Workflow n8n de triagem (Quickin → Agente 1 → Quickin + Slack)
- [x] Workflow n8n de agendamento (Quickin → Agente 2 → Calendar + Quickin)
- [x] Mockup do Agente 2 (UI de agendamento)
- [x] Dados de exemplo (2 candidatos: forte e fraco) para a demo
- [x] Vídeo de pitch
- [x] Vaga-piloto criada no Quickin

## Sprint 1 — MVP em produção (4 semanas)

- [ ] **Agente 2 (Agendamento)** funcional — Python + Claude + Google Calendar API
- [ ] Política de duplas (senioridade +1, política de diversidade, balanceamento de carga)
- [ ] Integração webhook Quickin → n8n com autenticação por HMAC
- [ ] Painel de revisão para o recrutador (dashboard simples mostrando candidatos em triagem com score, perguntas extras, e botão "aprovar/ talent pool/ arquivar")
- [ ] Logs de auditoria das decisões dos agentes
- [ ] Piloto controlado: 1 vaga real por área (Tech, Design, Business) por 2 semanas

## Sprint 2 — Escala (4 semanas)

- [ ] Integração nativa Coderbyte (puxar resultado da prova automaticamente)
- [ ] Integração Fábrica de Provas (idem)
- [ ] Parser do PDF de case de Design (extrai informações + checa rubrica básica)
- [ ] Templates de e-mail personalizados por etapa, com variáveis Quickin
- [ ] Slack: notificações ricas com botões interativos (aprovar/arquivar direto da mensagem)
- [ ] Métricas: dashboard com tempo médio por etapa, conversão por fonte, qualidade percebida da triagem

## Sprint 3 — Melhoria contínua (4 semanas)

- [ ] **Enriquecimento via Proxycurl** — perfis de LinkedIn puxados via API, sem depender de PDF anexado
- [ ] Sugestão de perguntas durante a entrevista (assistente em tempo real para o entrevistador)
- [ ] Detecção de inconsistências entre relato em entrevista e o que está no CV
- [ ] A/B testing de prompts e parâmetros do Agente 1
- [ ] Loop de feedback do recrutador: "essa triagem foi boa?" → melhora o prompt

## Sprint 4 — 🔮 Agente 3 — Síntese de Feedback (visão futura)

- [ ] Captura de notas de entrevista (texto + áudio transcrito) via integração com Read AI ou similar
- [ ] **Agente 3** analisa o conjunto de avaliações dos entrevistadores e produz:
  - Resumo executivo da decisão
  - Pontos onde os avaliadores divergiram
  - Sinais de viés implícito (linguagem, foco em hard vs soft skills, etc.)
  - Comparação com candidatos anteriores na mesma vaga
- [ ] Recomendação final ponderada (não substitui decisão humana, mas a embasa)

## Métricas de sucesso

| Métrica | Baseline atual (estimado) | Meta v1 (Sprint 2) | Meta v2 (Sprint 4) |
|---|---:|---:|---:|
| Tempo de triagem por vaga | 6h | 30min | 15min |
| Tempo para agendar entrevista | 2h/candidato | 5min | 2min |
| Candidatos avaliados/semana/recrutador | 40 | 150 | 300 |
| NPS interno do time de recrutamento | n/a | 8/10 | 9/10 |
| % de candidatos satisfeitos com a experiência | n/a | 80% | 90% |

## Riscos & mitigações

| Risco | Mitigação |
|---|---|
| LLM "alucina" pontos fortes que não estão no CV | Prompt explícito + auditoria humana obrigatória antes da etapa de ligação |
| LinkedIn bloqueia Proxycurl | Fallback para PDF (já implementado) |
| Custo de API Claude escala com volume | Cache de embeddings de vagas; estimativa: < R$ 0,10 por candidato avaliado |
| Recrutadores não confiam no agente | Roll-out gradual, mostrar score como "sugestão", manter veto humano |
| Viés do modelo amplifica viés histórico | Auditoria mensal de decisões + dataset balanceado nos prompts few-shot |
