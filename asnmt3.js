function flatten(unflatObject) {
 
    let result = {};

    for (const i in unflatObject) {
 
        if ((typeof unflatObject[i]) === 'object') {
            const temp = flatten(unflatObject[i]);
            for (const j in temp) {
 
                
                result[i + '.' + j] = temp[j];
            }
        }
 
   
        else {
            result[i] = unflatObject[i];
        }
    }
    console.log(result)
    return result;
}

