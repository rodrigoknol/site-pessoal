---
title: Site institucional da mobLee
subtitle: Melhorando a performance e acessibilidade do site de uma empresa em crescimento acelerado
excerpt: Três meses para redesenhar todo o sistema de sites da empresa do 0, criando junto uma nova identidade visual, melhorando performance, acessibilidade e em especial conversão e ainda trazendo de forma natural a expansão de portfólio de produtos.
challenges: O site era o principal canal de comunicação com clientes e parceiros, aquisição de novos clientes e disseminação de conteúdo da mobLee. Ou seja, ter um bom site era obrigação para alcançar os resultados que desejavam. Com a evolução de portfólio de produtos da empresa, além dos problemas endêmicos de performance do antigo site, abriram espaço para um redesign.
layout: case.html
production: https://web.archive.org/web/20180327144123/https://www.moblee.com.br/
tags:
 - design
 - desenvolvimento
 - projeto
---

## Como foi resolvido
O projeto teve três grandes pontos principais que merecem o destaque, que são os seguintes:

### Impactando positivamente todas as áreas da empresa que tem contato direto com clientes e usuários

O [documento de briefing](https://docs.google.com/document/d/1SdJcXDscNz4PPu2pVoggIroZOrA_QDme8weiPCXBF2w/edit) criado como primeira etapa do projeto já resume o principal objetivo do site, que é “Comunicar com clareza a proposta de valor da mobLee para assim vender.“. Você também encontra no briefing uma área com o nome “Compromisso de ajudar todas as áreas da mobLee com o site” e nela temos os seguintes tópicos:
- Manter ou aumentar o destaque que era dado ao time de CS (Customer Success);
- Ter um espaço facilmente atualizável e editável para novidades/lançamentos de features do produto;
- Deixar os materiais educativos mais orientados a [buyers journey](https://blog.hubspot.com/sales/what-is-the-buyers-journey);
- Ter uma página específica para cases de sucesso/estudos de casos;
- Ter um espaço referente a cultura da empresa.

Aproveitei a chance que tive ao fazer um redesign e criar um desenvolvimento do zero para conseguir fazer um site que não trabalhe apenas para o time de marketing, mas para a empresa como um todo. Juntar as ideias de diversas áreas desde a parte de planejamento foi um dos maiores acertos desse projeto.

### Em 3 meses, projetar, executar e lançar dois sites de alta complexidade

Um projeto de um trimestre, resumido em: analisar concorrentes e similares, dados de acessos gerais do site antigo, decidir tecnologias a serem usadas, arquitetar como a informação seria disposta no novo site, prototipar, desenvolver o código disso e lançar o site, ufa!.

Tudo isso multiplicado por dois, pois além do site principal, o blog também foi refeito. Além disso, era preciso definir a comunicação de todos os novos produtos, assim como deixar o layout (e código) maleável e componentizado o suficiente para aceitar atualizações no total de produtos.

### Devops: A troca de servidor

O servidor não estava conseguindo atender todas as expectativas com o site antigo e, durante o processo de criar um site novo, foi decidido começar com ele desde o início hospedado em um novo servidor.

Os produtos e nossas APIs da mobLee estavam todos hospedados em servidores da Amazon (EC2 e S3), então foi natural fazer a migração dos sites desenvolvidos pelo time de marketing, como [as ferramentas](/projeto/moblee-tools/) por exemplo, além é claro do site institucional e blog.

## Aprendizados
Tiveram muitos aprendizados e o projeto teve muito mais coisa! Tanto que tem um [post inteiro entrando em bem mais detalhes](/artigos/redesenhando-um-site-e-blog-para-vender-mais-e-demonstrar-melhor-o-portfolio-de-produto/) nesse projeto, se tiver interesse em aprofundar, bora! Mas quero dividir os principais aprendizados aqui:

### Desenvolvimento

A configuração do novo servidor e suas otimizações tiveram (bem) mais complicações do que o esperado. Tanto que, tentamos lançar o novo site no dia 8 de outubro mas tivemos que voltar atrás por causa da enorme instabilidade que ele estava apresentando. Apenas no dia 11 do mesmo mês, após algumas noites mal dormidas, estávamos satisfeitos com nossas configurações de ambiente e CI/CD e lançamos enfim o novo site.

Houve um grande foco para garantir uma melhor velocidade do site em relação ao anterior (bastante pesado). Alguns pontos foram deixar o Javascript bastante enxuto, sempre que possível usar ele puro, maneirarando no uso de bibliotecas externas, ou tentar construir as coisas em HTML/CSS puro, mantendo o CSS organizado, reutilizando código sempre que possível. Usamos também o mínimo possível de fontes e pesos (tipografia), além de otimizações server-side e entregar o site através de uma CDN.

Além disso, para conseguir uma melhor velocidade uma das estratégias foi garantir que as imagens usadas fossem leves. Alguns pontos que seguimos foi sempre que possível usar imagem em vetor para ícones, .png para desenhos mais complexos e .jpg 72dpi com qualidade entre 50% e 70% para fotos (na época arquivos .webp ainda não eram aceitos por todos os principais navegadores que focamos).

### Design

As páginas de produto beberam bastante da fonte de [teorias de CRO](https://www.hotjar.com/conversion-rate-optimization/), funcionando como landing pages. Veja a página do [produto Engage](https://www.moblee.com.br/engage-app-eventos/) por exemplo: Assim que você rola a página todos os links no menu de navegação ou te levam para a venda do produto ou para navegação dentro da própria página (por um lado são botões a mais, ou seja, distração na hora da venda, por outro a usabilidade do usuário não pode ser deixada de lado em relação a apenas converter).

Os links dentro das páginas de produto levam ou para outras páginas de produto (também focadas em venda) ou para cases de sucesso e isso apenas no final da página, para ajudar usuários indecisos sobre o produto a terem mais confiança na qualidade e suas provas sociais.