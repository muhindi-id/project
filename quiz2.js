// question 2

function totalmarks(){
    let totalmarks=100
    let grade=""
    let examinationfinal =prompt("is it final examination")
    let marks = prompt("enter marks")
    if(totalmarks >=90  && examinationfinal){
        grade = "A+"
    }
    else{
        grade = "not grade A+"
    }
    return grade
    }
    console.log(totalmarks())

