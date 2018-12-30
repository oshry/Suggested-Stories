const express = require('express'),
          app = express(),
     template = require('./views/template')
         path = require('path');

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var device = require('express-device');
app.use(device.capture());

//const config = require('./config');


// Serving static files
app.use('/FrontendAssignment', express.static(path.resolve(__dirname, 'FrontendAssignment')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3088);

// our apps data model
var requestChecker  =   require('./middleware/incoming/api.js');

app.use(requestChecker({ option1: '1', option2: '2' }));

// else{
//   res.send(dots.test({ data: req.data }));
// }

//SSR function import
const ssr = require('./views/server');

// server rendered home page
app.get('/', (req, res) => {
  if(typeof req.data === "undefined"){
    res.send({status: "error"});
    next();
  }
  let initialState = {
    isFetching: false,
    apps: req.data,
    device: req.device.type.toUpperCase()
  }

  const { preloadedState, content}  = ssr(initialState)
  const response = template("Server Rendered Page", preloadedState, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

// tiny trick to stop server during local development

  app.get('/exit', (req, res) => {
    if(process.env.PORT) {
      res.send("Sorry, the server denies your request")
    } else {
      res.send("shutting down")
      process.exit(0)
    }

  });
