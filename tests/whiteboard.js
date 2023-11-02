describe("WhiteBoard", function() {
    describe("on click", function(){
        it("sets the edit coordinates to the click location", function(){

            var spec = {};
            var whiteboard = new WhiteBoard(spec);
            var xCoord = 23;
            var yCoord = 37;
            whiteboard.click({"clientX": xCoord, "clientY": yCoord});

            assert.equal(whiteboard.editX, xCoord);
            assert.equal(whiteboard.editY, yCoord);
        });
    });

    describe("on construction", function(){
        it("sets a background color if specified", function(){
            var bgColor = "#ffcccc";
            var spec = {"bgColor": bgColor};
            var whiteboard = new WhiteBoard(spec);

            assert.equal(whiteboard.bgColor, bgColor);

            // '#ffcccc' is equivalent to 'rgb(255, 204, 240)'
            // and is usually converted by the browser on set.
            assert.include(whiteboard.canvasEl.style.background, "rgb(255, 204, 204");
        });

        it("sets the top and left coords if specified", function(){
            var topCoord = "53px";
            var leftCoord = "71px";

            var spec = {"topCoord": topCoord, "leftCoord": leftCoord};
            var whiteboard = new WhiteBoard(spec);

            assert.equal(topCoord, whiteboard.canvasEl.style.top);
            assert.equal(leftCoord, whiteboard.canvasEl.style.left);
        });
    });
});
