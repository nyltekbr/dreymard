import { FileText, Phone } from 'lucide-react'
import { clinica, medico } from '../data/medico'
import { HeroImagens } from './HeroImagens'
import { Button, Container, WhatsAppIcon } from './ui'

/*
  Fundo: fotos de atendimento humanizado em rodízio (HeroImagens) sob um véu branco
  que vem da esquerda (hero-shade), versão clara do hcor-hero__shade da referência.
  O texto em navy fica sobre a parte clara; a foto respira à direita e a logo se
  destaca no fundo claro. A foto do médico está na
  seção "Prazer, sou o Dr. Eymard".
*/
export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-white pt-[66px] text-navy sm:pt-[100px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <HeroImagens className="absolute inset-0" />
        <div className="hero-shade absolute inset-0" />
      </div>

      <Container className="relative grid items-center gap-12 pb-20 pt-16 sm:pt-20 lg:min-h-[calc(100svh-100px)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-24 lg:pt-20">
        <div>
          <p className="kin-fade t-eyebrow flex items-center gap-2.5 text-blue" style={{ '--d': '0.05s' } as React.CSSProperties}>
            <span className="inline-block h-[7px] w-[7px] rounded-full bg-red" />
            {clinica.nome} · {clinica.tagline}
          </p>

          <h1
            className="kin-fade mt-6 max-w-[850px] font-display text-[clamp(2.1rem,8vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-navy sm:text-[clamp(2.6rem,4.4vw,3.9rem)]"
            style={{ '--d': '0.15s' } as React.CSSProperties}
          >
            Cuido da sua circulação
            <br />
            <span className="text-blue">há {medico.anosDeFormado} anos.</span>
          </h1>

          <p className="kin-fade mt-6 max-w-[560px] text-[0.95rem] leading-[1.75] text-muted sm:text-[1.06rem]" style={{ '--d': '0.25s' } as React.CSSProperties}>
            Sou o Dr. Eymard Brito de Oliveira, angiologista e cirurgião vascular em Varginha, formado há{' '}
            {medico.anosDeFormado} anos. Na consulta você sai com o diagnóstico explicado e, se precisar do exame, faz o
            ultrassom Doppler arterial ou venoso aqui mesmo na clínica, logo depois.
          </p>

          <div className="kin-fade mt-8 grid gap-2.5 sm:flex sm:flex-wrap" style={{ '--d': '0.35s' } as React.CSSProperties}>
            <Button href={clinica.whatsappHref} variant="primary" external>
              <WhatsAppIcon size={16} /> Marcar pelo WhatsApp
            </Button>
            <Button href={medico.lattes} variant="outline" external>
              <FileText size={16} /> Currículo Lattes
            </Button>
            <Button href={clinica.telefoneHref} variant="danger">
              <Phone size={16} /> Ligar para a clínica
            </Button>
          </div>

          <p className="kin-fade mt-7 text-[0.95rem] font-extrabold leading-relaxed text-navy sm:text-[1.1rem]" style={{ '--d': '0.45s' } as React.CSSProperties}>
            {clinica.endereco}, {clinica.cidade}
            <span className="px-2 font-extrabold text-red">/</span>
            {clinica.telefone}
          </p>
        </div>

        {/* logo da Angiovas em fundo transparente; o halo branco (CSS .logo-halo) garante leitura sobre qualquer foto do rodízio */}
        <div className="kin-fade lg:justify-self-end" style={{ '--d': '0.3s' } as React.CSSProperties}>
          <img
            src="/logo-angiovas.png"
            alt="Angiovas, Angiologia e Cirurgia Vascular, Sul de Minas"
            className="logo-halo mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:mx-0 lg:max-w-[460px]"
            loading="eager"
          />
        </div>
      </Container>
    </section>
  )
}
