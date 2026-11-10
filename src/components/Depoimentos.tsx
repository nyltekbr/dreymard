import { Calendar, MessageCircle, Phone, Star } from 'lucide-react'
import { clinica, depoimentos, medico } from '../data/medico'
import { ArrowLink, Button, Container, CountUp, Eyebrow, SectionTitle } from './ui'

export function Depoimentos() {
  return (
    <section id="pacientes" className="border-t border-line bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="reveal grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <Eyebrow icon={<Star size={14} />}>Quem já passou por aqui</Eyebrow>
            <SectionTitle>
              <CountUp to={medico.avaliacoes.total} /> pacientes
              <br />
              <em>deram nota máxima.</em>
            </SectionTitle>
          </div>
          <ArrowLink href={medico.doctoralia} external className="md:pb-2">
            Ler todas na Doctoralia
          </ArrowLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <blockquote
              key={d.nome + d.data}
              className="reveal flex flex-col rounded-2xl border border-line bg-page p-6 shadow-xs transition-all duration-300 hover:border-blue/60 hover:shadow-md"
              data-delay={String(i + 1)}
            >
              <div className="flex gap-0.5 text-red" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} className="fill-red" />
                ))}
              </div>
              <p className="mt-4 flex-1 font-display text-[1.05rem] font-bold leading-snug tracking-tight text-navy">“{d.texto}”</p>
              <footer className="mt-5 text-[0.82rem] text-muted">
                <span className="font-bold text-ink">{d.nome}</span> · {d.data}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="reveal mt-8 flex flex-col gap-5 rounded-2xl border border-line bg-page p-6 shadow-xs md:flex-row md:items-center md:justify-between md:p-7">
          <div>
            <p className="flex items-center gap-2 font-display text-[1.05rem] font-extrabold tracking-tight text-navy">
              <MessageCircle size={18} className="text-blue" /> Ficou com alguma dúvida?
            </p>
            <p className="mt-1 text-[0.9rem] text-muted">Chame no WhatsApp ou ligue para a clínica. Respondo com calma antes de você decidir.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={clinica.telefoneHref} variant="outline" size="sm">
              <Phone size={14} /> Ligar
            </Button>
            <Button href={clinica.whatsappHref} variant="primary" size="sm" external>
              <Calendar size={14} /> Agendar atendimento
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
