export interface Player {
  name: string;
  level: number;
  xp: number;
  hearts: number;
  maxHearts: number;
  coins: number;
  items: string[]; // ['compass', 'map', 'globe', 'binoculars', 'backpack', 'hat_explorer', 'badge_nature', 'leaf_green', 'recycle_badge']
}

export const INITIAL_PLAYER: Player = {
  name: 'Anthony',
  level: 1,
  xp: 0,
  hearts: 3,
  maxHearts: 3,
  coins: 0,
  items: []
};

