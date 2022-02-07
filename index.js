var mysql = require('mysql');
var app = require('./app');
var port = 3700;

/* var con = mysql.createConnection({
            host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
            user: "bsale_test",
            password: "bsale_test",
            database: "bsale_test"
        });
    con.connect((err) => {
            if (err) throw err;
            console.log("Connected!");
            app.listen(port, () => {
                console.log(`Server running in URL: localhost:${port}`)
            });
          
            let sql = 'SELECT * FROM product LIMIT 2;';
          
            con.query(sql, (err, result) => {
              if (err) throw err;
              console.log(result);
            })
          });
*/


app.listen(port, () => {
    console.log(`Server running in URL: localhost:${port}`)
});