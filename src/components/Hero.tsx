import { FileText, Phone, Star } from 'lucide-react'
import { clinica, medico } from '../data/medico'
import { HeroImagens } from './HeroImagens'
import { Button, Container, WhatsAppIcon } from './ui'

/*
  Fundo: fotos de atendimento humanizado em rodízio (HeroImagens), com tint azul e
  a sombra navy vindo da esquerda como no hcor-hero__shade da referência. O texto
  fica sobre a parte escura; a foto respira à direita. A foto do médico está na
  seção "Prazer, sou o Dr. Eymard".
*/
export function Hero() {
  const stats = [
    { valor: `${medico.anosDeFormado}`, rotulo: 'anos de formado' },
    { valor: `${medico.avaliacoes.nota}`, rotulo: `${medico.avaliacoes.total} opiniões na ${medico.avaliacoes.fonte}`, estrela: true },
    { valor: medico.crm.replace('CRM ', '').replace('-MG', ''), rotulo: `${medico.crm} · ${medico.rqe}` },
  ]
  return (
    <section id="topo" className="relative overflow-hidden bg-night pt-[66px] text-white sm:pt-[100px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <HeroImagens className="absolute inset-0" />
        <div className="hero-tint absolute inset-0" />
        <div className="hero-shade absolute inset-0" />
      </div>

      <Container className="relative grid items-center gap-12 pb-20 pt-16 sm:pt-20 lg:min-h-[calc(100svh-100px)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-24 lg:pt-20">
        <div>
          <p className="kin-fade t-eyebrow flex items-center gap-2.5 text-blue-light" style={{ '--d': '0.05s' } as React.CSSProperties}>
            <span className="inline-block h-[7px] w-[7px] rounded-full bg-blue-light" />
            {clinica.nome} · {clinica.tagline}
          </p>

          <h1
            className="kin-fade mt-6 max-w-[850px] font-display text-[clamp(2.1rem,8vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-white sm:text-[clamp(2.6rem,4.4vw,3.9rem)]"
            style={{ '--d': '0.15s' } as React.CSSProperties}
          >
            Cuido da sua circulação
            <br />
            <span className="text-blue-light">há {medico.anosDeFormado} anos.</span>
          </h1>

          <p className="kin-fade mt-6 max-w-[560px] text-[0.95rem] leading-[1.75] text-[#e1eaf2] sm:text-[1.06rem]" style={{ '--d': '0.25s' } as React.CSSProperties}>
            Sou o Dr. Eymard Brito de Oliveira, angiologista e cirurgião vascular em Varginha, formado há{' '}
            {medico.anosDeFormado} anos. Na consulta você sai com o diagnóstico explicado e, se precisar do exame, faz o
            ultrassom Doppler arterial ou venoso aqui mesmo na clínica, logo depois.
          </p>

          <div className="kin-fade mt-8 grid gap-2.5 sm:flex sm:flex-wrap" style={{ '--d': '0.35s' } as React.CSSProperties}>
            <Button href={clinica.whatsappHref} variant="primary" external>
              <WhatsAppIcon size={16} /> Marcar pelo WhatsApp
            </Button>
            <Button href={medico.lattes} variant="secondary" external>
              <FileText size={16} /> Currículo Lattes
            </Button>
            <Button href={clinica.telefoneHref} variant="danger">
              <Phone size={16} /> Ligar para a clínica
            </Button>
          </div>

          <p className="kin-fade mt-7 text-[0.95rem] font-extrabold leading-relaxed text-[#f1f8ff] sm:text-[1.1rem]" style={{ '--d': '0.45s' } as React.CSSProperties}>
            {clinica.endereco}, {clinica.cidade}
            <span className="px-2 font-extrabold text-blue-light">/</span>
            {clinica.telefone}
          </p>
        </div>

        {/* painel de vidro com os números, no lugar da foto */}
        <div className="kin-fade lg:justify-self-end" style={{ '--d': '0.3s' } as React.CSSProperties}>
          <ul className="grid gap-3 sm:grid-cols-3 lg:w-[300px] lg:grid-cols-1">
            {stats.map((s) => (
              <li
                key={s.rotulo}
                className="rounded-2xl border border-white/15 bg-night-deep/55 px-5 py-4 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)] backdrop-blur-md"
              >
                <p className="flex items-baseline gap-1.5 font-display text-[2rem] font-extrabold leading-none tracking-tight text-white">
                  {s.valor}
                  {s.estrela && <Star size={16} className="translate-y-[-3px] fill-blue-light text-blue-light" />}
                </p>
                <p className="mt-1.5 text-[0.76rem] font-semibold text-slate-300">{s.rotulo}</p>
              </li>
            ))}
          </ul>
          <a
            href={medico.doctoralia}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-blue-light transition-colors hover:text-white"
          >
            Ler as opiniões na {medico.avaliacoes.fonte}
            <span aria-hidden>›</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
