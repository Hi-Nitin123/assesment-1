function calculateFrequency(string) {
  const str= string.replace(/[^a-z0-9 -]/gi, '');
let st=str.split(" ").join("")
  ob={}
  for(let i=0;i<st.length;i++){
    if(ob[st[i]]){
      ob[st[i]]+=1
    }
    else{
      ob[st[i]]=1
    }
  }
  console.log(ob)
  return ob
  
}
