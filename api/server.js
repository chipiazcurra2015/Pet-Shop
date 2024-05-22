const app = require("./src/app");
const PORT = process.env.PORT;
const { conn } = require('./src/db.js');

//alter - force
conn.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    })
    }).catch(error => console.error(error))
