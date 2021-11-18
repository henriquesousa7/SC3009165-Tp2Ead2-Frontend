# TP2 - Documento

GET: /api/produtos/

Retorna todos os produtos cadastrados.

----------------
GET: /api/produtos/:id

Retorna o produto selecionado de acordo com o _id de parâmetro.

Requer:
   "_id" - String contendo o _id do produto a ser selecionado.

----------------
POST: /api/produtos

Cadastra um novo produto de acordo com as informações passadas.

Requer:
   "titulo" - O nome do produto.
   "preco" - Um número que corresponde ao preço do produto
   "descricao" - A descricao do produto.

----------------
PUT: /api/produtos/:id

Atualiza os dados de um produto ja cadastrado de acordo com o _id de parâmetro.

Requer:
   "_id" - String contendo o _id do produto a ser selecionado.
   "titulo" - O nome do produto.
   "preco" - Um número que corresponde ao preço do produto
   "descricao" - A descricao do produto.

----------------
DELETE: /api/produtos/:id

Deleta um produto ja cadastrado de acordo com o _id de parâmetro.

Requer:
      "_id" - String contendo o _id do produto a ser selecionado.