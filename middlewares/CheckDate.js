const checkDate = (req,res,next)=>{
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();

if(day >=1 && day <=5 && hour >=9 && hour <=17){
    next();
} else {
    res.send("sorry , this web appis only available  durring working hours ( monday to friday, from 9 to 17)")
}



}


module.exports = checkDate;