// Conteúdo didático real para as aulas do sistema.
// Cada entrada mapeia o título do tópico ao conteúdo da aula e do resumo.

export const lessonContent: Record<string, { aula: string; resumo: string }> = {

  // ═══════════════════════════════════════════════
  // LÍNGUA PORTUGUESA
  // ═══════════════════════════════════════════════

  "Leitura e interpretacao de textos": {
    aula: `# Leitura e Interpretação de Textos

## Por que esse tópico é decisivo?
Das 10 questões de Português na prova FGV, pelo menos 4 a 5 cobram interpretação de texto. É o tópico com maior peso da prova inteira.

## Tipos de texto mais cobrados
- **Textos jornalísticos**: editoriais, artigos de opinião, notícias
- **Textos normativos**: trechos de leis, regulamentos
- **Textos literários**: crônicas, contos (menos frequente na FGV)

## Técnicas de leitura para prova
1. **Leia o enunciado ANTES do texto** — saiba o que procurar
2. **Identifique a tese central** — geralmente no 1º ou último parágrafo
3. **Sublinhe conectivos** — eles revelam a lógica do autor (porém, contudo, ademais, portanto)
4. **Cuidado com "pegadinhas"**: a FGV adora alternativas que são verdadeiras isoladamente, mas NÃO respondem ao que foi perguntado

## Comandos mais comuns da FGV
- "De acordo com o texto..." → resposta está EXPLÍCITA no texto
- "Infere-se do texto que..." → resposta está IMPLÍCITA, exige dedução
- "O autor defende a ideia de que..." → busque a TESE, não um detalhe
- "A expressão X, no contexto, significa..." → substituição sem alterar o sentido

## Sentido Próprio vs. Figurado
- **Denotação** (sentido próprio): "O sol nasce no leste"
- **Conotação** (sentido figurado): "Ela é o sol da minha vida"
- A FGV cobra isso em questões de vocabulário contextual

## Figuras de Linguagem mais cobradas
| Figura | Exemplo | Efeito |
|--------|---------|--------|
| Metáfora | "A vida é uma viagem" | Comparação implícita |
| Metonímia | "Leu Machado de Assis" | Autor pela obra |
| Ironia | "Que belo serviço!" (criticando) | Dizer o oposto |
| Hipérbole | "Morri de rir" | Exagero intencional |
| Eufemismo | "Ele passou desta para melhor" | Suavizar |`,

    resumo: `**RESUMO — Interpretação de Textos**
• Leia o enunciado antes do texto
• Identifique a tese central (1º ou último parágrafo)
• "De acordo com" = explícito; "Infere-se" = implícito
• Denotação = sentido literal; Conotação = sentido figurado
• Figuras mais cobradas: metáfora, metonímia, ironia, hipérbole
• Cuidado: alternativa verdadeira ≠ alternativa que responde à pergunta`
  },

  "Ortografia, sinonimos e antonimos": {
    aula: `# Ortografia, Sinônimos e Antônimos

## Regras ortográficas mais cobradas

### Uso do S, SS, Ç, X, CH
- **-ção**: derivados de verbos terminados em -ar (excetuar → exceção)
- **-são**: derivados de verbos terminados em -der, -dir, -ter, -tir (compreender → compreensão)
- **-ssão**: quando o verbo perde letras (permitir → permissão)

### Uso do "por que", "por quê", "porque", "porquê"
| Forma | Quando usar | Exemplo |
|-------|-------------|---------|
| Por que | Pergunta ou equivale a "pelo qual" | Por que você faltou? |
| Por quê | Final de frase | Você faltou por quê? |
| Porque | Resposta/explicação | Faltei porque estava doente |
| Porquê | Substantivo (= o motivo) | Não sei o porquê da falta |

### Uso do MAU vs. MAL
- **Mau** = adjetivo (oposto de bom). "Ele é um mau aluno"
- **Mal** = advérbio (oposto de bem). "Ele se comportou mal"

## Sinônimos e Antônimos
A FGV cobra substituição de palavras no texto SEM alterar o sentido.

**Dica de ouro**: Releia a frase com a palavra substituída. Se o sentido mudar, está errada.

Exemplos frequentes:
- Contudo / Todavia / Entretanto / No entanto (= oposição)
- Ademais / Além disso / Outrossim (= adição)
- Portanto / Logo / Destarte / Dessarte (= conclusão)`,

    resumo: `**RESUMO — Ortografia, Sinônimos e Antônimos**
• -ção: verbos em -ar; -são: verbos em -der/-dir/-ter/-tir; -ssão: perde letras
• Por que (pergunta) / Porque (resposta) / Por quê (fim) / Porquê (substantivo)
• Mau = adjetivo (≠ bom) / Mal = advérbio (≠ bem)
• Sinônimos: substituir sem mudar sentido — releia a frase completa
• Conectivos de oposição: contudo, todavia, entretanto, no entanto`
  },

  "Classes de palavras": {
    aula: `# Classes de Palavras (Classes Gramaticais)

## As 10 Classes Gramaticais
| Classe | Função | Exemplo |
|--------|--------|---------|
| Substantivo | Nomeia seres e coisas | policial, cidade, coragem |
| Adjetivo | Caracteriza o substantivo | competente, federal, grande |
| Artigo | Determina o substantivo | o, a, os, as, um, uma |
| Numeral | Indica quantidade/ordem | dois, segundo, dobro |
| Pronome | Substitui ou acompanha o substantivo | eu, ele, este, aquele, que |
| Verbo | Indica ação, estado ou fenômeno | prender, ser, chover |
| Advérbio | Modifica verbo, adjetivo ou outro advérbio | não, muito, ali, ontem |
| Preposição | Liga termos com dependência | de, em, por, para, com |
| Conjunção | Liga orações ou termos | e, mas, porque, embora |
| Interjeição | Expressa emoção | Olá! Cuidado! |

## O que a FGV mais cobra?

### Pronomes
- **Pronome relativo "que"**: retoma o substantivo anterior. "O policial QUE prendeu o suspeito" (que = o policial)
- **Pronome demonstrativo**: este/esse/aquele indicam proximidade no texto
- **Colocação pronominal**: próclise (antes), mesóclise (meio), ênclise (depois)

### Conjunções (Conectivos)
As conjunções revelam a relação lógica entre as ideias:
- **Adversativas** (oposição): mas, porém, contudo, todavia, entretanto
- **Concessivas** (concessão): embora, ainda que, mesmo que
- **Causais**: porque, pois, visto que, já que
- **Consecutivas**: de modo que, de forma que, tão... que
- **Condicionais**: se, caso, desde que

### Preposições
- **Regência verbal depende delas**: assistir A (= ver), assistir Ø (= ajudar)
- Combinação: de + o = do; em + a = na
- Contração com artigo pode indicar crase: a + a = à`,

    resumo: `**RESUMO — Classes de Palavras**
• 10 classes: substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição, conjunção, interjeição
• Pronome relativo "que" retoma o termo anterior
• Conjunções adversativas (mas, porém) ≠ concessivas (embora, ainda que)
• Causais (porque) ≠ consecutivas (de modo que)
• Preposições determinam a regência verbal`
  },

  "Sintaxe e oracoes": {
    aula: `# Sintaxe: Termos da Oração e Períodos

## Termos Essenciais
- **Sujeito**: quem pratica ou sofre a ação. "O policial [sujeito] prendeu o suspeito"
- **Predicado**: o que se diz sobre o sujeito. "O policial prendeu o suspeito [predicado]"

### Tipos de sujeito
| Tipo | Exemplo |
|------|---------|
| Simples | "O soldado marchou" |
| Composto | "O soldado e o cabo marcharam" |
| Oculto/Desinencial | "[Eu] Marchei rapidamente" |
| Indeterminado | "Disseram que haverá prova" |
| Inexistente (oração sem sujeito) | "Choveu ontem" / "Há vagas" |

## Termos Integrantes
- **Objeto direto**: complemento SEM preposição. "Ele leu O EDITAL"
- **Objeto indireto**: complemento COM preposição. "Ele obedeceu AO REGULAMENTO"
- **Complemento nominal**: completa nome. "Tenho medo DE PROVA"
- **Agente da passiva**: quem pratica na voz passiva. "O suspeito foi preso PELO POLICIAL"

## Termos Acessórios
- **Adjunto adnominal**: acompanha substantivo. "O BRILHANTE policial"
- **Adjunto adverbial**: circunstância. "Prendeu o suspeito ONTEM"
- **Aposto**: explica/identifica. "O policial, HERÓI DO DIA, foi homenageado"

## Período Composto
- **Coordenação**: orações independentes ligadas por conjunções (e, mas, ou)
- **Subordinação**: uma oração depende da outra (que, quando, se, embora)

### Orações subordinadas mais cobradas pela FGV
- **Adjetivas restritivas** (sem vírgula): "O policial que prendeu..." (especifica qual)
- **Adjetivas explicativas** (com vírgula): "O policial, que é corajoso, prendeu..." (explica)`,

    resumo: `**RESUMO — Sintaxe e Orações**
• Sujeito + Predicado = termos essenciais
• Objeto direto (sem prep.) vs. Objeto indireto (com prep.)
• Adjunto adnominal (acompanha nome) vs. Complemento nominal (completa nome)
• Período composto: coordenação (independentes) vs. subordinação (dependentes)
• Adjetiva restritiva (sem vírgula, restringe) vs. explicativa (com vírgula, explica)`
  },

  "Concordancia, regencia, pronomes e crase": {
    aula: `# Concordância, Regência, Pronomes e Crase

## Concordância Verbal
O verbo concorda com o sujeito em pessoa e número.

### Regras que mais caem
| Caso | Regra | Exemplo |
|------|-------|---------|
| Sujeito composto antes do verbo | Plural | "O cabo e o soldado MARCHARAM" |
| Expressão partitiva + complemento plural | Ambos aceitos | "A maioria dos policiais APROVOU/APROVARAM" |
| Verbo haver (= existir) | Sempre singular | "HOUVE várias ocorrências" (nunca "houveram") |
| Verbo fazer (tempo) | Sempre singular | "FAZ dois anos que..." (nunca "fazem") |

## Concordância Nominal
O adjetivo concorda com o substantivo em gênero e número.
- "Documentos e certidões NECESSÁRIOS" (masculino prevalece)
- "É PROIBIDO entrada" (sem artigo) vs. "É PROIBIDA a entrada" (com artigo)

## Regência Verbal
| Verbo | Regência correta |
|-------|-----------------|
| Assistir (= ver) | Assistir A (transitivo indireto) |
| Assistir (= ajudar) | Assistir Ø (transitivo direto) |
| Obedecer | Obedecer A (sempre com "a") |
| Preferir | Preferir X A Y (nunca "do que") |
| Visar (= mirar/objetivar) | Visar A |

## Crase (à)
Crase = fusão de preposição "a" + artigo "a". Ocorre diante de palavras FEMININAS.

### Sempre tem crase
- Diante de horas: "Saiu às 14h"
- Locuções femininas: "à medida que", "à noite", "às vezes", "à esquerda"

### Nunca tem crase
- Antes de masculino: "Fui a pé" (nunca "à pé")
- Antes de verbo: "Começou a estudar"
- Antes de pronomes de tratamento: "Refiro-me a Vossa Excelência"
- Antes de cidades sem artigo: "Fui a Brasília" (mas "Fui à Bahia" — tem artigo)

### Dica infalível
Troque a palavra feminina por uma masculina. Se aparecer "ao", tem crase: "Fui à delegacia" → "Fui ao quartel" ✓`,

    resumo: `**RESUMO — Concordância, Regência e Crase**
• Haver (existir) e Fazer (tempo) = sempre SINGULAR
• Sujeito composto antes do verbo = PLURAL
• Assistir a (ver) / Obedecer a / Preferir X a Y
• Crase = prep. "a" + artigo "a" (só antes de feminino)
• Dica crase: troque por masculino → se "ao" aparece, tem crase
• Sempre: às horas, à noite, às vezes, à medida que
• Nunca: antes de masculino, verbo, pronome de tratamento`
  },

  // ═══════════════════════════════════════════════
  // MATEMÁTICA BÁSICA
  // ═══════════════════════════════════════════════

  "Numeros inteiros, racionais e reais": {
    aula: `# Números Inteiros, Racionais e Reais

## Conjuntos Numéricos
- **Naturais (ℕ)**: 0, 1, 2, 3, 4...
- **Inteiros (ℤ)**: ...-3, -2, -1, 0, 1, 2, 3...
- **Racionais (ℚ)**: todo número que pode ser escrito como fração (incluindo decimais finitos e dízimas periódicas)
- **Irracionais**: decimais infinitos não periódicos (π, √2)
- **Reais (ℝ)**: racionais + irracionais = todos os números da reta numérica

## Operações com Inteiros
### Regra de Sinais (Multiplicação e Divisão)
- (+) × (+) = (+)
- (−) × (−) = (+)
- (+) × (−) = (−)

### Potenciação
- Base negativa com expoente PAR = resultado positivo: (−2)² = 4
- Base negativa com expoente ÍMPAR = resultado negativo: (−2)³ = −8
- Qualquer número elevado a 0 = 1 (exceto 0⁰)

## Frações
- **Soma/Subtração**: encontrar o MMC dos denominadores
- **Multiplicação**: multiplica numerador × numerador e denominador × denominador
- **Divisão**: multiplica pela fração invertida
- Exemplo: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6

## Dízimas Periódicas
- 0,333... = 1/3
- 0,666... = 2/3
- 0,999... = 1

## Dica FGV
A banca adora cobrar operações com números negativos e frações dentro de situações-problema. Não erre na regra de sinais!`,

    resumo: `**RESUMO — Números Inteiros, Racionais e Reais**
• ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ
• Regra de sinais: sinais iguais = positivo; diferentes = negativo
• Base negativa: expoente par = +; expoente ímpar = −
• Divisão de frações: inverte a segunda e multiplica
• Dízima periódica é número racional (pode virar fração)`
  },

  "Razao, proporcao, regra de tres e porcentagem": {
    aula: `# Razão, Proporção, Regra de Três e Porcentagem

## Razão e Proporção
- **Razão**: comparação entre duas grandezas. a/b
- **Proporção**: igualdade entre duas razões. a/b = c/d → a·d = b·c (multiplicação cruzada)

## Regra de Três Simples
Usamos quando temos 3 valores conhecidos e 1 desconhecido.

### Passo a passo
1. Identifique as grandezas
2. Verifique se são diretamente ou inversamente proporcionais
3. Monte a proporção e resolva

**Exemplo**: Se 5 policiais fazem uma ronda em 4 horas, quantas horas 10 policiais levam?
- Grandezas: policiais × horas → INVERSAMENTE proporcional (mais gente, menos tempo)
- 5/10 = x/4 → inverte uma coluna → 5/10 = x/4 → 10x = 20 → x = 2 horas

## Porcentagem
- X% de Y = (X/100) × Y
- **Aumento de 20%**: multiplica por 1,20
- **Desconto de 15%**: multiplica por 0,85
- **Aumentos sucessivos**: multiplica os fatores. Ex: +10% e +20% = 1,10 × 1,20 = 1,32 (= aumento de 32%)

### Fórmula rápida para FGV
"De quanto para quanto" → (valor final − valor inicial) / valor inicial × 100

**Exemplo**: Salário foi de R$3.000 para R$3.450. Aumento = (3450−3000)/3000 × 100 = 15%`,

    resumo: `**RESUMO — Razão, Proporção, Regra de Três e Porcentagem**
• Proporção: a/b = c/d → a·d = b·c
• Regra de três: direta (sobe junto) ou inversa (uma sobe, outra desce)
• Porcentagem: X% de Y = (X/100)·Y
• Aumento de P%: multiplica por (1 + P/100)
• Desconto de P%: multiplica por (1 − P/100)
• Aumentos sucessivos: multiplica os fatores`
  },

  "Equacao e sistema do 1o grau": {
    aula: `# Equação e Sistema do 1º Grau

## Equação do 1º Grau
Forma: ax + b = 0 (a ≠ 0)

### Como resolver
Isole o x: passe o que NÃO tem x para o outro lado (troca o sinal).

**Exemplo**: 3x − 7 = 14
→ 3x = 14 + 7
→ 3x = 21
→ x = 7

### Situações-problema (tipo FGV)
"Um policial aplicou 48 multas em dois dias. No segundo dia, aplicou o dobro do primeiro. Quantas multas aplicou cada dia?"

Primeiro dia = x; Segundo = 2x
x + 2x = 48 → 3x = 48 → x = 16
R: 1º dia = 16, 2º dia = 32

## Sistema de Equações do 1º Grau
Duas equações com duas incógnitas (x e y).

### Método da Substituição
1. Isole uma variável em uma equação
2. Substitua na outra

### Método da Adição
1. Multiplique para igualar coeficientes
2. Some ou subtraia as equações

**Exemplo**: x + y = 50 e x − y = 10
Somando: 2x = 60 → x = 30, logo y = 20`,

    resumo: `**RESUMO — Equação e Sistema do 1º Grau**
• ax + b = 0 → x = −b/a
• Isolar x: passar termos trocando o sinal
• Situação-problema: traduzir o enunciado em equação
• Sistema: substituição (isola e substitui) ou adição (soma/subtrai)
• FGV cobra sempre em forma de problema contextualizado`
  },

  "Medidas, tabelas, graficos e geometria": {
    aula: `# Medidas, Tabelas, Gráficos e Geometria

## Unidades de Medida
| Grandeza | Unidades | Conversão |
|----------|----------|-----------|
| Comprimento | km, m, cm, mm | cada passo = ×10 ou ÷10 |
| Área | km², m², cm² | cada passo = ×100 ou ÷100 |
| Volume | m³, dm³(=L), cm³(=mL) | cada passo = ×1000 ou ÷1000 |
| Tempo | h, min, s | 1h = 60min = 3600s |

## Tabelas e Gráficos
A FGV adora questões de interpretação de dados visuais:
- **Gráfico de barras**: compare alturas
- **Gráfico de setores (pizza)**: cada fatia é uma porcentagem do total
- **Tabela**: leia linha × coluna corretamente

### Dica: média aritmética
Média = (soma dos valores) / (quantidade de valores)

## Geometria Plana
| Figura | Perímetro | Área |
|--------|-----------|------|
| Quadrado (lado l) | 4l | l² |
| Retângulo (b × h) | 2(b+h) | b × h |
| Triângulo (base b, altura h) | soma dos lados | (b × h) / 2 |
| Círculo (raio r) | 2πr | πr² |

## Teorema de Pitágoras
Em todo triângulo retângulo: a² = b² + c² (hipotenusa² = cateto² + cateto²)

**Trios pitagóricos famosos**: 3-4-5, 5-12-13, 8-15-17`,

    resumo: `**RESUMO — Medidas, Gráficos e Geometria**
• Comprimento: ×10 por unidade; Área: ×100; Volume: ×1000
• Média = soma ÷ quantidade
• Quadrado: A = l²; Retângulo: A = b×h; Triângulo: A = b×h/2; Círculo: A = πr²
• Pitágoras: hipotenusa² = cateto² + cateto²
• Trios: 3-4-5 / 5-12-13`
  },

  "Probabilidade e raciocinio logico": {
    aula: `# Probabilidade e Raciocínio Lógico

## Probabilidade
P(evento) = casos favoráveis / casos possíveis

**Exemplo**: Ao lançar um dado, a probabilidade de sair par = 3/6 = 1/2 = 50%

### Regras fundamentais
- **Eventos independentes** (E e F): P(E ∩ F) = P(E) × P(F)
- **Eventos mutuamente exclusivos** (E ou F): P(E ∪ F) = P(E) + P(F)
- **Probabilidade complementar**: P(não A) = 1 − P(A)

## Conjuntos
- **União (A ∪ B)**: elementos que estão em A OU em B
- **Interseção (A ∩ B)**: elementos que estão em A E em B
- **Fórmula**: n(A ∪ B) = n(A) + n(B) − n(A ∩ B)

**Exemplo FGV**: Em uma turma de 60 alunos, 35 estudam Português, 28 estudam Matemática e 12 estudam ambos.
Quantos não estudam nenhuma?
n(P ∪ M) = 35 + 28 − 12 = 51
Nenhuma = 60 − 51 = 9

## Raciocínio Lógico
### Proposições
- Negação de "todo": "algum não" (pelo menos um não)
- Negação de "algum": "nenhum"
- Negação de "se A então B": "A e não B"

### Tabela-verdade do condicional (→)
| A | B | A → B |
|---|---|-------|
| V | V | V |
| V | F | **F** |
| F | V | V |
| F | F | V |

A condicional só é FALSA quando o antecedente é verdadeiro e o consequente é falso.`,

    resumo: `**RESUMO — Probabilidade e Raciocínio Lógico**
• P = favoráveis / possíveis
• Independentes: multiplica; Excludentes: soma
• Conjuntos: n(A∪B) = n(A) + n(B) − n(A∩B)
• Negação de "todo A é B" = "algum A não é B"
• Negação de "se A então B" = "A e não B"
• Condicional: só é falsa quando V → F`
  },

  // ═══════════════════════════════════════════════
  // DIREITOS HUMANOS
  // ═══════════════════════════════════════════════

  "Declaracao Universal dos Direitos Humanos": {
    aula: `# Declaração Universal dos Direitos Humanos (DUDH)

## Contexto Histórico
Adotada pela ONU em **10 de dezembro de 1948** (Assembleia Geral, Resolução 217-A). Criada após os horrores da 2ª Guerra Mundial para estabelecer um padrão universal de proteção à dignidade humana.

## Estrutura
- **Preâmbulo** + **30 artigos**
- Não é um tratado vinculante por si só, mas é considerada costume internacional

## Artigos mais cobrados pela FGV

### Art. 1º — Liberdade e igualdade
"Todos os seres humanos nascem livres e iguais em dignidade e direitos."

### Art. 3º — Vida, liberdade e segurança
"Todo indivíduo tem direito à vida, à liberdade e à segurança pessoal."

### Art. 5º — Proibição da tortura
"Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante."

### Art. 9º — Proibição de prisão arbitrária
"Ninguém será arbitrariamente preso, detido ou exilado."

### Art. 11 — Presunção de inocência
"Todo ser humano acusado de um ato delituoso tem o direito de ser presumido inocente até que a culpabilidade tenha sido provada."

## Características dos Direitos Humanos
| Característica | Significado |
|----------------|------------|
| Universalidade | Valem para todos, sem exceção |
| Indivisibilidade | Não se pode escolher quais respeitar |
| Interdependência | Um depende do outro para ser efetivo |
| Inalienabilidade | Não podem ser vendidos ou transferidos |
| Imprescritibilidade | Não perdem validade com o tempo |`,

    resumo: `**RESUMO — DUDH**
• Adotada pela ONU em 10/12/1948, 30 artigos
• Art. 1: livres e iguais em dignidade
• Art. 5: proibição de tortura e tratamento desumano
• Art. 9: proibição de prisão arbitrária
• Art. 11: presunção de inocência
• Características: universais, indivisíveis, inalienáveis, imprescritíveis`
  },

  "Constituicao Federal: direitos e deveres individuais": {
    aula: `# Constituição Federal: Art. 5º — Direitos e Deveres Individuais

## Importância para o Policial Militar
O Art. 5º da CF/88 é o artigo mais cobrado em concursos de PM. O policial precisa conhecer os limites da sua atuação e os direitos do cidadão.

## Incisos mais cobrados

### Igualdade (caput e inciso I)
"Todos são iguais perante a lei, sem distinção de qualquer natureza."

### Legalidade (II)
"Ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei."

### Proibição de tortura (III)
"Ninguém será submetido a tortura nem a tratamento desumano ou degradante."

### Liberdade de expressão (IV)
"É livre a manifestação do pensamento, sendo vedado o anonimato."

### Inviolabilidade do domicílio (XI)
"A casa é asilo inviolável do indivíduo." Pode entrar SOMENTE:
- **De dia OU de noite**: flagrante delito, desastre, prestar socorro
- **Somente de dia**: por determinação judicial

### Sigilo de comunicações (XII)
Inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e telefônicas, SALVO por ordem judicial para investigação criminal ou instrução processual penal.

### Prisão (LXI a LXVIII)
- Ninguém será preso senão em **flagrante delito** ou por **ordem escrita e fundamentada da autoridade judiciária competente**
- A prisão ILEGAL será imediatamente **relaxada** pela autoridade judiciária
- O preso tem direito a ser **informado de seus direitos**, inclusive o de permanecer calado
- O preso será informado sobre a identificação dos responsáveis por sua prisão

### Habeas Corpus (LXVIII)
"Conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção."`,

    resumo: `**RESUMO — Art. 5º CF/88**
• Igualdade perante a lei (caput)
• Legalidade: só obrigação por lei (II)
• Proibição de tortura (III)
• Casa inviolável: dia+noite (flagrante, desastre, socorro); só dia (ordem judicial) (XI)
• Prisão: só flagrante ou ordem judicial escrita e fundamentada (LXI)
• Prisão ilegal = relaxamento imediato pelo juiz
• Preso: direito ao silêncio, saber seus direitos, identificar responsáveis
• Habeas corpus: proteção à liberdade de locomoção (LXVIII)`
  },

  "Tratados internacionais e controle de convencionalidade": {
    aula: `# Tratados Internacionais de Direitos Humanos

## Status dos Tratados no Direito Brasileiro
A EC 45/2004 criou o §3º do art. 5º da CF:
- Tratados de DH aprovados com quórum de **Emenda Constitucional** (3/5 dos votos, 2 turnos, em cada Casa) → **status constitucional**
- Tratados de DH aprovados com quórum ordinário → **status supralegal** (acima das leis, abaixo da CF)
- Tratados comuns → status de **lei ordinária**

## Controle de Convencionalidade
É a verificação de compatibilidade das leis internas com os tratados internacionais de DH. Se uma lei brasileira viola um tratado de DH, ela pode ser invalidada.

## Principais Tratados cobrados
| Tratado | Ano | Tema |
|---------|-----|------|
| Pacto Internacional de Direitos Civis e Políticos | 1966 | Liberdades civis, due process |
| Convenção Americana sobre DH (Pacto de San José) | 1969 | Sistema interamericano |
| Convenção contra a Tortura | 1984 | Prevenção e punição |
| Convenção sobre Direitos da Criança | 1989 | Proteção integral |

## Pacto de San José da Costa Rica (1969)
- Proíbe prisão por dívida (EXCETO devedor de pensão alimentícia)
- Direito à dupla instância (recurso a tribunal superior)
- Direito de resposta`,

    resumo: `**RESUMO — Tratados Internacionais e Convencionalidade**
• Tratados DH + quórum de EC = status constitucional
• Tratados DH + quórum ordinário = status supralegal
• Controle de convencionalidade: lei interna vs. tratado de DH
• Pacto de San José: proíbe prisão por dívida (exceto pensão alimentícia)
• Convenção contra Tortura (1984): obrigação de prevenir e punir`
  },

  "Lei de Migracao e combate a tortura": {
    aula: `# Lei de Migração e Combate à Tortura

## Lei de Migração (Lei 13.445/2017)
Substituiu o antigo Estatuto do Estrangeiro. Princípios:
- **Repúdio à xenofobia e discriminação**
- **Não criminalização da migração**
- Acolhida humanitária
- Igualdade de tratamento com nacionais (direitos civis)

### Pontos-chave
- Migrante tem direito a: educação, saúde, trabalho, previdência
- Não se exige visto para viagens até 90 dias dentro do Mercosul
- Deportação: saída compulsória por situação migratória irregular (NÃO é pena)

## Crime de Tortura (Lei 9.455/1997)
### Definição (Art. 1º)
Constitui crime de tortura:
1. Constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental para **obter informação, declaração ou confissão**
2. Para **provocar ação ou omissão de natureza criminosa**
3. Em razão de **discriminação racial ou religiosa**

### Penas
- Reclusão de **2 a 8 anos**
- Se resultar lesão corporal grave: **4 a 10 anos**
- Se resultar morte: **8 a 16 anos**

### Características especiais
- Crime **inafiançável** e **insuscetível de graça ou anistia**
- O condenado por tortura **inicia o cumprimento da pena em regime fechado**
- Crime equiparado a **hediondo** (Lei 8.072/1990)

## Sistema Nacional de Prevenção e Combate à Tortura (Lei 12.847/2013)
- Criou o Comitê Nacional e o Mecanismo Nacional de Prevenção
- Peritos podem visitar qualquer local de privação de liberdade SEM aviso prévio`,

    resumo: `**RESUMO — Migração e Tortura**
• Lei 13.445/2017: não criminalização da migração, acolhida humanitária
• Tortura (Lei 9.455/97): pena 2-8 anos; morte 8-16 anos
• Tortura: inafiançável, insuscetível de graça/anistia, regime inicialmente fechado
• Equiparado a hediondo
• SNPCT: visitas sem aviso prévio a locais de privação de liberdade`
  },

  "Uso de instrumentos de menor potencial ofensivo": {
    aula: `# Uso de Instrumentos de Menor Potencial Ofensivo

## Lei 13.060/2014
Disciplina o uso dos instrumentos de menor potencial ofensivo pelos agentes de segurança pública.

### Definição
Instrumentos de menor potencial ofensivo: aqueles projetados para, com baixa probabilidade de causar mortes ou lesões permanentes, conter, debilitar ou incapacitar temporariamente pessoas.

### Regras Fundamentais
1. Os órgãos de segurança pública **deverão priorizar** a utilização de instrumentos de menor potencial ofensivo
2. **É VEDADO** o uso de arma de fogo contra pessoa em fuga que esteja desarmada ou que não represente risco imediato de morte ou lesão
3. O uso de arma de fogo é medida **excepcional** e só se justifica quando houver **risco iminente de morte ou lesão grave**

### Princípios do Uso Progressivo da Força
| Nível | Resposta do Policial |
|-------|---------------------|
| 1. Presença policial | Verbalização |
| 2. Resistência passiva | Controle de contato (condução) |
| 3. Resistência ativa | Controle físico, técnicas de imobilização |
| 4. Agressão não letal | Instrumentos de menor potencial ofensivo |
| 5. Agressão letal | Uso de arma de fogo (último recurso) |

### Código de Conduta da ONU para Funcionários Responsáveis pela Aplicação da Lei
- Usar a força apenas quando **estritamente necessário** e na **medida exigida** pelo cumprimento do dever
- O uso de armas de fogo é uma **medida extrema**

## Dica FGV
A banca cobra principalmente: "Em qual situação o policial pode usar arma de fogo?" → Somente quando há **risco iminente de morte ou lesão grave** a si ou a terceiros.`,

    resumo: `**RESUMO — Uso da Força (Lei 13.060/2014)**
• Priorizar instrumentos de menor potencial ofensivo
• VEDADO: arma de fogo contra pessoa em fuga desarmada sem risco de morte
• Arma de fogo = excepcional, só com risco iminente de morte/lesão grave
• Uso progressivo: presença → verbalização → controle → imobilização → menor potencial → arma de fogo
• Princípios: necessidade, proporcionalidade, legalidade`
  },

  // ═══════════════════════════════════════════════
  // DIREITO ADMINISTRATIVO
  // ═══════════════════════════════════════════════

  "Principios do Direito Administrativo": {
    aula: `# Princípios do Direito Administrativo

## Princípios Expressos (LIMPE) — Art. 37 CF/88
| Princípio | Significado | Exemplo |
|-----------|------------|---------|
| **L**egalidade | Administração só pode fazer o que a lei permite | PM só pode prender em flagrante ou com mandado |
| **I**mpessoalidade | Atuar sem favoritismo | Concurso público sem favorecimento |
| **M**oralidade | Ética e boa-fé na atuação | Proibição de nepotismo |
| **P**ublicidade | Transparência dos atos | Diário Oficial, portais de transparência |
| **E**ficiência | Melhor resultado com menor custo | EC 19/98 — Reforma administrativa |

## Princípios Implícitos
| Princípio | Significado |
|-----------|------------|
| Supremacia do interesse público | O interesse coletivo prevalece sobre o individual |
| Indisponibilidade do interesse público | O administrador não pode abrir mão do interesse público |
| Razoabilidade e Proporcionalidade | A atuação deve ser adequada, necessária e proporcional |
| Autotutela | A Administração pode anular seus próprios atos ilegais ou revogar os inconvenientes |
| Continuidade do serviço público | Os serviços públicos não podem parar |
| Motivação | Os atos administrativos devem ser motivados (fundamentados) |

## Súmula 473 do STF (Autotutela)
"A Administração pode anular seus próprios atos, quando eivados de vícios que os tornem ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade."

### Diferença crucial
- **Anulação**: ato ILEGAL → efeitos retroativos (ex tunc)
- **Revogação**: ato legal mas INCONVENIENTE → efeitos prospectivos (ex nunc)`,

    resumo: `**RESUMO — Princípios Administrativos**
• LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência
• Supremacia do interesse público sobre o privado
• Autotutela (Súmula 473 STF): anula ilegais, revoga inconvenientes
• Anulação = ilegalidade (ex tunc) / Revogação = conveniência (ex nunc)
• Razoabilidade e Proporcionalidade: adequação, necessidade, proporcionalidade`
  },

  "Organizacao administrativa e orgaos publicos": {
    aula: `# Organização Administrativa

## Administração Direta
Composta pelos entes federativos e seus órgãos:
- União, Estados, DF, Municípios
- Órgãos: Ministérios, Secretarias, Delegacias, Batalhões de PM

### Órgãos Públicos
- **Não possuem** personalidade jurídica própria
- São fruto da **desconcentração** (divisão interna de competências)
- Classificação:
  - **Independentes**: Presidência, Governadoria, Tribunais
  - **Autônomos**: Ministérios, Secretarias
  - **Superiores**: Gabinetes, Departamentos
  - **Subalternos**: Seções, Portarias

## Administração Indireta
Entidades com personalidade jurídica própria, criadas por lei:
| Entidade | Personalidade | Criação | Exemplo |
|----------|--------------|---------|---------|
| Autarquia | Direito Público | Criada por lei | INSS, IBAMA |
| Fundação Pública | Dir. Público ou Privado | Autorizada por lei | IBGE, FUNAI |
| Empresa Pública | Direito Privado | Autorizada por lei | Correios, CEF |
| Sociedade de Economia Mista | Direito Privado | Autorizada por lei | Petrobras, BB |

## Diferença fundamental
- **Desconcentração**: cria ÓRGÃOS (divisão interna, mesma pessoa jurídica)
- **Descentralização**: cria ENTIDADES (nova pessoa jurídica)`,

    resumo: `**RESUMO — Organização Administrativa**
• Administração Direta: entes + órgãos (sem personalidade jurídica própria)
• Administração Indireta: autarquias, fundações, EP, SEM (personalidade própria)
• Desconcentração = órgãos (interna) / Descentralização = entidades (externa)
• Autarquia: criada por lei, direito público
• EP e SEM: autorizadas por lei, direito privado`
  },

  "Poderes administrativos": {
    aula: `# Poderes Administrativos

## Poder Vinculado vs. Discricionário
- **Vinculado**: a lei determina TODOS os elementos do ato. Sem margem de escolha.
- **Discricionário**: a lei permite margem de escolha quanto à **conveniência e oportunidade** (mérito administrativo).

## Poder Hierárquico
- Relação de subordinação dentro da Administração
- Permite: dar ordens, fiscalizar, delegar, avocar, rever atos dos subordinados
- **Delegação**: superior passa competência ao subordinado
- **Avocação**: superior chama para si competência do subordinado (excepcional)

## Poder Disciplinar
- Aplicar punições a servidores e particulares com vínculo especial
- Não se confunde com poder punitivo do Estado (Direito Penal)
- Exemplos: advertência, suspensão, demissão

## Poder de Polícia
### Definição (Art. 78 CTN)
Atividade da Administração que limita ou disciplina direito, interesse ou liberdade, em razão do interesse público.

### Atributos
- **Discricionariedade**: escolha do momento e meio adequado
- **Autoexecutoriedade**: executa sem precisar do Judiciário
- **Coercibilidade**: impõe obrigações, com uso da força se necessário

### Exemplos para PM
- Blitz policial, fiscalização de estabelecimentos, interdição

## Poder Regulamentar (Normativo)
- Poder de editar normas gerais para detalhar/complementar a lei
- Exercido por **decretos regulamentares** (não podem inovar na ordem jurídica)`,

    resumo: `**RESUMO — Poderes Administrativos**
• Vinculado: sem margem / Discricionário: conveniência e oportunidade
• Hierárquico: ordens, fiscalização, delegação, avocação
• Disciplinar: punição de servidores (advertência, suspensão, demissão)
• Polícia: limita direitos no interesse público — discricionário, autoexecutório, coercitivo
• Regulamentar: decretos para detalhar a lei (sem inovar)`
  },

  "Atos e processo administrativo": {
    aula: `# Atos Administrativos e Processo Administrativo

## Elementos (Requisitos) do Ato Administrativo
| Elemento | O que é | Vinculado? |
|----------|---------|-----------|
| Competência | Quem pode praticar o ato | Sempre vinculado |
| Finalidade | Para que serve (interesse público) | Sempre vinculado |
| Forma | Como deve ser praticado | Sempre vinculado |
| Motivo | Razão de fato e de direito | Vinculado ou discricionário |
| Objeto | Conteúdo do ato | Vinculado ou discricionário |

**Mérito administrativo** = Motivo + Objeto (quando discricionários)

## Atributos do Ato
- **Presunção de legitimidade**: todo ato se presume legal até prova em contrário
- **Autoexecutoriedade**: a Administração executa sem o Judiciário
- **Imperatividade**: impõe obrigações unilateralmente
- **Tipicidade**: cada ato tem forma definida em lei

## Vícios e Extinção
- **Anulação**: ato com vício de legalidade (efeito retroativo — ex tunc)
- **Revogação**: ato legal mas inconveniente (efeito prospectivo — ex nunc)
- **Convalidação**: corrigir vício sanável em competência ou forma

## Processo Administrativo (Lei 9.784/1999)
Princípios: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público, eficiência.

### PAD — Processo Administrativo Disciplinar
- Apurar infrações de servidores
- Fases: instauração → inquérito → julgamento
- Garantias: ampla defesa e contraditório`,

    resumo: `**RESUMO — Atos e Processo Administrativo**
• 5 elementos: Competência, Finalidade, Forma, Motivo, Objeto
• Mérito = Motivo + Objeto (discricionários)
• Atributos: presunção de legitimidade, autoexecutoriedade, imperatividade
• Anulação (ilegal, ex tunc) / Revogação (inconveniente, ex nunc) / Convalidação (vício sanável)
• PAD: instauração → inquérito → julgamento (ampla defesa + contraditório)`
  },

  "Legislacao aplicada a PMERJ": {
    aula: `# Legislação Aplicada à PMERJ

## Constituição Federal
### Art. 42 — Militares dos Estados
"Os membros das Polícias Militares e Corpos de Bombeiros Militares são militares dos Estados."
- Aplicam-se as disposições do art. 14, §8º (elegibilidade), art. 40, §9º (previdência), e art. 142, §§ 2º e 3º.

### Art. 144 — Segurança Pública
"A segurança pública, dever do Estado, direito e responsabilidade de todos."
- **§5º**: "Às polícias militares cabem a **polícia ostensiva** e a **preservação da ordem pública**."
- PM é subordinada ao Governador do Estado (§6º)
- PM é força auxiliar e reserva do Exército (§6º)

### Art. 125, §4º — Justiça Militar Estadual
- Julga os crimes militares definidos em lei
- Competência para julgar os policiais militares

## Constituição do Estado do Rio de Janeiro
### Arts. 91 a 93
- Art. 91: A PM do Estado do Rio de Janeiro, força auxiliar e reserva do Exército, destina-se à polícia ostensiva e à preservação da ordem pública
- Organização e competência definidas por lei estadual

## Decreto-Lei 667/1969
- Reorganiza as Polícias Militares e Corpos de Bombeiros
- Confirma a PM como força auxiliar e reserva do Exército
- Subordinação ao Governador para emprego, e ao Exército para controle e coordenação

## Lei Estadual 443/1981 — Estatuto dos Policiais Militares do ERJ
- Regula ingresso, direitos, deveres, hierarquia e disciplina
- Define os postos e graduações
- Estabelece o regime disciplinar`,

    resumo: `**RESUMO — Legislação PMERJ**
• Art. 42 CF: militares dos Estados
• Art. 144, §5º: PM = polícia ostensiva + preservação da ordem pública
• PM: subordinada ao Governador, força auxiliar e reserva do Exército
• Art. 125, §4º: Justiça Militar Estadual julga crimes militares
• CERJ arts. 91-93: reforça competência da PM
• Decreto-Lei 667/69: reorganização das PMs
• Lei 443/81: Estatuto dos PMs do ERJ`
  },

  // ═══════════════════════════════════════════════
  // DIREITO PENAL E PROCESSUAL PENAL
  // ═══════════════════════════════════════════════

  "Aplicacao da lei penal, crime e imputabilidade": {
    aula: `# Aplicação da Lei Penal, Crime e Imputabilidade

## Aplicação da Lei Penal
### Princípio da Legalidade (Art. 1º CP)
"Não há crime sem lei anterior que o defina. Não há pena sem prévia cominação legal." (nullum crimen, nulla poena sine lege)

### Aplicação no tempo
- **Irretroatividade** da lei penal mais gravosa
- **Retroatividade** da lei penal mais benéfica (beneficia o réu)
- **Abolitio criminis**: lei nova que deixa de considerar fato como crime → extingue a punibilidade

## Conceito de Crime
Crime = **fato típico** + **antijurídico** + **culpável**

### Excludentes de Ilicitude (Art. 23 CP)
| Excludente | Requisito |
|------------|-----------|
| Legítima defesa | Repelir injusta agressão, atual ou iminente, usando meios necessários e moderados |
| Estado de necessidade | Perigo atual, não provocado, inevitável |
| Estrito cumprimento do dever legal | Agir conforme a lei determina |
| Exercício regular de direito | Usar um direito que a lei confere |

### Legítima Defesa — Detalhamento
- A agressão deve ser **injusta**
- Deve ser **atual ou iminente**
- Os meios devem ser **necessários** (proporcionais)
- Uso **moderado** dos meios
- **Excesso**: o agente responde pelo excesso doloso ou culposo

## Imputabilidade Penal
- **Imputável**: maior de 18 anos, capaz de entender a ilicitude
- **Inimputável**: menor de 18 (ECA), doença mental (art. 26 CP) → medida de segurança
- **Semi-imputável**: redução de 1/3 a 2/3 da pena (art. 26, parágrafo único)
- Embriaguez **voluntária ou culposa**: NÃO exclui a imputabilidade (teoria da actio libera in causa)`,

    resumo: `**RESUMO — Lei Penal, Crime e Imputabilidade**
• Legalidade: não há crime sem lei anterior
• Lei penal benéfica retroage; gravosa não retroage
• Crime = fato típico + antijurídico + culpável
• Excludentes: legítima defesa, estado de necessidade, dever legal, exercício regular de direito
• Legítima defesa: agressão injusta, atual/iminente, meios necessários e moderados
• Imputável: 18+ e capaz / Inimputável: menor de 18 ou doença mental
• Embriaguez voluntária NÃO exclui imputabilidade`
  },

  "Penas, acao penal e parte especial": {
    aula: `# Penas, Ação Penal e Crimes em Espécie

## Tipos de Pena (Art. 32 CP)
1. **Privativas de liberdade**: reclusão e detenção
2. **Restritivas de direitos**: prestação de serviços, limitação de fim de semana, interdição de direitos
3. **Multa**

### Regimes de Cumprimento
| Regime | Estabelecimento | Pena |
|--------|----------------|------|
| Fechado | Penitenciária | Reclusão > 8 anos |
| Semiaberto | Colônia agrícola | Reclusão > 4 e ≤ 8 anos |
| Aberto | Casa de albergado | Reclusão ≤ 4 anos |

### Progressão de Regime
- **Crimes comuns**: 1/6 da pena + bom comportamento
- **Crimes hediondos**: 2/5 (primário) ou 3/5 (reincidente)

## Ação Penal
- **Pública incondicionada**: MP oferece sem necessidade de representação (maioria dos crimes)
- **Pública condicionada**: depende de representação da vítima ou requisição do MJ
- **Privada**: queixa-crime pelo ofendido (ex: crimes contra a honra)

## Crimes em Espécie mais cobrados
| Crime | Artigo | Pena |
|-------|--------|------|
| Homicídio simples | Art. 121 | 6-20 anos |
| Lesão corporal leve | Art. 129 | 3 meses-1 ano |
| Furto | Art. 155 | 1-4 anos |
| Roubo | Art. 157 | 4-10 anos |
| Peculato | Art. 312 | 2-12 anos |
| Corrupção passiva | Art. 317 | 2-12 anos |
| Resistência | Art. 329 | 2 meses-2 anos |
| Desacato | Art. 331 | 6 meses-2 anos |`,

    resumo: `**RESUMO — Penas, Ação Penal e Crimes**
• Penas: privativa de liberdade (reclusão/detenção), restritiva de direitos, multa
• Regimes: fechado (>8a), semiaberto (>4-8a), aberto (≤4a)
• Progressão: 1/6 (comum), 2/5 ou 3/5 (hediondo)
• Ação: pública incondicionada (maioria), condicionada (representação), privada (queixa)
• Crimes do PM: resistência (329), desacato (331), peculato (312), corrupção (317)`
  },

  "Legislacao penal especial": {
    aula: `# Legislação Penal Especial

## Lei de Abuso de Autoridade (Lei 13.869/2019)
- Crimes cometidos por agente público no exercício da função
- Exige **dolo específico** de prejudicar ou beneficiar
- Penas: detenção 1-4 anos + multa (maioria dos tipos)
- Exemplos: constranger o preso, violar domicílio sem autorização, retardar soltura

## Crimes Hediondos (Lei 8.072/1990)
### São hediondos:
- Homicídio qualificado, latrocínio, extorsão com morte
- Estupro, epidemia com resultado morte
- Genocídio, tráfico de drogas (equiparado)

### Consequências:
- **Inafiançáveis**
- Insuscetíveis de **graça, anistia e indulto**
- Regime **inicialmente fechado** (não mais "integralmente fechado" — STF)
- Progressão: 2/5 (primário) ou 3/5 (reincidente)

## Lei Maria da Penha (Lei 11.340/2006)
- Violência doméstica e familiar contra a mulher
- **Medidas protetivas de urgência**: afastamento do lar, proibição de contato
- Não se aplica Lei dos Juizados Especiais (não cabe transação penal)
- A PM pode prender em flagrante e encaminhar a vítima ao abrigo

## Estatuto da Criança e do Adolescente (ECA — Lei 8.069/1990)
- Menor de 18 anos é inimputável → comete **ato infracional** (não crime)
- Medidas socioeducativas: advertência, liberdade assistida, internação (máx. 3 anos)

## Lei de Drogas (Lei 11.343/2006)
- Art. 28: porte para uso pessoal → medidas educativas (não mais pena de prisão — STF)
- Art. 33: tráfico → 5 a 15 anos de reclusão + multa`,

    resumo: `**RESUMO — Legislação Penal Especial**
• Abuso de autoridade: exige dolo específico, 1-4 anos
• Hediondos: inafiançáveis, sem graça/anistia, progressão 2/5 ou 3/5
• Maria da Penha: medidas protetivas, sem transação penal, PM prende em flagrante
• ECA: menor = ato infracional, medida socioeducativa (internação máx. 3 anos)
• Drogas: uso = medidas educativas; tráfico = 5-15 anos`
  },

  "Inquerito policial e acao penal": {
    aula: `# Inquérito Policial e Ação Penal

## Inquérito Policial (Arts. 4-23 CPP)
### Características
- **Inquisitorial**: não tem contraditório nem ampla defesa
- **Escrito**: todas as peças reduzidas a escrito
- **Sigiloso**: sigilo necessário para as investigações
- **Dispensável**: o MP pode oferecer denúncia sem inquérito se tiver provas
- **Discricionário**: delegado escolhe a linha de investigação

### Instauração
- **De ofício**: autoridade policial toma conhecimento do crime
- **Requisição**: do MP ou do juiz
- **Requerimento**: do ofendido
- **Notícia anônima**: "denúncia anônima" pode ser investigada antes de instaurar

### Prazos
- Preso: **10 dias** (Justiça Estadual)
- Solto: **30 dias** (prorrogável)

## Ação Penal (Arts. 24-62 CPP)
### Pública Incondicionada
- Titular: **Ministério Público**
- Peça inicial: **Denúncia**
- Princípio da **obrigatoriedade** (MP é obrigado a denunciar se houver justa causa)

### Pública Condicionada
- Depende de **representação** do ofendido ou **requisição** do Ministro da Justiça
- Prazo para representação: **6 meses** (decadencial)

### Privada
- Titular: **ofendido** (ou representante legal)
- Peça inicial: **Queixa-crime**
- Prazo: **6 meses** da data em que souber quem é o autor`,

    resumo: `**RESUMO — Inquérito e Ação Penal**
• IP: inquisitorial, escrito, sigiloso, dispensável, discricionário
• Prazos IP: preso 10 dias / solto 30 dias (prorrogável)
• Instauração: de ofício, requisição (MP/juiz), requerimento (vítima)
• Ação pública incondicionada: MP denuncia, obrigatório
• Ação condicionada: depende de representação (6 meses)
• Ação privada: queixa-crime pelo ofendido (6 meses)`
  },

  "Provas, prisao e medidas cautelares": {
    aula: `# Provas, Prisão e Medidas Cautelares

## Provas (Arts. 155-250 CPP)
### Princípios
- **Livre convencimento motivado**: juiz avalia livremente, mas deve fundamentar
- **Provas ilícitas**: são inadmissíveis (art. 5º, LVI, CF) — contaminam as provas derivadas ("frutos da árvore envenenada")

### Meios de Prova
- Exame de corpo de delito (obrigatório em crimes com vestígios)
- Perícia
- Testemunhas
- Reconhecimento de pessoas e coisas
- Busca e apreensão
- Interceptação telefônica (Lei 9.296/96 — só com ordem judicial)

### Cadeia de Custódia
- Rastreamento e documentação de TODOS os vestígios desde a coleta até o descarte
- Objetivo: garantir a integridade da prova

## Prisão
### Tipos
| Tipo | Fundamento |
|------|-----------|
| Flagrante | Art. 302 CPP — quem está cometendo, acabou de cometer, é perseguido ou encontrado logo após |
| Preventiva | Art. 311-316 CPP — garantia da ordem, conveniência da instrução, aplicação da lei penal |
| Temporária | Lei 7.960/89 — prazo determinado (5 dias, prorrogáveis por mais 5; hediondos: 30+30) |

### Flagrante Delito (Art. 302 CPP)
- **Flagrante próprio**: está cometendo ou acabou de cometer
- **Flagrante impróprio**: é perseguido logo após
- **Flagrante presumido**: é encontrado com instrumentos/objetos do crime

### Audiência de Custódia
- O preso em flagrante deve ser apresentado ao juiz em **até 24 horas**
- O juiz decide: relaxamento, liberdade provisória ou conversão em preventiva

## Medidas Cautelares Diversas da Prisão (Art. 319 CPP)
- Comparecimento periódico ao juízo
- Proibição de frequentar determinados lugares
- Recolhimento domiciliar noturno
- Monitoração eletrônica
- Fiança`,

    resumo: `**RESUMO — Provas, Prisão e Medidas Cautelares**
• Provas ilícitas: inadmissíveis + contaminam derivadas
• Corpo de delito: obrigatório em crimes com vestígios
• Cadeia de custódia: rastreamento de vestígios
• Flagrante: próprio (cometendo), impróprio (perseguido), presumido (encontrado com objetos)
• Preventiva: ordem pública, instrução, aplicação da lei
• Temporária: 5+5 dias (comum) / 30+30 (hediondo)
• Audiência de custódia: até 24h após a prisão
• Medidas alternativas: monitoração, recolhimento, fiança`
  }
};
