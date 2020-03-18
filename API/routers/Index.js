var app = require ('../main/server');
var sql = require('mssql');
var cutSubstr = require('cut-substring');
var url ;

var dbConfig = {
           
  user: "" , 
  password : "" ,
  database : "",
  server : "",
  connectionTimeout: 300000,
  requestTimeout: 300000,
  pool: {
      idleTimeoutMillis: 300000,
      max: 100
  } ,
  options : {
        encrypt: true 
  
      }
  
  };

module.exports = function(app){
    
   
    app.get('/' , function(req,res){
   
   
           
                  // sql.connect(dbConfig, function (err) {
    
                //    if (err) console.log(err);

        
              // var request = new sql.Request();
      
             // request.query("select * from bla " , function(err,result){ 
                
                
           // var tamanho = result.recordset.length;     
           res.render('../../WEB/views/index',{url});



              
       
            

               //  sql.close();


    })     


    app.get('/Menu' , function(req,res){
   
   
    
      // sql.connect(dbConfig, function (err) {

    //    if (err) console.log(err);


  // var request = new sql.Request();

 // request.query("select * from bla " , function(err,result){ 
    
    
// var tamanho = result.recordset.length;     
res.render('../../WEB/views/Menu');



  



   //  sql.close();


})     


app.post('/alterar', function(req,res){

    var senha  = req.body.senha;

    if (senha == "@ltenTikarNIIb" ){
         
         url = req.body.url;

         res.render('../../WEB/views/index',{url});
 
    }

 if (senha != "@ltenTikarNIIb" ){
         
  res.render('../../WEB/views/Menu');

}
 
})

  

      
  //})  
    
//})  


}