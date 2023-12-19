---
title: Gerencia leite
subtitle: Um sistema para gestão e manejo de gado leiteiro - Desenvolvendo tanto uma aplicação como uma empresa do zero
excerpt: Minha experiência empreendendo. Expandindo e desenvolvendo um produto em todas as suas frentes, garantindo que a arquitetura e design system sejam escaláveis e em especial que entregue valor para os produtores rurais, seus clientes.
challenges: Além do trabalho de designer e desenvolvedor, consegui ir além e explorar outras áreas como gestão de produto e até administração de empresas. Uso o Gerencia leite como um espaço de aprendizado constante - atuar em todos esses papeis enquanto escalo o produto é com certeza o meu maior desafio.
layout: case.html
production: "https://gerencialeite.com.br/"
tags:
  - design
  - desenvolvimento
  - gestão de produto
  - projeto
---

## Como foi resolvido

O projeto iniciou baseado nos trabalhos de um MVP em planilha criado pelo prof. André Thaler da UDESC. A história do Gerencia leite como produto pode ser dividida em duas partes, uma antes do lançamento, onde seguiu uma jornada de desenvolvimento de design forte, com a criação da interface entrevistas e testes com usuários, e depois do lançamento ele vem evoluindo seguindo [ciclos de PDCA](https://endeavor.org.br/estrategia-e-gestao/pdca/) (Plan, Do, Check, Act), com insumos de dados de Analytics e em especial feedback dos usuários.

Sendo um projeto ágil e digital, está em constante evolução, e por ter um time bastante enxuto, as decisões de arquitetura de software são tomadas pensando em especial na escala casada com agilidade para desenvolver e fazer deploys de forma eficiente, tudo isso com foco em baixo custo de manutenção.

## Design

Com tempo e espaço para testar o que aprendo, consegui rodar muitas coisas que as vezes no dia-a-dia em outros projetos, precisam ser feitas com pressa.

Antes do lançamento, houve espaço para seguir todas as etapas de Discovery e Exploração o quanto eu me senti confortável. Foram várias entrevistas de profundidade, alguns dinâmicas e experimentação com vários protótipos, sempre testados com usuários chave, para aos poucos diminuir ao máximo as incertezas, e melhorar as hipóteses de negócio e design.

A folha de estilos e o sistema de design do projeto foram evoluindo aos poucos, enquanto eu fui aprendendo mais, tive tempo e espaço para melhorar o Gerencia leite, e vem sendo um espaço ótimo para treinar e melhorar em estilos secundários (como modo escuro), e conseguir focar, aprender e melhorar em acessibilidade, bebendo muito da fonte do trabalho do [Design System do Governo do Reino Unido](https://design-system.service.gov.uk/).

## Desenvolvimento

### Simplificando para acelerar

Com o layout definido e as regras de negócio bem documentadas, o projeto foi criado utilizando a [stack JAM](https://jamstack.org/). Para simplificar ainda mais a gestão de DevOps, o Backend e APIs foram desenvolvidos com uma tecnologia [serverless](https://jamstack.org/glossary/serverless/), em Node, e o processo de CI/CD tanto do front-end, como do Back-end são automatizados direto no provider, que no caso é o [Netlify](https://www.netlify.com).

O projeto é [documentado](https://app.gerencialeite.com.br/js/README.md) tanto por arquivos de Readme dentro dos principais repositórios, assim como uma wiki com as regras de negócio, além disso conta com testes unitários que tem a sua execução como um passo dentro da esteira de CD.

Essa stack é perfeita? Não necessariamente, mas conseguimos com ela o que eu precisavamos dentro do escopo do projeto, que era:

- Mais agilidade para desenvolver;
- Deploy simplificado;
- Back-end mais rápido e responsivo;
- Baixo custo de manutenção.

Também criamos um client web que acesso offline e possibilidade de instalar o Gerencia leite direto do navegador para os usuários, ou seja, [ele se tornou um PWA](https://web.dev/progressive-web-apps/). O que facilitou o seu port para a [loja de aplicativos do Google](https://play.google.com/store/apps/details?id=br.com.gerencialeite.app.twa).

### A Arquitetura

O projeto tem tanto o seu pacote de APIs quanto o client web desenvolvidos usando JavaScript e o banco de dados utilizado é o MongoDB.

Tanto o front, como o backend são organizados seguindo princípios de [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), e o backend apesar de rodar como funções separadas em um contexto serverless, é desenhado de uma forma que pode ser facilmente transportado para outra nuvem e até para outro contexto, como por exemplo um monolito ou grupo de serviços organizados em containers.

Além da lógica do projeto estar dividida seguindo princípios de SOLID, os componentes do front-end são organizados seguindo princícipios de Atomic Design. A lógica tanto de organização dos componentes tanto em como foram escritos é melhor explicada nesse [artigo sobre web components](/artigos/web-components-o-que-sao-onde-vivem-o-que-comem/).

## Aprendizados

Não existe um stack ideal / que resolve todos os problemas e acerta em todos os pontos, mas existem stacks de desenvolvimento que vão se adaptar melhor as necessidades dos projetos.

Além disso, o Gerencia leite é um “projeto escola” onde tenho a chance de testar e por em prática o que aprendo, sejam novas dinâmicas, seja treinar e melhorar como atuo em testes de usabilidade, seja aprender melhorar ferramentas de Design, nesse caso, um projeto que me ajudou muito a me aprofundar no Figma.
