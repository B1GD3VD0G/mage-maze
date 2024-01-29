// Retrieve Canvas, generate Context.
const CANVAS = document.getElementById("game-world");
const CTX = CANVAS.getContext("2d");
// Define global constants:
const ASSET_MGR = new AssetManager();
const CAMERA = new Camera();
const GAME = new GameEngine();
const WIZARD = new GreenWizard();

// Sharp pixels for clearer, stylized effect.
CTX.imageSmoothingEnabled = false;

// Add stuff to the download queue here!
ASSET_MGR.queueDownload(Maze.SPRITESHEET);
ASSET_MGR.queueDownload(GreenWizard.SPRITESHEET);
ASSET_MGR.queueDownload(Goblin.SPRITESHEET);

// Download it all and start the game up!
ASSET_MGR.downloadAll(() => {
	load30x30Maze();
	GAME.start();
});
