---
layout: blog.html
title: "Um site de evento baseado em dados e com foco em conversão"
subtitle: "O RD on the Road chegou em 2017 a 11 cidades, em todas as 5 regiões do Brasil, e impactou diretamente 5500 pessoas. O projeto me trouxe muito aprendizado e serviu de base para projetos maiores que peguei pela frente."
tags:
  - design
  - desenvolvimento
  - artigo
---

No começo de 2017, recebi o desafio de desenvolver as páginas do site do evento itinerante da [Resultados Digitais](https://resultadosdigitais.com.br/), o [RD On The Road](https://www.rdontheroad.com/). Já foi o terceiro ano do evento, que em 2017 alcançou mais de 5500 participantes em 11 cidades espalhadas por todas as regiões do Brasil. E, junto com a nova edição, veio o terceiro projeto dos sites.

![Imagem da primeira dobra do site RD On the Road 2017](/image/blog/rd-on-the-road-cover.jpg)

Em 2015, foi criado o primeiro site para a primeira edição do On The Road. Na época, a equipe que desenvolveu tanto o site quanto a identidade visual era bem enxuta: apenas uma pessoa. Isso porque o marketing da Resultados Digitais tinha somente um designer e o OTR 2015 foi um dos vários projetos que tiveram que ser desenvolvidos ao mesmo tempo.

Já em 2016, a equipe de design da Resultados Digitais começou o ano com 3 vezes o tamanho inicial — ou seja, 3 designers. Porém, houve pouco tempo para desenvolver e lançar o site. Por causa disso, ele foi elaborado em cima do mesmo template e da mesma estrutura do ano anterior, com mudanças apenas no estilo e adaptações no layout para a identidade visual do evento de 2016.

Em 2017, com uma equipe de design e criação formada por 8 pessoas, foi possível dedicar 70% do tempo de um designer durante mais de um mês para o desenvolvimento do [site do RD On The Road](https://web.archive.org/web/20170801003134/http://rdontheroad.com.br/) (Site sendo carregado pelo internet archive, já que não está mais em produção). Foi criada uma identidade visual nova para o evento, diferente de tudo que a Resultados Digitais já tinha feito antes. Nesse projeto, consideramos importante criar o site do zero e elaborar algo novo com base nos dados que tínhamos dos anos anteriores. Além disso, o site tinha um grande foco em conversão — no caso, venda de ingressos.

## O método utilizado e o cronograma do projeto

Inicialmente foi dado um prazo de 6 semanas e meia para o projeto estar pronto e lançado. Dentro desse espaço de tempo, planejamos terminar o projeto em 5 semanas e meia para a última semana ficar livre no caso de qualquer emergência (spoiler: sim, no fim das contas esses dias finais foram bem importantes e utilizados no projeto).

Com um objetivo claro (criar um site para o RD On The Road 2017 que venda bastante) e um prazo definido (5 semanas e meia), o projeto foi dividido nas seguintes etapas:

<div class="table--wrapper">
<table>
<thead>
<tr>
<th></th>
<th>Semana 0</th>
<th>Semana 1</th>
<th>Semana 2</th>
<th>Semana 3</th>
<th>Semana 4</th>
<th>Semana 5</th>
<th>Semana 6</th>
</tr>
</thead>
<tbody>
<tr>
<td>Briefing</td><td class="background__primary"></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Análise de Similares</td><td class="background__primary"></td><td class="background__primary"></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Análise de Dados do Analytics</td><td class="background__primary"></td><td class="background__primary"></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Alinhamentos com Stakeholders</td><td class="background__primary"></td><td class="background__primary"></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Arquitetura da Informação</td><td></td><td class="background__primary"></td><td class="background__primary"></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Protótipos (Wireframes)</td><td></td><td ></td><td class="background__primary"></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Layout (Style Guide)</td><td></td><td></td><td class="background__primary"></td><td class="background__primary"></td><td class="background__primary"></td><td></td><td></td>
</tr>
<tr>
<td>Desenvolvimento</td><td></td><td></td><td></td><td class="background__primary"></td><td class="background__primary"></td><td class="background__primary"></td><td></td>
</tr>
<tr>
<td>Testes e Qualidade</td><td></td><td></td><td></td><td></td><td></td><td class="background__primary"></td><td></td>
</tr>
<tr>
<td>Planejamento e instalação de web analytics</td><td></td><td></td><td></td><td></td><td></td><td class="background__primary"></td><td></td>
</tr>
</tbody>
</table>
</div>

## Análise de similares

Analisamos sites de eventos, principalmente aqueles corporativos. Focamos em eventos de tecnologia e/ou marketing e vendas, assim como sites diversos com layout escuro, um requisito apresentado por quem foi responsável pelo desenvolvimento da identidade visual do evento.

Depois da escolha de alguns similares interessantes, foi estudado como o conteúdo é disposto em cada um deles e que tipo de conteúdo é mostrado em cada site, além de seus padrões de layout e as boas ideias que alguns desses sites tiveram em como mostrar as informações.

Os dois principais focos nessa etapa foram:

### 1. Pesquisa sobre como a arquitetura da informação funciona nesses sites

Aqui foi analisado o que esses sites fazem de diferente e interessante e também fui atrás de padrões seguidos pela maioria e que fazem sentido serem replicados. Pode-se dizer que essa é uma pesquisa macro, em que o site é visualizado como um todo e é visto como as páginas se comportam entre elas, por exemplo.

Algumas ideias que vieram dessas pesquisas: colocar nas páginas das cidades do OTR 2017 um link destacado com acesso a uma carta ao chefe e separar a área de FAQ (perguntas frequentes) das páginas das cidades.

### 2. Pesquisa de soluções de layout

Em uma pesquisa micro, com foco em ver como alguns blocos dos sites funcionam, foram procuradas soluções inteligentes de layout, estudada como se comporta a tipografia, feita a escolha das cores e da paletas de cores. Em suma, essa é uma pesquisa de como é a “cara” dos sites e por que eles são assim.

Uma das ideias que chegaram ao site final e que veio dessas pesquisas foi a de utilizar títulos (h1) “estourados” no site do RD On The Road.

### Alguns dos sites analisados

Esses são alguns dos principais sites analisados nesse projeto:

- RD Summit 2016 — evento de Marketing Digital
- RD On The Road 2016 — evento itinerante de Marketing Digital
- Dublin Tech Summit — evento de tecnologia
- SXSW 2017 — evento de filme, música e interatividade
- Inbound — evento de Marketing Digital
- Techmedia — evento itinerante
- Agency Forty — site com layout escuro
- Coachella Festival — festival de música

## Análise de dados de web analytics 2016

As ferramentas de web analytics instaladas no site do RD on the Road em 2016 foram o Google Analytics e o Hotjar. O [Analytics](https://analytics.google.com/analytics/web/) é a ferramenta de análise de dados de site mais usada na internet e, a não ser que seu site tenha uma quantidade monstruosa de acessos (como seria por exemplo o caso de portais como o UOL ou o G1), ele oferece os seus serviços de graça.

Já o [Hotjar](https://www.hotjar.com/) é uma ferramenta paga (há a versão gratuita também, porém com algumas limitações) que mostra os dados retirados do site de uma forma bem mais visual. Um destaque é para o mapa de calor do seu site, que mostra as partes que os usuários mais veem ou em que mais clicam. Também existe a opção de gravar a sessão do usuário no seu site e depois, ver o caminho que ele fez, acompanhando até mesmo o movimento do mouse.

As informações analisadas nesse projeto foram referentes ao período compreendido entre março de 2016, mês do lançamento do site daquele ano, até julho do mesmo ano, quando o evento terminou.

### Alguns dos principais insights

#### Bounce Rate

Umas das principais informações retiradas das análises dos dados do Google Analytics tem relação com o bounce rate das páginas. Conhecida em português como [taxa de rejeição](https://resultadosdigitais.com.br/marketing/taxa-de-rejeicao-bounce-rate/), o bounce rate representa o número percentual de usuários que saem do site sem clicar em nada.

Os usuários que entraram site diretamente pela página de alguma cidade — que foram a maioria, pois a mídia paga levava direto para as páginas de cidades — não acessavam praticamente mais nenhum conteúdo do site. Essas páginas tinham uma taxa de rejeição acima de 95%.

Para efeito de comparação, usuários que começaram seu acesso pela home tiveram uma taxa de rejeição um pouco maior do que 60%.

Uma das formas de melhorar esse número é conseguir tráfego mais qualificado. Pelos dados vistos em 2016, usuários muito qualificados chegavam ao site através das páginas da Resultados Digitais. Para aumentar o tráfego vindo da própria RD, uma das estratégias, em 2017, foi criar conteúdos sobre o evento e que levem para o site do RD OTR, como esse post que você está lendo (originalmente lançado no blog da Resultados Digitais) e o post de lançamento do evento.

No ano de 2016 o pico de acessos no site foi durante o lançamento do evento. Os 3 primeiros dias com o site no ar foram responsáveis por ⅓ dos acessos totais no período em que os dados foram analisados. Assim, foi confirmada a importância de lançar o evento em 2017 com agendas bem completas e bastante informação para aproveitar esse tráfego inicial ao máximo.

#### Mídias pagas

Outro insight importante foi em relação às mídias pagas, em especial os banners. O tráfego que veio por meio desse canal representou 50% dos acessos em 2016, mas apresentou uma taxa de rejeição muito alta, bem acima de qualquer outro canal.

Trabalhar para garantir um melhor alinhamento entre a mensagem desses banners e a página para a qual eles levam é importante para diminuir a taxa de rejeição do site. Isso ajuda a garantir que o site trás uma boa experiência para o usuário e está dentro ou acima das expectativas dos visitantes.

## Arquitetura da informação

Essa é a etapa em que foram definidas as informações que iriam para o site, em quais páginas essas informações estariam dispostas, quais tipos de páginas o projeto teria e a ordem da informação. Em resumo, aqui foi definido o que o site teria e desenvolvido uma hierarquia para dividir e dispor o conteúdo por ordem de importância.

Com base no briefing entregue no início do projeto, nas personas desenvolvidas para o evento durante a criação da identidade visual, no estudo de similares e também nos dados de Analytics de 2016 foi desenvolvido o esqueleto informacional do site.

Outro ponto levado em consideração foi o uso de palavras-chave com bom volume de tráfego no Google dentro de títulos e/ou do conteúdo do site para [melhorar o SEO](https://pt.wikipedia.org/wiki/Otimiza%C3%A7%C3%A3o_para_motores_de_busca). Esse foi levado em consideração em especial porque eventos de marketing e/ou eventos itinerantes não são um grande sucesso de buscas, já Marketing Digital ou [André Siqueira](https://www.linkedin.com/in/andregcsiqueira/) (co-fundador da RD e palestrante do evento) conseguem um resultado bem melhor em buscadores.

Como o grande objetivo das páginas que estão sendo feitas é vender o evento, foram utilizadas técnicas de CRO - Conversion rate optimization - para otimizar as páginas.

![Imagem da proposta de sitemap do RD On the Road 2017](/image/blog/rd-on-the-road-sitemap.jpg)

Nessa etapa, o conteúdo previsto do site foi validado diversas vezes com diferentes pessoas. Aproveitei a experiência do time de design da RD e consegui bastante insights e feedbacks com todos. Também colhi feedbacks com o time de eventos da RD, até chegar a um resultado final otimizado e alinhado com todos os objetivos do projeto e dos principais responsáveis diretos ou indiretos pelo projeto RD On The Road.

## Desenvolvimento dos wireframes (prototipagem)

O desenvolvimento do wireframe é importante para começar a passar as ideias da etapa anterior para o papel, testar ideias novas e mostrar para todos os responsáveis como vai ser a cara do site.

A ferramenta utilizada nessa etapa foi o [Figma](https://www.figma.com/). Na época, foi minha primeira experiência com ele e eu a utilizei pela possibilidade de trabalhar com uma ferramenta de design em qualquer computador, de conseguir apresentar o trabalho facilmente para qualquer pessoa em qualquer lugar e de poder fazer modificações on the go.

Além de ser gratuito e de poder ser utilizado em praticamente qualquer computador direto do navegador, para essa etapa (wireframes) o Figma funcionou muito bem.

![Wireframe do RD On the Road no Figma](/image/blog/rd-on-the-road-wireframe.jpg)

Aqui foram prototipados o layout da página inicial, um layout padrão genérico para cidades e mais um layout para a página de perguntas e downloads.

![Wireframe do RD On the Road com zoom na proposta da página de cidade](/image/blog/rd-on-the-road-grid.jpg)

O wireframe passou por diversas iterações. Inicialmente, foi trabalhado com o layout mais genérico possível, porém, no final dessa etapa, algumas soluções de layout já começaram a ser testadas neles, como o fundo escuro, a hierarquia da tipografia e a sessão de palestrante destaque — todos destacados na imagem acima.

## Desenvolvimento do layout — criação dos estilos e guidelines

O desenvolvimento do layout do site começou em uma seção de pair design com a designer responsável por criar a marca do RD On The Road 2017.

![Algumas imagens e desenhos resultados da sessão de pair design](/image/blog/rd-on-the-road-co-creation.jpg)

Nessa sessão de 1h30min, nós nos dividimos em dois papéis: o de gerador e o de sintetizador. Enquanto um designer (o gerador, papel pelo qual fui responsável) trabalhava criando soluções visuais para o projeto, o outro (a [Thaís](https://www.linkedin.com/in/thaissprada/), designer responsável pela Identidade Visual do evento) apontava o caminho que considerava o melhor para seguir, os locais em que o layout estava fugindo da identidade planejada e onde estava sendo bem desenvolvido.

Por ser uma reunião relativamente curta, o tempo foi utilizado para trabalhar nas seções mais complexas do site, que poderiam servir de base para o restante do layout.

![Um dos primeiros testes da primeira dobra — a primeira parte do site que aparece quando ele carrega no navegador do usuário — das páginas de cidade.](/image/blog/rd-on-the-road-banner-v0.jpg)

Muito do que foi desenvolvido nessa etapa acabou não chegando no site final, porém ajudou a desenvolver mais a identidade visual e a mostrar caminhos interessantes para onde ela deve ir e também para onde alguns elementos não funcionariam bem.

![Protótipo de média fidelidade da sessão de destinos.](/image/blog/rd-on-the-road-prototype.jpg)

Como visto na imagem acima, alguns layouts testados ainda mudaram bastante durante o projeto. Essa tela foi um dos primeiros testes da seção de seleção de cidades na home em que o retângulo cinza à direita representa o mapa; o retângulo branco ao fundo, alguma imagem; e o retângulo azul à esquerda, o menu.

### A criação de um style guide

A próxima microetapa dentro do desenvolvimento de layout foi a criação de um style guide para o projeto, que se misturou com a etapa de desenvolvimento de código. Foi o primeiro momento em que as ideias desenvolvidas para o projeto começaram a ser visualizadas na tela de um navegador.

![Style-guide sendo renderizado pelo navegador.](/image/blog/rd-on-the-road-style.jpg)

No style guide foram apresentados os estilos base para serem usados no projeto. Foi muito importante o desenvolvimento deste guia para a criação de um layout coeso e que faça sentido como um todo, em todas as páginas e seções.

Aqui a tipografia foi padronizada e testada — nas primeiras versões do site, o parágrafo base era feito na fonte Source Sans com tamanho de 16px, mas, depois de alguns testes em diversos dispositivos nessa etapa, em especial pelo contraste entre o fundo preto e o texto, o tamanho foi trocado para 17px.

![Exemplo de sessão com o uso de diversos pesos de fonte.](/image/blog/rd-on-the-road-dev.jpg)

Tudo foi desenvolvido aqui considerando o resultado final — não apenas visual, mas também a parte de desenvolvimento. O código foi escrito pensando na versão final do site, na modularidade do código e em uma sintaxe bem feita.

## Desenvolvimento de código (HTML/CSS/JS)

Quando a etapa de desenvolvimento de código começou, o primeiro trabalho foi pegar os blocos de código criados na etapa anterior e organizá-los dentro da estrutura prevista para o site na fase de arquitetura da informação e de desenvolvimento do layout.

![Editor de texto aberto com códigos do site sendo mostrados.](/image/blog/rd-on-the-road-code.jpg)

Um dos maiores desafios dessa etapa foi desenvolver o site com diversas seções sem, algumas vezes, o conteúdo final. O conteúdo foi chegando aos poucos e depois ainda foi iterado com o tempo para manter o site o mais otimizado possível.

Algumas tecnologias ajudaram muito no desenvolvimento rápido do código. Para trabalhar o CSS do site, foi utilizado um [pré-processador chamado Sass](https://sass-lang.com/) e um [gerador de sites estáticos chamado Jekyll](https://jekyllrb.com/).

Simplificando o “tequinês” acima para uma tradução no bom português, usar o Sass garantiu maior velocidade na hora de transformar os estilos desenvolvidos em código anteriormente. Caso você trabalhe com CSS e não conheçe o Sass, vá atrás e descubra em especial a “magia” dos mixins.

Já o Jekyll foi a ferramenta que trouxe agilidade para a hora de multiplicar o layout das cidades por 11, fazendo com que a edição de qualquer coisa que mudasse em todas essas páginas fosse uma tarefa sem dores. Qualquer mudança na área de patrocínio, por exemplo, poderia ser uma tarefa bem chata e maçante. O Jekyll torna isso bem mais rápido, é só editar uma vez que ele multiplica a mudança para as outras páginas, porém sem a necessidade de um CMS, gerando um site estático como resultado final.

Em JavaScript, um dos hacks utilizados nesse site foi manter as agendas atualizadas a partir de uma planilha do Google Drive. Assim que os dados eram atualizados nessa planilha, automaticamente eram atualizados no site. [Esse post (em inglês)](https://coderwall.com/p/duapqq/use-a-google-spreadsheet-as-your-json-backend) explica como utilizar uma planilha do Google para atualizar dados em um site em tempo real (conhecimento de JavaScript é necessário para conseguir fazer isso).

O outro ponto foi deixar automática a troca das próximas cidades na sua seção na home, o que acaba com a necessidade de fazer essa troca manualmente 10 vezes durante o período em que os eventos acontecem.

### Testes em diferentes navegadores e dispositivos

Essa não foi a etapa mais difícil, mas foi a mais trabalhosa. Depois de desenvolver o código, foi importante garantir que o site funcionava da forma certa em todos os navegadores modernos (Chrome, Firefox, Edge, Safari), em dispositivos mobile (iOS, Android), em computadores de mesa (Windows, Mac), além de diferentes tamanhos de tela.

Quem não acha muito chato sites que não carregam parte do conteúdo, que possuem imagens estourando para fora da tela ou que têm janelas que deveriam abrir mas não abrem, dentre outros problemas?

![Imagem demonstrando bug no carregamento de uma tabela em um dispositivo móvel.](/image/blog/rd-on-the-road-bug.jpg)

Bom, HTML/CSS nem sempre se comportam igualmente em todos os sistemas ou simplesmente partes deles nem funcionam em alguns. Assegurar que o site funcione de forma otimizada para todos os usuários é muito importante para garantir uma ótima experiência para os visitantes.

Existem diversos tipos de erros, alguns maiores e outros menores, que se encontram nesses testes. Quanto maior e mais complexo o site que você está fazendo, maiores são as chances de se deparar com algo inesperado em um ambiente em que o site ainda não foi testado.

Manter o código “limpo” e com uma boa sintaxe ajuda muito na hora da manutenção. No caso de dúvidas na hora do desenvolvimento, o [site Can I Use](https://caniuse.com/) é uma ferramenta sensacional para ajudar a descobrir se algo que você planeja utilizar funcionará ou não para todo mundo,

### Planejamento e instalação de web analytics

Com o site pronto e testado, a última etapa foi a instalação de ferramentas de web analytics para conseguirmos captar dados sobre o uso do site e usá-los como insights tanto para melhorias no site do On The Road 2017 quanto para ajudar a desenvolver os futuros sites de eventos da RD.

Para aproveitar ainda mais o potencial do Google Analytics, foram desenvolvidos eventos no site. A grande maioria foi para mensurar os resultados de cada um dos botões de Call-to-Action que levam o usuário ao site da venda de ingressos. O objetivo de mensurar esses dados é saber qual botão e/ou área do site trabalha melhor na conversão dos usuários para compra e quais tem mais espaço para melhora. O Hotjar também foi instalado.

![Site com tags de Analytics que estavam presentes no site do OTR no dia do lançamento do evento.](/image/blog/rd-on-the-road-tags.jpg)

## E o cronograma, foi respeitado?

No início desse post apresentei o cronograma inicial previsto para o desenvolvimento do site e aqui está o cronograma final, da forma como o projeto realmente aconteceu:

<div class="table--wrapper">
<table>
<thead>
<tr>
<th></th>
<th>Semana 0</th>
<th>Semana 1</th>
<th>Semana 2</th>
<th>Semana 3</th>
<th>Semana 4</th>
<th>Semana 5</th>
<th>Semana 6</th>
</tr>
</thead>
<tbody>
<tr>
<td>Briefing</td><td class="background__primary"></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Análise de Similares</td><td class="background__primary"></td><td class="background__primary"></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Análise de Dados do Analytics</td><td class="background__primary"></td><td class="background__primary"></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Alinhamentos com Stakeholders</td><td class="background__primary"></td><td class="background__primary"></td><td class="background__primary-40"></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Arquitetura da Informação</td><td></td><td class="background__primary"></td><td class="background__primary"></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Protótipos (Wireframes)</td><td></td><td ></td><td class="background__primary"></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>Layout (Style Guide)</td><td></td><td></td><td class="background__primary"></td><td class="background__primary"></td><td class="background__primary"></td><td class="background__primary-40"></td><td></td>
</tr>
<tr>
<td>Desenvolvimento</td><td></td><td></td><td></td><td class="background__primary"></td><td class="background__primary"></td><td class="background__primary"></td><td></td>
</tr>
<tr>
<td>Testes e Qualidade</td><td></td><td></td><td></td><td></td><td></td><td class="background__primary"></td><td></td>
</tr>
<tr>
<td>Planejamento e instalação de web analytics</td><td></td><td></td><td></td><td></td><td></td><td class="background__primary"></td><td class="background__primary-40"></td>
</tr>
<tr>
<td>Duplicar para parceiros</td><td></td><td></td><td></td><td></td><td></td><td class="background__primary-40"></td><td class="background__primary-40"></td>
</tr>
</tbody>
</table>
</div>

O projeto atrasou em uma semana. Na cor clara estão os passos que não estavam previstos no Cronograma original.

A principal razão para a semana a mais de trabalho foi a decisão de duplicar todas as páginas do site e criar um “site irmão” para o RD On the Road Agências, um evento para agências de Marketing Digital que ocorrerá nas mesmas cidades que seu irmão mais velho, um dia antes, com exceção dos destinos do Norte e do Nordeste.

Apesar do atraso de uma semana no projeto, a semana 6 foi deixada vazia no cronograma para casos de emergência (como essa troca de escopo e criação de um novo evento, por exemplo). Desse modo, o projeto ainda foi entregue no tempo acordado antes do início.

## Lançamento do site e do RD On The Road 2017

Com tudo pronto e testado, o site ficou pronto para ser lançado! O RD on the Road chegou em 2017 a 11 cidades, em todas as 5 regiões do Brasil, e impactou diretamente 5500 pessoas. O projeto me trouxe muito aprendizado e serviu de base para projetos maiores que peguei pela frente.
