const {dBConnection} = require('../utils/utils');
const errors = require('../error/httpErrors')
exports.deleteTodo = async (req) => {
   let result = -1;
   try {
      const id=req.body.id
      const pool=await dBConnection()
      await pool.query(`DELETE FROM todo WHERE id=${id}`)
      return true;
   }
   catch (e) {
       console.log(e)
       return errors.error('500', e.message);
   }
  }