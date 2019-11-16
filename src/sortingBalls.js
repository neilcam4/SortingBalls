function Rack(){
    this.balls = []
    leftIndex = 0;
    rightIndex = 0;
    console.log(rightIndex)
}

Rack.prototype.add = function(number){
    this.balls.push(number)
    }

Rack.prototype.findMiddle = function(){
    let middle  = Math.floor(this.balls.length/2)
    return this.balls[middle]
    }

Rack.prototype.swap = function(){
    rightIndex = this.balls.length -1
    let temp = this.balls[leftIndex];
    this.balls[leftIndex] = this.balls[rightIndex];
    this.balls[rightIndex] = temp;
    return this.balls
}

Rack.prototype.middle = function(){
    let m =  this.findMiddle()
    if (this.balls[leftIndex] < m){
        this.swap()
        
    }
    return this.balls
}
// Rack.prototype.partition = function(){
//     let m = findMiddle()
//     console.log(m)
//     let a  = this.balls[leftIndex]
//     let z = this.balls[rightIndex]
//     while(a <= z){
//         while (this.balls[leftIndex] < m){
//             leftIndex++;
//         }
//         while (this.balls[rightIndex >= m]){
//             rightIndex--;
//         }
//         if(this.balls[leftIndex] >= this.balls[rightIndex] ){
//             // this.balls.swap()
//             leftIndex ++
//             rightIndex --
//         }
//     }
//     return this.balls
// }

Rack.prototype.sort = function(){
    let newArray = []
    let a = 0;
    let A = this.balls[a]
    let B = this.balls[a+1]
    while(a <= this.balls.length ){
        if(A > B){
            newArray = this.balls.slice(a+1)
            newArray.push(A)
            a++
        
    };
    return newArray
    }
}