---
layout: blog.html
title: "Redesenhando um site e blog para vender mais e demonstrar melhor o portfólio de produto"
subtitle: "Um site feito pensando no usuário deixa o usuário feliz, um usuário feliz gosta mais de você e alguém que gosta de você vai mais facilmente comprar de você. Melhorar a usabilidade diminui a frustração de quem está no site e permite o usuário achar o que procurava."
tags:
  - design
  - desenvolvimento
  - artigo
---

No dia 11 de outubro de 2017, foi ao ar a 4ª versão de um novo site desde que a empresa nasceu em 2011. Também não foi apenas o site que teve a sua versão renovada, o blog também. Ambos esses sites construídos do zero no terceiro trimestre de 2017.

O site era o principal canal de comunicação com clientes e parceiros, aquisição de novos clientes e disseminação de conteúdo da mobLee. Ou seja, ter um bom site era obrigação para alcançar os resultados que desejavam. Com a evolução de portfólio de produtos da empresa, além dos problemas endêmicos de performance do antigo site, abriram espaço para um redesign.

## Quais as razões de refazer o site e o blog do zero?

O primeiro motivo foi relacionado a mobLee e seus produtos. Se antes o carro chefe eram aplicativos para eventos white-label, em 2017 a mobLee lançou uma plataforma com 4 produtos. Toda a comunicação da empresa, assim como seu site, era focada no aplicativo para eventos, com os novos produtos, ele divide o espaço de igual para igual com outras 3 soluções.

![Os 4 produtos que a mobLee oferece](/image/blog/moblee-products.png)
Esse motivo sozinho já tornou necessário o redesenho do site e suas páginas, mas foram motivos mais técnicos que fizeram o time de marketing tomar a decisão radical de refazer o site inteiro do zero, não reaproveitando nenhuma linha de código do site antigo.

Em resumo, o site antigo apesar de ter um bom layout, “por baixo do capô” tinha um código bastante deficiente e lento, é como se por fora o site fosse o carrão do ano mas, por dentro, estivesse rodando com um motor de fiat 147.

Na prática, as páginas faziam em média entre 150 e 250 requests no carregamento (muito acima do ideal ou recomendado), o CSS tinha mais de 1.100 !importants (isso só na folha de estilos principal, além dos outros diversos que eram chamados no meio do código), eram carregadas mais de 5 fontes (tipografia), diversas bibliotecas de JS, algumas das imagens tinham mais de 1mb, títulos não seguiam nenhuma lógica semântica (não só semanticamente, eles simplesmente não seguiam nenhuma lógica) enfim, era bem ruim o que acontecia ali.

Sendo assim, foi necessário reestruturar o site tanto por motivos de negócio e, por motivos técnicos. Depois que foi decidido que tudo nele seria refeito, gastamos mais tempo de início planejando para garantir muito menos retrabalho e agilidade no futuro.

## Como o projeto foi planejado?

No mês de julho de 2017 que foi decidido refazer tanto o site institucional quanto o blog. O prazo de entrega era até uma semana antes do RD Summit 2017, evento de marketing digital, onde foi apresentado pela primeira vez os novos produtos da mobLee. O projeto teve início oficialmente na última semana de julho.

Essa foi a empreitada de uma equipe enorme, de uma pessoa e independente de possíveis imprevistos ou não no projeto, o prazo final não poderia ser estendido, o evento não trocaria de data.

![Imagem do cronograma de projeto do site institucional da mobLee](/image/blog/moblee-timetable.png)

A imagem acima mostra o cronograma planejado inicialmente para o projeto. Cada coluna em branco representa uma semana (em vermelho está o quarto trimestre) e cada linha uma etapa. Ao todo foram planejadas 16 etapas divididas em 70 atividades. No geral o resultado final ficou bem próximo do planejado.

## Os principais desafios do projeto

Um projeto grande em escopo, em tempo de trabalho, de grande importância para a empresa e com um grande nível de dificuldade é um desafio por si só, mas destrinchando-o em desafios menores, foram esses três os que considero os desafios mais importantes dentro do projeto e que merecem serem citados:

- Conseguir impactar positivamente todas as áreas da empresa que tem contato direto com clientes e usuários;
- Em 3 meses, projetar, executar e lançar dois sites de alta complexidade;
- Durante o processo, decidir a troca de servidor.

Vamos entrar em mais detalhes em cada um deles:

### Conseguir impactar positivamente todas as áreas da empresa que tem contato direto com clientes e usuários

