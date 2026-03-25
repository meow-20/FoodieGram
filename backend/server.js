require('dotenv').config();
//run server
const app = require("./src/app");
const connectDB = require("./src/db/db");

(async () => {
  await connectDB();                  // wait for DB
  app.listen(3000, () => {
    console.log('Server running on 3000');
  });
})();