const { Pool } = require('pg')
exports.dBConnection=async()=>{
  console.log(process.env.DATABASE_URL,process.env.DB_URL,process.env)
    const pool = new Pool({
        user: process.env.databaseUser,
        host: process.env.databaseLocation,
        database: process.env.databaseName,
        password: process.env.password,
        port: process.env.port,
        max:100
      });
   if(pool._clients[0] && !pool._clients[0]._connected){
    await pool.connect()
   }
  console.log("pool",pool,pool._clients)
   return pool   
}