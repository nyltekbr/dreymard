import { Clinica } from './components/Clinica'
import { Contato } from './components/Contato'
import { Depoimentos } from './components/Depoimentos'
import { Etapas } from './components/Etapas'
import { Formacao } from './components/Formacao'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
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
        <Sobre />
        <Etapas />
        <Formacao />
        <Clinica />
        <Valores />
        <Depoimentos />
        <Contato />
      </main>
      <WhatsAppFlutuante />
    </>
  )
}
