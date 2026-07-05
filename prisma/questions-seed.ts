export const questionsData = [
  // LÍNGUA PORTUGUESA (10 questões)
  {
    subjectSlug: "lingua-portuguesa",
    topicTitle: "Leitura e interpretação de textos",
    statement: "Leia o texto abaixo:\\n\\n'O crescente uso de tecnologias no policiamento ostensivo tem gerado debates acalorados. Se por um lado as câmeras corporais oferecem maior transparência e protegem o bom policial de falsas acusações, por outro, há quem argumente que elas inibem a proatividade da tropa em situações de alto risco, criando um efeito paralisante.'\\n\\nDepreende-se do texto que as câmeras corporais no policiamento ostensivo:",
    difficulty: "MEDIA",
    explanation: "O texto apresenta dois lados do debate: vantagens (transparência, proteção do policial) e desvantagens apontadas por críticos (inibição da proatividade). A palavra 'depreende-se' significa o que se pode concluir ou inferir.",
    correctExplanation: "A alternativa correta resume perfeitamente a dualidade apresentada no texto: trazem benefícios de transparência, mas enfrentam críticas sobre o impacto na ação policial.",
    wrongExplanation: "Alternativas que afirmam apenas um dos lados (só positivo ou só negativo) estão erradas porque o texto é claro ao mostrar que 'tem gerado debates' apresentando 'por um lado' e 'por outro'.",
    trap: "Extrapolação: o texto não afirma que as câmeras DEVEM ser banidas ou que são a ÚNICA solução.",
    reviewConcept: "Interpretação de textos: compreensão de conectivos de oposição (por um lado / por outro) e identificação da tese.",
    options: [
      { text: "São uma unanimidade entre os especialistas em segurança pública.", isCorrect: false, explanation: "Falso. O texto diz que geram 'debates acalorados'." },
      { text: "Têm como único propósito vigiar e punir os policiais nas ruas.", isCorrect: false, explanation: "Falso. Elas também 'protegem o bom policial'." },
      { text: "Apresentam benefícios de transparência, mas são alvo de críticas quanto ao impacto na proatividade.", isCorrect: true, explanation: "Correto. Sintetiza a dualidade do texto." },
      { text: "Causaram o aumento da criminalidade devido à paralisação da tropa.", isCorrect: false, explanation: "Falso. O texto fala de 'efeito paralisante' como argumento de críticos, não como fato consumado de aumento de crime." },
      { text: "São ineficazes para proteger o policial de falsas acusações.", isCorrect: false, explanation: "Falso. O texto afirma exatamente o oposto." }
    ]
  },
  {
    subjectSlug: "lingua-portuguesa",
    topicTitle: "Ortografia, sinônimos e antônimos",
    statement: "Assinale a alternativa em que a palavra destacada pode ser substituída pelo termo entre parênteses SEM alteração do sentido original e mantendo a correção gramatical:\\n\\n'O comandante decidiu manter a operação, CONQUANTO houvesse risco de chuva forte.'",
    difficulty: "DIFICIL",
    explanation: "'Conquanto' é uma conjunção subordinativa concessiva, equivalente a 'embora', 'ainda que', 'mesmo que'. Ela introduz uma ideia de concessão (algo que poderia atrapalhar, mas não impede a ação principal).",
    correctExplanation: "'Embora' é sinônimo perfeito de 'conquanto', ambos expressando concessão.",
    wrongExplanation: "Palavras como 'porquanto' (causal/explicativo) e 'portanto' (conclusivo) são as pegadinhas mais comuns em concursos.",
    trap: "Confundir 'conquanto' (embora) com 'porquanto' (porque/pois).",
    reviewConcept: "Conjunções e seus valores semânticos: Concessivas.",
    options: [
      { text: "PORQUANTO", isCorrect: false, explanation: "Incorreto. Porquanto significa porque/visto que (causa/explicação)." },
      { text: "PORTANTO", isCorrect: false, explanation: "Incorreto. Portanto indica conclusão." },
      { text: "CONTUDO", isCorrect: false, explanation: "Incorreto. Contudo é adversativa (mas/porém), exige mudança na estrutura sintática." },
      { text: "EMBORA", isCorrect: true, explanation: "Correto. Conquanto e embora são sinônimos perfeitos (concessivas)." },
      { text: "POR CONSEGUINTE", isCorrect: false, explanation: "Incorreto. Indica consequência/conclusão." }
    ]
  },
  {
    subjectSlug: "lingua-portuguesa",
    topicTitle: "Classes de palavras",
    statement: "Na frase 'O soldado cuja arma disparou acidentalmente foi afastado', o termo 'cuja' é um:",
    difficulty: "FACIL",
    explanation: "O termo 'cujo' (e variações) é um pronome relativo que estabelece relação de posse entre o antecedente e o consequente.",
    correctExplanation: "'Cujo' retoma 'soldado' e estabelece relação de posse com 'arma' (a arma do soldado).",
    wrongExplanation: "Não é pronome demonstrativo (este, aquele) nem preposição.",
    trap: "Achar que é uma conjunção integrante.",
    reviewConcept: "Pronomes Relativos: função e uso do 'cujo'.",
    options: [
      { text: "Pronome demonstrativo.", isCorrect: false, explanation: "Incorreto. Demonstrativos são este, esse, aquele." },
      { text: "Pronome relativo.", isCorrect: true, explanation: "Correto. Estabelece relação de posse." },
      { text: "Pronome pessoal oblíquo.", isCorrect: false, explanation: "Incorreto. Oblíquos são me, te, se, o, a, lhe." },
      { text: "Conjunção integrante.", isCorrect: false, explanation: "Incorreto. Conjunções integrantes são 'que' e 'se' quando introduzem oração substantiva." },
      { text: "Artigo indefinido.", isCorrect: false, explanation: "Incorreto. Artigos indefinidos são um, uma, uns, umas." }
    ]
  },
  {
    subjectSlug: "lingua-portuguesa",
    topicTitle: "Sintaxe e orações",
    statement: "Analise a função sintática do termo destacado na oração: 'O batalhão foi cercado PELOS MANIFESTANTES.'",
    difficulty: "MEDIA",
    explanation: "A oração está na voz passiva ('foi cercado'). O termo 'pelos manifestantes' indica quem praticou a ação de cercar na voz passiva.",
    correctExplanation: "O termo que pratica a ação na voz passiva é chamado de agente da passiva.",
    wrongExplanation: "Não é sujeito (o sujeito que sofre a ação é 'O batalhão'). Não é objeto indireto porque o verbo 'cercar' é transitivo direto na voz ativa.",
    trap: "Confundir com objeto indireto devido à preposição 'por'.",
    reviewConcept: "Vozes verbais e Agente da Passiva.",
    options: [
      { text: "Objeto indireto.", isCorrect: false, explanation: "Incorreto. O verbo cercar é transitivo direto (quem cerca, cerca algo)." },
      { text: "Sujeito simples.", isCorrect: false, explanation: "Incorreto. O sujeito da oração é 'O batalhão'." },
      { text: "Complemento nominal.", isCorrect: false, explanation: "Incorreto. Está completando um verbo (foi cercado), não um nome." },
      { text: "Agente da passiva.", isCorrect: true, explanation: "Correto. É quem pratica a ação na voz passiva." },
      { text: "Adjunto adverbial de instrumento.", isCorrect: false, explanation: "Incorreto. Os manifestantes são o agente da ação, não o instrumento." }
    ]
  },
  {
    subjectSlug: "lingua-portuguesa",
    topicTitle: "Concordância, regência, pronomes e crase",
    statement: "Assinale a alternativa que apresenta erro de concordância (verbal ou nominal):",
    difficulty: "MEDIA",
    explanation: "A questão cobra regras especiais de concordância, muito comuns na FGV, como o verbo haver e expressões de porcentagem.",
    correctExplanation: "O verbo 'haver' no sentido de 'existir' é impessoal e deve ficar SEMPRE na 3ª pessoa do singular. O correto seria 'Houve muitos protestos'.",
    wrongExplanation: "As outras alternativas estão gramaticalmente corretas.",
    trap: "Achar que o verbo haver deve ir para o plural para concordar com o que vem depois.",
    reviewConcept: "Concordância Verbal: Verbos impessoais (haver, fazer).",
    options: [
      { text: "Faz três anos que o concurso ocorreu.", isCorrect: false, explanation: "Correta. Verbo fazer indicando tempo transcorrido fica no singular." },
      { text: "Houveram muitos protestos na capital ontem.", isCorrect: true, explanation: "Incorreta. Verbo haver (= existir) não tem plural. O certo é 'Houve'." },
      { text: "A maioria dos policiais aprovou a nova escala.", isCorrect: false, explanation: "Correta. Expressão partitiva permite concordância no singular ou plural." },
      { text: "É proibida a entrada de pessoas não autorizadas.", isCorrect: false, explanation: "Correta. Como há o artigo 'a' antes de 'entrada', o adjetivo concorda no feminino." },
      { text: "Vossa Excelência está convocado para a reunião.", isCorrect: false, explanation: "Correta. A concordância ideológica se faz com o sexo da pessoa (masculino, neste caso)." }
    ]
  },
  {
    subjectSlug: "lingua-portuguesa",
    topicTitle: "Concordância, regência, pronomes e crase",
    statement: "Indique a alternativa em que o uso (ou ausência) do acento grave indicador de crase está INCORRETO:",
    difficulty: "MEDIA",
    explanation: "A crase é a fusão da preposição 'a' com o artigo feminino 'a'. Não ocorre antes de palavras masculinas, verbos ou pronomes de tratamento.",
    correctExplanation: "'Pé' é palavra masculina, portanto não admite artigo feminino 'a', tornando impossível a ocorrência de crase.",
    wrongExplanation: "As outras opções seguem as regras corretas de uso ou proibição da crase.",
    trap: "Achar que toda expressão adverbial com 'a' tem crase.",
    reviewConcept: "Crase: Casos proibidos.",
    options: [
      { text: "Os policiais chegaram à delegacia.", isCorrect: false, explanation: "Correto. Chegar a + a delegacia = à delegacia." },
      { text: "O soldado dirigiu-se àquele local suspeito.", isCorrect: false, explanation: "Correto. Dirigir-se a + aquele = àquele." },
      { text: "As viaturas estavam a postos.", isCorrect: false, explanation: "Correto. 'Postos' é masculino plural, não há crase." },
      { text: "Eles começaram a atirar de repente.", isCorrect: false, explanation: "Correto. Não há crase antes de verbo." },
      { text: "O batalhão foi à pé até o local do confronto.", isCorrect: true, explanation: "Incorreto. 'Pé' é palavra masculina, não se usa crase." }
    ]
  },
  {
    subjectSlug: "lingua-portuguesa",
    topicTitle: "Leitura e interpretação de textos",
    statement: "A charge institucional mostra um policial ajudando um idoso a atravessar a rua, com os dizeres 'Servir e Proteger'. A função da linguagem predominante neste tipo de mensagem é:",
    difficulty: "MEDIA",
    explanation: "Mensagens de campanhas institucionais, que buscam convencer, emocionar ou influenciar o comportamento/opinião do receptor, utilizam a função conativa ou apelativa.",
    correctExplanation: "A função conativa (apelativa) é focada no receptor, típica de propagandas e mensagens institucionais.",
    wrongExplanation: "Não é referencial (foco na informação neutra), nem emotiva (foco nos sentimentos do emissor).",
    trap: "Confundir com função referencial por achar que apenas informa uma ação.",
    reviewConcept: "Funções da Linguagem.",
    options: [
      { text: "Referencial, pois apenas informa um fato ocorrido.", isCorrect: false, explanation: "Incorreto. Há intenção de influenciar a percepção sobre a instituição." },
      { text: "Emotiva, pois foca nos sentimentos de quem criou o cartaz.", isCorrect: false, explanation: "Incorreto. O foco não é o 'eu' (emissor)." },
      { text: "Fática, pois testa o canal de comunicação.", isCorrect: false, explanation: "Incorreto. Função fática seria 'Alô?', 'Entendeu?'." },
      { text: "Conativa (ou apelativa), pois busca influenciar o receptor.", isCorrect: true, explanation: "Correto. Foco no receptor, persuadindo-o." },
      { text: "Metalinguística, pois explica o código usando o próprio código.", isCorrect: false, explanation: "Incorreto. Não há explicação do idioma." }
    ]
  },
  {
    subjectSlug: "lingua-portuguesa",
    topicTitle: "Sintaxe e orações",
    statement: "No período: 'O sargento gritou tanto QUE ficou rouco', a oração destacada introduz uma ideia de:",
    difficulty: "FACIL",
    explanation: "A estrutura 'TÃO... QUE', 'TANTO... QUE', 'TAMANHO... QUE' introduz uma oração subordinada adverbial consecutiva (consequência).",
    correctExplanation: "Ficar rouco foi a CONSEQUÊNCIA de ter gritado muito.",
    wrongExplanation: "Não é causa (a causa foi gritar). Não é concessão nem condição.",
    trap: "Confundir causa com consequência.",
    reviewConcept: "Orações Subordinadas Adverbiais: Causal vs. Consecutiva.",
    options: [
      { text: "Causa.", isCorrect: false, explanation: "Incorreto. A causa é 'ter gritado'." },
      { text: "Concessão.", isCorrect: false, explanation: "Incorreto. Não há oposição (como 'embora')." },
      { text: "Proporção.", isCorrect: false, explanation: "Incorreto. Não há variação simultânea (como 'à medida que')." },
      { text: "Consequência.", isCorrect: true, explanation: "Correto. O 'que' acompanhado de 'tanto/tão/tal' indica consequência." },
      { text: "Condição.", isCorrect: false, explanation: "Incorreto. Não há hipótese (como 'se', 'caso')." }
    ]
  },
  {
    subjectSlug: "lingua-portuguesa",
    topicTitle: "Concordância, regência, pronomes e crase",
    statement: "Assinale a frase com a correta regência verbal, segundo a norma-padrão:",
    difficulty: "DIFICIL",
    explanation: "Verbos como assistir, visar, obedecer e preferir têm regências específicas que costumam cair em prova.",
    correctExplanation: "O verbo IMPLICAR, no sentido de 'acarretar', 'ter como consequência', é transitivo DIRETO (não exige preposição). Ex: A condenação implica demissão.",
    wrongExplanation: "'Assistir' no sentido de ver exige 'a'. 'Preferir' exige 'a' e não aceita termos de intensidade ('mais', 'do que'). 'Obedecer' exige 'a'.",
    trap: "Na fala coloquial, dizemos 'implica em', mas a gramática normativa não aceita a preposição 'em'.",
    reviewConcept: "Regência Verbal: verbos frequentes (implicar, preferir, assistir, obedecer).",
    options: [
      { text: "O soldado assistiu o treinamento até o fim.", isCorrect: false, explanation: "Incorreto. Assistir (ver) exige 'a': assistiu AO treinamento." },
      { text: "O capitão preferia mais a ronda ostensiva do que o trabalho interno.", isCorrect: false, explanation: "Incorreto. Preferia a ronda ostensiva AO trabalho interno." },
      { text: "A falta grave implicará em expulsão da corporação.", isCorrect: false, explanation: "Incorreto. Implicar (acarretar) é transitivo direto: implicará expulsão." },
      { text: "Todos os recrutas devem obedecer o regulamento disciplinar.", isCorrect: false, explanation: "Incorreto. Obedecer exige 'a': obedecer AO regulamento." },
      { text: "O atraso implicou punição severa ao recruta.", isCorrect: true, explanation: "Correto. Implicar no sentido de acarretar não tem preposição." }
    ]
  },
  {
    subjectSlug: "lingua-portuguesa",
    topicTitle: "Classes de palavras",
    statement: "Em 'O suspeito agiu BASTANTE rápido, mas a polícia tinha BASTANTES homens no local', os termos em destaque classificam-se, morfológica e respectivamente, como:",
    difficulty: "MEDIA",
    explanation: "'Bastante' pode ser Advérbio (invariável) quando acompanha verbo/adjetivo, ou Pronome Adjetivo Indefinido (variável) quando acompanha substantivo.",
    correctExplanation: "No 1º caso, 'bastante' modifica o adjetivo 'rápido' (é um advérbio de intensidade, não varia). No 2º, modifica o substantivo 'homens' (é pronome adjetivo, vai para o plural).",
    wrongExplanation: "Troque por 'muito': Agiu MUITO (não 'muitos') rápido → advérbio. Tinha MUITOS (plural) homens → pronome.",
    trap: "Achar que 'bastante' não pode ir para o plural.",
    reviewConcept: "Classes de palavras: diferença entre advérbio e pronome indefinido (bastante/bastantes, muito/muitos).",
    options: [
      { text: "Advérbio e Adjetivo.", isCorrect: false, explanation: "Incorreto. No segundo caso é pronome indefinido." },
      { text: "Pronome indefinido e Advérbio.", isCorrect: false, explanation: "Incorreto. Ordem invertida." },
      { text: "Advérbio e Pronome indefinido.", isCorrect: true, explanation: "Correto. Modifica adjetivo (advérbio) e modifica substantivo (pronome)." },
      { text: "Adjetivo e Adjetivo.", isCorrect: false, explanation: "Incorreto." },
      { text: "Advérbio e Advérbio.", isCorrect: false, explanation: "Incorreto. Advérbio não tem plural." }
    ]
  },

  // MATEMÁTICA BÁSICA (10 questões)
  {
    subjectSlug: "matematica-basica",
    topicTitle: "Razão, proporção, regra de três e porcentagem",
    statement: "O comando de um batalhão observou que uma viatura com 4 policiais consegue patrulhar um setor em 12 horas. Se o efetivo for aumentado para 6 policiais, mantendo o mesmo ritmo de trabalho, em quanto tempo o mesmo setor será patrulhado?",
    difficulty: "FACIL",
    explanation: "Temos uma Regra de Três Simples com grandezas inversamente proporcionais. Se aumentar o número de policiais, o tempo de patrulha diminui.",
    correctExplanation: "Invertendo a segunda fração: 4 / 6 = X / 12 → 6X = 48 → X = 8 horas.",
    wrongExplanation: "Se usar regra de três direta, encontraria 18 horas, o que não faz sentido (mais gente trabalhando, mais tempo?).",
    trap: "Resolver como grandezas DIRETAMENTE proporcionais.",
    reviewConcept: "Regra de Três Simples: Análise de grandezas inversamente proporcionais.",
    options: [
      { text: "8 horas.", isCorrect: true, explanation: "Correto. 4x12 = 48; 48/6 = 8." },
      { text: "9 horas.", isCorrect: false, explanation: "Incorreto." },
      { text: "10 horas.", isCorrect: false, explanation: "Incorreto." },
      { text: "16 horas.", isCorrect: false, explanation: "Incorreto." },
      { text: "18 horas.", isCorrect: false, explanation: "Incorreto. Erro clássico de usar regra de três direta." }
    ]
  },
  {
    subjectSlug: "matematica-basica",
    topicTitle: "Razão, proporção, regra de três e porcentagem",
    statement: "O salário de um soldado da PMERJ sofreu um reajuste de 10% em janeiro. Em julho, devido a um novo acordo, sofreu um novo reajuste de 20% sobre o salário já reajustado. O aumento percentual total acumulado no ano foi de:",
    difficulty: "MEDIA",
    explanation: "Trata-se de aumentos sucessivos. O segundo aumento incide sobre o valor JÁ acrescido do primeiro, não sobre o valor original.",
    correctExplanation: "Multiplicamos os fatores de aumento: 1,10 (10%) × 1,20 (20%) = 1,32. Isso significa um aumento total de 32%.",
    wrongExplanation: "A intuição leva o candidato a somar 10% + 20% = 30%, o que está matematicamente incorreto em juros compostos/aumentos sucessivos.",
    trap: "Somar as taxas (10 + 20 = 30).",
    reviewConcept: "Porcentagem: Aumentos e descontos sucessivos (fatores de multiplicação).",
    options: [
      { text: "30,0%", isCorrect: false, explanation: "Incorreto. Esse é o erro mais comum (apenas somar)." },
      { text: "31,5%", isCorrect: false, explanation: "Incorreto." },
      { text: "32,0%", isCorrect: true, explanation: "Correto. 1,10 × 1,20 = 1,32 = 32% de aumento." },
      { text: "33,0%", isCorrect: false, explanation: "Incorreto." },
      { text: "35,0%", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "matematica-basica",
    topicTitle: "Equação e sistema do 1º grau",
    statement: "Em uma operação policial, foram apreendidas armas de fogo (pistolas e fuzis), num total de 45 armas. Sabe-se que o número de pistolas excede o número de fuzis em 15 unidades. Quantos fuzis foram apreendidos?",
    difficulty: "FACIL",
    explanation: "Sistema de equações do 1º grau. P = pistolas, F = fuzis. P + F = 45 e P = F + 15.",
    correctExplanation: "Substituindo P na primeira equação: (F + 15) + F = 45 → 2F = 30 → F = 15.",
    wrongExplanation: "Se você marcou 30, encontrou o número de pistolas, e não de fuzis.",
    trap: "Achar o valor de uma variável (pistolas) e assinalar a resposta sem ler o que a questão pede (fuzis).",
    reviewConcept: "Sistema de Equações do 1º Grau: Método da substituição.",
    options: [
      { text: "10", isCorrect: false, explanation: "Incorreto." },
      { text: "15", isCorrect: true, explanation: "Correto. F = 15. P = 30. Total = 45." },
      { text: "20", isCorrect: false, explanation: "Incorreto." },
      { text: "25", isCorrect: false, explanation: "Incorreto." },
      { text: "30", isCorrect: false, explanation: "Incorreto. 30 é o número de pistolas." }
    ]
  },
  {
    subjectSlug: "matematica-basica",
    topicTitle: "Medidas, tabelas, gráficos e geometria",
    statement: "Uma sala retangular usada para treinamento tem 12 metros de comprimento e área total de 96 m². Qual é o perímetro dessa sala?",
    difficulty: "MEDIA",
    explanation: "Primeiro, encontramos a largura usando a fórmula da Área = comprimento × largura. 96 = 12 × L → L = 8. Depois, calculamos o Perímetro = 2×(comprimento) + 2×(largura).",
    correctExplanation: "L = 8m. Perímetro = 2×(12) + 2×(8) = 24 + 16 = 40 metros.",
    wrongExplanation: "Candidatos podem confundir perímetro com metade do perímetro ou usar a área de alguma forma na soma final.",
    trap: "Achar a largura (8) e marcar como resposta, ou somar apenas 12+8=20.",
    reviewConcept: "Geometria Plana: Retângulo (Cálculo de Área e Perímetro).",
    options: [
      { text: "8 metros", isCorrect: false, explanation: "Incorreto. 8m é a largura." },
      { text: "20 metros", isCorrect: false, explanation: "Incorreto. 20m é a soma de apenas um comprimento e uma largura." },
      { text: "32 metros", isCorrect: false, explanation: "Incorreto." },
      { text: "40 metros", isCorrect: true, explanation: "Correto. 2x12 + 2x8 = 24 + 16 = 40." },
      { text: "48 metros", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "matematica-basica",
    topicTitle: "Probabilidade e raciocínio lógico",
    statement: "Em um pelotão de 60 soldados, 40 têm curso de tiro tático, 35 têm curso de direção defensiva e 10 não possuem nenhum dos dois cursos. Quantos soldados possuem AMBOS os cursos?",
    difficulty: "DIFICIL",
    explanation: "Problema clássico de Teoria dos Conjuntos. Total de pessoas COM algum curso = 60 - 10 = 50 pessoas. A soma dos que têm tiro (40) e direção (35) é 75. A diferença entre a soma e o total real é a interseção.",
    correctExplanation: "Interseção = n(A) + n(B) - n(A ∪ B) = 40 + 35 - 50 = 25.",
    wrongExplanation: "Um erro comum é somar 40+35=75 e subtrair de 60, esquecendo dos 10 que não têm curso.",
    trap: "Esquecer de descontar o grupo 'nenhum' do total antes de fazer a conta.",
    reviewConcept: "Conjuntos: Fórmula da União e Interseção.",
    options: [
      { text: "15", isCorrect: false, explanation: "Incorreto. Esse seria o valor se não houvesse os 10 sem curso (75-60=15)." },
      { text: "20", isCorrect: false, explanation: "Incorreto." },
      { text: "25", isCorrect: true, explanation: "Correto. (40+35) - (60-10) = 75 - 50 = 25." },
      { text: "30", isCorrect: false, explanation: "Incorreto." },
      { text: "35", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "matematica-basica",
    topicTitle: "Probabilidade e raciocínio lógico",
    statement: "Considerando a proposição condicional 'Se chover forte, então a operação será cancelada', assinale a alternativa que apresenta uma dedução logicamente correta (equivalência ou contrapositiva):",
    difficulty: "MEDIA",
    explanation: "A contrapositiva de 'Se p, então q' é 'Se não q, então não p'. Ambas são logicamente equivalentes.",
    correctExplanation: "Se a operação não foi cancelada (não q), então significa que não choveu forte (não p).",
    wrongExplanation: "A afirmação 'Se a operação foi cancelada, então choveu forte' é um erro lógico (falácia de afirmação do consequente), pois a operação poderia ter sido cancelada por outro motivo.",
    trap: "Achar que a ida garante a volta (Se chove, cancela = Se cancela, chove).",
    reviewConcept: "Raciocínio Lógico: Equivalência lógica do Condicional (Contrapositiva).",
    options: [
      { text: "Se a operação foi cancelada, então certamente choveu forte.", isCorrect: false, explanation: "Incorreto. Falácia formal. Pode ter sido cancelada por outro motivo." },
      { text: "Se não choveu forte, então a operação não foi cancelada.", isCorrect: false, explanation: "Incorreto. Negar o antecedente não nega o consequente necessariamente." },
      { text: "A operação foi cancelada e choveu forte.", isCorrect: false, explanation: "Incorreto. Isso transforma a condicional em conjunção." },
      { text: "Se a operação não foi cancelada, então não choveu forte.", isCorrect: true, explanation: "Correto. Essa é a contrapositiva exata (Se não Q, então não P)." },
      { text: "A operação será cancelada apenas se chover forte.", isCorrect: false, explanation: "Incorreto. Muda o sentido original da frase." }
    ]
  },
  {
    subjectSlug: "matematica-basica",
    topicTitle: "Medidas, tabelas, gráficos e geometria",
    statement: "Um camburão precisa percorrer uma distância de 7,2 km até o local da ocorrência. Essa distância, expressa em metros, corresponde a:",
    difficulty: "FACIL",
    explanation: "Conversão básica do Sistema Métrico Decimal. O prefixo 'quilo' (k) significa 1.000.",
    correctExplanation: "1 km = 1.000 m. Então, 7,2 × 1.000 = 7.200 metros.",
    wrongExplanation: "Erros de vírgula são os únicos causadores de equívoco aqui.",
    trap: "Mover a vírgula o número errado de casas.",
    reviewConcept: "Unidades de Medida: Conversão de Comprimento.",
    options: [
      { text: "72 m", isCorrect: false, explanation: "Incorreto." },
      { text: "720 m", isCorrect: false, explanation: "Incorreto." },
      { text: "7.200 m", isCorrect: true, explanation: "Correto." },
      { text: "72.000 m", isCorrect: false, explanation: "Incorreto." },
      { text: "720.000 m", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "matematica-basica",
    topicTitle: "Números inteiros, racionais e reais",
    statement: "Calcule o valor da expressão numérica: -3² + (-2)³ - (-5)",
    difficulty: "MEDIA",
    explanation: "Expressões com números negativos exigem atenção à regra de sinais e parênteses. Note que -3² não tem parênteses, então o sinal negativo fica FORA da potência: -(3²) = -9. Já (-2)³ tem base negativa e expoente ímpar, então fica -8.",
    correctExplanation: "-9 + (-8) - (-5) = -9 - 8 + 5 = -17 + 5 = -12.",
    wrongExplanation: "Se o candidato calcular -3² como +9 (erro clássico), a conta fica: +9 - 8 + 5 = 6.",
    trap: "Achar que -3² é igual a (-3)². Sem parênteses, apenas o número é elevado, não o sinal.",
    reviewConcept: "Operações com Inteiros: Potenciação e regra de sinais.",
    options: [
      { text: "-12", isCorrect: true, explanation: "Correto. -9 - 8 + 5 = -12." },
      { text: "-22", isCorrect: false, explanation: "Incorreto." },
      { text: "4", isCorrect: false, explanation: "Incorreto." },
      { text: "6", isCorrect: false, explanation: "Incorreto. Erro de quem faz -3² = 9." },
      { text: "12", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "matematica-basica",
    topicTitle: "Probabilidade e raciocínio lógico",
    statement: "Em um stand de tiro, um policial tem 80% de chance de acertar o alvo A e 60% de chance de acertar o alvo B. Os tiros são eventos independentes. Qual é a probabilidade de ele acertar o alvo A E errar o alvo B?",
    difficulty: "MEDIA",
    explanation: "Se os eventos são independentes, a probabilidade de (A e não-B) ocorrerem simultaneamente é a multiplicação de suas probabilidades.",
    correctExplanation: "Chance de acertar A = 0,80. Chance de ERRAR B = 1 - 0,60 = 0,40. A probabilidade pedida é 0,80 × 0,40 = 0,32 = 32%.",
    wrongExplanation: "Multiplicar 80% por 60% daria a chance de acertar AMBOS (48%).",
    trap: "Calcular a probabilidade de acertar os dois, em vez de ler que a questão pede 'acertar um e errar o outro'.",
    reviewConcept: "Probabilidade: Eventos independentes e probabilidade complementar.",
    options: [
      { text: "14%", isCorrect: false, explanation: "Incorreto." },
      { text: "20%", isCorrect: false, explanation: "Incorreto." },
      { text: "32%", isCorrect: true, explanation: "Correto. 80% x 40% (chance de errar o B) = 32%." },
      { text: "48%", isCorrect: false, explanation: "Incorreto. Essa é a chance de acertar os dois." },
      { text: "68%", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "matematica-basica",
    topicTitle: "Razão, proporção, regra de três e porcentagem",
    statement: "Uma delegacia tem uma cota mensal de combustível. Do total, 2/5 são destinados às viaturas ostensivas, 1/4 às viaturas descaracterizadas e sobram 700 litros para operações especiais. O total de combustível da cota mensal é:",
    difficulty: "DIFICIL",
    explanation: "A soma das frações utilizadas é 2/5 + 1/4 = 8/20 + 5/20 = 13/20. Isso significa que a sobra (700 litros) corresponde à fração restante, que é 7/20 do total.",
    correctExplanation: "Se 7 partes (7/20) valem 700 litros, então 1 parte (1/20) vale 100 litros. O total (20/20) será 20 × 100 = 2.000 litros.",
    wrongExplanation: "Fazer confusão no MMC ou multiplicar as frações erradas gera resultados totalmente fora.",
    trap: "Achar que as viaturas descaracterizadas recebem 1/4 DO RESTO (mas o texto diz 1/4 do total).",
    reviewConcept: "Frações: Adição de frações e resolução de problemas.",
    options: [
      { text: "1.400 litros", isCorrect: false, explanation: "Incorreto." },
      { text: "1.800 litros", isCorrect: false, explanation: "Incorreto." },
      { text: "2.000 litros", isCorrect: true, explanation: "Correto. A soma dá 13/20. Sobram 7/20 que valem 700. Logo, o total é 2000." },
      { text: "2.500 litros", isCorrect: false, explanation: "Incorreto." },
      { text: "3.500 litros", isCorrect: false, explanation: "Incorreto." }
    ]
  },

  // DIREITOS HUMANOS (10 questões)
  {
    subjectSlug: "direitos-humanos",
    topicTitle: "Declaração Universal dos Direitos Humanos",
    statement: "Sobre a Declaração Universal dos Direitos Humanos (DUDH) de 1948, é correto afirmar que:",
    difficulty: "FACIL",
    explanation: "A DUDH é uma resolução da Assembleia Geral da ONU. Ela prevê expressamente o direito ao asilo para vítimas de perseguição, EXCETO para criminosos comuns ou atos contrários aos princípios da ONU.",
    correctExplanation: "A DUDH prevê, em seu art. 14, que todo ser humano, vítima de perseguição, tem o direito de procurar e de gozar asilo em outros países.",
    wrongExplanation: "A DUDH NÃO proíbe pena de morte explicitamente (fala sobre o direito à vida). Ela NÃO é um tratado vinculante (mas sim uma Resolução/Declaração).",
    trap: "Achar que a DUDH é um Tratado Internacional que obriga judicialmente os Estados desde 1948.",
    reviewConcept: "DUDH: Natureza jurídica e Direitos Previstos (Direito de Asilo).",
    options: [
      { text: "É um tratado internacional vinculante, que previu sanções imediatas aos Estados violadores.", isCorrect: false, explanation: "Falso. É uma declaração (Resolução), não um tratado com sanções." },
      { text: "Prevê que todo ser humano, vítima de perseguição, tem direito ao asilo, salvo em caso de crimes comuns.", isCorrect: true, explanation: "Correto. Art. 14 da DUDH." },
      { text: "Foi redigida e aprovada antes da Segunda Guerra Mundial.", isCorrect: false, explanation: "Falso. Foi em 1948, PÓS Segunda Guerra." },
      { text: "Proíbe expressamente a pena de morte em qualquer circunstância no mundo.", isCorrect: false, explanation: "Falso. A DUDH garante o direito à vida, mas os protocolos que proíbem pena de morte vieram depois." },
      { text: "Restringe-se a garantir direitos civis e políticos, ignorando direitos econômicos.", isCorrect: false, explanation: "Falso. A DUDH é marco pela indivisibilidade, garantindo todos os tipos de direitos." }
    ]
  },
  {
    subjectSlug: "direitos-humanos",
    topicTitle: "Constituição Federal: direitos e deveres individuais",
    statement: "Conforme o artigo 5º da Constituição Federal, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, SALVO:",
    difficulty: "FACIL",
    explanation: "Texto literal do art. 5º, XI, da CF/88. Essa é a regra mais cobrada em carreiras policiais.",
    correctExplanation: "Pode entrar sem consentimento: 1) flagrante delito; 2) desastre; 3) prestar socorro (estes três a qualquer hora); 4) determinação judicial (ESTE APENAS DURANTE O DIA).",
    wrongExplanation: "As alternativas que autorizam mandado judicial à noite ou por determinação administrativa estão erradas.",
    trap: "Achar que mandado judicial pode ser cumprido à noite.",
    reviewConcept: "CF/88, Art. 5º: Inviolabilidade de domicílio e suas exceções.",
    options: [
      { text: "em caso de flagrante delito ou desastre, apenas durante o dia.", isCorrect: false, explanation: "Incorreto. Flagrante e desastre pode ser de dia OU de noite." },
      { text: "por determinação de autoridade policial, durante o dia ou à noite.", isCorrect: false, explanation: "Incorreto. Determinação deve ser JUDICIAL, e só de dia." },
      { text: "em caso de flagrante delito, desastre, para prestar socorro, ou, durante o dia, por determinação judicial.", isCorrect: true, explanation: "Correto. Letra literal da CF." },
      { text: "por ordem escrita do Ministério Público, exclusivamente durante o dia.", isCorrect: false, explanation: "Incorreto. A ordem deve ser judicial." },
      { text: "por determinação judicial, em qualquer horário, em casos de crimes hediondos.", isCorrect: false, explanation: "Incorreto. Determinação judicial para entrar em domicílio sem consentimento é SÓ durante o dia." }
    ]
  },
  {
    subjectSlug: "direitos-humanos",
    topicTitle: "Tratados internacionais e controle de convencionalidade",
    statement: "De acordo com a Constituição Federal e o entendimento do STF, os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes a:",
    difficulty: "MEDIA",
    explanation: "Esta é a regra do art. 5º, §3º da CF/88, introduzida pela EC 45/2004.",
    correctExplanation: "Se aprovado com o rito especial (2 casas, 2 turnos, 3/5 dos votos), o tratado entra no Brasil com status de Emenda Constitucional.",
    wrongExplanation: "Se não tiver esse rito especial, o tratado de DH tem status Supralegal (acima da lei, abaixo da CF).",
    trap: "Confundir o status Supralegal (regra geral) com o status Constitucional (rito especial).",
    reviewConcept: "Hierarquia das Normas: Status dos Tratados de Direitos Humanos.",
    options: [
      { text: "Leis Ordinárias.", isCorrect: false, explanation: "Incorreto. Isso vale para tratados COMUNS." },
      { text: "Leis Complementares.", isCorrect: false, explanation: "Incorreto." },
      { text: "Emendas Constitucionais.", isCorrect: true, explanation: "Correto. Atingiu o quórum qualificado." },
      { text: "Normas Supralegais.", isCorrect: false, explanation: "Incorreto. Supralegal é o tratado de DH aprovado por rito simples." },
      { text: "Cláusulas Pétreas intangíveis.", isCorrect: false, explanation: "Incorreto. Equivalem a emendas." }
    ]
  },
  {
    subjectSlug: "direitos-humanos",
    topicTitle: "Lei de Migração e combate à tortura",
    statement: "Segundo a Lei nº 9.455/1997 (Lei de Tortura), é INCORRETO afirmar que:",
    difficulty: "MEDIA",
    explanation: "A lei de tortura traz regras severas para esse crime hediondo. O crime de tortura é inafiançável e insuscetível de graça ou anistia.",
    correctExplanation: "Diferente de outros crimes comuns, a tortura não admite aplicação de fiança nem perdão presidencial (graça/anistia).",
    wrongExplanation: "A alternativa incorreta dirá que admite fiança ou que a pena inicia no regime aberto.",
    trap: "Achar que a tortura qualificada por resultado morte afasta a lei de tortura e joga pro homicídio (não, a tortura tem qualificadora própria de morte).",
    reviewConcept: "Lei 9.455/97: Características inafiançáveis e hediondas da tortura.",
    options: [
      { text: "O crime de tortura é inafiançável.", isCorrect: false, explanation: "Correto pela lei. A questão pede a INCORRETA." },
      { text: "O crime de tortura é insuscetível de graça ou anistia.", isCorrect: false, explanation: "Correto pela lei." },
      { text: "A condenação acarretará a perda do cargo, função ou emprego público.", isCorrect: false, explanation: "Correto. É efeito automático da condenação." },
      { text: "O condenado por crime de tortura iniciará o cumprimento da pena em regime aberto, desde que primário.", isCorrect: true, explanation: "INCORRETA. O início do cumprimento é OBRIGATORIAMENTE em regime fechado." },
      { text: "A pena é aumentada se o crime for cometido por agente público.", isCorrect: false, explanation: "Correto. Há aumento de 1/6 a 1/3." }
    ]
  },
  {
    subjectSlug: "direitos-humanos",
    topicTitle: "Uso de instrumentos de menor potencial ofensivo",
    statement: "A Lei nº 13.060/2014 disciplina o uso de instrumentos de menor potencial ofensivo pelos agentes de segurança. De acordo com a referida lei, é VEDADO o uso de arma de fogo:",
    difficulty: "FACIL",
    explanation: "A lei estabelece regras claras para proteger a vida e evitar excesso policial. O uso letal é medida extrema.",
    correctExplanation: "A lei veda usar arma de fogo contra pessoa em fuga que esteja desarmada ou que não represente risco imediato de morte ou lesão aos agentes ou terceiros.",
    wrongExplanation: "Não é vedado atirar em sequestradores, atiradores ativos ou em legítima defesa.",
    trap: "Achar que se o suspeito furar um bloqueio e fugir, pode atirar (se ele não estiver atirando ou pondo vidas em risco, não pode atirar).",
    reviewConcept: "Uso Progressivo da Força e Lei 13.060/14.",
    options: [
      { text: "Em qualquer situação que envolva perseguição de veículos.", isCorrect: false, explanation: "Incorreto. Se o veículo estiver atirando, pode haver resposta." },
      { text: "Contra pessoa em fuga que esteja desarmada ou que não represente risco imediato de morte ou lesão.", isCorrect: true, explanation: "Correto. Disposição literal da lei." },
      { text: "Como primeiro recurso, mesmo quando houver risco de morte imediata para a vítima.", isCorrect: false, explanation: "Incorreto. Se a vítima for morrer agora, a arma é o recurso necessário." },
      { text: "Dentro de penitenciárias, devendo-se utilizar apenas contato físico.", isCorrect: false, explanation: "Incorreto. Não existe essa vedação absoluta na lei." },
      { text: "Em ocorrências de distúrbio civil, independentemente do armamento dos manifestantes.", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "direitos-humanos",
    topicTitle: "Constituição Federal: direitos e deveres individuais",
    statement: "O artigo 5º da CF/88 enumera diversos direitos relacionados à liberdade e ao devido processo legal. A respeito da prisão, é correto afirmar que:",
    difficulty: "MEDIA",
    explanation: "O processo penal constitucional é rígido quanto à liberdade. Ninguém será preso senão em flagrante delito ou por ordem de juiz.",
    correctExplanation: "A prisão ILEGAL deve ser imediatamente RELAXADA pela autoridade JUDICIÁRIA.",
    wrongExplanation: "O Delegado não 'relaxa' prisão. Habeas corpus não é concedido por qualquer autoridade. Prisão civil por dívida hoje só vale para pensão alimentícia (depositário infiel caiu).",
    trap: "Achar que a autoridade policial pode relaxar prisão ilegal (quem relaxa é o juiz).",
    reviewConcept: "Art 5º, CF/88: Garantias do preso e Relaxamento de Prisão Ilegal.",
    options: [
      { text: "Qualquer prisão ilegal deve ser imediatamente relaxada pela autoridade policial (Delegado).", isCorrect: false, explanation: "Incorreto. Relaxamento é feito pela autoridade JUDICIÁRIA." },
      { text: "É admitida a prisão civil por dívida para o depositário infiel e para o devedor de pensão alimentícia.", isCorrect: false, explanation: "Incorreto. Depositário infiel não é mais preso (Súmula Vinculante 25)." },
      { text: "O preso tem o direito de permanecer calado, não podendo o silêncio ser interpretado em prejuízo de sua defesa.", isCorrect: true, explanation: "Correto. Garantia do aviso de Miranda no Brasil (Aviso dos direitos)." },
      { text: "A identificação criminal será exigida de todos, independentemente da identificação civil.", isCorrect: false, explanation: "Incorreto. O civilmente identificado NÃO será submetido a identificação criminal, salvo exceções." },
      { text: "Ninguém será levado à prisão se prestar fiança, mesmo nos crimes inafiançáveis, se for réu primário.", isCorrect: false, explanation: "Incorreto. Crime inafiançável não admite fiança em nenhuma hipótese." }
    ]
  },
  {
    subjectSlug: "direitos-humanos",
    topicTitle: "Declaração Universal dos Direitos Humanos",
    statement: "A respeito das características fundamentais dos Direitos Humanos, o princípio que determina que a supressão de um direito compromete a eficácia dos demais é chamado de:",
    difficulty: "MEDIA",
    explanation: "As características dos DH são figurinhas carimbadas em provas. Universalidade (para todos), Indivisibilidade (é um pacote só), Interdependência (um afeta o outro).",
    correctExplanation: "A Interdependência (ou Indivisibilidade na mesma linha teórica) significa que não se pode gozar de liberdade (direito civil) sem o mínimo de sobrevivência (direito econômico). Estão interligados.",
    wrongExplanation: "Inalienabilidade significa que não podem ser vendidos/negociados.",
    trap: "Confundir Inalienabilidade (não se vende) com Interdependência.",
    reviewConcept: "Teoria Geral dos Direitos Humanos: Características.",
    options: [
      { text: "Universalidade.", isCorrect: false, explanation: "Incorreto. Significa que é para todos." },
      { text: "Imprescritibilidade.", isCorrect: false, explanation: "Incorreto. Significa que não perdem validade com o tempo." },
      { text: "Inalienabilidade.", isCorrect: false, explanation: "Incorreto. Significa que não podem ser transferidos comercialmente." },
      { text: "Interdependência / Indivisibilidade.", isCorrect: true, explanation: "Correto. Os direitos dependem uns dos outros para fazer sentido." },
      { text: "Irrenunciabilidade.", isCorrect: false, explanation: "Incorreto. Não se pode abrir mão deles definitivamente." }
    ]
  },
  {
    subjectSlug: "direitos-humanos",
    topicTitle: "Lei de Migração e combate à tortura",
    statement: "A nova Lei de Migração (Lei 13.445/2017) trouxe uma mudança de paradigma em relação ao antigo Estatuto do Estrangeiro. Assinale o princípio ou diretriz consagrado pela nova lei:",
    difficulty: "MEDIA",
    explanation: "O antigo estatuto via o estrangeiro como ameaça à Segurança Nacional. A nova lei vê sob a ótica dos Direitos Humanos.",
    correctExplanation: "A lei estabelece como princípio o repúdio à xenofobia, o repúdio ao racismo e a NÃO criminalização da migração.",
    wrongExplanation: "A lei proíbe deportar alguém apenas por estar irregular se isso ameaçar sua vida.",
    trap: "Achar que a lei nova afrouxou o sistema criminal (não criminalizar a migração não significa impunidade para crimes, apenas que o ato de migrar não é crime).",
    reviewConcept: "Lei de Migração: Princípios fundamentais.",
    options: [
      { text: "Criminalização da imigração irregular.", isCorrect: false, explanation: "Incorreto. A lei determina a NÃO criminalização da migração." },
      { text: "Adoção do paradigma da segurança nacional como critério primário.", isCorrect: false, explanation: "Incorreto. Esse era o paradigma da lei antiga." },
      { text: "Igualdade de tratamento e de oportunidades ao migrante e a seus familiares.", isCorrect: true, explanation: "Correto. É o princípio base da nova lei (DH)." },
      { text: "Proibição absoluta de extradição de qualquer migrante.", isCorrect: false, explanation: "Incorreto. Extradição criminal continua existindo." },
      { text: "Restrição do acesso ao SUS apenas para migrantes documentados.", isCorrect: false, explanation: "Incorreto. Têm acesso aos serviços públicos independentemente da situação documental." }
    ]
  },
  {
    subjectSlug: "direitos-humanos",
    topicTitle: "Tratados internacionais e controle de convencionalidade",
    statement: "O Pacto de San José da Costa Rica (Convenção Americana de Direitos Humanos) consagrou regras importantes no ordenamento brasileiro. Graças a ele e à jurisprudência do STF, no Brasil:",
    difficulty: "DIFICIL",
    explanation: "O Pacto proibiu a prisão civil por dívida, trazendo apenas UMA exceção: o devedor de pensão alimentícia. Isso fez o STF editar a Súmula Vinculante 25, declarando ilícita a prisão do depositário infiel.",
    correctExplanation: "A prisão do depositário infiel (que ainda consta na CF) tornou-se ilícita (inaplicável) por força da supralegalidade do Pacto de San José.",
    wrongExplanation: "A prisão do devedor de alimentos AINDA É LEGAL.",
    trap: "Achar que o Pacto proibiu QUALQUER prisão civil. A pensão alimentícia continua dando cadeia.",
    reviewConcept: "Controle de Convencionalidade e Prisão Civil.",
    options: [
      { text: "Tornou-se ilícita a prisão civil do devedor de pensão alimentícia.", isCorrect: false, explanation: "Incorreto. Essa prisão continua permitida." },
      { text: "Tornou-se ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.", isCorrect: true, explanation: "Correto. Súmula Vinculante 25 do STF." },
      { text: "Foi abolida a prisão preventiva no país.", isCorrect: false, explanation: "Incorreto. Prisões criminais continuam normais." },
      { text: "Ficou vedada a pena de trabalhos forçados, que era comum até então.", isCorrect: false, explanation: "Incorreto. A CF já vedava trabalhos forçados desde 1988." },
      { text: "O Brasil deixou de ter qualquer hipótese legal de extradição.", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "direitos-humanos",
    topicTitle: "Constituição Federal: direitos e deveres individuais",
    statement: "No que tange aos Remédios Constitucionais previstos no Art. 5º da CF/88, para proteger o direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade for autoridade pública, caberá:",
    difficulty: "FACIL",
    explanation: "É a definição literal de Mandado de Segurança.",
    correctExplanation: "Mandado de Segurança é a via residual para proteger direito líquido e certo.",
    wrongExplanation: "Habeas corpus é para liberdade de locomoção. Habeas data é para informações pessoais. Mandado de injunção é para omissão legislativa.",
    trap: "Confundir Mandado de Segurança com Mandado de Injunção.",
    reviewConcept: "Remédios Constitucionais (Art. 5º CF).",
    options: [
      { text: "Habeas Corpus.", isCorrect: false, explanation: "Incorreto. Protege locomoção." },
      { text: "Mandado de Segurança.", isCorrect: true, explanation: "Correto. É o remédio residual para direito líquido e certo." },
      { text: "Habeas Data.", isCorrect: false, explanation: "Incorreto. Protege acesso a informação." },
      { text: "Mandado de Injunção.", isCorrect: false, explanation: "Incorreto. Usado quando falta lei regulamentadora." },
      { text: "Ação Popular.", isCorrect: false, explanation: "Incorreto. Usada para anular ato lesivo ao patrimônio público." }
    ]
  },

  // DIREITO ADMINISTRATIVO (10 questões)
  {
    subjectSlug: "direito-administrativo-pmerj",
    topicTitle: "Princípios do Direito Administrativo",
    statement: "O Prefeito de um município determinou a colocação de placas de obras pela cidade contendo seu nome, foto e o slogan da sua campanha eleitoral. A conduta do Prefeito viola frontalmente qual princípio expresso da Administração Pública?",
    difficulty: "FACIL",
    explanation: "O art. 37, §1º da CF veda a promoção pessoal de autoridades ou servidores em publicidade de atos, programas ou obras. Isso ofende diretamente o princípio da Impessoalidade.",
    correctExplanation: "A impessoalidade proíbe que o agente público vincule realizações do Estado à sua figura pessoal.",
    wrongExplanation: "Embora fira também a moralidade, a violação frontal ao usar a máquina para promoção pessoal é a quebra da Impessoalidade.",
    trap: "Marcar Publicidade (a publicidade obriga a transparência, não autoriza promoção pessoal).",
    reviewConcept: "Princípios Constitucionais Expressos: Impessoalidade.",
    options: [
      { text: "Legalidade.", isCorrect: false, explanation: "Incorreto." },
      { text: "Impessoalidade.", isCorrect: true, explanation: "Correto. Vedação à promoção pessoal." },
      { text: "Eficiência.", isCorrect: false, explanation: "Incorreto." },
      { text: "Publicidade.", isCorrect: false, explanation: "Incorreto." },
      { text: "Razoabilidade.", isCorrect: false, explanation: "Incorreto. É um princípio implícito." }
    ]
  },
  {
    subjectSlug: "direito-administrativo-pmerj",
    topicTitle: "Organização administrativa e órgãos públicos",
    statement: "O Estado decide criar uma nova entidade para prestar serviço de emissão de CNH. A lei aprovada cria essa entidade com personalidade jurídica de direito público, patrimônio e receita próprios. Trata-se da criação de uma:",
    difficulty: "MEDIA",
    explanation: "Entidades criadas por lei, com personalidade de direito público, que executam atividades típicas de Estado, são Autarquias (ex: Detran, INSS).",
    correctExplanation: "As Autarquias são as únicas entidades da administração indireta que possuem personalidade jurídica de DIREITO PÚBLICO e são criadas diretamente por lei.",
    wrongExplanation: "Empresas Públicas e Sociedades de Economia Mista têm personalidade de direito PRIVADO.",
    trap: "Achar que órgão tem personalidade jurídica.",
    reviewConcept: "Administração Indireta: Autarquias.",
    options: [
      { text: "Empresa Pública.", isCorrect: false, explanation: "Incorreto. Tem personalidade de direito privado." },
      { text: "Sociedade de Economia Mista.", isCorrect: false, explanation: "Incorreto. Tem personalidade de direito privado." },
      { text: "Fundação Pública de direito privado.", isCorrect: false, explanation: "Incorreto." },
      { text: "Autarquia.", isCorrect: true, explanation: "Correto. Criada por lei, PJ de direito público." },
      { text: "Órgão Independente.", isCorrect: false, explanation: "Incorreto. Órgão não tem personalidade jurídica." }
    ]
  },
  {
    subjectSlug: "direito-administrativo-pmerj",
    topicTitle: "Poderes administrativos",
    statement: "Durante uma blitz, um policial militar constata que um veículo está com pneu careca e sem licenciamento. Imediatamente, ele determina a retenção e remoção do veículo ao pátio, sem precisar de autorização de um juiz. Esse ato decorre diretamente do atributo do Poder de Polícia denominado:",
    difficulty: "MEDIA",
    explanation: "Os atributos do poder de polícia são DAC: Discricionariedade, Autoexecutoriedade e Coercibilidade. A execução imediata sem ordem judicial é a Autoexecutoriedade.",
    correctExplanation: "Autoexecutoriedade permite à Administração executar suas decisões por meios próprios, sem necessitar de autorização prévia do Poder Judiciário.",
    wrongExplanation: "Coercibilidade é o uso da força. Discricionariedade é a margem de escolha. Imperatividade é atributo do ato, não do poder em si.",
    trap: "Confundir autoexecutoriedade (fazer sem o juiz) com coercibilidade (usar a força física se ele resistir).",
    reviewConcept: "Poder de Polícia: Atributos.",
    options: [
      { text: "Coercibilidade.", isCorrect: false, explanation: "Incorreto. Refere-se à imposição forçada." },
      { text: "Imperatividade.", isCorrect: false, explanation: "Incorreto. É a criação unilateral de obrigação." },
      { text: "Autoexecutoriedade.", isCorrect: true, explanation: "Correto. Executar o ato diretamente sem pedir ao juiz." },
      { text: "Discricionariedade.", isCorrect: false, explanation: "Incorreto. É a margem de escolha legal." },
      { text: "Exigibilidade.", isCorrect: false, explanation: "Incorreto. Refere-se às multas." }
    ]
  },
  {
    subjectSlug: "direito-administrativo-pmerj",
    topicTitle: "Atos e processo administrativo",
    statement: "A Administração Pública concedeu uma licença para construção. Posteriormente, percebeu que a concessão ofendeu normas de zoneamento urbano (ato ilegal). Neste caso, a Administração DEVE desfazer o ato por meio da:",
    difficulty: "FACIL",
    explanation: "Ato ILEGAL sofre ANULAÇÃO. Ato legal mas INCONVENIENTE sofre REVOGAÇÃO. Súmula 473 STF.",
    correctExplanation: "A anulação (ou invalidação) é o desfazimento de um ato administrativo ilegal, operando efeitos ex tunc (retroativos).",
    wrongExplanation: "Não é revogação (que é para ato válido). Não é cassação (que é quando o particular deixa de cumprir os requisitos).",
    trap: "Achar que revogação e anulação são sinônimos.",
    reviewConcept: "Desfazimento do Ato Administrativo: Anulação vs. Revogação.",
    options: [
      { text: "Revogação, com efeitos ex nunc.", isCorrect: false, explanation: "Incorreto. Revoga-se ato válido/legal." },
      { text: "Anulação, com efeitos ex tunc.", isCorrect: true, explanation: "Correto. Ilegalidade gera anulação, apagando efeitos desde a origem (ex tunc)." },
      { text: "Cassação, com efeitos ex nunc.", isCorrect: false, explanation: "Incorreto. Cassação é por culpa do beneficiário." },
      { text: "Caducidade, com efeitos ex tunc.", isCorrect: false, explanation: "Incorreto. Caducidade é por superveniência de lei nova." },
      { text: "Convalidação, com efeitos ex nunc.", isCorrect: false, explanation: "Incorreto. O ato tem vício material (zoneamento), é insanável." }
    ]
  },
  {
    subjectSlug: "direito-administrativo-pmerj",
    topicTitle: "Legislação aplicada à PMERJ",
    statement: "De acordo com a Constituição Federal e o Estatuto dos Policiais Militares (Lei 443/81), a Polícia Militar do Estado do Rio de Janeiro é:",
    difficulty: "FACIL",
    explanation: "Regra clássica da destinação e subordinação das PMs no Brasil (Art. 144, § 6º da CF).",
    correctExplanation: "Força auxiliar e reserva do Exército Brasileiro, subordinando-se, juntamente com a Polícia Civil, ao Governador do Estado.",
    wrongExplanation: "A PM não é subordinada às Forças Armadas no dia a dia. Ela não é da União.",
    trap: "Achar que por ser 'reserva do Exército' o policial responde ao General do Exército no serviço diário (responde ao Governador).",
    reviewConcept: "CF e Estatuto PMERJ: Natureza Jurídica e Subordinação da Corporação.",
    options: [
      { text: "Força armada estadual, subordinada diretamente ao Ministério da Defesa.", isCorrect: false, explanation: "Incorreto. É subordinada ao Governador." },
      { text: "Força auxiliar e reserva do Exército, subordinando-se ao Governador do Estado.", isCorrect: true, explanation: "Correto. Disposição literal da CF e Estatuto." },
      { text: "Órgão do Poder Judiciário, responsável por executar ordens de prisão.", isCorrect: false, explanation: "Incorreto. É órgão do Poder Executivo." },
      { text: "Força autônoma independente, chefiada pelo Comandante-Geral de forma vitalícia.", isCorrect: false, explanation: "Incorreto. O Cmt Geral é de livre nomeação do Governador." },
      { text: "Força de segurança nacional, operada conjuntamente pela União e pelo Estado.", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "direito-administrativo-pmerj",
    topicTitle: "Princípios do Direito Administrativo",
    statement: "O poder de autotutela da Administração Pública:",
    difficulty: "MEDIA",
    explanation: "Autotutela é o controle que a própria Administração exerce sobre seus atos. Ela mesma vigia a validade (anulando ilegais) e o mérito (revogando inconvenientes).",
    correctExplanation: "Súmula 473 do STF resume a autotutela: anular seus próprios atos quando ilegais ou revogá-los por conveniência.",
    wrongExplanation: "Não depende do Judiciário (isso seria tutela jurisdicional). Não se confunde com autarquia (descentralização).",
    trap: "Achar que para anular um ato a Prefeitura precisa pedir autorização ao Juiz.",
    reviewConcept: "Princípios Implícitos: Autotutela.",
    options: [
      { text: "Depende de prévia autorização judicial para anular um ato ilícito.", isCorrect: false, explanation: "Incorreto. A Administração faz de ofício (ela mesma)." },
      { text: "Significa que a Administração pode anular seus próprios atos, quando ilegais, e revogá-los, quando inconvenientes.", isCorrect: true, explanation: "Correto. É o exato teor da Súmula 473 do STF." },
      { text: "Aplica-se apenas aos atos vinculados, sendo proibida nos atos discricionários.", isCorrect: false, explanation: "Incorreto. A revogação recai justamente sobre atos discricionários." },
      { text: "É o princípio que proíbe o nepotismo nos cargos comissionados.", isCorrect: false, explanation: "Incorreto. Isso seria a Moralidade/Impessoalidade." },
      { text: "Obriga a criação de Agências Reguladoras independentes.", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "direito-administrativo-pmerj",
    topicTitle: "Atos e processo administrativo",
    statement: "O elemento do ato administrativo que responde à pergunta 'Qual é a razão de fato e de direito que justificou a prática do ato?' é o(a):",
    difficulty: "MEDIA",
    explanation: "O MOTIVO é a situação fática e a base legal que levam o agente a praticar o ato (ex: Excesso de velocidade (fato) + Art. 218 CTB (direito) = Multa).",
    correctExplanation: "O motivo é o pressuposto de fato e de direito que serve de fundamento ao ato administrativo.",
    wrongExplanation: "Finalidade é 'para que' (sempre o interesse público). Objeto é 'o que' a Administração decidiu (o conteúdo do ato).",
    trap: "Confundir Motivo (o porquê) com Motivação (a escrita desse porquê no papel) ou com Finalidade (o objetivo futuro).",
    reviewConcept: "Elementos do Ato Administrativo (COMFIFOMOB).",
    options: [
      { text: "Finalidade.", isCorrect: false, explanation: "Incorreto. Finalidade é o fim público almejado." },
      { text: "Objeto.", isCorrect: false, explanation: "Incorreto. Objeto é o conteúdo do ato, a decisão." },
      { text: "Forma.", isCorrect: false, explanation: "Incorreto. É o revestimento externo do ato (escrito)." },
      { text: "Motivo.", isCorrect: true, explanation: "Correto. Situação de fato e base de direito." },
      { text: "Competência.", isCorrect: false, explanation: "Incorreto. É quem tem o poder legal para fazer." }
    ]
  },
  {
    subjectSlug: "direito-administrativo-pmerj",
    topicTitle: "Poderes administrativos",
    statement: "Um policial rodoviário constata uma grave irregularidade em um ônibus escolar e decide aplicar duas penalidades: aplicar multa (ato X) e reter o veículo imediatamente (ato Y). Sobre a aplicação do Poder de Polícia, é correto afirmar:",
    difficulty: "DIFICIL",
    explanation: "O Poder de Polícia possui atributos, mas nem todos os atos têm os mesmos atributos. A Multa NÃO é autoexecutória (o Estado não arranca o dinheiro do banco do cidadão, ele tem que processar a dívida ativa se ele não pagar). Já a Retenção do veículo é autoexecutória (a polícia encosta o guincho e leva).",
    correctExplanation: "A retenção é autoexecutória. A multa NÃO é autoexecutória (é exigível).",
    wrongExplanation: "Dizer que a multa é autoexecutória é um erro fatal.",
    trap: "Achar que a multa tem autoexecutoriedade. Não tem! A multa tem EXIGIBILIDADE.",
    reviewConcept: "Poder de Polícia: Autoexecutoriedade e Multas.",
    options: [
      { text: "Ambos os atos (multa e retenção) possuem o atributo da autoexecutoriedade plena.", isCorrect: false, explanation: "Incorreto. Multa não tem autoexecutoriedade." },
      { text: "A multa é autoexecutória, mas a retenção do veículo depende de mandado judicial.", isCorrect: false, explanation: "Incorreto. É o inverso." },
      { text: "A retenção do veículo é autoexecutória, mas a cobrança forçada da multa depende do Poder Judiciário.", isCorrect: true, explanation: "Correto. O Estado não penhora bens sem ordem do Juiz para pagar multa." },
      { text: "Nenhum dos atos é autoexecutório, ambos dependem de decisão judicial prévia.", isCorrect: false, explanation: "Incorreto. Retenção é autoexecutória." },
      { text: "A multa ofende a discricionariedade do ato administrativo.", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "direito-administrativo-pmerj",
    topicTitle: "Legislação aplicada à PMERJ",
    statement: "Segundo a legislação aplicada aos militares do Estado, o policial militar que cometer crime militar será processado e julgado perante a:",
    difficulty: "MEDIA",
    explanation: "A Constituição (Art. 125, §4º) estabelece que os Estados organizarão sua Justiça Militar para julgar os militares estaduais nos crimes militares.",
    correctExplanation: "A competência é da Justiça Militar Estadual. (Composta pelo Juiz de Direito do Juízo Militar e os Conselhos de Justiça).",
    wrongExplanation: "Não é a Justiça Militar da União (STM, que julga Exército, Marinha, Aeronáutica). Não é a Justiça Federal.",
    trap: "Marcar Justiça Militar da União, já que a PM é 'reserva do Exército'. A PM é reserva do exército, mas tem justiça própria do Estado.",
    reviewConcept: "CF e Justiça Militar Estadual.",
    options: [
      { text: "Justiça Federal.", isCorrect: false, explanation: "Incorreto. JF julga crimes contra a União." },
      { text: "Justiça Militar da União.", isCorrect: false, explanation: "Incorreto. JMU julga Forças Armadas." },
      { text: "Justiça Comum Estadual, Vara Criminal Genérica.", isCorrect: false, explanation: "Incorreto. Existe vara específica (Auditoria Militar)." },
      { text: "Justiça Militar do Estado.", isCorrect: true, explanation: "Correto. Inteligência do Art. 125 da CF." },
      { text: "Superior Tribunal de Justiça (STJ) em foro originário.", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "direito-administrativo-pmerj",
    topicTitle: "Organização administrativa e órgãos públicos",
    statement: "O batalhão de Polícia Militar em que você atua é classificado, no organograma do Estado, como um:",
    difficulty: "FACIL",
    explanation: "A PM e seus batalhões não têm CNPJ próprio (personalidade jurídica). São divisões internas do Estado (Secretaria de Segurança/Governadoria). Isso significa que são ÓRGÃOS, fruto de DESCONCENTRAÇÃO.",
    correctExplanation: "É um órgão da Administração Direta, despersonalizado, fruto de desconcentração administrativa.",
    wrongExplanation: "Batalhão não é autarquia, nem empresa, nem fruto de descentralização.",
    trap: "Achar que a PM é uma Autarquia (ela não foi criada com personalidade jurídica própria, ela compõe o próprio Estado).",
    reviewConcept: "Administração Direta: Desconcentração e Órgãos Públicos.",
    options: [
      { text: "Ente da Administração Indireta (Autarquia).", isCorrect: false, explanation: "Incorreto. PM não é autarquia." },
      { text: "Órgão da Administração Direta, fruto de desconcentração.", isCorrect: true, explanation: "Correto. Divisão interna sem CNPJ próprio." },
      { text: "Órgão da Administração Indireta, fruto de descentralização.", isCorrect: false, explanation: "Incorreto. Indireta é descentralização, não cria órgãos, cria entidades." },
      { text: "Entidade do terceiro setor.", isCorrect: false, explanation: "Incorreto. (OS, OSCIP)." },
      { text: "Empresa Pública Estadual.", isCorrect: false, explanation: "Incorreto." }
    ]
  },

  // DIREITO PENAL E PROCESSO PENAL (10 questões)
  {
    subjectSlug: "direito-penal-processual-penal",
    topicTitle: "Aplicação da lei penal, crime e imputabilidade",
    statement: "Tício, portando arma de fogo de forma legal, caminha na rua quando avista um inimigo mortal vindo em sua direção com um facão e gritando que irá matá-lo. Tício efetua um disparo que mata o agressor. A conduta de Tício está amparada pela:",
    difficulty: "FACIL",
    explanation: "O cenário apresenta uma agressão injusta (o inimigo com facão) e atual/iminente (vindo em sua direção). Tício repeliu essa agressão usando os meios necessários. Trata-se do clássico exemplo de Legítima Defesa.",
    correctExplanation: "Legítima defesa (Art. 25 CP): repelir injusta agressão, atual ou iminente, a direito seu ou de outrem.",
    wrongExplanation: "Não é estado de necessidade (aí não haveria 'agressão', haveria um perigo geral, como um naufrágio ou animal).",
    trap: "Confundir Legítima Defesa com Estado de Necessidade.",
    reviewConcept: "Excludentes de Ilicitude: Legítima Defesa.",
    options: [
      { text: "Estado de Necessidade.", isCorrect: false, explanation: "Incorreto. Exige 'perigo atual', não 'agressão injusta'." },
      { text: "Estrito Cumprimento do Dever Legal.", isCorrect: false, explanation: "Incorreto. Ele agiu como cidadão defendendo a própria vida, não cumprindo dever de ofício." },
      { text: "Legítima Defesa.", isCorrect: true, explanation: "Correto. Repulsa a agressão injusta e iminente." },
      { text: "Exercício Regular de Direito.", isCorrect: false, explanation: "Incorreto." },
      { text: "Inimputabilidade penal.", isCorrect: false, explanation: "Incorreto. Tício é imputável e sua ação foi típica, mas lícita." }
    ]
  },
  {
    subjectSlug: "direito-penal-processual-penal",
    topicTitle: "Penas, ação penal e parte especial",
    statement: "Um policial militar, ao revistar um cidadão em atitude suspeita, encontra um celular caro. Para não levar o cidadão à delegacia, o policial exige que o cidadão transfira R$ 1.000,00 via PIX para sua conta. O crime cometido pelo policial é:",
    difficulty: "MEDIA",
    explanation: "O verbo núcleo do crime é EXIGIR para si ou outrem, vantagem indevida, em razão da função. A diferença clássica da FGV: SOLICITAR/RECEBER = Corrupção Passiva. EXIGIR = Concussão.",
    correctExplanation: "Ato de 'exigir' vantagem indevida (dinheiro) em razão da função caracteriza Concussão (Art. 316, CP).",
    wrongExplanation: "Não é extorsão comum porque o policial usa a capa da função pública para impor temor (se fosse ameaça de violência física solta, seria extorsão). Não é corrupção porque ele não apenas 'solicitou', ele 'exigiu'.",
    trap: "Marcar Corrupção Passiva. O pulo do gato está no verbo 'EXIGIR'.",
    reviewConcept: "Crimes contra a Administração Pública: Concussão vs. Corrupção Passiva.",
    options: [
      { text: "Corrupção Passiva.", isCorrect: false, explanation: "Incorreto. Corrupção passiva os verbos são solicitar, receber ou aceitar promessa." },
      { text: "Peculato.", isCorrect: false, explanation: "Incorreto. Peculato é subtrair/desviar bem de que tem posse." },
      { text: "Prevaricação.", isCorrect: false, explanation: "Incorreto. É deixar de fazer algo por sentimento pessoal." },
      { text: "Concussão.", isCorrect: true, explanation: "Correto. Exigir vantagem indevida." },
      { text: "Extorsão mediante sequestro.", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "direito-penal-processual-penal",
    topicTitle: "Legislação penal especial",
    statement: "De acordo com a Lei de Crimes Hediondos (Lei 8.072/1990), o indivíduo condenado por tráfico ilícito de entorpecentes (crime equiparado a hediondo) está sujeito a qual restrição legal?",
    difficulty: "MEDIA",
    explanation: "Os crimes hediondos e equiparados (3T: Tortura, Tráfico, Terrorismo) possuem vedações constitucionais e legais severas.",
    correctExplanation: "Eles são inafiançáveis e insuscetíveis de graça (perdão presidencial), anistia (perdão do Congresso) ou indulto.",
    wrongExplanation: "Dizer que devem ser cumpridos em regime 'integralmente' fechado é erro (o STF declarou isso inconstitucional há muitos anos, admite-se progressão). Dizer que a pena é de morte no Brasil é absurdo.",
    trap: "Achar que cumpre a pena inteira sem progredir de regime.",
    reviewConcept: "Crimes Hediondos: Consequências processuais e constitucionais.",
    options: [
      { text: "Cumprimento da pena em regime integralmente fechado, sem direito a progressão.", isCorrect: false, explanation: "Incorreto. Eles TÊM direito à progressão (2/5 ou 3/5)." },
      { text: "Impossibilidade absoluta de ser preso em flagrante delito.", isCorrect: false, explanation: "Incorreto. Absurdo." },
      { text: "Inafiançabilidade e insuscetibilidade de graça, anistia ou indulto.", isCorrect: true, explanation: "Correto. Regra constitucional (Art 5º, XLIII)." },
      { text: "Direito automático a cumprir pena em prisão domiciliar especial.", isCorrect: false, explanation: "Incorreto." },
      { text: "Julgamento originário pelo Supremo Tribunal Federal, em razão da gravidade.", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "direito-penal-processual-penal",
    topicTitle: "Provas, prisão e medidas cautelares",
    statement: "Uma guarnição da PM chega a um galpão após ser acionada via 190 por gritos de socorro. Os policiais não têm mandado de busca. Ao entrarem (invocando flagrante), encontram um laboratório de refino de drogas e prendem os ocupantes. Essa prisão e a apreensão das drogas são:",
    difficulty: "MEDIA",
    explanation: "A situação configura Estado de Flagrante (crime permanente de tráfico). O art. 5º da CF permite a violação de domicílio sem mandado em caso de flagrante delito.",
    correctExplanation: "Como havia situação justificadora (fundadas razões — gritos, crime permanente), a entrada é lícita, as provas são lícitas e a prisão em flagrante é válida.",
    wrongExplanation: "Afirmar que a prova é nula/ilícita (fruto da árvore envenenada) porque não tinham mandado é erro, já que o flagrante excepciona a exigência de mandado.",
    trap: "O aluno achar que a polícia NUNCA pode entrar em domicílio sem a ordem do juiz.",
    reviewConcept: "Prisão em flagrante: Exceção à inviolabilidade de domicílio. Provas lícitas.",
    options: [
      { text: "Nulas (ilícitas), pois qualquer entrada em domicílio exige mandado judicial prévio.", isCorrect: false, explanation: "Incorreto. Flagrante é exceção ao mandado." },
      { text: "Lícitas, pois o tráfico de drogas é crime permanente, o que caracteriza flagrante delito constante, permitindo a entrada.", isCorrect: true, explanation: "Correto. Jurisprudência pacífica." },
      { text: "Ilícitas quanto às provas materiais, mas válidas quanto à prisão das pessoas.", isCorrect: false, explanation: "Incorreto. Se a entrada foi lícita, a apreensão também é." },
      { text: "Válidas apenas se ocorridas durante o dia (das 06h às 18h).", isCorrect: false, explanation: "Incorreto. Flagrante autoriza entrada dia OU noite." },
      { text: "Lícitas apenas se autorizadas pelo Delegado de Polícia no momento da entrada.", isCorrect: false, explanation: "Incorreto. Não precisa pedir autorização." }
    ]
  },
  {
    subjectSlug: "direito-penal-processual-penal",
    topicTitle: "Inquérito policial e ação penal",
    statement: "O Inquérito Policial (IP) é uma fase pré-processual. Em relação às suas características, é correto afirmar que o IP é:",
    difficulty: "FACIL",
    explanation: "Características do IP: Inquisitivo (sem ampla defesa plena), Sigiloso (para os investigados; advogado tem acesso aos autos já documentados), Escrito e Dispensável (se o MP já tiver provas para denunciar, não precisa instaurar IP).",
    correctExplanation: "Ele é dispensável. Se a vítima leva um vídeo em 4K e confessão escrita ao MP, o promotor pode oferecer denúncia direto.",
    wrongExplanation: "Não é público (é sigiloso). Não é obrigatório (é dispensável). Não tem contraditório pleno.",
    trap: "Achar que para haver um processo criminal, PRECISA OBRIGATORIAMENTE haver Inquérito Policial antes.",
    reviewConcept: "Inquérito Policial: Características (Dispensabilidade).",
    options: [
      { text: "Indispensável, não podendo o Ministério Público processar alguém sem o IP prévio.", isCorrect: false, explanation: "Incorreto. O IP é dispensável." },
      { text: "Inquisitivo, escrito, sigiloso (com restrições) e dispensável.", isCorrect: true, explanation: "Correto. Reúne as principais características do IP." },
      { text: "Totalmente regido pelo princípio da ampla defesa e contraditório amplo.", isCorrect: false, explanation: "Incorreto. Não há contraditório no IP." },
      { text: "Público, permitindo o acesso de qualquer cidadão às oitivas em andamento.", isCorrect: false, explanation: "Incorreto. O IP é sigiloso." },
      { text: "Um processo administrativo de competência exclusiva de juízes criminais.", isCorrect: false, explanation: "Incorreto. É conduzido pelo Delegado (Polícia Judiciária)." }
    ]
  },
  {
    subjectSlug: "direito-penal-processual-penal",
    topicTitle: "Aplicação da lei penal, crime e imputabilidade",
    statement: "João, de 17 anos e 11 meses de idade, comete um homicídio brutal. Três meses depois, ele é capturado pela polícia (já tendo completado 18 anos). Segundo o Código Penal e a teoria adotada no Brasil sobre o Tempo do Crime:",
    difficulty: "MEDIA",
    explanation: "O Brasil adota a Teoria da Atividade (Art. 4º CP): considera-se praticado o crime no momento da AÇÃO ou OMISSÃO, ainda que outro seja o momento do resultado. João agiu com 17 anos.",
    correctExplanation: "Se ele tinha 17 anos na data da ação, ele era INIMPUTÁVEL no momento do crime. Portanto, responderá pelo Estatuto da Criança e do Adolescente (ato infracional), mesmo tendo 18 anos na captura.",
    wrongExplanation: "Ele não pode ser julgado como adulto com base na data da prisão ou do resultado.",
    trap: "Achar que porque ele fez 18 anos antes de ser preso, vai pra cadeia de adulto.",
    reviewConcept: "Tempo do Crime: Teoria da Atividade e Imputabilidade.",
    options: [
      { text: "João responderá perante o juízo criminal comum como adulto, pois na data da prisão já era imputável.", isCorrect: false, explanation: "Incorreto. O que importa é a data do crime (ação)." },
      { text: "João é inimputável para este crime e responderá por ato infracional perante o juizado da infância e juventude.", isCorrect: true, explanation: "Correto. O momento do crime (teoria da atividade) determina a idade." },
      { text: "João não responderá por nada, pois houve conflito de leis no tempo.", isCorrect: false, explanation: "Incorreto." },
      { text: "Ele responderá pelo Código Penal, mas com direito à diminuição de pena por semi-imputabilidade.", isCorrect: false, explanation: "Incorreto. Menor de 18 é inimputável absoluto." },
      { text: "O tempo do crime é o do resultado, logo ele responderá se a vítima morreu quando ele já tinha 18 anos.", isCorrect: false, explanation: "Incorreto. O Brasil adota a teoria da Ação/Atividade." }
    ]
  },
  {
    subjectSlug: "direito-penal-processual-penal",
    topicTitle: "Provas, prisão e medidas cautelares",
    statement: "O artigo 302 do Código Processual Penal define quem se considera em flagrante delito. A situação em que o suspeito é perseguido, logo após a infração, em situação que faça presumir ser ele o autor, caracteriza o flagrante:",
    difficulty: "MEDIA",
    explanation: "Classificação doutrinária e legal do flagrante. Próprio (cometendo ou acabou de cometer), Impróprio/Quase flagrante (é perseguido logo após), Presumido/Ficção (é encontrado logo depois com objetos/armas).",
    correctExplanation: "A perseguição ininterrupta logo após o crime caracteriza o Flagrante Impróprio (também chamado de Quase-Flagrante).",
    wrongExplanation: "Não é flagrante próprio (ele já terminou o ato e fugiu). Não é flagrante forjado (isso seria crime da polícia).",
    trap: "Não saber os nomes doutrinários dados aos incisos do art 302 do CPP.",
    reviewConcept: "Prisão em Flagrante: Tipos de flagrante.",
    options: [
      { text: "Próprio.", isCorrect: false, explanation: "Incorreto. Próprio é quando está executando ou acabou de executar no local." },
      { text: "Impróprio (ou quase-flagrante).", isCorrect: true, explanation: "Correto. É o inciso III do 302 (perseguição)." },
      { text: "Presumido.", isCorrect: false, explanation: "Incorreto. Presumido é o inciso IV (encontrado com objetos)." },
      { text: "Forjado.", isCorrect: false, explanation: "Incorreto. É o flagrante ilegal plantado por alguém." },
      { text: "Provocado (ou preparado).", isCorrect: false, explanation: "Incorreto. Ocorre quando a polícia induz o criminoso a cometer o crime, tornando crime impossível." }
    ]
  },
  {
    subjectSlug: "direito-penal-processual-penal",
    topicTitle: "Penas, ação penal e parte especial",
    statement: "Nos crimes de Ação Penal Pública Condicionada (ex: ameaça, estelionato em regra), qual é a condição de procedibilidade sem a qual o Ministério Público NÃO pode oferecer a denúncia?",
    difficulty: "FACIL",
    explanation: "Ação condicionada exige que a vítima manifeste o desejo de ver o autor processado.",
    correctExplanation: "Essa manifestação de vontade da vítima se chama REPRESENTAÇÃO (ou requisição do Ministro da Justiça, em casos específicos).",
    wrongExplanation: "Queixa-crime é a peça inicial da ação PRIVADA (feita pelo advogado da vítima). Flagrante não é condição de ação penal. Sentença é o fim.",
    trap: "Confundir representação com queixa-crime.",
    reviewConcept: "Ação Penal: Condições de Procedibilidade.",
    options: [
      { text: "Habeas corpus preventivo.", isCorrect: false, explanation: "Incorreto." },
      { text: "Queixa-crime.", isCorrect: false, explanation: "Incorreto. Queixa-crime é para ação Privada." },
      { text: "Representação do ofendido (vítima) ou de seu representante legal.", isCorrect: true, explanation: "Correto. Sem isso, o promotor não pode agir." },
      { text: "Decreto de Prisão Preventiva expedido pelo juiz.", isCorrect: false, explanation: "Incorreto." },
      { text: "Termo de confissão do indiciado na delegacia.", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "direito-penal-processual-penal",
    topicTitle: "Legislação penal especial",
    statement: "O Estatuto do Desarmamento (Lei 10.826/2003) diferencia porte e posse de arma. João, civil, mantinha escondido embaixo do travesseiro de sua cama, em sua casa, um revólver calibre .38 sem qualquer registro. João foi preso em flagrante por:",
    difficulty: "MEDIA",
    explanation: "Posse é ter a arma DENTRO de casa ou no local de trabalho do titular. Porte é circular com a arma nas ruas.",
    correctExplanation: "Como a arma estava na residência dele, configura-se Posse Irregular de Arma de Fogo de Uso Permitido (Art. 12 da Lei).",
    wrongExplanation: "Ele não estava portando nas ruas (então não é Porte). O calibre .38 é de uso permitido, não restrito.",
    trap: "Achar que ter arma sem registro na gaveta do quarto é porte de arma.",
    reviewConcept: "Estatuto do Desarmamento: Posse vs. Porte de arma de fogo.",
    options: [
      { text: "Porte ilegal de arma de fogo de uso permitido.", isCorrect: false, explanation: "Incorreto. Porte é fora da residência/trabalho." },
      { text: "Porte ilegal de arma de fogo de uso restrito.", isCorrect: false, explanation: "Incorreto." },
      { text: "Posse irregular de arma de fogo de uso permitido.", isCorrect: true, explanation: "Correto. Estava no interior da residência." },
      { text: "Posse ilegal de arma de fogo de uso restrito.", isCorrect: false, explanation: "Incorreto. Calibre 38 é uso permitido." },
      { text: "Contrabando de arma de fogo.", isCorrect: false, explanation: "Incorreto." }
    ]
  },
  {
    subjectSlug: "direito-penal-processual-penal",
    topicTitle: "Penas, ação penal e parte especial",
    statement: "O indivíduo 'A' subtrai, para si, um celular de uma loja sem ser notado e sem exercer qualquer violência contra pessoas. O indivíduo 'B' subtrai um celular na rua utilizando-se de uma faca para ameaçar a vítima. Respectivamente, 'A' e 'B' cometeram os crimes de:",
    difficulty: "FACIL",
    explanation: "Subtrair coisa alheia móvel SEM violência = Furto (Art 155). Subtrair COM violência ou grave ameaça = Roubo (Art 157).",
    correctExplanation: "'A' cometeu furto (levou escondido). 'B' cometeu roubo (usou faca/grave ameaça).",
    wrongExplanation: "Extorsão exige a participação da vítima (forçar a vítima a digitar a senha do banco). Latrocínio é o roubo que resulta morte.",
    trap: "Confundir furto e roubo. Jornalistas costumam falar que a pessoa foi 'roubada' quando deixou o carro na rua e levaram sem ela ver, mas isso é furto.",
    reviewConcept: "Crimes contra o Patrimônio: Furto vs. Roubo.",
    options: [
      { text: "Furto e Extorsão.", isCorrect: false, explanation: "Incorreto. B não fez extorsão, fez roubo." },
      { text: "Roubo e Roubo.", isCorrect: false, explanation: "Incorreto. A não usou violência." },
      { text: "Furto e Roubo.", isCorrect: true, explanation: "Correto. A furtou (sem ameaça) e B roubou (com ameaça)." },
      { text: "Estelionato e Roubo.", isCorrect: false, explanation: "Incorreto. A não enganou a loja para entregar voluntariamente, ele subtraiu (furto)." },
      { text: "Furto e Latrocínio.", isCorrect: false, explanation: "Incorreto. Ninguém morreu, então não é latrocínio." }
    ]
  }
];

export async function seedQuestions(
  prisma: any,
  studentId: string,
  subjectMap: Record<string, string>,
  topicMap: Record<string, string>,
  sourceDocId: string
) {
  let createdCount = 0;
  
  for (const q of questionsData) {
    const subjectId = subjectMap[q.subjectSlug];
    const topicId = topicMap[q.topicTitle];
    
    if (!subjectId || !topicId) {
      console.warn(`[Questions Seed] Skipping question due to missing subject/topic: ${q.subjectSlug} / ${q.topicTitle}`);
      continue;
    }
    
    const correctOption = q.options.find(o => o.isCorrect);
    if (!correctOption) continue;
    
    // Convert to A, B, C, D, E labels
    const labels = ["A", "B", "C", "D", "E"];
    const formattedOptions = q.options.map((opt, index) => ({
      label: labels[index],
      text: opt.text,
      isCorrect: opt.isCorrect,
      explanation: opt.explanation
    }));
    
    const correctLabel = formattedOptions.find(o => o.isCorrect)?.label || "A";

    await prisma.question.create({
      data: {
        subjectId,
        topicId,
        sourceDocumentId: sourceDocId,
        statement: q.statement,
        difficulty: q.difficulty as any,
        explanation: q.explanation,
        correctExplanation: q.correctExplanation,
        wrongExplanation: q.wrongExplanation,
        trap: q.trap,
        reviewConcept: q.reviewConcept,
        answerKey: {
          create: {
            correctLabel,
            source: "Simulado FGV PMERJ"
          }
        },
        options: {
          create: formattedOptions
        }
      }
    });
    
    createdCount++;
  }
  
  console.log(`[Questions Seed] ✅ Inseridas ${createdCount} questões reais.`);
}
