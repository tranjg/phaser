let gameScene = new Phaser.Scene('Game');

var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 320,
    zoom: 3,
    pixelArt: true,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tiles', 'assets/tiles/Tilemapnew.png', {
        frameWidth: 16,
        frameHeight: 16
    });
    this.load.tilemapTiledJSON('map','assets/tiles/woods-01.json');
    this.load.atlas('pink_monster', 'assets/sprites/pink_monster/pink_monster.png', 'assets/sprites/pink_monster/pink_monster.json');
}

function create ()
{
    var map = this.make.tilemap({ key: 'map' });
    var tileset = map.addTilesetImage('woods-01', 'tiles');

    const grass = map.createStaticLayer('grass', tileset, 0, 0);
    const path = map.createStaticLayer('path', tileset, 0, 0);
    const flowers = map.createStaticLayer('flowers', tileset, 0, 0);
    const collisions = map.createStaticLayer('collisions', tileset);

    collisions.setCollisionByProperty({collides: true});

    const debugGraphics = this.add.graphics().setAlpha(0.75);
    collisions.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243,234,48,255),
        faceColor: new Phaser.Display.Color(40,39,37,255)
    });

    const pink_monster = this.add.sprite(50, 128, 'pink_monster', 'Pink_Monster_Idle_4.png');


}
