# MEcommerce

## 1. Construa a aplicação servidora
`cd api`
`mvn clean install`

OR:

`docker run -it --rm --name my-maven-project -v "$PWD":/usr/src/mymaven -w /usr/src/mymaven -v /var/run/:/var/run/ maven mvn clean install`

## 2. Execute docker-compose 

`cd docker`

`docker-compose up`

## 3. Executar a aplicação cliente
`cd -`

`cd front`

`npm install`

`npm start`

## 3. Teste
Por default a aplicação cliente roda em <http://localhost:4200>
Já a aplicação servidora responde em <http://localhost:8080>
