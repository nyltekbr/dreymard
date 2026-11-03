import { clinica, valores } from '../data/medico'
import { Button, Container, Eyebrow, SectionTitle, WhatsAppIcon } from './ui'

export function Valores() {
  const grupos = Array.from(new Set(valores.map((v) => v.grupo)))
  const particular = valores.filter((v) => v.grupo === 'Particular')
  const parceiros = grupos.filter((g) => g !== 'Particular')

  return (
    <section id="valores" className="bg-paper-2 py-20 md:py-28">
      <Container>
        <div className="reveal max-w-[640px]">
          <Eyebrow>Valores</Eyebrow>
          <SectionTitle>
            Você sabe o preço
            <br />
            <em>antes de marcar.</em>
          </SectionTitle>
          <p className="mt-6 leading-relaxed text-muted">
            Sem surpresa na recepção. Estes são os valores para atendimento particular e para quem tem cartão
            de benefício. O pagamento é feito no consultório.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal overflow-hidden rounded-3xl bg-blue text-white" data-delay="1">
            <div className="flex items-center justify-between px-7 pt-7">
              <p className="t-eyebrow text-white/70">Particular</p>
              <span className="rounded-full bg-red px-3 py-1 font-medium text-[0.7rem] uppercase tracking-wider">
                sem convênio
              </span>
            </div>
            <ul className="mt-5 divide-y divide-white/15 px-7 pb-7">
              {particular.map((v) => (
                <li key={v.atendimento} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="font-display text-[1.2rem] leading-snug">{v.atendimento}</span>
                  <span className="shrink-0 font-medium text-[1.05rem]">{v.valor}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/15 px-7 py-5">
              <Button href={clinica.whatsappHref} variant="wa" external>
                <WhatsAppIcon size={15} /> Marcar pelo WhatsApp
              </Button>
            </div>
          </div>

          <div className="reveal rounded-3xl border border-line bg-bone p-7" data-delay="2">
            <p className="t-eyebrow text-muted">Tem cartão de benefício ou associação?</p>
            <table className="mt-5 w-full text-left text-[0.95rem]">
              <thead>
                <tr className="text-[0.72rem] uppercase tracking-wider text-muted">
                  <th className="pb-2 font-medium">Cartão</th>
                  <th className="pb-2 font-medium">Consulta</th>
                  <th className="pb-2 font-medium">Exame Doppler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {parceiros.map((g) => {
                  const c = valores.find((v) => v.grupo === g && v.atendimento.startsWith('Consulta'))
                  const e = valores.find((v) => v.grupo === g && v.atendimento.startsWith('Exame'))
                  return (
                    <tr key={g}>
                      <td className="py-3.5 font-medium text-ink">{g}</td>
                      <td className="py-3.5 font-medium text-blue">{c?.valor}</td>
                      <td className="py-3.5 font-medium text-blue">
                        {e?.valor}
                        {e?.atendimento.includes('venoso') && (
                          <span className="ml-1 text-[0.7rem] text-muted">(venoso)</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <p className="mt-5 text-[0.82rem] leading-relaxed text-muted">
              É só apresentar o cartão na recepção. Se você tem Unimed, Bradesco, SulAmérica, Cassi ou outro
              plano, o atendimento segue as regras do seu convênio.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
