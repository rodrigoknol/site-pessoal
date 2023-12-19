---
title: Lifeguard
subtitle: O desenvolvimento de um cliente web para uma plataforma de monitoria open source
excerpt: O Lifeguard é um sistema código aberto de monitoramento opinionado e com propriedades de self-healing, onde tive o prazer de ajudar construíndo o seu monitor na versão de cliente web.
challenges: A primeira vez que trabalhei em um projeto de código aberto. Aqui tive o objetivo de projetar tanto em layout como em aplicação um cliente web para funcionar como um display dos resultados de monitoria do sistema.
layout: case.html
repo: https://github.com/LifeguardSystem/lifeguard-web-client
tags:
  - design
  - desenvolvimento
  - projeto
---

## Como foi resolvido

Este web client é organizado seguindo princípios de [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Além da lógica do projeto estar dividida seguindo princípios de SOLID, os componentes do front-end são organizados seguindo princícipios de Atomic Design. A lógica tanto de organização dos componentes tanto em como foram escritos é melhor explicada nesse [artigo sobre web components](/artigos/web-components-o-que-sao-onde-vivem-o-que-comem/).

As regras de negócio em geral e os sistemas responsáveis pela hidratação das páginas foram escritos em [TypeScript](https://www.typescriptlang.org), garantindo a segurança dos tipos na hora de desenvolver, enquanto os web components foram escritos em javascript puro.

O projeto gera um build estático, sendo assim até para economia de custos em quem for executar, ele só precisa de processamento na hora de criar o `build` na esteira de CI/CD, e depois disso pode ficar hospedado como um conjunto de arquivos estáticos.

Um dos desafios do projeto foi a construção de um sistema de mocks que funcione automaticamente na máquina do desenvolvedor quando trabalhando localmente, mas que não sujasse o resultado do build final. Para isso, foi criado [um sistema próprio para execução de mocks](https://github.com/LifeguardSystem/lifeguard-web-client/tree/main/src/mock-local) a partir de um service worker que é chamado apenas no localhost.

O [repositório do client web do Lifeguard](https://github.com/LifeguardSystem/lifeguard-web-client/tree/main) é aberto, ele pode ser acessado por qualquer um, e sugestões e melhorias de código são mais do que bem vindas!