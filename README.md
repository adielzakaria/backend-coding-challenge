# backend coding challenge

my attempt at creating a rest mircoservice for the backend coding challenge
I tried to use mvc architecture for extensibility and maintainability

## completed features

* api that fetch 100 most starred repositories from github api since 30 days ago , assemble repos that use the same language , sort them by number of repositories to find the trendings  
* view that illustrates the data fetched
* no security features were implemented except the use of helmet

## Mapped routes

* {/api/trends, GET} : returns a json containing the languages of the 100 most starred repositories from github api since 30 days ago sorted by the total number of repositories
   .it accepts 2 parameters sort & order
* {,GET} : the home view

## params

* sort accepts 2 values : 'stars' and 'repositories' default: repositories
* order accepts 2 values : 'asc' and 'desc' default : desc

## technlogies used

* nestjs
* handlebars
* typescript

## source folder structure

```bash
|--src
  |--api
   ---apiController.ts
   ---apiModule.ts
   ---apiService.ts
  |--client
   ---clientController.ts
   ---clientModule.ts
   ---cientService.ts
  |--helpers
   ---dataFetcher.ts
   ---date.ts
   ---language.ts
   ---server.ts
  |--views
   ---index.hbs
  ---appModule.ts
  ---main.ts
```
