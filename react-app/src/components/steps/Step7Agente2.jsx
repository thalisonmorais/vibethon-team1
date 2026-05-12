import StageHead from '../StageHead'

const ranking = [
  { pos: 1, initials: 'MS', cls: 'av-mariana', name: 'Mariana Silva',  tag: 'TOP',   tagStyle: { background: 'var(--green-bg)', color: 'var(--green-text)' },      meta: 'Prova 87 · Stack idêntica · Open-source · Diversidade', score: 95, scoreClass: 'score-high', highlight: true },
  { pos: 2, initials: 'JF', cls: 'av-julia',   name: 'Júlia Ferreira', tag: 'TOP',   tagStyle: { background: 'var(--green-bg)', color: 'var(--green-text)' },      meta: 'Prova 82 · Databricks 4 anos · Mestrado UFRJ · Diversidade', score: 91, scoreClass: 'score-high', highlight: true },
  { pos: 3, initials: 'LO', cls: 'av-pedro',   name: 'Lucas Oliveira', tag: 'Forte', tagStyle: { background: 'var(--r2-azul-50)', color: 'var(--r2-azul)' }, meta: 'Prova 79 · Eng. Sênior Magalu · contribuições Apache Spark', score: 84, scoreClass: 'score-high', highlight: true },
  { pos: 4, initials: 'BS', cls: 'av-julia',   name: 'Beatriz Souza',  tag: 'Forte', tagStyle: { background: 'var(--r2-azul-50)', color: 'var(--r2-azul)' }, meta: 'Prova 78 · Stone · projetos open-source · Diversidade', score: 81, scoreClass: 'score-high', highlight: true },
  { pos: 5, initials: 'CG', cls: 'av-thiago',  name: 'Carlos Gomes',   tag: 'Forte', tagStyle: { background: 'var(--r2-azul-50)', color: 'var(--r2-azul)' }, meta: 'Prova 80 · 5 anos eng. dados · Cert. Databricks Pro', score: 76, scoreClass: 'score-high', highlight: true },
  { pos: 6, initials: 'TM', cls: 'av-thiago',  name: 'Thiago Martins', tag: 'Médio', tagStyle: {}, meta: 'Prova 73 · sem diferenciais — Talent Pool', score: 68, scoreClass: 'score-mid', highlight: false },
  { pos: 7, initials: 'PA', cls: 'av-pedro',   name: 'Pedro Almeida',  tag: 'Médio', tagStyle: {}, meta: 'Prova 71 · transição de área — Talent Pool', score: 64, scoreClass: 'score-mid', highlight: false },
]

const agentSteps = [
  'Recebeu fila de 5 candidatos top-priority do Agente 1',
  'Para cada candidato: buscou entrevistadores elegíveis (+1 senioridade, diversidade, balanceamento)',
  'Consultou Google Calendar de todos os entrevistadores',
  'Montou as 5 duplas + 3 horários cada',
  'Disparou 5 convites pelo Quickin com os pontos a investigar anexados',
]

const slots = [
  { day: 'QUI', num: '14', time: '14h00 – 15h00', note: '✓ Camila e Diego livres', ok: true },
  { day: 'SEX', num: '15', time: '10h30 – 11h30', note: '✓ Camila e Diego livres', ok: true },
  { day: 'SEG', num: '18', time: '09h00 – 10h00', note: '✓ Primeiro slot do dia · cabeça fresca', ok: true },
  { day: 'QUA', num: '13', time: '15h00 – 16h00', note: '✗ Camila com reunião sobreposta', ok: false },
]

