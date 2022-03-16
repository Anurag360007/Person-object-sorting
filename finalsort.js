class Person {
    constructor(name, age,salary,sex) {
      this.name = name;
      this.age = age;
      this.salary = salary;
      this.sex = sex;
    }
  }
  
  function quick_Sort(origArray,fieldName,orderBy) {
      if (origArray.length <= 1) { 
          return origArray;
      } else {
  
          var left = [];
          var right = [];
          var newArray = [];
          var pivot = origArray.pop();
          var length = origArray.length;
  
          for (var i = 0; i < length; i++) {
              let element1=origArray[i][fieldName];
              let element2=pivot[fieldName];
              if(orderBy==="asc"){
                  if (element1 <= element2) {
                  left.push(origArray[i]);
                  } else {
                      right.push(origArray[i]);
                  }
              }
              if(orderBy==="desc"){
                  if (element1 >= element2) {
                  left.push(origArray[i]);
                  } else {
                      right.push(origArray[i]);
                  }
              }
          }
          origArray.push(pivot);
          return newArray.concat(quick_Sort(left,fieldName,orderBy), pivot, quick_Sort(right,fieldName,orderBy));
      }
  
  }
  
  
  
  const persons=[];
  let p1= new Person("Afc",21,150,'M');
  persons.push(p1);
  let p2= new Person("med",29,149,'F');
  persons.push(p2);
  let p3= new Person("zbd",22,153,'M');
  persons.push(p3);

  console.log("\original array");
  for(var i=0;i<persons.length;i++){
      console.log(persons[i]);
  }
  
  
  console.log("\nsorting on basis of names");
  const sortedArray1 = quick_Sort(persons,"name","desc");
  for(var i=0;i<sortedArray1.length;i++){
      console.log(sortedArray1[i]);
  }
  
  console.log("\nsorting on basis of age");
  const sortedArray2 = quick_Sort(persons,"age","desc");
  for(var i=0;i<sortedArray2.length;i++){
      console.log(sortedArray2[i]);
  }

  console.log("\nsorting on basis of salary");
  const sortedArray3 = quick_Sort(persons,"salary","desc");
  for(var i=0;i<sortedArray3.length;i++){
      console.log(sortedArray3[i]);
  }
