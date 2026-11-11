/*
  Fontes: Doctoralia (perfil público, novembro/2026) e Currículo Lattes
  (espelho público do Escavador, coleta de 06/12/2025). Tabela de valores
  informada pela cliente em 20/10/2026. Correções do próprio médico em
  10/11/2026: 40 anos de formado, Doppler arterial ou venoso, exame feito
  na clínica depois da consulta (procedimento à parte), formação jurídica
  separada da médica, link do Lattes e Instagram.
*/

export const medico = {
  nome: 'Eymard Francisco Brito de Oliveira',
  nomeCurto: 'Dr. Eymard Brito de Oliveira',
  crm: 'CRM-MG 20595',
  rqe: 'RQE 14.896',
  // responsável técnico da clínica, no formato que o médico pediu (10/11/2026)
  rt: 'RT: 20.595 - MG',
  especialidades: ['Angiologia', 'Cirurgia Vascular', 'Cirurgia Cardiovascular'],
  anoFormatura: 1987,
  // Informado pelo próprio médico em 10/11/2026 ("sou formado há 40 anos").
  anosDeFormado: 40,
  // Currículo Lattes na plataforma do CNPq (ID confirmado em 10/11/2026 na
  // página antiga da Angiovas e na equipe da Perícia Científica Aplicada).
  lattes: 'http://lattes.cnpq.br/9781245166540101',
  // Instagram: o médico pediu para colocar na página. Nenhum perfil público
  // foi encontrado em 10/11/2026. Preencher com o @ (sem o arroba) e o bloco aparece.
  instagram: '',
  // LinkedIn passado pela Ketlyn em 11/11/2026
  linkedin: 'https://www.linkedin.com/in/eymard-oliveira-61019634',
  // Foto pública do perfil na Doctoralia. Trocar pelo arquivo oficial do médico.
  foto: '/dr-eymard.jpg',
  doctoralia:
    'https://www.doctoralia.com.br/eymard-francisco-brito-de-oliveira/angiologista-cirurgiao-vascular-cirurgiao-cardiovascular/varginha',
  avaliacoes: { nota: '5,0', total: 501, fonte: 'Doctoralia' },
}

export const clinica = {
  nome: 'Angiovas',
  tagline: 'Angiologia e Cirurgia Vascular, Sul de Minas',
  endereco: 'Av. Brasil, 27, Vila Pinto',
  cidade: 'Varginha, MG',
  cep: '37010-680',
  // Celular/WhatsApp informado pela Ketlyn em 20/10/2026 como "+55 35 9757-5101";
  // celular em MG tem 9 dígitos, então foi gravado com o 9 na frente. Confirmar.
  whatsapp: '(35) 99757-5101',
  // Telefone fixo da clínica (Doctoralia).
  telefone: '(35) 3222-1424',
  telefoneHref: 'tel:+553532221424',
  whatsappHref:
    'https://wa.me/5535997575101?text=' +
    encodeURIComponent('Olá! Quero marcar uma consulta com o Dr. Eymard.'),
  coordenadas: "21°33'S · 45°26'W",
  hospital: 'Hospital Humânitas-Unimed de Varginha',
  mapaEmbed:
    'https://www.google.com/maps?q=Av.+Brasil,+27,+Vila+Pinto,+Varginha+-+MG,+37010-680&output=embed&z=16',
  mapaLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Brasil,+27,+Vila+Pinto,+Varginha+-+MG',
}

export const instagramHref = medico.instagram ? `https://www.instagram.com/${medico.instagram}/` : ''

/* Como funciona o atendimento: consulta e exame são procedimentos separados. */
export const etapas = [
  {
    titulo: 'Consulta',
    sub: 'Avaliação clínica completa, com explicação na hora',
    texto:
      'Converso com você, examino as suas pernas, artérias e veias e explico o que estou encontrando. Você sai sabendo o diagnóstico provável e os próximos passos.',
  },
  {
    titulo: 'Doppler na clínica, se precisar',
    sub: 'Arterial ou venoso, procedimento à parte com valor próprio',
    texto:
      'Quando o exame é necessário, o ultrassom Doppler arterial ou venoso pode ser feito aqui na clínica, logo depois da consulta. É um procedimento à parte, com valor próprio, mas sem marcar em outro lugar nem voltar outro dia.',
  },
  {
    titulo: 'Tratamento definido',
    sub: 'Decidido junto com você, sem pressa',
    texto:
      'Com o resultado em mãos, decidimos juntos: acompanhamento, escleroterapia com espuma ou cirurgia, se for o melhor caminho.',
  },
]

