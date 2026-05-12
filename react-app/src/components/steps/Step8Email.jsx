import StageHead from '../StageHead'

export default function Step8Email() {
  return (
    <div className="stage">
      <StageHead
        num="CENA 7 · Convite saiu via Quickin"
        title="📨 E-mail para a Mariana"
        sub='Quickin envia usando template "convite_entrevista" + variáveis do Agente 2. Quando ela clicar, evento é criado no Calendar.'
      />

      <div className="email">
        <div className="email-header">
          <div className="email-field"><b>De:</b> Recrutamento R2 &lt;recrutamento@r2ventures.com.br&gt;</div>
          <div className="email-field"><b>Para:</b> Mariana Silva &lt;mariana.silva@email.com&gt;</div>
          <div className="email-field"><b>Assunto:</b> 🎉 Vamos marcar sua entrevista — R2 Ventures</div>
        </div>
        <div className="email-body">
          <p>Oi Mariana,</p>
          <br />
          <p>Parabéns por avançar no nosso processo! Sua prova técnica no Coderbyte ficou excelente (<b>87/100</b>) — você foi uma das melhores notas dessa rodada.</p>
          <br />
          <p>O próximo passo é uma entrevista técnica de 1h com:</p>
          <p style={{ marginLeft: 20, marginTop: 8 }}>• <b>Camila Borges</b> — Tech Lead da Plataforma de Dados</p>
          <p style={{ marginLeft: 20 }}>• <b>Diego Ramos</b> — Engenheiro de Dados Pleno</p>
          <br />
          <p>Te proponho 3 horários — clica no que melhor encaixar na sua agenda:</p>
          <div style={{ margin: '16px 0' }}>
            <a href="#" className="slot-btn">📅 Qui 14/05 · 14h00</a>
            <a href="#" className="slot-btn">📅 Sex 15/05 · 10h30</a>
            <a href="#" className="slot-btn">📅 Seg 18/05 · 09h00</a>
          </div>
          <p>Nenhum desses funciona? <a href="#" style={{ color: 'var(--indigo)' }}>Sugira outros horários</a>.</p>
          <br />
          <p>Qualquer dúvida, é só responder esse e-mail.</p>
          <br />
          <p>Abraço,<br />Time de Recrutamento R2 🚀</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--gray-text)', marginTop: 16 }}>
        Quando a Mariana clicar, o Agente 2 cria o evento no Calendar, convida os dois entrevistadores (com os pontos a investigar do Agente 1 anexados na descrição do evento) e atualiza o Quickin para "Entrevista marcada". <b>Tudo sem o recrutador tocar.</b>
      </div>
    </div>
  )
}
