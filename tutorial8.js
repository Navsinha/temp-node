const os= require("os");

const user= os.userInfo();
console.log(user)

const currentOs= {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemen: os.freemem(),
}
console.log(currentOs);