/**
 * The Game Engine contains all entities, and puts them all through the update-render loop. It is also responsible for tracking user input.
 */
class GameEngine {
    /**
     * This constructs a new GameEngine, initializing some necessary parameters.
     */
    constructor() {
        /** Everything that will be updated and drawn each frame. 
         *  Note: This does not include the WIZARD, which is a global parameter. */
        this.entities = [];

        /** Is the user pressing the down arrow (or S key)? */
        this.down = false;
        /** Is the user pressing the up arrow (or W key)? */
        this.up = false;
        /** Is the user pressing the right arrow (or D key)? */
        this.right = false;
        /** Is the user pressing the left arrow (or A key)? */
        this.left = false;

        /** The timer tells you how long it's been since the last tick! */
        this.timer = new Timer();

        // Start listening for user input.
        this.startInput();
    };
    
    /**
     * This adds a new entity to the entities array.
     * @param {Object} entity The entity (sprite) that you want to add to the Game.
     */
    addEntity(entity) {
        this.entities.push(entity);
    };

    /** This method is actually going to control the update-render loop that is at the heart of any game. */
    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, CANVAS);
        };
        gameLoop();
    };

    /** This is the update-render loop. */
    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

    /**
     * This method is going to go through all entities and allow them to update their position.
     */
    update() {
        // Iterate forward through the entities array. Update everything.
        for (let i = 0; i < this.entities.length; i++) {
            let entity = this.entities[i];
            if (!entity.removeFromWorld) {
                entity.update();
            }
        }
        // Update the wizard, which is not a regular entity.
        WIZARD.update();
        // Update the camera, which is not a regular entity.
        CAMERA.update();

        // Iterate backward through the entities array, and remove all entities which ought be removed.
        for (let i = this.entities.length - 1; i >= 0; i--) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    /**
     * This method is going to clear the canvas and redraw ALL of the entities in their *new* positions.
     */
    draw() {
        // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
        CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

        // Draw entities from first to last.
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw();
        }
        // Draw the wizard, which is not a normal entity.
        WIZARD.draw();
    };

    /**
     * This method is going to start listening for user inputs. Affects the Game Engine's left/right/up/down booleans according
     * to interaction with either the WASD keys or arrows.
     */
    startInput() {
        
        CANVAS.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyA":
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "KeyD":
                case "ArrowRight":
                    this.right = true;
                    break;
                case "KeyS":
                case "ArrowDown":
                    this.down = true;
                    break;
                case "KeyW":
                case "ArrowUp":
                    this.up = true;
                    break;
            }
        }, false);

        CANVAS.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "KeyA":
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "KeyD":
                case "ArrowRight":
                    this.right = false;
                    break;
                case "KeyS":
                case "ArrowDown":
                    this.down = false;
                    break;
                case "KeyW":
                case "ArrowUp":
                    this.up = false;
                    break;
            }
        }, false);
    };
};