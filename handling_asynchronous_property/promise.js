let a = 20;
let b = 0;

           // at first we have to make a Promise obj

let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
        },2000);

})

           // after 2 sec the value 30 will be generate then it will pass to the waitingData 
           //and .then is used to control the next step
waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})

