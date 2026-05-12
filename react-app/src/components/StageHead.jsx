import Logo from './Logo'

export default function StageHead({ num, title, sub }) {
  return (
    <div className="stage-head">
      <div>
        <div className="stage-num">{num}</div>
        <div className="stage-title">{title}</div>
        <div className="stage-sub">{sub}</div>
      </div>
      <Logo />
    </div>
  )
}
