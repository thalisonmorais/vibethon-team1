import StageHead from '../StageHead'

const metrics = [
  { num: '6h → 30min', label: 'Triagem por vaga', detail: 'Recrutador vira curador, não digitador' },
  { num: '2h → 5min', label: 'Agendamento por candidato', detail: 'Agente 2 + Calendar + Quickin' },
  { num: '40 → 150', label: 'Candidatos/semana avaliados', detail: 'Sem aumentar o time' },
]

const roadmap = [
  { cls: 'done', title: 'Sprint 0 — Hackathon ✓', desc: 'Agente 1 funcional · Workflows n8n · Mockup do Agente 2 · Vaga-piloto no Quickin · Vídeo · Repo' },
  { cls: 'current', title: 'Sprint 1 — MVP em produção (4 semanas)', desc: 'Agente 2 funcional · Integração Google Calendar · Painel de revisão · Piloto controlado: 1 vaga real por área' },
  { cls: '', title: 'Sprint 2 — Escala (4 semanas)', desc: 'Integração nativa Coderbyte + Fábrica · Slack com botões interativos · Métricas e dashboards' },
  { cls: '', title: 'Sprint 3 — Melhoria contínua (4 semanas)', desc: 'Proxycurl pra LinkedIn · A/B em prompts · Loop de feedback do recrutador' },
  { cls: '', title: 'Sprint 4 — 🔮 Agente 3 (visão)', desc: 'Captura de notas de entrevista · Síntese de feedback · Detecção de vieses · Recomendação ponderada' },
]

export default function Step9Resumo({ onRestart }) {
  return (
    <div className="stage">
      <StageHead
        num="FIM · O resultado da jornada"
        title="Em números e em visão"
        sub="O que entregamos no hackathon + para onde vamos"
      />

      <div className="grid-3">
        {metrics.map(m => (
          <div key={m.label} className="metric-card">
            <div className="metric-num">{m.num}</div>
            <div className="metric-label">{m.label}</div>
            <div className="metric-detail">{m.detail}</div>
          </div>
        ))}
      </div>

      {/* <div className="card" style={{ marginTop: 24 }}>
        <div className="card-title">🗺️ Roadmap</div>
        <div className="timeline">
          {roadmap.map(r => (
            <div key={r.title} className={`timeline-item ${r.cls}`}>
              <h5>{r.title}</h5>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div> */}

      <div className="card" style={{ marginTop: 24, textAlign: 'center', background: 'linear-gradient(135deg, var(--purple-light), white)' }}>
        <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>CominAI 🤖</div>
        <div style={{ color: 'var(--gray-text)', marginBottom: 16 }}>Menos copy-paste, mais conversa de gente.</div>
        <button className="nav-btn primary" onClick={onRestart}>↺ Recomeçar a jornada</button>
      </div>
    </div>
  )
}
