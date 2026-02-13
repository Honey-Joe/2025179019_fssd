var dataset = [10, 20, 30, 40];
var sumData = function (data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum;
};
sumData.description = "This is Sum function";
var avg = function (data) {
    var sum = sumData(data);
    var avg = sum / data.length;
    return avg;
};
avg.description = "This is average function";
var transform = function (data) {
    return (data.map(function (i) { return i * 2; }));
};
transform.description = "This is transform function";
var filter = function (data) {
    return (data.filter(function (i) { return i > 10; }));
};
filter.description = "This is Filter function";
var proceed = function (data, operation) {
    console.log("Operation : " + operation.description);
    return operation(data);
};
var sumResult = proceed(dataset, sumData);
console.log(sumResult);
var avgResult = proceed(dataset, avg);
console.log(avgResult);
var transformResult = proceed(dataset, transform);
console.log(transformResult);
var filterResult = proceed(dataset, filter);
console.log(filterResult);