export default function Step7Agente2() {
  return (
    <div className="stage">
      <StageHead
        num="CENA 6 · Fila priorizada → Agente 2 agenda os top-N"
        title="📅 Os 5 primeiros da fila viram entrevista"
        sub="Capacidade do time: 5 entrevistas nesta semana. Agente 2 pega os top-5, monta duplas, checa agendas, dispara convites."
      />

      <div className="card" style={{ marginBottom: 20 }}>
        <div className="card-title">🏆 Ranking final dos 27 aprovados (top-10 visíveis)</div>
        {ranking.map((r, i) => (
          <div key={r.pos}>
            {i === 5 && (
              <div style={{ padding: '8px 16px', margin: '4px 0', background: 'var(--amber-bg)', borderRadius: 8, textAlign: 'center', fontSize: 12, color: '#92400e', fontWeight: 600 }}>
                ── Corte de capacidade: 5 entrevistas nesta semana ──
              </div>
            )}
            <div
              className="candidate-row"
              style={r.highlight
                ? { background: 'linear-gradient(90deg, var(--green-bg), white)', borderColor: 'var(--green)' }
                : { opacity: 0.5 }}
            >
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: r.highlight ? 'var(--green)' : 'var(--gray-border)', color: r.highlight ? 'white' : 'var(--gray-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>
                {r.pos}
              </div>
              <div className={`avatar ${r.cls}`}>{r.initials}</div>
              <div className="cand-info">
                <div className="cand-name">
                  {r.name}
                  <span className="tag-mini" style={r.tagStyle}>{r.tag}</span>
                </div>
                <div className="cand-meta">{r.meta}</div>
              </div>
              <span className={`score-pill ${r.scoreClass}`}>{r.score}</span>
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center', padding: 8, fontSize: 12, color: 'var(--gray-text)' }}>
          + 20 candidatos no Talent Pool — recebem e-mail "ficou perto, te chamamos em uma próxima oportunidade"
        </div>
      </div>

      <div className="agent-box" style={{ marginBottom: 16 }}>
        <div className="agent-icon">📅</div>
        <div className="agent-status">Agente 2 — Orquestrador de Entrevistas</div>
        <div style={{ margin: '20px auto', textAlign: 'left', maxWidth: 420 }}>
          {agentSteps.map(step => (
            <div key={step} className="agent-step done">{step}</div>
          ))}
        </div>
        <div style={{ fontSize: 13, color: 'var(--gray-text)' }}>Concluído em ~14s</div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-title">👥 Dupla escolhida</div>
          <div className="candidate-row" style={{ background: 'var(--r2-azul-50)', borderColor: 'var(--r2-azul)' }}>
            <div className="avatar av-mariana">CB</div>
            <div className="cand-info">
              <div className="cand-name">
                Camila Borges
                <span className="tag-mini" style={{ background: 'var(--green-bg)', color: 'var(--green-text)' }}>Tech Lead</span>
                <span className="tag-mini" style={{ background: 'var(--r2-azul-50)', color: 'var(--r2-azul)' }}>+1 nível</span>
              </div>
              <div className="cand-meta">3 entrevistas nos últimos 14 dias · pode encaixar</div>
            </div>
          </div>
          <div className="candidate-row" style={{ background: 'var(--r2-azul-50)', borderColor: 'var(--r2-azul)' }}>
            <div className="avatar av-rafael">DR</div>
            <div className="cand-info">
              <div className="cand-name">Diego Ramos <span className="tag-mini">Pleno</span></div>
              <div className="cand-meta">5 entrevistas · ainda OK</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: 'var(--gray-text)', marginTop: 12, padding: 8, background: 'var(--gray-bg)', borderRadius: 6 }}>
            ℹ️ <b>Por quê esses dois?</b> Política da R2: 1 degrau acima + ao menos 1 mulher no painel + carga balanceada. Felipe estava sobrecarregado (7 entrevistas), Júlia em viagem.
          </div>
        </div>

        <div className="card">
          <div className="card-title">📅 3 slots propostos (Calendar)</div>
          <div className="calendar">
            {slots.map(s => (
              <div key={`${s.day}${s.num}`} className="cal-day" style={!s.ok ? { opacity: 0.4 } : {}}>
                <div className="cal-date">{s.day}<span className="num">{s.num}</span></div>
                <div className={`cal-event ${s.ok ? 'entrevista' : 'outro'}`}>
                  <b>{s.time}</b><br />
                  <span style={{ fontSize: 11, color: s.ok ? 'var(--green-text)' : undefined }}>{s.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
