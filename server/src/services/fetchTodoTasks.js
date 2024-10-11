const {dBConnection} = require('../utils/utils');
const errors = require('../error/httpErrors')
exports.fetchTasks = async (req) => {
   let result = -1;
   try {
      console.log('service called',pool)
      const pool=await dBConnection()
      result = await pool.query(`SELECT id,task,updated_on FROM todo`)
      return  result
   }
   catch (e) {
       console.log(e)
       return errors.error('500', e.message);
   }
  }