// Sample project data - you can expand this with your own projects
export type RoleTag = "Game Designer" | "Level Designer" | "Producer" | "Narrative Designer" | "Teaching & Mentoring" | "Speech";

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  logo?: string;
  gifUrl?: string;
  category: "professional-projects" | "game-jams" | "other-experiences" | "personal-projects" | "awards";
  roles: RoleTag[];
  workPeriod: {
    start: string;
    end: string;
  };
  teamSize?: string;
  timeSpent?: string;
  projectStatus?: string;
  company?: string;
  responsibilities?: string[];
  storeLink?: string;
  storeLinkDetail?: string;
  storePlatform?: "Steam" | "Itch.io" | "Play Store" | "App Store";
  images?: string[];
  content: {
    technologies?: string[];
  };
}

export interface OtherProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  logo?: string;
  category: "professional-projects" | "game-jams";
  roles: RoleTag[];
  teamSize: string;
  timeSpent: string;
  date: string;
  storeLink?: string;
  storePlatform?: "Steam" | "Itch.io" | "Play Store" | "App Store";
}

export interface AwardProject {
  id: string;
  slug: string;
  title: string;
  gifUrl?: string;
  description: string;
  logo?: string;
  category: "awards";
  awardType: string;
  awards: string[];
  teamSize: string;
  event: string;
  year: string;
  storeLink?: string;
  storePlatform?: "Steam" | "Itch.io" | "Play Store" | "App Store";
  Trophy: string[];
}

