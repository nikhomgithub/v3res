const  axios = require('axios')

let myheader={headers: {'Content-Type': 'application/json'}}
 mainUrl="localhost"


const init_server_auth = {shopName:"shopa",confirm_password:"server_auth"}
const init= {shopName:"shopa",confirm_password:"server_35"}

 getStart=async()=>{

    try {

        let result

        /*
        result= await axios.post(`http://${mainUrl}/shop/shopinit`,init_server_auth,myheader)
        console.log('shop/init')
        
        result= await axios.post(`http://${mainUrl}/user/userinit`,init_server_auth,myheader)
        console.log('user/init')
        */

        
        result= await axios.post(`http://${mainUrl}/p35basicdata/init`,init,myheader)
        console.log('p35basicdata/init')

        result1= await axios.post(`http://${mainUrl}/p35transaction/init`,init,myheader)
        console.log('p35transaction/init')
        console.log(result1.data)

        result= await axios.post(`http://${mainUrl}/p35formtemplate/init`,init,myheader)
        console.log('p35formtemplate/init')
        
        result1= await axios.post(`http://${mainUrl}/p35partner/init`,init,myheader)
        console.log('p35partner/init')
        console.log(result1.data)
        
        result1= await axios.post(`http://${mainUrl}/p35product/init`,init,myheader)
        console.log('p35product/init')
        console.log(result1.data)

        result1= await axios.post(`http://${mainUrl}/p35group/init`,init,myheader)
        console.log('p35group/init')
        console.log(result1.data)
      
    }   
      
    catch (err){
        console.log('err')
        console.log(err.response)
    }
}

console.log('p35test')
getStart()