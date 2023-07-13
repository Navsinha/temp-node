// const {readFileSync,writeFileSync}=require('fs');

// const first=readFileSync('./subfolder/first.txt','utf8');
// console.log(first);

// writeFileSync('./subfolder/writtenFirst.txt',`Hey how are you doing: ${first}`);



//Async way 

const{readFile,writeFile}=require('fs')
// const first=readFile('./subfolder/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// });


//call-back hell
readFile('./subfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result
    readFile('./subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./subfolder/2ndwrite.txt','hey callback hell',(err,result)=>{
            if(err){
                console.log(err);
            }
            console.log(result);
            
        })
    })
});


