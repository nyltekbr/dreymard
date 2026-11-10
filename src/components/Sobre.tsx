import { Activity, FileText, GraduationCap, Star, Wallet } from 'lucide-react'
import { condicoes, instagramHref, medico } from '../data/medico'
import { Container, InstagramIcon } from './ui'

const atalhos = [
  { href: '#como-funciona', label: 'Como funciona a consulta', Icon: Activity },
  { href: '#formacao', label: 'Formação e currículo', Icon: GraduationCap },
  { href: '#valores', label: 'Valores e convênios', Icon: Wallet },
]

/* Card branco logo abaixo do hero: foto do médico + apresentação, e a esteira vertical do que ele trata. */
export function Sobre() {
  const cols = [0, 1, 2].map((k) => ({ itens: condicoes.filter((_, i) => i % 3 === k), dir: k === 1 ? 'down' : 'up' }))
  return (
    <section id="medico" className="relative z-30 bg-page pb-16 pt-10 sm:pb-20 sm:pt-14">
      <Container>
        <div className="reveal rounded-3xl bg-white p-6 shadow-[0_30px_60px_-30px_rgba(6,26,64,0.35)] ring-1 ring-line sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-14">
            <figure className="relative mx-auto w-full max-w-[360px]">
              <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-line shadow-[0_30px_60px_-30px_rgba(6,26,64,0.6)]">
                <img
                  src={medico.foto}
                  alt={`Dr. ${medico.nome}`}
                  className="aspect-[4/5] w-full object-cover object-[50%_15%]"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/90 via-night/10 to-transparent" />
                <figcaption className="absolute inset-x-5 bottom-5">
                  <p className="font-display text-[1.1rem] font-extrabold leading-tight tracking-tight text-white">{medico.nomeCurto}</p>
                  <p className="mt-1 text-[0.78rem] font-semibold text-blue-light">{medico.especialidades.join(' · ')}</p>
                </figcaption>
              </div>
              <a
                href={medico.doctoralia}
                target="_blank"
                rel="noreferrer"
                className="absolute -right-3 top-[56%] flex items-center gap-2.5 rounded-2xl border border-line bg-white px-3.5 py-2.5 shadow-xl transition-colors hover:border-blue/60 sm:-right-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue text-white">
                  <Star size={16} className="fill-white" />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-[1rem] font-extrabold text-navy">{medico.avaliacoes.nota} de 5</span>
                  <span className="block text-[0.68rem] font-semibold text-muted">{medico.avaliacoes.total} opiniões na {medico.avaliacoes.fonte}</span>
                </span>
              </a>
            </figure>

            <div>
              <h2 className="t-display text-[2.3rem] sm:text-[3rem] lg:text-[3.4rem]">
                Prazer, sou o
                <br />
                <em>Dr. Eymard.</em>
              </h2>
              <p className="mt-6 text-[1rem] leading-[1.7] text-muted">
                Me formei em Medicina em {medico.anoFormatura}, há {medico.anosDeFormado} anos, e fiz residência em
                Cirurgia Cardiovascular e especialização em Angiologia e Cirurgia Vascular na Santa Casa de Belo
                Horizonte. Desde então atendo o Sul de Minas, hoje na Angiovas e no corpo clínico do Hospital
                Humânitas-Unimed de Varginha.
              </p>
              <p className="mt-4 text-[1rem] leading-[1.7] text-muted">
                Nunca parei de estudar: mestrado, doutorado, pós-doutorado na Itália e doze anos como pesquisador
                da UNIFESP. Faço questão de explicar cada passo e cada risco antes de você decidir qualquer coisa.
              </p>
              <p className="mt-4 text-[1rem] leading-[1.7] text-muted">
                Na prática: na consulta eu examino e explico. Se o exame for necessário, o ultrassom Doppler
                arterial ou venoso é feito aqui na clínica, logo depois, e eu mostro na tela o que estou vendo.
                Decidimos juntos o tratamento. Sem pressa.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] font-semibold text-muted">
                <li>
                  <a href={medico.lattes} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-blue">
                    <FileText size={13} /> Currículo Lattes na plataforma do CNPq
                  </a>
                </li>
                {instagramHref && (
                  <li>
                    <a href={instagramHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-blue">
                      <InstagramIcon size={13} /> @{medico.instagram}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <p className="t-eyebrow mb-4 flex items-center gap-2 text-blue">
              <Activity size={14} /> O que eu trato
            </p>
            <div className="vmarquee grid h-[300px] grid-cols-2 gap-3 overflow-hidden sm:grid-cols-3" aria-label="Condições que trato">
              {cols.map((col, k) => (
                <div key={k} className={`vmarquee-col ${k === 2 ? 'hidden sm:block' : ''}`} data-dir={col.dir}>
                  {[...col.itens, ...col.itens].map((c, i) => (
                    <div
                      key={c + i}
                      className="group flex items-center gap-3 rounded-2xl border border-line bg-page px-4 py-4 shadow-xs transition-colors hover:border-blue/60"
                      aria-hidden={i >= col.itens.length}
                    >
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                        <Activity size={16} />
                      </span>
                      <span className="text-[0.92rem] font-bold leading-snug text-navy">{c}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-line pt-7">
            <ul className="grid gap-4 sm:grid-cols-3 sm:gap-0">
              {atalhos.map((a, i) => (
                <li key={a.href} className="relative flex items-center sm:justify-center sm:first:justify-start sm:last:justify-end">
                  <a href={a.href} className="group inline-flex items-center gap-2 text-[0.82rem] font-extrabold uppercase tracking-wide text-blue transition-colors hover:text-navy">
                    <a.Icon size={16} className="transition-transform duration-300 group-hover:scale-110" /> {a.label}
                  </a>
                  {i < atalhos.length - 1 && <span className="absolute right-0 hidden h-1.5 w-1.5 rounded-full bg-slate-300 sm:block" aria-hidden />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
