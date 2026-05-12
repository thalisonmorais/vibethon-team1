import StageHead from '../StageHead'

const candidates = [
  { initials: 'MS', cls: 'av-mariana', name: 'Mariana Silva', meta: 'Inscrita há 12min · CV.pdf + LinkedIn' },
  { initials: 'RC', cls: 'av-rafael',  name: 'Rafael Costa',  meta: 'Inscrito há 28min · CV.pdf + LinkedIn' },
  { initials: 'TM', cls: 'av-thiago',  name: 'Thiago Martins', meta: 'Inscrito há 1h · CV.pdf + LinkedIn' },
  { initials: 'JF', cls: 'av-julia',   name: 'Júlia Ferreira', meta: 'Inscrita há 2h · CV.pdf + LinkedIn' },
  { initials: 'PA', cls: 'av-pedro',   name: 'Pedro Almeida', meta: 'Inscrito há 3h · CV.pdf + LinkedIn' },
]

const funnelStages = ['Inscritos', 'Triagem IA', 'Prova Coderbyte', 'Entrevista', 'Decisão']

export default function Step2Cenario() {
  return (
    <div className="stage">
      <StageHead
        num="CENA 1 · 9h32 da manhã"
        title="Vaga aberta no Quickin"
        sub="Engenheiro(a) de Dados Pleno · 73 candidaturas em 6 dias · funil entupindo"
      />

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="quickin-bar">
          <span style={{ background: 'white', color: '#ee5a52', padding: '2px 8px', borderRadius: 4, fontSize: 12 }}>Quickin</span>
          Engenheiro(a) de Dados Pleno · R2 Ventures
        </div>
        <div className="quickin-tabs">
          <div className="quickin-tab active">Candidatos (73)</div>
          <div className="quickin-tab">Etapas</div>
          <div className="quickin-tab">E-mails</div>
          <div className="quickin-tab">Configurações</div>
        </div>
        <div className="quickin-body">
          <div className="funnel" style={{ marginBottom: 24 }}>
            {funnelStages.map((name, i) => (
              <div key={name} className={`funnel-stage${i === 0 ? ' active' : ''}`}>
                <div className="funnel-stage-name">{name}</div>
                <div className="funnel-stage-count">{i === 0 ? '73' : '—'}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 13, color: 'var(--gray-text)', marginBottom: 12, fontWeight: 600 }}>Últimas candidaturas:</div>
          {candidates.map(c => (
            <div key={c.name} className="candidate-row">
              <div className={`avatar ${c.cls}`}>{c.initials}</div>
              <div className="cand-info">
                <div className="cand-name">{c.name}</div>
                <div className="cand-meta">{c.meta}</div>
              </div>
              <span className="pill pill-blue">Nova</span>
            </div>
          ))}
          <div style={{ textAlign: 'center', padding: 8, fontSize: 12, color: 'var(--gray-text)' }}>+ 68 candidatos esperando triagem</div>
        </div>
      </div>
    </div>
  )
}
