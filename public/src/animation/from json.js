var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
    this.load.json('gemData', 'assets/animations/gems.json');
}

function create ()
{
    var data = this.cache.json.get('gemData');

    this.anims.fromJSON(data);

    this.add.sprite(400, 100, 'gems').play('diamond');
    this.add.sprite(400, 200, 'gems').play('prism');
    this.add.sprite(400, 300, 'gems').play('ruby');
    this.add.sprite(400, 400, 'gems').play('square');
}