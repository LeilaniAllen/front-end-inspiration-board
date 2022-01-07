# Inspiration Board:
This is a website that allows you to create inspirational boards with notes. 

Created using Javascript/React for front-end and Python for back-end.

Demo link: http://ice-ice-inspo-board.herokuapp.com

Canva Slide Presentation: https://www.canva.com/design/DAEi_mbu8HI/ivOCNb491BLizeBCBZDVMg/view?utm_content=DAEi_mbu8HI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

<img width="1245" alt="Screen Shot 2022-01-06 at 9 00 21 PM" src="https://user-images.githubusercontent.com/62310329/148495575-b3965295-1269-42ff-ac81-9b1f2d3fb561.png">


<img width="964" alt="Screen Shot 2022-01-06 at 8 51 37 PM" src="https://user-images.githubusercontent.com/62310329/148495717-701ce175-7c16-4ca0-9d98-5f87364a232d.png">



<img width="1096" alt="Screen Shot 2022-01-06 at 8 52 07 PM" src="https://user-images.githubusercontent.com/62310329/148495701-95d28f4f-ae4e-46a9-8418-9cb547c3d873.png">

### Feature Set

* Create new Message Boards
* Create new inspration cards for each board
* Add likes to each card
* Delete cards from Message Boards
* Sends notification on slack when someone posts a new board and or card

### Managing Dependencies

Inspiration Board relies on:
```bash
  - React 
  - Axios
  - Flask
  - Yarn
  - SQLAlchemy
  ```

## Front-end Environment & Set-up


In the project directory, you can run:

```bash
$ npx create-react-app .
```

### Add `axios`

Install axios:

```bash
$ yarn add axios
```



### Creating a `.env` File

Create a file named `.env`.

The front-end layer needs to send API requests to the back-end layer. In order to handle this, the front-end layer repo **must** include a `.env` file with this line:

```
REACT_APP_BACKEND_URL=http://localhost:5000
```

Use this environment variable to send your API requests. You can read it by using the expression `process.env.REACT_APP_BACKEND_URL`. For example, we may use it like this in any component:

```js
axios.get(`${process.env.REACT_APP_BACKEND_URL}/ice-ice-inspo-board`, {
    // ...
```

This will make Heroku deployment easier.


### Commit and Push

Commit and push your files to your repo, especially including the `package.json` file!

</details>


# Back-End Environment & Set-up

### Setup

The goal for setup is to cover all of the set up needed at the beginning of this project, which includes:

1. Forking and cloning
1. Managing dependencies
1. Setting up development and test databases
1. Setting up a `.env` file
1. Running `$ flask db init`
1. Running `$ flask run` and `$ FLASK_ENV=development flask run`

### Requirements

### Fork and Clone

1. Fork this project repo to your own personal account
1. Clone this new forked project

### Managing Dependencies

Create a virtual environment:

```bash
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ # You're in activated virtual environment!
```

Install dependencies (we've already gathered them all into a `requirements.txt` file):

```bash
(venv) $ pip install -r requirements.txt
```

### Setting Up Development and Test Databases

Create a database:

1. A development database named `your_database_name`

### Creating a `.env` File

Create a file named `.env`.

Create two environment variables that will hold your database URLs.

1. `SQLALCHEMY_DATABASE_URI` to hold the path to your development database
1. [OPTIONAL] `SQLALCHEMY_TEST_DATABASE_URI` to hold the path to your development database

Your `.env` may look like this:

```
SQLALCHEMY_DATABASE_URI=postgresql+psycopg2://postgres:postgres@localhost:5432/your_database_name
```







