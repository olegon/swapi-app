# SWAPI App

O projeto é divido em duas pastas, client e server, que são, respectivamente, o front-end e o back-end da aplicação.

## Client

Em construção! :p

## Server

### Instalar dependências

```
npm install
```

### Busca inicial de dados

```
SQLITE_FILEPATH=/tmp/swapi.db npm run setup
```

- SQLITE_FILEPATH: variábel de ambiente que diz qual é o arquivo do SQLite a ser utilizado.

### Iniciar o servidor

```
PORT=8080 SQLITE_FILEPATH=/tmp/swapi.db npm start
```

- PORT: variável de ambiente que diz para aplicação qual a porta que deve ser utlizada;
- SQLITE_FILEPATH: variábel de ambiente que diz qual é o arquivo do SQLite a ser utilizado.

### Recursos

- GET __/api/v1/people__: obtém todas as personagens
- GET __/api/v1/people/:id__: obtém detalhes de uma personagem através do seu id
- GET __/api/v1/species__: obtém as espécies
- GET __/api/v1/films__: obtém os filmes
- GET __/api/v1/planets__: obtém os planetas
- GET __/api/v1/vehicles__: obtém os veículos
- GET __/api/v1/starships__: obtém as espaçonaves
