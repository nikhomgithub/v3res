const  axios = require('axios')
let myheader={headers: {'Content-Type': 'application/json'}}
const mainUrl="localhost"

/*
const init_server_auth = {confirm_password:"server_auth"}
const server_35 = {shopName:"shopa",confirm_password:"server_35"}

const init= {shopName:"shopa",confirm_password:"server_35"}
const shophet={confirm_password:"server_auth"}
*/

const shopsignup = {shopName:"banjak",password:"banjak",
                    ownerName:"banjak",ownerPassword:"banjak",
                    ownerEmail:'mr3nikom@gmail.com',
                    monthlyFee:500
                   }

const deleteshop={shopName:"banjak",confirm_password:"server_auth"}

const getStart=async()=>{

   try {
       let result
      result= await axios.post(`http://${mainUrl}/shop/deleteshop`,deleteshop,myheader)
      
      console.log(result.data)

      result= await axios.post(`http://${mainUrl}/p35shop/shopsignup`,shopsignup,myheader)

      console.log(result.data)

      
       //result= await axios.post(`http://${mainUrl}/shop/getshop`,shophet,myheader)

       //result= await axios.post(`http://${mainUrl}/p35tabletemplate/getcustom`,{},myheader2)

       //result= await axios.post(`http://${mainUrl}/p35basicdata/getcustom`,{},myheader2)
       //result=await axios.post(`http://${mainUrl}/p35transaction/getlimit`,qry,myheader2)
       
       //result= await axios.post(`http://${mainUrl}/p35product/getlimit`,{},myheader2)
       //result= await axios.post(`http://${mainUrl}/p35partner/getlimit`,{},myheader2)
       //result= await axios.post(`http://${mainUrl}/p35group/getcustom`,{},myheader2)
       //result= await axios.post(`http://${mainUrl}/p35tabletemplate/getcustom`,{},myheader2)
       //result= await axios.post(`http://${mainUrl}/p35formtemplate/getcustom`,{},myheader2)
       
       //result= await axios.post(`http://${mainUrl}/p35branch/getcustom`,{},myheader2)

       //result= await axios.post(`http://${mainUrl}/p35group/getcustom`,{},myheader2)        
       
       //result= await axios.post(`http://${mainUrl}/p35tabletemplate/getcustom`,{},myheader2)

 
       //console.log(result.data)

   }
   catch (err){
       console.log('err')
       console.log(err)
   }
}

console.log('p35get')
getStart()