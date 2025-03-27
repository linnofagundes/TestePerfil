// Dados dos Perfis 
const profiles = {
    "INTJ": {
        name: "O Estrategista Cultural",
        description: "Visionário, independente, adora planejar e otimizar. Busca conhecimento e experiências significativas, mas com eficiência.",
        recommendations: [
            "Decifre a história de Floripa analisando a arquitetura e a posição estratégica dos Fortes (São José, Santana, Ratones).",
            "Mergulhe no Centro Histórico com um roteiro otimizado por você: Museu Histórico, Alfândega, Mercado Público - absorva cada detalhe arquitetônico.",
            "Satisfaça sua curiosidade técnica com uma visita guiada à Ponte Hercílio Luz, focando em sua engenharia e impacto histórico.",
            "Encontre seu refúgio intelectual: um café tranquilo na Lagoa, perfeito para leitura estratégica ou planejar os próximos passos da viagem.",
            "Visite o MASC e analise as obras com seu olhar crítico, buscando compreender as intenções e técnicas por trás de cada peça.",
            "Calcule o momento perfeito: use as tábuas de marés para planejar a travessia ou a sessão de fotos ideal na Lagoinha do Leste.",
            "Expanda seus horizontes: participe de uma palestra ou evento na UFSC sobre história, arquitetura ou urbanismo (consulte a agenda!).",
            "Otimize seu paladar: combine uma visita cultural a Santo Antônio de Lisboa com a eficiente Rota Gastronômica do Sol Poente.",
            "Vá além do óbvio: pesquise e planeje uma visita a um sítio arqueológico menos conhecido, como os sambaquis do sul da ilha.",
            "Obtenha uma visão panorâmica e estratégica da cidade em mirantes como o Morro da Cruz ou o da Lagoa – ideal para entender a geografia local."
        ]
    },
    "INTP": {
        name: "O Explorador Curioso",
        description: "Analítico, criativo, busca entender como as coisas funcionam. Adora explorar ideias e possibilidades, muitas vezes de forma independente.",
        recommendations: [
            "Satisfaça sua sede de conhecimento no Museu de Arqueologia e Etnografia (MArquE/UFSC), desvendando as origens da ilha.",
            "Aventure-se por trilhas menos exploradas (como a do Gravatá): analise a geologia, a flora e tente entender o ecossistema local.",
            "Estimule seu cérebro: participe de um workshop de ciência, tecnologia ou debate filosófico que possa estar rolando.",
            "Faça uma 'investigação' gastronômica no Mercado Público: questione vendedores sobre a origem e preparo dos produtos, desvende os sabores!",
            "Investigue as lendas da Lagoa da Conceição (bruxas, luzes): busque explicações lógicas, antropológicas ou apenas divirta-se com as teorias.",
            "Perca-se entre as estantes: explore livrarias e sebos no centro em busca daquele livro ou ideia que vai mudar sua perspectiva.",
            "Analise um ecossistema único: explore a fascinante complexidade dos manguezais em Ratones ou no Saco Grande.",
            "Mapeie o céu noturno: fuja da poluição luminosa em praias como Solidão ou Naufragados e tente identificar constelações.",
            "Decodifique a arquitetura açoriana: procure e identifique seus elementos característicos nas construções de Santo Antônio de Lisboa.",
            "Aprenda algo novo na prática: que tal um curso rápido para identificar plantas nativas ou entender técnicas de pesca artesanal?"
        ]
    },
    "ENTJ": {
        name: "O Líder Aventureiro",
        description: "Decidido, estratégico, gosta de liderar e assumir desafios. Busca experiências que permitam controle e conquista.",
        recommendations: [
            "Assuma a liderança: organize e motive um grupo para conquistar um desafio como o trekking completo da Lagoinha do Leste ou dominar as ondas da Praia Mole.",
            "Busque a maestria: faça um curso intensivo de kitesurf ou windsurf na Lagoa, focando em dominar a técnica rapidamente.",
            "Combine sucesso e prazer: planeje um dia que una negócios (se aplicável) a um lazer de alto nível, como um jantar gourmet seguido de um evento exclusivo em Jurerê.",
            "Comande sua própria expedição: alugue uma lancha privativa e defina o roteiro, as paradas e o ritmo para explorar as ilhas e costas.",
            "Exercite sua capacidade de negociação: consiga as melhores condições para aluguel de equipamentos ou tours exclusivos.",
            "Mostre seu espírito competitivo: participe (ou organize!) um campeonato esportivo na praia, liderando sua equipe à vitória.",
            "Navegue e conquiste: assuma a liderança no planejamento e execução de uma trilha complexa como a do Morro das Aranhas.",
            "Amplie sua rede: participe de eventos de networking ou conferências empresariais que possam estar ocorrendo em Floripa.",
            "Execute com precisão: defina metas claras para sua viagem e crie um plano estratégico para alcançar todos os seus objetivos.",
            "Invista em performance: contrate um instrutor particular para uma aula avançada de um esporte, visando superar seus limites."
        ]
    },
    "ENTP": {
        name: "O Idealizador Criativo",
        description: "Inovador, curioso, adora debater ideias e explorar ângulos diferentes. Busca novidade e estímulo intelectual constante.",
        recommendations: [
            "Explore a Ilha do Campeche e desafie as convenções: debata as teorias sobre as inscrições rupestres com guias e outros visitantes!",
            "Busque o inesperado: participe de eventos culturais alternativos, feiras de inovação ou encontros de startups na ilha.",
            "'Hackeie' o turismo: alugue um caiaque e descubra enseadas secretas na Lagoa, ou crie seu próprio tour temático e irreverente.",
            "Conecte-se e questione: converse com locais em Santo Antônio ou na Costa da Lagoa, buscando perspectivas que desafiem o senso comum.",
            "Estimule o debate: puxe conversas sobre temas instigantes (gentrificação, sustentabilidade) em bares e cafés, explorando todos os ângulos.",
            "Crie conexões inusitadas: que tal discutir filosofia na praia após uma aula de surf, ou física quântica durante um pôr do sol?",
            "Visite o Ecomuseu do Ribeirão da Ilha e questione os modelos existentes: como a preservação cultural e ambiental pode ser reinventada?",
            "Exercite sua mente ágil: participe de uma oficina de escrita criativa, improvisação teatral ou até mesmo um 'escape room'.",
            "Seja um 'consultor' informal: observe a dinâmica da cidade e brainstorm ideias criativas para problemas locais (mobilidade, turismo).",
            "Procure por 'easter eggs' urbanos: descubra detalhes escondidos na arquitetura, na arte de rua ou nas histórias não oficiais do centro."
        ]
    },
    "INFJ": {
        name: "O Idealista Conectado",
        description: "Perspicaz, compassivo, busca significado e conexão profunda. Preocupa-se com o impacto de suas ações.",
        recommendations: [
            "Faça a diferença: participe de um projeto de voluntariado ambiental (Projeto Tamar, limpeza de praias) e conecte-se com a causa.",
            "Busque conexões autênticas: visite comunidades tradicionais (Ribeirão da Ilha, Costa da Lagoa) e converse com moradores, ouvindo suas histórias com empatia.",
            "Recarregue na natureza: faça uma trilha contemplativa (Parque do Rio Vermelho, Morro da Lagoa), buscando insights e paz interior.",
            "Nutra sua alma: participe de um retiro de yoga, meditação ou workshop de autoconhecimento em um cenário inspirador de Floripa.",
            "Registre seus insights: mantenha um diário de viagem focado nos sentimentos, reflexões e significados despertados pelas experiências.",
            "Encontre seu santuário: busque locais de silêncio e beleza profunda (Canto dos Araçás, Praia da Solidão) para momentos de introspecção.",
            "Conecte-se com a arte local: converse com artesãos sobre o significado por trás de seu trabalho e sua conexão com a cultura.",
            "Busque paz espiritual (ou simplesmente silêncio): visite a Catedral ou a Igreja da Lagoa em horários tranquilos.",
            "Vote com seu dinheiro: apoie negócios locais que promovam sustentabilidade e comércio justo.",
            "Compartilhe e aprenda: participe de uma roda de conversa sobre bem-estar, espiritualidade ou causas sociais."
        ]
    },
    "INFP": {
        name: "O Sonhador Romântico",
        description: "Sensível, criativo, guiado por seus valores. Busca beleza, autenticidade e experiências que toquem sua alma.",
        recommendations: [
            "Encontre inspiração pura: passe tempo nas praias serenas como Solidão, Naufragados ou Saquinho – perfeitas para escrever, desenhar ou sonhar acordado.",
            "Contemple a magia: assista ao nascer ou pôr do sol em locais que parecem saídos de um poema, como o Morro da Cruz ou a Ponta do Gravatá.",
            "Deixe-se encantar: explore as ruelas, ateliês e cafés charmosos de Santo Antônio de Lisboa, absorvendo cada detalhe poético.",
            "Crie sua trilha sonora: caminhe pela natureza exuberante (Trilha do Saquinho, Costa da Lagoa) ouvindo músicas que te inspiram.",
            "Encontre seu ninho de leitura: descubra um local isolado na Praia do Matadeiro ou Gravatá para mergulhar em um livro que fale à sua alma.",
            "Conecte-se com a arte sensível: visite exposições no MASC ou procure galerias que ressoem com sua busca por beleza e significado.",
            "Perca-se em histórias: explore livrarias independentes e sebos no centro, buscando obras que despertem sua imaginação.",
            "Compartilhe a beleza: escreva cartas ou postais para pessoas queridas, descrevendo as paisagens e os sentimentos que Floripa desperta.",
            "Explore o lado místico: pesquise as lendas das bruxas e visite locais associados a elas na Lagoa, deixando a imaginação voar.",
            "Alimente sua alma artística: participe de um sarau de poesia ou assista a uma apresentação intimista de música acústica."
        ]
    },
    "ENFJ": {
        name: "O Inspirador Social",
        description: "Carismático, empático, gosta de conectar e inspirar pessoas. Busca harmonia e experiências compartilhadas significativas.",
        recommendations: [
            "Reúna as pessoas: organize um encontro acolhedor (piquenique, happy hour) em locais agradáveis como o Jardim Botânico ou a Beira Mar Norte.",
            "Celebre junto: participe com entusiasmo de eventos culturais comunitários (Festa do Divino, Fenaostra) e conecte-se com o espírito local.",
            "Seja o catalisador da diversão: em um passeio de escuna, incentive a interação, puxe conversa e garanta que todos se sintam incluídos.",
            "Conecte-se com o propósito: visite ONGs locais, aprenda sobre seus projetos inspiradores e veja como pode apoiar ou divulgar.",
            "Lidere pelo exemplo: organize uma atividade colaborativa e divertida, como uma gincana fotográfica pela cidade ou uma ação voluntária.",
            "Crie pontes: inicie conversas que conectem diferentes grupos de pessoas em hostels, praças ou durante os passeios.",
            "Compartilhe sabores e histórias: organize um jantar temático com ingredientes locais, incentivando a troca entre os convidados.",
            "Motive o grupo: durante uma trilha, inspire confiança, ajude quem precisa e celebre as conquistas de todos.",
            "Facilite o diálogo: promova uma roda de conversa sobre experiências de viagem, sonhos ou intercâmbio cultural.",
            "Seja o anfitrião perfeito: ofereça ajuda na organização de eventos ou atividades onde estiver hospedado, criando um ambiente acolhedor."
        ]
    },
    "ENFP": {
        name: "O Explorador Entusiasmado",
        description: "Energético, criativo, espontâneo. Adora explorar novas possibilidades e conectar-se com pessoas de forma animada.",
        recommendations: [
            "Viva um dia de pura diversidade: aula de surf, sandboard nas dunas, explorar lojinhas na Lagoa e terminar dançando em um barzinho!",
            "Conecte-se com a criatividade local: visite feiras de artesanato e converse animadamente com os artistas – quem sabe não surge uma ideia genial?",
            "Faça amigos por onde passar: puxe papo em hostels, na praia, em passeios, e embarque em aventuras espontâneas que surgirem!",
            "Explore a Costa da Lagoa como um local: pegue o barco, pare em restaurantes diferentes, converse com todo mundo e descubra os segredos.",
            "Aventure-se fora do roteiro: peça dicas a moradores, explore bairros como Campeche ou Rio Tavares e veja onde o dia te leva!",
            "Abrace a espontaneidade: participe de um workshop criativo de última hora (dança, percussão, arte) que encontrar pelo caminho.",
            "Quebre o gelo: inicie conversas com pessoas inesperadas – no ônibus, na fila do mercado – e veja que histórias surgem.",
            "Faça um tour gastronômico informal: experimente comidas de rua, petiscos de boteco e descubra os sabores autênticos da ilha.",
            "Siga a música: junte-se a um luau na praia, uma roda de violão ou procure por apresentações de música ao vivo e dance!",
            "Crie sua própria missão divertida: 'Em busca do pôr do sol perfeito', 'O dia das 7 trilhas fáceis' ou 'Descobrindo os cafés secretos'."
        ]
    },
    "ISTJ": {
        name: "O Planejador Prático",
        description: "Responsável, metódico, valoriza a ordem e a tradição. Prefere saber o que esperar e seguir planos confiáveis.",
        recommendations: [
            "Siga um roteiro confiável: faça um city tour guiado completo, cobrindo os pontos históricos essenciais (Catedral, Palácio, Mercado) de forma organizada.",
            "Garanta conforto e previsibilidade: hospede-se em um hotel bem estabelecido, com boas avaliações e serviços que você já conhece.",
            "Visite o Mercado Público com um plano: vá em um horário estratégico e experimente ou compre produtos tradicionais específicos da sua lista.",
            "Explore com eficiência: siga um roteiro detalhado de carro ou ônibus para visitar as praias do Norte (Canasvieiras, Ingleses), aproveitando a infraestrutura.",
            "Confie nos dados: utilize mapas detalhados e aplicativos de navegação confiáveis, conferindo rotas e tempos de deslocamento.",
            "Visite os Fortes (Santana, São José) dentro dos horários, lendo as informações e entendendo sua função histórica passo a passo.",
            "Planeje suas refeições: escolha restaurantes tradicionais com base em recomendações sólidas e cardápios claros.",
            "Esteja preparado: verifique a previsão do tempo e tenha um plano B organizado e detalhado para cada dia.",
            "Faça seu checklist: prepare e confira rigorosamente sua lista de itens essenciais para a viagem e para cada passeio.",
            "Documente de forma organizada: tire fotos legendadas, anote fatos e horários em um diário para um registro fiel da viagem."
        ]
    },
    "ISFJ": {
        name: "O Protetor Tranquilo",
        description: "Gentil, dedicado, atencioso aos detalhes e ao bem-estar dos outros. Valoriza a harmonia e experiências seguras e agradáveis.",
        recommendations: [
            "Encontre paz e beleza: visite as igrejas históricas (Catedral, Lagoa, Santo Antônio) apreciando a arquitetura, a arte e a atmosfera serena.",
            "Desfrute de um almoço sereno: passeie pela pacata Freguesia do Ribeirão da Ilha e saboreie ostras frescas em um restaurante tradicional com vista calma.",
            "Aprenda com carinho: faça uma aula de culinária focada em receitas tradicionais açorianas, prestando atenção a cada detalhe do preparo.",
            "Relaxe com segurança: escolha praias familiares e de águas mansas como Daniela, Jurerê Tradicional ou Cacupé para momentos de descanso.",
            "Prepare um gesto de carinho: monte um piquenique com produtos locais e desfrute em um parque tranquilo como o Jardim Botânico.",
            "Aprecie os detalhes do passado: visite o Museu Histórico (Palácio Cruz e Sousa), observando com calma a decoração e o mobiliário de época.",
            "Cuide do seu grupo: antecipe as necessidades de seus companheiros de viagem, garantindo que todos se sintam confortáveis e bem cuidados.",
            "Observe a tradição com calma: encontre um local agradável para ver os pescadores trabalhando em Pântano do Sul ou na Armação.",
            "Valorize o trabalho manual: aprenda sobre o delicado artesanato local, como a renda de bilro, apreciando a dedicação envolvida.",
            "Aconchegue-se: escolha um café charmoso para um fim de tarde tranquilo, saboreando um doce local e uma boa companhia."
        ]
    },
    "ESTJ": {
        name: "O Gerenciador Eficiente",
        description: "Organizado, prático, assertivo. Gosta de estrutura, eficiência e de ver resultados concretos.",
        recommendations: [
            "Maximize seu tempo: planeje um dia produtivo com reuniões (se aplicável), almoço eficiente e visitas objetivas aos pontos turísticos chave.",
            "Escolha com base na eficiência: opte por restaurantes, passeios e serviços com base em rapidez, acesso fácil e boas críticas logísticas.",
            "Otimize a locomoção: alugue um carro e planeje as rotas mais eficientes para se deslocar entre as diferentes regiões da ilha.",
            "Entenda os processos: participe de um tour focado em produção (cervejaria, ostras) que explique tudo de forma clara e objetiva.",
            "Crie seu plano mestre: desenvolva um itinerário detalhado com horários realistas, incluindo tempos de deslocamento e margens de segurança.",
            "Garanta pontualidade: opte por voos diretos e reserve transfers com antecedência para uma chegada e saída sem contratempos.",
            "Lidere as decisões do grupo: de forma prática, ajude a escolher as melhores opções focando nos objetivos e no tempo disponível.",
            "Organize-se digitalmente: utilize aplicativos de gerenciamento de tarefas ou planilhas para controlar o roteiro e o orçamento.",
            "Defina e cumpra metas: escolha atividades com objetivos claros (completar trilha X, visitar Y pontos) e foque em realizá-las.",
            "Priorize a funcionalidade: escolha hospedagem e serviços que ofereçam o essencial para sua eficiência (bom Wi-Fi, check-in rápido, etc.)."
        ]
    },
    "ESFJ": {
        name: "O Anfitrião Sociável",
        description: "Amigável, sociável, adora ajudar e conectar pessoas. Valoriza a harmonia social e tradições comunitárias.",
        recommendations: [
            "Reúna quem você gosta: organize um almoço ou jantar animado em um restaurante acolhedor na Lagoa ou em Santo Antônio de Lisboa.",
            "Celebre a cultura local: participe com entusiasmo de festas populares, festivais gastronômicos e eventos comunitários, interagindo com todos.",
            "Escolha um ambiente social: opte por um resort com boa infraestrutura de lazer (Costão do Santinho) e participe ativamente das atividades em grupo.",
            "Espalhe alegria: faça um passeio de escuna animado, puxe conversa, elogie a música e garanta que todos estejam se divertindo juntos.",
            "Cuide do bem-estar de todos: certifique-se de que seus companheiros de viagem estejam confortáveis, felizes e se sentindo incluídos.",
            "Crie conexões por onde passar: converse com funcionários de hotéis, restaurantes e lojas, elogie o trabalho e crie um clima positivo.",
            "Promova a diversão em grupo: organize jogos na praia ou atividades colaborativas que unam as pessoas e garantam boas risadas.",
            "Interaja no Mercado Público: converse com os vendedores, interesse-se por suas histórias e experimente os produtos com entusiasmo.",
            "Mostre sua gratidão: leve pequenas lembranças ou ofereça ajuda como forma de agradecer a hospitalidade e gentilezas.",
            "Contribua para a comunidade: se possível, participe de um almoço beneficente ou evento voluntário, fortalecendo os laços locais."
        ]
    },
    "ISTP": {
        name: "O Aventureiro Independente",
        description: "Prático, observador, adora entender como as coisas funcionam e resolver problemas de forma manual. Busca liberdade e ação.",
        recommendations: [
            "Explore no seu ritmo: alugue uma bicicleta ou moto e desbrave estradas secundárias e trilhas off-road (permitidas) com total liberdade.",
            "Coloque a mão na massa: experimente atividades que exijam habilidade e foco, como pescaria, mergulho (montando seu equipamento!) ou uma aula prática de cerâmica.",
            "Teste suas habilidades: enfrente trilhas desafiadoras (Lagoinha do Leste via Matadeiro) usando sua orientação e capacidade de improviso.",
            "Desvende a mecânica local: observe e tente entender como funcionam as embarcações de pesca no Pântano do Sul ou na Barra da Lagoa.",
            "Visite os 'bastidores': converse com mecânicos em oficinas de bikes ou pranchas de surf, aprendendo sobre os reparos e ajustes.",
            "Seja autossuficiente: se algo simples quebrar, tente consertar você mesmo com as ferramentas que tiver à mão.",
            "Aprenda fazendo: peça a um local para te ensinar uma habilidade prática rápida, como fazer um nó de marinheiro ou limpar um peixe.",
            "Analise a logística: explore a Ilha do Campeche observando a operação das travessias e as formações geológicas da ilha.",
            "Prepare seu kit de sobrevivência: monte seu próprio conjunto de primeiros socorros e ferramentas essenciais para a aventura.",
            "Sinta a adrenalina sobre rodas: experimente andar de skate no skatepark da Costeira ou procure outros picos pela cidade."
        ]
    },
    "ISFP": {
        name: "O Artista Livre",
        description: "Sensível, artístico, charmoso. Vive o presente e busca beleza e experiências estéticas em harmonia com seus valores.",
        recommendations: [
            "Capture a beleza única: explore praias como Gravatá ou Galheta para fotografar, pintar, desenhar ou simplesmente absorver a estética natural.",
            "Inspire-se nas cores e formas: passeie pelas ruas charmosas de Santo Antônio de Lisboa e do Centro, visitando ateliês, lojas de design e brechós.",
            "Expresse sua criatividade: participe de um workshop de arte (aquarela, cerâmica, fotografia) utilizando as paisagens e materiais locais como musa.",
            "Envolva-se com a música: curta apresentações ao vivo (MPB, jazz) em bares com atmosfera acolhedora e decoração inspiradora.",
            "Crie arte efêmera: colete conchas, pedras e folhas na praia e crie uma instalação temporária na areia, ou leve-os como lembrança sensorial.",
            "Aprecie o talento local: visite feiras de artesanato e admire a originalidade, as texturas e a beleza das peças feitas à mão.",
            "Conecte-se com a serenidade: encontre uma cachoeira tranquila (Costa da Lagoa, Solidão) e deixe a beleza do lugar tocar sua alma.",
            "Fotografe os detalhes: capture a textura da areia molhada, as nuances de cor do pôr do sol, os detalhes da arquitetura açoriana.",
            "Registre suas impressões: mantenha um caderno de viagem com desenhos, colagens ou pequenos textos sobre suas experiências estéticas.",
            "Saboreie com os olhos (e a boca!): escolha um restaurante com decoração charmosa e pratos que sejam uma obra de arte."
        ]
    },
    "ESTP": {
        name: "O Caçador de Emoções",
        description: "Energético, pragmático, adora ação, desafios e viver o momento com intensidade. Busca adrenalina e resultados imediatos.",
        recommendations: [
            "Sinta a adrenalina nas ondas: pegue sua prancha e encare o surf desafiador da Praia Mole ou Joaquina.",
            "Deslize em alta velocidade: experimente o sandboard nas dunas íngremes da Joaquina e sinta o vento no rosto.",
            "Domine o vento e a água: faça Kitesurf ou Windsurf na Lagoa da Conceição em dias de vento forte para pura emoção.",
            "Voe sobre Floripa: salte de Parapente do Morro da Lagoa ou da Praia Mole para uma descarga de adrenalina e vistas incríveis.",
            "Viva a noite intensamente: explore os beach clubs badalados de Jurerê ou a agitação dos bares e festas no centrinho da Lagoa.",
            "Acelere na água: alugue um Jet Ski e sinta a velocidade e a liberdade de manobrar na Baía Norte.",
            "Busque desafios sobre rodas: se tiver experiência, procure por trilhas de downhill de bicicleta em locais apropriados.",
            "Acompanhe a ação: assista a campeonatos locais de surf, skate ou outros esportes radicais e sinta a energia da competição.",
            "Explore em alta velocidade: faça um passeio de lancha rápido, contornando a ilha ou visitando praias isoladas.",
            "Aposte na diversão: participe de jogos competitivos na praia (futebol, vôlei) com disposição total!"
        ]
    },
    "ESFP": {
        name: "O Celebrador Vibrante",
        description: "Entusiasmado, sociável, espontâneo. Adora se divertir, entreter os outros e aproveitar ao máximo as experiências sensoriais do presente.",
        recommendations: [
            "Brilhe nos beach clubs: curta a vibe animada, a música e os drinks nos points badalados de Jurerê Internacional ou Praia Brava.",
            "Solte o corpo: participe de aulas de dança (forró, samba!) ou simplesmente se jogue na pista em festas na praia ou bares dançantes.",
            "Delicie-se com tudo: experimente a famosa sequência de camarão, pastel de berbigão, caipirinhas, cachaças artesanais – aproveite cada sabor!",
            "Divirta-se no mar: faça um passeio animado de Stand Up Paddle (SUP) com amigos ao pôr do sol, com muitas risadas e fotos.",
            "Renove o visual: vá às compras em busca de roupas de praia estilosas, óculos de sol e acessórios coloridos para arrasar na ilha.",
            "Solte a voz (ou as risadas!): cante sem medo em um karaokê ou assista a um show de comédia stand-up para se divertir.",
            "Registre a alegria: tire muitas fotos e selfies em locais lindos e momentos divertidos, compartilhando sua vibe contagiante.",
            "Crie sua própria festa: organize uma celebração temática improvisada ou um piquenique super animado na praia.",
            "Entre no clima de festa: se for a época, participe de um bloco de Carnaval de rua ou ensaio, nem que seja só para dançar e sentir a energia!",
            "Faça um tour doce: experimente todos os sabores exóticos e deliciosos de sorvete artesanal que encontrar pela ilha!"
        ]
    }
};


