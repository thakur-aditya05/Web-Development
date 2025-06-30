let arr1=[1,2,4,5,87,9,6,2,6]
let max=arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});