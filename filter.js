const toFilter = [3, 2, -9, null, '12', '3a', [], undefined, '', 5, NaN]

function filtrovane(arr = []) {
    const result = []
    if (!Array.isArray(arr)) {
        return result;
    }

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (typeof item === "number" && !isNaN(item)) {
            result.push(item);
        }
        else if (typeof item === "string" && item.trim() !== '' && !isNaN(Number(item))) {
            result.push(item);
        }
    }

    return result;
}


console.log(`parseInt("3a") == '3a' -> ${parseInt("3a") == '3a'}`)
console.log(`parseInt('30') == '30' -> ${parseInt('30') == '30'}`) 


console.log('Результат фільтрації:', filtrovane(toFilter))
console.log("7 прєдмєтав в мегаящікє!!!!")

