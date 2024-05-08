const express = require("express");
const cors = require("cors");

const app  = express ();

const corsOptions = {
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  headers: 'Content-Type, Authorization',
  exposedHeaders:'Authorization'
};

app.use(cors(corsOptions));

// set port, listen for requests
const PORT =  443;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});