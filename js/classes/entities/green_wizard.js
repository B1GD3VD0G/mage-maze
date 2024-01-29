class GreenWizard {
    
    
    constructor() {
        /** The x position of the Green Wizard. */
        this.x = 50;
        /** The y position of the Green Wizard. */
        this.y = 50;
        /** The direction that the Green Wizard is facing. [ "forward", "backward", "left", "right" ]. */
        this.facing = "forward";
        /** What the Green Wizard is currently doing. [ "idle", "walking", "jumping", "casting" ]. */
        this.action = "idle";
        /** All animations of the Green Wizard. Arranged in a 2d array: [facing] [action]. */
        this.animations = [];
        this.loadAnimations();
        /** The bounding box of the Green Wizard, used to check for collisions. */
        this.boundingBox = new BoundingBox(this.x, this.y, GreenWizard.WIDTH, GreenWizard.HEIGHT);
        /** The last bounding box of the Green Wizard, used to check for which action to perform, for certain collisions. */
        this.lastBoundingBox = null;
    };

    /**
     * This method is going to update the conditions of the Green Wizard based upon keyboard input.
     */
    update() {
        // Update its position and animation according to keyboard input.
        let xVelocity = 0;
        let yVelocity = 0;
        if (GAME.down) {
            this.facing = "forward";
            this.action = "walking";
            yVelocity += GreenWizard.WALKING_SPEED;
        }
        if (GAME.up) {
            this.facing = "backward";
            this.action = "walking";
            yVelocity -= GreenWizard.WALKING_SPEED;
        }
        if (GAME.right) {
            this.facing = "right";
            this.action = "walking";
            xVelocity += GreenWizard.WALKING_SPEED;
        }
        if (GAME.left) {
            this.facing = "left";
            this.action = "walking";
            xVelocity -= GreenWizard.WALKING_SPEED;
        }
        // Trigonometry:
        if (xVelocity && yVelocity) {
            const perpindicularSpeed = Math.sqrt(Math.pow(GreenWizard.WALKING_SPEED, 2) / 2);
            const xMultiplier = xVelocity > 0 ? 1 : -1;
            const yMultiplier = yVelocity > 0 ? 1 : -1;
            xVelocity = perpindicularSpeed * xMultiplier;
            yVelocity = perpindicularSpeed * yMultiplier;
        }
        if (!(GAME.right || GAME.left || GAME.down || GAME.up)) {
            this.action = "idle";
        }
        // Let's apply the newfound velocity and move the guy.
        this.x += xVelocity * GAME.clockTick;
        this.y += yVelocity * GAME.clockTick;
        // Update the bounding box.
        this.lastBoundingBox = this.boundingBox;
        this.boundingBox = new BoundingBox(this.x, this.y, GreenWizard.WIDTH * GreenWizard.SCALE, GreenWizard.HEIGHT * GreenWizard.SCALE);
        // Check for collisions!
        GAME.entities.forEach((entity) => {
            // Does entity have a bounding box? Do they even collide? If not, ignore.
            if (!entity.boundingBox || !this.boundingBox.collide(entity.boundingBox)) return;
            // Now we know that the Green Wizard DOES intersect with entity!
            // Let's make constants so that the code isn't so tedious.
            const rightX = this.x + GreenWizard.SCALE * GreenWizard.WIDTH;
            const bottomY = this.y + GreenWizard.SCALE * GreenWizard.HEIGHT;
            //If it's a wall, just undo your motion.
            if (entity instanceof Wall) {
                // Which way are we walking?
                // Are we actually running into THAT side of the wall?
                
            }
        });
    };

    /**
     * This method is going to draw the Green Wizard using the appropriate animation.
     */
    draw() {
        this.animations[this.facing][this.action].drawFrame(GAME.clockTick, this.x - CAMERA.x, this.y - CAMERA.y, GreenWizard.SCALE);
    };

    // DEFINE STATIC CONSTANTS:

    /** The path to the wizard's spritesheet. */
    static get SPRITESHEET() {
        return "./sprites/green-wizard.png";
    };

    /** The width of the wizard's sprite, in pixels. */
    static get WIDTH() {
        return 21;
    };

    /** The height of the wizard's sprite, in pixels. */
    static get HEIGHT() {
        return 27;
    };

    /** How much bigger should the wizard be drawn? */
    static get SCALE() {
        return 5;
    };

    /** How many pixels per second does the wizard move at?
     * Note: this one, at least for now, is not static because we may find powerups/curses to alter WALKING_SPEED.
     */
    static get WALKING_SPEED() {
        return 350;
    }

    // HELPER METHODS:

    /**
     * This method is called by the constructor. It creates all of the animations for the Green Wizard.
     */
    loadAnimations() {
        this.animations["forward"] = [];
        this.animations["backward"] = [];
        this.animations["left"] = [];
        this.animations["right"] = [];

        // Idle animations:
        this.animations["left"]["idle"] = new Animator(
            GreenWizard.SPRITESHEET,
            0, 0,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            1, 1);
        this.animations["forward"]["idle"] = new Animator(
            GreenWizard.SPRITESHEET,
            GreenWizard.WIDTH, 0,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            1, 1);
        this.animations["backward"]["idle"] = new Animator(
            GreenWizard.SPRITESHEET,
            GreenWizard.WIDTH * 2, 0,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            1, 1);
        this.animations["right"]["idle"] = new Animator(
            GreenWizard.SPRITESHEET,
            GreenWizard.WIDTH * 3, 0,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            1, 1);
        
        // Walking animations:
        this.animations["forward"]["walking"] = new Animator(
            GreenWizard.SPRITESHEET,
            0, GreenWizard.HEIGHT,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            4, 0.15);
        this.animations["backward"]["walking"] = new Animator(
            GreenWizard.SPRITESHEET,
            0, GreenWizard.HEIGHT * 2,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            4, 0.15);
        this.animations["left"]["walking"] = new Animator(
            GreenWizard.SPRITESHEET,
            0, GreenWizard.HEIGHT * 3,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            4, 0.15);
        this.animations["right"]["walking"] = new Animator(
            GreenWizard.SPRITESHEET,
            0, GreenWizard.HEIGHT * 4,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            4, 0.15);
        
        /*
        NOTE: The jumping animation is different from the others in that it
        is a multi-frame animation, however the frame to pick is not (necessarily)
        based on time, but on vertical direction of velocity. Including this animation
        (with the beard moving as it is) may require me to make a special kind of Animator.
        */

        // Jumping animations:
        this.animations["left"]["jumping"] = new Animator(
            GreenWizard.SPRITESHEET,
            0, GreenWizard.HEIGHT * 3,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            3, 1);
        this.animations["right"]["jumping"] = new Animator(
            GreenWizard.SPRITESHEET,
            0, GreenWizard.HEIGHT * 3,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            3, 1);
        
        // Casting animation:
        this.animations["forward"]["casting"] = new Animator(
            GreenWizard.SPRITESHEET,
            0, GreenWizard.HEIGHT * 4,
            GreenWizard.WIDTH, GreenWizard.HEIGHT,
            4, 1);
    };
};