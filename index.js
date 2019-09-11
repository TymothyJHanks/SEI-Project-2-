const express = ("express");
const app = express();


const rickandmortyapi = "https://rickandmortyapi.com/api/character/"

fetch(rickandmortyapi)
.then(result => {
    return result.json
})
.then(result => {
    console.log("it works!")
})