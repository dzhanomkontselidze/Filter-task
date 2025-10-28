const toFilter = [3, 2, -9, null, '12','3a',[], undefined, '', 5]

function filtrovane(arr = [], 'number') {
    console.log(arr)
    const result  = []
    if(!Array.isArray(arr)) {
        return result;
    }

    for(let i = 0;i < arr.length;i++)
    {
        if(typeof arr[i] === "number" )
        {
            result.push(arr[i])
        } 



        if(typeof arr[i] === "string" && parseInt(arr[i], 10))
        {
            result.push(arr[i])
        }
    }
    

    return result;
}

console.log(parseInt("3a") == '3a')
console.log(parseInt('30') == '30')
console.log(filtrovane(toFilter))
console.log("cірьога арсенал!!!!")




