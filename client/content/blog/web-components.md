---
layout: blog.html
title: "Web Components - O que são? Onde vivem? O que comem?"
subtitle: "Eles trazem consigo a vantagem de resolver problemas web sem reinventar a roda, como os navegadores resolvem, e oferecendo familiaridade de abraçar as regras, APIs, padrões e ideias que já vem embarcadas na internet, sem precisar (re)aprender a aplicar ideias conforme uma biblioteca, ou framework exige."
tags:
  - desenvolvimento
  - artigo
---

Os Web componentes são um agregado de algumas técnicas e tecnologias web, em especial três: A criação de Custom Elements, o uso de Shadow DOM nativo, chamado de Shadow Root, e o uso de elementos HTML chamados Template e Slot - são uma resposta “out of the box”, para a criação de componentes reutilizáveis com UI e lógica própria, rodando direto do navegador.

O seu real poder vai além da performance de rodarem nativamente, mas de como, por natureza, podem trabalhar junto, apoiando bibliotecas e frameworks.

Eles trazem consigo a vantagem de resolver problemas web sem reinventar a roda, como os navegadores resolvem, e oferecendo familiaridade de abraçar as regras, APIs, padrões e ideias que já vem embarcadas na internet, sem precisar recorrer a coisas como “jeito React”, ou precisar (re)aprender a aplicar ideias conforme uma biblioteca, ou framework exige. Web componentes dão a chance de abraçar abstrações ao mesmo tempo que quando e, se preciso, mergulhar fundo em como o DOM realmente trabalha, e fazer ajustes de forma nativa, sem precisar ficar preso a forma de trabalho de uma ou outra ferramenta.

Uma boa “DX” - experiência para o desenvolvedor - em trabalhos digitais é primordial para projetos evoluirem de forma rápida e eficiente, e bibliotecas e frameworks de front-end abstraem a necessidade de lidar diretamente com Shadow DOM, de ajudar o browser a elencar o que e como renderizar, entre outros pontos para assim o programador focar no desenvolvimento de produtos, e não na tecnologia por trás.

Alguns problemas chegam no momento em que algumas dessas abstrações param de funcionar para algum ou outro cenário específico de um projeto, ou ao adicionar “DX” começamos a piorar a “UX” - a experiência do usuário final - seja por performance deteriorada, sejam bugs que aparecem por uma abstração “errada” para o cenário, seja por uso demasiado da rede do usuário, etc. **O uso de componentes nativos junto em uma stack front-end podem ajudar a fazer sistemas melhores e mais resilientes.**

## Quem usa isso no mundo real?

