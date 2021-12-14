# express-hbs-bootstrap template : 
- repos: boot-hbs-sample 

## overview :
- simple prototype of web apps for bpmn viewer and modeler components.  
- use below;
  + language: **nodejs**
  + httpd: **expressjs**
  + template engine: **handlebars**
  + modulization

## installation :

```
PS G:\workspace > git clone https://github.com/sakai-memore/boot-hbs-sample.git

Cloning into 'boot-hbs-sample'...
remote: Enumerating objects: 61, done.
remote: Counting objects: 100% (61/61), done.
remote: Compressing objects: 100% (41/41), done.

Unpacking objects: 100% (61/61), done.
PS G:\workspace> cd .\boot-hbs-sample\
PS G:\workspace\boot-hbs-sample > npm install
added 54 packages from 39 contributors and audited 142 packages in 4.2s
found 0 vulnerabilities
```

## execution :
```bat
PS G:\workspace\boot-hbs-sample> npm start

> boot-hbs-sample@0.0.1 start
> node ./bin/www

G:\workspace\boot-hbs-sample
APP_NAME : boot-hbs-sample
MYUUID : de01bf00-5c9d-11ec-b716-579b020fa564
http://localhost:3000
```

## source structure
```bat
PS G:\workspace\bpmn-viewer-proto> tree
Folder PATH listing for volume New Volume
Volume serial number is A0B0-51B7

:
:
├───assets : ** Third-party libs **
│   ├───bootstrap-icons
│   ├───css
│   └───vendor
│       ├───bootstrap
│       └───jquery
├───bin    : ** js for httpd ** 
├───config : ** apps configuration **
├───docs   : ** documents for apps **
├───node_modules
├───pages  : ** views **
│   ├───layouts : base layout
│   └───partials : partial layout
├───routes : ** router **
├ .gitignore
├ app.js : application
├ package.json
└ README.md
```

## package.json :
```json
{
  "name": "boot-hbs-sample",
  "version": "0.0.1",
  "type": "module",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "bootstrap-icons": "^1.7.2",
    "config": "^3.3.6",
    "csurf": "^1.11.0",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "express-ejs-layouts": "^2.5.0",
    "express-handlebars": "^6.0.2",
    "express-session": "^1.17.2",
    "express-state": "^2.0.0",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "uuid": "^8.3.2"
  }
}
````

## screenshot

![screenshot](https://gyazo.com/b1488a227eea1f5e1c4178c3bab2cf60.png)

## reference :
- startbootstrap.com
  - https://startbootstrap.com/previews/simple-sidebar/

[end of file]
