const destinations = [
  {
    id: "sherdi",
    name: "Sherdi, Gujarat, India",
    lat: 21.5847111,
    lng: 70.140275,
    zoom: 8,
    theme: "sherdi",
    subtitle:
      "The journey begins in Sherdi, Gujarat, where my dad was born and where this story starts.",
    imageSrc: "assets/gujarat-reference.png",
    imageAlt: "Laxmi Vilas Palace in Gujarat, India",
    imageHint: "Reference image",
    imageLabel: "Laxmi Vilas Palace image for the Sherdi and Gujarat introduction.",
    citation:
      "Pathak, Nanubhai, D., Lodrick, & O, D. (2026, May 31). Gujarat | History, Map, Population, & Facts. Encyclopedia Britannica. https://www.britannica.com/place/Gujarat",
    info:
      "Gujarat is located on the west coast of India and was the place that my dad was born in. Although he did enjoy his time here and all the memories he made, he knew that if he wanted better opportunities, he needed to get out into the world and study at an educational institution that would open more doors in the future. His ambitions led him to move out of his home and pursue dreams that would hopefully pay off one day.",
    footerNote: "Open the cricket memory to unlock the next destination.",
    activity: {
      kind: "cricket",
      caption: "Play the cricket memory from Sherdi.",
      openedNote: "Cricket memory opened. Continue when you're ready.",
      completedNote: "Cricket memory explored. Continue when you're ready.",
    },
  },
  {
    id: "marseille",
    name: "Marseille, France",
    lat: 43.2965,
    lng: 5.3698,
    zoom: 7,
    theme: "marseille",
    subtitle:
      "The route moves to Marseille, where my dad continued his education while trying to make a living in southern France.",
    imageSrc: "assets/marseille-reference.png",
    imageAlt: "Marseille harbor at sunset",
    imageLabel: "Marseille harbor reference image.",
    imageHint: "Harbor photo",
    citation:
      "Bird, T. (2022, February 25). Marseille: France's \"good natured\" city. https://www.bbc.com/travel/article/20220208-marseille-frances-good-natured-city",
    info:
      "Marseille is located in southern France along the coast of the Mediterranean Sea, near the mouth of the Rhone River. As the oldest city in the country, its culture is defined by maritime traditions, immigrant influences, and culinary heritage. My dad originally moved here to continue his education through a Master of Business Administration program, but even with a strong immigrant presence, he still had trouble finding people from India he could comfortably connect with because he knew Gujarati and English, but barely any French.",
    footerNote: "Open the dishwashing memory to unlock the next destination.",
    activity: {
      kind: "dish",
      caption:
        "Open the dishwashing memory from Marseille.",
      openedNote: "Dishwashing memory opened. Continue whenever you're ready.",
      completedNote: "Dishwashing memory complete. Continue when you're ready.",
    },
  },
  {
    id: "london",
    name: "London, England",
    lat: 51.5072,
    lng: -0.1276,
    zoom: 7,
    theme: "london",
    subtitle:
      "The journey continues through London, where work in his field and familiar connections made the city feel more hopeful.",
    imageSrc: "assets/london-reference.png",
    imageAlt: "Big Ben and the London Eye",
    imageLabel: "London skyline reference image.",
    imageHint: "City reference",
    citation:
      "Guidelines To Britain. (2019, March 19). 10 Facts about Big Ben in London. Guidelines to Britain. https://guidelinestobritain.com/attractions/facts-about-big-ben-in-london/",
    info:
      "London is situated in southeastern England, with iconic royal heritage, museums, historic landmarks, and a legendary theater district. After one expired visa, my dad later moved to London after graduating to get a job that was more in his field. He was able to make friends since communicating became easier and he could meet people from different parts of India, even though the culture changes drastically depending on where in India you are. It still gave him the connections he needed without missing family too much.",
    footerNote: "Open the London Eye memory to unlock the next destination.",
    activity: {
      kind: "london-eye",
      caption: "Open the London Eye POV memory and exit whenever you're ready.",
      openedNote: "London Eye memory opened. Continue when you're ready.",
      completedNote: "London Eye memory explored. Continue when you're ready.",
    },
  },
  {
    id: "minneapolis",
    name: "Minneapolis, Minnesota",
    lat: 44.9778,
    lng: -93.265,
    zoom: 8,
    theme: "minneapolis",
    subtitle:
      "The route reaches Minneapolis, where my dad and his wife started building a life together before the move to Canada.",
    imageSrc: "assets/minneapolis-reference.png",
    imageAlt: "Spoonbridge and Cherry in Minneapolis",
    imageHint: "City reference",
    imageLabel: "Spoonbridge and Cherry reference image for the Minneapolis stop.",
    citation:
      "Lauritsen, J. (2024, September 5). How the Spoon and Cherry sculpture found a home in Minneapolis. CBS News. https://www.cbsnews.com/minnesota/news/spoon-and-cherry-minneapolis/",
    info:
      "Minnesota is located in the Upper Midwestern region of the United States and borders Canada. After a second expired visa, my dad visited India several years later to get married. From there, he and his wife moved to Minnesota for better job opportunities and the potential for making large amounts of money. Here, the immigration population was significantly less than the other places he had been, but with his wife, it felt better that he was not just by himself. Minnesota was also the birthplace of his AMAZING daughter.",
    footerNote: "Open the jigsaw memory to unlock the final destination.",
    activity: {
      kind: "jigsaw",
      caption: "Complete the daughter photo jigsaw to move on.",
      openedNote: "Jigsaw opened. Continue whenever you're ready.",
      completedNote: "Puzzle complete. The final stop is ready.",
    },
  },
  {
    id: "kitchener",
    name: "Kitchener, Ontario",
    lat: 43.4516,
    lng: -80.4925,
    zoom: 9,
    theme: "kitchener",
    subtitle:
      "The final stop arrives in Kitchener, where family closeness made Canada feel like home.",
    imageSrc: "assets/kitchener-reference.png",
    imageAlt: "Roos Island in Kitchener",
    imageHint: "Park reference",
    imageLabel: "Roos Island reference image for the Kitchener ending.",
    citation:
      "Piercey, J. (2025, July 8). Summer music series takes over Roos Island in Kitchener. CityNews Kitchener. https://kitchener.citynews.ca/2025/07/08/summer-music-series-takes-over-roos-island-in-kitchener/",
    info:
      "Kitchener is located in southwestern Ontario, positioned about 100 kilometers west of Toronto within the booming Waterloo Region. Its unique culture balances deep German roots and is celebrated annually through the world-famous Kitchener-Waterloo Oktoberfest. This was the final place of uncertainty my dad faced when he moved to Canada. In the background of his life, his siblings also moved to Ontario and closer to family after years of separation. This made him feel more at home since he always believed that there is no such thing as a favorite place but favorite people. Anywhere those people are has become his favorite place.",
    footerNote:
      "Journey complete. Open the family photo memory or restart the journey from the end screen.",
    activity: {
      kind: "photo",
      caption: "Open the family photo frame memory for the ending.",
      openedNote: "Family photo opened. This is the end of the journey.",
      completedNote: "Family photo opened. This is the end of the journey.",
    },
  },
];

