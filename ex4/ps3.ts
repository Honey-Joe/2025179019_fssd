const dataset:number[] = [10,20,30,40]

const sumData = function(data :number[]){
    let sum = 0;
    for(let i = 0 ; i<data.length ; i++){
        sum += data[i]
    }

    return sum;
}

sumData.description = "This is Sum function"

const avg =function(data : number[]){
    let sum = sumData(data);

    let avg = sum/data.length;

    return avg;
}

avg.description = "This is average function"

const transform = function (data:number[] ){
    return (data.map( i => i*2))
}

transform.description = "This is transform function"

const filter = function(data:number[]){
    return (data.filter(i=> i >10))
}

filter.description = "This is Filter function"


const proceed = (data : number[] ,operation : Function)=>{
    console.log("Operation : " + (operation as any).description);
    return operation(data);
}

let sumResult = proceed(dataset , sumData);
console.log(sumResult); 

let avgResult = proceed(dataset , avg);
console.log(avgResult); 

let transformResult = proceed(dataset , transform);
console.log(transformResult);

let filterResult = proceed(dataset , filter);
console.log(filterResult);

