# express-ejs-bootstrap template :

## overview :
- generated a site by express generator for ejs template engine,
- and apply a simple sidemenu-design of bootstrap 4,
- and use express-ejs-layouts for design layout

## installation :
```
PS G:\sandbox> git clone https://github.com/sakai-memoru/ejsboots.git
Cloning into 'ejsboots'...
remote: Enumerating objects: 61, done.
remote: Counting objects: 100% (61/61), done.
remote: Compressing objects: 100% (41/41), done.

Unpacking objects: 100% (61/61), done.
PS G:\sandbox> cd .\ejsboots\
PS G:\sandbox\ejsboots> npm install
added 54 packages from 39 contributors and audited 142 packages in 4.2s
found 0 vulnerabilities
```

## execution :
```
PS G:\workspace\nodejs\ejsboots> npm start

> ejsboots@0.0.0 start G:\workspace\nodejs\ejsboots
> node ./bin/www
```

## package.json :
```
{
  "name": "ejsboots",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "~2.6.1",
    "express": "~4.16.1",
    "express-ejs-layouts": "^2.5.0",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1"
  }
}
````

## reference :
- startbootstrap.com
  - https://startbootstrap.com/previews/simple-sidebar/
