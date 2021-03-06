Fire.Class({
    extends: Fire.Behavior,

    properties: {
        // foo: {
        //    default: null,
        //    type: Fire.Texture, // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        //    wrapper: cc.Node    // optional
        // },
        // ...
        maskObject: {
            default: null,
            type: PIXI.DisplayObject
        }
    },

    // use this for initialization
    onLoad: function () {
        this.mask = this.maskObject;
    },

    // called every frame
    tick: function (dt) {

    },
});
