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

In requirement spec is to have a pagination by 5. I can load the whole content of content.json file in memory and create simple service to feed the view.
However this is not good solution since in real life the content.json can contain tens of thousands records. Pagination need to be implemented on server side.

For this reason I open the content.json on server and break it into 5 record chunks. This is just to emulate the real life scenario for front end app. It's no way that
I would do it this way on backend :)

#### pagination
the data required to remember the current page and the orderBy query is stored on controller. this is acceptable for app of this size. For bigger app I would create a service which as singleton can contain all data which needs to persist between views

#### server

simple node.js http server. it loads the content json in memory and as well based on different query sorts the list accourding the request.