export const condicoes = [
  'Varizes e microvarizes',
  'Trombose venosa profunda',
  'Insuficiência venosa crônica',
  'Aneurisma da aorta abdominal',
  'Arteriosclerose dos membros inferiores',
  'Úlceras de perna e pé',
  'Pé diabético',
  'Linfedema',
  'Flebite',
  'Telangiectasias',
  'Fenômeno de Raynaud',
  'Trombofilias',
  'Embolia pulmonar',
  'Doença arterial periférica',
]

export const servicos = [
  {
    titulo: 'Consulta',
    texto:
      'Avalio a circulação das suas pernas, artérias, veias e linfáticos, e explico o diagnóstico e o plano de tratamento na mesma conversa.',
  },
  {
    titulo: 'Doppler arterial ou venoso',
    texto:
      'Ultrassom Doppler arterial ou venoso feito aqui na clínica, depois da consulta, como procedimento à parte. Sem dor, sem contraste e sem esperar laudo de outro lugar.',
  },
  {
    titulo: 'Varizes sem cirurgia',
    texto:
      'Escleroterapia com espuma para varizes e microvarizes, sem corte e sem internação. Você volta para casa andando.',
  },
  {
    titulo: 'Cirurgia, se precisar',
    texto:
      'Se operar for o melhor caminho, opero no Hospital Humânitas-Unimed de Varginha, onde faço parte do corpo clínico.',
  },
]

export type Valor = { atendimento: string; grupo: string; valor: string }

export const valores: Valor[] = [
  { grupo: 'Particular', atendimento: 'Consulta', valor: 'R$ 800,00' },
  { grupo: 'Particular', atendimento: 'Exame Doppler arterial ou venoso', valor: 'R$ 800,00' },
  { grupo: 'Particular', atendimento: 'Escleroterapia de varizes com espuma', valor: 'R$ 600,00' },
  { grupo: 'Luto Pax', atendimento: 'Consulta', valor: 'R$ 400,00' },
  { grupo: 'Luto Pax', atendimento: 'Exame Doppler arterial ou venoso', valor: 'R$ 400,00' },
  { grupo: 'Cartão de Todos', atendimento: 'Consulta', valor: 'R$ 400,00' },
  { grupo: 'Cartão de Todos', atendimento: 'Exame Doppler arterial ou venoso', valor: 'R$ 400,00' },
  { grupo: 'Plamaf', atendimento: 'Consulta', valor: 'R$ 400,00' },
  { grupo: 'Plamaf', atendimento: 'Exame Doppler arterial ou venoso', valor: 'R$ 400,00' },
  { grupo: 'Associação', atendimento: 'Consulta', valor: 'R$ 400,00' },
  { grupo: 'Associação', atendimento: 'Exame Doppler arterial ou venoso', valor: 'R$ 400,00' },
]

export const convenios = [
  'Unimed',
  'Bradesco Saúde',
  'SulAmérica Saúde',
  'Cassi',
  'NotreDame Intermédica',
  'AAFBB',
  'Cartão de Todos',
  'Luto Pax',
  'Plamaf',
]

export type Formacao = {
  periodo: string
  titulo: string
  instituicao: string
  nota?: string
  destaque?: boolean
}

export const formacao: Formacao[] = [
  { periodo: '1982 a 1987', titulo: 'Graduação em Medicina', instituicao: 'Faculdade de Medicina de Itajubá', destaque: true },
  { periodo: '1988', titulo: 'Aperfeiçoamento em Cardiologia', instituicao: 'Sociedade Mineira de Cardiologia' },
  {
    periodo: '1988 a 1989',
    titulo: 'Especialização em Angiologia e Cirurgia Vascular',
    instituicao: 'Instituto de Ensino e Pesquisa da Santa Casa de Belo Horizonte',
    nota: 'Trabalho: epidemiologia dos pacientes com pé diabético na Santa Casa de BH',
    destaque: true,
  },
  {
    periodo: '1988 a 1990',
    titulo: 'Residência médica em Cirurgia Cardiovascular',
    instituicao: 'Santa Casa de Misericórdia de Belo Horizonte',
    nota: 'Registro de especialista CRMMG, RQE 14.896',
    destaque: true,
  },
  {
    periodo: '1988 a 1990',
    titulo: 'Especialização em Cirurgia Cardiovascular',
    instituicao: 'Faculdade de Ciências Médicas de Minas Gerais',
    nota: 'Trabalho: prevalência de aneurismas toracoabdominais na Santa Casa de BH',
  },
  {
    periodo: '1994 a 1995',
    titulo: 'Aperfeiçoamento em Angiologia e Cirurgia Vascular',
    instituicao: 'Sociedade Brasileira de Angiologia e Cirurgia Vascular, Regional MG',
    nota: 'Tema: isquemia crítica de membros inferiores',
  },
  { periodo: '1998 a 2000', titulo: 'Especialização em Medicina do Trabalho', instituicao: 'Faculdade de Medicina de Itajubá' },
  { periodo: '1998 a 2001', titulo: 'Mestrado em Educação', instituicao: 'Universidade Vale do Rio Verde', nota: 'Dissertação: A Ética da Vida e da Morte' },
  { periodo: '1999 a 2000', titulo: 'Especialização em Cirurgia Experimental', instituicao: 'Universidade do Vale do Sapucaí' },
  {
    periodo: '2001 a 2003',
    titulo: 'Especialização em Docência e Pesquisa em Técnica Operatória',
    instituicao: 'Universidade Federal de São Paulo (UNIFESP)',
  },
  {
    periodo: '2002 a 2005',
    titulo: 'Doutorado em Educação',
    instituicao: 'Universidade Vale do Rio Verde',
    nota: 'Tese: eficácia de um simulador multimídia no ensino de videocirurgia na graduação em medicina',
    destaque: true,
  },
  {
    periodo: '2006 a 2008',
    titulo: 'Mestrado em Medicina Legal e Forense',
    instituicao: 'Universidade de Valência, Espanha',
  },
  {
    periodo: '2012 a 2015',
    titulo: 'Pós-doutorado (dois períodos)',
    instituicao: 'Università degli Studi di Messina, Itália',
    nota: 'Medicina legal e deontologia',
    destaque: true,
  },
]

