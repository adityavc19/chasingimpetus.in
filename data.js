// ============================================================================
// NOTHING OS PORTFOLIO — CONTENT DATA (chasingimpetus.in)
// Populated with Aditya's real bio, projects, AI media, and links.
// Edit any section below to update your Nothing OS portfolio.
// ============================================================================

export const PORTFOLIO_DATA = {
  profile: {
    name: "Aditya",
    handle: "@ChasingImpetus",
    osName: "Nothing OS · Chasing Impetus",
    deviceModel: "Nothing OS · Portfolio Edition",
    tagline: "Solo founder in Bangalore building small consumer apps about attention, habits, films, and the stuff we save.",
    location: "Bangalore, India",
    status: "Exploring neural hardware & AI-native services",
    bio: [
      "I'm a product manager turned founder. I'm currently exploring neural hardware and AI-native services. I've been experimenting with a bunch of things: building consumer apps, new media experiences, and short films.",
      "Previously worked on consumer products with 1M+ users at Flash AI and NoBroker, plus a brief stint at General Catalyst evaluating startups through an investor's lens."
    ],
    past: [
      { name: "Flash AI", role: "Consumer Product (1M+ users)", url: "https://flash.co/home" },
      { name: "NoBroker", role: "Consumer Product (1M+ users)", url: "https://www.nobroker.in/" },
      { name: "General Catalyst", role: "Startup Evaluation / VC Stint", url: "https://www.generalcatalyst.com/" }
    ],
    now: [
      { label: "EXPLORING", value: "Consumer hardware & neural wearables" },
      { label: "BUILDING", value: "AI-native services & Curia" },
      { label: "EXPERIMENTS", value: "New media experiences & short films" },
      { label: "LOCATION", value: "Bangalore, India" }
    ],
    socials: [
      { label: "X / Twitter", handle: "@ChasingImpetus", url: "https://x.com/ChasingImpetus" },
      { label: "LinkedIn", handle: "aditya-chauhan", url: "https://www.linkedin.com/in/aditya-chauhan-27b298177/" },
      { label: "GitHub", handle: "github.com/adityavc19", url: "https://github.com/adityavc19" },
      { label: "Email", handle: "adityachauhan090@gmail.com", url: "mailto:adityachauhan090@gmail.com" },
      { label: "Letterboxd", handle: "letterboxd.com", url: "https://letterboxd.com/" }
    ],
    changelog: [
      { hash: "e41b09", date: "Nov 25, 2026", text: "Added top bar controls, changelog, and internal vs external dock icons" },
      { hash: "297cef", date: "Nov 25, 2026", text: "Deployed portfolio live to chasingimpetus.in with pixel wallpaper & Spotify" },
      { hash: "8a21e0", date: "Oct 2026", text: "Added Neuro Wearable research & Curia audio show build" },
      { hash: "4d90b2", date: "Sep 2026", text: "Shipped Unplug NFC puck & Film Speed Run" }
    ]
  },

  // 1. NOTES — Starter essays aligned with your work (replace/add your own blogs anytime)
  notes: [
    {
      id: "attention-as-hardware",
      title: "Designing for Attention in an Age of Infinite Scroll",
      date: "Oct 2026",
      readTime: "3 min",
      tag: "Attention",
      pinned: true,
      excerpt: "Why physical friction—like tapping an NFC puck or measuring focus directly—beats willpower.",
      body: [
        "Most software tries to solve distraction with more software: another screen-time chart, another notification telling you to ignore notifications.",
        "Building Unplug and Reel Capture made one thing obvious—physical friction changes behavior immediately. When silencing distracting apps takes a deliberate tap on an NFC puck, your phone stops feeling like a slot machine.",
        "That same curiosity is what pulled me toward neural hardware: what happens when we can measure real attention and focus directly instead of guessing from screen-on minutes?"
      ]
    },
    {
      id: "saved-links-to-audio",
      title: "What Happens to All the Links We Save?",
      date: "Oct 2026",
      readTime: "3 min",
      tag: "AI Native",
      pinned: false,
      excerpt: "Turning forgotten reading lists into live audio debates with Curia.",
      body: [
        "Everyone has a graveyard of bookmarks, open tabs, and 'read later' links they genuinely meant to get through.",
        "Curia started from a simple question: instead of another folder to organize links, what if dropping them in gave you back an audio show that actually argues about the ideas inside them?",
        "AI-native consumer products work best when they transform the format of something you already care about—turning passive backlogs into something you actually want to experience."
      ]
    },
    {
      id: "small-consumer-experiments",
      title: "Shipping Small Consumer Experiments",
      date: "Sep 2026",
      readTime: "2 min",
      tag: "Building",
      pinned: false,
      excerpt: "Notes from building Mobile Wars, Film Speed Run, and Playable.",
      body: [
        "Playful constraints force clarity. Whether it's surviving the week the iPhone launched in Mobile Wars, racing between films in Film Speed Run, or turning a link into a group-chat game in Playable, a tight premise teaches you more in a week than a 40-page spec.",
        "Ship fast, see what people actually share with friends, and follow the momentum."
      ]
    }
  ],

  // 2. GITHUB / PROJECTS — All 7 real projects from chasingimpetus.in
  projects: [
    {
      id: "neuro-wearable",
      name: "Neuro Wearable",
      description: "A wearable that tracks and measures your attention and focus.",
      language: "Hardware",
      status: "RESEARCH",
      year: "2026",
      tags: ["Neural", "Attention", "Hardware"],
      repoUrl: "https://github.com/adityavc19",
      liveUrl: ""
    },
    {
      id: "curia",
      name: "Curia",
      description: "Drop in the links you never got round to reading. Get back an audio show that argues about them.",
      language: "AI Native",
      status: "BUILDING",
      year: "2026",
      tags: ["Audio", "AI", "Reading"],
      repoUrl: "https://github.com/adityavc19",
      liveUrl: "https://curia.surge.sh/"
    },
    {
      id: "unplug",
      name: "Unplug",
      description: "Tap your phone on an NFC puck and the distracting apps go quiet until you tap again.",
      language: "Hardware + App",
      status: "LIVE",
      year: "2026",
      tags: ["NFC", "Focus", "Habits"],
      repoUrl: "https://github.com/adityavc19",
      liveUrl: "https://www.getunplug.in/"
    },
    {
      id: "film-speed-run",
      name: "Film Speed Run",
      description: "Race from one film to another through the people who made them.",
      language: "Web Game",
      status: "LIVE",
      year: "2026",
      tags: ["Cinema", "Game"],
      repoUrl: "https://github.com/adityavc19",
      liveUrl: "https://filmspeedrun.surge.sh/"
    },
    {
      id: "mobile-wars",
      name: "Mobile Wars",
      description: "You're the CEO of Microsoft the week the iPhone launches. Can you survive the platform shift?",
      language: "Interactive",
      status: "EXPERIMENT",
      year: "2026",
      tags: ["Strategy", "Simulation"],
      repoUrl: "https://github.com/adityavc19",
      liveUrl: "https://mobilewars.surge.sh/"
    },
    {
      id: "reel-capture",
      name: "Reel Capture",
      description: "An Android app that measures how far you actually scroll.",
      language: "Android",
      status: "LIVE",
      year: "2026",
      tags: ["Android", "Attention", "Quantified"],
      repoUrl: "https://github.com/adityavc19",
      liveUrl: ""
    },
    {
      id: "playable",
      name: "Playable",
      description: "Paste any link, get a quick game for your group chat: scenarios that split the room.",
      language: "Web App",
      status: "EXPERIMENT",
      year: "2026",
      tags: ["Social", "AI", "Games"],
      repoUrl: "https://github.com/adityavc19",
      liveUrl: ""
    }
  ],

  // 3. MEDIA — Your real AI Media videos & X post from chasingimpetus.in
  media: [
    {
      id: "media-intro",
      title: "Intro",
      category: "AI Media",
      duration: "VIDEO",
      year: "2026",
      resolution: "16:9 · STREAM",
      summary: "Opening AI-native visual introduction reel from Chasing Impetus.",
      chapters: ["Tap above to play embedded Google Drive preview"],
      embedUrl: "https://drive.google.com/file/d/1iKjg0u2Wj5Boh7oFKX9EAJfj-EG_Es7j/preview",
      externalUrl: "https://drive.google.com/file/d/1iKjg0u2Wj5Boh7oFKX9EAJfj-EG_Es7j/view",
      aspect: "16/9",
      accentPattern: "waves"
    },
    {
      id: "media-amul",
      title: "Amul Ad",
      category: "AI Commercial",
      duration: "9:16 REEL",
      year: "2026",
      resolution: "VERTICAL · AI",
      summary: "Vertical 9:16 AI-generated spec commercial experiment for Amul.",
      chapters: ["Vertical format · Embedded player supported"],
      embedUrl: "https://drive.google.com/file/d/1HwAID8PvPS9HVp6drkK5l7MojlFVfdjg/preview",
      externalUrl: "https://drive.google.com/file/d/1HwAID8PvPS9HVp6drkK5l7MojlFVfdjg/view",
      aspect: "9/16",
      accentPattern: "matrix"
    },
    {
      id: "media-commerce",
      title: "Future of Commerce",
      category: "AI Short Film",
      duration: "VIDEO",
      year: "2026",
      resolution: "16:9 · CONCEPT",
      summary: "Visual concept piece exploring what AI-native commerce looks like.",
      chapters: ["Tap above to play embedded Google Drive preview"],
      embedUrl: "https://drive.google.com/file/d/1IyfGsk9weIemZioVqUvlr0lrLwTiiJRD/preview",
      externalUrl: "https://drive.google.com/file/d/1IyfGsk9weIemZioVqUvlr0lrLwTiiJRD/view",
      aspect: "16/9",
      accentPattern: "bars"
    },
    {
      id: "media-x-post",
      title: "AI Media Experiment on X",
      category: "X Post",
      duration: "POST",
      year: "2026",
      resolution: "@CHASINGIMPETUS",
      summary: "Featured AI media experiment shared on X / Twitter.",
      chapters: ["Opens directly on x.com/ChasingImpetus"],
      embedUrl: "",
      externalUrl: "https://x.com/ChasingImpetus/status/1957035243996643789",
      aspect: "16/9",
      accentPattern: "matrix"
    }
  ],

  // 4. SHELF — Books & Movies (sample list ready for your personal favorites)
  shelf: {
    movies: [
      {
        title: "In the Mood for Love",
        creator: "Wong Kar-wai",
        year: "2000",
        rating: 5,
        status: "FAVORITE",
        note: "Every corridor is a frame within a frame. Unmatched restraint and color."
      },
      {
        title: "Blade Runner 2049",
        creator: "Denis Villeneuve",
        year: "2017",
        rating: 5,
        status: "FAVORITE",
        note: "Roger Deakins' brutalist light and shadow—industrial design as cinema."
      },
      {
        title: "Past Lives",
        creator: "Celine Song",
        year: "2023",
        rating: 5,
        status: "WATCHED",
        note: "Quiet, devastating, and deeply observant about the lives we don't live."
      },
      {
        title: "Perfect Days",
        creator: "Wim Wenders",
        year: "2023",
        rating: 4.5,
        status: "WATCHED",
        note: "Cassette tapes, sunlight through leaves, and the dignity of daily ritual."
      }
    ],
    books: [
      {
        title: "The Creative Act",
        creator: "Rick Rubin",
        year: "2023",
        rating: 4.5,
        status: "READING",
        note: "Short meditations on noticing, taste, and finishing work without overthinking."
      },
      {
        title: "The Design of Everyday Things",
        creator: "Don Norman",
        year: "1988",
        rating: 5,
        status: "FAVORITE",
        note: "Affordances, signifiers, and why good objects never need a manual."
      },
      {
        title: "Sculpting in Time",
        creator: "Andrei Tarkovsky",
        year: "1986",
        rating: 5,
        status: "FINISHED",
        note: "Cinema as rhythm and time pressure, not just filmed theater."
      }
    ]
  },

  // 5. MUSIC — Spotify "On Rotation" Embed (paste any Spotify playlist/album/track URL!)
  music: {
    label: "ON ROTATION",
    // Paste any regular open.spotify.com/playlist/... or /track/... URL here:
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn",
    playlists: [
      {
        name: "01 // LATE NIGHT FOCUS",
        vibe: "Lo-Fi Beats · Deep Work",
        spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn"
      },
      {
        name: "02 // CINEMA SCORES",
        vibe: "Film Soundtracks & Instrumental",
        spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX1tz6EDao8it"
      },
      {
        name: "03 // AMBIENT CHILL",
        vibe: "Minimal Electronic & Downtempo",
        spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6"
      }
    ]
  }
};