Um bom exemplo de uso de Web Components é o web app do [Apple Music](https://music.apple.com/us/browse). O serviço foi criado usando Ember.js como framework (o que faz sentido, sendo que o [Ember tem sua semântica baseado na Cocoa](https://guides.emberjs.com/v1.12.0/concepts/), a API de renderização dos sistemas operacionais da Apple), e a equipe da Apple usou [junto com o seu framework de escolha um grupo de componentes nativos](https://dev.to/ionic/apple-just-shipped-web-components-to-production-and-you-probably-missed-it-57pf). Eles co-existem, não é ou framework, ou componentes nativos, estão juntos em um mesmo projeto, o que permite ao time tirar proveito das vantagens de ambos.

## Como Web Components podem se encaixar em projetos?

Sejam servindo de apoio em conjunto com outras ferramentas e bibliotecas, ou como a tecnologia chave para montar componentes, como eles podem se encaixar em projetos novos ou existentes? Em seu artigo, - [O custo da Conveniência](https://surma.dev/things/cost-of-convenience/index.html), Surma sugere trabalhar as abstrações em camadas, uma compondo no topo da outra. Cada camada adicionando mais conveniência e utilidades.

Com isso, as camadas de mais baixo nível, não devem tentar abstrair a plataforma, e sim abraça-la, seguir os seus padrões e a forma como funciona. A sua sugestão é começar com o CSS nativo, criando um código modular e “tree-shakable” - sem tralhas, limpo e direto - com uma camada subsequente de Web Components, que não trazem surpresas, rodam nativos, funcionam em todos os navegadores sem precisarem serem compilados, e só a partir das próximas camadas, aí sim, começar a adicionar as bibliotecas ou frameworks como React, a cada nível se afastando um pouco dos primitivos da plataforma e alcançando abstrações mais genéricas.

Fazer as camadas de nível mais baixo com tecnologias nativas faz todo o sentido. **A web tem em sua essência uma evolução não destrutiva**, um site escrito a três décadas ainda funciona em navegadores modernos, e ao construir os alicerces de um projeto de forma nativa, isso garante ao projeto a resiliência extrema inerente à plataforma. Permite trabalhar com manutenção centrada na confiabilidade, focando em **preservar as funções do sistema, e fazer correções usando tecnologias que não serão deixadas para trás por quem desenvolveu** (O fiasco da evolução do Angular.js não compatível com as versões novas que abriu tanto espaço para o React que o diga 👀).

### Trabalhando a web em camadas - Design atômico

Podemos abraçar essa ideia, e trazer um pouco mais de organização usando uma [metodologia como Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/). Ao construir sites e aplicações, não fazemos páginas: construimos sistemas, e o Design Atômico é uma forma de abstrair o sistema que forma um site ou aplicação em camadas, o que torna essa metodologia bastante prática pra aplicar as ideias acima. As camadas atômicas são:

1. Átomos
2. Moléculas
3. Organismos
4. Templates (a biologia não foi tão longe)
5. Páginas

Aqui um pouco do que cada uma representa como componente, ou grupo de componentes, usando o Instagram como exemplo:
![As camadas do Atomic Design exemplificadas com a interface do Instagram](/image/blog/web-components-atomic-design.png)

Assim como na química, dentro dessa metodologia, átomos são indivisíveis, o menor nível possível. Um botão, um ícone, uma imagem… Neles está embutido não apenas o estilo estático, como também seu comportamento em alguns estados, como hover, Focus, etc… Aqui falamos de estilo (CSS), e comportamentos padrões, não existe a expectativa de nenhum “conhecimento” neles, um átomo não sabe sobre outros átomos, ou sobre o conteúdo.

A cada nível acima, são criados agrupamentos, quem até podem ter um comportamento próprio dentro deles, relacionados a visualização, como uma lógica de rolagem, ou responsividade, mas ainda existe a expectativa de que não “sabem” sobre conteúdo, nem sobre a interação entre esses grupos.

É só no último nível, a página, que entram em jogo as regras de negócio, os casos de uso, e a comunicação com o mundo exterior, seja por APIs do navegador ou externo. Nesse nível, podemos abstrair novamente, são muitas funcionalidades e regras esperadas para se colocar em um único arquivo, dividir essa lógica utilizando [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) ou alguma outra metodologia que quem desenvolver estiver confortável, aqui faz bastante sentido.

Como os Web Components entram nessas camadas aí? Todos os átomos podem ser nativos, deixando toda a **gestão de regras de renderização e pintura e o controle de Shadow DOM sendo geridas direto pelo Browser, sem precisar de um "middle-man”**. Já o controle desses componentes, as regras de negócio, as conexões e os gateways e a estruturação do projeto, que sejam feitos com as ferramentas que quem for desenvolver fique mais confortável e eficiente usando.

## Utilizando na prática

Como para tudo web-nativo, o site da MDN tem uma [documentação](https://developer.mozilla.org/en-US/docs/Web/Web_Components), detalhada e muito interessante sobre Web Componentes e suas principais tecnologias, além de tutoriais com exemplo. Outro documento que me ajudou muito foi [esse artigo do JavaScript.info](https://javascript.info/slots-composition) sobre como trabalhar com slots.

Ao olhar rápido para a documentação, pode assustar um pouco, aprender novos elementos HTML como template e slots, e deixar na mão do Browser o controle do Shadow DOM era algo que eu nem sabia que era possível antes de me aprofundar na documentação, mas ao começar a utilizar os web-componentes eles se mostraram práticos, e podem ser configurados para funcionar de forma muito parecida com componentes React ou Vue.

### Quais ferramentas usar?

Para começar a utilizar web-componentes nativos no seu projeto você só precisa de… um navegador, e pronto, eles não precisam ser compilados, e tem uma vantagem natural que é, eles incentivam pela forma que são construídos a dividir os estilos em um arquivo CSS, a estrutura e semântica em um arquivo HTML, e a lógica em um JS. Isso parece tão básico, mas ao mesmo tempo é um respiro de ar puro voltar para a web pura, sem amarras e regras específicas herdadas de outras plataformas.

Porém, além do trabalho direto com os componentes, existem frameworks que podem ajudar, em especial o [Stencil](https://stenciljs.com), que vem com uma carta na manga: você cria o componente uma vez, e ele transpila ele para o framework que desejar, como também mantém nativo se desejar. Ou seja, se você tem vários times usando frameworks diferentes, mas precisa criar uma base unificada, um design system, é uma mão na roda no qual você cria uma vez e tem todas as versões.

### Como os web-componentes funcionam?

Usei esse site, o meu pessoal, como uma caixa de areia para ir aprendendo e testando web-componentes, [o repositório é aberto](https://github.com/rodrigoknol/site-pessoal) para quem quiser conhecer mais além disso, inspecionar alguns dos elementos enquanto navega, pode ajudar a ver eles na prática:
![A primeira dobra do meu portfólio renderizada com o menu de navegação sendo inspecionado](/image/blog/web-components-home.png)

No exemplo acima, o botão de início na barra de navegação está sendo inspecionado, e vemos que o navegador está renderizando um componente chamado “custom-anchor-with-icon”, e com a forma que esses componentes são criados, o navegador já renderiza eles sem ajuda externa! Nesse componente, existem parâmetros (icon, alt) que foram criados para ele, e funcionam de forma muito parecida com as props de componentes react.

Além disso, vemos o “shadow-root” (a interpretação nativa do Shadow DOM) rodando direto do navegador no menu de componentes à esquerda. Cada Custom Components roda dentro de sua própria sand-box, e a partir da lógica adicionada no script que define o componente, o próprio navegador decide quando, como e quais partes re-renderizar quando precisar, tudo isso “por conta”.

Cada componente, em sua instância, tem seu shadow-root, com acesso a sua própria folha de estilos (caso você adicione uma). As regras de CSS globais não afetam o componente, porém todos componentes tem acesso as custom properties (as variáveis CSS), mais uma tecnologia que pode ser usada em conjunto com o Shadow DOM, e que nesse site, não economizei no uso. Assim, garanto que os estilos contidos em cada componente seguem regras e padrões globais definidas pelas custom properties, como no exemplo abaixo:
![Um componente de item de tab sendo inspecionando e mostrando como ele é organizado internamente](/image/blog/web-components-component.png)

O projeto está organizado a partir do design atômico, nem tudo nele ainda se tornou um Web Component, mas esse foi um exercício que ajuda a mostrar que eles não são apenas viáveis como tecnologia, como funcionam de forma incremental, servindo de apoio ao projeto, e não exigem uma refatoração de 100% do que já foi feito, trazendo agilidade e não fazendo trabalho por apenas trabalho.
![Organização das pastas do projeto, com um exemplo de código dentro de um editor de texto](/image/blog/web-components-code.png)

## Vale a pena se aprofundar?

A experiência que estou tendo está sendo ótima, eles podem entrar aos poucos em projetos que já existem, ou serem planejados desde a concepção. Não trazem consigo nenhuma carga de dependências e podem ser bem poderosos, seja o seu objetivo um projeto com mais performance, seja estar mais próximo das regras e forma de pensar / trabalhar da própria web, ou seja para padronizar os principais componentes, e facilitar a manutenção de projetos com múltiplas bibliotecas e frameworks.

Como qualquer tecnologia - ou ferramenta - Web components não são uma bala de prata, não é o react killer, e com toda a certeza não vai valer a pena refatorar um projeto inteiro em produção de uma vez só por trocar tecnologia, mas sim, uma nova ferramenta para ter na caixa de ferramentas de um desenvolvedor, que em alguns cenários podem fazer toda a diferença. Vejo eles sendo incrivelmente úteis em dois cenários quase opostos, que seriam projetos simples ou muito grandes:

No caso de projetos simples, muitas vezes, em blogs, sites pessoais ou de eventos, que não vão se tornar uma grande plataforma, utilizar um framework ou biblioteca pode ser tentar acertar uma formiga com uma bazuca, uma quantidade muito grande de trabalho inicial e muita manutenção, manter pacotes em dias etc podem ser complicados. Nesse caso os componentes nativos trazem muitos dos benefícios que os frameworks trariam, com uma necessidade muito menor de infra para serem criados e mante-los.

Por fim, vejo o maior potencial no uso em projetos enormes, em que vários times atualizam um produto, utilizando micro-frontends com tecnologias diferentes, ao manter os componentes básicos como nativos, a gestão dele só precisa ser feita uma vez, e utilizada por todos os times, independente se algum time usa React, outra Angular. Isso pode trazer sanidade para a manutenção do projeto, diminuindo o trabalho de atualizações e correções de erros, e ajudando a garantir que todos os front-ends estejam na mesma versão dos componentes.
