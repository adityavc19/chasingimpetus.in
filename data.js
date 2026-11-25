// ============================================================================
// NOTHING OS PORTFOLIO — CONTENT DATA (chasingimpetus.in)
// Populated with Aditya's real bio, projects, AI media, and links.
// Edit any section below to update your Nothing OS portfolio.
// ============================================================================

export const PORTFOLIO_DATA = {
  profile: {
    name: "Aditya",
    handle: "@ChasingImpetus",
    osName: "Chasing Impetus",
    deviceModel: "Portfolio Edition",
    tagline: "Product manager turned product builder, exploring AI-native services and consumer hardware.",
    status: "Building Material Desk & exploring consumer hardware",
    bio: [
      "Product manager turned product builder, exploring AI-native services and consumer hardware.",
      "Previously worked on consumer products with 1M+ users at Flash AI and NoBroker, plus a brief stint at General Catalyst evaluating startups through an investor's lens."
    ],
    past: [
      { name: "Flash AI", role: "Product Manager", url: "https://flash.co/home" },
      { name: "NoBroker", role: "Associate Product Manager", url: "https://www.nobroker.in/" },
      { name: "General Catalyst", role: "Analyst Intern", url: "https://www.generalcatalyst.com/" }
    ],
    now: [
      { label: "BUILDING", value: "Material Desk — AI services for construction" },
      { label: "EXPLORING", value: "Consumer hardware" }
    ],
    experiments: [
      { label: "NEW MEDIA", value: "New media experiences & short films" },
      { label: "CONSUMER APPS", value: "Small apps about attention, habits, and the stuff we save" }
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

  // 3B. CURATED GALLERY — Auto-rotating image widget on the Home Screen (add your own favorite artworks/stills!)
  gallery: [
    {
      src: "./assets/wanderer.jpg",
      title: "Wanderer above the Sea of Fog",
      credit: "Caspar David Friedrich · 1818",
      position: "center 36%"
    },
    {
      src: "./assets/media-still.jpg",
      title: "Light & Concrete",
      credit: "35mm Monochrome Study",
      position: "center 48%"
    },
    {
      src: "./assets/wallpaper-pixel.jpg",
      title: "Twin Moons Over Dusk",
      credit: "Pixel Cityscape",
      position: "center 30%"
    }
  ],

  // 3C. DRIFT — Infinite scroll cards (inspired by Reel Capture & Unplug)
  driftFeed: [
    { tag: "THOUGHT", title: "You opened a mysterious icon on a personal website.", body: "Most people click without knowing what's on the other side. That's basically how every feed works." },
    { tag: "ATTENTION", title: "Average thumb travel per day: 90 meters.", body: "That's roughly the height of the Statue of Liberty—scrolled one flick at a time." },
    { tag: "CINEMA", title: "Wong Kar-wai shot In the Mood for Love over 15 months without a finished script.", body: "Constraint and obsession beat over-planning almost every time." },
    { tag: "HABITS", title: "Willpower loses to friction every single time.", body: "If silencing an app takes five taps in Settings, you won't do it. If it takes one tap on an NFC puck, you will." },
    { tag: "SAVED LINKS", title: "How many tabs do you have open right now?", body: "Be honest. You're not going to read 80% of them—which is why Curia turns them into an audio debate." },
    { tag: "ALGORITHM", title: "This card was generated solely to keep your thumb moving.", body: "Notice how easy it is to keep going even when you know there's no prize at the bottom?" },
    { tag: "FILM", title: "The average shot length in modern action films dropped from 6 seconds to 2.4 seconds.", body: "Even cinema got rewired for shorter attention spans." },
    { tag: "BUILDING", title: "Small consumer apps are the most honest creative medium.", body: "Ship something in a weekend. Either people send it to their group chat or they don't." },
    { tag: "CHECKPOINT", title: "Still scrolling?", body: "Your odometer at the top is real. Reel Capture measures this exact distance on Android." },
    { tag: "QUIET", title: "Monochrome screens drop phone pickups by ~30%.", body: "Try flipping the Monochrome toggle in the pull-down Control Center when you leave this feed." }
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

  // 5. MUSIC — Aditya's Spotify "On Rotation" Playlist
  music: {
    label: "ON ROTATION",
    spotifyUrl: "https://open.spotify.com/playlist/6pC1LlCxbdEhLrBYXfDVFU?si=c3e3899144f14463",
    embedUrl: "https://open.spotify.com/embed/playlist/6pC1LlCxbdEhLrBYXfDVFU?utm_source=generator&theme=0&si=c3e3899144f14463",
    playlists: [
      {
        name: "01 // ON ROTATION",
        vibe: "Aditya's Personal Playlist",
        spotifyUrl: "https://open.spotify.com/playlist/6pC1LlCxbdEhLrBYXfDVFU?si=c3e3899144f14463"
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
