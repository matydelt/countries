const axios = require("axios")
async function hola() {
    const result = await axios.get("http://localhost:3001/countries")

    console.log(result.data[0])
}

hola() 