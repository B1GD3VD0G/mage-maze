/**
 * The Maze is a simple entity. It contains the spritesheet for the maze.
 * It does not change throughout the game, so its update method is empty.
 * It is simply drawn (before all other entities) at the position designated by CAMERA.
 */
class Maze {
    constructor() {
    };

    /** 
     * The maze is an entity, and therefore requires an update method.
     * It however, does not change, so this method does nothing.
     */
    update() {

    };

    /**
     * This method is going to draw the maze on the canvas.
     */
    draw() {
        CTX.drawImage(
            ASSET_MGR.getAsset(Maze.SPRITESHEET),
            0, 0,                                               // x/y pos of its start of the spritesheet.
            Maze.SIZE, Maze.SIZE,                               // size on spritesheet
            0 - CAMERA.x, 0 - CAMERA.y,                         // where to draw it.
            Maze.SIZE * Maze.SCALE, Maze.SIZE * Maze.SCALE);    // how big
    };

    // DEFINE STATIC CONSTANTS:

    /** The path to the wizard's spritesheet. */
    static get SPRITESHEET() {
        return "./sprites/maze.png";
    };

    /** The width of the wizard's sprite, in pixels. */
    static get SIZE() {
        return 181;
    };

    /** How much bigger should the wizard be drawn? */
    static get SCALE() {
        return 50;
    };
};