import { Injectable } from '@angular/core';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  private missions: Mission[] = [
    // MISSÃO 1: O TRÂNSITO
    {
      id: 1,
      title: "Missão 1: O Trânsito",
      icon: "🚗",
      image: "assets/imagens/transito.jpg",
      textTitle: "O TRÂNSITO",
      textContent: `Pelas ruas e outras vias circulam, diariamente, diferentes tipos de veículos e pessoas. A esse movimento dá-se o nome de trânsito.

No trânsito, as pessoas podem ser:
• PEDESTRES - quando andam a pé
• MOTORISTAS - quando dirigem veículos
• PASSAGEIROS - quando são transportadas por veículos

O trânsito varia de local para local. Mas há períodos do dia em que ele é mais intenso. Você já reparou que as ruas são mais movimentadas em alguns horários e, em outros, menos?

AS RUAS DE DIA E DE NOITE

Apesar de as ruas em geral serem mais movimentadas durante o dia, à noite também há movimento. Nesse período, pedestres e motoristas devem ter mais atenção, pois, com menos luminosidade, podem ser surpreendidos por um veículo, um pedestre ou até um animal, podendo ocorrer acidentes.

O movimento noturno das ruas depende de sua localização. Se for uma rua onde há muitos restaurantes e lanchonetes, por exemplo, ela pode ser mais movimentada. Mas, se for uma rua só com moradias, pode ser que ela fique vazia à noite.`,
      showImageIcon: false,
      observationQuestions: [
        "O que é o trânsito?",
        "Quais são os tipos de participantes do trânsito?",
        "Por que devemos ter mais cuidado à noite?"
      ],
      explanation: `O trânsito é o movimento de veículos e pessoas pelas ruas e outras vias.
      No trânsito existem três tipos de participantes: pedestres (andam a pé), motoristas (dirigem veículos) e passageiros (são transportados).
      O trânsito varia durante o dia - em alguns horários é mais intenso e em outros é mais calmo.
      À noite, devemos ter mais atenção porque há menos luz e podemos nos surpreender com veículos ou pedestres.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ O que é o trânsito?",
          options: [
            { text: "Apenas carros parados na rua", correct: false },
            { text: "O movimento de veículos e pessoas pelas ruas", correct: true },
            { text: "Só pedestres andando", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ Quem é o PEDESTRE no trânsito?",
          options: [
            { text: "Quem dirige um carro", correct: false },
            { text: "Quem anda a pé", correct: true },
            { text: "Quem é transportado no ônibus", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Quem é o MOTORISTA no trânsito?",
          options: [
            { text: "Quem anda a pé", correct: false },
            { text: "Quem é passageiro", correct: false },
            { text: "Quem dirige veículos", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ Por que devemos ter mais atenção no trânsito à noite?",
          options: [
            { text: "Porque há menos luz e podemos nos surpreender", correct: true },
            { text: "Porque não há carros", correct: false },
            { text: "Porque é mais divertido", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "5️⃣ Quem é o PASSAGEIRO no trânsito?",
          options: [
            { text: "Quem dirige o carro", correct: false },
            { text: "Quem anda a pé na rua", correct: false },
            { text: "Quem é transportado por veículos", correct: true }
          ]
        }
      ],
      successMessage: "Parabéns, Anthony! Você aprendeu o que é o trânsito e quem participa dele! 🚗✨",
      bonusQuestion: "O trânsito é o movimento de veículos e pessoas nas ruas?",
      bonusCorrectAnswer: "Sim"
    },
    // MISSÃO 2: LEIS E SINAIS DE TRÂNSITO
    {
      id: 2,
      title: "Missão 2: Leis e Sinais de Trânsito",
      icon: "🚦",
      image: "assets/imagens/sinais.jpg",
      textTitle: "LEIS E SINAIS DE TRÂNSITO",
      textContent: `LEIS DE TRÂNSITO

Com tantos veículos (automóveis, motocicletas, bicicletas, ônibus, caminhões) e pessoas circulando pelas ruas e outras vias, são necessárias normas para garantir a segurança de todos.

As normas que visam garantir um trânsito seguro são chamadas LEIS DE TRÂNSITO. Elas devem ser seguidas por todos: pedestres, ciclistas, passageiros e motoristas.

PARA GARANTIR A SEGURANÇA DE TODOS, É PRECISO RESPEITAR AS LEIS DE TRÂNSITO!

CONHECENDO ALGUNS SINAIS DE TRÂNSITO

Os sinais de trânsito informam o que se pode ou não fazer para garantir a segurança de pedestres, motoristas e passageiros.

🚦 SEMÁFORO DE VEÍCULOS:
• VERMELHO - os veículos devem PARAR e esperar
• VERDE - os veículos podem PASSAR
• AMARELO - ATENÇÃO! Reduzir a velocidade

🚶 SEMÁFORO DE PEDESTRES:
• VERDE - as pessoas podem ATRAVESSAR
• VERMELHO - as pessoas devem ESPERAR

🅿️ PLACAS DE ESTACIONAMENTO:
• Letra E - É PERMITIDO estacionar
• Letra E cortada - É PROIBIDO estacionar

➡️ PLACAS COM SETAS:
• Indicam o sentido obrigatório, permitido ou proibido para os veículos`,
      showImageIcon: false,
      observationQuestions: [
        "O que são as leis de trânsito?",
        "O que significa cada cor do semáforo?",
        "Quem deve seguir as leis de trânsito?"
      ],
      explanation: `As leis de trânsito são normas para garantir a segurança de todos.
      Todos devem seguir as leis: pedestres, ciclistas, passageiros e motoristas.
      O semáforo de veículos tem 3 cores: vermelho (parar), verde (passar) e amarelo (atenção).
      O semáforo de pedestres indica quando podemos atravessar (verde) ou esperar (vermelho).
      Existem placas que indicam onde pode ou não estacionar e o sentido das ruas.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ O que são as leis de trânsito?",
          options: [
            { text: "Regras só para motoristas", correct: false },
            { text: "Normas para garantir a segurança de todos", correct: true },
            { text: "Sugestões opcionais", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ O que significa a luz VERMELHA do semáforo para veículos?",
          options: [
            { text: "Pode passar", correct: false },
            { text: "Deve PARAR e esperar", correct: true },
            { text: "Pode acelerar", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ O que significa a luz VERDE do semáforo de pedestres?",
          options: [
            { text: "Deve esperar", correct: false },
            { text: "Pode atravessar a rua", correct: true },
            { text: "Deve correr", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ Quem deve seguir as leis de trânsito?",
          options: [
            { text: "Apenas motoristas", correct: false },
            { text: "Apenas pedestres", correct: false },
            { text: "Todos: pedestres, ciclistas, passageiros e motoristas", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          question: "5️⃣ O que significa esta placa? 🚫Ⓔ (Proibido Estacionar)",
          options: [
            { text: "Pode estacionar", correct: false },
            { text: "É proibido estacionar", correct: true },
            { text: "Estacionamento gratuito", correct: false }
          ]
        }
      ],
      successMessage: "Excelente, Anthony! Você aprendeu sobre as leis e sinais de trânsito! 🚦🎉",
      bonusQuestion: "O semáforo vermelho significa que devemos parar?",
      bonusCorrectAnswer: "Sim"
    },
    // MISSÃO 3: SEGURANÇA NO TRÂNSITO
    {
      id: 3,
      title: "Missão 3: Segurança no Trânsito",
      icon: "👮",
      image: "assets/imagens/seguranca.jpg",
      textTitle: "SEGURANÇA NO TRÂNSITO",
      textContent: `TRÂNSITO SEGURO É RESPONSABILIDADE DE TODOS

Além dos sinais de trânsito, nas ruas há trabalhadores que atuam para fiscalizar, ordenar o trânsito e garantir a segurança.

Os AGENTES DE TRÂNSITO são responsáveis por instruir motoristas e pedestres e garantir que todas as leis de trânsito sejam cumpridas.

As leis e os agentes de trânsito existem para cuidar da segurança de pedestres, motoristas e passageiros. No entanto, para um trânsito seguro é preciso que cada um faça a sua parte!

DICAS IMPORTANTES DE SEGURANÇA:

🚶 PARA PEDESTRES:
• Mesmo na faixa de pedestres, devemos estar atentos
• Olhar para os DOIS LADOS antes de atravessar
• Esperar o semáforo ficar verde para pedestres

👶 PARA CRIANÇAS:
• Crianças devem sentar no banco de trás
• Usar a CADEIRINHA até os 10 anos
• É mais seguro!

🤝 RESPEITO E GENTILEZA:
• Além da obediência às leis de trânsito, o respeito e a gentileza são essenciais para que a convivência nas ruas seja harmônica e segura.`,
      showImageIcon: false,
      observationQuestions: [
        "Quem são os agentes de trânsito?",
        "O que devemos fazer antes de atravessar a rua?",
        "Por que crianças devem usar cadeirinha?"
      ],
      explanation: `Os agentes de trânsito ajudam a fiscalizar e ordenar o trânsito.
      Todos devem fazer sua parte para um trânsito seguro.
      Antes de atravessar, devemos olhar para os dois lados, mesmo na faixa de pedestres.
      Crianças devem sentar no banco de trás e usar cadeirinha até os 10 anos.
      Respeito e gentileza também são importantes no trânsito.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ Quem são os agentes de trânsito?",
          options: [
            { text: "Pessoas que vendem carros", correct: false },
            { text: "Trabalhadores que fiscalizam e ordenam o trânsito", correct: true },
            { text: "Pessoas que consertam semáforos", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ O que devemos fazer antes de atravessar a rua?",
          options: [
            { text: "Correr rapidamente", correct: false },
            { text: "Olhar para os dois lados", correct: true },
            { text: "Fechar os olhos", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Até que idade crianças devem usar cadeirinha no carro?",
          options: [
            { text: "Até 5 anos", correct: false },
            { text: "Até 10 anos", correct: true },
            { text: "Até 3 anos", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ Onde crianças devem sentar no carro?",
          options: [
            { text: "No banco da frente", correct: false },
            { text: "No banco de trás", correct: true },
            { text: "No porta-malas", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "5️⃣ Além das leis, o que mais é importante no trânsito?",
          options: [
            { text: "Buzinar muito", correct: false },
            { text: "Respeito e gentileza", correct: true },
            { text: "Andar rápido", correct: false }
          ]
        }
      ],
      successMessage: "Muito bem, Anthony! Você aprendeu sobre segurança no trânsito! 👮✨",
      bonusQuestion: "Devemos olhar para os dois lados antes de atravessar a rua?",
      bonusCorrectAnswer: "Sim"
    },
    // MISSÃO 4: RECURSOS NATURAIS
    {
      id: 4,
      title: "Missão 4: Recursos da Natureza",
      icon: "🌳",
      image: "assets/imagens/natureza.jpg",
      textTitle: "A NATUREZA NOS DÁ A VIDA",
      textContent: `Sabe o Sol que esquenta os dias e nos anima a sair ao ar livre e brincar? Ele também é o responsável por ajudar no crescimento das plantas que nos alimentam, por gerar energia para um banho quentinho e até para a produção do videogame de que você tanto gosta!

O Sol, assim como outros elementos da natureza, é fonte de vida.

Os alimentos que consumimos vêm da natureza, assim como os materiais necessários à construção de moradias e à fabricação de diversos produtos e objetos usados no cotidiano, como cadernos, mochilas, roupas, máquinas etc.

OS RECURSOS NATURAIS

O Sol, os ventos, as rochas, os solos e a água são fundamentais para a nossa vida. Esses elementos fazem parte da natureza e nós os utilizamos todos os dias.

RECURSO NATURAL é tudo o que vem da natureza e que utilizamos para atender às nossas necessidades.

A ÁGUA é um dos recursos naturais essenciais à nossa sobrevivência. No Brasil, a maior parte da energia elétrica que utilizamos é gerada a partir da força da água nas HIDRELÉTRICAS.

Quando você entra no seu quarto e acende a luz ou liga a televisão, você está fazendo uso da água de alguma forma!`,
      showImageIcon: false,
      observationQuestions: [
        "O que são recursos naturais?",
        "Quais são alguns exemplos de recursos naturais?",
        "Como a água gera energia elétrica?"
      ],
      explanation: `Recurso natural é tudo o que vem da natureza e usamos para nossas necessidades.
      Exemplos de recursos naturais: Sol, ventos, rochas, solos e água.
      Os alimentos, materiais de construção e produtos que usamos vêm da natureza.
      A água é essencial para nossa sobrevivência.
      No Brasil, a maior parte da energia elétrica vem das hidrelétricas, que usam a força da água.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ O que é um recurso natural?",
          options: [
            { text: "Algo feito em fábricas", correct: false },
            { text: "Tudo que vem da natureza e utilizamos para nossas necessidades", correct: true },
            { text: "Apenas a água", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ Quais destes são recursos naturais?",
          options: [
            { text: "Sol, água, ventos, solos", correct: true },
            { text: "Televisão, computador, celular", correct: false },
            { text: "Caderno, mochila, lápis", correct: false }
          ],
          allowMultiple: false
        },
        {
          type: "multiple-choice",
          question: "3️⃣ De onde vem a maior parte da energia elétrica no Brasil?",
          options: [
            { text: "Do vento", correct: false },
            { text: "Da força da água nas hidrelétricas", correct: true },
            { text: "Do Sol", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ Por que o Sol é importante para nós?",
          options: [
            { text: "Ajuda as plantas a crescerem e gera energia", correct: true },
            { text: "Não é importante", correct: false },
            { text: "Só serve para esquentar", correct: false }
          ]
        }
      ],
      successMessage: "Incrível, Anthony! Você descobriu a importância dos recursos naturais! 🌳💚",
      bonusQuestion: "A água é usada para gerar energia elétrica?",
      bonusCorrectAnswer: "Sim"
    },
    // MISSÃO 5: CUIDANDO DA ÁGUA
    {
      id: 5,
      title: "Missão 5: Cuidando da Água",
      icon: "💧",
      image: "assets/imagens/agua.jpg",
      textTitle: "PRECISAMOS CUIDAR DA ÁGUA",
      textContent: `Quanto de água há no planeta Terra? A água disponível é própria para o consumo?

💧 DISTRIBUIÇÃO DA ÁGUA NO PLANETA:
• 97,5% - Água SALGADA (mares e oceanos)
• 2,5% - Água DOCE
  - 69% em geleiras
  - 30% subterrânea
  - 1% em rios e lagos

Para ser consumida pelos seres humanos, a água precisa ser POTÁVEL, ou seja, limpa, sem cheiro, coloração ou gosto.

A água disponível para o consumo humano é LIMITADA. Por isso, deve ser utilizada com consciência!

O CONSUMO CONSCIENTE prevê utilizar apenas o necessário, sem desperdiçar.

VEJA O QUE VOCÊ PODE FAZER PARA ECONOMIZAR ÁGUA:

🚿 Use AREJADOR de água nas torneiras
🚽 Ao dar descarga, aperte o BOTÃO ADEQUADO
🌱 Use REGADOR em vez da mangueira para regar plantas
🚿 Tome banhos mais curtos
🚰 Feche a torneira ao escovar os dentes`,
      showImageIcon: false,
      observationQuestions: [
        "Quanta água doce existe no planeta?",
        "O que é água potável?",
        "Como podemos economizar água?"
      ],
      explanation: `Apenas 2,5% da água do planeta é doce - a maior parte (97,5%) é salgada.
      Da água doce, a maior parte está em geleiras ou no subsolo.
      Água potável é água limpa, sem cheiro, cor ou gosto, própria para beber.
      Devemos economizar água porque ela é limitada.
      Podemos economizar: tomando banhos curtos, fechando a torneira, usando regador.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ Quanto da água do planeta é SALGADA?",
          options: [
            { text: "2,5%", correct: false },
            { text: "97,5%", correct: true },
            { text: "50%", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ O que é água POTÁVEL?",
          options: [
            { text: "Água suja", correct: false },
            { text: "Água limpa, sem cheiro, cor ou gosto", correct: true },
            { text: "Água do mar", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Por que devemos economizar água?",
          options: [
            { text: "Porque ela é ilimitada", correct: false },
            { text: "Porque a água disponível para consumo é limitada", correct: true },
            { text: "Não precisamos economizar", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ Qual dessas ações ajuda a economizar água?",
          options: [
            { text: "Deixar a torneira aberta", correct: false },
            { text: "Tomar banhos longos", correct: false },
            { text: "Usar regador em vez de mangueira", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          question: "5️⃣ Onde está a maior parte da água doce do planeta?",
          options: [
            { text: "Nos rios", correct: false },
            { text: "Nas geleiras", correct: true },
            { text: "Nos lagos", correct: false }
          ]
        }
      ],
      successMessage: "Maravilhoso, Anthony! Você aprendeu a importância de cuidar da água! 💧🌍",
      bonusQuestion: "Devemos economizar água porque ela é limitada?",
      bonusCorrectAnswer: "Sim"
    },
    // MISSÃO 6: TRABALHO NO CAMPO
    {
      id: 6,
      title: "Missão 6: Trabalho no Campo",
      icon: "🌾",
      image: "assets/imagens/campo.jpg",
      textTitle: "TRABALHO E NATUREZA",
      textContent: `AGRICULTURA

A agricultura é uma das principais atividades do campo. É através dela que são produzidos os alimentos que consumimos.

A agricultura pode ser feita de duas formas:
🚜 COM TECNOLOGIA - Usando máquinas e equipamentos para produzir mais em menos tempo
👨‍🌾 SEM TECNOLOGIA - Trabalho manual, feito por pessoas

PECUÁRIA

A pecuária é a criação de animais para obter produtos como carne, leite, ovos e mel.

Também pode ser feita de duas formas:
🏭 CONFINADA - Animais em espaços fechados, com ração e medicamentos
🌿 EXTENSIVA - Animais soltos em pastos

EXTRATIVISMO

O extrativismo é quando retiramos produtos da natureza para consumo ou transformação.

Existem três tipos:
🌳 VEGETAL - Coleta de vegetais (frutas, madeira, castanhas)
🐟 ANIMAL - Retirada de animais (pesca)
�ite MINERAL - Extração de rochas e minérios (ouro, ferro)

ALIMENTOS ORGÂNICOS são aqueles cultivados sem produtos químicos, mais saudáveis para nós e para o meio ambiente!`,
      showImageIcon: false,
      observationQuestions: [
        "O que é agricultura?",
        "O que é pecuária?",
        "Quais são os tipos de extrativismo?"
      ],
      explanation: `A agricultura produz os alimentos que consumimos - pode usar máquinas ou ser manual.
      A pecuária é a criação de animais para obter carne, leite, ovos e mel.
      O extrativismo retira produtos da natureza: vegetal, animal ou mineral.
      Alimentos orgânicos são cultivados sem produtos químicos e são mais saudáveis.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ O que é AGRICULTURA?",
          options: [
            { text: "Criação de animais", correct: false },
            { text: "Produção de alimentos no campo", correct: true },
            { text: "Extração de minérios", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ O que é PECUÁRIA?",
          options: [
            { text: "Plantação de vegetais", correct: false },
            { text: "Criação de animais para obter carne, leite, ovos", correct: true },
            { text: "Construção de casas", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ O que é extrativismo MINERAL?",
          options: [
            { text: "Coleta de frutas", correct: false },
            { text: "Pesca de peixes", correct: false },
            { text: "Extração de rochas e minérios como ouro e ferro", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ O que são alimentos ORGÂNICOS?",
          options: [
            { text: "Alimentos com muito açúcar", correct: false },
            { text: "Alimentos cultivados sem produtos químicos", correct: true },
            { text: "Alimentos congelados", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "5️⃣ Qual destes é um exemplo de extrativismo ANIMAL?",
          options: [
            { text: "Colher frutas", correct: false },
            { text: "Pescar peixes", correct: true },
            { text: "Extrair ouro", correct: false }
          ]
        }
      ],
      successMessage: "Fantástico, Anthony! Você conheceu as atividades do campo! 🌾👨‍🌾",
      bonusQuestion: "A pecuária é a criação de animais?",
      bonusCorrectAnswer: "Sim"
    },
    // MISSÃO 7: INDÚSTRIA E MEIO AMBIENTE
    {
      id: 7,
      title: "Missão 7: Indústria e Meio Ambiente",
      icon: "🏭",
      image: "assets/imagens/industria.jpg",
      textTitle: "INDÚSTRIA E IMPACTOS NO AMBIENTE",
      textContent: `INDÚSTRIA

Grande parte dos itens produzidos nas áreas rurais é transformada em outros produtos nas indústrias.

Exemplo - DO ALGODÃO À ROUPA:
🌱 Plantação de algodão → 🏭 Indústria têxtil → ✂️ Oficina de costura → 👕 Roupas

As indústrias transformam produtos do campo em novos itens que usamos no dia a dia.

IMPACTOS NO AMBIENTE

Apesar de essenciais, as indústrias são responsáveis por profundas alterações no ambiente:
• Usam grande quantidade de recursos naturais
• Podem poluir o AR com gases
• Podem poluir a ÁGUA com esgoto
• Podem poluir o SOLO com resíduos

PROBLEMAS AMBIENTAIS:
🏭 Poluição do ar - fumaça e gases poluentes das chaminés
🌊 Poluição da água - esgoto jogado nos rios sem tratamento
🌍 Poluição do solo - lixo e resíduos jogados incorretamente
🌳 Desmatamento - destruição de florestas

Por isso, existem LEIS AMBIENTAIS e órgãos para fiscalizar e garantir que as atividades não prejudiquem a natureza.`,
      showImageIcon: false,
      observationQuestions: [
        "O que as indústrias fazem?",
        "Quais problemas as indústrias podem causar?",
        "Por que existem leis ambientais?"
      ],
      explanation: `As indústrias transformam produtos do campo em novos produtos que usamos.
      Exemplo: o algodão vira tecido e depois roupas.
      As indústrias podem causar poluição do ar, da água e do solo.
      Existem leis ambientais para proteger a natureza das atividades humanas.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ O que as indústrias fazem?",
          options: [
            { text: "Plantam alimentos", correct: false },
            { text: "Transformam produtos em novos itens", correct: true },
            { text: "Criam animais", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ O algodão é transformado em quê nas indústrias?",
          options: [
            { text: "Em comida", correct: false },
            { text: "Em tecidos e roupas", correct: true },
            { text: "Em água", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Qual problema as fábricas podem causar ao soltar fumaça?",
          options: [
            { text: "Poluição da água", correct: false },
            { text: "Poluição do ar", correct: true },
            { text: "Desmatamento", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ O que acontece quando esgoto é jogado nos rios?",
          options: [
            { text: "Os rios ficam mais limpos", correct: false },
            { text: "Os rios ficam poluídos", correct: true },
            { text: "Nada acontece", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "5️⃣ Por que existem leis ambientais?",
          options: [
            { text: "Para aumentar a poluição", correct: false },
            { text: "Para proteger a natureza", correct: true },
            { text: "Para fechar todas as fábricas", correct: false }
          ]
        }
      ],
      successMessage: "Parabéns, Anthony! Você aprendeu sobre indústrias e meio ambiente! 🏭🌍",
      bonusQuestion: "As indústrias podem causar poluição se não seguirem as leis?",
      bonusCorrectAnswer: "Sim"
    },
    // MISSÃO 8: MÁQUINAS E TRABALHO
    {
      id: 8,
      title: "Missão 8: Máquinas e Trabalho",
      icon: "🤖",
      image: "assets/imagens/maquinas.jpg",
      textTitle: "MÁQUINAS E O FUTURO DO TRABALHO",
      textContent: `HÁ EMPREGO PARA TODO MUNDO?

As pessoas trabalham em troca de um pagamento, necessário para comprar o que necessitam para viver. No entanto, nem todas as pessoas conseguem emprego.

UMA DAS RAZÕES PARA O DESEMPREGO É O USO DE MÁQUINAS

Diversos trabalhos antes realizados por pessoas passaram a ser feitos por máquinas, o que diminuiu o número de postos de trabalho.

EXEMPLOS:

🚜 NA AGRICULTURA:
Antes: Dezenas de trabalhadores faziam a colheita
Hoje: Uma única máquina faz o trabalho de muitas pessoas

🏭 NA INDÚSTRIA:
Antes: Muitos operários montavam carros
Hoje: Robôs fazem grande parte do trabalho

💳 NOS BANCOS:
Antes: Caixas de banco atendiam as pessoas
Hoje: Caixas eletrônicos fazem muitas operações

🚌 NOS ÔNIBUS:
Antes: Cobrador vendia passagens
Hoje: Máquinas de validação substituíram os cobradores

As máquinas aumentaram a produtividade, mas reduziram os postos de trabalho. Por isso, é importante estudar e se preparar para novas profissões!`,
      showImageIcon: false,
      observationQuestions: [
        "Por que algumas pessoas ficam desempregadas?",
        "O que as máquinas fazem hoje que antes era feito por pessoas?",
        "Por que é importante estudar?"
      ],
      explanation: `Uma das razões para o desemprego é o uso de máquinas no lugar de pessoas.
      Na agricultura, uma máquina faz o trabalho de dezenas de trabalhadores.
      Nas indústrias, robôs montam carros no lugar de operários.
      Caixas eletrônicos substituíram caixas de banco.
      É importante estudar para se preparar para novas profissões.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ Uma das razões para o desemprego é:",
          options: [
            { text: "Ter muitas férias", correct: false },
            { text: "O uso de máquinas no lugar de pessoas", correct: true },
            { text: "Trabalhar muito", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ Na agricultura, o que as máquinas fazem hoje?",
          options: [
            { text: "Nada, tudo é manual", correct: false },
            { text: "O trabalho que antes precisava de dezenas de pessoas", correct: true },
            { text: "Apenas plantar", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ O que substituiu os caixas de banco em muitas operações?",
          options: [
            { text: "Mais funcionários", correct: false },
            { text: "Caixas eletrônicos", correct: true },
            { text: "Nada mudou", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ O que substituiu os cobradores nos ônibus?",
          options: [
            { text: "Mais cobradores", correct: false },
            { text: "Máquinas de validação de passagem", correct: true },
            { text: "O motorista", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "5️⃣ Por que é importante estudar?",
          options: [
            { text: "Não é importante", correct: false },
            { text: "Para se preparar para novas profissões", correct: true },
            { text: "Só para tirar notas boas", correct: false }
          ]
        }
      ],
      successMessage: "Parabéns, Anthony! Você aprendeu sobre máquinas e trabalho! 🤖⚙️",
      bonusQuestion: "As máquinas substituíram alguns trabalhos que eram feitos por pessoas?",
      bonusCorrectAnswer: "Sim"
    },
    // MISSÃO 9: REVISÃO - TRÂNSITO (PERGUNTAS DA PROVINHA)
    {
      id: 9,
      title: "Missão 9: Revisão - Trânsito",
      icon: "📝",
      image: "assets/imagens/revisao.jpg",
      textTitle: "REVISÃO: TRÂNSITO E SEGURANÇA",
      textContent: `Vamos revisar tudo que aprendemos sobre o TRÂNSITO!

🚦 O SEMÁFORO:
• VERMELHO = PARAR
• AMARELO = PRESTAR ATENÇÃO
• VERDE = IR / PASSAR

✅ ATITUDES CORRETAS NO TRÂNSITO:
• Atravessar na faixa de pedestre
• Esperar o sinal abrir para atravessar
• Usar cinto de segurança
• NÃO correr entre os carros

👮 OS AGENTES DE TRÂNSITO:
Os agentes de trânsito existem para cuidar da segurança de pedestres, motoristas e passageiros.

⚖️ AS LEIS DE TRÂNSITO:
As leis de trânsito devem ser conhecidas e respeitadas, para garantir segurança para todos.

🚗 REGRAS IMPORTANTES:
• Usar cinto de segurança em TODOS os bancos do carro
• Crianças devem usar cadeirinha até 10 anos
• Devemos SEMPRE atravessar na faixa de pedestre
• Não passar do sinal vermelho`,
      showImageIcon: false,
      observationQuestions: [
        "O que significa cada cor do semáforo?",
        "Quais são as atitudes corretas no trânsito?",
        "Por que as leis de trânsito existem?"
      ],
      explanation: `O semáforo: Vermelho = Parar, Amarelo = Atenção, Verde = Ir.
      Devemos atravessar na faixa de pedestre e esperar o sinal verde.
      Usar cinto de segurança é obrigatório em todos os bancos.
      Os agentes de trânsito cuidam da segurança de todos.
      As leis de trânsito existem para garantir a segurança de pedestres, motoristas e passageiros.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ O que significa a cor VERMELHA do semáforo?",
          options: [
            { text: "Ir / Passar", correct: false },
            { text: "PARAR", correct: true },
            { text: "Prestar atenção", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ O que significa a cor AMARELA do semáforo?",
          options: [
            { text: "Parar", correct: false },
            { text: "Ir rápido", correct: false },
            { text: "PRESTAR ATENÇÃO", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Qual atitude está ERRADA no trânsito?",
          options: [
            { text: "Atravessar na faixa de pedestre", correct: false },
            { text: "Correr entre os carros", correct: true },
            { text: "Usar cinto de segurança", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ Verdadeiro ou Falso: Os agentes de trânsito cuidam da segurança de todos.",
          options: [
            { text: "VERDADEIRO", correct: true },
            { text: "FALSO", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "5️⃣ É necessário usar cinto de segurança no banco de trás do carro?",
          options: [
            { text: "Sim, é obrigatório em todos os bancos", correct: true },
            { text: "Não, só na frente", correct: false },
            { text: "Depende do carro", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "6️⃣ Por que as leis de trânsito devem ser respeitadas?",
          options: [
            { text: "Para ganhar prêmios", correct: false },
            { text: "Para garantir segurança para todos", correct: true },
            { text: "Não precisam ser respeitadas", correct: false }
          ]
        }
      ],
      successMessage: "Excelente, Anthony! Você está pronto para a provinha de trânsito! 🚦✅",
      bonusQuestion: "Devemos atravessar na faixa de pedestre?",
      bonusCorrectAnswer: "Sim"
    },
    // MISSÃO 10: REVISÃO - PAISAGENS E COMUNIDADES
    {
      id: 10,
      title: "Missão 10: Paisagens e Comunidades",
      icon: "🏞️",
      image: "assets/imagens/paisagens.jpg",
      textTitle: "TRANSFORMAÇÃO DAS PAISAGENS",
      textContent: `AS PAISAGENS MUDAM!

Uma paisagem natural pode se transformar em uma cidade. O ser humano modifica as paisagens construindo casas, prédios, ruas e estradas.

🌳 TRANSFORMAÇÕES NA PAISAGEM:
• H - Transformação causada pelo SER HUMANO (construções, desmatamento)
• N - Transformação causada pela NATUREZA (erosão, chuvas)
• H/N - Transformação causada pela AÇÃO CONJUNTA

🔗 LIGANDO PAISAGENS:
• NATURAL ↔ FLORESTA (sem modificação humana)
• MODIFICADA ↔ CIDADE (construída pelo homem)

🏠 COMUNIDADES BRASILEIRAS:

👨‍👩‍👧‍👦 ALDEIAS INDÍGENAS:
São construídas perto de rios. Os espaços de uso coletivo e familiar ficam próximos.

🎣 CAIÇARAS:
São construídos à beira-mar. Do mar retiram alimentos, usam como transporte e diversão.

🌾 COMUNIDADES QUILOMBOLAS:
São grupos constituídos pela população negra. Têm grande relação com a terra.

🗑️ SERVIÇOS PÚBLICOS:
Se o lixo não fosse recolhido, as ruas ficariam sujas e haveria problemas de saúde para todos.

🏡 MORADIA É UM DIREITO:
Todos têm direito a uma moradia digna!`,
      showImageIcon: false,
      observationQuestions: [
        "O que acontece quando uma paisagem natural vira cidade?",
        "Quem são os caiçaras?",
        "Por que a coleta de lixo é importante?"
      ],
      explanation: `As paisagens podem ser transformadas pelo ser humano, pela natureza ou por ambos.
      Floresta é uma paisagem natural. Cidade é uma paisagem modificada.
      Aldeias indígenas ficam perto de rios. Caiçaras vivem à beira-mar.
      Comunidades quilombolas são formadas pela população negra.
      A coleta de lixo é importante para manter as ruas limpas e evitar doenças.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ O que acontece com uma paisagem natural quando vira cidade?",
          options: [
            { text: "Fica mais natural", correct: false },
            { text: "Muda e se torna modificada pelo homem", correct: true },
            { text: "As árvores crescem mais", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ O que significa (H) nas transformações da paisagem?",
          options: [
            { text: "Transformação pela natureza", correct: false },
            { text: "Transformação causada pelo SER HUMANO", correct: true },
            { text: "Transformação conjunta", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ A FLORESTA é uma paisagem:",
          options: [
            { text: "Modificada", correct: false },
            { text: "NATURAL", correct: true },
            { text: "Artificial", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ A CIDADE é uma paisagem:",
          options: [
            { text: "Natural", correct: false },
            { text: "MODIFICADA pelo homem", correct: true },
            { text: "Selvagem", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "5️⃣ Onde vivem os CAIÇARAS?",
          options: [
            { text: "Perto de rios", correct: false },
            { text: "À beira-mar", correct: true },
            { text: "Na cidade", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "6️⃣ Onde são construídas as ALDEIAS INDÍGENAS?",
          options: [
            { text: "À beira-mar", correct: false },
            { text: "Na cidade", correct: false },
            { text: "Perto de rios", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          question: "7️⃣ Se o lixo não fosse recolhido, o que aconteceria?",
          options: [
            { text: "Nada, ficaria tudo normal", correct: false },
            { text: "As ruas ficariam sujas e haveria problemas de saúde", correct: true },
            { text: "Ficaria mais bonito", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "8️⃣ Quanto tempo o plástico demora para se decompor?",
          options: [
            { text: "Menos de 100 anos", correct: false },
            { text: "Mais de 100 anos", correct: true },
            { text: "1 semana", correct: false }
          ]
        }
      ],
      successMessage: "🎉🌍🏆 PARABÉNS, ANTHONY! VOCÊ COMPLETOU TODAS AS MISSÕES DE GEOGRAFIA! 🎊✨ Você é um verdadeiro GUARDIÃO DO MUNDO!",
      bonusQuestion: "A cidade é uma paisagem modificada pelo ser humano?",
      bonusCorrectAnswer: "Sim"
    }
  ];

  getMissions(): Mission[] {
    return this.missions;
  }

  getMissionById(id: number): Mission | undefined {
    return this.missions.find(m => m.id === id);
  }

  markMissionAsCompleted(id: number): void {
    const mission = this.missions.find(m => m.id === id);
    if (mission) {
      mission.completed = true;
    }
  }

  isMissionUnlocked(missionId: number): boolean {
    if (missionId === 1) return true;
    const previousMission = this.missions.find(m => m.id === missionId - 1);
    return previousMission?.completed === true;
  }
}
