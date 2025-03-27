// Dados dos Perfis (Permanece o mesmo da versão anterior)
const profiles = {
    "INTJ": {
        name: "O Estrategista Cultural",
        description: "Visionário, independente, adora planejar e otimizar. Busca conhecimento e experiências significativas, mas com eficiência.",
        recommendations: [
            "Explore a história militar e arquitetônica dos Fortes (São José da Ponta Grossa, Santana, Ratones), analisando suas posições estratégicas.",
            "Planeje um roteiro detalhado pelo Centro Histórico, incluindo o Museu Histórico de SC, a Alfândega e o Mercado Público (focando na arquitetura e história).",
            "Faça uma visita técnica ou guiada à Ponte Hercílio Luz para entender sua engenharia e importância histórica.",
            "Relaxe com uma leitura estratégica ou planejamento em um café tranquilo na Lagoa da Conceição, longe da agitação principal.",
            "Visite o Museu de Arte de Santa Catarina (MASC) para analisar as exposições com um olhar crítico e apreciativo.",
            "Analise os padrões das marés e planeje a visita à Lagoinha do Leste no momento ideal para fotografia ou travessia.",
            "Participe de uma palestra ou evento na UFSC (verificar agenda) relacionado à história, arquitetura ou urbanismo.",
            "Otimize um dia de viagem combinando a visita a Santo Antônio de Lisboa com a Rota Gastronômica do Sol Poente.",
            "Pesquise e visite um sítio arqueológico menos conhecido, como os sambaquis na região sul da ilha.",
            "Encontre um mirante como o Morro da Cruz ou o da Lagoa para ter uma visão panorâmica e estratégica da cidade."
        ]
    },
    "INTP": {
        name: "O Explorador Curioso",
        description: "Analítico, criativo, busca entender como as coisas funcionam. Adora explorar ideias e possibilidades, muitas vezes de forma independente.",
        recommendations: [
            "Visite o Museu de Arqueologia e Etnografia (MArquE) na UFSC para mergulhar nas origens e culturas da ilha.",
            "Explore trilhas menos conhecidas (ex: Trilha do Gravatá) e analise a geologia, flora e fauna local.",
            "Participe de um workshop de ciência, tecnologia ou mesmo filosofia (se disponível) para estimular o intelecto.",
            "Experimente a culinária local de forma analítica: vá ao Mercado Público e questione os vendedores sobre a origem e preparo dos produtos.",
            "Investigue as lendas e mistérios da Ilha (bruxas, luzes) na Lagoa da Conceição, buscando explicações lógicas ou antropológicas.",
            "Visite a Livraria Livros & Livros ou outros sebos no centro em busca de conhecimento e achados inesperados.",
            "Explore o ecossistema único dos manguezais na região de Ratones ou Saco Grande.",
            "Tente identificar constelações no céu noturno de uma praia mais afastada como a Solidão ou Naufragados.",
            "Pesquise sobre a arquitetura açoriana e tente identificar seus elementos nas construções de Santo Antônio de Lisboa.",
            "Faça um curso rápido de algo técnico e local, como identificar plantas nativas ou técnicas de pesca artesanal."
        ]
    },
    "ENTJ": {
        name: "O Líder Aventureiro",
        description: "Decidido, estratégico, gosta de liderar e assumir desafios. Busca experiências que permitam controle e conquista.",
        recommendations: [
            "Organize e lidere um grupo para uma atividade desafiadora: trekking completo da Lagoinha do Leste ou surf avançado na Praia Mole.",
            "Faça um curso intensivo de kitesurf ou windsurf na Lagoa da Conceição, buscando dominar a técnica rapidamente.",
            "Planeje um dia eficiente combinando negócios (se aplicável) com lazer de alto nível, como um jantar gourmet seguido de evento em Jurerê Internacional.",
            "Participe de um passeio de lancha privativo, definindo o roteiro, paradas e o ritmo da exploração das ilhas.",
            "Negocie tarifas e condições vantajosas para aluguel de equipamentos ou tours, exercitando sua habilidade de comando.",
            "Participe (ou organize) uma competição esportiva na praia, como vôlei ou futebol, liderando sua equipe.",
            "Assuma a liderança na navegação e planejamento de uma trilha complexa como a do Morro das Aranhas.",
            "Participe de um evento de networking ou conferência empresarial que possa estar ocorrendo na região.",
            "Defina metas claras para a viagem e execute o plano com foco em alcançar todos os objetivos propostos.",
            "Contrate um instrutor particular para uma aula avançada de um esporte aquático, visando a performance."
        ]
    },
    "ENTP": {
        name: "O Idealizador Criativo",
        description: "Inovador, curioso, adora debater ideias e explorar ângulos diferentes. Busca novidade e estímulo intelectual constante.",
        recommendations: [
            "Explore a Ilha do Campeche, debatendo as teorias sobre as inscrições rupestres com guias e outros visitantes.",
            "Participe de eventos culturais alternativos, feiras de inovação ou startups que possam estar ocorrendo na ilha.",
            "Experimente 'hackear' o turismo: alugue um caiaque e explore cantos secretos da Lagoa, ou crie seu próprio tour temático.",
            "Converse com locais em Santo Antônio de Lisboa ou na Costa da Lagoa, buscando perspectivas diferentes sobre a cultura e o futuro da ilha.",
            "Provoque debates amistosos sobre temas polêmicos (gentrificação, sustentabilidade) em bares ou cafés locais.",
            "Combine atividades improváveis: que tal filosofia na praia ou discutir física quântica após surfar?",
            "Visite o Ecomuseu do Ribeirão da Ilha e questione os modelos de preservação cultural e ambiental.",
            "Participe de uma oficina de escrita criativa ou improvisação teatral para exercitar a mente.",
            "Sugira novas ideias ou soluções para problemas locais (ex: mobilidade) enquanto observa a dinâmica da cidade.",
            "Procure por 'easter eggs' urbanos ou detalhes escondidos na arquitetura e arte de rua do centro."
        ]
    },
    "INFJ": {
        name: "O Idealista Conectado",
        description: "Perspicaz, compassivo, busca significado e conexão profunda. Preocupa-se com o impacto de suas ações.",
        recommendations: [
            "Participe de um projeto de voluntariado ambiental de curto prazo (Projeto Tamar, limpeza de praias com ONGs locais).",
            "Visite e converse com moradores das comunidades tradicionais do Ribeirão da Ilha ou Costa da Lagoa, buscando entender genuinamente seu modo de vida.",
            "Faça uma trilha contemplativa no Parque Estadual do Rio Vermelho ou na Trilha do Morro da Lagoa, focando na conexão interior e com a natureza.",
            "Procure por retiros de yoga, meditação ou workshops de autoconhecimento que ocorram com vista para o mar ou em meio à natureza.",
            "Escreva um diário de viagem focado nos insights e sentimentos despertados pelas experiências em Floripa.",
            "Busque locais de silêncio e beleza natural, como o Canto dos Araçás ou a ponta da Praia da Solidão, para reflexão.",
            "Engaje em conversas significativas com artesãos locais sobre o significado de seu trabalho e sua conexão com a cultura.",
            "Visite a Catedral Metropolitana ou a Igreja da Lagoa da Conceição em horários tranquilos para um momento de paz e introspecção.",
            "Apoie negócios locais e sustentáveis, como restaurantes orgânicos ou lojas de comércio justo.",
            "Participe de uma roda de conversa ou evento focado em bem-estar, espiritualidade ou causas sociais."
        ]
    },
    "INFP": {
        name: "O Sonhador Romântico",
        description: "Sensível, criativo, guiado por seus valores. Busca beleza, autenticidade e experiências que toquem sua alma.",
        recommendations: [
            "Passe um tempo nas praias tranquilas e inspiradoras como Solidão, Naufragados ou Saquinho, ideal para escrever, desenhar ou meditar.",
            "Assista ao nascer ou pôr do sol em locais mágicos como o Morro da Cruz, Ponta das Campanhas (Daniela) ou Mirante da Lagoa.",
            "Explore as galerias de arte, ateliês e cafés charmosos de Santo Antônio de Lisboa, absorvendo a atmosfera poética.",
            "Caminhe pela natureza ouvindo sua música preferida, talvez na Trilha do Saquinho ou na Costa da Lagoa, buscando inspiração.",
            "Encontre um local isolado na Praia do Matadeiro ou Gravatá para ler poesia ou um romance.",
            "Visite o Museu Victor Meirelles (quando reaberto) ou procure exposições de arte que ressoem com sua sensibilidade.",
            "Passeie por livrarias independentes ou sebos no centro, buscando obras que te toquem.",
            "Escreva cartas ou postais para pessoas queridas, descrevendo a beleza e os sentimentos vividos em Floripa.",
            "Explore o lado místico da ilha, pesquisando sobre as lendas das bruxas e visitando locais associados a elas na Lagoa.",
            "Participe de um sarau de poesia ou uma apresentação intimista de música acústica."
        ]
    },
    "ENFJ": {
        name: "O Inspirador Social",
        description: "Carismático, empático, gosta de conectar e inspirar pessoas. Busca harmonia e experiências compartilhadas significativas.",
        recommendations: [
            "Organize um encontro, piquenique ou happy hour com amigos (ou novos conhecidos) em um local agradável como o Jardim Botânico ou a Beira Mar Norte.",
            "Participe ativamente de eventos culturais comunitários, como a Festa do Divino, Fenaostra ou apresentações no Teatro Ademir Rosa (CIC).",
            "Faça um passeio de escuna animado, incentivando a interação entre os passageiros e conversando com a tripulação.",
            "Conecte-se com ONGs locais (ambientais, sociais) e ofereça ajuda ou simplesmente aprenda sobre seus projetos inspiradores.",
            "Lidere um grupo em uma atividade colaborativa, como uma caça ao tesouro fotográfica pela cidade.",
            "Inicie conversas significativas que conectem diferentes grupos de viajantes ou locais em hostels, praças ou cafés.",
            "Organize uma pequena celebração ou jantar temático utilizando ingredientes locais comprados no Mercado Público.",
            "Inspire outros durante uma trilha em grupo, motivando e ajudando quem tiver dificuldades.",
            "Facilite uma roda de conversa sobre experiências de viagem ou intercâmbio cultural.",
            "Ofereça-se para ajudar a organizar um evento ou atividade no local onde está hospedado."
        ]
    },
    "ENFP": {
        name: "O Explorador Entusiasmado",
        description: "Energético, criativo, espontâneo. Adora explorar novas possibilidades e conectar-se com pessoas de forma animada.",
        recommendations: [
            "Experimente de tudo um pouco num só dia: aula de surf na Joaquina, sandboard nas dunas, explorar o centrinho da Lagoa e terminar em um bar com música ao vivo.",
            "Visite feiras de artesanato (Lagoa, Praça XV) e converse animadamente com os artistas sobre suas inspirações e técnicas.",
            "Faça amigos facilmente em um hostel, na praia ou durante uma atividade em grupo e junte-se a planos espontâneos que surgirem.",
            "Explore a Costa da Lagoa de barco, parando em diferentes restaurantes e puxando conversa com os moradores e outros visitantes.",
            "Descubra lugares 'secretos' ou menos turísticos perguntando para locais ou simplesmente se perdendo pelas ruas de bairros como Campeche ou Rio Tavares.",
            "Participe de um workshop criativo de última hora (dança, percussão, pintura).",
            "Inicie conversas com pessoas completamente diferentes de você em transportes públicos ou filas.",
            "Experimente comidas de rua e petiscos de diferentes vendedores ambulantes.",
            "Junte-se a um luau improvisado na praia ou a uma roda de violão.",
            "Crie um roteiro temático divertido para um dia, como 'Em busca da melhor coxinha de Floripa' ou 'O dia das 7 praias'."
        ]
    },
    "ISTJ": {
        name: "O Planejador Prático",
        description: "Responsável, metódico, valoriza a ordem e a tradição. Prefere saber o que esperar e seguir planos confiáveis.",
        recommendations: [
            "Faça um city tour guiado completo, com roteiro definido, cobrindo os principais pontos históricos (Catedral, Palácio Cruz e Sousa, Mercado Público).",
            "Hospede-se em um hotel bem estabelecido e avaliado, com serviços previsíveis e confortáveis (ex: em Jurerê Tradicional, Centro ou Beira Mar Norte).",
            "Visite o Mercado Público em um horário planejado, com uma lista de produtos tradicionais a experimentar ou comprar (ex: tainha, berbigão).",
            "Siga um roteiro detalhado de carro ou ônibus de linha para visitar as praias do Norte (Canasvieiras, Ingleses, Daniela), apreciando a infraestrutura.",
            "Utilize mapas físicos ou aplicativos confiáveis para navegação, conferindo rotas e tempos de deslocamento.",
            "Visite os Fortes (Santana, São José) seguindo os horários de funcionamento e lendo todas as placas informativas.",
            "Planeje as refeições em restaurantes tradicionais com boas recomendações de serviço e culinária típica comprovada.",
            "Verifique a previsão do tempo e prepare um plano B detalhado para cada dia, caso chova.",
            "Faça um checklist de todos os itens necessários para a viagem e confira-o rigorosamente.",
            "Documente a viagem de forma organizada: fotos legendadas, diário com fatos e horários."
        ]
    },
    "ISFJ": {
        name: "O Protetor Tranquilo",
        description: "Gentil, dedicado, atencioso aos detalhes e ao bem-estar dos outros. Valoriza a harmonia e experiências seguras e agradáveis.",
        recommendations: [
            "Visite as igrejas históricas (Catedral Metropolitana, N. Sra. da Conceição da Lagoa, N. Sra. das Necessidades em Santo Antônio) apreciando a arquitetura e a paz.",
            "Passeie pela pacata Freguesia do Ribeirão da Ilha, almoçando em um restaurante tradicional de ostras com vista calma para o mar.",
            "Faça uma aula de culinária focada em receitas tradicionais açorianas, cuidando dos detalhes do preparo.",
            "Relaxe em praias familiares e de águas calmas como Daniela, Jurerê Tradicional ou Cacupé.",
            "Prepare um piquenique com carinho, utilizando produtos locais, para desfrutar em um parque tranquilo como o Jardim Botânico.",
            "Visite o Museu Histórico de Santa Catarina (Palácio Cruz e Sousa), prestando atenção aos detalhes da decoração e mobiliário.",
            "Ajude amigos ou familiares a se sentirem confortáveis e seguros durante a viagem, antecipando suas necessidades.",
            "Encontre um local agradável para observar os pescadores trabalhando em Pântano do Sul ou Armação.",
            "Aprenda sobre o artesanato local, como a renda de bilro, valorizando a dedicação e a tradição.",
            "Escolha um café aconchegante para um fim de tarde tranquilo, saboreando um doce local."
        ]
    },
    "ESTJ": {
        name: "O Gerenciador Eficiente",
        description: "Organizado, prático, assertivo. Gosta de estrutura, eficiência e de ver resultados concretos.",
        recommendations: [
            "Planeje um dia produtivo: reunião (se aplicável) pela manhã, almoço de negócios eficiente, seguido de visita objetiva a um ponto turístico principal (ex: Mirante da Ponte Hercílio Luz).",
            "Escolha restaurantes e passeios com base em eficiência (serviço rápido, fácil acesso, boas críticas logísticas).",
            "Alugue um carro para otimizar o tempo de deslocamento entre diferentes regiões da ilha (Norte, Sul, Leste).",
            "Participe de um tour focado em produção (cervejaria artesanal, fazenda de ostras) que explique o processo de forma clara e objetiva.",
            "Crie um itinerário detalhado com horários realistas para cada atividade, incluindo tempo de deslocamento.",
            "Opte por voos diretos e reserve transfers com antecedência para garantir pontualidade e eficiência na chegada e saída.",
            "Lidere a tomada de decisões do grupo de forma prática e focada em resultados (ex: qual praia visitar, onde almoçar).",
            "Utilize aplicativos de gerenciamento de tarefas ou planilhas para organizar o roteiro e o orçamento da viagem.",
            "Escolha atividades que tenham um objetivo claro e mensurável (ex: completar uma trilha em X tempo, visitar Y pontos turísticos).",
            "Priorize a funcionalidade na escolha da hospedagem e dos serviços (bom Wi-Fi, estacionamento fácil, check-in/out rápido)."
        ]
    },
    "ESFJ": {
        name: "O Anfitrião Sociável",
        description: "Amigável, sociável, adora ajudar e conectar pessoas. Valoriza a harmonia social e tradições comunitárias.",
        recommendations: [
            "Organize um almoço ou jantar animado para amigos ou família em um restaurante agradável na Avenida das Rendeiras (Lagoa) ou em Santo Antônio de Lisboa.",
            "Participe ativamente de festas locais, festivais gastronômicos (Fenaostra) ou eventos comunitários, interagindo com todos.",
            "Escolha um resort com boa infraestrutura social (Costão do Santinho) e participe entusiasticamente das atividades em grupo.",
            "Faça um passeio de escuna conhecido pela animação, música e interação entre os passageiros, garantindo que todos se divirtam.",
            "Certifique-se de que todos no seu grupo de viagem estejam confortáveis, felizes e incluídos nas atividades.",
            "Puxe conversa com funcionários de hotéis, restaurantes e lojas, elogiando o serviço e criando um ambiente positivo.",
            "Organize jogos de praia ou atividades em grupo que promovam a cooperação e a diversão coletiva.",
            "Visite o Mercado Público e interaja com os vendedores, interessando-se por suas histórias e produtos.",
            "Leve pequenos presentes ou lembrancinhas para agradecer a hospitalidade ou gentilezas recebidas.",
            "Participe de um almoço comunitário ou evento beneficente, se houver oportunidade, contribuindo para a harmonia local."
        ]
    },
    "ISTP": {
        name: "O Aventureiro Independente",
        description: "Prático, observador, adora entender como as coisas funcionam e resolver problemas de forma manual. Busca liberdade e ação.",
        recommendations: [
            "Alugue uma bicicleta ou moto e explore estradas secundárias, trilhas off-road (permitidas) e praias menos acessíveis por conta própria.",
            "Experimente atividades que exijam habilidade manual e foco: pescaria embarcada, mergulho autônomo (montando seu equipamento), ou uma aula prática de cerâmica/entalhe em madeira.",
            "Faça trilhas desafiadoras (Lagoinha do Leste via Matadeiro, Morro das Aranhas) onde precise usar habilidades de orientação e improviso.",
            "Observe e entenda a mecânica das embarcações de pesca no Pântano do Sul ou na Barra da Lagoa.",
            "Visite uma oficina local (bicicletas, pranchas de surf) e converse com os profissionais sobre as técnicas de reparo.",
            "Tente consertar algo simples que quebre durante a viagem (óculos de sol, mochila) com as ferramentas que tiver.",
            "Aprenda uma habilidade prática rápida com um local, como fazer uma rede de pesca simples ou preparar um peixe.",
            "Explore a Ilha do Campeche com foco na logística da travessia e nas formações rochosas.",
            "Monte seu próprio kit de primeiros socorros e ferramentas básicas para a viagem.",
            "Experimente andar de skate no skatepark da Costeira ou em outros picos da cidade."
        ]
    },
    "ISFP": {
        name: "O Artista Livre",
        description: "Sensível, artístico, charmoso. Vive o presente e busca beleza e experiências estéticas em harmonia com seus valores.",
        recommendations: [
            "Explore a beleza cênica de praias como Gravatá, Galheta (respeitando o naturismo opcional) ou Joaquina (fora da área de surf) para fotografar, pintar ou simplesmente absorver a estética.",
            "Passeie pelas ruas coloridas de Santo Antônio de Lisboa e do Centro Histórico, visitando ateliês de arte, lojas de design e brechós.",
            "Experimente um workshop de arte (aquarela, cerâmica, fotografia, biojoias) inspirado nas paisagens e materiais locais.",
            "Curta música ao vivo (MPB, jazz, blues) em um bar com atmosfera agradável e estética cuidada na Lagoa, Campeche ou Santo Antônio.",
            "Colete conchas, pedras e folhas na praia para criar uma pequena obra de arte temporária ou levar como lembrança sensorial.",
            "Visite a Feira de Artesanato da Lagoa da Conceição ou da Praça XV, apreciando a originalidade e beleza das peças.",
            "Encontre uma cachoeira tranquila (Costa da Lagoa, Solidão) para um momento de conexão estética com a natureza.",
            "Fotografe detalhes: texturas da areia, cores do pôr do sol, arquitetura das casas açorianas.",
            "Desenhe ou faça croquis das paisagens urbanas ou naturais em um caderno de viagem.",
            "Desfrute de uma refeição em um restaurante com decoração charmosa e pratos visualmente atraentes."
        ]
    },
    "ESTP": {
        name: "O Caçador de Emoções",
        description: "Energético, pragmático, adora ação, desafios e viver o momento com intensidade. Busca adrenalina e resultados imediatos.",
        recommendations: [
            "Pratique surf nas ondas desafiadoras da Praia Mole ou Joaquina, ou faça aulas se for iniciante.",
            "Experimente o sandboard nas dunas da Joaquina, buscando velocidade e manobras.",
            "Faça Kitesurf ou Windsurf na Lagoa da Conceição em dias de vento forte, sentindo a adrenalina.",
            "Salte de Parapente do Morro da Lagoa ou da Praia Mole para uma vista radical e emocionante.",
            "Explore a vida noturna agitada de Jurerê Internacional (beach clubs) ou do centrinho da Lagoa (bares e festas).",
            "Alugue um Jet Ski em Canasvieiras ou Jurerê para corridas e manobras na água.",
            "Participe de trilhas de downhill de bicicleta em áreas designadas (se disponíveis e com segurança).",
            "Assista (ou participe, se tiver nível) de campeonatos locais de surf, skate ou outros esportes radicais.",
            "Faça um passeio de lancha em alta velocidade contornando a ilha ou visitando praias acessíveis apenas por mar.",
            "Aposte em jogos amistosos na praia (futebol, vôlei, frescobol) com amigos ou locais."
        ]
    },
    "ESFP": {
        name: "O Celebrador Vibrante",
        description: "Entusiasmado, sociável, espontâneo. Adora se divertir, entreter os outros e aproveitar ao máximo as experiências sensoriais do presente.",
        recommendations: [
            "Curta os beach clubs badalados de Jurerê Internacional ou da Praia Brava, com música, drinks e gente bonita.",
            "Participe de aulas de dança (forró, samba, zouk) ou simplesmente caia na pista em festas na praia ou bares dançantes.",
            "Experimente toda a variedade de comidas e bebidas locais: sequência de camarão, pastel de berbigão, cachaças artesanais, sucos naturais.",
            "Faça um passeio divertido de Stand Up Paddle (SUP) com amigos ao pôr do sol na Lagoa da Conceição ou em praias calmas.",
            "Vá às compras em busca de roupas de praia estilosas, óculos de sol e acessórios vibrantes na Lagoa ou no centro.",
            "Cante em um karaokê animado ou assista a shows de comédia stand-up.",
            "Tire muitas fotos e selfies em locais icônicos e paisagens deslumbrantes, compartilhando a alegria.",
            "Organize uma festa temática improvisada na sua hospedagem ou um piquenique animado na praia.",
            "Participe de um bloco de Carnaval de rua ou ensaio (se for a época), mesmo que seja só para sentir a energia.",
            "Experimente todos os sabores de sorvete artesanal que encontrar pela ilha."
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