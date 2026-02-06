ans = ['a', 'b' , 'c' , 'a' , 'a' , 'c']
res = ['a' , 'c ' , 'c' , 'a' , 'b' , 'c']
const result = (mark)=>{
    if(mark > 5 ){
        console.log("Grade A")
        console.log("Final Score : " , mark);
        
    }else if(mark > 3 && mark < 5){
        console.log("Grade B");
        console.log("Final Score : " , mark);

    }else if(mark > 1 && mark < 3){
        console.log("Grade C");
        console.log("Final Score : " , mark);
    }else{
        console.log("Fail")
        console.log("Final Score : " , mark);
    }
}
const mark = (ans , res)=>{
    mark = 0
    for(i = 0 ; i < res.length ; i++){
        if(ans[i] == res[i]){
            mark++;
        }
    }
    //var mark ; // hoisted in the function    
    let mark // cannot be hoisted 
    return mark;
}
result(mark(ans , res))