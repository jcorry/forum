const axios = require("axios")
import axios from 'axios';
window.addEventListener('DOMContentLoaded', (event) => {
document.getElementById("button").addEventListener("click",(event)=>{
  event.preventDefault()
var input=document.getElementById("input")}
})



axios.get("http://localhost:3000/api/threads").then(response => {
  console.log(response) 
  response.json()
})

axios.post("/api/threads/add").then(function(response){
  document.getElementById("api").innerHTML= response.data
})

axios.post("/api/threads/add/comment").then(function(response){
  document.getElementById("api").innerHTML= response.data