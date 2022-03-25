function unflatten(flatObject) {
 let result = {};
    for (let i in flatObject) {
      let keys = i.split(".");
      keys.reduce((acc, value, index) => {
        return (
          acc[value] ||
          (acc[value] = isNaN(Number(keys[index + 1]))
            ? keys.length - 1 === index
              ? flatObject[i]
              : {}
            : [])
        );
      }, result);
    }
  console.log(result)
    return result;
}
