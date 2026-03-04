import type { LightboxItem } from "../components/Lightbox";
import type { DetailItem } from "../components/DetailOverlay";

export function buildTbilisiContent(t: any) {
  return {
    brand: t.brand,

    nav: [
      { id: "about", label: t.nav.about },
      { id: "gallery", label: t.nav.gallery },
      { id: "programs", label: t.nav.programs },
      { id: "history", label: t.nav.history },
      { id: "location", label: t.nav.location },
      { id: "donate", label: t.nav.donate },
    ],

    hero: {
      badge: t.hero.badge,
      titleTop: t.hero.titleTop,
      titleEm: t.hero.titleEm,
      subtitle: t.hero.subtitle,
      cta1: { href: "#about", label: t.hero.cta1 },
      cta2: { href: "#location", label: t.hero.cta2 },
      // Replace with scouting hero image later:
      backgroundImage:
        "https://images.unsplash.com/photo-1520975682071-a57f4fcd2cbd?auto=format&fit=crop&w=2400&q=70",
      scroll: t.hero.scroll,
    },

    about: {
      label: t.about.label,
      titleHtml: t.about.title,
      paragraphs: [t.about.p1, t.about.p2, t.about.p3],
      stats: [
        { num: "30+", label: t.about.stats1 },
        { num: "50+", label: t.about.stats2 },
        { num: "10+", label: t.about.stats3 },
      ],
      images: {
        main:
          "https://images.unsplash.com/photo-1501706362039-c6e16f9c7b2c?auto=format&fit=crop&w=1400&q=70",
        accent:
          "https://images.unsplash.com/photo-1520975867597-0f1798c5c64c?auto=format&fit=crop&w=1000&q=70",
        yearText: "1994",
      },
    },

    gallery: {
      label: t.gallery.label,
      titleHtml: t.gallery.title,
      desc: t.gallery.desc,
      items: [
        {
          src: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1600&q=70",
          caption: "Camp moments",
          mapsUrl: "https://maps.google.com",
        },
        {
          src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=70",
          caption: "Hike & nature",
          mapsUrl: "https://maps.google.com",
        },
        {
          src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=70",
          caption: "Teamwork",
          mapsUrl: "https://maps.google.com",
        },
        {
          src: "https://images.unsplash.com/photo-1499696010181-7b8b50f57c9a?auto=format&fit=crop&w=1600&q=70",
          caption: "Service action",
          mapsUrl: "https://maps.google.com",
        },
      ] satisfies LightboxItem[],
    },

    programs: {
      label: t.programs.label,
      titleHtml: t.programs.title,
      desc: t.programs.desc,
      cards: [
        {
          icon: "🧭",
          name: "Cubs / Junior",
          desc: "Basics of scouting, games, teamwork, nature safety.",
        },
        {
          icon: "🏕️",
          name: "Scouts",
          desc: "Outdoor skills, navigation, camping, community projects.",
        },
        {
          icon: "🛟",
          name: "Explorers",
          desc: "Leadership, first aid, project planning, expeditions.",
        },
        {
          icon: "🔥",
          name: "Leaders",
          desc: "Volunteer training, mentoring patrols, organizing events.",
        },
      ],
      learnMore: t.programs.learnMore,
    },

    programDetails: [
      {
        icon: "🧭",
        title: "Cubs / Junior",
        subtitle: "Learn by doing",
        heroImage:
          "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2400&q=70",
        meta: [
          { label: "Age", value: "7–11" },
          { label: "Schedule", value: "Weekly meetings" },
        ],
        sections: [
          {
            title: "What they learn",
            paragraphs: [
              "Teamwork, basic outdoor habits, safe exploration, helping others.",
            ],
          },
          {
            title: "Badges",
            paragraphs: ["Nature, community, creativity, basic first-aid."],
          },
        ],
        externalUrl: "https://maps.google.com",
        externalLabel: "Open location",
      },
      {
        icon: "🏕️",
        title: "Scouts",
        subtitle: "Outdoor adventure",
        heroImage:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=70",
        meta: [
          { label: "Age", value: "12–15" },
          { label: "Focus", value: "Camping + skills" },
        ],
        sections: [
          {
            title: "Skills",
            paragraphs: ["Navigation, camp setup, cooking, knotting, teamwork."],
          },
          {
            title: "Service",
            paragraphs: ["Community actions, charity, local partnerships."],
          },
        ],
        externalUrl: "https://maps.google.com",
        externalLabel: "Open location",
      },
      {
        icon: "🛟",
        title: "Explorers",
        subtitle: "Leadership & projects",
        heroImage:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=70",
        meta: [
          { label: "Age", value: "16–20" },
          { label: "Focus", value: "Projects + expeditions" },
        ],
        sections: [
          {
            title: "Leadership",
            paragraphs: ["Plan activities, manage teams, run projects safely."],
          },
          {
            title: "Training",
            paragraphs: ["First aid, risk management, mentoring younger scouts."],
          },
        ],
        externalUrl: "https://maps.google.com",
        externalLabel: "Open location",
      },
      {
        icon: "🔥",
        title: "Leaders",
        subtitle: "Volunteer development",
        heroImage:
          "https://images.unsplash.com/photo-1501706362039-c6e16f9c7b2c?auto=format&fit=crop&w=2400&q=70",
        meta: [
          { label: "Type", value: "Volunteers" },
          { label: "Focus", value: "Mentorship" },
        ],
        sections: [
          {
            title: "Role",
            paragraphs: ["Train youth leaders, run programs, support patrols."],
          },
          {
            title: "Operations",
            paragraphs: ["Safety, partnerships, fundraising, administration."],
          },
        ],
        externalUrl: "https://maps.google.com",
        externalLabel: "Open location",
      },
    ] satisfies DetailItem[],

    history: {
      label: t.history.label,
      titleHtml: t.history.title,
      // Keep it neutral and factual (you can later replace with your exact timeline)
      timeline: [
        { year: "1994", title: "Founded", text: "Modern scouting org founded in Georgia." },
        { year: "WOSM", title: "International membership", text: "Georgia is represented in WOSM through the national org." },
        { year: "Regions", title: "Regional growth", text: "Regional organizations like Kvemo Kartli and Samegrelo have strong local presence." },
      ],
    },

    contact: {
      label: t.contact.label,
      titleHtml: t.contact.title,
      h3: t.contact.h3,
      details: [
        { icon: "📍", strong: t.contact.addressS, text: t.contact.addressT },
        { icon: "🕐", strong: t.contact.hoursS, text: t.contact.hoursT },
        { icon: "🚌", strong: t.contact.transportS, text: t.contact.transportT },
      ],
      mapEmbedUrl:
        "https://www.google.com/maps?q=Tbilisi&output=embed",
      mapCtaLabel: t.contact.cta,
      mapCtaUrl: "https://maps.google.com?q=Tbilisi",
    },

    donate: {
      label: t.donate.label,
      titleHtml: t.donate.title,
      desc: t.donate.desc,
      ibanLabel: t.donate.iban,
      ibanValue: "GE00TB000000000000000000", // TODO replace with real IBAN
      copyLabel: t.donate.copy,
      copiedLabel: t.donate.copied,
      note: t.donate.note,
    },

    footer: t.footer,
  };
}