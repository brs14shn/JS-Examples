

let arr = [1,3,4,4,3,2,3,4]


let arr1= [1,2,3,4]



function containsDuplicate (nums){
  
    // create a memory
    // if my number is never seen before, put it in memory
    let memory = {}

    for (let i = 0 ; i < nums.length ; i++ ){
        if (memory[nums[i]] === undefined){
            memory[nums[i]] ="haha"
        }else {
            return true
        }
    }
    return false

}




console.log(containsDuplicate(arr1));