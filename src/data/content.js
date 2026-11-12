import serviceCleaning from '../assets/images/service-cleaning.jpg';
import serviceInstall from '../assets/images/service-install.jpg';
import serviceMaintenance from '../assets/images/service-maintenance.jpg';

export const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export const services = [
  {
    id: 'higienizacao',
    title: 'Higienização de placas',
    text: 'Removemos poeira, fuligem e sujeira que bloqueiam o sol e diminuem a geração de energia.',
    image: serviceCleaning,
    icon: 'droplets',
    message: 'Olá, New Clean! Quero um orçamento de higienização das minhas placas solares.',
  },
  {
    id: 'instalacao',
    title: 'Instalação de sistemas',
    text: 'Montagem do seu sistema solar com fixação correta e acabamento caprichado.',
    image: serviceInstall,
    icon: 'sun',
    message: 'Olá, New Clean! Gostaria de um orçamento para instalação de sistema solar.',
  },
  {
    id: 'manutencao',
    title: 'Manutenção',
    text: 'Inspeção e cuidados preventivos para o seu sistema funcionar bem por muitos anos.',
    image: serviceMaintenance,
    icon: 'wrench',
    message: 'Olá, New Clean! Preciso de manutenção no meu sistema solar.',
  },
];

export const benefits = [
  { icon: 'zap', title: 'Mais energia', text: 'Placa limpa capta mais luz e volta a gerar o que deveria.' },
  { icon: 'wallet', title: 'Mais economia', text: 'Mais geração significa uma conta de luz menor.' },
  { icon: 'shield', title: 'Mais vida útil', text: 'A limpeza correta evita manchas e desgaste nos módulos.' },
];

export const steps = [
  { title: 'Chame no WhatsApp', text: 'Conte sobre o seu sistema e receba o orçamento.' },
  { title: 'Agendamos a visita', text: 'Escolhemos juntos o melhor dia e horário.' },
  { title: 'Fazemos o serviço', text: 'Com segurança e sem danificar suas placas.' },
  { title: 'Você recebe as fotos', text: 'Registro do antes e depois de tudo o que foi feito.' },
];

export const faqs = [
  {
    q: 'De quanto em quanto tempo devo limpar as placas?',
    a: 'Em geral, a cada 6 meses. Em locais com muita poeira, como perto de estradas de terra ou lavouras, pode ser preciso limpar com mais frequência.',
  },
  {
    q: 'A chuva já não limpa as placas?',
    a: 'Não totalmente. A chuva tira parte da poeira, mas deixa marcas e não remove fuligem, dejetos de pássaros nem o limo das bordas.',
  },
  {
    q: 'Posso limpar sozinho?',
    a: 'Não é recomendado. Produtos e esponjas errados podem riscar o vidro, e subir no telhado tem risco de queda. O serviço profissional é mais seguro.',
  },
  {
    q: 'Vocês atendem fora de Votuporanga?',
    a: 'Sim, atendemos Votuporanga e cidades da região. Chame no WhatsApp e informe a sua cidade.',
  },
];
