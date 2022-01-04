const  axios = require('axios')
let myheader={headers: {'Content-Type': 'application/json'}}
const mainUrl="localhost"

/*
const init_server_auth = {confirm_password:"server_auth"}
const server_35 = {shopName:"shopa",confirm_password:"server_35"}

const init= {shopName:"shopa",confirm_password:"server_35"}
const shophet={confirm_password:"server_auth"}
*/

const shopsignup = {shopName:"shopmaster",password:"shopmaster",
                    ownerName:"shopa",ownerPassword:"shopa",
                    ownerEmail:'mr3nikom@gmail.com',
                    monthlyFee:500
                   }

const deleteshop={shopName:"shopmaster",confirm_password:"server_auth"}


const getStart=async()=>{

   try {
       let result
      result= await axios.post(`http://${mainUrl}/shop/deleteshop`,deleteshop,myheader)
      
      console.log(result.data)

      result= await axios.post(`http://${mainUrl}/p35shop/shopmastersignup`,shopsignup,myheader)

      console.log(result.data)

    
   }
   catch (err){
       console.log('err')
       console.log(err)
   }
}

console.log('p35get')
getStart()