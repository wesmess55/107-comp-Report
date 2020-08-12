module.exports = {
  test: function()
  {
    console.log("Called");
    return "Test";
  },
  subtract: function(num1,num2){
    var num3  =  num1 - num2;
    return num3;
  },
  add: function(num1,num2){
    var num3  =  num1 + num2;
    return num3;
  },
  divide: function(num1,num2){
    if(num1 == 0, num2 == 0){
      return num3 = "Error: Divided by 0";
    }
    else{
       var num3 = num1 / num2;
       return num3;
    }
  },
  product: function(num1,num2){
    if(num1 != 0, num2 != 0){
        var num3 = num1*num2;
        return num3;
    }
    else{
       return num3 = 0;
    }
  },
  lesser: function(num1,num2){
    if(num1 - num2 > 0)return num3 = num2; return num3 = num1;
  },
  greater: function(num1,num2){
    if(num1 - num2 > 0)return num3 = num1; return num3 = num2; 
  },
  lesserThree: function(num1,num2,num3){
      if(num1 < num2)var answer = num1; answer = num2;
      if(answer < num3)return num3; return answer;
  },
  greaterThree: function(num1,num2,num3){
    if(num1 > num2)var answer = num1; answer = num2;
    if(answer < num3)return num3; return answer;
  },
  isEven: function(num1){
      if(num1 %2 == 0) return true; false;
  },
  isOdd: function(num1){
      if(num1 %2 != 0) return true; false;
  },
};
