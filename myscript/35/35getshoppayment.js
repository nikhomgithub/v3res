const  axios = require('axios')
let myheader={headers: {'Content-Type': 'application/json'}}
 mainUrl="localhost"

const init_server_auth = {shopName:"shopa",confirm_password:"server_auth"}

const shoplogin = {shopName:"shopmaster",password:"shopmaster"}
const userlogin = {username:"userone",password:"userone"}

const getStart=async()=>{

    try {
        let result

        const result1= await axios.post(`http://${mainUrl}/shop/shoplogin`,
                                  shoplogin,myheader)
        //console.log('p35shop/shoplogin')
        //console.log(result1.data)

        const myheader1={ headers: {'Content-Type': 'application/json',
        'Shopauthorization':`b ${result1.data.shopToken}`}}

        const result2= await axios.post(`http://${mainUrl}/p35user/login`,userlogin,myheader1)
        
        const myheader2={ headers: {'Content-Type': 'application/json',
        'Shopauthorization':`b ${result1.data.shopToken}`,
        'Userauthorization':`b ${result2.data.userToken}`
        }}

        console.log('myheader2')
        console.log(myheader2)

        
        result= await axios.post(`http://${mainUrl}/p35shoppayment/getshoppayment`,{},myheader2)
        console.log('result getshoppayment')
        console.log(result.data)
        

        const inputState={
            id: 1641197034698,
            shopId: 'shopa',
            transferDate:'2022-01-04T03:56:19.457Z',
            accountName:"Peter",
            accountNumber:"123-456",
            transferAmount:1100,
            fromBank:"kbank",
            addMonth:2,
            newExpirationDate:'2022-04-03T00:00:00.457Z',
            hasProblem:false
        }

        
        //result= await axios.post(`http://${mainUrl}/p35shoppayment/updateshoppayment`,inputState,myheader2)
        //console.log('resultupdate')
        //console.log(result.data)
        
        /*
        result= await axios.post(`http://${mainUrl}/p35shoppayment/deleteshoppayment`,
                      {},myheader2)
        console.log('result')
        console.log(result.data)
*/
        //console.log(result.data.data[0].photoUrl1)
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