export const atuacao = [
  { periodo: '2004 até hoje', cargo: 'Cirurgião vascular do corpo clínico', onde: 'Hospital Humânitas-Unimed, Varginha' },
  { periodo: '2005 a 2017', cargo: 'Pesquisador doutor', onde: 'Universidade Federal de São Paulo (UNIFESP)' },
  { periodo: '2011 a 2014', cargo: 'Professor doutor do núcleo de prática jurídica', onde: 'Faculdade de Direito de Varginha' },
  { periodo: '2007 a 2009', cargo: 'Avaliador de cursos de Medicina', onde: 'Conselho Estadual de Educação de São Paulo' },
  { periodo: '2006 a 2012', cargo: 'Perito médico oficial', onde: 'Justiça do Trabalho de Varginha' },
  { periodo: '2002 a 2004', cargo: 'Professor de Anatomia Humana', onde: 'Universidade Vale do Rio Verde (UNINCOR)' },
]

export const sociedades = [
  { sigla: 'CBC', nome: 'Membro Titular do Colégio Brasileiro de Cirurgiões', ano: 2004 },
  { sigla: 'SBACV', nome: 'Membro Efetivo da Sociedade Brasileira de Angiologia e Cirurgia Vascular', ano: 1994 },
  { sigla: 'ISVS', nome: 'Membro da Sociedade Internacional de Cirurgia Vascular', ano: 2005 },
  { sigla: 'WAML', nome: 'Membro da Associação Internacional de Direito Médico', ano: 2007 },
  { sigla: 'SIDM', nome: 'Membro da Sociedade Ibero-Americana de Direito Médico', ano: 2007 },
  { sigla: 'CNPq', nome: 'Consultor ad hoc em bolsas de fomento na área de Angiologia', ano: 2006 },
]

export const publicacoes = [
  {
    ano: 2014,
    titulo: 'Inovações em cirurgia vascular e endovascular no Brasil',
    onde: 'Jornal Vascular Brasileiro, v. 13',
  },
  {
    ano: 2009,
    titulo: 'Capítulo do Tratado de Cirurgia do Colégio Brasileiro de Cirurgiões',
    onde: 'Editora Atheneu',
  },
  {
    ano: 2003,
    titulo: 'Descritores em angiologia e cirurgia vascular nos periódicos nacionais',
    onde: 'Acta Cirúrgica Brasileira, SciELO',
  },
  {
    ano: 2001,
    titulo: 'Varizes de membros inferiores em profissionais de enfermagem',
    onde: 'Livro, Hospital Regional do Sul de Minas',
  },
]

export const numerosCurriculo = [
  { valor: '6', rotulo: 'artigos em periódicos científicos' },
  { valor: '4', rotulo: 'livros publicados' },
  { valor: '2', rotulo: 'capítulos de livro, incluindo o Tratado de Cirurgia do CBC' },
  { valor: '12', rotulo: 'anos como pesquisador da UNIFESP' },
]

export const depoimentos = [
  {
    nome: 'Gabriela',
    data: 'maio de 2026',
    texto: 'Excelente profissional. Muito experiente e atencioso.',
  },
  {
    nome: 'Alessandra',
    data: 'novembro de 2026',
    texto: 'Dr. Eymard é um ótimo médico, muito atencioso, me passou muita segurança e ele é muito pontual.',
  },
  {
    nome: 'Kamila Leonel',
    data: 'abril de 2026',
    texto: 'Consulta muito bem explicada, médico muito atencioso.',
  },
]