const storageKey = "geo26-journey-state-v3";
const legacyStorageKeys = ["geo26-journey-state-v2", "geo26-journey-state-v1"];
const mapsDemoKeyStorageKey = "geo26-google-maps-demo-key";
const builtInMapsDemoKey =
  typeof window.GEO26_DEFAULT_MAPS_KEY === "string"
    ? window.GEO26_DEFAULT_MAPS_KEY.trim()
    : "";
const minneapolisPuzzleImageSrc = "assets/minneapolis-puzzle-photo.png";
const legacyDefaultNotesByKey = {
  "geo26-journey-state-v2": {
    sherdi: {
      citation:
        "Pathak, Nanubhai, D., Lodrick, & O, D. (2026, May 31). Gujarat | History, Map, Population, & Facts. Encyclopedia Britannica. https://www.britannica.com/place/Gujarat",
      info:
        "Gujarat, India is located on the west side of India. This is where my dad was born. Gujarat is known for its culture, trade history, and coastline.",
    },
    marseille: { citation: "Type here", info: "Type here" },
    london: { citation: "Type here", info: "Type here" },
    minneapolis: { citation: "Type here", info: "Type here" },
    kitchener: { citation: "Type here", info: "Type here" },
  },
};

let state = loadState();
let currentIndex = 0;
let currentMapsDemoKey = "";
let googleMapsPromise;
let googleAuthRejected = false;
let map;
let personMarker;
let planeMarker;
let routeLine;
let isAnimating = false;

const beginButton = document.getElementById("begin-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const routeRibbon = document.getElementById("route-ribbon");
const stepCount = document.getElementById("step-count");
const destinationName = document.getElementById("destination-name");
const destinationSubtitle = document.getElementById("destination-subtitle");
const imageArt = document.getElementById("image-art");
const imageLabel = document.getElementById("image-label");
const citationText = document.getElementById("citation-text");
const infoText = document.getElementById("info-text");
const footerNote = document.getElementById("footer-note");
const activityButton = document.getElementById("activity-button");
const activityCaption = document.getElementById("activity-caption");
const memoryTools = document.getElementById("memory-tools");
const mapSetup = document.getElementById("map-setup");
const mapSetupMessage = document.getElementById("map-setup-message");
const mapKeyInput = document.getElementById("map-key-input");
const saveMapKeyButton = document.getElementById("save-map-key");
const clearMapKeyButton = document.getElementById("clear-map-key");

const cricketModal = document.getElementById("cricket-modal");
const dishModal = document.getElementById("dish-modal");
const londonModal = document.getElementById("london-modal");
const jigsawModal = document.getElementById("jigsaw-modal");
const photoModal = document.getElementById("photo-modal");

const cricketCanvas = document.getElementById("cricket-canvas");
const cricketContext = cricketCanvas.getContext("2d");
const cricketScore = document.getElementById("cricket-score");

const dishCanvas = document.getElementById("dish-canvas");
const dishContext = dishCanvas.getContext("2d");
const dishStatus = document.getElementById("dish-status");
const dishProgressBar = document.getElementById("dish-progress-bar");

const londonCanvas = document.getElementById("london-canvas");
const londonContext = londonCanvas.getContext("2d");
const londonStatus = document.getElementById("london-status");

const jigsawBoard = document.getElementById("jigsaw-board");
const jigsawStatus = document.getElementById("jigsaw-status");
const jigsawCompleteBanner = document.getElementById("jigsaw-complete-banner");
const jigsawCloseButton = document.querySelector('[data-close="jigsaw"]');

let cricketAnimationFrame;
let cricketLastTime = 0;
let cricketState;

let dishAnimationFrame;
let dishStartTime = 0;
let dishSceneComplete = false;

let londonAnimationFrame;
let londonStartTime = 0;

let jigsawTiles = [];
let jigsawSelectedIndex = null;

function createDefaultNotes() {
  return Object.fromEntries(
    destinations.map((stop) => [
      stop.id,
      { citation: stop.citation, info: stop.info },
    ]),
  );
}

function createDefaultState() {
  return {
    notes: createDefaultNotes(),
    completedActivities: {},
    openedActivities: {},
  };
}

function resolveDestinationId(id) {
  if (id === "gujarat") {
    return "sherdi";
  }
  return destinations.some((stop) => stop.id === id) ? id : "";
}

function shouldReplaceLegacyNote(sourceKey, stopId, field, value) {
  if (sourceKey === storageKey) {
    return false;
  }

  const trimmedValue = typeof value === "string" ? value.trim() : "";
  if (!trimmedValue || trimmedValue === "Type here") {
    return true;
  }

  const legacyValue = legacyDefaultNotesByKey[sourceKey]?.[stopId]?.[field];
  return Boolean(legacyValue && trimmedValue === legacyValue.trim());
}

function normalizeState(saved, sourceKey) {
  const fallback = createDefaultState();
  const normalized = {
    notes: { ...fallback.notes },
    completedActivities: {},
    openedActivities: {},
  };

  if (!saved || typeof saved !== "object") {
    return normalized;
  }

  if (saved.notes && typeof saved.notes === "object") {
    Object.entries(saved.notes).forEach(([stopId, value]) => {
      const resolvedId = resolveDestinationId(stopId);
      if (!resolvedId || !value || typeof value !== "object") {
        return;
      }

      normalized.notes[resolvedId] = {
        citation:
          typeof value.citation === "string" &&
          !shouldReplaceLegacyNote(
            sourceKey,
            resolvedId,
            "citation",
            value.citation,
          )
            ? value.citation
            : fallback.notes[resolvedId].citation,
        info:
          typeof value.info === "string" &&
          !shouldReplaceLegacyNote(sourceKey, resolvedId, "info", value.info)
            ? value.info
            : fallback.notes[resolvedId].info,
      };
    });
  }

  if (
    saved.completedActivities &&
    typeof saved.completedActivities === "object"
  ) {
    Object.entries(saved.completedActivities).forEach(([stopId, value]) => {
      const resolvedId = resolveDestinationId(stopId);
      if (!resolvedId) {
        return;
      }
      normalized.completedActivities[resolvedId] = Boolean(value);
    });
  }

  if (
    saved.openedActivities &&
    typeof saved.openedActivities === "object"
  ) {
    Object.entries(saved.openedActivities).forEach(([stopId, value]) => {
      const resolvedId = resolveDestinationId(stopId);
      if (!resolvedId) {
        return;
      }
      normalized.openedActivities[resolvedId] = Boolean(value);
    });
  }

  return normalized;
}

function loadState() {
  const keysToTry = [storageKey, ...legacyStorageKeys];

  for (const key of keysToTry) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        continue;
      }
      const normalized = normalizeState(JSON.parse(raw), key);
      if (key !== storageKey) {
        normalized.completedActivities = {};
        normalized.openedActivities = {};
      }
      return normalized;
    } catch (error) {
      continue;
    }
  }

  return createDefaultState();
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function getMapsDemoKeyFromHash() {
  const hash = window.location.hash || "";
  if (!hash.startsWith("#")) {
    return "";
  }

  const params = new URLSearchParams(hash.slice(1));
  return (params.get("demoKey") || "").trim();
}

