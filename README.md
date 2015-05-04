# hmh-test
simple test app for hmh

## installation

clone this rep

`git clone <this repo> <your folder>`

go into /app

`npm install`
it might be require sudo the action, it installs all develeopment dependencies

`bower install`
install flat dependencies for the angular app

for testing purpose
`grunt build`
this will build the app for testing environment (no minify or concat on files)

go to /server
This is a simple static server to test the app.
`npm install`
`node server.js`
it's better if you run it in separate shell, it's very simple node.js http server.
the default direcotry is hardwired to `../app/build/` so if have different folder structure
it needs to be changed accordingly.