export const projects: Project[] = [
  // Professional Projects
  {
    id: "1",
    slug: "uniescape",
    title: "Uniescape",
    subtitle: "uniescape",
    description: "Escape room game for two people: one plays the digital version, while the second player reads an instruction manual on how to solve the puzzles in the room.",
    logo: "Uniescape-Logo.png",
    gifUrl: "Uniescape.gif",
    category: "professional-projects",
    roles: ["Producer", "Game Designer", "Level Designer"],
    workPeriod: { start: "06/2024", end: "11/2024" },
    teamSize: "6",
    timeSpent: "5 months",
    projectStatus: "Released 2024",
    company: "Atomic Rocket Entertainement",
    responsibilities: [
      "Designed and prototyped all game mechanics and puzzle designs.",
      "Planning and documentation using agile methodologies (Scrum and Kanban).",
      "Team and goal management."
    ],
    storeLink: "https://gazzola.itch.io/uniescape",
    storePlatform: "Itch.io",
    content: {
      technologies: ["Unity", "Git Hub", "Miro", "Trello"]
    },
  },
  {
    id: "2",
    slug: "legado-palmares",
    title: "Legado Palmares",
    subtitle: "legado-palmares",
    description: "Legado Palmares is a RTS game for 1–4 players, inspired by the real history of enslaved people in Brazil who escaped and created a settlement known as the Quilombo dos Palmares.",
    logo: "Legado Palmares-Logo.png",
    gifUrl: "Quilombo.gif",
    category: "professional-projects",
    roles: ["Producer", "Game Designer", "Level Designer"],
    workPeriod: { start: "01/2024", end: "01/2025" },
    teamSize: "7",
    timeSpent: "2 years",
    projectStatus: "Released 2025",
    company: "Atomic Rocket Entertainement",
    responsibilities: [
      "Led the development and every design elements for the first half of the game.",
      "Planning and documentation using agile methodologies (Scrum and Kanban).",
      "Team and goal management."
    ],
    storeLink: "https://atomicrocket.itch.io/legado-palmares",
    storePlatform: "Itch.io",
    content: {
      technologies: ["Unity", "Git Hub", "Miro", "Trello"],
    },
  },
  {
    id: "3",
    slug: "stick-vs-zombies",
    title: "Stick vs Zombies",
    subtitle: "stick-vs-zombies",
    description: "Mobile parkour-style platformer game in which the player must defeat hordes of zombies while traversing diverse environments.",
    logo: "Stick vs Zombies-Logo.png",
    gifUrl: "StickvsZombies.gif",
    category: "professional-projects",
    roles: ["Level Designer", "Game Designer"],
    workPeriod: { start: "07/2024", end: "Current" }, 
    teamSize: "10+",
    timeSpent: "Ongoing since 2018",
    projectStatus: "Live Service | GaaS",
    company: "Aurecas",
    responsibilities: [
      "Started creating game levels for seasonal events (approximately 30 levels per month).",
      "Later transitioned to supporting general level design, working on legacy game levels.",
      "Recently began working as a game designer and level designer, creating new levels for the main campaign.",
    ],
    storeLink: "https://play.google.com/store/apps/details?id=com.aurecas.stickmanzombieshooter&pcampaignid=web_share",
    storeLinkDetail: "(Over 50.000.000 downloads)",
    storePlatform: "Play Store",
    content: {
      technologies: ["Unity", "Plastic SCM", "Miro", "Notion"],
    },
  },
  {
    id: "4",
    slug: "we-got-hacked",
    title: "We Got Hacked",
    subtitle: "we-got-hacked",
    description: "Educational, narrative-focused game that simulates the daily operations of a cybersecurity company. The player takes on the role of a Security Operations Center (SOC) team, learning how to handle real cyber threats and malicious attacks in a realistic, simulated security environment",
    logo: "We Got Hacked-Logo.png",
    gifUrl: "WGHGameplay.gif",
    category: "professional-projects",
    roles: ["Producer", "Game Designer", "Level Designer"],
    workPeriod: { start: "01/2025", end: "Current" }, //Current
    teamSize: "8",
    timeSpent: "Ongoing since 2025",
    projectStatus: "Work In Progress",
    company: "Atomic Rocket Entertainement",
    responsibilities: [
      "Designed and prototyped all game mechanics, ingame softwares, and narrative pipeline.",
      "Planning and documentation using agile methodologies (Scrum and Kanban).",
      "Team and goal management."
    ],
    storeLink: "https://store.steampowered.com",
    storePlatform: "Itch.io",
    content: {
      technologies: ["Unity", "Git Hub", "Miro", "Trello"]
    },
  },

  // Game Jams
  {
    id: "5",
    slug: "knife-runner",
    title: "Knife Runner",
    subtitle: "knife-runner",
    description: " ",
    fullDescription: "A knife forgotten behind a counter is blessed by the “Blade God” and is now able to jump and leap through the air, with the ultimate goal of returning to its knife holder on the other side of the kitchen.",
    logo: "Knife Runner-Logo.png",
    gifUrl: "Knife Runner.gif",
    category: "game-jams",
    roles: ["Producer", "Game Designer", "Level Designer"],
    workPeriod: { start: "09/2023", end: "7d" }, //7 Days (09/2023)
    teamSize: "2",
    projectStatus: " ",
    responsibilities: [
      "Designed and prototyped all game mechanics and puzzle systems.",
      "Designed and implemented the 3D game level.",
      "Planning and documentation using agile methodologies (Scrum and Kanban).",
    ],
    storeLink: "https://gazzola.itch.io/knife-runner",
    storePlatform: "Itch.io",
    content: {
      technologies: ["Unity", "Git Hub", "Miro"],
    },
  },
  {
    id: "6",
    slug: "scams-and-scales",
    title: "Scams and Scales",
    subtitle: "scams-and-scales",
    description: "",
    fullDescription: "Enter the mystical realm of fraudulent craftings! Manage a store peddling counterfeit magic itens using your machines to dupe your customers. Will you rise as a magical mogul or face the consequences of your deceit?",
    logo: "Scams and Scales-Logo.png",
    gifUrl: "ScamsandScales.gif",
    category: "game-jams",
    roles: ["Producer", "Game Designer", "Level Designer"],
    workPeriod: { start: "12/2023", end: "30d" }, //30 Days (12/2023)
    teamSize: "4",
    projectStatus: "",
    responsibilities: [
      "Designed and prototyped all game mechanics, puzzle systems, in-game currency, and more.",
      "Designed and implemented the 3D world.",
      "Planning and documentation using agile methodologies (Scrum and Kanban)."
    ],
    storeLink: "https://gazzola.itch.io/scams-and-scales",
    storePlatform: "Itch.io",
    content: {
      technologies: ["Unity", "Git Hub", "Miro"],
    },
  },
  {
    id: "7",
    slug: "turn-my-gears",
    title: "Turn my Gears",
    subtitle: "turn-my-gears",
    description: " ",
    fullDescription: "Platform puzzle game where your objective is to connect with other gears, expanding and scaling the gear mechanism. Each level presents unique challenges that require you to create different gear formations. Like multiple gears in a line to reach a higher platforms, or an L-shape to press a button and complete a puzzle!",
    logo: "Turn my Gears-Logo.png",
    gifUrl: "TurnMyGears.gif",
    category: "game-jams",
    roles: ["Producer", "Game Designer", "Level Designer"],
    workPeriod: { start: "09/2024", end: "3d" }, //3 days (09/2024)
    teamSize: "3",
    projectStatus: " ",
    responsibilities: [
      "Designed and prototyped all game mechanics, puzzles design and more.",
      "Designed and implemented all 8 game levels.",
      "Planning and documentation using agile methodologies (Scrum and Kanban)."
    ],
    storeLink: "https://gazzola.itch.io/turn-my-gears",
    storePlatform: "Itch.io",
    content: {
      technologies: ["Unity", "Git Hub", "Miro"],
    },
  },
  {
    id: "8",
    slug: "watchfull-paws",
    title: "Watchfull Paws",
    subtitle: "watchfull-paws",
    description: " ",
    fullDescription: "Infinite runner where you play as a guide dog, leading your owner on his daily marathon. You must protect him by dodging obstacles on the sidewalk.",
    logo: "Watchful Paws-Logo.png",
    gifUrl: "WatchfullPaws.gif",
    category: "game-jams",
    roles: ["Producer", "Game Designer", "Level Designer"],
    workPeriod: { start: "09/2024", end: "4d" }, //4 days (09/2024)
    teamSize: "4",
    projectStatus: " ",
    responsibilities: [
      "Designed and prototyped all game mechanics, obstacle functionality, and more.",
      "Planning and documentation using agile methodologies (Scrum and Kanban).",
      "Team and goal management."
    ],
    storeLink: "https://gazzola.itch.io/watchful-paws",
    storePlatform: "Itch.io",
    content: {
      technologies: ["Unity", "Git Hub", "Miro"],
    },
  },

  {
    id: "9",
    slug: "love-from-another-angler",
    title: "Love from Another Angler",
    subtitle: "love-from-another-angler",
    description: "",
    fullDescription: "Narrative focused game where you play as a angler fish in the deep sea in search of your soul mate. The sea can be a dangerous place, filed with hunter fished, you must be stealth and hide form they.",
    logo: "Love from Another Angler-Logo.png",
    gifUrl: "LoveFromAnotherAngler.gif",
    category: "game-jams",
    roles: ["Producer", "Game Designer", "Level Designer"],
    workPeriod: { start: "09/2024", end: "3d" }, //3 days (09/2024)
    teamSize: "2",
    projectStatus: "",
    responsibilities: [
      "Designed and prototyped all game mechanics, puzzle systems, and level design.",
      "Created the game narrative and all in-game text.",
      "Planning and documentation using agile methodologies (Scrum and Kanban).",
    ],
    storeLink: "https://gazzola.itch.io/love-from-another-angler",
    storePlatform: "Itch.io",
    content: {
      technologies: ["Unity", "Git Hub", "Miro"],
    },
  },

  // Personal Projects
  {
    id: "10",
    slug: "wondering-if-playable",
    title: "Wondering if Playable",
    subtitle: "wondering-if-playable",
    description: " ",
    fullDescription: "Platform game heavly focused on narrative, 'Portal Like' game. You will play as a QA on his first day on a game development teams.",
    logo: "WonderingifPlayable-Logo.png",
    gifUrl: "WIPGameplay.gif",
    category: "personal-projects",
    roles: ["Producer", "Game Designer", "Level Designer"],
    workPeriod: { start: "06/2022", end: "12/2022" },
    teamSize: "3",
    projectStatus: "Released ",
    responsibilities: [
      "Designed and prototyped all game mechanics, puzzle systems, and more.",
      "Created the world-building lore and wrote all dialogue.",
      "Planning and documentation using agile methodologies (Scrum and Kanban). Team and goal management."
    ],
    storeLink: "https://gazzola.itch.io/wondering-if-playable",
    storePlatform: "Itch.io",
    content: {
      technologies: ["Unity", "Plastic SCM", "Miro"],
    },
  },
  // Other Experiences
  {
    id: "11",
    slug: "narrative-designer-for-role-playing-games-&-game-development-instructor",
    title: "Narrative Designer for role-playing games & Game Development Instructor",
    subtitle: "narrative-designer-for-role-playing-games-&-game-development-instructor",
    description: " ",
    fullDescription: "I teach and coordinate weekly tabletop RPG game groups for children and teenagers in a private school. Additionally, starting in 2025, I began teaching digital game production classes for another groups of students.",
    logo: "d20-logo.png",
    category: "other-experiences",
    roles: ["Teaching & Mentoring", "Narrative Designer"],
    workPeriod: { start: "01/2022", end: "Current" },
    images: [
      "School1.png",
      "School2.png",
      "School3.png",
      "School4.png",
      "School5.png",
    ],
    content: {
      technologies: ["Classroom"],
    },
  },

  {
    id: "12",
    slug: "game-development-talks",
    title: "Game Dev Talks",
    subtitle: "game-development-talks",
    description: " ",
    fullDescription: "Talks explaining the day-to-day workflow of a designer and producer in today's game industry, inspiring new professionals and encouraging the exchange of ideas.",
    logo: "Lecture.png",
    category: "other-experiences",
    roles: ["Teaching & Mentoring", "Speech"],
    workPeriod: { start: "", end: "" }, //Não quero botar
    images: [
      "Lecture1.jpg",
      "Lecture2.jpg",
      "Lecture3.jpg",
    ],
    content: {
      technologies: [],
    },
  }
];

