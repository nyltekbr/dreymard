import { MapPin } from 'lucide-react'
import { clinica, medico } from '../data/medico'
import { Button, Container, Eyebrow, SectionTitle, WhatsAppIcon } from './ui'

export function Contato() {
  return (
    <section id="contato" className="bg-paper-2 py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal">
          <Eyebrow>Contato e endereço</Eyebrow>
          <SectionTitle>
            Vamos marcar
            <br />
            <em>a sua consulta?</em>
          </SectionTitle>
          <p className="mt-6 max-w-[44ch] leading-relaxed text-muted">
            Chame no WhatsApp. Se puder, traga exames anteriores e a lista dos
            remédios que você usa.
          </p>

          <ul className="mt-9 space-y-5">
            <li className="flex items-center gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25d366]/15 text-[#128c4a]">
                <WhatsAppIcon size={18} />
              </span>
              <a
                href={clinica.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="text-[1.15rem] font-medium text-ink hover:text-blue"
              >
                {clinica.whatsapp}
                <span className="ml-2 text-[0.75rem] font-normal text-muted">WhatsApp</span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-soft text-red">
                <MapPin size={18} />
              </span>
              <span>
                <span className="block text-[1.05rem] text-ink">{clinica.endereco}</span>
                <span className="block text-muted">
                  {clinica.cidade} · CEP {clinica.cep}
                </span>
              </span>
            </li>
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={clinica.whatsappHref} variant="wa" external>
              <WhatsAppIcon /> Chamar no WhatsApp
            </Button>
            <Button href={clinica.mapaLink} variant="ghost" external>
              Abrir no mapa
            </Button>
          </div>
        </div>

        <div className="reveal overflow-hidden rounded-3xl border border-line bg-bone" data-delay="1">
          <iframe
            title={`Mapa: ${clinica.nome}, ${clinica.endereco}, ${clinica.cidade}`}
            src={clinica.mapaEmbed}
            className="h-[380px] w-full grayscale-[30%] md:h-full md:min-h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Container>

      <Container>
        <footer className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.82rem] text-muted md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-angiovas.png" alt="Angiovas" className="h-9 w-9 object-contain" />
            <span>
              {clinica.nome} · {clinica.tagline}
            </span>
          </div>
          <p>
            Dr. {medico.nome} · {medico.crm} · {medico.rqe}
          </p>
        </footer>
      </Container>
    </section>
  )
}
