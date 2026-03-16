dataSetVersion = "2026-03-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Stage",
    key: "stage",
    tooltip: "Check this to only include certain stages",
    checked: false,
    sub: [
      { name: "STAGE 1 [S1]", key: "s1" },
      { name: "STAGE 2 [S2]", key: "s2" },
      { name: "STAGE 3 [S3]", key: "s3" },
      { name: "STAGE 4 [S4]", key: "s4" }
    ]
  },
  {
    name: "Filter by Branches",
    key: "branch",
    tooltip: "Check this to only include certain branches. Collab performances with members from multiple branches, are included if at least one performer belongs to a branch that is checked",
    checked: false,
    sub: [
      { name: "JP", tooltip: "Japanese Branch", key: "jp" },
      { name: "EN", tooltip: "English Branch", key: "en" },
      { name: "ID", tooltip: "Indonesian Branch", key: "id" }
    ]
  },
  {
    name: "YT Freeview Only",
    key: "notfree",
    tooltip: "Check this to only include songs present in the free preview portions on YouTube",
	checked: false
  },
  {
    name: "Exclude Covers",
    key: "cover",
    tooltip: "Check this to exclude covers of non-Hololive songs",
	checked: false
  },
  {
    name: "Exclude Originals",
    key: "original",
    tooltip: "Check this to exclude original Hololive songs",
	checked: false
  },
  {
    name: "Exclude Collabs",
    key: "collab",
    tooltip: "Check this to exclude collab performances. FuwaMoco is NOT counted as a collab performance",
	checked: false
  },
  {
    name: "Exclude Solos",
    key: "solo",
    tooltip: "Check this to exclude solo performances. FuwaMoco IS counted as a solo performance",
	checked: false
  },
  {
    name: "Exclude Title Tracks",
    key: "title",
    tooltip: "Check this to exclude title track performances (Color Rise Harmony, Our Bright Parade, Ridin On Dreams)"
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "[S1-01] Color Rise Harmony (Title Track 6th fes)",
    img: "6t7lXVL.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S1-02] Our Bright Parade (Title Track 4th fes)",
    img: "ZTP3s2P.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S1-03] Takane Lui - get lucky",
    img: "7CXH0vx.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-04] FuwaMoco - Lifetime Showtime",
    img: "XJ14ZP4.png",
    opts: {
      stage: ["s1"],
	  branch: ["en"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-05] Usada Pekora - Peko Peko!! Chicken Fever",
    img: "Bi696kb.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-06] Flare & Fubuki & Polka & Watame - Vivid Stampede!!!!",
    img: "Y4LWOUO.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S1-07] Yuzuki Choco - Got Cheat → Kimi No Byoushin",
    img: "S0cc2WW.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-08] Hakui Koyori - BAKU LOVE CHEMISTRY",
    img: "gUGSQCq.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-09] Yukihana Lamy - Muteki Honki da Survivor!",
    img: "rDjGZsr.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-10] Choco & Lui - HoloHawk → NoDistance",
    img: "RFDY9YY.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S1-11] Vestia Zeta - No Doubt (Official Hige Dandism)",
    img: "OPea5MM.png",
    opts: {
      stage: ["s1"],
	  branch: ["id"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S1-12] Nekomata Okayu - Non Delicious",
    img: "PLVCIFE.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-13] Ayame & Pekora & Zeta - Kaguya no Shiro de Odoirtai (Muse)",
    img: "3wvsur6.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp", "id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S1-14] FuwaMoco & Kobo - AI SCREAM! (AiScReam)",
    img: "K5A9u2a.png",
    opts: {
      stage: ["s1"],
	  branch: ["en", "id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S1-15] Ninomae Ina'nis - TAKO TAKOVER",
    img: "6y0yQnU.png",
    opts: {
      stage: ["s1"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-16] Omaru Polka - Muripo to Posi",
    img: "gNUGWa6.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-17] Shiranui Flare - Kakuu to Hontou → angel's ladder",
    img: "mHeHpUq.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-18] Kobo Kanaeru - Bake no Kawa",
    img: "Fv8pZ6a.png",
    opts: {
      stage: ["s1"],
	  branch: ["id"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-19] Nakiri Ayame - Hanafubuki",
    img: "SAuXuRZ.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-20] Ina & Okayu - Kurukuru Cruise",
    img: "BMyGKGs.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp", "en"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S1-21] FuwaMoco - DEMON'S RESiDENCE",
    img: "Pa7IggG.png",
    opts: {
      stage: ["s1"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-22] Tsunomaki Watame - Riddles We Share",
    img: "5EPOwYu.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-23] Shirakami Fubuki - Glow Embrace",
    img: "YL5yHeZ.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1-24] Koyori & Lamy - Snow Halation (Muse)",
    img: "6JbFHWb.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S1-25] Ridin' on Dreams (Title Track 7th fes)",
    img: "XHCvRB2.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp", "en", "id"],
	  notfree: true,
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S2-01] Color Rise Harmony (Title Track 6th fes)",
    img: "WUd7cp7.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S2-02] Our Bright Parade (Title Track 4th fes)",
    img: "NIDHLNx.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S2-03] Oozora Subaru - Love Me!",
    img: "unmFFag.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2-04] Takanashi Kiara - EGO",
    img: "Xpbt8fm.png",
    opts: {
      stage: ["s2"],
	  branch: ["en"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2-05] La+ Darkness - Yamitai Girl (Alfakyun)",
    img: "nGlVNKd.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2-06] Hololive Justice - ABOVE BELOW",
    img: "dUH3bLa.png",
    opts: {
      stage: ["s2"],
	  branch: ["en"],
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S2-07] Ookami Mio - NOROSHI",
    img: "NDC9YLi.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2-08] Elizabeth Rose Bloodflame - DISCOTHEQUE (Mizuki Nana)",
    img: "NXlSOKi.png",
    opts: {
      stage: ["s2"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2-09] Airani Iofifteen - Unison of Smiles (CURE IDOL)",
    img: "gW1v10W.png",
    opts: {
      stage: ["s2"],
	  branch: ["id"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2-10] Ollie & Mori (Guest) - Tengaku (Yuuyu)",
    img: "lzCktCv.png",
    opts: {
      stage: ["s2"],
	  branch: ["en", "id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S2-11] Gigi Murin - 1 (MOB CHOIR)",
    img: "hyspMN8.png",
    opts: {
      stage: ["s2"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2-12] Kureiji Ollie - Kureiji for you",
    img: "DiN3Qcb.png",
    opts: {
      stage: ["s2"],
	  branch: ["id"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2-13] Botan & Nene - Idol Life Extra Pack (iLiFE!)",
    img: "nQY98wA.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S2-14] Iofi & Sora & Noel (Guest) - Saijoukyuu ni Kawaii no! (Cho Tokimeki Sendenbu)",
    img: "R7Yp5Vd.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp", "id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S2-15] Cecilia Immergreen - nowhere (Kajiura Yuki)",
    img: "N9K8eZ4.png",
    opts: {
      stage: ["s2"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2-16] Raora Panthera - GachaxGacha ADVENTURE!",
    img: "2YeG8kl.png",
    opts: {
      stage: ["s2"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2-17] Momosuzu Nene - Karakara!",
    img: "63Byviw.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2-18] Shishiro Botan - boundary",
    img: "mbPGHOj.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2-19] Kiara & La+ - Glow in the Dark",
    img: "5G3v2e1.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp", "en"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S2-20] Sakura Miko - SAKIHOKORE AIDORU",
    img: "D9zqBNj.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2-21] Tokino Sora - Diva",
    img: "wtt09Wf.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2-22] Miko & Mio & Subaru & Fubuki (Guest) - Dotta Batta Chindochu!",
    img: "3zr69km.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S2-23] Ridin' on Dreams (Title Track 7th fes)",
    img: "qkN4QOX.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp", "en", "id"],
	  notfree: true,
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S3-01] Color Rise Harmony (Title Track 6th fes)",
    img: "6ZwqtV2.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S3-02] Our Bright Parade (Title Track 4th fes)",
    img: "t8vQVY9.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S3-03] Natsuiro Matsuri - Sparkling!!",
    img: "7GadKvR.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3-04] Pavolia Reine - Figure It Out",
    img: "SuGwWyD.png",
    opts: {
      stage: ["s3"],
	  branch: ["id"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3-05] Shirogane Noel - TREVIAN KNIGHT → Gyu Don Carnival!",
    img: "8fkFjY0.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3-06] Hololive FLOW GLOW - MAKE IT, BREAK IT",
    img: "inutFEM.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S3-07] IRyS - Carbonated Love → Escalate",
    img: "QaVzT3e.png",
    opts: {
      stage: ["s3"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3-08] Rindo Chihaya - Kaijuu no Hanauta (Vaundy)",
    img: "rFFIUe9.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3-09] Isaki Riona - Redo (Suzuki Konomi)",
    img: "V8oFcI2.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3-10] Reine & Shiori - Monitoring (DECO 27)",
    img: "GfmNpD8.png",
    opts: {
      stage: ["s3"],
	  branch: ["en", "id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S3-11] Mizumiya Su - snooze (wotaku)",
    img: "SLkaucU.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3-12] Shiori Novella - Monsters and Men",
    img: "WP59lkt.png",
    opts: {
      stage: ["s3"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3-13] IRyS & Risu - Rabbit Hole (DECO 27)",
    img: "ehOqYHI.png",
    opts: {
      stage: ["s3"],
	  branch: ["en", "id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S3-14] Luna & Noel & Subaru (Guest) - Matsuken Samba II (Kazuhiko Inoue)",
    img: "nNxU60g.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S3-15] Kikirara Vivi - Don't Cheat! (Koresawa)",
    img: "rFzBJ7F.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3-16] Himemori Luna - Nnasshoi Passion",
    img: "bq9huv8.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3-17] Ayunda & Risu - MIR//or",
    img: "rkpUlR5.png",
    opts: {
      stage: ["s3"],
	  branch: ["id"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3-18] Koganei Niko - Reason For Existence (Tsukuyomi)",
    img: "a59QcKg.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3-19] Kazama Iroha - My True Self → A letter only you can read.",
    img: "1gj1xxb.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3-20] Baelz & Matsuri - Kakumei Dualism (Mizuki Nana & T.M.Revolution)",
    img: "vEObDl6.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp", "en"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S3-21] AZKi - Mirai Campanella → Okey Dokey",
    img: "3fXjmWZ.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3-22] Hakos Baelz - Idol (YOASOBI)",
    img: "q1eitib.png",
    opts: {
      stage: ["s3"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3-23] AZKi & Iroha - AZUIRO BESTIE DAYS",
    img: "CT0xDL7.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S3-24] Ridin' on Dreams (Title Track 7th fes)",
    img: "7cjjle1.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp", "en", "id"],
	  notfree: true,
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S4-01] Color Rise Harmony (Title Track 6th fes)",
    img: "1QTQBqM.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S4-02] Our Bright Parade (Title Track 4th fes)",
    img: "Q0qwakI.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S4-03] Tokoyami Towa - Shirube",
    img: "gabMYxP.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-04] Nerissa Ravencroft - OYOME HOLIC",
    img: "tw8Ywp8.png",
    opts: {
      stage: ["s4"],
	  branch: ["en"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-05] Houshou Marine - A Horny Money World → Bishoujo Muzai Pirates",
    img: "Oy8TJub.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-06] Hololive ReGLOSS - Flashpoint",
    img: "UqByvFB.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S4-07] Koseki Bijou - ROCK IN!",
    img: "lDXtMqZ.png",
    opts: {
      stage: ["s4"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-08] Otonose Kanade - GREATEST",
    img: "7v97KV6.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-09] Roboco - withØ",
    img: "0rVQeAK.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-10] Moona & Nerissa - 100%",
    img: "eU0yenQ.png",
    opts: {
      stage: ["s4"],
	  branch: ["en", "id"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S4-11] Juufuutei Raden - JAPAN no Bijutsushi O BO E MA SHOW!",
    img: "WjDnZQq.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-12] Ichijou Ririka - Darling Dance (Kairiki bear)",
    img: "LUqwjkj.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S4-13] Bijou & Kaela & Kronii - GO!!! (FLOW)",
    img: "fHuXtwQ.png",
    opts: {
      stage: ["s4"],
	  branch: ["en", "id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S4-14] Aki & Anya & Roboco - Fatal (GEMN)",
    img: "2zkmvqz.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp", "id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S4-15] Kaela Kovalskia - Dragon Screamer (DA PUMP)",
    img: "RGzwKlx.png",
    opts: {
      stage: ["s4"],
	  branch: ["id"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S4-16] Moona Hoshinova - Distortion",
    img: "pJ4qJHx.png",
    opts: {
      stage: ["s4"],
	  branch: ["id"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-17] Anya Melfissa - Unknown Mother Goose (wowaka)",
    img: "qv1UPVB.png",
    opts: {
      stage: ["s4"],
	  branch: ["id"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S4-18] Ouro Kronii - STORM",
    img: "YaEI9Kf.png",
    opts: {
      stage: ["s4"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-19] Aki Rosenthal - Ibara",
    img: "XrcetQK.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-20] Marine & Suisei - Chatter Chatter",
    img: "4QUZM6O.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S4-21] Todoroki Hajime - Countach",
    img: "9ChZ7kf.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-22] Mori Calliope - LET'S JUST CRASH",
    img: "SegV6yG.png",
    opts: {
      stage: ["s4"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-23] Hoshimachi Suisei - Moonshot",
    img: "xbBAdV9.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S4-24] Mori & Towa - ChewyChewy → Gold Unbalance",
    img: "2bOFGER.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp", "en"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S4-25] Ridin' on Dreams (Title Track 7th fes)",
    img: "kngB4hm.png",
    opts: {
      stage: ["s4"],
	  branch: ["jp", "en", "id"],
	  notfree: true,
	  original: true,
	  collab: true,
	  title: true
    }
  }
];
