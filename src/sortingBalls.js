function Rack(){
    this.balls = []
    leftIndex = 0;
    rightIndex = 1
}

Rack.prototype.add = function(number){
    this.balls.push(number)
    }

Rack.prototype.findMiddle = function(){
    let middle  = Math.floor(this.balls.length/2)
    return this.balls[middle]
    }

Rack.prototype.swap = function(){
    let temp = this.balls[leftIndex];
    this.balls[leftIndex] = this.balls[rightIndex];
    this.balls[rightIndex] = temp;
    return this.balls
}

Rack.prototype.sort = function(){
    let newArray = []
    let a = 0;
    let A = this.balls[a]

    let B = this.balls[a+1]

    
    while(a <= this.balls.length ){
        // console.log("balls.length = " + this.balls.length)
        if(A > B){
            newArray = this.balls.slice(a+1)
            // console.log("this.balls after slice = " + this.balls.slice(a+1))
            newArray.push(A)
            // console.log(newArray)
            a++
        
    };
    // console.log(newArray)
    return newArray
    }
}