const {dBConnection} = require('../utils/utils');
const errors = require('../error/httpErrors')
exports.addTodo = async (req) => {
   let result = -1;
   try {
      const pool=await dBConnection()
      const {task}=req.body
      result = await pool.query(`INSERT INTO todo(task,updated_on) VALUES('${task}',now())`)
    
      return true;
   }
   catch (e) {
       console.log(e)
       return errors.error('500', e.message);
   }
  }