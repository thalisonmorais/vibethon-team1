export default function Logo({ large = false }) {
  return (
    <div className="logo" style={large ? { justifyContent: 'center', marginBottom: 32, fontSize: 18 } : {}}>
      <div
        className="logo-mark"
        style={large ? { width: 48, height: 48, fontSize: 24, borderRadius: 12 } : {}}
      >
        🤖
      </div>
      {large && (
        <span style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>CominAI</span>
      )}
    </div>
  )
}