// Other small projects for "Other Projects" sections
export const otherProjects: OtherProject[] = [
  // Professional Other Projects
  {
    id: "op1",
    slug: "mhgeo",
    title: "MHGEO",
    logo: 'MHGEO-Logo.png',
    description: "Infinite runner based on the earth geological eras.",
    category: "professional-projects",
    roles: ["Producer", "Game Designer", "Level Designer"],
    teamSize: "6",
    timeSpent: "8 months",
    date: "2023",
    storeLink: "https://atomicrocket.itch.io/mhgeo",
    storePlatform: "Itch.io"
  },
  // Game Jams Other Projects
  {
    id: "gj1",
    slug: "deliveRoo",
    title: "DeliveRoo",
    logo: 'DeliveRoo-Logo.png',
    description: "Bring the box to the top of a mountain.",
    category: "game-jams",
    roles: ["Producer", "Game Designer", "Level Designer"],
    teamSize: "5",
    timeSpent: "8 hours",
    date: "10/2024",
    storeLink: "https://gazzola.itch.io/deliveroo",
    storePlatform: "Itch.io"
  },
  {
    id: "gj2",
    slug: "binary-blasters",
    title: "Binary Blasters",
    logo: 'Binary Blasters-Logo.png',
    description: "Destroy asteroids. Score points.",
    category: "game-jams",
    roles: ["Producer", "Game Designer", "Level Designer"],
    teamSize: "1",
    timeSpent: "10 days",
    date: "05/2023",
    storeLink: "https://gazzola.itch.io/binaryblasters",
    storePlatform: "Itch.io"
  },
  {
    id: "gj3",
    slug: "sorry-mummy",
    title: "Sorry Mummy",
    logo: 'Sorry Mummy-Logo.png',
    description: "Control three characters at the same time.",
    category: "game-jams",
    roles: ["Producer", "Game Designer", "Level Designer"],
    teamSize: "1",
    timeSpent: "4 days",
    date: "05/2022",
    storeLink: "https://gazzola.itch.io/sorry-mummy",
    storePlatform: "Itch.io"
  },
  {
    id: "gj4",
    slug: "thrust-control",
    title: "Thrust Control",
    logo: 'Thrust Control-Logo.png',
    description: "Input all commands for the ship before takeoff.",
    category: "game-jams",
    roles: ["Producer", "Game Designer", "Level Designer"],
    teamSize: "3",
    timeSpent: "3 days",
    date: "03/2024",
    storeLink: "https://gazzola.itch.io/thrustcontrol",
    storePlatform: "Itch.io"
  },
];

