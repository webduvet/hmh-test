# hmh-test
simple test app for hmh

## installation

clone this rep

`git clone <this repo> <your folder>`

	go into /app

	npm install

it might be require sudo the action, it installs all develeopment dependencies

	bower install

install flat dependencies for the angular app

for testing purpose

	grunt build

this will build the app for testing environment (no minify or concat on files)

	go to /server

This is a simple static server to test the app.

	npm install
	npm start // just runs node server.js

it's better if you run it in separate shell, it's very simple node.js http server.
the default direcotry is hardwired to `../app/build/` so if have different folder structure
it needs to be changed accordingly.


## solution

in requirements there is to have a pgination by 5. I can load the whole content of content.json file in memory and cre`te simple service to feed the view.
However this is not good solution sice in real life the content.json can contain tens of thousands records. Pagination need to be implemented on server side.

For this reason I open the content.json on server and break it into 5 record chunks. This is just to emulate the real life scenario for front end app. It's no way that
I would do it this way on backend :)

#### server

