function secondLargest(array) {
 let largest=0
 let sec_lgs=0
  for(let i=0;i<array.length;i++){
    if (array[i]>largest){
      largest=array[i]
    }
  }
  for(let i=0;i<array.length;i++){
    if(array[i]!=largest){
      if (array[i]>sec_lgs){
        sec_lgs=array[i]
        
      }
      
    }
    
  }
  console.log(sec_lgs)
  return sec_lgs
}