function getStoredMapsDemoKey() {
  try {
    return (localStorage.getItem(mapsDemoKeyStorageKey) || "").trim();
  } catch (error) {
    return currentMapsDemoKey;
  }
}

function getConfiguredMapsDemoKey() {
  return (
    getMapsDemoKeyFromHash() ||
    currentMapsDemoKey ||
    getStoredMapsDemoKey() ||
    builtInMapsDemoKey
  ).trim();
}

function persistMapsDemoKey(demoKey) {
  currentMapsDemoKey = demoKey.trim();
  try {
    localStorage.setItem(mapsDemoKeyStorageKey, currentMapsDemoKey);
  } catch (error) {
    // Embedded browser contexts may block persistent storage.
  }
}

function clearPersistedMapsDemoKey() {
  currentMapsDemoKey = "";
  try {
    localStorage.removeItem(mapsDemoKeyStorageKey);
  } catch (error) {
    // Ignore storage issues in restricted browser contexts.
  }
}

function showMapSetup(message) {
  mapSetup.classList.remove("hidden");
  mapSetupMessage.textContent = message;
  mapKeyInput.value = currentMapsDemoKey || getStoredMapsDemoKey();
}

function hideMapSetup() {
  mapSetup.classList.add("hidden");
}

function saveMapsDemoKey() {
  const demoKey = mapKeyInput.value.trim();
  if (!demoKey) {
    showMapSetup("Paste your free Google Maps Demo Key to continue.");
    return;
  }

  persistMapsDemoKey(demoKey);
  initializeGoogleMapIfPossible(demoKey);
}

function clearMapsDemoKey() {
  clearPersistedMapsDemoKey();
  if (map) {
    window.location.reload();
    return;
  }
  showMapSetup(
    "Google Maps is set to the free prototype mode. Paste your Maps Demo Key here to activate it.",
  );
}

function loadGoogleMapsApi(apiKey) {
  if (window.google && window.google.maps) {
    return Promise.resolve(window.google.maps);
  }

  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    let settled = false;

    function finish(fn, value) {
      if (settled) {
        return;
      }
      settled = true;
      fn(value);
    }

    window.__geo26GoogleMapsReady = () => {
      finish(resolve, window.google.maps);
    };

    window.gm_authFailure = () => {
      googleAuthRejected = true;
      clearPersistedMapsDemoKey();
      finish(reject, new Error("Google Maps rejected that demo key."));
    };

    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=" +
      encodeURIComponent(apiKey) +
      "&loading=async&v=weekly&callback=__geo26GoogleMapsReady";
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      finish(reject, new Error("Google Maps could not be loaded right now."));
    };
    document.head.appendChild(script);

    window.setTimeout(() => {
      if (!settled) {
        finish(
          reject,
          new Error(
            googleAuthRejected
              ? "Google Maps rejected that demo key."
              : "Google Maps did not finish loading.",
          ),
        );
      }
    }, 15000);
  });

  googleMapsPromise.catch(() => {
    googleMapsPromise = undefined;
  });

  return googleMapsPromise;
}