// Award projects
export const awardProjects: AwardProject[] = [
  {
    id: "aw1",
    slug: "wondering-if-playable-award",
    title: "Wondering if Playable",
    description: "Platform game heavily focused on narrative, 'Portal Like' game. You will play as a QA on his first day on a game development teams.",
    logo: "WonderingifPlayable-Logo.png",
    gifUrl: "WIPGameplay.gif",
    category: "awards",
    teamSize: "3",
    awardType: "Best National Upcoming Brazilian Indie Game",
    awards: ["Nominated for Best Direction and Design"],
    event: "SBGames",
    year: "2023",
    storeLink: "https://gazzola.itch.io/wondering-if-playable",
    storePlatform: "Itch.io",
    Trophy: ["Trophy-SBGames2023.png"]
  },
  {
    id: "aw2",
    slug: "deliveroo-award",
    title: "DeliveRoo!",
    gifUrl: "DeliveryRoo.gif",
    logo: "DeliveRoo-Logo.png",
    description: "Your goal is to get the box to the top of the mountain. The catch? You must throw it uphill, since jumping while carrying it isn’t possible.",
    category: "awards",
    teamSize: "5",
    awardType: "University Game Jam",
    awards: ["1st Place Overall"],
    event: "Unisinos Game Jam",
    year: "2024",
    Trophy: ["Trophy-Unisinos2024.png"]
  },
];

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((p) => p.category === category);
};

export const getOtherProjectsByCategory = (category: string): OtherProject[] => {
  return otherProjects.filter((p) => p.category === category);
};

export const getProjectBySlug = (category: string, slug: string): Project | undefined => {
  return projects.find((p) => p.category === category && p.slug === slug);
};
