const {dBConnection} = require('../utils/utils');
const { Pool } = require('pg')
const errors = require('../error/httpErrors')
exports.fetchTasks = async (req) => {
   const pool = new Pool({
      user: process.env.databaseUser,
      host: process.env.databaseLocation,
      database: process.env.databaseName,
      password: process.env.password,
      port: process.env.port,
      max:100
    });
 
  await pool.connect()

   let result = -1;
   try {
      const pool=await dBConnection()
      console.log('service called',pool)
      result = await pool.query(`SELECT id,task,updated_on FROM todo`)
      console.log(await pool.query(`SELECT id,task,updated_on FROM todo`))
      return  result
   }
   catch (e) {
       console.log(e)
       return errors.error('500', e.message);
   }
  }