class Goblin {
    constructor() {
        /** The x position of the Goblin. */
        this.x = 150;
        /** The y position of the Goblin. */
        this.y = 150;
        /** The direction that the Goblin is facing. [ "forward", "backward", "left", "right" ]. */
        this.facing = "right";
        /** What the Goblin is currently doing. [ "idle", "walking" ]. */
        this.action = "idle";
        /** All animations of the Goblin. Arranged in a 2d array: [facing] [action]. */
        this.animations = [];
        this.loadAnimations();
        /** The bounding box of the Goblin, used to check for collisions. */
        this.boundingBox = new BoundingBox(this.x, this.y, Goblin.WIDTH, Goblin.HEIGHT);
        /** The last bounding box of the Goblin, used to check for which action to perform, for certain collisions. */
        this.lastBoundingBox = null;
    };

    update() {
        if (this.action === "walking") {
            let xVelocity = 0;
            let yVelocity = 0;
            if (this.facing === "forward") {
                yVelocity += Goblin.WALKING_SPEED;
            }
            if (this.facing === "backward") {
                yVelocity -= Goblin.WALKING_SPEED;
            }
            if (this.facing === "left") {
                xVelocity -= Goblin.WALKING_SPEED;
            }
            if (this.facing === "right") {
                xVelocity += Goblin.WALKING_SPEED;
            }
            this.x += xVelocity * GAME.clockTick;
            this.y += yVelocity * GAME.clockTick;
            this.lastBoundingBox = this.boundingBox;
            this.boundingBox = new BoundingBox(this.x, this.y, Goblin.WIDTH * Goblin.SCALE, Goblin.HEIGHT * Goblin.SCALE);
        }
    };

    draw() {
        this.animations[this.facing][this.action].drawFrame(GAME.clockTick);
    };

    static get SPRITESHEET() {
        return "./sprites/goblin.png";
    };

    static get HEIGHT() {
        return 26;
    };

    static get WIDTH() {
        return 13;
    };

    static get WALKING_SPEED() {
        return 100;
    };

    static get SCALE() {
        return 3;
    }

    loadAnimations() {
        this.animations["forward"] = [];
        this.animations["backward"] = [];
        this.animations["left"] = [];
        this.animations["right"] = [];

        // Idle animations:
        this.animations["forward"]["idle"] = new Animator(
            Goblin.SPRITESHEET,
            0, 0,
            Goblin.WIDTH, Goblin.HEIGHT,
            1, 1);
        this.animations["backward"]["idle"] = new Animator(
            Goblin.SPRITESHEET,
            0, Goblin.HEIGHT,
            Goblin.WIDTH, Goblin.HEIGHT,
            1, 1);
        this.animations["left"]["idle"] = new Animator(
            Goblin.SPRITESHEET,
            Goblin.WIDTH, Goblin.HEIGHT * 3,
            Goblin.WIDTH, Goblin.HEIGHT,
            1, 1);
        this.animations["right"]["idle"] = new Animator(
            Goblin.SPRITESHEET,
            Goblin.WIDTH, Goblin.HEIGHT * 2,
            Goblin.WIDTH, Goblin.HEIGHT,
            1, 1);

        // Walking animations:
        this.animations["forward"]["walking"] = new Animator(
            Goblin.SPRITESHEET,
            0, 0,
            Goblin.WIDTH, Goblin.HEIGHT,
            4, 0.25);
        this.animations["backward"]["walking"] = new Animator(
            Goblin.SPRITESHEET,
            0, Goblin.HEIGHT,
            Goblin.WIDTH, Goblin.HEIGHT,
            4, 0.25);
        this.animations["right"]["walking"] = new Animator(
            Goblin.SPRITESHEET,
            0, Goblin.HEIGHT * 2,
            Goblin.WIDTH, Goblin.HEIGHT,
            4, 0.25);
        this.animations["left"]["walking"] = new Animator(
            Goblin.SPRITESHEET,
            0, Goblin.HEIGHT * 3,
            Goblin.WIDTH, Goblin.HEIGHT,
            4, 0.25);
    };
};