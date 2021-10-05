## Frontend

### painel esquerdo

- [ ] busca de cidades
- [ ] informações da cidade(cidade, país, temp atual, umidade, clima)

### painel direito

- [ ] top 5 cidades mais pesquisadas
- [ ] ultimas cidades pesquisadas

## Backend

- [ ] conexão com api do openwheatermap
- [ ] endpoint para fazer as buscas
- [ ] retornar busca com dados da openwheatermap api
- [ ] incrementar valor da cidade pesquisada caso a resposta for valida
- [ ] criar row caso seja a primeira pesquisa da cidade

## Database

### cities table

- id: primary_key
- city*id: int - \_id é unico de cada cidade, strings podem conter inconsistências*
- searched: int - _valor para ser incrementado cada vez que a mesma cidade for procurada_

## Misc

[Paleta de cores](https://colorhunt.co/palette/393e4600adb5aad8d3eeeeee)
