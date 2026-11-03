import { ArrowDown, Star } from 'lucide-react'
import { clinica, medico } from '../data/medico'
import { Button, Container, SectionTitle, WhatsAppIcon } from './ui'


export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-night pt-32 pb-16 text-white md:pt-36 md:pb-20"
      style={{
        backgroundImage:
          'radial-gradient(60% 70% at 78% 45%, rgba(0, 64, 164, 0.55) 0%, rgba(0, 64, 164, 0) 70%), radial-gradient(40% 50% at 70% 80%, rgba(220, 0, 8, 0.35) 0%, rgba(220, 0, 8, 0) 70%)',
      }}
    >
      {/* traço de pulso no rodapé do hero: linha base apagada + segmento aceso que corre como num monitor */}
      <svg
        className="pointer-events-none absolute left-0 bottom-5 hidden h-14 w-full md:block"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 60 H120 L135 60 L150 20 L170 100 L190 40 L210 75 L230 60 H480 L495 60 L510 20 L530 100 L550 40 L570 75 L590 60 H840 L855 60 L870 20 L890 100 L910 40 L930 75 L950 60 H1200 L1215 60 L1230 20 L1250 100 L1270 40 L1290 75 L1310 60 H1440" stroke="#ff4d55" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" opacity="0.22" />
        <path
          className="pulse-path"
          d="M0 60 H120 L135 60 L150 20 L170 100 L190 40 L210 75 L230 60 H480 L495 60 L510 20 L530 100 L550 40 L570 75 L590 60 H840 L855 60 L870 20 L890 100 L910 40 L930 75 L950 60 H1200 L1215 60 L1230 20 L1250 100 L1270 40 L1290 75 L1310 60 H1440"
          pathLength={1000}
          stroke="#ff4d55"
          strokeWidth="2.25"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      <Container className="relative grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <p className="t-eyebrow kin-fade flex items-center gap-3 text-red-soft" style={{ '--d': '0.1s' } as React.CSSProperties}>
            <span className="inline-block h-px w-8 bg-red" />
            {clinica.nome} · {clinica.tagline}
          </p>

          <SectionTitle as="h1" auto className="mt-7 [&_em]:text-white/80">
            Cuido da
            <br />
            <em>sua circulação</em>
            <br />
            há 20 anos.
          </SectionTitle>

          <p className="kin-fade mt-7 max-w-[50ch] text-[1.08rem] leading-relaxed text-white/70">
            Sou o Dr. Eymard Brito de Oliveira, angiologista e cirurgião vascular em Varginha. Na consulta você
            já sai com o ultrassom feito, o diagnóstico explicado e o tratamento definido.
          </p>

          <div className="kin-fade mt-9 flex flex-wrap items-center gap-3" style={{ '--d': '0.8s' } as React.CSSProperties}>
            <Button href={clinica.whatsappHref} variant="wa" external>
              <WhatsAppIcon /> Marcar pelo WhatsApp
            </Button>
            <Button href="#valores" variant="ghost-light">
              Ver valores <ArrowDown size={15} />
            </Button>
          </div>

          <dl className="kin-fade mt-12 grid max-w-[560px] grid-cols-1 gap-5 border-t border-white/15 pt-6 sm:grid-cols-3 sm:gap-6" style={{ '--d': '1s' } as React.CSSProperties}>
            <div>
              <dt className="t-eyebrow text-white/45">Registro</dt>
              <dd className="mt-1 text-[0.95rem] font-medium">{medico.crm}</dd>
              <dd className="text-[0.8rem] text-white/55">{medico.rqe}</dd>
            </div>
            <div>
              <dt className="t-eyebrow text-white/45">Nota dos pacientes</dt>
              <dd className="mt-1 flex items-center gap-1 text-[0.95rem] font-medium">
                <Star size={14} className="fill-red-soft text-red-soft" /> {medico.avaliacoes.nota}
              </dd>
              <dd className="text-[0.8rem] text-white/55">
                {medico.avaliacoes.total} opiniões · {medico.avaliacoes.fonte}
              </dd>
            </div>
            <div>
              <dt className="t-eyebrow text-white/45">Exame</dt>
              <dd className="mt-1 text-[0.95rem] font-medium">Doppler na hora</dd>
              <dd className="text-[0.8rem] text-white/55">feito por mim, na consulta</dd>
            </div>
          </dl>
        </div>

        <figure
          className="kin-fade relative mx-auto w-full max-w-[520px] md:-mr-4"
          style={{ '--d': '0.3s' } as React.CSSProperties}
        >
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
            <img
              src={medico.foto}
              alt={`Dr. ${medico.nome}`}
              className="aspect-[4/5] w-full object-cover object-[50%_18%]"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-5 right-5">
              <p className="font-display text-[1.1rem] font-semibold leading-tight text-white">{medico.nomeCurto}</p>
              <p className="mt-1 text-[0.8rem] text-white/65">{medico.especialidades.join(' · ')}</p>
            </figcaption>
          </div>
          <span className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 rounded-full bg-red/40 blur-2xl" aria-hidden />
          <span className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-blue/50 blur-2xl" aria-hidden />
        </figure>

      </Container>
    </section>
  )
}
