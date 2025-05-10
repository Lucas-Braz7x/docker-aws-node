# docker-aws-node

Repositório criado para a avaliação da disciplina de Sistemas Operacionais 2 (SO2).

Este projeto demonstra a construção e implantação de uma aplicação Node.js utilizando Docker e AWS, com foco em práticas modernas de conteinerização e orquestração de serviços em nuvem.

# Tecnologias Utilizadas

- Docker: utilizado para conteinerizar a aplicação Node.js (API) e o banco de dados PostgreSQL, garantindo ambientes isolados e replicáveis.
- Node.js: plataforma usada para construir a API, que consome dados de uma API pública de esportes.
- PostgreSQL: banco de dados relacional utilizado para armazenar os dados consumidos e tratados pela aplicação.
- AWS ECS (Elastic Container Service): serviço de orquestração de contêineres utilizado para subir a aplicação em produção.
- AWS ECR (Elastic Container Registry): repositório privado de imagens Docker na AWS, utilizado para armazenar e versionar as imagens da aplicação.

# Estrutura do Projeto

- API Node.js: responsável por consumir dados de uma API de esportes e disponibilizá-los para o frontend ou outros consumidores.
- Banco de Dados postgreSQL: Roda em um contêiner separado, acessível pela aplicação via rede interna do Docker.
- Docker Compose: facilita o gerenciamento dos contêineres localmente.
- Deploy na AWS: a imagem da aplicação é empacotada com Docker, enviada para o AWS ECR, e utilizada para subir um serviço no ECS (Fargate ou EC2), garantindo escalabilidade e alta disponibilidade.

# Objetivo

Demonstrar na prática o uso integrado de tecnologias como Docker, Node.js, PostgreSQL e AWS para desenvolvimento, conteinerização e implantação de uma aplicação completa baseada em microsserviços.
