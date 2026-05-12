import StageHead from '../StageHead'

const k = (t) => <span style={{ color: '#93c5fd' }}>{t}</span>
const s = (t) => <span style={{ color: '#86efac' }}>{t}</span>
const n = (t) => <span style={{ color: '#fbbf24' }}>{t}</span>
const c = (t) => <span style={{ color: '#64748b', fontStyle: 'italic' }}>{t}</span>

const agentSteps = [
  'Iterou pelos 48 candidatos com prova feita',
  'Filtrou 21 abaixo da nota de corte (70) → e-mail feedback automático',
  'Para os 27 aprovados: leu CV + LinkedIn de cada um',
  'Ponderou: nota da prova + alinhamento técnico + projetos próprios + diversidade + velocidade de resposta',
  'Gerou score de priorização (0-100) + ranking',
]

export default function Step6Coderbyte() {
  return (
    <div className="stage">
      <StageHead
        num="CENA 5 · O coração do sistema"
        title="🧠 Agente 1 — filtra reprovados + ranqueia aprovados"
        sub="Para cada um dos 48 que fizeram prova: nota < 70 → reprovado (e-mail automático). Nota ≥ 70 → IA pondera CV + LinkedIn + nota + regras R2 e gera score de priorização."
      />

      <div className="agent-box" style={{ marginBottom: 20 }}>
        <div className="agent-icon">🧠</div>
        <div className="agent-status">Agente 1 — Filtro + Priorização</div>
        <div style={{ margin: '20px auto', textAlign: 'left', maxWidth: 420 }}>
          {agentSteps.map(step => (
            <div key={step} className="agent-step done">{step}</div>
          ))}
        </div>
        <div style={{ fontSize: 13, color: 'var(--gray-text)' }}>
          Concluído em 2min38s · custo: R$ 1,80 (48 candidatos · ~R$ 0,04 cada)
        </div>
      </div>

      <div className="grid-2">
        <div>
          <div className="card-title">🏆 Exemplo: Mariana — TOP da fila</div>
          <div className="json-block">{
`{
  `}{k('"candidato"')}{': '}{s('"mariana_silva"')},{`
  `}{k('"nota_prova"')}{': '}{n('87')},{`
  `}{k('"score_prioridade"')}{': '}{n('95')},{`
  `}{k('"recomendacao"')}{': '}{s('"top_priority"')},{`
  `}{k('"resumo"')}{': '}{s('"Nota alta + stack idêntica + open-source em produção + velocidade de resposta. Topo do ranking."')},{`
  `}{k('"sinais_priorizacao"')}{': {'}{`
    `}{k('"alinhamento_tecnico"')}{': '}{s('"Match raro — stack idêntica"')},{`
    `}{k('"projetos_proprios"')}{': '}{s('"delta-cost-watch (180 stars)"')},{`
    `}{k('"diversidade_aplicavel"')}{': '}{n('true')},{`
    `}{k('"velocidade_resposta"')}{': '}{s('"Fez a prova em 18h"')}{`
  },
  `}{k('"pontos_a_investigar_na_entrevista"')}{': ['}{`
    `}{s('"Como implementou o delta-cost-watch"')},{`
    `}{s('"Alavancas dos 40% de ganho no iFood"')}{`
  ]
}`}
          </div>
        </div>

        <div>
          <div className="card-title">📭 Exemplo: Rafael — Reprovado na prova</div>
          <div className="json-block">{
`{
  `}{k('"candidato"')}{': '}{s('"rafael_costa"')},{`
  `}{k('"nota_prova"')}{': '}{n('52')},{`
  `}{k('"score_prioridade"')}{': '}{n('0')},{`
  `}{k('"recomendacao"')}{': '}{s('"reprovado_na_prova"')},{`
  `}{k('"resumo"')}{': '}{s('"Nota (52) abaixo da corte (70). Sem hands-on em Spark — gap apareceu na prova."')},{`
  `}{c('// E-mail feedback automático será enviado.')}{`
  `}{c('// Quickin move para etapa "Talent Pool / Reprovado".')}{`
  `}{c('// Sem entrevista. Sem desperdício de tempo do time.')}{`
}`}
          </div>
          <div style={{ marginTop: 12, padding: 12, background: 'var(--green-bg)', color: 'var(--green-text)', borderRadius: 6, fontSize: 13 }}>
            ✅ <b>21 candidatos reprovados saem automaticamente,</b> sem o recrutador precisar abrir um por um. Cada um recebe e-mail de feedback gentil + sugestão de talent pool.
          </div>
        </div>
      </div>

      <div className="flow-arrow">
        ↓ &nbsp; 27 aprovados ranqueados → Agente 2 pega os top-N e agenda &nbsp; ↓
      </div>
    </div>
  )
}
