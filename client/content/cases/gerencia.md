---
title: Gerencia leite
subtitle: Um sistema para gestão e manejo de gado leiteiro - Desenvolvendo tanto uma aplicação como uma empresa do zero
excerpt: Minha experiência empreendendo. Expandindo e desenvolvendo um produto em todas as suas frentes, garantindo que a arquitetura e design system sejam escaláveis e em especial que entregue valor para os nossos clientes.
challenges: O Gerencia leite é um projeto muito especial para mim, onde além do trabalho de designer e desenvolvedor, consigo ir além e explorar outras áreas como gestão de produto e até administração de empresas. Uso ele como um espaço de aprendizado constante e atuar em todos esses papeis enquanto escalo o produto é com certeza o meu maior desafio.
layout: case.html
production: "https://gerencialeite.com.br/"
tags:
  - design
  - desenvolvimento
  - gestão de produto
  - projeto
---

## Como foi resolvido

O projeto vem evoluindo nos últimos anos, iniciou baseado nos trabalhos de um MVP em planilha criado pelo prof. André Thaler da UDESC. O projeto pode ser dividido em duas partes, uma antes do lançamento, onde seguiu uma jornada de desenvolvimento de design, e depois do lançamento trabalhando em [ciclos de PDCA](https://endeavor.org.br/estrategia-e-gestao/pdca/) (Plan, Do, Check, Act), com insumos de dados de Analytics e em especial feedback dos usuários.

Sendo um projeto ágil e digital, está em constante evolução, e por ser um time bastante enxuto (bastante mesmo), as decisões de arquitetura de software foram tomadas pensando não apenas em escala, mas escala casada com agilidade para desenvolver e fazer deploys estando sozinho.

### Desenvolvimento

O Projeto começou com mais desenvolvedores, e em uma stack “padrão”, conhecida como MERN (MongoDB, Express JS, React JS and Node JS), o front com deploy pelo [Netlify](https://www.netlify.com/), e o Back hospedado no [Heroku](https://www.heroku.com/) , ambos na versão gratuita.

Nessa primeira stack, com o tempo, e com a pressa que foi desenvolvido, sem documentação, sem testes unitários, e com o alto tempo de aquecimento do Heroku versão gratuita, aos poucos o projeto se tornou insustentável.

#### Simplificando para acelerar

O time diminuiu, e o projeto ficou lento, e com bastante débito técnico. Decidi por recomeçar, as regras de negócio estavam bem documentadas, e eu me sentia muito mais confortável em uma [stack JAM](https://jamstack.org/). Para simplificar ainda mais a gestão de devops, passei o Back para a tecnologia [serverless](https://jamstack.org/glossary/serverless/), ainda em Node, e deixei o deploy tanto do front-end, como do Back-end automatizados direto do Netlify.

É claro, não repetindo os mesmos erros do passado, aproveitei para fazer uma [documentação](https://app.gerencialeite.com.br/js/README.md) ampla e sempre atualizada, além de adicionar testes unitários, e colocar eles dentro do fluxo de deploy.

Essa nova stack é ideal? Não necessariamente, mas conseguiu o que eu precisava, que era:

- Mais agilidade para desenvolver;
- Deploy simplificado;
- Back-end mais rápido e responsivo.

Também aproveitei para melhorar o front, e garantir acesso offline e possibilidade de instalar o Gerencia leite direto do navegador para os usuários, ou seja, [ele se tornou um PWA](https://web.dev/progressive-web-apps/).

### Design

Com tempo e espaço para testar o que aprendo, consegui rodar muitas coisas que as vezes no dia-a-dia em outros projetos, precisam ser feitas com pressa.

Antes do lançamento, houve espaço para seguir todas as etapas de Discovery e Exploração o quanto eu me senti confortável. Foram várias entrevistas de profundidade, alguns dinâmicas e experimentação com vários protótipos, sempre testados com usuários chave, para aos poucos diminuir ao máximo as incertezas, e melhorar as hipóteses de negócio e design.

A folha de estilos e o sistema de design do projeto foram evoluindo aos poucos, enquanto eu fui aprendendo mais, tive tempo e espaço para melhorar o Gerencia leite, e vem sendo um espaço ótimo para treinar e melhorar em estilos secundários (como modo escuro), e conseguir focar, aprender e melhorar em acessibilidade, bebendo muito da fonte do trabalho do [Design System do Governo do Reino Unido](https://design-system.service.gov.uk/).

## Aprendizados

Não existe um stack ideal / que resolve todos os problemas e acerta em todos os pontos, mas existem stacks de desenvolvimento que vão se adaptar melhor as necessidades dos projetos.

Além disso, o Gerencia leite é um “projeto escola” onde tenho a chance de testar e por em prática o que aprendo, sejam novas dinâmicas, seja treinar e melhorar como atuo em testes de usabilidade, seja aprender melhorar ferramentas de Design, nesse caso, um projeto que me ajudou muito a me aprofundar no Figma.
