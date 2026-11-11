import { Activity, ArrowUpRight, HeartPulse, MapPin, Scissors, ShieldCheck, Stethoscope } from 'lucide-react'
import { clinica, convenios, servicos } from '../data/medico'
import { Container, Eyebrow, SectionTitle } from './ui'

const icones = [Stethoscope, Activity, HeartPulse, Scissors]

export function Clinica() {
  return (
    <section id="clinica" className="border-b border-line bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div className="reveal">
            <Eyebrow icon={<MapPin size={14} />}>A clínica</Eyebrow>
            <SectionTitle>
              Onde você
              <br />
              <em>vai ser atendido.</em>
            </SectionTitle>
            <p className="mt-4 max-w-[56ch] leading-[1.75] text-muted">
              A Angiovas fica na {clinica.endereco}, em Varginha, com aparelho de ultrassom Doppler na própria clínica.
              Consulta e exame são procedimentos diferentes, com valores próprios, mas você faz os dois no mesmo
              lugar: o Doppler arterial ou venoso logo depois da consulta, sem marcar em outro lugar nem voltar outro
              dia.
            </p>
          </div>

          <div className="reveal md:row-span-2" data-delay="1">
            <figure className="group relative overflow-hidden rounded-2xl border border-line shadow-lg">
              <img
                src="/clinica-doppler.jpg"
                alt="Aparelho de ultrassom Doppler vascular ao lado da maca de exame"
                className="aspect-[4/5] w-full object-cover object-[50%_35%] transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent px-5 pb-4 pt-12 text-[0.82rem] font-bold text-white">
                Ultrassom Doppler arterial ou venoso
              </figcaption>
            </figure>
          </div>

          <a
            href={clinica.mapaLink}
            target="_blank"
            rel="noreferrer"
            className="reveal group flex items-center gap-5 rounded-2xl border border-line bg-page p-5 shadow-xs transition-all duration-300 hover:border-blue/60 hover:shadow-md"
            data-delay="1"
          >
            <img src="/logo-angiovas.png" alt="" className="h-16 w-16 shrink-0 object-contain transition-transform duration-500 group-hover:scale-105 sm:h-20 sm:w-20" aria-hidden />
            <span className="min-w-0 flex-1">
              <span className="t-eyebrow block text-blue">Endereço</span>
              <span className="mt-1.5 block font-display text-[1.1rem] font-extrabold leading-snug tracking-tight text-navy">{clinica.endereco}</span>
              <span className="mt-0.5 block text-[0.88rem] text-muted">
                {clinica.cidade} · <span className="whitespace-nowrap">CEP {clinica.cep}</span>
              </span>
              <span className="mt-3 inline-flex items-center gap-1 text-[0.82rem] font-bold text-blue">
                <MapPin size={14} /> Abrir no mapa
                <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((s, i) => {
            const Icon = icones[i % icones.length]
            return (
              <article
                key={s.titulo}
                className="reveal group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue/60 hover:shadow-xl"
                data-delay={String((i % 3) + 1)}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-blue group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <span className="text-[0.78rem] font-extrabold text-slate-300">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-[1.25rem] font-extrabold leading-[1.15] tracking-tight text-navy text-balance">{s.titulo}</h3>
                <p className="mt-2.5 text-[0.88rem] leading-[1.7] text-muted">{s.texto}</p>
              </article>
            )
          })}
        </div>

        <div className="reveal mt-8 rounded-2xl border border-line bg-page px-6 py-6 sm:px-7">
          <Eyebrow icon={<ShieldCheck size={14} />}>Convênios e cartões que atendo</Eyebrow>
          <div className="mt-4 flex flex-wrap gap-2">
            {convenios.map((c) => (
              <span key={c} className="rounded-full border border-line bg-white px-4 py-2 text-[0.84rem] font-bold text-navy transition-colors hover:border-blue/60">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[0.82rem] text-muted">A cobertura muda conforme o serviço. Chame no WhatsApp e confirme o seu antes de agendar.</p>
        </div>
      </Container>
    </section>
  )
}
