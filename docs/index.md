# 2003-express-ejs-bootstrap-site-template-01 :

## overview :
- create a express project with ejs template.
- set index.html from bootstrap template site.
- modify site pages with bootstrap template using ejs template engine.

## environment :
```cmd
PS G:\workspace\nodejs> nvm list

  * 13.8.0 (Currently using 64-bit executable)
    12.14.1
    8.17.0
PS G:\workspace\nodejs> node --version
v13.8.0
PS G:\workspace\nodejs> express --version
4.16.1
```

## express-generator :
### express --view ejs --git \<project site name\>  :

```cmd
PS G:\workspace\nodejs> express --view ejs --git ejsboots

   create : ejsboots\
   create : ejsboots\public\
   create : ejsboots\public\javascripts\
   create : ejsboots\public\images\
   create : ejsboots\public\stylesheets\
   create : ejsboots\public\stylesheets\style.css
   create : ejsboots\routes\
   create : ejsboots\routes\index.js
   create : ejsboots\routes\users.js
   create : ejsboots\views\
   create : ejsboots\views\error.ejs
   create : ejsboots\views\index.ejs
   create : ejsboots\.gitignore
   create : ejsboots\app.js
   create : ejsboots\package.json
   create : ejsboots\bin\
   create : ejsboots\bin\www

   change directory:
     > cd ejsboots

   install dependencies:
     > npm install

   run the app:
     > SET DEBUG=ejsboots:* & npm start
```

### npm install and npm start :
```
PS G:\workspace\nodejs> cd .\ejsboots\
PS G:\workspace\nodejs\ejsboots> npm install
npm notice created a lockfile as package-lock.json. You should commit this file.
added 53 packages from 38 contributors and audited 141 packages in 10.219s
found 0 vulnerabilities

PS G:\workspace\nodejs\ejsboots> npm start

> ejsboots@0.0.0 start G:\workspace\nodejs\ejsboots
> node ./bin/www

GET / 200 23.887 ms - 207
GET /stylesheets/style.css 200 7.061 ms - 111
GET /favicon.ico 404 3.828 ms - 983
```

![image](https://gyazo.com/17de3c53c5fb7a7caae15f70d51f2e42.png)


### code structure generated :

```cmd
G:.
│  .gitignore
│  app.js
│  package-lock.json
│  package.json
│  
├─bin
│      www
│      
├─node_modules
│  
├─public
│  ├─images
│  ├─javascripts
│  └─stylesheets
│          style.css
│          
├─routes
│      index.js
│      users.js
│      
└─views
        error.ejs
        index.ejs

```

|no| name            | description      |
|--|-----------------|------------------|
| 1| app.js          | server app       |
| 2| bin/wwww        | kick command     |
| 3| router/index.js | index router     |
| 4| router/users.js | users router     |
| 5| views/index.ejs | index view       |
| 6| views/users.ejs | users view       |
| 7| public          | www root folder(public) |

## bootstrap sample template :
### download :
- start bootstrap 
  - https://startbootstrap.com/
    - https://startbootstrap.com/previews/simple-sidebar/

![image](https://gyazo.com/a67d8b943cb28260c83de1ced9973e63.png)

### procedure :
- 1. download zip
- 2. exract zip
- 3. deplaoy them express public root folder
- 4. rename index.html to bssapmle.html

### confirmation :
- access http://localhost:3000/bssample.html

![image](https://gyazo.com/379791cf4cdd7d4cc143c2da7880bbdc.png)

## modify template into ejs layout and contents :

### libraries :
- ejs
  - https://ejs.co/
- express-ejs-layouts
  - https://www.npmjs.com/package/express-ejs-layouts

### references :
- ejs
  - https://qiita.com/y_hokkey/items/31f1daa6cecb5f4ea4c9
- express-ejs-layouts
  - https://qiita.com/hiroakiprog/items/4d56277cd12c1917cdf6
  - https://qiita.com/kanye__east/items/87172e946471b9c71cfa

### usages of ejs and express-ejs-layouts  :

#### ejs tags :
|tag    | description               |
|-------|---------------------------|
| <%    |'Scriptlet' tag, for control-flow, no output |
| <%_   |‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it |
| <%=   |Outputs the value into the template (HTML escaped) |
| <%-   |Outputs the unescaped value into the template |
| <%#   | :Comment tag, no execution, no output |
| <%%   |Outputs a literal '<%'     |
| %>    |Plain ending tag           |
| -%>   |Trim-mode ('newline slurp') tag, trims following newline |
| _%>   |‘Whitespace Slurping’ ending tag, removes all whitespace after it |

#### ejs function :
|function   | description               |
|-----------|---------------------------|
| inclueds  | Includes are relative to the template with the include call. (This requires the 'filename' option.) For example if you have "./views/users.ejs" and "./views/user/show.ejs" you would use<br> <%- include('user/show'); %>.

```jsp
<%- include('user/show', {user: user}); %>
```

#### ejs layout :
- sample

```jsp
<%- include('header'); -%>
<h1>
  Title
</h1>
<p>
  My page
</p>
<%- include('footer'); -%>
```

#### express-ejs-layout function :
|function         | description                      |
|-----------------|----------------------------------|
| contentFor      | set contents for target variable |
| defineContent   | define target variable           |
| <$- variable %> | define target variable           |

### npm install express-ejs-layouts :

```cmd
PS G:\workspace\nodejs\ejsboots> npm install express-ejs-layouts
+ express-ejs-layouts@2.5.0
updated 1 package and audited 142 packages in 1.553s
found 0 vulnerabilities

```

### configure layouts and modify index.ejs :

- views/includes/_layout.ejsに、bootstrapのサンプルを分解して、Layout化する。

- sample
  - layout : views/includes/_layout.ejs
```jsp
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  
  <title><%- defineContent('title') %></title>
  
  <!--
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" id="ref-css">
  <link href="css/simple-sidebar.css" rel="stylesheet">
  -->
  <%- style %>
  
</head>

<body>
  
  <%- include('_navi') %>
  
  <!-- /#wrapper :-->
  <div class="d-flex" id="wrapper">
    <%- include('_sidemenu') %>
    <%- header %>
    
    <!-- body -->
    <%- body %>
    
    
  </div>
  <!-- /#wrapper :-->
  
  <footer>
    <%- include('_footer') %>
    <%- defineContent('footer') %>
  </footer>
  
  <%- script %>
  
  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/js/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  -->
  <!-- Menu Toggle Script -->
  <script>
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  </script>
  
</body>

</html>

```
 - view : views/index.ejs
```jsp
<!-- styles -->
<style>
</style>

<!-- Page Content -->
<div id="page-content-wrapper">
  <div class="container-fluid">
    <!-- my content -->
    
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    
    <!-- my content -->
  </div>
</div>


<!-- scripts -->
<script>
  // Script content!
</script>

<% /** title, header and footer **/ %>
<%- contentFor('title') %>
<%= title %>

<%- contentFor('header') %>

<%- contentFor('footer') %>
```

- and deploy partials and modify error.ejs

### modify app.js :
- app.js

```js
var createError = require('http-errors');
var express = require('express');
var expressLayouts = require('express-ejs-layouts'); // add

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true);   // add
app.set('layout extractStyles', true);    // add
app.set('layout', 'includes/_layout');    // add
app.use(expressLayouts);                  // add

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```
### confirmation :
- access http://localhost:3000
![image](https://gyazo.com/350bf4e751d70e5b1c2e627f0f1bbf8b.png)

## summary :
- create a express project with ejs template.
- set index.html from bootstrap template site.
- modify site pages with bootstrap template using ejs template engine.

