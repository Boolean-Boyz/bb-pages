import GamEnvBackground from '/assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1.1/essentials/Player.js';
import Npc from '/assets/js/GameEnginev1.1/essentials/Npc.js';

class GameLevelFopl0Welcome {
  static levelId = 'fopl-welcome';
  static displayName = 'Library Welcome';

  constructor(gameEnv) {
    const width = gameEnv.innerWidth;
    const height = gameEnv.innerHeight;
    const path = gameEnv.path;

    const bg_data = {
      name: 'fopl-outdoor',
      greeting: 'Welcome to the Poway Library!',
      src: path + '/images/projects/fopl-pathway-game/foplbg/outdoor23.png',
    };

    const SCALE = 6;

    const player_data = {
      id: 'LibraryVisitor',
      greeting: "Hi! I'm visiting the Poway Library for the first time.",
      src: path + '/images/projects/fopl-pathway-game/player/foplmain1.png',
      SCALE_FACTOR: SCALE,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height - (height / SCALE) * 2 },
      pixels: { height: 645, width: 387 },
      orientation: { rows: 4, columns: 3 },
      down:      { row: 0, start: 0, columns: 3 },
      downRight: { row: 1, start: 0, columns: 3, rotate:  Math.PI / 16 },
      downLeft:  { row: 1, start: 0, columns: 3, mirror: true, rotate:  Math.PI / 16 },
      left:      { row: 1, start: 0, columns: 3, mirror: true },
      right:     { row: 1, start: 0, columns: 3 },
      up:        { row: 2, start: 0, columns: 3 },
      upLeft:    { row: 1, start: 0, columns: 3, mirror: true, rotate: -Math.PI / 16 },
      upRight:   { row: 1, start: 0, columns: 3, rotate: -Math.PI / 16 },
      hitbox: { widthPercentage: 0.4, heightPercentage: 0.4 },
      keypress: { up: 87, left: 65, down: 83, right: 68 },
    };

    const librarian_data = {
      id: 'Librarian',
      greeting: 'Press E to talk to the librarian!',
      src: path + '/images/projects/fopl-pathway-game/npc/librariannn.png',
      SCALE_FACTOR: SCALE,
      ANIMATION_RATE: 50,
      pixels: { width: 1024, height: 1024 },
      orientation: { rows: 2, columns: 2 },
      down:  { row: 0, start: 0, columns: 1, wiggle: 0.005 },
      up:    { row: 0, start: 1, columns: 1 },
      left:  { row: 1, start: 0, columns: 1 },
      right: { row: 1, start: 1, columns: 1 },
      hitbox: { widthPercentage: 0.4, heightPercentage: 0.4 },
      INIT_POSITION: { x: width * 0.60, y: height * 0.68 },
      dialogues: [
        "Hello! Welcome to the Poway Library. I'm Ms. Rivera, the head librarian.",
        "This building has served our community since 1971. We're at 13137 Poway Rd, Poway CA 92064.",
        "Have you heard of the Friends of the Poway Library? We're a nonprofit that supports the library.",
        "We run a used bookstore, fund library programs, and host over 400 events a year!",
        "Head inside — our volunteer will tell you everything about getting involved.",
      ],
      interact: function() {
        const npcName = this.spriteData.id;
        const npcAvatar = this.spriteData.src;
        const dialogues = this.spriteData.dialogues;
        if (!this.currentQuestionIndex) this.currentQuestionIndex = 0;
        this.dialogueSystem.showDialogue(dialogues[this.currentQuestionIndex], npcName, npcAvatar);
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex >= dialogues.length) {
          this.currentQuestionIndex = 0;
          setTimeout(() => {
            if (this.gameEnv && this.gameEnv.gameControl) {
              this.gameEnv.gameControl.endLevel();
            }
          }, 1500);
        }
      },
    };

    const door_data = {
      id: 'LibraryDoor',
      greeting: 'Press E to enter the library!',
      src: path + '/images/projects/fopl-pathway-game/npc/librariannn.png',
      SCALE_FACTOR: SCALE * 2,
      ANIMATION_RATE: 50,
      pixels: { width: 1024, height: 1024 },
      orientation: { rows: 2, columns: 2 },
      down:  { row: 0, start: 0, columns: 1 },
      up:    { row: 0, start: 1, columns: 1 },
      left:  { row: 1, start: 0, columns: 1 },
      right: { row: 1, start: 1, columns: 1 },
      hitbox: { widthPercentage: 0.3, heightPercentage: 0.3 },
      INIT_POSITION: { x: width * 0.46, y: height * 0.38 },
      dialogues: [
        "You've reached the library entrance!",
        "Going inside...",
      ],
      interact: function() {
        const dialogues = this.spriteData.dialogues;
        if (!this.currentQuestionIndex) this.currentQuestionIndex = 0;
        this.dialogueSystem.showDialogue(dialogues[this.currentQuestionIndex], 'Library Door', null);
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex >= dialogues.length) {
          this.currentQuestionIndex = 0;
          setTimeout(() => {
            if (this.gameEnv && this.gameEnv.gameControl) {
              this.gameEnv.gameControl.endLevel();
            }
          }, 1200);
        }
      },
    };

    this.classes = [
      { class: GamEnvBackground, data: bg_data },
      { class: Player, data: player_data },
      { class: Npc, data: librarian_data },
      { class: Npc, data: door_data },
    ];
  }
}

export default GameLevelFopl0Welcome;
