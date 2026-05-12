# 📦 Entrega do Hackathon — CominAI

> Checklist final pra você (Beatriz) usar nos próximos minutos.

## ✅ O que está no repo

```
cominato-copilot/
├── README.md                          ✅ Pitch completo, problema, solução, arquitetura, stack
├── .env.example                       ✅ Variáveis de ambiente documentadas
├── .gitignore                         ✅
├── ENTREGA_HACKATHON.md               ✅ Este arquivo
├── docs/
│   ├── arquitetura.md                 ✅ Diagrama detalhado + decisões + LGPD + vaga-piloto
│   └── roadmap.md                     ✅ Sprints 0→4, métricas, riscos
├── agents/
│   ├── agent_1_triage/                ✅ FUNCIONAL (Python + Claude API)
│   │   ├── main.py
│   │   ├── prompts.py
│   │   ├── cv_parser.py
│   │   ├── linkedin_fetcher.py
│   │   ├── requirements.txt
│   │   └── example_data/
│   │       ├── vaga.txt               (Eng. Dados Pleno R2)
│   │       ├── output_exemplo.json    (saída esperada do agente)
│   │       └── candidatos/
│   │           ├── mariana_silva/     (forte: CV + LinkedIn)
│   │           └── rafael_costa/      (médio: CV + LinkedIn)
│   └── agent_2_scheduler/             ✅ Mockup + stub Python
│       ├── mockup.html                (abre no browser — UI completa)
│       ├── schedule.py                (estrutura + política de duplas)
│       └── README.md
├── n8n/
│   ├── workflow_triagem.json          ✅ Importável no n8n (Quickin → Agente 1 → Quickin/Slack)
│   └── workflow_agendamento.json      ✅ Importável (Quickin → Agente 2 → Calendar/Quickin)
└── video/
    └── roteiro.md                     ✅ 2min30s com falas palavra-por-palavra
```

---

## ⏱️ Próximas 1h45 — passo a passo

### Passo 1 — Subir no GitHub (15min)

```bash
cd cominato-copilot
git init
git add .
git commit -m "CominAI — Hackathon R2 2026"
git branch -M main
# Crie um repo público em github.com/<seu-user>/cominato-copilot
git remote add origin https://github.com/<seu-user>/cominato-copilot.git
git push -u origin main
```

### Passo 2 — Rodar o Agente 1 com a chave (15min)

Peça ao dev pra rodar localmente:

```bash
cd agents/agent_1_triage
pip install -r requirements.txt
export ANTHROPIC_API_KEY="sk-ant-..."   # a chave de vocês

# Demo: triagem dos 2 candidatos
python main.py --batch example_data/
```

Saída esperada: JSON parecido com `example_data/output_exemplo.json` — Mariana ~90 e Rafael ~50.
**Captura essa saída em screenshot pro vídeo.**

### Passo 3 — Gravar o vídeo (45min)

Abra o roteiro: [`video/roteiro.md`](video/roteiro.md).
Use Loom ou Descript. Telas a abrir:
1. Foto da lousa (abertura)
2. Quickin na vaga-piloto: https://app.quickin.io/#/job/6a03664c57bb6e0013704d27
3. Terminal com o comando rodando
4. `agents/agent_2_scheduler/mockup.html` (abrir num browser)
5. README aberto no GitHub (diagrama mermaid renderizado lindo)

**Não passe de 3 minutos.** Se der mais, corte adjetivos do bloco 4 do roteiro.

### Passo 4 — Polir e submeter (30min)

- [ ] Coloque o link do vídeo no README.md (na seção "🎥 Demonstração")
- [ ] Verifique se os nomes do time estão preenchidos
- [ ] Faça um último commit
- [ ] Submeta o link do GitHub + link do vídeo no formulário do hackathon

---

## 🎤 Cheat sheet — se um juiz fizer pergunta

**"Por que dois agentes em vez de um só?"**
> Cada agente tem um contrato claro de input/output. Isso permite testar separadamente, evoluir em paralelo, e auditar. Agente generalista vira caixa-preta — e numa decisão sensível como recrutamento, isso é risco.

**"E se o agente discriminar?"**
> O Quickin já é o sistema de registro. Logamos toda decisão do agente lá. Auditoria mensal das recomendações + dataset balanceado nos exemplos. Plus: humano sempre decide.

**"Por que não usar uma ferramenta SaaS pronta tipo Eightfold?"**
> SaaS de recrutamento por IA custa US$30k+/ano, tem fit ruim com Quickin, e o time perde o controle. Nossa proposta é 10× mais barata e plugada nas ferramentas que o time já ama usar.

**"Quanto custa rodar isso?"**
> Estimativa: < R$ 0,10 por candidato avaliado pelo Agente 1 (Claude Sonnet, ~2k tokens in / 1k out). 150 candidatos/semana = R$ 60/mês. n8n self-hosted custa R$ 100/mês numa VPS pequena. Total: < R$ 200/mês.

**"E se a internet do n8n cair?"**
> Workflow tem retry automático e os webhooks do Quickin têm fila de saída. Pior caso: triagem atrasa algumas horas, recrutador segue manualmente como faz hoje.

---

## 🚀 Boa sorte! Você manda muito bem na narrativa de produto — confia no roteiro e seja você.
