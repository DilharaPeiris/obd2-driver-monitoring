const express = require('express');

const app = express();

app.use(session({cookie:{maxAge:6000},
                secret:'secret',
                resave: false,
                saveUninitialized: false}));

app.listen(8000, () => {
    console.log('Server started!');
  });

  app.route('/api/dashboard').get((req, res) => {
    res.send({
      // ok : 'ok',
      data : [
        {
          location:"Bandaragama, Sri Lanka" ,
        createdDate: new Date(),
        // longitiude : 54545,
        // latitude : 544354,
        avgGoogleAPISpeed : 72.25}
        
      ]

      
      // ,
      // {
      //   // longitiude : 54545,
      //   // latitude : 544354,
      //   gpsSpeed : 72
      // },
      // {
      //   // longitiude : 54545,
      //   // latitude : 544354,
      //   gpsSpeed : 72
      // }
    
    });
  });

  app.route('/api/dashboardPost').post((req, res) => {
    res.send({
      ok : 'ok'
    });
  });