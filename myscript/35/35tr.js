const  axios = require('axios')
let myheader={headers: {'Content-Type': 'application/json'}}
 mainUrl="localhost"


const shoplogin = {shopName:"shopa",password:"shopa"}
const userlogin = {username:"usera",password:"usera"}

const tempProduct={
      
    photoUrl1:["https://picsum.photos/id/7/200/300"], 
    unit:"อัน",
    price:100,
    priceLevel:[{price:50,remark:"ทุน"}],
    remark:"ของแท้",
    active:true,
    point:1,
    timestamp:new Date().toISOString(),
    userId:1,
    shopId:"shopa",
    isRawMat:false,  
    stock:0,
    plan:0,
    order:0,
    point:1
}



const p1= {...tempProduct,id:1,barcode:1,groupId:2, groupName:'TV',productName:"Sony HD1"}
const p2= {...tempProduct,id:2,barcode:2,groupId:2, groupName:'TV',productName:"Sony Ultra"}
const p3= {...tempProduct,id:3,barcode:3,groupId:2, groupName: 'TV',productName:"Sony LED"}
const p4= {...tempProduct,id:4,barcode:4,groupId:2, groupName: 'TV',productName:"LG HD1"}
const p5= {...tempProduct,id:5,barcode:5,groupId:2, groupName: 'TV',productName:"LG Ultra"}
const p6= {...tempProduct,id:6,barcode:6,groupId:2, groupName: 'TV',productName:"LG LED"}

const t1={

    id:2,
    date:new Date().toISOString(),
    remindDate:new Date().toISOString(),
    branchName:"main",
    branchId:1,
    transactionType:"บิลขาย",
    transactionStatus:"open",
    active:true,
    table:"A1",
    tableStatus:"open",
    paymentType:"เงินสด",
    //photoUrl1:[""],
    partnerId:1,
    partnerType:"ผู้ซื้อ",
    title:"นาย",
    name:"จิตติ",
    phone:["0924424349 ","0459213311"],
    address: "",
    remark:"ของแท้",
    totalReduction:0,
    reduction:[],
    totalTax:0,
    tax:[],

    total:1000,
    grandTotal:1000,
    totalPoint:10,
    reductCustomerPoint:5,
    
    shopId:"shopa",
    userId:"1",
    detail:[
        {...p1,quantity:5},
        {...p2,quantity:5},
    ],
    effectStock:"-",
    effectOrder:"unChange",
    effectPlan:"unChange",
}

const toCheck=(myheader2)=>{
    return new Promise((resolve,reject)=>{
        console.log('=========toCheck===========')

            let tempArray=[]
            
            axios.post(`http://${mainUrl}/p35product/getlimit`,{},myheader2)
            .then(result=>{
                for(let i=0;i<result.data.data.length;i++){
                    const {id,stock,plan,order}=result.data.data[i]
                    tempArray=[...tempArray,
                        `product: id ${id} ,stock ${stock}, plan ${plan}, order ${order}`
                    ]
                }

                return axios.post(`http://${mainUrl}/p35partner/getlimit`,{},myheader2)
            })
           .then(result=>{
                for(let i=0;i<1;i++){
                    const {id,remainingCustomerPoint,totalSpending}=result.data.data[i]
                    tempArray=[...tempArray,
                        `partner: id ${id} ,remainingCustomerPoint ${remainingCustomerPoint}, totalSpending ${totalSpending}`
                    ]  
                }
                resolve(tempArray)
           })      
          .catch(error=>{
              reject(error)
          })
       


    })
}

const getStart=async()=>{

    try {
        let result

        const result1= await axios.post(`http://${mainUrl}/p35shop/shoplogin`,shoplogin,myheader)
        //console.log('p35shop/shoplogin')
        //console.log(result1.data)

        const myheader1={ headers: {'Content-Type': 'application/json',
        'Shopauthorization':`b ${result1.data.shopToken}`}}
        const result2= await axios.post(`http://${mainUrl}/p35user/login`,userlogin,myheader1)
        //console.log('p35user/login')
        //console.log(result2.data)
        const myheader2={ headers: {'Content-Type': 'application/json',
        'Shopauthorization':`b ${result1.data.shopToken}`,
        'Userauthorization':`b ${result2.data.userToken}`}}
        console.log(myheader2)

        let temp
        
        console.log(await toCheck(myheader2))
        
        
        await axios.post(`http://${mainUrl}/p35transaction/addtransaction`,
        {...t1,id:6,effectStock:'+',effectPlan:'+',effectOrder:'+'},
        myheader2)
        
        console.log(await toCheck(myheader2))
        

        //console.log('---------------------')
        
        
        await axios.post(`http://${mainUrl}/p35transaction/updatetransaction`,
        {...t1,id:6,effectStock:'+',effectPlan:'+',effectOrder:'+',
        
        
        total:400,
        grandTotal:400,
        totalPoint:4,
        reductCustomerPoint:2,
        detail:[
            {...p1,quantity:2},
            {...p2,quantity:2},
        ]
        },
        
        myheader2)

        console.log(await toCheck(myheader2))
                
        /*
        await axios.post(`http://${mainUrl}/p35transaction/addtransaction`,
        {...t1,id:3,effectStock:'+',effectPlan:'+',effectOrder:'+'},
        myheader2)

        console.log(await toCheck(myheader2))
        
        
        await axios.post(`http://${mainUrl}/p35transaction/deletetransaction`,
        {id:3},
        myheader2)
        
        console.log(await toCheck(myheader2))
        */
 
    }
    catch (err){
        console.log('err')
        console.log(err.response)
    }
}

console.log('p35get')
getStart()
