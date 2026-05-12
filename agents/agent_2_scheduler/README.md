# Agente 2 — Orquestrador de Entrevistas

> 🚧 **Status:** mockup pronto, implementação prevista para Sprint 1 (4 semanas pós-hackathon).

## O que faz

Disparado quando o Quickin move um candidato para a etapa **"Prova aprovada"** (em qualquer uma das 3 trilhas: Coderbyte para Tech, PDF de case via Quickin para Design, Fábrica de Provas para Business).

1. Lê o resultado da prova (via API da plataforma correspondente).
2. Lê os requisitos da vaga e o perfil do candidato (Quickin).
3. Filtra entrevistadores elegíveis aplicando políticas da R2:
   - Senioridade: 1 degrau acima do candidato (sênior avalia pleno; tech lead avalia sênior; etc.).
   - Diversidade: ao menos uma pessoa do gênero sub-representado no painel.
   - Balanceamento de carga: prioriza entrevistadores com menos entrevistas nas últimas 2 semanas.
   - Conflito de interesse: exclui ex-colegas diretos do candidato.
4. Consulta o Google Calendar via FreeBusy API.
5. Devolve 3 propostas de horário com a dupla sugerida.
6. Envia o convite ao candidato via template do Quickin.
7. Quando o candidato escolhe um horário, cria o evento no Calendar e atualiza o Quickin.

## Como ver o mockup

Abra `mockup.html` em qualquer navegador. Mostra:
- Notificação de disparo automático
- Resumo do candidato + score da triagem
- Sugestão de dupla com justificativa (senioridade, diversidade, carga)
- 3 slots ranqueados + 1 descartado (com motivo)
- Prévia do e-mail antes de enviar
- Botões de aprovação humana

## Próximos passos (Sprint 1)

- [ ] Implementar `schedule.py` com Anthropic + Google Calendar API
- [ ] Modelar política de entrevistadores em YAML editável pelo time de People
- [ ] Integração webhook Quickin → n8n → Agente 2
- [ ] Painel de overrides (recrutador troca a dupla com 1 clique)
