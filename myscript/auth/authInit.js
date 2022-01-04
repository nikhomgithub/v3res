const  axios = require('axios')
let myheader={headers: {'Content-Type': 'application/json'}}
const mainUrl="localhost"

const shoplogin = {shopName:"shopa",password:"shopa"}
const userlogin = {username:"usera",password:"usera"}

const init_server_auth = {shopName:"shopa",confirm_password:"server_auth"}

 getStart=async()=>{

    try {
        let result

        result= await axios.post(`http://${mainUrl}/shop/shopinit`,init_server_auth,myheader)
        console.log('shop/init')
        console.log(result.data)

        result= await axios.post(`http://${mainUrl}/user/userinit`,init_server_auth,myheader)
        console.log('user/init')
        console.log(result.data)
        
    
    }
    catch (err){
        console.log(err)
    }
}

console.log('authInit')
getStart()