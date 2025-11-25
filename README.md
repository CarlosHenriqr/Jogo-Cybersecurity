# Game of Cybersecurity - Documento Final

`<a href="#">`{=html}`<img src="https://img.shields.io/badge/MADE%20WITH-REACTJS-blue" />`{=html}`</a>`{=html}\
`<a href="#">`{=html}`<img src="https://img.shields.io/badge/MADE%20WITH-FLASK-red" />`{=html}`</a>`{=html}

```{=html}
<p align="center">
```
`<img src="https://github.com/CamilleSA/GameOfCybersecurity/blob/main/assets/GOC.gif" />`{=html}
```{=html}
</p>
```
## 1. Explicação do Jogo

O **Game of Cybersecurity** é um jogo educacional online e de código
aberto, inspirado em jogos de cartas modernos, criado com o objetivo de
aumentar a conscientização e maturidade dos jogadores em temas de
cibersegurança.

O jogo funciona como um sistema de perguntas e respostas cronometrado,
onde os jogadores precisam responder questões sobre segurança digital
usando gestos intuitivos (swipe) ou botões. Cada resposta correta
adiciona tempo extra ao cronômetro, incentivando precisão e rapidez.

Ao final, o jogador recebe uma pontuação baseada no desempenho e pode
compará-la com outros usuários por meio de um ranking global.

### Mecânica do Jogo

-   Sistema de tempo limitado que recompensa respostas corretas com
    tempo adicional\
-   Interface interativa com suporte a gestos (swipe) ou botões\
-   Dois níveis de dificuldade adaptados ao usuário\
-   Feedback detalhado ao final, mostrando respostas e explicações\
-   Sistema de ranking para estimular competição saudável e aprendizado
    contínuo

## 2. Ameaças e Temas Tratados

### Nível Iniciante (Beginner)

-   Identificação de phishing e e-mails fraudulentos
-   Segurança de senhas e autenticação
-   Privacidade em redes sociais
-   Reconhecimento de sites seguros (HTTPS)
-   Proteção contra malware simples
-   Boas práticas de navegação

### Nível Avançado (Advanced)

-   Ataques avançados de engenharia social
-   Segurança bancária e e-commerce
-   Proteção de dados pessoais (LGPD/GDPR)
-   Ransomware e outras ameaças complexas
-   Segurança em home office e redes Wi-Fi
-   Autenticação multifator (MFA)
-   Backup e recuperação de dados

## 3. Público-Alvo

### Público Primário

-   Jovens e adultos (16+)\
-   Estudantes\
-   Profissionais que usam internet no trabalho

### Público Secundário

-   Professores\
-   Empresas\
-   Pessoas preocupadas com segurança digital

## 4. Instruções de Jogo

### Como Jogar

1.  Acesse o jogo e escolha um nome ou jogue anonimamente\
2.  Escolha a dificuldade\
3.  Use swipe ou botões\
4.  Veja o resultado\
5.  Compare no ranking

## 5. Contribuição para Ética e Cidadania Digital

-   Educação preventiva\
-   Consciência de privacidade\
-   Responsabilidade digital\
-   Inclusão e acessibilidade\
-   Impacto social

# Home

```{=html}
<p align="center">
```
`<img width="800px" src="https://github.com/CamilleSA/GameOfCybersecurity/blob/main/assets/Username.png" />`{=html}
```{=html}
</p>
```
# Quiz

```{=html}
<p align="center">
```
`<img width="800px" src="https://github.com/CamilleSA/GameOfCybersecurity/blob/main/assets/ChooseQuiz.png" />`{=html}
```{=html}
</p>
```
# Game

```{=html}
<p align="center">
```
`<img width="800px" src="https://github.com/CamilleSA/GameOfCybersecurity/blob/main/assets/Game.png" />`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<img width="800px" src="https://github.com/CamilleSA/GameOfCybersecurity/blob/main/assets/Swipe.png" />`{=html}
```{=html}
</p>
```
# Details Board

```{=html}
<p align="center">
```
`<img width="800px" src="https://github.com/CamilleSA/GameOfCybersecurity/blob/main/assets/Details.png" />`{=html}
```{=html}
</p>
```
# LeaderBoard

```{=html}
<p align="center">
```
`<img width="800px" src="https://github.com/CamilleSA/GameOfCybersecurity/blob/main/assets/LeaderBoard.png" />`{=html}
```{=html}
</p>
```
# Parte Técnica

## Docker

``` sh
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo docker-compose build
sudo docker-compose up
```

## ReactJS

``` sh
npm install
npm start
```

## Flask

``` sh
pip install -r requirements.txt
flask run
```

## Estrutura do Projeto

    /src
      /Components
      /Assets
      /Pages
      App.js
      Dockerfile
      package.json

## Rotas do Servidor

### POST /addScore

``` json
{
  "username": "username",
  "difficulty": "difficulty",
  "score": "score"
}
```

### GET /getLeaderboard

``` json
{
  "difficulty": "difficulty"
}
```

# UML FrontEnd

```{=html}
<p align="center">
```
`<img width="800px" src="https://github.com/CamilleSA/GameOfCybersecurity/blob/main/assets/UMLGameCyber.png" />`{=html}
```{=html}
</p>
```
# Norma de Commits

-   \[ADD\]\
-   \[FIX\]\
-   \[DEL\]\
-   \[UP\]
