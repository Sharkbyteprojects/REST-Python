# REST4PYTHON
[ON DOCKER HUB](https://hub.docker.com/r/shark2byte/rest4python)

## How To:
- You need to have Docker installed!
- Create a Dockerfile like this (YOU CAN FIND THE FILE IN THIS REPOS UNDER
 `/restpy/Dockerfile`
 , info 
 `CMD ./run.sh`
  Start your webserver, don't copy another 
  `run.sh`
  !):
```
FROM shark2byte/rest4python:latest

COPY . .

CMD ./run.sh

```
- Create Python and HTML files, go down in this
 `Readme.md` 
 file to get help for pythonfile, you can find an example in this repo under
  `/restpy/pytest.py`
- Create a setup.json, its an array 
`[]`
 that includes objects like this 
 `{"lang": "py", "file": "myfile.py", "path": "/my/api/path"}`
  at lang you can input 
  `html`
   or 
   `py`
- Build the Dockerfile: `docker build -t my/server .`
- Run it your server expose port 8080 `docker run -p 80:8080 -d my/server`

## Python

You Python file will be executed by the server if a user hit the page what you defined in setup.json. 

- `print` one json formatted file 
`print('{"myapi": "some content for my server"}')`
, you can also concat it like this:
```
print("{")
print('"myapi":"')
print("some content for my server")
print('"')
print("}")
```
- Query (Query is the part behind the 
`?`
 in the url, you can access it with python) 
Add at the top of your python file this code:
```
import sys
import json
query=json.loads(sys.argv[1])
```
to access the query via 
`query`
, example: user call your python file with the url ending 
`?hello=world`
, then you can access the 
`world`
 part via
  `query["hello"]`

## Example
You find a Example in this Repos in the folder `restpy`

## WHAT IF IT NOT WORK?

If the dockerfile work not, use `git clone https://github.com/Sharkbyteprojects/REST-Python.git` to clone the repos, change the files in the folder `restpy` and start with NODE JS `npm start` in the main folder of the repos

## What the Dev's do in the Future:
- We working on a Post API