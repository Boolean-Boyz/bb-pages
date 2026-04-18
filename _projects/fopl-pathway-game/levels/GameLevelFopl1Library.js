import GamEnvBackground from '/assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1.1/essentials/Player.js';
import Npc from '/assets/js/GameEnginev1.1/essentials/Npc.js';

class GameLevelFopl1Library {
  static levelId = 'fopl-library';
  static displayName = 'Cozy Library';

  constructor(gameEnv) {
    const width = gameEnv.innerWidth;
    const height = gameEnv.innerHeight;
    const path = gameEnv.path;

    const bg_data = {
      name: 'fopl-cozy-library',
      greeting: 'You are inside the cozy Poway Library. Talk to the volunteer!',
      src: path + '/images/projects/fopl-pathway-game/foplbg/cozyyy.png',
    };

    const SCALE = 6;

    const player_data = {
      id: 'LibraryVisitor',
      greeting: "I made it inside — it's so cozy in here!",
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

    const volunteer_data = {
      id: 'Volunteer',
      greeting: "Press E to learn about the Friends of the Poway Library!",
      src: path + '/images/projects/fopl-pathway-game/npc/volunteer21.png',
      SCALE_FACTOR: SCALE,
      ANIMATION_RATE: 50,
      pixels: { width: 1024, height: 1024 },
      orientation: { rows: 2, columns: 2 },
      down:  { row: 0, start: 0, columns: 1, wiggle: 0.005 },
      up:    { row: 0, start: 1, columns: 1 },
      left:  { row: 1, start: 0, columns: 1 },
      right: { row: 1, start: 1, columns: 1 },
      hitbox: { widthPercentage: 0.4, heightPercentage: 0.4 },
      INIT_POSITION: { x: width * 0.60, y: height * 0.55 },
      dialogues: [
        "Hi! I'm Alex, a Friends of the Poway Library volunteer.",
        "The Friends of the Poway Library is a nonprofit supporting this community library.",
        "We fund programs, events, and resources that the library budget cannot cover.",
        "Our Used Bookstore is open during library hours — all proceeds support the library!",
        "We accept book donations too. Drop them off at 13137 Poway Rd.",
        "Volunteering with FOPL is easy — help sort books, assist at events, support programs.",
        "Become a member to directly fund library improvements. Visit powayfriends.org!",
        "Thanks for visiting! See you at the bookstore or the next FOPL event.",
      ],
    };

    const librarian_data = {
      id: 'Ms. Rivera',
      greeting: "Press E — I have more library history to share!",
      src: path + '/images/projects/fopl-pathway-game/npc/librariannn.png',
      SCALE_FACTOR: SCALE,
      ANIMATION_RATE: 50,
      pixels: { width: 1024, height: 1024 },
      orientation: { rows: 2, columns: 2 },
      down:  { row: 0, start: 0, columns: 1, wiggle: 0.003 },
      up:    { row: 0, start: 1, columns: 1 },
      left:  { row: 1, start: 0, columns: 1 },
      right: { row: 1, start: 1, columns: 1 },
      hitbox: { widthPercentage: 0.4, heightPercentage: 0.4 },
      INIT_POSITION: { x: width * 0.25, y: height * 0.35 },
      dialogues: [
        "The Poway Library has served this community since 1971!",
        "We host children's story times, author talks, and cultural events year-round.",
        "The Friends group makes many of these programs possible through fundraising.",
        "Check powayfriends.org for upcoming events and newsletters.",
        "Call us at 858-513-2862 if you have any questions!",
      ],
    };

    this.classes = [
      { class: GamEnvBackground, data: bg_data },
      { class: Player, data: player_data },
      { class: Npc, data: volunteer_data },
      { class: Npc, data: librarian_data },
    ];
  }
}

export default GameLevelFopl1Library;