function createSvgUrl(markup) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(markup)}`;
}

function createPersonIcon() {
  return {
    url: createSvgUrl(`
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="42" viewBox="0 0 28 42">
        <defs>
          <linearGradient id="body" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#d37d48" />
            <stop offset="100%" stop-color="#884523" />
          </linearGradient>
        </defs>
        <rect x="4" y="10" width="20" height="20" rx="10" fill="url(#body)" />
        <circle cx="14" cy="7" r="6" fill="#f6ddbc" />
        <path d="M14 41 L5 26 H23 Z" fill="#884523" />
      </svg>
    `),
    scaledSize: new google.maps.Size(28, 42),
    anchor: new google.maps.Point(14, 42),
  };
}

function createPlaneIcon() {
  return {
    url: createSvgUrl(`
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
        <circle cx="17" cy="17" r="15" fill="rgba(255,250,241,0.94)" />
        <path d="M8 18 L25 10 L18 17 L25 24 Z" fill="#8b4e28" />
        <path d="M14 20 L10 25" stroke="#8b4e28" stroke-width="2.4" stroke-linecap="round" />
      </svg>
    `),
    scaledSize: new google.maps.Size(34, 34),
    anchor: new google.maps.Point(17, 17),
  };
}

function createPaperMapStyles() {
  return [
    {
      elementType: "geometry",
      stylers: [{ color: "#ebe2c9" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#735b3d" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#f8f2e4" }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#c8b58d" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#efe7d2" }],
    },
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#d8c4a0" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#cbb089" }],
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#b9d1d6" }],
    },
  ];
}

function createGoogleMap() {
  if (map || !window.google || !window.google.maps) {
    return;
  }

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 26, lng: 18 },
    zoom: 2,
    disableDefaultUI: true,
    keyboardShortcuts: false,
    clickableIcons: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    gestureHandling: "cooperative",
    styles: createPaperMapStyles(),
    backgroundColor: "#ebe2c9",
  });

  personMarker = new google.maps.Marker({
    map,
    position: { lat: destinations[0].lat, lng: destinations[0].lng },
    icon: createPersonIcon(),
    zIndex: 20,
  });

  planeMarker = new google.maps.Marker({
    map,
    position: { lat: destinations[0].lat, lng: destinations[0].lng },
    icon: createPlaneIcon(),
    visible: false,
    zIndex: 25,
  });

  routeLine = new google.maps.Polyline({
    map,
    path: [],
    geodesic: true,
    strokeColor: "#ba6f3c",
    strokeOpacity: 0.92,
    strokeWeight: 3,
  });
}

function waitForMapIdle() {
  if (!map || !window.google || !window.google.maps) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    google.maps.event.addListenerOnce(map, "idle", resolve);
  });
}

function updateMapDestinationView() {
  if (!map || !personMarker || !routeLine) {
    return;
  }

  const stop = destinations[currentIndex];
  personMarker.setPosition({ lat: stop.lat, lng: stop.lng });
  routeLine.setPath(
    destinations.slice(0, currentIndex + 1).map((item) => ({
      lat: item.lat,
      lng: item.lng,
    })),
  );
}

function setWorldView() {
  if (!map) {
    return;
  }

  map.setCenter({ lat: 26, lng: 18 });
  map.setZoom(2);
}

function focusCurrentDestination() {
  if (!map) {
    return;
  }

  const stop = destinations[currentIndex];
  map.panTo({ lat: stop.lat, lng: stop.lng });
  map.setZoom(stop.zoom);
}

function initializeGoogleMapIfPossible(keyOverride) {
  const hashKey = getMapsDemoKeyFromHash();
  const demoKey = (keyOverride || getConfiguredMapsDemoKey()).trim();

  if (hashKey) {
    persistMapsDemoKey(hashKey);
    if (window.history && typeof window.history.replaceState === "function") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }

  if (!demoKey) {
    routeRibbon.textContent = "Google Maps setup needed";
    showMapSetup(
      "Google Maps is now set to the no-cost prototype mode. Paste your free Maps Demo Key to activate it.",
    );
    return;
  }

  showMapSetup("Connecting to Google Maps with your free prototype key...");
  mapKeyInput.value = demoKey;

  loadGoogleMapsApi(demoKey)
    .then(() => {
      createGoogleMap();
      hideMapSetup();
      updateMapDestinationView();

      if (document.body.classList.contains("journey-started")) {
        focusCurrentDestination();
      } else {
        setWorldView();
      }

      renderDestination();
    })
    .catch((error) => {
      routeRibbon.textContent = "Google Maps setup needed";
      showMapSetup(
        `${error.message} Paste a valid free Maps Demo Key to continue.`,
      );
      renderDestination();
    });
}

function createActivityIcon(kind) {
  if (kind === "cricket") {
    return `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="20" cy="18" r="8" fill="#f3dcc0"></circle>
        <path d="M14 30c5-5 16-5 21 0l3 18H16z" fill="#d06f3e"></path>
        <path d="M31 14l16 10" stroke="#6c3b1f" stroke-width="5" stroke-linecap="round"></path>
        <path d="M45 20l8 24" stroke="#84502c" stroke-width="6" stroke-linecap="round"></path>
        <circle cx="50" cy="15" r="5" fill="#ca4634"></circle>
      </svg>
      <span>Cricket Memory</span>
    `;
  }

  if (kind === "dish") {
    return `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M14 34h36c0 9-8 16-18 16S14 43 14 34z" fill="#7da2af"></path>
        <path d="M18 22h28l6 12H12z" fill="#d89e5f"></path>
        <circle cx="23" cy="17" r="3" fill="#9fd6df"></circle>
        <circle cx="31" cy="13" r="4" fill="#bfe8ef"></circle>
        <circle cx="40" cy="17" r="3.5" fill="#d6f5fa"></circle>
      </svg>
      <span>Dishwashing Memory</span>
    `;
  }

  if (kind === "london-eye") {
    return `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="27" r="16" fill="none" stroke="#6a7b90" stroke-width="4"></circle>
        <circle cx="32" cy="27" r="4" fill="#d9b262"></circle>
        <path d="M32 11v32M16 27h32M21 16l22 22M43 16 21 38" stroke="#6a7b90" stroke-width="2.4" stroke-linecap="round"></path>
        <path d="M23 50h18" stroke="#8b4e28" stroke-width="4" stroke-linecap="round"></path>
        <path d="M26 50 32 38 38 50" fill="none" stroke="#8b4e28" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <span>London Eye Memory</span>
    `;
  }

  if (kind === "jigsaw") {
    return `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="12" width="20" height="20" rx="5" fill="#d4a24a"></rect>
        <rect x="32" y="12" width="22" height="20" rx="5" fill="#86a4bf"></rect>
        <rect x="10" y="34" width="22" height="20" rx="5" fill="#7b9f6a"></rect>
        <path d="M36 34h12c3 0 6 3 6 6v8c0 3-3 6-6 6H36z" fill="#c87144"></path>
      </svg>
      <span>Jigsaw Memory</span>
    `;
  }

  return `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="14" width="36" height="36" rx="6" fill="#855230"></rect>
      <rect x="20" y="20" width="24" height="24" rx="4" fill="#f5ead7"></rect>
      <path d="M20 40l8-9 6 6 4-4 6 7" fill="none" stroke="#855230" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"></path>
      <circle cx="28" cy="27" r="3" fill="#d98b5c"></circle>
    </svg>
    <span>Family Photo</span>
  `;
}

function markStopActivityCompleted(stopId) {
  state.completedActivities[stopId] = true;
  saveState();
}

function markStopActivityOpened(stopId) {
  state.openedActivities[stopId] = true;
  saveState();
}

function isStopUnlocked(stopId) {
  return Boolean(
    state.openedActivities?.[stopId] || state.completedActivities?.[stopId],
  );
}

function renderImage(stop) {
  imageArt.dataset.theme = stop.theme;
  imageArt.classList.toggle("image-card__art--photo", Boolean(stop.imageSrc));

  if (stop.imageSrc) {
    imageArt.innerHTML = `
      <img class="image-card__photo" src="${stop.imageSrc}" alt="${stop.imageAlt || stop.name}" />
      <span class="art-location">${stop.name}</span>
      <span class="art-hint">${stop.imageHint || "Reference image"}</span>
    `;
    return;
  }

  imageArt.innerHTML = `
    <span class="art-location">${stop.name}</span>
    <span class="art-hint">${stop.imageHint || "Image placeholder"}</span>
  `;
}

function renderDestination() {
  const stop = destinations[currentIndex];
  const notes = {
    citation: stop.citation,
    info: stop.info,
  };
  const isFinalStop = currentIndex === destinations.length - 1;
  const unlocked = isStopUnlocked(stop.id);
  const completed = Boolean(state.completedActivities[stop.id]);
  const journeyStarted = document.body.classList.contains("journey-started");

  stepCount.textContent = `Stop ${currentIndex + 1} of ${destinations.length}`;
  destinationName.textContent = stop.name;
  destinationSubtitle.textContent = stop.subtitle;
  renderImage(stop);
  imageLabel.textContent = stop.imageLabel;
  citationText.textContent = notes.citation;
  infoText.textContent = notes.info;
  routeRibbon.textContent = map
    ? journeyStarted
      ? `Current stop: ${stop.name}`
      : "A travel journal map of my dad's journey"
    : getConfiguredMapsDemoKey()
      ? "Loading Google Maps..."
      : "Google Maps setup needed";

  updateMapDestinationView();

  if (stop.activity) {
    memoryTools.classList.remove("hidden");
    activityButton.innerHTML = createActivityIcon(stop.activity.kind);
    activityCaption.textContent = stop.activity.caption;
    footerNote.textContent = completed
      ? stop.activity.completedNote || stop.footerNote
      : unlocked
        ? stop.activity.openedNote || "Activity opened. Continue when you're ready."
        : stop.footerNote;
  } else {
    memoryTools.classList.add("hidden");
    activityButton.innerHTML = "";
    activityCaption.textContent = "";
    footerNote.textContent = stop.footerNote;
  }

  if (isFinalStop) {
    nextButton.classList.add("hidden");
  } else if (!stop.activity || unlocked) {
    nextButton.classList.remove("hidden");
    nextButton.textContent = "Next Destination";
  } else {
    nextButton.classList.add("hidden");
  }

  nextButton.classList.toggle(
    "journey-button--spotlight",
    stop.id === "minneapolis" && unlocked && !isFinalStop,
  );

  if (isFinalStop && journeyStarted) {
    restartButton.classList.remove("hidden");
  } else {
    restartButton.classList.add("hidden");
  }
}

function persistNotes() {
  // Displayed notes are fixed in code and are not editable in the viewer.
}

function animatePlaneBetween(startStop, endStop) {
  if (!planeMarker) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const start = { lat: startStop.lat, lng: startStop.lng };
    const end = { lat: endStop.lat, lng: endStop.lng };
    const duration = 1650;
    const startedAt = performance.now();

    planeMarker.setPosition(start);
    planeMarker.setVisible(true);

    function step(now) {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      planeMarker.setPosition({
        lat: start.lat + (end.lat - start.lat) * eased,
        lng: start.lng + (end.lng - start.lng) * eased,
      });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        planeMarker.setVisible(false);
        resolve();
      }
    }

    window.requestAnimationFrame(step);
  });
}

async function moveToNextDestination() {
  if (isAnimating || currentIndex >= destinations.length - 1 || !map) {
    if (!map) {
      showMapSetup(
        "Paste a free Google Maps Demo Key first so the journey can use Google Maps.",
      );
    }
    return;
  }

  persistNotes();
  isAnimating = true;
  nextButton.disabled = true;

  const startStop = destinations[currentIndex];
  const endStop = destinations[currentIndex + 1];
  const bounds = new google.maps.LatLngBounds();
  bounds.extend({ lat: startStop.lat, lng: startStop.lng });
  bounds.extend({ lat: endStop.lat, lng: endStop.lng });

  routeRibbon.textContent = `Flying to ${endStop.name}`;
  footerNote.textContent = `Traveling from ${startStop.name} to ${endStop.name}...`;

  map.fitBounds(bounds, 80);
  await waitForMapIdle();
  await wait(250);
  await animatePlaneBetween(startStop, endStop);

  currentIndex += 1;
  updateMapDestinationView();
  map.panTo({ lat: endStop.lat, lng: endStop.lng });
  map.setZoom(endStop.zoom);
  await waitForMapIdle();

  renderDestination();
  nextButton.disabled = false;
  isAnimating = false;
}

function closeAllModals() {
  cricketModal.classList.add("hidden");
  dishModal.classList.add("hidden");
  londonModal.classList.add("hidden");
  jigsawModal.classList.add("hidden");
  photoModal.classList.add("hidden");
  window.cancelAnimationFrame(cricketAnimationFrame);
  window.cancelAnimationFrame(dishAnimationFrame);
  window.cancelAnimationFrame(londonAnimationFrame);
}

function restartJourney() {
  if (isAnimating) {
    return;
  }

  persistNotes();
  state.completedActivities = {};
  state.openedActivities = {};
  saveState();
  closeAllModals();
  dishSceneComplete = false;
  jigsawTiles = [];
  jigsawSelectedIndex = null;
  currentIndex = 0;
  document.body.classList.remove("journey-started");

  if (map) {
    updateMapDestinationView();
    setWorldView();
  }

  renderDestination();
}

function beginJourney() {
  document.body.classList.add("journey-started");

  window.setTimeout(() => {
    if (map) {
      google.maps.event.trigger(map, "resize");
      focusCurrentDestination();
      updateMapDestinationView();
    } else {
      showMapSetup(
        "Paste a free Google Maps Demo Key so this prototype can use Google Maps without billing.",
      );
    }
    renderDestination();
  }, 220);
}

function completeActivityIfEligible(kind) {
  const stop = destinations[currentIndex];
  if (!stop.activity || stop.activity.kind !== kind) {
    renderDestination();
    return;
  }

  if (kind === "dish") {
    if (dishSceneComplete) {
      markStopActivityCompleted(stop.id);
    }
  } else if (kind === "jigsaw") {
    if (isJigsawSolved(jigsawTiles)) {
      markStopActivityCompleted(stop.id);
    }
  }

  renderDestination();
}

function handleActivityOpen() {
  const stop = destinations[currentIndex];
  if (!stop.activity) {
    return;
  }

  markStopActivityOpened(stop.id);
  if (
    stop.activity.kind === "cricket" ||
    stop.activity.kind === "london-eye" ||
    stop.activity.kind === "photo"
  ) {
    markStopActivityCompleted(stop.id);
  }
  renderDestination();

  if (stop.activity.kind === "cricket") {
    openCricketModal();
    return;
  }

  if (stop.activity.kind === "dish") {
    openDishModal();
    return;
  }

  if (stop.activity.kind === "london-eye") {
    openLondonModal();
    return;
  }

  if (stop.activity.kind === "jigsaw") {
    openJigsawModal();
    return;
  }

  openPhotoModal();
}

function handleModalClose(kind) {
  if (kind === "cricket") {
    closeCricketModal();
  } else if (kind === "dish") {
    closeDishModal();
  } else if (kind === "london-eye") {
    closeLondonModal();
  } else if (kind === "jigsaw") {
    closeJigsawModal();
  } else if (kind === "photo") {
    closePhotoModal();
  }

  completeActivityIfEligible(kind);
}

function resetCricketGame() {
  cricketState = {
    ballX: cricketCanvas.width + 30,
    ballY: 158,
    ballVX: -260,
    ballVY: 0,
    swingTimer: 0,
    hit: false,
    score: 0,
  };
  cricketScore.textContent = "Score: 0";
}

function spawnBall() {
  cricketState.ballX = cricketCanvas.width + 20;
  cricketState.ballY = 150 + Math.random() * 26;
  cricketState.ballVX = -240 - Math.random() * 45;
  cricketState.ballVY = 0;
  cricketState.hit = false;
}

function swingBat() {
  if (!cricketState) {
    return;
  }

  cricketState.swingTimer = 0.22;

  const inHitZone =
    cricketState.ballX > 150 &&
    cricketState.ballX < 220 &&
    cricketState.ballY > 118 &&
    cricketState.ballY < 192 &&
    !cricketState.hit;

  if (inHitZone) {
    cricketState.hit = true;
    cricketState.ballVX = 280;
    cricketState.ballVY = -240 - Math.random() * 90;
    cricketState.score += 1;
    cricketScore.textContent = `Score: ${cricketState.score}`;
  }
}

function drawCricketScene(delta) {
  cricketContext.clearRect(0, 0, cricketCanvas.width, cricketCanvas.height);

  const sky = cricketContext.createLinearGradient(0, 0, 0, cricketCanvas.height);
  sky.addColorStop(0, "#a9d7ef");
  sky.addColorStop(1, "#f7f0df");
  cricketContext.fillStyle = sky;
  cricketContext.fillRect(0, 0, cricketCanvas.width, cricketCanvas.height);

  cricketContext.fillStyle = "#8abf72";
  cricketContext.fillRect(0, 188, cricketCanvas.width, 92);
  cricketContext.fillStyle = "#d6b07f";
  cricketContext.fillRect(135, 112, 112, 110);

  cricketContext.fillStyle = "#fff3df";
  cricketContext.beginPath();
  cricketContext.arc(110, 58, 18, 0, Math.PI * 2);
  cricketContext.arc(148, 54, 24, 0, Math.PI * 2);
  cricketContext.arc(182, 62, 16, 0, Math.PI * 2);
  cricketContext.fill();

  cricketContext.strokeStyle = "#7c4a26";
  cricketContext.lineWidth = 5;
  cricketContext.beginPath();
  cricketContext.moveTo(172, 104);
  cricketContext.lineTo(172, 168);
  cricketContext.moveTo(188, 104);
  cricketContext.lineTo(188, 168);
  cricketContext.moveTo(204, 104);
  cricketContext.lineTo(204, 168);
  cricketContext.stroke();

  cricketContext.fillStyle = "#cf7445";
  cricketContext.beginPath();
  cricketContext.arc(124, 114, 14, 0, Math.PI * 2);
  cricketContext.fill();
  cricketContext.fillStyle = "#934620";
  cricketContext.fillRect(112, 128, 26, 48);
  cricketContext.fillRect(102, 140, 18, 20);
  cricketContext.fillRect(132, 140, 18, 20);

  const swingAngle = cricketState.swingTimer > 0 ? -0.95 : -0.25;
  cricketContext.save();
  cricketContext.translate(146, 146);
  cricketContext.rotate(swingAngle);
  cricketContext.fillStyle = "#8a5a31";
  cricketContext.fillRect(0, -6, 74, 12);
  cricketContext.restore();

  if (cricketState.swingTimer > 0) {
    cricketState.swingTimer = Math.max(0, cricketState.swingTimer - delta);
  }

  cricketState.ballX += cricketState.ballVX * delta;
  cricketState.ballY += cricketState.ballVY * delta;
  if (cricketState.hit) {
    cricketState.ballVY += 420 * delta;
  }

  cricketContext.fillStyle = "#c53929";
  cricketContext.beginPath();
  cricketContext.arc(cricketState.ballX, cricketState.ballY, 8, 0, Math.PI * 2);
  cricketContext.fill();

  if (
    cricketState.ballX < -20 ||
    cricketState.ballX > cricketCanvas.width + 30 ||
    cricketState.ballY > cricketCanvas.height + 30
  ) {
    spawnBall();
  }
}

function cricketLoop(timestamp) {
  const delta = Math.min((timestamp - cricketLastTime) / 1000 || 0.016, 0.03);
  cricketLastTime = timestamp;
  drawCricketScene(delta);
  cricketAnimationFrame = window.requestAnimationFrame(cricketLoop);
}

function openCricketModal() {
  cricketModal.classList.remove("hidden");
  resetCricketGame();
  cricketLastTime = 0;
  window.cancelAnimationFrame(cricketAnimationFrame);
  cricketAnimationFrame = window.requestAnimationFrame(cricketLoop);
}

function closeCricketModal() {
  cricketModal.classList.add("hidden");
  window.cancelAnimationFrame(cricketAnimationFrame);
}

function drawDishScene(progressSeconds) {
  const t = progressSeconds;
  const bubbleOffset = (t * 80) % 180;
  dishContext.clearRect(0, 0, dishCanvas.width, dishCanvas.height);

  const background = dishContext.createLinearGradient(0, 0, 0, dishCanvas.height);
  background.addColorStop(0, "#94b9c7");
  background.addColorStop(1, "#f4ead7");
  dishContext.fillStyle = background;
  dishContext.fillRect(0, 0, dishCanvas.width, dishCanvas.height);

  dishContext.fillStyle = "#59727f";
  dishContext.fillRect(0, 182, dishCanvas.width, 98);

  dishContext.fillStyle = "#aec7d1";
  dishContext.fillRect(58, 126, 504, 110);
  dishContext.fillStyle = "#698591";
  dishContext.fillRect(76, 144, 470, 72);

  dishContext.strokeStyle = "#d7eef4";
  dishContext.lineWidth = 8;
  dishContext.beginPath();
  dishContext.moveTo(320, 58);
  dishContext.bezierCurveTo(328, 48, 346, 48, 352, 60);
  dishContext.lineTo(352, 96);
  dishContext.stroke();

  dishContext.strokeStyle = "rgba(214, 244, 250, 0.8)";
  dishContext.lineWidth = 6;
  dishContext.beginPath();
  dishContext.moveTo(350, 96);
  dishContext.lineTo(350, 160);
  dishContext.stroke();

  dishContext.fillStyle = "#f3ead5";
  dishContext.beginPath();
  dishContext.ellipse(324, 168, 74, 50, 0, 0, Math.PI * 2);
  dishContext.fill();
  dishContext.fillStyle = "#cbdde5";
  dishContext.beginPath();
  dishContext.ellipse(324, 168, 48, 30, 0, 0, Math.PI * 2);
  dishContext.fill();

  const scrubShift = Math.sin(t * 5.8) * 22;
  dishContext.fillStyle = "#efc06d";
  dishContext.beginPath();
  dishContext.roundRect(280 + scrubShift, 145, 36, 28, 8);
  dishContext.fill();

  dishContext.fillStyle = "#d18153";
  dishContext.beginPath();
  dishContext.roundRect(220 + scrubShift, 166, 88, 36, 18);
  dishContext.fill();
  dishContext.beginPath();
  dishContext.roundRect(332 - scrubShift, 166, 88, 36, 18);
  dishContext.fill();

  dishContext.fillStyle = "rgba(233, 249, 252, 0.9)";
  for (let index = 0; index < 8; index += 1) {
    const x = 286 + index * 28;
    const y = 168 - ((bubbleOffset + index * 20) % 120);
    const radius = 6 + (index % 3);
    dishContext.beginPath();
    dishContext.arc(x, y, radius, 0, Math.PI * 2);
    dishContext.fill();
  }

  dishContext.fillStyle = "rgba(255, 255, 255, 0.18)";
  dishContext.fillRect(0, 0, dishCanvas.width, 56);
}

function dishLoop(timestamp) {
  if (!dishStartTime) {
    dishStartTime = timestamp;
  }

  const elapsedSeconds = (timestamp - dishStartTime) / 1000;
  const clamped = Math.min(elapsedSeconds, 10);

  drawDishScene(clamped);
  dishProgressBar.style.width = `${(clamped / 10) * 100}%`;
  dishSceneComplete = clamped >= 10;
  dishStatus.textContent = dishSceneComplete
    ? "The 10-second scene is complete. Exit when you're ready."
    : "10-second cartoony POV dishwashing scene.";

  if (!dishSceneComplete) {
    dishAnimationFrame = window.requestAnimationFrame(dishLoop);
  }
}

function openDishModal() {
  dishModal.classList.remove("hidden");
  dishProgressBar.style.width = "0%";
  dishStatus.textContent = "10-second cartoony POV dishwashing scene.";
  dishStartTime = 0;
  dishSceneComplete = false;
  window.cancelAnimationFrame(dishAnimationFrame);
  dishAnimationFrame = window.requestAnimationFrame(dishLoop);
}

function closeDishModal() {
  dishModal.classList.add("hidden");
  window.cancelAnimationFrame(dishAnimationFrame);
}

function drawLondonScene(progressSeconds) {
  const t = progressSeconds;
  const rise = Math.min(t * 18, 88);
  const sway = Math.sin(t * 0.72) * 5;
  const cloudDrift = (t * 18) % (londonCanvas.width + 220);
  const skylineDrop = rise * 0.52;
  const windowX = 74;
  const windowY = 22;
  const windowWidth = 472;
  const windowHeight = 208;
  const horizonY = 170 + skylineDrop;

  londonContext.clearRect(0, 0, londonCanvas.width, londonCanvas.height);

  const cabin = londonContext.createLinearGradient(0, 0, 0, londonCanvas.height);
  cabin.addColorStop(0, "#e8dcc8");
  cabin.addColorStop(0.58, "#d3bea0");
  cabin.addColorStop(1, "#8c6849");
  londonContext.fillStyle = cabin;
  londonContext.fillRect(0, 0, londonCanvas.width, londonCanvas.height);

  londonContext.save();
  londonContext.beginPath();
  londonContext.roundRect(windowX, windowY, windowWidth, windowHeight, 84);
  londonContext.clip();

  const sky = londonContext.createLinearGradient(0, windowY, 0, windowY + windowHeight);
  sky.addColorStop(0, "#8fb7db");
  sky.addColorStop(0.54, "#dfe9f2");
  sky.addColorStop(1, "#f0dfc8");
  londonContext.fillStyle = sky;
  londonContext.fillRect(windowX, windowY, windowWidth, windowHeight);

  londonContext.fillStyle = "rgba(255, 238, 206, 0.38)";
  londonContext.beginPath();
  londonContext.arc(455, 62, 38, 0, Math.PI * 2);
  londonContext.fill();

  londonContext.fillStyle = "rgba(255, 255, 255, 0.72)";
  for (let index = 0; index < 4; index += 1) {
    const x = ((cloudDrift + index * 168) % (windowWidth + 180)) + windowX - 100;
    const y = 44 + index * 20 - rise * 0.08;
    londonContext.beginPath();
    londonContext.arc(x, y, 16, 0, Math.PI * 2);
    londonContext.arc(x + 18, y - 7, 22, 0, Math.PI * 2);
    londonContext.arc(x + 38, y, 16, 0, Math.PI * 2);
    londonContext.fill();
  }

  londonContext.fillStyle = "#adc7d6";
  londonContext.fillRect(windowX, horizonY - 22, windowWidth, 48);
  londonContext.fillStyle = "#82a8bb";
  londonContext.fillRect(windowX, horizonY + 8, windowWidth, 54);
  londonContext.fillStyle = "rgba(255, 255, 255, 0.2)";
  londonContext.fillRect(windowX, horizonY + 10, windowWidth, 3);

  londonContext.save();
  londonContext.translate(sway, 0);
  londonContext.strokeStyle = "rgba(219, 231, 239, 0.84)";
  londonContext.lineWidth = 4;
  londonContext.beginPath();
  londonContext.arc(150, horizonY - 44, 42, 0, Math.PI * 2);
  londonContext.stroke();
  londonContext.lineWidth = 1.8;
  for (let spoke = 0; spoke < 8; spoke += 1) {
    const angle = (Math.PI * 2 * spoke) / 8;
    londonContext.beginPath();
    londonContext.moveTo(150, horizonY - 44);
    londonContext.lineTo(
      150 + Math.cos(angle) * 42,
      horizonY - 44 + Math.sin(angle) * 42,
    );
    londonContext.stroke();
  }
  londonContext.fillStyle = "#c6935f";
  londonContext.fillRect(145, horizonY - 2, 10, 28);
  londonContext.fillRect(129, horizonY + 22, 42, 5);

  londonContext.fillStyle = "#697787";
  const buildingXs = [96, 132, 188, 224, 272, 326, 372, 458];
  const buildingWidths = [26, 18, 34, 28, 30, 26, 38, 20];
  const buildingHeights = [44, 28, 56, 42, 64, 46, 52, 92];
  buildingXs.forEach((x, index) => {
    const width = buildingWidths[index];
    const height = buildingHeights[index];
    londonContext.fillRect(x, horizonY - height, width, height);
  });

  londonContext.fillStyle = "#b89a6b";
  londonContext.fillRect(454, horizonY - 92, 20, 92);
  londonContext.fillStyle = "#9d7a47";
  londonContext.fillRect(459, horizonY - 120, 10, 28);
  londonContext.beginPath();
  londonContext.moveTo(464, horizonY - 138);
  londonContext.lineTo(473, horizonY - 120);
  londonContext.lineTo(455, horizonY - 120);
  londonContext.closePath();
  londonContext.fill();
  londonContext.fillStyle = "#f6ecd7";
  londonContext.beginPath();
  londonContext.arc(464, horizonY - 52, 10, 0, Math.PI * 2);
  londonContext.fill();
  londonContext.strokeStyle = "#765328";
  londonContext.lineWidth = 2;
  londonContext.beginPath();
  londonContext.moveTo(464, horizonY - 52);
  londonContext.lineTo(464, horizonY - 60);
  londonContext.moveTo(464, horizonY - 52);
  londonContext.lineTo(471, horizonY - 48);
  londonContext.stroke();

  londonContext.strokeStyle = "rgba(255, 255, 255, 0.32)";
  londonContext.lineWidth = 3;
  londonContext.beginPath();
  londonContext.moveTo(120, 38);
  londonContext.lineTo(190, 108);
  londonContext.moveTo(504, 28);
  londonContext.lineTo(448, 118);
  londonContext.stroke();
  londonContext.restore();

  londonContext.restore();

  const windowGlass = londonContext.createLinearGradient(0, windowY, 0, windowY + windowHeight);
  windowGlass.addColorStop(0, "rgba(255, 255, 255, 0.22)");
  windowGlass.addColorStop(0.4, "rgba(255, 255, 255, 0.05)");
  windowGlass.addColorStop(1, "rgba(255, 248, 238, 0.12)");
  londonContext.fillStyle = windowGlass;
  londonContext.beginPath();
  londonContext.roundRect(windowX, windowY, windowWidth, windowHeight, 84);
  londonContext.fill();

  londonContext.strokeStyle = "rgba(105, 72, 43, 0.92)";
  londonContext.lineWidth = 16;
  londonContext.beginPath();
  londonContext.roundRect(windowX, windowY, windowWidth, windowHeight, 84);
  londonContext.stroke();

  londonContext.strokeStyle = "rgba(246, 233, 214, 0.72)";
  londonContext.lineWidth = 5;
  londonContext.beginPath();
  londonContext.roundRect(
    windowX + 8,
    windowY + 8,
    windowWidth - 16,
    windowHeight - 16,
    74,
  );
  londonContext.stroke();

  londonContext.strokeStyle = "rgba(109, 79, 49, 0.72)";
  londonContext.lineWidth = 6;
  londonContext.beginPath();
  londonContext.moveTo(windowX + windowWidth / 2, 24);
  londonContext.lineTo(windowX + windowWidth / 2, 228);
  londonContext.stroke();

  londonContext.strokeStyle = "rgba(255, 255, 255, 0.26)";
  londonContext.lineWidth = 5;
  londonContext.beginPath();
  londonContext.moveTo(126, 34);
  londonContext.lineTo(202, 120);
  londonContext.moveTo(246, 28);
  londonContext.lineTo(304, 116);
  londonContext.stroke();

  londonContext.fillStyle = "#b28a61";
  londonContext.beginPath();
  londonContext.roundRect(96, 214, 428, 42, 18);
  londonContext.fill();
  londonContext.fillStyle = "#8a6546";
  londonContext.fillRect(96, 244, 428, 14);
  londonContext.fillStyle = "#67472e";
  londonContext.fillRect(96, 256, 428, 24);

  londonContext.fillStyle = "rgba(50, 34, 24, 0.8)";
  [
    { x: 162, y: 224, r: 17 },
    { x: 224, y: 230, r: 14 },
    { x: 398, y: 226, r: 16 },
    { x: 454, y: 232, r: 13 },
  ].forEach((figure) => {
    londonContext.beginPath();
    londonContext.arc(figure.x, figure.y, figure.r, 0, Math.PI * 2);
    londonContext.fill();
  });
  londonContext.fillRect(146, 240, 34, 26);
  londonContext.fillRect(212, 243, 28, 22);
  londonContext.fillRect(384, 241, 32, 24);
  londonContext.fillRect(444, 246, 22, 18);

  londonContext.fillStyle = "rgba(255, 255, 255, 0.16)";
  londonContext.beginPath();
  londonContext.arc(164, 216, 14, Math.PI * 1.08, Math.PI * 1.95);
  londonContext.arc(400, 219, 14, Math.PI * 1.08, Math.PI * 1.95);
  londonContext.fill();
}

function londonLoop(timestamp) {
  if (!londonStartTime) {
    londonStartTime = timestamp;
  }

  const elapsedSeconds = (timestamp - londonStartTime) / 1000;
  drawLondonScene(elapsedSeconds);
  londonAnimationFrame = window.requestAnimationFrame(londonLoop);
}

function openLondonModal() {
  londonModal.classList.remove("hidden");
  londonStatus.textContent =
    "You are inside the London Eye capsule as it rises over the city.";
  londonStartTime = 0;
  window.cancelAnimationFrame(londonAnimationFrame);
  londonAnimationFrame = window.requestAnimationFrame(londonLoop);
}

function closeLondonModal() {
  londonModal.classList.add("hidden");
  window.cancelAnimationFrame(londonAnimationFrame);
}

function createSolvedJigsawTiles() {
  return Array.from({ length: 9 }, (_, index) => index);
}

function shuffleTiles(tiles) {
  const shuffled = [...tiles];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function createJigsawTiles() {
  let tiles = createSolvedJigsawTiles();
  while (tiles.every((value, index) => value === index)) {
    tiles = shuffleTiles(tiles);
  }
  return tiles;
}

function isJigsawSolved(tiles) {
  return (
    Array.isArray(tiles) &&
    tiles.length === 9 &&
    tiles.every((value, index) => value === index)
  );
}

function getJigsawBackgroundPosition(pieceIndex) {
  const x = pieceIndex % 3;
  const y = Math.floor(pieceIndex / 3);
  return `${(x / 2) * 100}% ${(y / 2) * 100}%`;
}

function renderJigsawBoard() {
  jigsawBoard.innerHTML = "";

  jigsawTiles.forEach((pieceIndex, tileIndex) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "jigsaw-tile";
    if (jigsawSelectedIndex === tileIndex) {
      tile.classList.add("jigsaw-tile--selected");
    }
    if (isJigsawSolved(jigsawTiles)) {
      tile.classList.add("jigsaw-tile--solved");
    }
    tile.style.backgroundImage = `url("${minneapolisPuzzleImageSrc}")`;
    tile.style.backgroundPosition = getJigsawBackgroundPosition(pieceIndex);
    tile.setAttribute("aria-label", `Puzzle tile ${tileIndex + 1}`);
    tile.addEventListener("click", () => {
      handleJigsawTileClick(tileIndex);
    });
    jigsawBoard.appendChild(tile);
  });
}

function updateJigsawStatus(message) {
  jigsawStatus.textContent = message;
}

function setJigsawCompletionUi(isComplete) {
  jigsawCompleteBanner.classList.toggle("hidden", !isComplete);
  jigsawStatus.classList.toggle("jigsaw-status--complete", isComplete);
  jigsawCloseButton.textContent = isComplete ? "Continue" : "Exit";
}

function handleJigsawTileClick(tileIndex) {
  if (isJigsawSolved(jigsawTiles)) {
    return;
  }

  if (jigsawSelectedIndex === null) {
    jigsawSelectedIndex = tileIndex;
    renderJigsawBoard();
    setJigsawCompletionUi(false);
    updateJigsawStatus("Select one more tile to swap.");
    return;
  }

  if (jigsawSelectedIndex === tileIndex) {
    jigsawSelectedIndex = null;
    renderJigsawBoard();
    setJigsawCompletionUi(false);
    updateJigsawStatus("Swap two tiles at a time until the picture is complete.");
    return;
  }

  [jigsawTiles[jigsawSelectedIndex], jigsawTiles[tileIndex]] = [
    jigsawTiles[tileIndex],
    jigsawTiles[jigsawSelectedIndex],
  ];
  jigsawSelectedIndex = null;
  renderJigsawBoard();

  if (isJigsawSolved(jigsawTiles)) {
    markStopActivityCompleted("minneapolis");
    setJigsawCompletionUi(true);
    updateJigsawStatus("Puzzle complete. Continue to head to Kitchener.");
    renderDestination();
  } else {
    setJigsawCompletionUi(false);
    updateJigsawStatus("Swap two tiles at a time until the picture is complete.");
  }
}

function openJigsawModal() {
  if (!jigsawTiles.length) {
    jigsawTiles = state.completedActivities.minneapolis
      ? createSolvedJigsawTiles()
      : createJigsawTiles();
  }

  if (state.completedActivities.minneapolis) {
    jigsawTiles = createSolvedJigsawTiles();
    setJigsawCompletionUi(true);
    updateJigsawStatus("Puzzle complete. Continue to head to Kitchener.");
  } else {
    setJigsawCompletionUi(false);
    updateJigsawStatus("Swap two tiles at a time until the picture is complete.");
  }

  jigsawSelectedIndex = null;
  renderJigsawBoard();
  jigsawModal.classList.remove("hidden");
}

function closeJigsawModal() {
  jigsawModal.classList.add("hidden");
}

function openPhotoModal() {
  photoModal.classList.remove("hidden");
}

function closePhotoModal() {
  photoModal.classList.add("hidden");
}

beginButton.addEventListener("click", beginJourney);
nextButton.addEventListener("click", moveToNextDestination);
restartButton.addEventListener("click", restartJourney);
activityButton.addEventListener("click", handleActivityOpen);
saveMapKeyButton.addEventListener("click", saveMapsDemoKey);
clearMapKeyButton.addEventListener("click", clearMapsDemoKey);

mapKeyInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    saveMapsDemoKey();
  }
});

document.querySelectorAll(".modal-close").forEach((button) => {
  button.addEventListener("click", () => {
    handleModalClose(button.dataset.close);
  });
});

cricketCanvas.addEventListener("click", swingBat);

window.addEventListener("keydown", (event) => {
  if (!cricketModal.classList.contains("hidden") && event.code === "Space") {
    event.preventDefault();
    swingBat();
    return;
  }

  if (event.key !== "Escape") {
    return;
  }

  if (!cricketModal.classList.contains("hidden")) {
    handleModalClose("cricket");
  } else if (!dishModal.classList.contains("hidden")) {
    handleModalClose("dish");
  } else if (!londonModal.classList.contains("hidden")) {
    handleModalClose("london-eye");
  } else if (!jigsawModal.classList.contains("hidden")) {
    handleModalClose("jigsaw");
  } else if (!photoModal.classList.contains("hidden")) {
    handleModalClose("photo");
  }
});

renderDestination();
currentMapsDemoKey = getStoredMapsDemoKey();
initializeGoogleMapIfPossible();

window.__geo26ApplyKey = saveMapsDemoKey;
window.__geo26ClearKey = clearMapsDemoKey;
