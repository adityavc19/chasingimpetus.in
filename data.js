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
    tagline: "Product manager turned product builder, experimenting with AI.",
    status: "Building Material Desk",
    bio: [
      "Product manager turned product builder, experimenting with AI. Previously worked as a PM at Flash AI and NoBroker, with a short internship at General Catalyst. IIT Guwahati, batch of 2022."
    ],
    past: [],
    now: [
      { label: "BUILDING", value: "Material Desk — AI services for construction", url: "https://materialdesk.surge.sh/" }
    ],
    experiments: [],
    socials: [
      { label: "X / Twitter", handle: "@ChasingImpetus", url: "https://x.com/ChasingImpetus" },
      { label: "LinkedIn", handle: "aditya-chauhan", url: "https://www.linkedin.com/in/aditya-chauhan-27b298177/" },
      { label: "GitHub", handle: "github.com/adityavc19", url: "https://github.com/adityavc19" },
      { label: "Email", handle: "adityachauhan090@gmail.com", url: "mailto:adityachauhan090@gmail.com" },
      { label: "Letterboxd", handle: "AdityaChauhan", url: "https://letterboxd.com/AdityaChauhan/" }
    ],
    changelog: [
      { hash: "e41b09", date: "Nov 25, 2026", text: "Added top bar controls, changelog, and internal vs external dock icons" },
      { hash: "297cef", date: "Nov 25, 2026", text: "Deployed portfolio live to chasingimpetus.in with pixel wallpaper & Spotify" },
      { hash: "8a21e0", date: "Oct 2026", text: "Added Neuro Wearable research & Curia audio show build" },
      { hash: "4d90b2", date: "Sep 2026", text: "Shipped Unplug NFC puck & Film Speed Run" }
    ]
  },

  // 1. MUSINGS — Featured Substack essay sneak peek
  notes: [
    {
      id: "chasing-impetus",
      title: "Chasing Impetus",
      subtitle: "Why this newsletter?",
      date: "Nov 2026",
      readTime: "3 min",
      tag: "Substack",
      pinned: true,
      url: "https://adityachauhan.substack.com/p/chasing-impetus",
      excerpt: "This blog is a personal exploration journey to reach my goal, which is not some external achievement but a personal challenge I've been facing all this while.",
      body: [
        "This blog is a personal exploration journey to reach my goal, which is not some external achievement but a personal challenge I've been facing all this while.",
        "Most of the time, it feels like running on autopilot—or homeostasis. Chasing Impetus is my way of making a conscious effort not to stay on autopilot, bringing that unbalanced force to move from inertia.",
        "It's everything that seems interesting to me: personal reflections, culture, tech, philosophy, and experimenting with different content formats beyond essays."
      ]
    }
  ],

  // 2. PROJECTS — 6 active builds & experiments
  projects: [
    {
      id: "material-desk",
      name: "Material Desk",
      description: "AI-native services and workflows built for construction teams.",
      category: "AI · Construction",
      year: "2026",
      liveUrl: "https://materialdesk.surge.sh/",
      featured: true
    },
    {
      id: "curia",
      name: "Curia",
      description: "Drop in the links you never got round to reading. Get back an audio show that argues about them.",
      category: "AI Audio",
      year: "2026",
      liveUrl: "https://curia.surge.sh/"
    },
    {
      id: "film-speed-run",
      name: "Film Speed Run",
      description: "Race from one film to another through the people who made them.",
      category: "Web Game",
      year: "2026",
      liveUrl: "https://filmspeedrun.surge.sh/"
    },
    {
      id: "mobile-wars",
      name: "Mobile Wars",
      description: "You're the CEO of Microsoft the week the iPhone launches. Can you survive the platform shift?",
      category: "Interactive",
      year: "2026",
      liveUrl: "https://mobilewars.surge.sh/"
    },
    {
      id: "reel-capture",
      name: "Reel Capture",
      description: "An Android app that measures how far you actually scroll.",
      category: "Android",
      year: "2026",
      liveUrl: ""
    },
    {
      id: "playable",
      name: "Playable",
      description: "Paste any link, get a quick game for your group chat: scenarios that split the room.",
      category: "Web App",
      year: "2026",
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

  // 3B. CURATED GALLERY — Auto-rotating image widget on the Home Screen
  gallery: [
    {
      src: "./assets/wanderer.jpg",
      srcDesktop: "./assets/wanderer-wide.jpg",
      title: "Wanderer above the Sea of Fog",
      credit: "Caspar David Friedrich · 1818",
      position: "center 34%"
    },
    {
      src: "./assets/gallery-voyage.jpg",
      title: "The Strait of Magellan",
      credit: "Gordon Frickers",
      position: "center 45%"
    },
    {
      src: "./assets/gallery-muybridge.webp",
      title: "The Horse in Motion",
      credit: "Eadweard Muybridge · 1878",
      position: "center 48%"
    },
    {
      src: "./assets/gallery-jatayu.jpg",
      title: "Jatayu Vadha",
      credit: "Raja Ravi Varma · c. 1895",
      position: "center 28%"
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

  // 4. SHELF — Books & Movies (live Letterboxd Diary + Goodreads RSS shelf!)
  shelf: {
    letterboxdUsername: "AdityaChauhan",
    goodreadsUserId: "68133394",
    goodreadsShelf: "read", // "read" | "currently-reading" | "to-read"
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
