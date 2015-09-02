Fire.Class({
    extends: Fire.Behavior,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        this.beginFill(0xFF3300);
        this.lineStyle(4, 0xffd900, 1);

        // draw a shape
        this.moveTo(50,50);
        this.lineTo(250, 50);
        this.lineTo(100, 100);
        this.lineTo(50, 50);
        this.endFill();

        // set a fill and a line style again and draw a rectangle
        this.lineStyle(2, 0x0000FF, 1);
        this.beginFill(0xFF700B, 1);
        this.drawRect(50, 250, 120, 120);

        // draw a rounded rectangle
        this.lineStyle(2, 0xFF00FF, 1);
        this.beginFill(0xFF00BB, 0.25);
        this.drawRoundedRect(150, 450, 300, 100, 15);
        this.endFill();

        // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        this.lineStyle(0);
        this.beginFill(0xFFFF0B, 0.5);
        this.drawCircle(470, 90,60);
        this.endFill();
    },

    // called every frame
    tick: function (dt) {

    },
});
