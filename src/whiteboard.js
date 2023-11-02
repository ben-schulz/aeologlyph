StyleDefaults = {
    "bgColor": "#faf2f0",
    "pingRadius": 15
};

class WhiteBoard{

    drawPing(){
    
        var ctx = this.canvasEl.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.editX, this.editY, StyleDefaults.pingRadius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    click(e){
        this.editX = e.clientX - this.left();
        this.editY = e.clientY + this.top();

        this.drawPing();
    }

    left(){
        return this.canvasEl.style.left;
    }

    top(){
        return this.canvasEl.style.top;
    }

    constructor(spec){
        this.editX = null;
        this.editY = null;

        this.canvasEl = document.createElement("canvas");

        if("bgColor" in spec){
            this.bgColor = spec["bgColor"];
        }
        else{
            this.bgColor = StyleDefaults.bgColor;
        }
        this.canvasEl.style.background = this.bgColor;

        if("topCoord" in spec){
            this.canvasEl.style.top = spec["topCoord"];
        }
        if("leftCoord" in spec){
            this.canvasEl.style.left = spec["leftCoord"];
        }

        this.canvasEl.addEventListener("click", e => this.click(e));
    }

}
