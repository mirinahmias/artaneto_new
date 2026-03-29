export type SingleModelItem = {
  fileName: string;
  displayName: string;
  description: string;
  tags: string[];
};

export type SingleModelCategory = {
  id: string;
  slug: string;
  title: string;
  englishTitle: string;
  shortDescription: string;
  heroDescription: string;
  items: SingleModelItem[];
};

const createItems = (
  names: string[],
  prefix: string,
  description: string,
  tags: string[] = ["יחידה", "להרכבה אישית"]
): SingleModelItem[] =>
  names.map((fileName, index) => ({
    fileName,
    displayName: `${prefix} ${index + 1}`,
    description,
    tags,
  }));

export const singleModelsData: SingleModelCategory[] = [
  {
    id: "memories",
    slug: "memories",
    title: "זיכרונות",
    englishTitle: "Memories",
    shortDescription: "זיכרון, עקבות, עבר וסיפור אישי.",
    heroDescription:
      "מודלים מתוך עולם של זיכרון, עקבות, שכבות עבר ופרטים טעונים במשמעות אישית.",
    items: createItems(
      [
        "angel_1",
        "car-5",
        "girl_dol",
        "global_suitcase",
        "hands_candel",
        "pocket_watch",
        "rocking_horse",
        "vintage-phone",
      ],
      "זיכרון",
      "מודל מתוך עולם של זיכרון, עקבות וסיפור אישי."
    ),
  },

  {
    id: "time",
    slug: "time",
    title: "זמן",
    englishTitle: "Time",
    shortDescription: "מחזוריות, שינוי, תנועה ורגעים שנשמרו.",
    heroDescription:
      "מודלים על זמן, מחזוריות, תנועה, המתנה, שינוי ורגעים שנחרטים בזיכרון.",
    items: createItems(
      [
        "alarm_clock",
        "clock_1",
        "clock_2",
        "hourglass_2",
        "infinity_birds",
        "man_clock",
        "pocket_watch",
        "sun_moon_3",
      ],
      "זמן",
      "מודל מתוך עולם של זמן, מחזוריות ותנועה."
    ),
  },

  {
    id: "growth",
    slug: "growth",
    title: "צמיחה",
    englishTitle: "Growth",
    shortDescription: "התפתחות, זריעה, תקווה והתהוות.",
    heroDescription:
      "מודלים על התפתחות, זריעה, התחלה חדשה, שורשים, פריחה ותהליכי התהוות.",
    items: createItems(
      [
        "hand_leaf",
        "hands_feaf_1",
        "leaf_2",
        "lotus",
        "rimon",
        "rose_2",
        "sunrise",
        "tree_1",
      ],
      "צמיחה",
      "מודל מתוך עולם של צמיחה, התפתחות והתחדשות."
    ),
  },

  {
    id: "luck",
    slug: "luck",
    title: "מזל",
    englishTitle: "Luck",
    shortDescription: "סימנים, אמונה, ברכה וצירופים נדירים.",
    heroDescription:
      "מודלים של מזל, סימנים מבורכים, אנרגיה חיובית, הגנות וצירופים נדירים.",
    items: createItems(
      [
        "777",
        "beetle_1",
        "cards_1",
        "clover",
        "dice",
        "Hamsa",
        "horseshoe_1",
        "shooting_star_1",
      ],
      "מזל",
      "מודל מתוך עולם של מזל, סימנים וברכה."
    ),
  },

  {
    id: "balance",
    slug: "balance",
    title: "איזון",
    englishTitle: "Balance",
    shortDescription: "שיווי משקל, הרמוניה, ניגודים וחיבור.",
    heroDescription:
      "מודלים על שיווי משקל, הרמוניה, חיבור בין ניגודים ותנועה מאוזנת.",
    items: createItems(
      [
        "balerina_3",
        "doubel_spiral",
        "libra_1",
        "road_path.3r",
        "stons_1",
        "sun_moon_1",
        "tree_man",
        "yang",
      ],
      "איזון",
      "מודל מתוך עולם של איזון, הרמוניה וחיבור."
    ),
  },

  {
    id: "love",
    slug: "love",
    title: "אהבה",
    englishTitle: "Love",
    shortDescription: "לב, קשר, אינטימיות וחיבור אנושי.",
    heroDescription:
      "מודלים העוסקים בלב, קשר, אינטימיות, תשוקה וחיבור בין אנשים.",
    items: createItems(
      ["Cupid", "H-01", "H-04", "H-08", "H-11", "hand_rose", "lips", "Rose_2"],
      "אהבה",
      "מודל מתוך עולם של אהבה, לב וחיבור אנושי."
    ),
  },

  {
    id: "journey",
    slug: "journey",
    title: "מסעות",
    englishTitle: "Journey",
    shortDescription: "דרך, תנועה, חצייה ומעבר.",
    heroDescription:
      "מודלים על דרך, תנועה, חצייה, מעבר, יעד ומסע אישי או גיאוגרפי.",
    items: createItems(
      [
        "airplan",
        "car-5",
        "compass_1",
        "footprint",
        "globe_suitcase",
        "path_stones",
        "road_path",
        "ship",
        "wheel",
      ],
      "מסע",
      "מודל מתוך עולם של דרך, מסע ותנועה."
    ),
  },

  {
    id: "freedom",
    slug: "freedom",
    title: "חופש",
    englishTitle: "Freedom",
    shortDescription: "שחרור, אוויר, תעופה ומרחב.",
    heroDescription:
      "מודלים על חופש, שחרור, תעופה, אוויר פתוח, ניתוק מכבלים ומרחב.",
    items: createItems(
      [
        "bird_ring",
        "boat",
        "butherfly_4",
        "chain",
        "feather_2",
        "free_all",
        "gate_1",
        "sunrise",
      ],
      "חופש",
      "מודל מתוך עולם של חופש, שחרור ומרחב."
    ),
  },

  {
    id: "hope",
    slug: "hope",
    title: "תקווה",
    englishTitle: "Hope",
    shortDescription: "אור, המשכיות, אמונה והתחלה חדשה.",
    heroDescription:
      "מודלים של אור, תפילה, המשכיות, אמונה, תקווה והתחלה חדשה.",
    items: createItems(
      [
        "butherfly_3",
        "candel",
        "hands_boy",
        "hands_feaf_2",
        "hope_ballon",
        "infinity_birds",
        "OWL_3",
        "pray",
        "sunrise",
      ],
      "תקווה",
      "מודל מתוך עולם של תקווה, אור ואמונה."
    ),
  },

  {
    id: "protection",
    slug: "protection",
    title: "הגנה",
    englishTitle: "Protection",
    shortDescription: "שמירה, כוח, גבולות והגנה פנימית.",
    heroDescription:
      "מודלים של שמירה, גבולות, כוח פנימי, הגנה סמלית ונוכחות מגינה.",
    items: createItems(
      [
        "anchor_1",
        "eye_horus_1",
        "Hamsa_2",
        "key_1",
        "lock_2",
        "OWL_1",
        "shild_1",
        "sword",
      ],
      "הגנה",
      "מודל מתוך עולם של הגנה, שמירה וכוח פנימי."
    ),
  },
];

export const singleModelsCategoryOrder = singleModelsData.map(
  (category) => category.slug
);

export function getSingleModelsCategory(slug: string) {
  return singleModelsData.find((category) => category.slug === slug);
}