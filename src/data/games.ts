export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  category: 'Action' | 'Sports' | 'Puzzle' | 'Casual' | 'Multiplayer';
}

export const GAMES: Game[] = [
  {
    id: '1v1-lol',
    title: '1v1.LOL',
    description: 'A competitive third-person shooter and building game.',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://1v1.lol/',
    category: 'Multiplayer'
  },
  {
    id: 'minecraft-classic',
    title: 'Minecraft Classic',
    description: 'The original Minecraft experience in your browser.',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://classic.minecraft.net/',
    category: 'Casual'
  },
  {
    id: 'slope',
    title: 'Slope',
    description: 'A fast-paced 3D running game with high speeds.',
    thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://slope.io/',
    category: 'Action'
  },
  {
    id: 'retro-bowl',
    title: 'Retro Bowl',
    description: 'The perfect game for the armchair quarterback.',
    thumbnail: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://retrobowl.me/',
    category: 'Sports'
  },
  {
    id: 'bitlife',
    title: 'BitLife',
    description: 'A life simulator game where you make all the choices.',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://bitlifeonline.io/',
    category: 'Casual'
  },
  {
    id: 'tunnel-rush',
    title: 'Tunnel Rush',
    description: 'Dodge obstacles in a fast-paced neon tunnel.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://tunnelrush.com/',
    category: 'Action'
  },
  {
    id: 'subway-surfers',
    title: 'Subway Surfers',
    description: 'The world-famous endless runner game.',
    thumbnail: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://subwaysurfers.com/',
    category: 'Action'
  },
  {
    id: 'geometry-dash',
    title: 'Geometry Dash',
    description: 'Jump and fly your way through danger!',
    thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://geometrydash.io/',
    category: 'Action'
  },
  {
    id: 'cookie-clicker',
    title: 'Cookie Clicker',
    description: 'The original idle game where you bake cookies.',
    thumbnail: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://orteil.dashnet.org/cookieclicker/',
    category: 'Casual'
  },
  {
    id: 'paper-io-2',
    title: 'Paper.io 2',
    description: 'Capture territory and defeat your opponents.',
    thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://paper-io.com/',
    category: 'Multiplayer'
  },
  {
    id: 'hole-io',
    title: 'Hole.io',
    description: 'Consume everything in your path as a black hole.',
    thumbnail: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bc0a?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://hole-io.com/',
    category: 'Multiplayer'
  },
  {
    id: 'moto-x3m',
    title: 'Moto X3M',
    description: 'A high-speed bike racing game with crazy stunts.',
    thumbnail: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://motox3m.co/',
    category: 'Sports'
  },
  {
    id: 'vex-7',
    title: 'Vex 7',
    description: 'The latest installment in the popular Vex series.',
    thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://vex7.io/',
    category: 'Action'
  },
  {
    id: 'fireboy-watergirl',
    title: 'Fireboy and Watergirl',
    description: 'A cooperative puzzle platformer for two players.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://fireboy-watergirl.io/',
    category: 'Puzzle'
  },
  {
    id: 'run-3',
    title: 'Run 3',
    description: 'Run through a series of tunnels in outer space.',
    thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://run3.io/',
    category: 'Action'
  },
  {
    id: 'happy-wheels',
    title: 'Happy Wheels',
    description: 'A bloody physics-based obstacle course game.',
    thumbnail: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://totaljerkface.com/happy_wheels.tjf',
    category: 'Casual'
  },
  {
    id: 'drive-mad',
    title: 'Drive Mad',
    description: 'Drive your car through challenging levels with realistic physics.',
    thumbnail: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://drivemad.org/',
    category: 'Action'
  },
  {
    id: 'crazy-cattle-3d',
    title: 'Crazy Cattle 3D',
    description: 'A fun 3D game featuring crazy cattle.',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://gn-math.dev/games/crazy-cattle-3d/',
    category: 'Casual'
  },
  {
    id: 'among-us-online',
    title: 'Among Us Online',
    description: 'Find the impostor in this social deduction game.',
    thumbnail: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://among-us.io/',
    category: 'Multiplayer'
  },
  {
    id: 'fnf-online',
    title: 'Friday Night Funkin\'',
    description: 'A rhythm-based music game.',
    thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://fnf.io/',
    category: 'Casual'
  },
  {
    id: 'agar-io',
    title: 'Agar.io',
    description: 'Eat smaller cells to grow larger.',
    thumbnail: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bc0a?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://agar.io/',
    category: 'Multiplayer'
  },
  {
    id: 'slither-io',
    title: 'Slither.io',
    description: 'Grow your snake by eating glowing orbs.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://slither.io/',
    category: 'Multiplayer'
  },
  {
    id: 'krunker-io',
    title: 'Krunker.io',
    description: 'A fast-paced pixelated first-person shooter.',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://krunker.io/',
    category: 'Multiplayer'
  },
  {
    id: 'shell-shockers',
    title: 'Shell Shockers',
    description: 'The world\'s first egg-based multiplayer shooter.',
    thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://shellshock.io/',
    category: 'Multiplayer'
  },
  {
    id: 'zombs-royale',
    title: 'Zombs Royale',
    description: 'A 2D battle royale game.',
    thumbnail: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://zombsroyale.io/',
    category: 'Multiplayer'
  },
  {
    id: 'ev-io',
    title: 'Ev.io',
    description: 'A futuristic halo-style FPS in your browser.',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://ev.io/',
    category: 'Multiplayer'
  },
  {
    id: 'slope-2',
    title: 'Slope 2',
    description: 'The sequel to the hit game Slope.',
    thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://slope2.io/',
    category: 'Action'
  },
  {
    id: 'vex-6',
    title: 'Vex 6',
    description: 'Another great platformer in the Vex series.',
    thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://vex6.io/',
    category: 'Action'
  },
  {
    id: 'moto-x3m-pool-party',
    title: 'Moto X3M Pool Party',
    description: 'Bike racing fun in a pool party setting.',
    thumbnail: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://motox3mpoolparty.co/',
    category: 'Sports'
  },
  {
    id: 'fireboy-watergirl-2',
    title: 'Fireboy and Watergirl 2',
    description: 'The Light Temple awaits in this sequel.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://fireboywatergirl2.io/',
    category: 'Puzzle'
  },
  {
    id: 'paper-io',
    title: 'Paper.io',
    description: 'The original territory capture game.',
    thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400&h=225',
    url: 'https://paper-io.com/',
    category: 'Multiplayer'
  }
];
