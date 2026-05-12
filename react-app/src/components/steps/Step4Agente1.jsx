import StageHead from '../StageHead'

export default function Step4Agente1() {
  return (
    <div className="stage">
      <StageHead
        num="CENA 3 · 9h33 — segundos depois"
        title="📨 Quickin envia a prova automaticamente"
        sub="Todo candidato inscrito recebe o link da prova na hora — a prova é o primeiro filtro objetivo. Sem IA, sem espera."
      />

      <div className="grid-2">
        <div className="card">
          <div className="card-title">⚙️ n8n — Switch por tipo de prova (campo "área" da vaga)</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 14, border: '1px solid var(--gray-border)', borderRadius: 8, background: 'linear-gradient(135deg, var(--r2-azul-50), white)' }}>
              <div style={{ width: 40, height: 40, background: 'var(--coderbyte)', color: 'white', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>CB</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>Tech → Coderbyte</div>
                <div style={{ fontSize: 12, color: 'var(--gray-text)' }}>API: POST /assessments/invitations · Mariana, vaga Eng. Dados → enviado</div>
              </div>
              <span className="pill pill-green">✓ Enviado</span>
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 14, border: '1px solid var(--gray-border)', borderRadius: 8 }}>
              <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #ee5a52, #ff6b6b)', color: 'white', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>Qk</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>Design → Quickin (case PDF anexo)</div>
                <div style={{ fontSize: 12, color: 'var(--gray-text)' }}>Template "case_design_pdf" com PDF + briefing por e-mail</div>
              </div>
              <span className="pill pill-gray">disponível</span>
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 14, border: '1px solid var(--gray-border)', borderRadius: 8 }}>
              <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #f59e0b, #fbbf24)', color: 'white', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>FP</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>Business → Fábrica de Provas</div>
                <div style={{ fontSize: 12, color: 'var(--gray-text)' }}>API: POST /convites · prova online de business case</div>
              </div>
              <span className="pill pill-gray">disponível</span>
            </div>
          </div>
        </div>

        <div className="email" style={{ height: 'fit-content' }}>
          <div className="email-header">
            <div className="email-field"><b>De:</b> Recrutamento R2</div>
            <div className="email-field"><b>Para:</b> Mariana Silva</div>
            <div className="email-field"><b>Assunto:</b> 🚀 Bem-vinda! Próximo passo: prova técnica</div>
          </div>
          <div className="email-body" style={{ fontSize: 13 }}>
            <p>Oi Mariana,</p>
            <p style={{ marginTop: 8 }}>Recebemos sua candidatura pra Engenheiro(a) de Dados Pleno. O próximo passo é uma prova técnica no Coderbyte (SQL + PySpark, 90min). Você tem <b>5 dias</b> pra fazer.</p>
            <div style={{ margin: '12px 0' }}>
              <a href="#" className="slot-btn">🧪 Fazer prova agora</a>
            </div>
            <p style={{ fontSize: 12, color: 'var(--gray-text)' }}>Boa sorte! 🚀</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--gray-text)', marginTop: 16 }}>
        💡 <b>Por que enviar a prova pra todo mundo?</b> A prova é objetiva: dá pra todos a mesma chance. Quem não passar sai aqui — sem viés de currículo bonito. O Agente 1 entra <b>depois</b>, pra priorizar dentre quem passou.
      </div>
    </div>
  )
}
