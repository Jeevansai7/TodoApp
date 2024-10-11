const { Pool } = require('pg')
exports.dBConnection=async()=>{
  console.log( process.env)
    const pool = new Pool({
        user: process.env.databaseUser,
        host: process.env.databaseLocation,
        database: process.env.databaseName,
        password: process.env.password,
        port: process.env.port
      });
   if(pool._clients[0] && !pool._clients[0]._connected){
    await pool.connect()
   }
  
   return pool   
}