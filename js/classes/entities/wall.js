/**
 * Walls are a very simple entity! They do not have a sprite - they are drawn into the Maze's spritesheet.
 * They consist only of a bounding box. They will not check for collisions - instead, all relevant entities will check
 * for collisions with walls. Its update and draw methods are both empty and only included because they are required by
 * entities in the game loop.
 */
class Wall {
    /**
     * @param {number} xCell The x coordinate of the cell at which it starts.
     * @param {number} yCell The y coordinate of the cell at which it starts.
     * @param {number} length The length of the wall (in CELLS).
     * @param {boolean} isLeft True if it is a LEFT WALL; false if it is a TOP WALL.
     */
    constructor(xCell, yCell, length, isLeft) {
        this.left = xCell * Maze.SCALE * 6;
        this.top = yCell * Maze.SCALE * 6;
        const width = isLeft ? Maze.SCALE : Maze.SCALE * (6 * length + 1);
        this.right = this.left + width;
        const height = isLeft ? Maze.SCALE * (6 * length + 1) : Maze.SCALE;
        this.bottom = this.top + height;
        this.boundingBox = new BoundingBox(this.left, this.top, width, height);
    };

    update() {

    };

    draw() {
        CTX.fillStyle = "yellow";
        CTX.fillRect(
            this.boundingBox.left - CAMERA.x, this.boundingBox.top - CAMERA.y, 
            this.boundingBox.right - this.boundingBox.left, this.boundingBox.bottom - this.boundingBox.top);
    };
}