const {dBConnection} = require('../utils/utils');
const errors = require('../error/httpErrors')
exports.editTodo = async (req) => {
   let result = -1;
   try {
      const pool= await dBConnection()
      const {id,task}=req.body
      result = await pool.query(`UPDATE todo SET task='${task}',updated_on=now() where id=${id}`)
      return true;
   }
   catch (e) {
       console.log(e)
       return errors.error('500', e.message);
   }
  }