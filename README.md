Demo aplication and slides for my talk at Angular Wrocław meetup (24.05.2018).

There are two branches `naive` and `master` with two implementation of the
application that where discussed.

You can run the app localy at http://localhost:4200:

```
$ npm install
$ ./node_modules/.bin/ng serve
```

The slides (only available at `master` branch) can also be served localy
at http://locahost:8080/ using:

```
$ cd slides
$ ./serve
```

or if you don't trust the binary I provided (or you are on Mac or Windows)
just read `slides/serve.go` and then:

```
cd slides
go run server.go
```

