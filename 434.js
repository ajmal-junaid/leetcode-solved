function countSegments(s) {
    // if (!s.trim()) {
    //     return 0;
    // }
    // let string = s.split(" ")
    // console.log(string,"string");
    // let count=0
    // for(let i=0;i<string.length;i++){
    //     if(string[i]){
    //         count++
    //     }
    // }
    // return count;
    if(!s.trim()){
        return 0;
    }
    let count=0
    for(let i =0;i<s.length;i++){
        if(s[i]!=" "){
            count++
            console.log(s[i])
        }
    }
    return count;
}
console.log(countSegments(", , , ,        a, eaefa"))