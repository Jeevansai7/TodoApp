const { Pool } = require('pg')
exports.dBConnection=async()=>{
  console.log(process.env.DATABASE_URL,process.env.DB_URL,process.env)
  const localConnectionString= `postgresql://${process.env.databaseUser}:${process.env.password}@${process.env.databaseLocation}:${process.env.port}/${process.env.databaseName}`;

    const pool = new Pool({
      connectionString:process.env.NODE_ENV=== 'production'? process.env.DB_DATABASE_URL : localConnectionString
      });

   if(pool._clients[0] && !pool._clients[0]._connected){
    await pool.connect()
   }
  console.log("pool",pool,pool._clients)
   return pool   
}