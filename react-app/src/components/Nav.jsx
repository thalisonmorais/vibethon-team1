export default function Nav({ current, total, onPrev, onNext, onGoTo }) {
  return (
    <div className="nav">
      <div className="nav-inner">
        <button className="nav-btn" onClick={onPrev} disabled={current === 1}>
          ← Anterior
        </button>

        <div className="dots">
          {Array.from({ length: total }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              className={`dot${n === current ? ' active' : ''}`}
              onClick={() => onGoTo(n)}
              aria-label={`Ir para tela ${n}`}
            />
          ))}
        </div>

        <button className="nav-btn primary" onClick={onNext} disabled={current === total}>
          {current === total ? 'Concluído ✓' : 'Próxima →'}
        </button>
      </div>
    </div>
  )
}
