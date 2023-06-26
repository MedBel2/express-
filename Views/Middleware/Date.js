const daterequire= (req,res,next)=>{
const date=new Date();
const hours=date.getHours();


if (hours >=9 && hours <23){
    next();
}
else{
return res.send('Were Closed')

}



}
module.exports=daterequire;