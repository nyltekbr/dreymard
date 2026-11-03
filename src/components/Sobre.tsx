import { atuacao, sociedades } from '../data/medico'
import { Container, Eyebrow, SectionTitle } from './ui'

export function Sobre() {
  return (
    <section id="medico" className="py-20 md:py-28">
      <Container className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal md:sticky md:top-28 md:self-start">
          <Eyebrow>Quem vai te atender</Eyebrow>
          <SectionTitle>
            Prazer, sou o
            <br />
            <em>Dr. Eymard.</em>
          </SectionTitle>
          <p className="mt-8 text-[1.05rem] leading-relaxed text-ink/85">
            Me formei em Medicina em 1987 e fiz residência em Cirurgia Cardiovascular e especialização em
            Angiologia e Cirurgia Vascular na Santa Casa de Belo Horizonte. Desde então atendo o Sul de Minas,
            hoje na Angiovas e no corpo clínico do Hospital Humânitas-Unimed de Varginha.
          </p>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/85">
            Nunca parei de estudar: mestrado, doutorado, pós-doutorado na Itália e doze anos como pesquisador
            da UNIFESP. Também me formei em Direito, e por isso faço questão de explicar cada passo e cada
            risco antes de você decidir qualquer coisa.
          </p>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/85">
            Na prática: eu mesmo faço o seu ultrassom com Doppler, mostro na tela o que estou vendo e
            decidimos juntos o tratamento. Sem pressa.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="reveal rounded-3xl border border-line bg-bone p-7" data-delay="1">
            <p className="t-eyebrow text-muted">Onde atendo e onde já atuei</p>
            <ul className="mt-5 divide-y divide-line">
              {atuacao.map((a) => (
                <li key={a.cargo} className="grid gap-1 py-3.5 sm:grid-cols-[120px_1fr] sm:gap-4">
                  <span className="text-[0.8rem] font-medium text-blue">{a.periodo}</span>
                  <span>
                    <span className="block font-medium text-ink">{a.cargo}</span>
                    <span className="block text-[0.9rem] text-muted">{a.onde}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl bg-blue-ink p-7 text-white" data-delay="2">
            <p className="t-eyebrow text-white/60">Sociedades de que faço parte</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {sociedades.map((s) => (
                <li key={s.sigla} className="flex gap-3 rounded-2xl bg-white/5 p-4">
                  <span className="font-display text-[1.3rem] font-semibold leading-none text-red-soft">{s.sigla}</span>
                  <span>
                    <span className="block text-[0.88rem] leading-snug text-white/90">{s.nome}</span>
                    <span className="mt-1 block text-[0.72rem] text-white/50">desde {s.ano}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
