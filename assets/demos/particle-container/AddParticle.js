Fire.Class({
    extends: Fire.Behavior,

    properties: {
        texture: {
            default: null,
            url: Fire.Texture
        }
    },

    // use this for initialization
    onLoad: function () {
        var renderer = Fire.engine.renderer;
        var maggots = [];
        var totalSprites = renderer instanceof PIXI.WebGLRenderer ? 10000 : 100;

        for (var i = 0; i < totalSprites; i++) {
            // create a new Sprite
            var dude = PIXI.Sprite.fromImage(this.texture);

            dude.tint = Math.random() * 0xE8D4CD;

            // set the anchor point so the texture is centerd on the sprite
            dude.anchor.set(0.5);

            // different maggots, different sizes
            dude.scale.set(0.8 + Math.random() * 0.3);

            // scatter them all
            dude.x = Math.random() * renderer.width;
            dude.y = Math.random() * renderer.height;

            dude.tint = Math.random() * 0x808080;

            // create a random direction in radians
            dude.direction = Math.random() * Math.PI * 2;

            // this number will be used to modify the direction of the sprite over time
            dude.turningSpeed = Math.random() - 0.8;

            // create a random speed between 0 - 2, and these maggots are slooww
            dude.speed = (2 + Math.random() * 2) * 0.2;

            dude.offset = Math.random() * 100;

            // finally we push the dude into the maggots array so it it can be easily accessed later
            maggots.push(dude);

            this.addChild(dude);
        }

        // create a bounding box box for the little maggots
        var dudeBoundsPadding = 100;
        this.dudeBounds = new PIXI.Rectangle(-dudeBoundsPadding,
                                            -dudeBoundsPadding,
                                            renderer.width + dudeBoundsPadding * 2,
                                            renderer.height + dudeBoundsPadding * 2);

        this.maggots = maggots;
        this.time = 0;
    },

    // called every frame
    tick: function (dt) {
        var maggots = this.maggots;
        var dudeBounds = this.dudeBounds;

        // iterate through the sprites and update their position
        for (var i = 0; i < maggots.length; i++)
        {
            var dude = maggots[i];
            dude.scale.y = 0.95 + Math.sin(this.time + dude.offset) * 0.05;
            dude.direction += dude.turningSpeed * 0.01;
            dude.position.x += Math.sin(dude.direction) * (dude.speed * dude.scale.y);
            dude.position.y += Math.cos(dude.direction) * (dude.speed * dude.scale.y);
            dude.rotation = -dude.direction + Math.PI;

            // wrap the maggots
            if (dude.position.x < dudeBounds.x)
            {
                dude.position.x += dudeBounds.width;
            }
            else if (dude.position.x > dudeBounds.x + dudeBounds.width)
            {
                dude.position.x -= dudeBounds.width;
            }

            if (dude.position.y < dudeBounds.y)
            {
                dude.position.y += dudeBounds.height;
            }
            else if (dude.position.y > dudeBounds.y + dudeBounds.height)
            {
                dude.position.y -= dudeBounds.height;
            }
        }

        // increment the ticker
        this.time += 0.1;
    },
});
