 // question 3
    let obj = {}
    obj[1] = "one"
    obj["1"] = "string one"

    console.log(obj[1]);  // one as string  because one is defined as a string 

    console.log(obj["1"]); // string one as it is defined as a string

    console.log(obj[1]) === obj["1"]; //true because both results into a string

  
}