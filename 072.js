function checkExam(array1, array2) {
    let grade = 0
    for(i=0; i<array2.length; i++){
        (array2[i] ==="") ? grade : (array1[i]===array2[i]) ? grade+=4 : grade-=1
    }
    return grade<0 ? 0 : grade
}


let grade = checkExam( ["a", "a", "c", "b"],   ["a", "a", "b", "" ] );
console.log(grade)
