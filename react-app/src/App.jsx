import { useState, useEffect, useCallback } from 'react'
import Nav from './components/Nav'
import Step1Hero from './components/steps/Step1Hero'
import Step2Cenario from './components/steps/Step2Cenario'
import Step3Comparacao from './components/steps/Step3Comparacao'
import Step4Agente1 from './components/steps/Step4Agente1'
import Step5Quickin from './components/steps/Step5Quickin'
import Step6Coderbyte from './components/steps/Step6Coderbyte'
import Step7Agente2 from './components/steps/Step7Agente2'
import Step8Email from './components/steps/Step8Email'
import Step9Resumo from './components/steps/Step9Resumo'

const TOTAL_STEPS = 9

export default function App() {
  const [current, setCurrent] = useState(1)

  const goTo = useCallback((n) => {
    if (n < 1 || n > TOTAL_STEPS) return
    setCurrent(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
      if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen()
        else document.exitFullscreen()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  const steps = [
    <Step1Hero onNext={goNext} />,
    <Step2Cenario />,
    <Step3Comparacao />,
    <Step4Agente1 />,
    <Step5Quickin />,
    <Step6Coderbyte />,
    <Step7Agente2 />,
    <Step8Email />,
    <Step9Resumo onRestart={() => goTo(1)} />,
  ]

  return (
    <>
      <div key={current} className="step-enter">
        {steps[current - 1]}
      </div>
      <Nav
        current={current}
        total={TOTAL_STEPS}
        onPrev={goPrev}
        onNext={goNext}
        onGoTo={goTo}
      />
    </>
  )
}
