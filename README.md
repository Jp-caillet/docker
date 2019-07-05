# mds_m1_Caillet_jean-Philippe_optimperf

## MongoDB Atlas
- Créer un Projet
- Construire un nouveau cluster
- Sélectionner une instance gratuite de 512MO (Ireland)
- Créer un nom utilisateur / mot de passe pour se connecter avec notre application REST dans **Databas Access** et un nouvel IP dans **Network Acess** avec *Add current IP Adress*
- Cliquer sur **Connect** dans **Clusters**, cliquer sur *Connect your Application* et copier coller le lien du "Connection String Only" dans *db.js*



## Installer le projet
- `git clone https://github.com/Jp-caillet/mds_m1_Caillet_jean-Philippe_optimperf.git`
- `cd mds_m1_Caillet_jean-Philippe_optimperf`
- `npm install`
- `node app.js`


## BASE DE DONNEE

### Users 

| id       | name     | age   | email  | login  | mdp    |
| -------- | -------- | ----- | ------ | ------ | ------ |
| ObjectID | String   | INT   | String | String | String |

## RESTful URLs

### Good URL examples
* Create of users:
    * POST http://localhost:3000/create
    * exemple params : {"name": "jp","age": 25,"email":"jp78920@hotmail.com", "login": "jp", "mdp": "test"}
* List of users:
    * GET http://localhost:3000/search
* A single user:
    * POST http://localhost:3000/read
    * exemple params : { "id": "5d08aa02177f9039090681f0" }
* UPDATE an user:
    * POST http://localhost:3000/update
    * exemple params : {"id": "5d08aa02177f9039090681f0", "email": "jptest@hotmail.fr"}
    * all params exept mdp
* UPDATE an user:
    * POST http://localhost:3000/delete
    * exemple params : {"id": "5d08aa02177f9039090681f0"}


## Request & Response Examples

### API Resources

  - [GET /magazines](#get-magazines)
  - [GET /magazines/[id]](#get-magazinesid)
  - [POST /magazines/[id]/articles](#post-magazinesidarticles)

### POST /CREATE User

Example: http://localhost:3000/create

body (json):
```
{ 
	"name": "jp",
	"age": 25,
	"email":"jp78920@hotmail.com", 
	"login": "jp",
	"mdp": "test"
}
```


Response body:
```
{
    "_id": "5d09fd26f3967b0e65f483f4",
    "name": "jp",
    "age": 25,
    "email": "jp78920@hotmail.com",
    "login": "jp",
    "mdp": "$2b$10$VxDPnLyDOEDZ2QcUtcQIMeYlWiY2SYpyvewjbzWjTGtQ/979dWxmC"
}
```


### GET /USERS

Example: http://localhost:3000/search

Response body:
```
[
    {
        "_id": "5d08b1e0e17e863a5678e789",
        "name": "jujuju",
        "age": 25,
        "email": "jujuj78920@hotmail.com",
        "login": "juju",
        "mdp": "$2b$10$WA6wd/yJJ5/.FQu00Cp86uItFhjVu9WJdgodPoCRGHfuE0NUVhnTy"
    },
    {
        "_id": "5d09fcbf9725060e4d367036",
        "name": "test",
        "age": 25,
        "email": "test@hotmail.com",
        "login": "test",
        "mdp": "$2b$10$BgA6AIISVDOF0szBQ3nmQ.191t8KFfhn0tKr.5hAbDwT2u2qSV0Gu"
    },
    {
        "_id": "5d09fd26f3967b0e65f483f4",
        "name": "chocolat",
        "age": 25,
        "email": "choco@hotmail.com",
        "login": "choco",
        "mdp": "$2b$10$VxDPnLyDOEDZ2QcUtcQIMeYlWiY2SYpyvewjbzWjTGtQ/979dWxmC"
    }
]
```

### POST /SEARCH User

Example: http://localhost:3000/read

body (json):
```
{
	"id": "5d08b1e0e17e863a5678e789"
}
```


Response body:
```
{
    "obj": {
        "_id": "5d08b1e0e17e863a5678e789",
        "name": "jujuju",
        "age": 25,
        "email": "jujuj78920@hotmail.com",
        "login": "juju",
        "mdp": "$2b$10$WA6wd/yJJ5/.FQu00Cp86uItFhjVu9WJdgodPoCRGHfuE0NUVhnTy"
    }
}
```


### POST /UPDATE User

Example: http://localhost:3000/update

body (json):
```
{
	"id": "5d08b1e0e17e863a5678e789",
	"email": "jptestapi@gmail.com"
}
```


Response body:
```
{
    "code": 200,
    "message": "succes"
}
```

### POST /DELETE User

Example: http://localhost:3000/update

body (json):
```
{
	"id": "5d08b1e0e17e863a5678e789"
}
```


Response body:
```
{
    "code": 200,
    "message": "succes"
}
```


###Cluster Architecture:
![alt text](https://www.linode.com/docs/databases/mongodb/build-database-clusters-with-mongodb/mongodb-cluster-diagram.png)

![alt text](https://severalnines.com/sites/default/files/api_arch.png)