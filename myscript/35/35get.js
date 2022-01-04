const  axios = require('axios')
let myheader={headers: {'Content-Type': 'application/json'}}
 mainUrl="localhost"


const init_server_auth = {shopName:"shopa",confirm_password:"server_auth"}
const server_35 = {shopName:"shopa",confirm_password:"server_35"}

const init= {shopName:"shopa",confirm_password:"server_35"}

const shoplogin = {shopName:"shopa",password:"shopa"}
const userlogin = {username:"userone",password:"userone"}


const qry={$and:[{name:"Peter"},{total:200}]}

const getStart=async()=>{

    try {
        let result

        const result1= await axios.post(`http://${mainUrl}/p35shop/shoplogin`,shoplogin,myheader)
        //console.log('p35shop/shoplogin')
        //console.log(result1.data)

        const myheader1={ headers: {'Content-Type': 'application/json',
        'Shopauthorization':`b ${result1.data.shopToken}`}}

        console.log(myheader1) 
        
        //const result2= await axios.post(`http://${mainUrl}/p35user/login`,userlogin,myheader1)
        //console.log('p35user/login')
        //console.log(result2.data)

        result= await axios.post(`http://${mainUrl}/shop/getshop`,{confirm_password:"server_auth"},myheader)
        console.log('result')
        console.log(result.data)

        /*
        const myheader2={ headers: {'Content-Type': 'application/json',
        'Shopauthorization':`b ${result1.data.shopToken}`,
        'Userauthorization':`b ${result2.data.userToken}`}}

        console.log('myheader2..............')
        console.log(myheader2)
        */
        /*
        result= await axios.post(`http://${mainUrl}/p35basicdata/getcustom`,{},myheader2)
        console.log(`p35basicdata=`+result.data.count)
        result=await axios.post(`http://${mainUrl}/p35transaction/getlimit`,{},myheader2)
        console.log(`p35transaction=`+result.data.count)
        result= await axios.post(`http://${mainUrl}/p35product/getlimit`,{},myheader2)
        console.log(`p35product=`+result.data.count)
        result= await axios.post(`http://${mainUrl}/p35partner/getlimit`,{},myheader2)
        console.log(`p35partner=`+result.data.count)
        result= await axios.post(`http://${mainUrl}/p35group/getcustom`,{},myheader2)
        console.log(`p35group=`+result.data.count)
        result= await axios.post(`http://${mainUrl}/p35tabletemplate/getcustom`,{},myheader2)
        console.log(`p35tabletemplate=`+result.data.count)
        result= await axios.post(`http://${mainUrl}/p35formtemplate/getcustom`,{},myheader2)
        console.log(`p35formtemplate=`+result.data.count)
        result= await axios.post(`http://${mainUrl}/p35branch/getcustom`,{},myheader2)
        console.log(`p35branch=`+result.data.count)
        

        */

        //result= await axios.post(`http://${mainUrl}/p35user/adduser`,newUser,myheader2)
        //result= await axios.post(`http://${mainUrl}/p35user/getuser`,{},myheader2)
        //result= await axios.post(`http://${mainUrl}/p35user/deleteuser`,{id:2},myheader2)
        //result= await axios.post(`http://${mainUrl}/p35user/updateuser`,updateUser,myheader2)
        //result= await axios.post(`http://${mainUrl}/p35user/resetuserpassword`,{id:2,password:"userbb"},myheader2)
        
        //result= await axios.post(`http://${mainUrl}/p35user/getuserbyid`,{},myheader2)
        //console.log(result.data.data)
        //console.log(result.data)

        //result= await axios.post(`http://${mainUrl}/shop/payshopfeewithpassword`,{},myheader2)
        
        //console.log(result.data)

        //result= await axios.post(`http://${mainUrl}/p35partner/getlimit`,{},myheader2)
        //console.log(`p35partner=`+result.data.count)

      
    }
    catch (err){
        console.log('err')
        console.log(err.response)
    }
}

console.log('p35get')
getStart()