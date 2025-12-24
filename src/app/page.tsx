type Character = {
  name: string;
  role: string;
  personality: string;
  visualNotes: string;
  color: string;
};

type Scene = {
  id: string;
  time: string;
  title: string;
  focus: string;
  narration: string;
  dialogue: string;
  animation: string;
  sound: string;
};

const characters: Character[] = [
  {
    name: "Lia",
    role: "Protagonista",
    personality:
      "Curiosa, doce e determinada. Ama pintar com giz colorido e colecionar pequenas coisas brilhantes.",
    visualNotes:
      "Jardineira roxa com patches de estrelas, cabelo cacheado preso com fitas cintilantes, mochila em formato de lua.",
    color: "from-[#a855f7] to-[#6366f1]",
  },
  {
    name: "Pingo",
    role: "Estrelinha-guia",
    personality:
      "Brincalhão e cheio de energia. Fala rápido e deixa rastros luminosos em cada movimento.",
    visualNotes:
      "Pequena estrela de cristal com olhos grandes e expressivos. Cauda de cometa responde às emoções.",
    color: "from-[#38bdf8] to-[#22d3ee]",
  },
  {
    name: "Maestro Vento",
    role: "Narrador natural",
    personality:
      "Sábio, gentil e melodioso. Aparece como ventos coloridos que moldam nuvens em formatos mágicos.",
    visualNotes:
      "Fluxo translúcido de luz pastel, com sinos pendurados que tocam ao se mover. Brilhos suaves em cada curva.",
    color: "from-[#fde68a] to-[#fb7185]",
  },
];

const scenes: Scene[] = [
  {
    id: "Cena 1",
    time: "00:00 – 00:20",
    title: "Quintal ao entardecer",
    focus: "Apresentar Lia e o desejo de alcançar as estrelas.",
    narration:
      "Narrador (sussurrado pelo vento): \"Quando o sol se despede, Lia gosta de ouvir a música do céu.\"",
    dialogue:
      "Lia (olhando para cima): \"Se eu pudesse colorir as estrelas, elas dançariam comigo todas as noites.\"",
    animation:
      "Tilt suave do céu rosado para planos fechados nas mãos de Lia recolhendo brilhos guardados em potinhos.",
    sound:
      "Notas de piano delicadas, grilos ao fundo e leve whoosh do vento passando pelos sinos.",
  },
  {
    id: "Cena 2",
    time: "00:20 – 00:45",
    title: "O encontro luminoso",
    focus: "Apresentar Pingo e o pincel mágico.",
    narration:
      "Narrador: \"Na primeira estrela que piscou, alguém respondeu ao chamado de Lia.\"",
    dialogue:
      "Pingo (rindo): \"Ei! Você me acordou com seus sonhos coloridos! Segura, é perigoso derramar elas!\"",
    animation:
      "Pingo surge em espiral, deixando partículas brilhantes que formam um pincel suspenso, girando ao redor de Lia.",
    sound:
      "Harpa cintilante, sinos ao encontrarem o pincel, risadinhas ecoadas como eco suave.",
  },
  {
    id: "Cena 3",
    time: "00:45 – 01:10",
    title: "Subindo para o céu",
    focus: "Viagem de Lia e Pingo rumo às nuvens.",
    narration:
      "Narrador: \"E assim, montados no rastro de um sonho, Lia e Pingo começaram a voar.\"",
    dialogue:
      "Lia: \"Tenho medo de cair!\"\nPingo: \"Medo? A gente vai pintar degraus no ar!\"",
    animation:
      "Câmera acompanha diagonal ascendente. Degraus surgem com cada pincelada, formando arco-íris translúcidos.",
    sound:
      "Batidas leves de tamborim marcando o ritmo das pinceladas e coro infantil cantando \"sobe, sobe\" em vocalise.",
  },
  {
    id: "Cena 4",
    time: "01:10 – 01:40",
    title: "Ateliê em constelações",
    focus: "Transformação do céu em cenário pintado.",
    narration:
      "Narrador: \"No coração da constelação, Lia descobriu que as estrelas são telas esperando histórias.\"",
    dialogue:
      "Lia: \"Vou pintar um caminho de abraços!\" \nPingo: \"E eu coloco brilho extra onde a saudade mora.\"",
    animation:
      "Close no pincel tocando estrela, explosão de cores que se expandem em formas de corações, pipas e casinhas.",
    sound:
      "Camada de xilofone, sopros de flauta doce e crepitar suave, como fogueira distante.",
  },
  {
    id: "Cena 5",
    time: "01:40 – 02:05",
    title: "Toró de Luz",
    focus: "Clímax com chuva de desenhos iluminando a cidade.",
    narration:
      "Narrador: \"Cada pincelada virou chuva colorida, descendo para acordar os sonhos adormecidos.\"",
    dialogue:
      "Crianças (voz off): \"Olha! Estão caindo abraços de luz!\" \nLia: \"Compartilha com o mundo inteiro!\"",
    animation:
      "Corte rápido para casas da vila recebendo luz. Estrelas viram pipas que pousam nas janelas.",
    sound:
      "Explosão orquestral suave com coro infantil e batida de maracatu leve para marcar a chuva.",
  },
  {
    id: "Cena 6",
    time: "02:05 – 02:30",
    title: "Promessa no alpendre",
    focus: "Conclusão com gancho para novas aventuras.",
    narration:
      "Narrador: \"E quando o céu clareou, Lia sabia: sempre haveria um sonho esperando por novas cores.\"",
    dialogue:
      "Lia (abraçando Pingo): \"Toda noite a gente pinta de novo?\"\nPingo: \"Só se você prometer continuar sonhando alto!\"",
    animation:
      "Plano aberto com céu amanhecendo, Lia devolve pincel ao pote, piscando para a câmera. Fade para constelação formando o título.",
    sound:
      "Melodia tema em ukulele com acorde final sustentado. Sinos e respiração profunda fechando a cena.",
  },
];

