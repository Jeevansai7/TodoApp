const {dBConnection} = require('../utils/utils');
const errors = require('../error/httpErrors')

exports.fetchTasks = async (req) => {
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