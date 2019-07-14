/**
 * Created by Grucha on 30/06/2019.
 */
setTimeout(()=>{
    console.log('Two seconds are up!')
},2000);

const names = ['Andrew','Jen','Jess'];

shortNames = names.filter((name)=>{
    return name.length <= 4
});

console.log(shortNames);


const geocode = (address, callback) =>{
    setTimeout(()=>{
        const data = {
            latitude:0,
            longitude:0
        };
        callback(data)
    },2000)
};

geocode('Philadelphia',(data)=>{
    console.log(data);
});


const add = (firstNumber, secondNumber, callback)=>{
    setTimeout(()=>{
        const sum = firstNumber+secondNumber;
        callback(sum)
    },2000)
};

add(1,4,(sum)=>{
   console.log(sum);
});
