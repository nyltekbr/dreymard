import { Calendar, CreditCard } from 'lucide-react'
import { clinica, valores } from '../data/medico'
import { Button, Container, Eyebrow, SectionTitle, WhatsAppIcon } from './ui'

export function Valores() {
  const grupos = Array.from(new Set(valores.map((v) => v.grupo)))
  const particular = valores.filter((v) => v.grupo === 'Particular')
  const parceiros = grupos.filter((g) => g !== 'Particular')

  return (
    <section id="valores" className="bg-gradient-to-b from-page via-white to-page py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="reveal mx-auto max-w-[680px] text-center">
          <div className="flex justify-center">
            <Eyebrow icon={<CreditCard size={14} />}>Valores</Eyebrow>
          </div>
          <SectionTitle>
            Você sabe o preço
            <br />
            <em>antes de marcar.</em>
          </SectionTitle>
          <p className="mt-4 leading-[1.75] text-muted">
            Sem surpresa na recepção. Estes são os valores para atendimento particular e para quem tem cartão de
            benefício. Consulta e exame Doppler são procedimentos separados, cada um com o seu valor. O exame pode ser
            feito na clínica logo depois da consulta. O pagamento é feito no consultório.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal overflow-hidden rounded-2xl bg-night text-white shadow-xl" data-delay="1">
            <div className="flex items-center justify-between px-6 pt-6 sm:px-7">
              <p className="t-eyebrow text-blue-light">Particular</p>
              <span className="rounded-full bg-red px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-wider text-white">sem convênio</span>
            </div>
            <ul className="mt-4 divide-y divide-white/10 px-6 sm:px-7">
              {particular.map((v) => (
                <li key={v.atendimento} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="font-display text-[1.05rem] font-bold leading-snug">{v.atendimento}</span>
                  <span className="shrink-0 font-display text-[1.1rem] font-extrabold text-blue-light">{v.valor}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/10 px-6 py-5 sm:px-7">
              <Button href={clinica.whatsappHref} variant="primary" external>
                <WhatsAppIcon size={15} /> Marcar pelo WhatsApp
              </Button>
            </div>
          </div>

          <div className="reveal rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7" data-delay="2">
            <p className="t-eyebrow flex items-center gap-2 text-blue">
              <Calendar size={14} /> Tem cartão de benefício ou associação?
            </p>
            <table className="mt-5 w-full text-left text-[0.92rem]">
              <thead>
                <tr className="text-[0.68rem] font-extrabold uppercase tracking-wider text-muted">
                  <th className="pb-2">Cartão</th>
                  <th className="pb-2">Consulta</th>
                  <th className="pb-2">Doppler arterial ou venoso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {parceiros.map((g) => {
                  const c = valores.find((v) => v.grupo === g && v.atendimento.startsWith('Consulta'))
                  const e = valores.find((v) => v.grupo === g && v.atendimento.startsWith('Exame'))
                  return (
                    <tr key={g} className="transition-colors hover:bg-page">
                      <td className="py-3.5 font-bold text-navy">{g}</td>
                      <td className="py-3.5 font-extrabold text-blue">{c?.valor}</td>
                      <td className="py-3.5 font-extrabold text-blue">{e?.valor}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <p className="mt-5 text-[0.8rem] leading-relaxed text-muted">
              É só apresentar o cartão na recepção. Se você tem Unimed, Bradesco, SulAmérica, Cassi ou outro plano, o
              atendimento segue as regras do seu convênio.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
