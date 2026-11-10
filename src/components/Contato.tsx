import { FileText, MapPin, Phone, Star } from 'lucide-react'
import { clinica, instagramHref, medico } from '../data/medico'
import { Button, Container, Eyebrow, InstagramIcon, SectionTitle, WhatsAppIcon } from './ui'

const navegacao = [
  { href: '#topo', label: 'Início' },
  { href: '#medico', label: 'Quem atende' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#formacao', label: 'Formação' },
  { href: '#clinica', label: 'Clínica' },
  { href: '#valores', label: 'Valores' },
]

export function Contato() {
  return (
    <>
      <section id="contato" className="bg-page py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <div className="reveal">
            <Eyebrow icon={<MapPin size={14} />}>Contato e endereço</Eyebrow>
            <SectionTitle>
              Vamos marcar
              <br />
              <em>a sua consulta?</em>
            </SectionTitle>
            <p className="mt-4 max-w-[46ch] leading-[1.75] text-muted">
              Chame no WhatsApp. Se puder, traga exames anteriores e a lista dos remédios que você usa.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a href={clinica.whatsappHref} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-xs transition-all hover:border-blue/60 hover:shadow-md">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25d366]/15 text-[#128c4a]">
                    <WhatsAppIcon size={18} />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-muted">WhatsApp</span>
                    <span className="block font-display text-[1.1rem] font-extrabold text-navy">{clinica.whatsapp}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={clinica.telefoneHref} className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-xs transition-all hover:border-blue/60 hover:shadow-md">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
                    <Phone size={18} />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-muted">Telefone da clínica</span>
                    <span className="block font-display text-[1.1rem] font-extrabold text-navy">{clinica.telefone}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-xs">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-soft text-red">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-muted">Endereço</span>
                  <span className="block font-display text-[1rem] font-extrabold text-navy">{clinica.endereco}</span>
                  <span className="block text-[0.85rem] text-muted">
                    {clinica.cidade} · CEP {clinica.cep}
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={clinica.whatsappHref} variant="primary" external>
                <WhatsAppIcon size={16} /> Chamar no WhatsApp
              </Button>
              <Button href={clinica.mapaLink} variant="outline" external>
                <MapPin size={16} /> Abrir no mapa
              </Button>
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-2xl border border-line bg-white shadow-sm" data-delay="1">
            <iframe
              title={`Mapa: ${clinica.nome}, ${clinica.endereco}, ${clinica.cidade}`}
              src={clinica.mapaEmbed}
              className="h-[380px] w-full md:h-full md:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>

      <footer id="rodape" className="relative z-10 border-t border-white/10 bg-night-deep py-12 text-slate-300">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <img src="/logo-angiovas.png" alt="Angiovas" className="h-12 w-12 object-contain" />
                <span className="leading-none">
                  <span className="block font-display text-[1.1rem] font-extrabold tracking-tight text-white">Angiovas</span>
                  <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.1em] text-blue-light/80">Sul de Minas</span>
                </span>
              </div>
              <p className="mt-5 text-[0.82rem] leading-[1.7] text-slate-400">
                Angiologia e cirurgia vascular em Varginha: consulta com diagnóstico explicado, ultrassom Doppler
                arterial ou venoso na própria clínica e tratamento de varizes sem cirurgia.
              </p>
            </div>

            <div>
              <p className="text-[0.88rem] font-extrabold text-white">Navegação</p>
              <ul className="mt-4 space-y-2 text-[0.84rem]">
                {navegacao.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-slate-400 transition-colors hover:text-white">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[0.88rem] font-extrabold text-white">O médico</p>
              <ul className="mt-4 space-y-2 text-[0.84rem]">
                <li>
                  <a href={clinica.telefoneHref} className="inline-flex items-center gap-1.5 font-extrabold text-[#ff7b82] hover:text-white">
                    <Phone size={13} /> Ligar para a clínica
                  </a>
                </li>
                <li>
                  <a href={medico.lattes} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white">
                    <FileText size={13} /> Currículo Lattes (CNPq)
                  </a>
                </li>
                <li>
                  <a href={medico.doctoralia} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white">
                    <Star size={13} /> Avaliações na Doctoralia
                  </a>
                </li>
                {instagramHref && (
                  <li>
                    <a href={instagramHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white">
                      <InstagramIcon size={13} /> @{medico.instagram}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <p className="text-[0.88rem] font-extrabold text-white">Central de atendimento</p>
              <p className="mt-4 text-[0.82rem] text-slate-400">Dúvidas, agendamento de consulta e exames:</p>
              <a href={clinica.whatsappHref} target="_blank" rel="noreferrer" className="mt-2 block font-display text-[1.5rem] font-extrabold tracking-tight text-blue-light hover:text-white">
                {clinica.whatsapp}
              </a>
              <p className="mt-1 text-[0.82rem] text-slate-400">Telefone: {clinica.telefone}</p>
              <p className="mt-3 text-[0.82rem] text-slate-400">
                {clinica.endereco}, {clinica.cidade}
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-[0.75rem] text-slate-500">
            © {new Date().getFullYear()} {clinica.nome}. Dr. {medico.nome} · {medico.crm} · {medico.rqe}. Todos os direitos
            reservados. Varginha, MG.
          </div>
        </Container>
      </footer>
    </>
  )
}
