import StageHead from '../StageHead'

const funnelStages = [
  { name: 'Inscritos',      count: '73', active: false },
  { name: 'Prova enviada',  count: '73', active: false },
  { name: 'Prova feita',    count: '48', active: true  },
  { name: 'Priorização IA', count: '—',  active: false },
  { name: 'Entrevista',     count: '—',  active: false },
]

const candidates = [
  { initials: 'MS', cls: 'av-mariana', name: 'Mariana Silva',  meta: 'Fez a prova em 18h · 71min usados',          score: '87/100', scoreClass: 'score-high' },
  { initials: 'JF', cls: 'av-julia',   name: 'Júlia Ferreira', meta: 'Fez a prova em 2 dias · 80min usados',        score: '82/100', scoreClass: 'score-high' },
  { initials: 'TM', cls: 'av-thiago',  name: 'Thiago Martins', meta: 'Fez a prova em 4 dias · 90min (no limite)',   score: '73/100', scoreClass: 'score-mid'  },
  { initials: 'PA', cls: 'av-pedro',   name: 'Pedro Almeida',  meta: 'Fez a prova em 5 dias',                       score: '71/100', scoreClass: 'score-mid'  },
  { initials: 'RC', cls: 'av-rafael',  name: 'Rafael Costa',   meta: 'Fez a prova em 3 dias · 90min',               score: '52/100', scoreClass: 'score-low'  },
]

export default function Step5Quickin() {
  return (
    <div className="stage">
      <StageHead
        num="CENA 4 · 5 dias depois — fim do prazo da prova"
        title="📊 Notas voltam pro Quickin sozinhas"
        sub="Coderbyte / Quickin / Fábrica chamam o webhook do n8n com a nota de cada candidato. Sem cópia manual."
      />

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="quickin-bar">
          <span style={{ background: 'white', color: '#ee5a52', padding: '2px 8px', borderRadius: 4, fontSize: 12 }}>Quickin</span>
          Eng. Dados Pleno · 73 candidatos · 48 fizeram a prova
        </div>
        <div className="quickin-tabs">
          <div className="quickin-tab">Candidatos (73)</div>
          <div className="quickin-tab active">Prova feita (48)</div>
          <div className="quickin-tab">Etapas</div>
        </div>
        <div className="quickin-body">
          <div className="funnel" style={{ marginBottom: 20 }}>
            {funnelStages.map(s => (
              <div key={s.name} className={`funnel-stage${s.active ? ' active' : ''}`}>
                <div className="funnel-stage-name">{s.name}</div>
                <div className="funnel-stage-count">{s.count}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 13, color: 'var(--gray-text)', marginBottom: 12, fontWeight: 600 }}>
            Algumas notas que voltaram (via webhook Coderbyte):
          </div>
          {candidates.map(c => (
            <div key={c.name} className="candidate-row">
              <div className={`avatar ${c.cls}`}>{c.initials}</div>
              <div className="cand-info">
                <div className="cand-name">{c.name}</div>
                <div className="cand-meta">{c.meta}</div>
              </div>
              <span className={`score-pill ${c.scoreClass}`}>{c.score}</span>
            </div>
          ))}
          <div style={{ textAlign: 'center', padding: 8, fontSize: 12, color: 'var(--gray-text)' }}>
            + 43 candidatos com notas variando entre 30 e 89
          </div>
        </div>
      </div>

      <div className="flow-arrow">
        ↓ &nbsp; 48 notas no Quickin → dispara o Agente 1 para filtrar e priorizar &nbsp; ↓
      </div>
    </div>
  )
}
