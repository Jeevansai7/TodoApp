const { Pool } = require('pg')
exports.dBConnection=async()=>{

  const localConnectionString= `postgresql://${process.env.databaseUser}:${process.env.password}@${process.env.databaseLocation}:${process.env.port}/${process.env.databaseName}`;

    const pool = new Pool({
      connectionString:process.env.NODE_ENV=== 'production'? process.env.DB_DATABASE_URL : localConnectionString
      });

   if(pool._clients[0] && !pool._clients[0]._connected){
    await pool.connect()
   }
 
   return pool   
}