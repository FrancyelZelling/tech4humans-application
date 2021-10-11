## Frontend

Execute o comando `yarn start` na pasta frontend para executar.

## Backend

Insira a chave da api do OpenWeatherMap e a port do servidor em um arquivo com o nome .env

```
API_KEY={KEY}
PORT={PORT_NUMBER}
```

Insira as credenciais do banco de dados no arquivo `ormconfig.json`

```
{
  "type": "postgress",
  "host": "localhost",
  "port": "{PORT_NUMBER}",
  "username": "{USERNAME}",
  "password": "{PASSWORD}",
  "database": "{DATABASE_NAME}",
}
```

Depois de configurado o ambiente, execute o comando `yarn dev`.
