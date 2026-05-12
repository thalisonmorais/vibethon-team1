import Logo from '../Logo'

export default function Step1Hero({ onNext }) {
  return (
    <div className="stage">
      <div className="hero">
        <Logo large />
        <h1>Como funciona<br /><span>na prática.</span></h1>
        <p>Vamos seguir a jornada de uma candidata, da inscrição até a entrevista marcada — passando pelo Quickin, Agente 1, Coderbyte e Agente 2.</p>
        <button className="nav-btn primary" onClick={onNext} style={{ fontSize: 15, padding: '14px 24px' }}>
          Começar a jornada →
        </button>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">9</div>
            <div className="hero-stat-label">Telas da jornada</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">2</div>
            <div className="hero-stat-label">Agentes de IA</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">~30s</div>
            <div className="hero-stat-label">Por candidato</div>
          </div>
        </div>
        <p className="hint" style={{ marginTop: 40 }}>
          Use as setas ← → ou os botões abaixo. Pressione <kbd className="kbd">F</kbd> para tela cheia.
        </p>
      </div>
    </div>
  )
}
