describe("SORTING BALLS", function(){
    it("should produce a new object with empty array", function(){
        let newBalls = new Rack()
        expect(newBalls.balls).toEqual([])
    })
    it("should receive a number and add it to array", function(){
        let newBalls = new Rack()
        newBalls.add(10)
        expect(newBalls.balls).toEqual([10])
    })
    it("should receive a new number and add it to array", function(){
        let newBalls = new Rack()
        newBalls.add(10)
        newBalls.add(20)
        expect(newBalls.balls).toEqual([10, 20])
    })
    it("should receive a new number and add it to array that is lower than the first one", function(){
        let newBalls = new Rack()
        newBalls.add(10)
        newBalls.add(5)
        let result  = newBalls.sort()
        expect(result).toEqual([5, 10])
    })
})