const productionBeats = [
  {
    title: "Tonalidade & Humor",
    detail:
      "Atmosfera acolhedora e mágica. Inspirações em aquarelas infantis, com transições suaves e detalhes cintilantes que reforçam descoberta e cumplicidade.",
  },
  {
    title: "Estilo de Animação",
    detail:
      "2D híbrido com texturas de papel e luz volumétrica discreta. Animações fluidas nas expressões faciais e movimentos do pincel criando trilhas dinâmicas.",
  },
  {
    title: "Trilha & Foleys",
    detail:
      "Base acústica leve (piano, ukulele, flauta doce) com camadas de sons mágicos. Cada pincelada ganha assinatura sonora para reforçar o encantamento.",
  },
  {
    title: "Mensagem Central",
    detail:
      "A imaginação compartilhada transforma o mundo. O episódio incentiva crianças a criar, dividir e valorizar os sonhos dos outros.",
  },
];

const paletteSwatches = [
  { hex: "#F9E3FF", label: "Rosa aurora" },
  { hex: "#C9C8FF", label: "Lilás nebuloso" },
  { hex: "#94E8FF", label: "Azul cometa" },
  { hex: "#FFE6A7", label: "Dourado aconchego" },
  { hex: "#2F2B68", label: "Noite acolhedora" },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10 md:px-16">
      <section className="relative overflow-hidden rounded-3xl bg-white/80 px-8 py-14 shadow-xl shadow-purple-200/50 ring-1 ring-white/60 backdrop-blur-xl">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-400/30 blur-3xl" />
        <div className="absolute -bottom-12 -left-16 h-40 w-40 rounded-full bg-pink-300/40 blur-2xl" />
        <div className="relative flex flex-col gap-6 text-center sm:items-center">
          <span className="mx-auto w-fit rounded-full bg-gradient-to-r from-indigo-500/70 via-purple-500/70 to-pink-500/70 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white shadow-md">
            Roteiro Animado Infantil
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Lia e o Pincel das Estrelas
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Uma aventura luminosa de 2 minutos e 30 segundos que acompanha Lia
            e sua estrelinha guia Pingo em uma jornada para pintar sonhos no
            céu. O roteiro combina narrativa doce, trilha mágica e orientações
            de animação pensadas para um vídeo infantil envolvente.
          </p>
          <div className="grid gap-3 text-xs font-medium uppercase tracking-widest text-slate-500 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-100/60 px-4 py-3 shadow-inner shadow-white">
              Duração total — 02&apos;30&apos;&apos;
            </div>
            <div className="rounded-2xl bg-slate-100/60 px-4 py-3 shadow-inner shadow-white">
              Faixa etária — 4 a 7 anos
            </div>
            <div className="rounded-2xl bg-slate-100/60 px-4 py-3 shadow-inner shadow-white">
              Estilo — 2D mágico e poético
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Sinopse & Estrutura Emocional
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-relaxed text-slate-600">
            Lia quer tocar as estrelas para compartilhar seus desenhos com o
            mundo. Ao encontrar Pingo, uma estrelinha espevitada, ela descobre
            um pincel capaz de pintar degraus de luz pelo céu. A dupla transforma
            constelações em histórias e faz chover sonhos coloridos sobre a
            cidade, encerrando com a promessa de novas noites criativas.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {productionBeats.map((beat) => (
            <article
              key={beat.title}
              className="h-full rounded-3xl border border-white/70 bg-white/75 p-6 shadow-lg shadow-purple-100/40 transition hover:-translate-y-1 hover:shadow-purple-200/60"
            >
              <h3 className="text-lg font-semibold text-slate-800">
                {beat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {beat.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Personagens principais
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-relaxed text-slate-600">
            Cada personagem tem visual e sonoridade próprios, guiando animadores
            e dubladores sobre cadência, postura e ritmo de fala.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {characters.map((character) => (
            <article
              key={character.name}
              className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-indigo-100/40"
            >
              <div
                className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${character.color} opacity-40 blur-3xl`}
              />
              <div className="relative flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
                  {character.role}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {character.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {character.personality}
                </p>
                <div className="rounded-2xl bg-slate-100/70 p-4 text-xs text-slate-500">
                  <strong className="block text-slate-700">
                    Notas visuais
                  </strong>
                  <span className="mt-1 block leading-relaxed">
                    {character.visualNotes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <header className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Roteiro de animação cena a cena
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-relaxed text-slate-600">
            Estrutura em seis momentos com ações, falas e diretrizes visuais e
            sonoras para orientar storyboard, animação e sound design.
          </p>
        </header>
        <div className="space-y-6">
          {scenes.map((scene) => (
            <article
              key={scene.id}
              className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl shadow-purple-100/50"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
                    {scene.id} · {scene.time}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">
                    {scene.title}
                  </h3>
                </div>
                <p className="rounded-2xl bg-indigo-50/70 px-4 py-2 text-xs font-medium uppercase tracking-widest text-indigo-600">
                  Foco: {scene.focus}
                </p>
              </div>
              <dl className="mt-6 grid gap-4 text-sm text-slate-600 lg:grid-cols-2">
                <div className="space-y-2">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Narração
                  </dt>
                  <dd className="rounded-2xl bg-slate-100/70 p-4 leading-relaxed">
                    {scene.narration}
                  </dd>
                </div>
                <div className="space-y-2">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Diálogo principal
                  </dt>
                  <dd className="rounded-2xl bg-slate-100/70 p-4 whitespace-pre-line leading-relaxed">
                    {scene.dialogue}
                  </dd>
                </div>
                <div className="space-y-2">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Direção de animação
                  </dt>
                  <dd className="rounded-2xl bg-slate-50/70 p-4 leading-relaxed">
                    {scene.animation}
                  </dd>
                </div>
                <div className="space-y-2">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Paisagem sonora
                  </dt>
                  <dd className="rounded-2xl bg-slate-50/70 p-4 leading-relaxed">
                    {scene.sound}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Paleta, ritmo e pós-produção
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-relaxed text-slate-600">
            Orientações auxiliares para composição visual, cortes e finalização
            de áudio, garantindo unidade estética e narrativa.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
          <div className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-lg shadow-purple-100/40">
            <h3 className="text-lg font-semibold text-slate-800">
              Paleta sugerida
            </h3>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {paletteSwatches.map((swatch) => (
                <div
                  key={swatch.hex}
                  className="group flex flex-col items-center gap-2"
                >
                  <span
                    className="h-16 w-full rounded-2xl shadow-inner shadow-slate-200 transition group-hover:scale-105"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <span className="text-xs font-medium text-slate-600">
                    {swatch.label}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-mono text-slate-500">
                    {swatch.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/75 p-6 shadow-lg shadow-indigo-100/40">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Ritmo de edição
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Cortes suaves e predominância de movimentos de câmera contínuos.
                Reserve clímax visual para a chuva de luz, usando aceleração
                sutil (110% do ritmo base) e retomando a calma no epílogo.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Camadas de áudio final
              </h3>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
                <li>
                  <strong className="text-slate-700">Narração:</strong> voz
                  adulta calorosa, com leve reverb para ecoar o vento.
                </li>
                <li>
                  <strong className="text-slate-700">Personagens:</strong>{" "}
                  crianças com timbre natural. Pingo usa filtro shimmer suave.
                </li>
                <li>
                  <strong className="text-slate-700">Foley mágico:</strong> pinceladas,
                  brilhos e sinos em estéreo amplo para sugerir profundidade.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Créditos & gancho
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Aproveite os créditos para mostrar esboços e rabiscos de Lia,
                enquanto o narrador convida as crianças a enviarem suas próprias
                constelações. Fade out com cintilações que formam o logotipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="rounded-3xl bg-white/60 px-6 py-8 text-center text-sm text-slate-500 shadow-inner shadow-white/40">
        História original e roteiro audiovisual prontos para produção. Adapte a
        duração ou personagens conforme a necessidade do seu estúdio e mantenha
        a magia viva em cada quadro.
      </footer>
    </main>
  );
}
