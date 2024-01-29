const load30x30Maze = () => {
    // Start with the Maze, which is the background.
    GAME.addEntity(new Maze());
    // Add the walls. (Remember, these are invisible, unless we're debugging.)
    // Start with vertical walls.
    GAME.addEntity(new Wall(0, 1, 29, true));

    GAME.addEntity(new Wall(1, 9, 6, true));
    GAME.addEntity(new Wall(1, 19, 10, true));

    GAME.addEntity(new Wall(2, 1, 4, true));
    GAME.addEntity(new Wall(2, 10, 4, true));
    GAME.addEntity(new Wall(2, 15, 6, true));
    GAME.addEntity(new Wall(2, 23, 5, true));

    GAME.addEntity(new Wall(3, 0, 2, true));
    GAME.addEntity(new Wall(3, 8, 2, true));
    GAME.addEntity(new Wall(3, 12, 1, true));
    GAME.addEntity(new Wall(3, 14, 7, true));
    GAME.addEntity(new Wall(3, 24, 1, true));
    GAME.addEntity(new Wall(3, 27, 2, true));

    GAME.addEntity(new Wall(4, 2, 2, true));
    GAME.addEntity(new Wall(4, 7, 7, true));
    GAME.addEntity(new Wall(4, 15, 2, true));
    GAME.addEntity(new Wall(4, 18, 4, true));
    GAME.addEntity(new Wall(4, 23, 2, true));
    
    GAME.addEntity(new Wall(5, 8, 1, true));
    GAME.addEntity(new Wall(5, 10, 1, true));
    GAME.addEntity(new Wall(5, 14, 1, true));

    GAME.addEntity(new Wall(6, 1, 2, true));
    GAME.addEntity(new Wall(6, 7, 1, true));
    GAME.addEntity(new Wall(6, 9, 1, true));
    GAME.addEntity(new Wall(6, 14, 2, true));
    GAME.addEntity(new Wall(6, 19, 3, true));
    GAME.addEntity(new Wall(6, 28, 1, true));

    GAME.addEntity(new Wall(7, 0, 2, true));
    GAME.addEntity(new Wall(7, 3, 1, true));
    GAME.addEntity(new Wall(7, 8, 1, true));
    GAME.addEntity(new Wall(7, 12, 1, true));
    GAME.addEntity(new Wall(7, 14, 3, true));
    GAME.addEntity(new Wall(7, 19, 2, true));
    GAME.addEntity(new Wall(7, 22, 2, true));
    GAME.addEntity(new Wall(7, 28, 2, true));

    GAME.addEntity(new Wall(8, 2, 1, true));
    GAME.addEntity(new Wall(8, 4, 1, true));
    GAME.addEntity(new Wall(8, 9, 1, true));
    GAME.addEntity(new Wall(8, 12, 2, true));
    GAME.addEntity(new Wall(8, 16, 2, true));
    GAME.addEntity(new Wall(8, 23, 2, true));

    GAME.addEntity(new Wall(9, 1, 1, true));
    GAME.addEntity(new Wall(9, 5, 1, true));
    GAME.addEntity(new Wall(9, 8, 1, true));
    GAME.addEntity(new Wall(9, 12, 1, true));
    GAME.addEntity(new Wall(9, 20, 1, true));
    GAME.addEntity(new Wall(9, 22, 2, true));

    GAME.addEntity(new Wall(10, 2, 1, true));
    GAME.addEntity(new Wall(10, 4, 1, true));
    GAME.addEntity(new Wall(10, 9, 1, true));
    GAME.addEntity(new Wall(10, 11, 3, true));
    GAME.addEntity(new Wall(10, 19, 3, true));
    GAME.addEntity(new Wall(10, 23, 2, true));

    GAME.addEntity(new Wall(11, 2, 4, true));
    GAME.addEntity(new Wall(11, 8, 1, true));
    GAME.addEntity(new Wall(11, 12, 3, true));
    GAME.addEntity(new Wall(11, 18, 2, true));
    GAME.addEntity(new Wall(11, 21, 6, true));
    GAME.addEntity(new Wall(11, 28, 1, true));

    GAME.addEntity(new Wall(12, 2, 6, true));
    GAME.addEntity(new Wall(12, 13, 3, true));
    GAME.addEntity(new Wall(12, 17, 2, true));
    GAME.addEntity(new Wall(12, 22, 4, true));
    GAME.addEntity(new Wall(12, 27, 2, true));

    GAME.addEntity(new Wall(13, 3, 3, true));
    GAME.addEntity(new Wall(13, 14, 1, true));
    GAME.addEntity(new Wall(13, 19, 1, true));
    GAME.addEntity(new Wall(13, 26, 2, true));

    GAME.addEntity(new Wall(14, 4, 1, true));
    GAME.addEntity(new Wall(14, 13, 1, true));
    GAME.addEntity(new Wall(14, 15, 5, true));
    GAME.addEntity(new Wall(14, 26, 1, true));

    GAME.addEntity(new Wall(15, 8, 2, true));
    GAME.addEntity(new Wall(15, 12, 2, true));
    GAME.addEntity(new Wall(15, 16, 3, true));
    GAME.addEntity(new Wall(15, 20, 1, true));
    GAME.addEntity(new Wall(15, 27, 3, true));

    GAME.addEntity(new Wall(16, 3, 2, true));
    GAME.addEntity(new Wall(16, 7, 5, true));
    GAME.addEntity(new Wall(16, 14, 1, true));
    GAME.addEntity(new Wall(16, 21, 1, true));
    GAME.addEntity(new Wall(16, 25, 2, true));
    GAME.addEntity(new Wall(16, 28, 1, true));

    GAME.addEntity(new Wall(17, 2, 4, true));
    GAME.addEntity(new Wall(17, 8, 1, true));
    GAME.addEntity(new Wall(17, 13, 1, true));
    GAME.addEntity(new Wall(17, 19, 2, true));
    GAME.addEntity(new Wall(17, 24, 2, true));

    GAME.addEntity(new Wall(18, 3, 2, true));
    GAME.addEntity(new Wall(18, 6, 1, true));
    GAME.addEntity(new Wall(18, 9, 1, true));
    GAME.addEntity(new Wall(18, 14, 1, true));
    GAME.addEntity(new Wall(18, 25, 2, true));
    
    GAME.addEntity(new Wall(19, 6, 5, true));
    GAME.addEntity(new Wall(19, 13, 1, true));
    GAME.addEntity(new Wall(19, 18, 3, true));
    GAME.addEntity(new Wall(19, 24, 5, true));

    GAME.addEntity(new Wall(20, 0, 2, true));
    GAME.addEntity(new Wall(20, 5, 7, true));
    GAME.addEntity(new Wall(20, 14, 1, true));
    GAME.addEntity(new Wall(20, 18, 2, true));
    GAME.addEntity(new Wall(20, 22, 1, true));
    GAME.addEntity(new Wall(20, 24, 6, true));

    GAME.addEntity(new Wall(21, 1, 2, true));
    GAME.addEntity(new Wall(21, 6, 11, true));
    GAME.addEntity(new Wall(21, 23, 1, true));

    GAME.addEntity(new Wall(22, 1, 3, true));
    GAME.addEntity(new Wall(22, 5, 1, true));
    GAME.addEntity(new Wall(22, 8, 2, true));
    GAME.addEntity(new Wall(22, 15, 1, true));
    GAME.addEntity(new Wall(22, 19, 2, true));
    GAME.addEntity(new Wall(22, 22, 7, true));

    GAME.addEntity(new Wall(23, 1, 4, true));
    GAME.addEntity(new Wall(23, 6, 3, true));
    GAME.addEntity(new Wall(23, 11, 2, true));
    GAME.addEntity(new Wall(23, 22, 8, true));

    GAME.addEntity(new Wall(24, 5, 1, true));
    GAME.addEntity(new Wall(24, 8, 3, true));
    GAME.addEntity(new Wall(24, 13, 1, true));
    GAME.addEntity(new Wall(24, 15, 2, true));
    GAME.addEntity(new Wall(24, 18, 3, true));
    GAME.addEntity(new Wall(24, 23, 1, true));
    GAME.addEntity(new Wall(24, 26, 3, true));

    GAME.addEntity(new Wall(25, 2, 5, true));
    GAME.addEntity(new Wall(25, 9, 1, true));
    GAME.addEntity(new Wall(25, 14, 1, true));
    GAME.addEntity(new Wall(25, 16, 7, true));
    GAME.addEntity(new Wall(25, 24, 1, true));

    GAME.addEntity(new Wall(26, 3, 3, true));
    GAME.addEntity(new Wall(26, 10, 1, true));
    GAME.addEntity(new Wall(26, 15, 5, true));
    GAME.addEntity(new Wall(26, 22, 2, true));
    GAME.addEntity(new Wall(26, 25, 4, true));

    GAME.addEntity(new Wall(27, 3, 2, true));
    GAME.addEntity(new Wall(27, 9, 1, true));
    GAME.addEntity(new Wall(27, 18, 5, true));
    GAME.addEntity(new Wall(27, 24, 1, true));
    GAME.addEntity(new Wall(27, 27, 3, true));

    GAME.addEntity(new Wall(28, 4, 2, true));
    GAME.addEntity(new Wall(28, 7, 4, true));
    GAME.addEntity(new Wall(28, 17, 5, true));
    GAME.addEntity(new Wall(28, 25, 1, true));
    GAME.addEntity(new Wall(28, 28, 1, true));

    GAME.addEntity(new Wall(29, 3, 4, true));
    GAME.addEntity(new Wall(29, 12, 3, true));
    GAME.addEntity(new Wall(29, 16, 7, true));
    GAME.addEntity(new Wall(29, 24, 1, true));
    GAME.addEntity(new Wall(29, 29, 1, true));

    GAME.addEntity(new Wall(30, 0, 29, true));

    // Horizontal Walls :)
    GAME.addEntity(new Wall(0, 0, 30, false));

    GAME.addEntity(new Wall(1, 1, 1, false));
    GAME.addEntity(new Wall(4, 1, 2, false));
    GAME.addEntity(new Wall(7, 1, 12, false));
    GAME.addEntity(new Wall(21, 1, 1, false));
    GAME.addEntity(new Wall(23, 1, 6, false));

    GAME.addEntity(new Wall(0, 2, 1, false));
    GAME.addEntity(new Wall(3, 2, 2, false));
    GAME.addEntity(new Wall(6, 2, 1, false));
    GAME.addEntity(new Wall(12, 2, 8, false));
    GAME.addEntity(new Wall(24, 2, 6, false));

    GAME.addEntity(new Wall(1, 3, 2, false));
    GAME.addEntity(new Wall(5, 3, 1, false));
    GAME.addEntity(new Wall(7, 3, 3, false));
    GAME.addEntity(new Wall(13, 3, 3, false));
    GAME.addEntity(new Wall(18, 3, 3, false));
    GAME.addEntity(new Wall(23, 3, 1, false));
    GAME.addEntity(new Wall(27, 3, 2, false));

    GAME.addEntity(new Wall(0, 4, 1, false));
    GAME.addEntity(new Wall(3, 4, 4, false));
    GAME.addEntity(new Wall(8, 4, 3, false));
    GAME.addEntity(new Wall(14, 4, 1, false));
    GAME.addEntity(new Wall(19, 4, 3, false));
    GAME.addEntity(new Wall(24, 4, 1, false));

    GAME.addEntity(new Wall(1, 5, 7, false));
    GAME.addEntity(new Wall(14, 5, 2, false));
    GAME.addEntity(new Wall(18, 5, 3, false));
    GAME.addEntity(new Wall(22, 5, 2, false));
    GAME.addEntity(new Wall(26, 5, 1, false));

    GAME.addEntity(new Wall(0, 6, 11, false));
    GAME.addEntity(new Wall(13, 6, 4, false));
    GAME.addEntity(new Wall(18, 6, 1, false));
    GAME.addEntity(new Wall(21, 6, 1, false));
    GAME.addEntity(new Wall(26, 6, 2, false));

    GAME.addEntity(new Wall(1, 7, 3, false));
    GAME.addEntity(new Wall(5, 7, 7, false));
    GAME.addEntity(new Wall(13, 7, 5, false));
    GAME.addEntity(new Wall(21, 7, 8, false));

    GAME.addEntity(new Wall(0, 8, 3, false));
    GAME.addEntity(new Wall(6, 8, 5, false));
    GAME.addEntity(new Wall(12, 8, 3, false));
    GAME.addEntity(new Wall(17, 8, 2, false));
    GAME.addEntity(new Wall(24, 8, 3, false));
    GAME.addEntity(new Wall(29, 8, 1, false));

    GAME.addEntity(new Wall(1, 9, 1, false));
    GAME.addEntity(new Wall(5, 9, 1, false));
    GAME.addEntity(new Wall(11, 9, 3, false));
    GAME.addEntity(new Wall(25, 9, 4, false));

    GAME.addEntity(new Wall(2, 10, 1, false));
    GAME.addEntity(new Wall(4, 10, 1, false));
    GAME.addEntity(new Wall(6, 10, 9, false));
    GAME.addEntity(new Wall(16, 10, 2, false));
    GAME.addEntity(new Wall(22, 10, 2, false));
    GAME.addEntity(new Wall(29, 10, 1, false));

    GAME.addEntity(new Wall(3, 11, 1, false));
    GAME.addEntity(new Wall(5, 11, 11, false));
    GAME.addEntity(new Wall(17, 11, 2, false));
    GAME.addEntity(new Wall(22, 11, 1, false));
    GAME.addEntity(new Wall(24, 11, 5, false));

    GAME.addEntity(new Wall(2, 12, 1, false));
    GAME.addEntity(new Wall(5, 12, 2, false));
    GAME.addEntity(new Wall(8, 12, 1, false));
    GAME.addEntity(new Wall(11, 12, 4, false));
    GAME.addEntity(new Wall(16, 12, 4, false));
    GAME.addEntity(new Wall(21, 12, 1, false));
    GAME.addEntity(new Wall(23, 12, 6, false));

    GAME.addEntity(new Wall(4, 13, 3, false));
    GAME.addEntity(new Wall(12, 13, 2, false));
    GAME.addEntity(new Wall(15, 13, 6, false));
    GAME.addEntity(new Wall(22, 13, 1, false));
    GAME.addEntity(new Wall(24, 13, 4, false));

    GAME.addEntity(new Wall(2, 14, 2, false));
    GAME.addEntity(new Wall(6, 14, 1, false));
    GAME.addEntity(new Wall(8, 14, 2, false));
    GAME.addEntity(new Wall(13, 14, 2, false));
    GAME.addEntity(new Wall(21, 14, 3, false));
    GAME.addEntity(new Wall(25, 14, 3, false));

    GAME.addEntity(new Wall(1, 15, 1, false));
    GAME.addEntity(new Wall(4, 15, 1, false));
    GAME.addEntity(new Wall(7, 15, 4, false));
    GAME.addEntity(new Wall(14, 15, 6, false));
    GAME.addEntity(new Wall(22, 15, 3, false));
    GAME.addEntity(new Wall(26, 15, 3, false));

    GAME.addEntity(new Wall(0, 16, 1, false));
    GAME.addEntity(new Wall(5, 16, 1, false));
    GAME.addEntity(new Wall(8, 16, 6, false));
    GAME.addEntity(new Wall(15, 16, 6, false));
    GAME.addEntity(new Wall(22, 16, 1, false));
    GAME.addEntity(new Wall(25, 16, 1, false));
    GAME.addEntity(new Wall(27, 16, 2, false));

    GAME.addEntity(new Wall(1, 17, 1, false));
    GAME.addEntity(new Wall(4, 17, 3, false));
    GAME.addEntity(new Wall(9, 17, 4, false));
    GAME.addEntity(new Wall(16, 17, 8, false));
    GAME.addEntity(new Wall(26, 17, 2, false));

    GAME.addEntity(new Wall(0, 18, 1, false));
    GAME.addEntity(new Wall(4, 18, 7, false));
    GAME.addEntity(new Wall(12, 18, 2, false));
    GAME.addEntity(new Wall(15, 18, 4, false));
    GAME.addEntity(new Wall(20, 18, 4, false));

    GAME.addEntity(new Wall(5, 19, 1, false));
    GAME.addEntity(new Wall(7, 19, 3, false));
    GAME.addEntity(new Wall(16, 19, 2, false));
    GAME.addEntity(new Wall(21, 19, 1, false));
    GAME.addEntity(new Wall(23, 19, 1, false));

    GAME.addEntity(new Wall(4, 20, 1, false));
    GAME.addEntity(new Wall(8, 20, 1, false));
    GAME.addEntity(new Wall(11, 20, 2, false));
    GAME.addEntity(new Wall(15, 20, 1, false));
    GAME.addEntity(new Wall(18, 20, 1, false));
    GAME.addEntity(new Wall(20, 20, 1, false));
    GAME.addEntity(new Wall(22, 20, 1, false));

    GAME.addEntity(new Wall(2, 21, 1, false));
    GAME.addEntity(new Wall(5, 21, 1, false));
    GAME.addEntity(new Wall(7, 21, 2, false));
    GAME.addEntity(new Wall(11, 21, 4, false));
    GAME.addEntity(new Wall(17, 21, 7, false));
    GAME.addEntity(new Wall(25, 21, 2, false));

    GAME.addEntity(new Wall(1, 22, 9, false));
    GAME.addEntity(new Wall(12, 22, 10, false));
    GAME.addEntity(new Wall(23, 22, 2, false));

    GAME.addEntity(new Wall(2, 23, 4, false));
    GAME.addEntity(new Wall(13, 23, 7, false));
    GAME.addEntity(new Wall(24, 23, 1, false));
    GAME.addEntity(new Wall(27, 23, 2, false));

    GAME.addEntity(new Wall(5, 24, 2, false));
    GAME.addEntity(new Wall(12, 24, 7, false));
    GAME.addEntity(new Wall(20, 24, 1, false));
    GAME.addEntity(new Wall(25, 24, 1, false));
    GAME.addEntity(new Wall(27, 24, 3, false));

    GAME.addEntity(new Wall(3, 25, 7, false));
    GAME.addEntity(new Wall(13, 25, 3, false));
    GAME.addEntity(new Wall(21, 25, 1, false));
    GAME.addEntity(new Wall(23, 25, 2, false));
    GAME.addEntity(new Wall(26, 25, 1, false));

    GAME.addEntity(new Wall(2, 26, 8, false));
    GAME.addEntity(new Wall(12, 26, 3, false));
    GAME.addEntity(new Wall(20, 26, 1, false));
    GAME.addEntity(new Wall(24, 26, 1, false));
    GAME.addEntity(new Wall(27, 26, 3, false));

    GAME.addEntity(new Wall(3, 27, 9, false));
    GAME.addEntity(new Wall(15, 27, 3, false));
    GAME.addEntity(new Wall(21, 27, 1, false));
    GAME.addEntity(new Wall(25, 27, 1, false));
    GAME.addEntity(new Wall(27, 27, 2, false));

    GAME.addEntity(new Wall(1, 28, 1, false));
    GAME.addEntity(new Wall(4, 28, 2, false));
    GAME.addEntity(new Wall(7, 28, 4, false));
    GAME.addEntity(new Wall(13, 28, 2, false));
    GAME.addEntity(new Wall(16, 28, 2, false));
    GAME.addEntity(new Wall(20, 28, 1, false));
    GAME.addEntity(new Wall(24, 28, 1, false));
    GAME.addEntity(new Wall(28, 28, 2, false));
    
    GAME.addEntity(new Wall(2, 29, 4, false));
    GAME.addEntity(new Wall(8, 29, 3, false));
    GAME.addEntity(new Wall(12, 29, 3, false));
    GAME.addEntity(new Wall(16, 29, 3, false));
    GAME.addEntity(new Wall(21, 29, 1, false));
    GAME.addEntity(new Wall(24, 29, 2, false));

    GAME.addEntity(new Wall(0, 30, 30, false));
    // DONE WITH WALLS!

    // Now start adding the visible entities:
    GAME.addEntity(new Goblin());
};