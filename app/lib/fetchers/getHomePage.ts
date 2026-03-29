export async function getHomePage() {
  return {
    hero: {
      eyebrow: "ArtNeto · אמנות מודולרית עם נוכחות שקטה",
      title: "אמנות מודולרית שנבנית מזיכרון, חומר וסמל",
      description:
        "ArtNeto יוצרת עבודות קיר מודולריות בעלות עומק, טקסטורה ונוכחות פיסולית — בין אובייקט, זיכרון וסיפור.",
      primaryCtaLabel: "לצפייה בעבודות",
      primaryCtaHref: "/works",
      secondaryCtaLabel: "יצירה בהתאמה אישית",
      secondaryCtaHref: "/contact",
    },

    featuredWorks: [
      {
        title: "לב שבור / לב שומר",
        description: "עבודה מודולרית על רגש, הגנה ופגיעוּת.",
      },
      {
        title: "מפתח וזיכרון",
        description: "סמליות של כניסה, נעילה וזיכרון.",
      },
      {
        title: "זמן עצור",
        description: "קומפוזיציה חומרית סביב זמן ושבר.",
      },
    ],

    collections: [
      {
        title: "זיכרון",
        description: "עבודות על עקבות ושכבות.",
      },
      {
        title: "מעברים",
        description: "תנועה בין מצבים.",
      },
      {
        title: "צמיחה",
        description: "שפה של התחלה והתפתחות.",
      },
    ],

    concept: {
      text: "העבודות של ArtNeto נעות בין תבליט, אובייקט וזיכרון. כל מודול עומד בפני עצמו אך מקבל עומק נוסף כחלק ממכלול.",
    },

    cta: {
      title: "רוצה לבנות עבודה ייחודית לחלל שלך?",
      description: "ניתן ליצור קומפוזיציה מותאמת אישית.",
      label: "לדבר על יצירה",
      href: "/contact",
    },
  };
}