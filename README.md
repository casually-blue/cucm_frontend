# CUCM Gui/Rest API

This package is two elements, a react frontend and a playmvc backend that provide a
user interface and rest api to the Cisco Unified Communications Manager. 
It requires `npm` and JDK 11 to run. To execute it follow these commands.

```bash
$ cd frontend
$ npm install
$ npm run build
# this will publish the react app to the play public folders
$ cd ../play_backend
$ ./gradlew runPlay
```