// --- O restante do script é atualizado ---

// Elementos do DOM (permanecem os mesmos)
const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-btn');
const resultsDiv = document.getElementById('results');
const profileNameSpan = document.getElementById('profile-name');
const profileDescP = document.getElementById('profile-desc');
const profileRecsUl = document.getElementById('profile-recs');
const validationErrorP = document.getElementById('validation-error');

// Adiciona o listener ao botão
submitButton.addEventListener('click', calculateProfile);

function calculateProfile() {
    const answers = {};
    let allAnswered = true;

    // Coleta as respostas (loop permanece o mesmo)
    for (let i = 1; i <= 20; i++) {
        const questionName = `q${i}`;
        const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);

        if (selectedOption) {
            answers[questionName] = selectedOption.value;
        } else {
            allAnswered = false;
            break;
        }
    }

    // Validação (permanece a mesma)
    if (!allAnswered) {
        validationErrorP.style.display = 'block';
        resultsDiv.style.display = 'none';
        return;
    } else {
        validationErrorP.style.display = 'none';
    }


    // --- LÓGICA DE PONTUAÇÃO ATUALIZADA ---
    let dimension1 = 0; // E(+) / I(-) -> q1 a q5
    let dimension2 = 0; // S(+) / N(-) -> q6 a q10
    let dimension3 = 0; // T(+) / F(-) -> q11 a q15
    let dimension4 = 0; // J(+) / P(-) -> q16 a q20

    // Função auxiliar para pontuar
    const scoreAnswer = (answerValue) => {
        // 'a' e 'd' pontuam +1 (para E, S, T, J)
        // 'b' e 'c' pontuam -1 (para I, N, F, P)
        return (answerValue === 'a' || answerValue === 'd') ? 1 : -1;
    };

    // Calcula as dimensões usando a nova lógica
    for (let i = 1; i <= 5; i++) { dimension1 += scoreAnswer(answers[`q${i}`]); }
    for (let i = 6; i <= 10; i++) { dimension2 += scoreAnswer(answers[`q${i}`]); }
    for (let i = 11; i <= 15; i++) { dimension3 += scoreAnswer(answers[`q${i}`]); }
    for (let i = 16; i <= 20; i++) { dimension4 += scoreAnswer(answers[`q${i}`]); }

    // Determina o perfil (Regra de desempate: I, N, F, P - pontuação 0 ou negativa)
    const profileCode =
        (dimension1 > 0 ? 'E' : 'I') +
        (dimension2 > 0 ? 'S' : 'N') +
        (dimension3 > 0 ? 'T' : 'F') +
        (dimension4 > 0 ? 'J' : 'P');

    // Exibe os resultados (função displayResults permanece a mesma)
    displayResults(profileCode);
}

// Função displayResults (permanece a mesma da versão anterior)
function displayResults(profileCode) {
    const profile = profiles[profileCode];

    if (profile) {
        profileNameSpan.textContent = profile.name;
        profileDescP.textContent = profile.description;
        profileRecsUl.innerHTML = ''; // Limpa recomendações anteriores

        // Adiciona novas recomendações
        profile.recommendations.forEach(rec => {
            const li = document.createElement('li');
            li.textContent = rec;
            profileRecsUl.appendChild(li);
        });

        resultsDiv.style.display = 'block';
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    } else {
        profileNameSpan.textContent = "Erro";
        profileDescP.textContent = "Não foi possível determinar seu perfil. Por favor, tente novamente.";
        profileRecsUl.innerHTML = '';
        resultsDiv.style.display = 'block';
    }
}
