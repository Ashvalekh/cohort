const express = require("express")
const app = express()

var users = [{
    name: "john",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

app.get