const fs = require('fs');
const asyncHandler = require("express-async-handler");

const getAllUsers = asyncHandler(async(req, res) =>{
  // Read the JSON file
  fs.readFile('./src/data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    try {
      const jsonData = JSON.parse(data);

      // Format the data as required
      const formattedData = { users: jsonData };

      // Send the formatted data as the response
      res.json(formattedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

})

module.exports = {
  getAllUsers
}