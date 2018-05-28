Demo application and slides for my presentation at Angular Wrocław meetup (24.05.2018).

There are two branches `naive` and `master` with two implementations of the application that were discussed.

You can run the app locally at http://localhost:4200:
```
$ npm install
$ ./node_modules/.bin/ng serve
```

The slides (only available at `master` branch) can be served locally at http://locahost:8080/ using:
```
$ cd slides
$ ./serve
```

or if you don't trust the binary I provided (or you are on Mac or Windows) just read `slides/serve.go` and then:
```
cd slides
go run serve.go
```

