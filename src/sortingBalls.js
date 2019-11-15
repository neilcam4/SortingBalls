function Rack(){
    this.balls = []
}

Rack.prototype.add = function(number){
    this.balls.push(number)
    }

Rack.prototype.sort = function(){
    newArray = []
    let a = this.balls[0]
    console.log(a)
    let b = this.balls[1]
    console.log(b)
    if (a > b){
        console.log(this.balls.slice(1))
       newArray = this.balls.slice(1)
       newArray.push(a)
       console.log(newArray)
       
    }
    return newArray
}