---
title: Site do RD On the Road 2017
subtitle: Um site de evento baseado em dados e com foco em conversão
excerpt: O evento chegou em 2017 a 11 cidades, em todas as 5 regiões do Brasil, e impactou diretamente 5500 pessoas. O projeto me trouxe muito aprendizado e serviu de base para projetos maiores que peguei pela frente.
challenges: Tivemos um prazo de 6 semanas e meia para o projeto estar pronto e lançado. Dentro desse espaço de tempo, planejamos terminar o projeto em 5 semanas e meia para a última semana ficar livre no caso de qualquer emergência (é claro que aconteceu esse dita emergência).
layout: case.html
tags:
 - design
 - desenvolvimento
 - projeto
---
## Como foi resolvido
Com o cronograma difícil, o mais importante foi antes afiar a faca duas vezes, para depois cortar - planejamento e contenção de riscos. O cronograma foi dividido nas etapas apresentadas abaixo, utilizando o [Double Diamond como um framework de projeto e inovação](/#process):

### <img src="/image/icons/double_diamond-empty.svg" class="icon" /> Pré projeto
- Briefing

### <img src="/image/icons/double_diamond-1.svg" class="icon" /> Discovery
- Análise de Similares
- Análise de dados de Analytics
- Alinhamentos com Stakeholders

### <img src="/image/icons/double_diamond-2.svg" class="icon" /> Explore
- Arquitetura da informação
- Protótipos e Wireframes
- Layout (definição de um Style Guide)

### <img src="/image/icons/double_diamond-3.svg" class="icon" /> Develop
- Transformar Style Guide em componentes
- Desenvolvimento das páginas (HTML / CSS / JS)
- Testes e Qualidade

### <img src="/image/icons/double_diamond-4.svg" class="icon" /> Deliver
- Planejamento e instalação de web analytics

Escrevi um [artigo que entra em mais detalhes](/artigos/um-site-de-evento-baseado-em-dados-e-com-foco-em-conversao/) de como aconteceu cada uma dessas etapas nesse projeto, dê uma olhada!

## Aprendizados

Foi o meu primeiro projeto com grande foco em SEO (Search Engine Optimization). Um ponto levado em consideração foi o uso de palavras-chave com bom volume de tráfego no Google dentro de títulos e/ou do conteúdo do site para melhorar o SEO. Esse foi levado em consideração em especial porque eventos de marketing e/ou eventos itinerantes não são um grande sucesso de buscas, já Marketing Digital ou André Siqueira (co-fundador da RD e palestrante do evento) conseguem um resultado bem melhor em buscadores.

Como o grande objetivo das páginas que estão sendo feitas é vender o evento, foram utilizadas técnicas de CRO - Conversion rate optimization - para otimizar as páginas.

Para desenvolver, só tive acesso ao [Amazon S3](https://aws.amazon.com/pt/s3/) em produção, ou seja, precisava desenvolver o site estático, e me trouxe um primeiro contato com alguma versão “infante” de [JAMStack](https://jamstack.org/). Montei o site usando [Jekyll](https://jekyllrb.com/) e na falta de acesso ao banco de dados, para facilitar a atualização dos times de negócio, o uso de planilhas do google com script como um banco de dados rudimentar que podia atualizar o conteúdo de cidades, datas e palestrantes em tempo real.
