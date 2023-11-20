## Introduction
This is a user management application built with Django REST Framework for API CRUD operations and React.

## Requirements
* Python3
* [Pipenv](https://pipenv.pypa.io/en/latest/)
* [PlanetScale DB](https://planetscale.com/)

## Getting started
1. Clone the project to your machine 
2. Navigate into the diretory ```cd django-react-demo```
3. Source the virtual environment ```pipenv shell```
4. Install the dependencies ```pipenv install```
5. Navigate into the frontend directory ```cd client```
5. Install the dependencies ```npm install```

## Run the application
You will need two different terminals for both the client and the server.

1. Make sure you're still in the `client` directory, and start the client server with: 

```bash
npm start
```

This will start the client at [localhost:3000](http://localhost:3000).


2. Start the backend server with:
   
```bash
cd ../server
python manage.py runserver
```