Antes de sentar e começar a planejar os sites, antes mesmo de acordar quais os objetivos destes sites, marquei uma reunião com cada diretor e gerente das áreas da empresa, que tinham contato direto com clientes ou usuários em geral, que seriam clientes, possíveis clientes e/ou possíveis colaboradores. Foram feitas e transcritas reuniões com as lideranças das áreas de Marketing, Vendas e Pré-vendas, Customer Success, Gestão de talentos, além da presidência e a equipe de design do time de produto.

Ideias e propostas apresentadas nessas conversas que ajudaram a montado o briefing do projeto, ou seja, um documento explicando quais os objetivos do projeto, principais e secundários e acordado entre quem executa o projeto e o cliente - nesse caso o cliente interno representado pelo CEO e o gerente de marketing.

O [documento de briefing](https://docs.google.com/document/d/1SdJcXDscNz4PPu2pVoggIroZOrA_QDme8weiPCXBF2w/edit) criado como primeira etapa do projeto já resume o principal objetivo do site, que é “Comunicar com clareza a proposta de valor da mobLee para assim vender.“. Você também encontra no briefing uma área com o nome “Compromisso de ajudar todas as áreas da mobLee com o site” e nela temos os seguintes tópicos:
- Manter ou aumentar o destaque que era dado ao time de CS (Customer Success);
- Ter um espaço facilmente atualizável e editável para novidades/lançamentos de features do produto;
- Deixar os materiais educativos mais orientados a [buyers journey](https://blog.hubspot.com/sales/what-is-the-buyers-journey);
- Ter uma página específica para cases de sucesso/estudos de casos;
- Ter um espaço referente a cultura da empresa.

Aproveitei a chance que tive ao fazer um redesign e criar um desenvolvimento do zero para conseguir fazer um site que não trabalhe apenas para o time de marketing, mas para a empresa como um todo. Juntar as ideias de diversas áreas desde a parte de planejamento foi um dos maiores acertos desse projeto.

### Em 3 meses, projetar, executar e lançar dois sites de alta complexidade

Um projeto de um trimestre, resumido em: analisar concorrentes e similares, dados de acessos gerais do site antigo, decidir tecnologias a serem usadas, arquitetar como a informação seria disposta no novo site, prototipar, desenvolver o código disso e lançar o site, ufa!.

![Imagem de wireframes do site institucional da mobLee](/image/blog/moblee-wireframes.png)

Tudo isso multiplicado por dois, pois além do site principal, o blog também foi refeito. Além disso, era preciso definir a comunicação de todos os novos produtos, assim como deixar o layout (e código) maleável e componentizado o suficiente para aceitar atualizações no total de produtos.

Só a página principal do site, por exemplo, após ter sido prototipada “na mão” ainda passou por mais 4 redesenhos até uma 5ª versão ser escolhida como a versão que atende melhor todas as expectativas apontadas no briefing. A imagem acima demonstra essas iterações.

Por fim, todo o conteúdo do antigo blog teve que ser migrado para esse novo e, se não fosse a ajuda da editora do blog e do gerente de marketing em uma força tarefa que fizemos, provavelmente eu estaria até agora atrás das imagens dos antigos posts e o blog ainda não estaria com a migração completa.

Apesar da correria, conseguimos entregar o site dentro do prazo e, mesmo tendo sido um projeto de um membro só, as ajudas recebidas em alguns momentos chave foram mais do que importantes para garantir a entrega.

### Durante o processo, decidir a troca de servidor

O servidor não estava conseguindo atender todas as expectativas com o site antigo e, durante o processo de criar um site novo, foi decidido começar com ele desde o início hospedado em um novo servidor.

Os produtos e nossas APIs da mobLee estavam todos hospedados em servidores da Amazon (EC2 e S3), então foi natural fazer a migração dos sites desenvolvidos pelo time de marketing, como [as ferramentas](/projeto/moblee-tools/) por exemplo, além é claro do site institucional e blog.

A configuração do novo servidor e suas otimizações tiveram (bem) mais complicações do que o esperado. Tanto que, tentamos lançar o novo site no dia 8 de outubro mas tivemos que voltar atrás por causa da enorme instabilidade que ele estava apresentando. Apenas no dia 11 do mesmo mês, após algumas noites mal dormidas, estávamos satisfeitos com nossas configurações de ambiente e CI/CD e lançamos enfim o novo site.

## O que o novo site traz de bom?

“Por dentro do capô” o site está muito melhor do que o site antigo, em relação a estrutura ele foi montado para poder apresentar de forma dinâmica vários produtos, não apenas um. Mas as mudanças vão muito além disso:

### Usabilidade em primeiro e segundo lugar!
#### Conteúdos separados de uma nova forma

Testes de usabilidade e dados de Web Analytics mostraram que um dos pontos mais fracos do site antigo era como os materiais ricos eram apresentados. O primeiro ponto era a dificuldade de achar a página com eles porém, depois de estar lá, o usuário se deparava com algumas categorias separadas por tipos de material e sem a possibilidade de filtrá-los.

Por um lado sim, querendo muito o usuário poderia achar qualquer material que a mobLee já fez, mas não existia nenhuma ajuda, nenhuma categoria separada por conteúdo, nível de dificuldade, nenhuma ordem a seguir ou recomendação de materiais - O usuário se deparava com opções, muitas opções, opções demais na verdade e isso só frustrava ou confundia o visitante.

![Área de materiais ricos](/image/blog/moblee-materials.png)

Foi criado esse arranjo dos materiais na página de conteúdos. O time de marketing da mobLee acreditava que muito mais importante do que o tipo de mídia do material, é o seu conteúdo, por isso o conteúdo foi separado por categorias de conteúdo em trilhas, parecido com aplicações de streaming como o Netflix ou o Hulu. Também foram adicionados filtros avançados, para o usuário que já chega no site com certeza do que quer, ter acesso exatamente ao tipo de material que está procurando.

#### Busca e filtro no blog

Oferecer a opção de busca em um blog não é nada revolucionário, de fato é uma obrigação. Era algo que fazia muita falta no layout antigo, porém a novidade que foi entregue foram filtros para ajudar os usuários em suas pesquisas.

![Imagem do blog do site institucional da mobLee, com a barra de filtros no topo](/image/blog/moblee-blog.png)

O objetivo desse filtro, sempre no topo da página principal do blog, é ajudar o usuário que não tem certeza exata do conteúdo que deseja conhecer, então foram oferecidas opções de filtro por tempo de leitura estimado, categoria e nível de complexidade dos artigos. Ficou curioso? Visite a página inicial do blog e experimente.

### Um site de alta velocidade

Um site que carrega rápido é um site que gera menos frustrações. O pessoal do blog da Kissmetrics fez um infográfico (em inglês) que, entre outras coisas, compara o tempo de espera para um site carregar com o número de usuários que desistem e vão fazer outras coisas.

Em resumo, se o seu site demora mais do que 4s para carregar, você pode estar perdendo mais de 25% de usuários. Isso se torna especialmente crítico em celulares. Tanto as pessoas têm menos paciência de esperar um site carregar em um dispositivo móvel como, de outro lado, muitos sites não levam em consideração navegação em 3G e processadores mais fracos de celulares, demorando muito mais para carregar nesses dispositivos. (tente abrir o globoesporte.com num celular não muito potente e você vai entender essa dor).

Além disso, para conseguir uma melhor velocidade uma das estratégias foi garantir que as imagens usadas fossem leves. Alguns pontos que seguimos foi sempre que possível usar imagem em vetor para ícones, .png para desenhos mais complexos e .jpg 72dpi com qualidade entre 50% e 70% para fotos (na época arquivos .webp ainda não eram aceitos por todos os principais navegadores que focamos).

Houve também um grande foco para garantir uma melhor velocidade do site em relação ao anterior (bastante pesado). Alguns pontos foram deixar o Javascript bastante enxuto, sempre que possível usar ele puro, maneirarando no uso de bibliotecas externas, ou tentar construir as coisas em HTML/CSS puro, mantendo o CSS organizado, reutilizando código sempre que possível. Usamos também o mínimo possível de fontes e pesos (tipografia), além de otimizações server-side e entregar o site através de uma CDN.

### Bom, é tudo sobre vendas, estúpido.

Na primeira campanha presidencial de Bill Clinton, no começo da década de 90, um dos seus assessores cunhou a frase “It's the economy, stupid“, e no final, foi sua promessa de melhorar a economia dos EUA que o ajudou a vencer George Bush pai nas eleições.

Sua equipe estava certa, a economia funcionando é o que vai manter um país também funcionando, o seu líder popular. No caso de uma empresa, são as vendas que a deixam em pé e é nisso que o site, sendo seu principal canal de contato com clientes e futuros clientes, deve focar.

#### As páginas de produtos funcionam como Landing Pages

Landing page é o termo usado para páginas de oferta com um único objetivo: a conversão. Então se tira da página quase todas as distrações (links externos, outros assuntos) e o objetivo é unicamente fazer o usuário se convencer e clicar na oferta que a página oferece.

Normalmente elas são bem óbvias, de forma que podem passar batidas por terem uma fórmula óbvia, mas em outros casos nem tanto. As páginas de produto da Hubspot são um ótimo exemplo de uma página aparentemente “normal” de produto, mas veja bem a [página da plataforma de marketing deles](https://www.hubspot.com/products/marketing).

Após você rolar um pouco essa página, repare que todos os botões/links no menu de navegação superior são focados apenas em vendas. Repare no conteúdo da página, também é totalmente focado em vender a plataforma, assim com os links e botões ali.

![Página do produto Engage](/image/blog/moblee-engage.png)

As páginas de produto da mobLee beberam bastante dessa fonte e de outras [teorias de CRO](https://www.hotjar.com/conversion-rate-optimization/). Veja a página do [produto Engage](https://www.moblee.com.br/engage-app-eventos/) por exemplo: Assim que você rola a página todos os links no menu de navegação ou te levam para a venda do produto ou para navegação dentro da própria página (por um lado são botões a mais, ou seja, distração na hora da venda, por outro a usabilidade do usuário não pode ser deixada de lado em relação a apenas converter).

Os links dentro das páginas de produto levam ou para outras páginas de produto (também focadas em venda) ou para cases de sucesso e isso apenas no final da página, para ajudar usuários indecisos sobre o produto a terem mais confiança na qualidade e suas provas sociais.

#### Nosso novo site da um grande destaque para cases

Falando em cases de sucesso, dar mais destaque para os cases aparece como uma das prioridades no briefing mas, por quê?

![Página de Cases da mobLee](/image/blog/moblee-cases.png)

De todos os conteúdos, em especial materiais ricos que uma empresa com foco em marketing digital produz, os Casos de Sucesso dos clientes são os mais estratégicos para vendas. Um case é estratégico pela seu conteúdo “fundo de funil”, ou seja, focado em possíveis clientes que já estão em alguma fase final da sua jornada de compra. 

Podemos dividir a jornada de compra de um cliente de algumas formas, a que eu mais gosto é dividida em 4 grandes etapas:
- Descoberta e aprendizado;
- Reconhecimento do problema;
- Consideração da solução;
- Avaliação e compra.

Enquanto o blog foca na primeira etapa, os eBooks e materiais ricos em geral tem seu foco na segunda, as páginas de produtos e cases aparecem nas últimas duas fases. Os usuários que fazem download de cases em geral estão deixando claro para o time de Marketing de uma empresa que tem um interesse maior do que só aprender sobre o assunto. Cases são os materiais que ajudam a vender, demonstram interesse do usuário.

E o que foi feito sobre isso? Bom, se você acessar agora a [home do site da mobLee](https://web.archive.org/web/20180327144123/https://www.moblee.com.br/) (versão 2017 até 2021) e chegar no meio dela vai perceber que os cases tem um grande espaço de destaque ali, mas não para por aí.

Os cases foram separados dos outros materiais e conteúdos, esses focados mais no início da jornada de compra, e ganharam um grande destaque, em qualquer página do site no menu superior você pode dar de cara com o link “Histórias de Sucessos” e clicando nele vai conhecer os casos de sucesso da mobLee.

## No fim das contas, o projeto valeu a pena?

Pessoalmente, foram 3 meses de muito aprendizado, frustrações e alegrias. Um trimestre com bastante intensidade, digamos assim. Mais importante é o lado da empresa.

Muitas vezes (a maioria delas) é mais fácil/eficiente melhorar um site já existente do que refazer tudo, algumas vezes começar do zero vale a pena, foi esse um desses casos. O site reformulado e com melhor performance e SEO on page garantiu mais acessos diários no blog, sua maioria orgânicos (que vem por pesquisas em buscadores), e isso falando de conteúdos que já existiam antes! 

O tempo médio de visita por usuário aumentou tanto no site quanto no blog, ou seja, menos pessoas ficando menos do que 20/30s e saindo frustradas (site mais rápido e com nova organização), mais gente lendo os posts até o fim (conteúdo é o mesmo, mas o layout é mais confortável para a leitura), então isso aponta para a entrega de uma experiência muito melhor!

Falei antes que é tudo sobre vendas, certo? Bom com esse site no ar a mobLee bateu repetidas vezes o recorde de levantadas de mão (usuários que se dizem interessados em falar com vendedores), ou seja, houve uma visível melhoria na taxa de conversão do site.