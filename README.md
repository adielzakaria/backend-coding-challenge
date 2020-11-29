# backend coding challenge

my attempt at creating a rest mircoservice for the backend coding challenge
I tried to use mvc architecture for extensibility and maintainability

## completed features

* api that fetch 100 most starred repositories from github api since 30 days ago , assemble repos that use the same language , sort them by number of repositories to find the trendings  
* view that illustrates the data fetched , not my proudest designs I'll give you that
* no security features were implemented except the use of helmet

## technlogies used

* nestjs
* handlebars
* typescript

## source folder structure

-src
 --api
   ---apiController.ts
   ---apiModule.ts
   ---apiService.ts
 --client
   ---clientController.ts
   ---clientModule.ts
   ---cientService.ts
 --helpers
   ---comparer.ts
   ---dataFetcher.ts
   ---date.ts
   ---language.ts
 --views
   ---index.hbs
 --appModule.ts
 --main.ts
