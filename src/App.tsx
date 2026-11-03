import { Clinica } from './components/Clinica'
import { Contato } from './components/Contato'
import { Depoimentos } from './components/Depoimentos'
import { Formacao } from './components/Formacao'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Producao } from './components/Producao'
import { Sobre } from './components/Sobre'
import { Valores } from './components/Valores'
import { WhatsAppFlutuante } from './components/WhatsAppFlutuante'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Sobre />
        <Formacao />
        <Producao />
        <Clinica />
        <Valores />
        <Depoimentos />
        <Contato />
      </main>
      <WhatsAppFlutuante />
    </>
  )
}
