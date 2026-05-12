import StageHead from '../StageHead'

const beforeItems = [
  'Recrutador abre o Quickin e vê 73 candidatos. Suspira.',
  'Clica candidato por candidato, baixa o PDF, abre o LinkedIn numa aba ao lado.',
  'Copia e cola para uma planilha pessoal com "anotações soltas".',
  'O envio é feito em massa pelo quickin.',
  'Acompanha a nota do Coderbyte na outra aba e marca no Quickin no braço.',
  'Define entrevistadores, vasculha agendas, marca reunião — tudo manual.',
]

const afterItems = [
  'Toda candidatura no Quickin já recebe o link da prova automaticamente — a prova é o primeiro filtro objetivo.',
  'Nota da prova volta pro Quickin sozinha (Coderbyte / Quickin / Fábrica).',
  <>O Agente 1 entra: reprovados saem com e-mail de feedback automático; aprovados recebem um <b>score de priorização</b>.</>,
  <>Ranking pronto — Agente 2 pega os N primeiros e agenda em segundos.</>,
  <>Recrutador vira <b>curador</b>, não digitador.</>,
]

export default function Step3Comparacao() {
  return (
    <div className="stage">
      <StageHead
        num="CENA 2 · A virada"
        title="Sem Copilot vs. Com Copilot"
        sub="Mesma vaga, mesmo número de candidatos, dois universos diferentes"
      />

      <div className="compare">
        <div className="compare-col before">
          <h4>❌ Hoje (manual)</h4>
          <ul>
            {beforeItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
            <li><b>~6h só de triagem por vaga + 2h por agendamento.</b></li>
          </ul>
        </div>
        <div className="compare-col after">
          <h4>✅ Com CominAI</h4>
          <ul>
            {afterItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
            <li><b>~30min de revisão humana por vaga.</b></li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ marginTop: 24, textAlign: 'center', background: 'linear-gradient(135deg, var(--purple-light), white)' }}>
        <div style={{ fontSize: 14, color: 'var(--gray-text)', marginBottom: 8 }}>Tempo economizado por recrutador</div>
        <div style={{ fontSize: 42, fontWeight: 800, background: 'linear-gradient(135deg, var(--indigo), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          ~15h / semana
        </div>
        <div style={{ fontSize: 13, color: 'var(--gray-text)', marginTop: 8 }}>Equivalente a 1 vaga adicional resolvida por mês, sem contratar.</div>
      </div>
    </div>
  )
}
