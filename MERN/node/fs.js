const fs = require('fs')

fs.readFile('./test.txt','utf-8',(err,data) => {
    console.log(data);
    
})

fs.writeFile('./test.txt',"sample content changed to Luminar Technolab", (err) => {
    if(err){
        console.log(err);
        
    }
    else{
        console.log("Operation success");
        
    }
})