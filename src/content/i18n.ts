export type Lang = "en" | "ka";

type Copy = ReturnType<typeof en>;

export function getCopy(lang: Lang): Copy {
  return lang === "ka" ? ka() : en();
}

function en() {
  return {
    brand: { name: "Tbilisi", accent: "Scouts" },

    nav: {
      about: "About",
      gallery: "Gallery",
      programs: "Programs",
      events: "Events",
      history: "History",
      location: "Contact",
      join: "Join",
      donate: "Donate",
    },

    hero: {
      badge: "Since 1994 · Tbilisi, Georgia",
      titleTop: "Tbilisi",
      titleEm: "Scouts",
      subtitle: "Official community hub for scouting in the capital",
      cta1: "Discover Scouting",
      cta2: "Get Directions",
      scroll: "Scroll",
    },

    about: {
      label: "Our Story",
      title: "Growing <em>leaders</em><br>through adventure & service",
      p1: "Scouting develops young people through practical skills, outdoor education, teamwork, and civic responsibility.",
      p2: "In Tbilisi, we focus on weekly patrol meetings, camps, leadership training, and community service projects.",
      p3: "This website is designed to become the main hub for news, events, registration, and donations.",
      stats1: "Years of Movement",
      stats2: "Community Projects",
      stats3: "Active Patrols",
    },

    gallery: {
      label: "Media",
      title: "Through the <em>Lens</em>",
      desc: "Camps, trainings, hikes, service actions — real scouting life in Tbilisi.",
      viewOnMaps: "Open",
    },

    programs: {
      label: "What we do",
      title: "Programs & <em>Sections</em>",
      desc: "Age-based sections with weekly activities and progressive badges.",
      learnMore: "Learn More",
    },

    history: {
      label: "Movement",
      title: "Scouting in <em>Georgia</em>",
    },

    contact: {
      label: "Contact",
      title: "Visit & <em>Reach us</em>",
      h3: "Getting in touch",
      addressS: "Address",
      addressT: "Tbilisi, Georgia (set exact HQ address later)",
      hoursS: "Hours",
      hoursT: "Weekly meetings + planned events",
      transportS: "Public Transport",
      transportT: "Metro + bus routes depend on meeting point",
      cta: "Open in Google Maps",
    },

    donate: {
      label: "Support",
      title: "Donate & <em>Help youth</em>",
      desc: "Donations support camps, equipment, scholarships, and community service.",
      iban: "IBAN",
      copy: "Copy IBAN",
      copied: "Copied!",
      note: "Tip: add “Donation” in the transfer note.",
    },

    footer: {
      about: "We develop youth through outdoor adventure, leadership and service.",
      quick: "Quick Links",
      programs: "Programs",
      events: "Events",
      contact: "Contact",
      donate: "Donate",
      rights: "© " + new Date().getFullYear() + " Tbilisi Scouts. All rights reserved.",
    },
  };
}

function ka() {
  return {
    brand: { name: "თბილისი", accent: "სკაუტები" },

    nav: {
      about: "ჩვენ შესახებ",
      gallery: "გალერეა",
      programs: "პროგრამები",
      events: "ღონისძიებები",
      history: "ისტორია",
      location: "კონტაქტი",
      join: "გაწევრიანება",
      donate: "დონაცია",
    },

    hero: {
      badge: "1994 წლიდან · თბილისი, საქართველო",
      titleTop: "თბილისის",
      titleEm: "სკაუტები",
      subtitle: "სკაუტური მოძრაობის ოფიციალური ჰაბი დედაქალაქში",
      cta1: "გაიცანი სკაუტინგი",
      cta2: "მისამართი რუკაზე",
      scroll: "ჩასქროლე",
    },

    about: {
      label: "ჩვენი გზა",
      title: "ლიდერების <em>აღზრდა</em><br>თავგადასავლითა და სამსახურით",
      p1: "სკაუტინგი ავითარებს ახალგაზრდებს პრაქტიკული უნარებით, ბუნებაში სწავლით, გუნდურობითა და მოქალაქეობრივი პასუხისმგებლობით.",
      p2: "თბილისში ვაკეთებთ ყოველკვირეულ პატრულებს, ბანაკებს, ლიდერობის ტრენინგებს და საქველმოქმედო/საზოგადოებრივ აქტივობებს.",
      p3: "ეს ვებგვერდი იქნება ახალი ამბების, ღონისძიებების, რეგისტრაციის და დონაციის მთავარი ცენტრი.",
      stats1: "მოძრაობის წლები",
      stats2: "საზოგადოებრივი პროექტები",
      stats3: "აქტიური პატრულები",
    },

    gallery: {
      label: "მედია",
      title: "<em>კადრებში</em>",
      desc: "ბანაკები, ტრენინგები, ლაშქრობები, აქციები — სკაუტინგი რეალურ ცხოვრებაში.",
      viewOnMaps: "გახსნა",
    },

    programs: {
      label: "რას ვაკეთებთ",
      title: "პროგრამები & <em>სექციები</em>",
      desc: "ასაკობრივი სექციები — ყოველკვირეული აქტივობები და განვითარებაზე მორგებული ნიშნები.",
      learnMore: "დეტალურად",
    },

    history: {
      label: "მოძრაობა",
      title: "სკაუტინგი <em>საქართველოში</em>",
    },

    contact: {
      label: "კონტაქტი",
      title: "მოგვწერე & <em>გვესტუმრე</em>",
      h3: "დაგვიკავშირდი",
      addressS: "მისამართი",
      addressT: "თბილისი, საქართველო (შემდგომში ჩასვით ზუსტი მისამართი)",
      hoursS: "დრო",
      hoursT: "ყოველკვირეული შეხვედრები + დაგეგმილი ღონისძიებები",
      transportS: "ტრანსპორტი",
      transportT: "მეტრო/ავტობუსი — შეხვედრის ლოკაციაზეა დამოკიდებული",
      cta: "Google Maps",
    },

    donate: {
      label: "მხარდაჭერა",
      title: "დონაცია & <em>ახალგაზრდების დახმარება</em>",
      desc: "დონაცია ეხმარება ბანაკებს, აღჭურვილობას, სტიპენდიებს და საზოგადოებრივ პროექტებს.",
      iban: "IBAN",
      copy: "კოპირება",
      copied: "კოპირებულია!",
      note: "რჩევა: დანიშნულებაში მიუთითე “Donation”.",
    },

    footer: {
      about: "ვავითარებთ ახალგაზრდებს თავგადასავლით, ლიდერობითა და საზოგადოებრივი სამსახურით.",
      quick: "ბმულები",
      programs: "პროგრამები",
      events: "ღონისძიებები",
      contact: "კონტაქტი",
      donate: "დონაცია",
      rights: "© " + new Date().getFullYear() + " თბილისის სკაუტები. ყველა უფლება დაცულია.",
    },
  };
}