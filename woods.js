class woods extends Phaser.scene {
    constructor ()
    {
        super({key: 'woods'});
    }

    preload ()
    {
        this.load.image('tiles', 'assets/tiles/Tilemapnew.png');
        this.load.tilemapTiledJSON(`map`,`assets/tiles/woods-01.json`);

    }

    create ()
    {
        this.image = this.add.image(400,300, 'tiles');
        //const map = this.make.tilemap({key: 'map'});;
       // const tileset = map.addTilesetImage('woods', 'tiles');

       // map.createStaticLayer('flowers', tileset, 0, 0);
       // map.createStaticLayer('path', tileset, 0 , 0);
       // map.createStaticLayer('grass', tileset, 0, 0);
       // const collidables = map.createStaticLayer('collidables', tileset);

       // collidables.setCollisionByProperty({collides: true});
    }
}
