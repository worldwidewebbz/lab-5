const Pool = require('pg').Pool
const pool = new Pool({
        host: '/cloudsql/plenary-cascade-329422:us-east4:lab5-instance', //cloudsql/YOUR_INSTANCE_CONNECTION_NAME
        database: 'postgres',
        password: '', 
        name: 'avw8176@stern.nyu.edu', //USER_NAME
        user: 'postgres',
        connector: 'postgresql',
        instance: 'lab5-instance', //INSTANCE_NAME
})

const getTasks = (request, response) => {

  pool.query('SELECT * FROM todo;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


module.exports = {
  getTasks
}
