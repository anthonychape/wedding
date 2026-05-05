export const languages = {
  ja: "日本語",
  en: "English",
  fr: "Français",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "ja";

export const translations = {
  ja: {
    // Nav / Section titles
    greeting: "ご挨拶",
    profile: "プロフィール",
    eventDetails: "挙式・披露宴のご案内",
    access: "アクセス",
    gallery: "ギャラリー",
    countdown: "カウントダウン",
    rsvp: "出欠のご返信",

    // Hero
    weddingDate: "2026年10月24日（土）",
    weddingDateShort: "2026年10月24日（土）",
    scrollDown: "Scroll",
    metaDescription: "アントニーと夏生の結婚式のご案内です。",

    // Greeting
    greetingTitle: "ご挨拶",
    greetingDate: "2026年8月吉日",
    greetingBody: `皆様にはお健やかにお過ごしのことと
お慶び申し上げます

このたび私達は結婚式を挙げることになりました
つきましては皆様へ感謝の気持ちを込めて
粗餐をお楽しみいただきながらの披露宴を
催したいと思っております

ご多用のところ誠に恐縮ではございますが
ぜひご出席くださいますよう謹んでご案内申し上げます`,

    // Profile
    profileTitle: "Profile",
    groomName: "Anthony",
    groomNameJp: "アントニー",
    groomBio: "東京都在住。エンジニアとして働いています。趣味は料理と旅行。",
    brideName: "Natsuki",
    brideNameJp: "夏生",
    brideBio: "東京都在住。デザイナーとして働いています。趣味は写真と読書。",

    // Event
    eventTitle: "スケジュール",
    dateLabel: "日時",
    receptionDesk: "受付",
    ceremony: "挙式",
    party: "パーティー",
    receptionDeskTime: "16:15〜",
    ceremonyTime: "17:00〜",
    partyTime: "18:00〜",
    eventNote: "(当日は挙式の15分前までにお越しください)",
    venue: "レ アール ド セゾン・セージ",
    venueAddress: "〒390-0835 長野県松本市高宮東1-28",
    dressCode: "ドレスコード：セミフォーマル",
    date: "2026年10月24日（土）",

    // Access
    accessTitle: "アクセス",
    accessStation: "最寄り駅：JR松本駅よりタクシーで約5分\n（※松本駅から会場までの無料タクシーチケットを手配いたします）",
    accessBus: "バス：アルピコ交通 空港・朝日線で約10分、「征矢野口」下車 徒歩約3分",
    accessParking: "駐車場：無料駐車場をご利用いただけます（80台）",

    // Gallery
    galleryTitle: "ギャラリー",

    // Countdown
    countdownTitle: "カウントダウン",
    days: "日",
    hours: "時間",
    minutes: "分",
    seconds: "秒",

    // RSVP
    rsvpTitle: "出欠のご返信",
    rsvpDeadline: "ご返信期限：2026年9月19日（土）",
    nameLabel: "お名前",
    namePlaceholder: "山田 太郎",
    nameFuriganaLabel: "フリガナ",
    nameFuriganaPlaceholder: "ヤマダ タロウ",
    coAttendeesLabel: "ご連名",
    coAttendeesNote: "※4名までご入力いただけます",
    coAttendeePlaceholder: "山田 花子",
    coAttendeeFuriganaPlaceholder: "ヤマダ ハナコ",
    guestSideLabel: "いずれかをお選びください",
    groomGuest: "新郎ゲスト",
    brideGuest: "新婦ゲスト",
    phoneLabel: "電話番号",
    phonePlaceholder: "090-1234-5678",
    emailLabel: "メールアドレス",
    emailPlaceholder: "example@email.com",
    postalCodeLabel: "郵便番号",
    postalCodePlaceholder: "000-0000",
    addressLabel: "ご住所",
    addressPlaceholder: "東京都文京区...",
    attendanceLabel: "ご出欠",
    attending: "ご出席",
    notAttending: "ご欠席",
    guestCountLabel: "ご同伴者数（ご本人を含む）",
    dietaryLabel: "アレルギーについて",
    dietaryNote: "アレルギーなど食べられないものがございましたらご遠慮なくお書き添えください",
    dietaryPlaceholder: "例：甲殻類アレルギー",
    taxiLabel: "タクシーチケット",
    taxiNote: "松本駅から式場まで無料でご乗車いただけるタクシーチケットをご用意しています。\nご希望の方は、お知らせください。",
    taxiNotNeeded: "不要",
    taxiOneWay: "片道",
    taxiRoundTrip: "往復",
    messageLabel: "メッセージ",
    messagePlaceholder: "お二人へのメッセージをどうぞ",
    submit: "招待状に回答する",
    submitting: "送信中…",
    thankYouTitle: "ご返信ありがとうございます",
    thankYouMessage: "お会いできることを楽しみにしております。",
    thankYouNotAttending: "ご連絡ありがとうございます。またお会いできる日を楽しみにしております。",
    errorMessage: "送信に失敗しました。もう一度お試しください。",
    nameRequired: "お名前を入力してください",
    attendanceRequired: "ご出欠を選択してください",
    phoneRequired: "電話番号を入力してください",
    guestSideRequired: "いずれかを選択してください",
    requiredLabel: "必須",

    // Footer
    footerText: "皆様のお越しを心よりお待ちしております",

    // Language switcher
    langSwitch: "言語",
  },

  en: {
    greeting: "Greeting",
    profile: "Profile",
    eventDetails: "Event Details",
    access: "Access",
    gallery: "Gallery",
    countdown: "Countdown",
    rsvp: "RSVP",

    weddingDate: "Saturday, October 24, 2026",
    weddingDateShort: "2026.10.24 SAT",
    scrollDown: "Scroll",
    metaDescription: "You are invited to the wedding of Anthony and Natsuki.",

    greetingTitle: "Greeting",
    greetingDate: "August 2026",
    greetingBody: `Dear family and friends,

We are delighted to announce that we are getting married!

We would be truly honored to have you join us
on our special day as we celebrate
the beginning of our new journey together.

We sincerely hope you can attend
and share this joyful occasion with us.

With love,`,

    profileTitle: "Profile",
    groomName: "Anthony",
    groomNameJp: "アントニー",
    groomBio: "Based in Tokyo. Works as an engineer. Enjoys cooking and traveling.",
    brideName: "Natsuki",
    brideNameJp: "夏生",
    brideBio: "Based in Tokyo. Works as a designer. Enjoys photography and reading.",

    eventTitle: "Schedule",
    dateLabel: "Date:",
    receptionDesk: "Reception",
    ceremony: "Ceremony",
    party: "Party",
    receptionDeskTime: "4:15 PM–",
    ceremonyTime: "5:00 PM–",
    partyTime: "6:00 PM–",
    eventNote: "(Please arrive at least 15 minutes before the ceremony)",
    venue: "Les Halles de Saison Sage",
    venueAddress: "1-28 Takamiyahigashi, Matsumoto, Nagano 390-0835",
    dressCode: "Dress code: Semi-formal",
    date: "Saturday, October 24, 2026",

    accessTitle: "Access",
    accessStation: "Nearest station: JR Matsumoto Station — 5 min by taxi\n(Free taxi tickets from the station to the venue will be provided)",
    accessBus: "Bus: Alpico Kotsu (Airport/Asahi Line) for 10 min, get off at \"Soyanoguchi\" — 3 min walk",
    accessParking: "Parking: Free on-site parking available (80 spaces)",

    galleryTitle: "Gallery",

    countdownTitle: "Countdown",
    days: "Days",
    hours: "Hours",
    minutes: "Min",
    seconds: "Sec",

    rsvpTitle: "RSVP",
    rsvpDeadline: "Please reply by: September 19, 2026",
    nameLabel: "Your Name",
    namePlaceholder: "John Smith",
    nameFuriganaLabel: "",
    nameFuriganaPlaceholder: "",
    coAttendeesLabel: "Co-attendees",
    coAttendeesNote: "Up to 4 additional names",
    coAttendeePlaceholder: "Jane Smith",
    coAttendeeFuriganaPlaceholder: "",
    guestSideLabel: "Please select one",
    groomGuest: "Groom's Guest",
    brideGuest: "Bride's Guest",
    phoneLabel: "Phone Number",
    phonePlaceholder: "090-1234-5678",
    emailLabel: "Email",
    emailPlaceholder: "example@email.com",
    postalCodeLabel: "Postal Code",
    postalCodePlaceholder: "000-0000",
    addressLabel: "Address",
    addressPlaceholder: "Bunkyo-ku, Tokyo...",
    attendanceLabel: "Attendance",
    attending: "Attending",
    notAttending: "Not Attending",
    guestCountLabel: "Number of Guests (including yourself)",
    dietaryLabel: "Allergies",
    dietaryNote: "Please let us know if you have any food allergies or dietary restrictions",
    dietaryPlaceholder: "e.g. Shellfish allergy",
    taxiLabel: "Taxi Ticket",
    taxiNote: "We provide free taxi tickets from Matsumoto Station to the venue.\nPlease let us know if you need one.",
    taxiNotNeeded: "Not needed",
    taxiOneWay: "One-way",
    taxiRoundTrip: "Round-trip",
    messageLabel: "Message",
    messagePlaceholder: "A message for the couple",
    submit: "Submit RSVP",
    submitting: "Submitting…",
    thankYouTitle: "Thank you for your reply!",
    thankYouMessage: "We look forward to seeing you.",
    thankYouNotAttending: "Thank you for letting us know. We hope to see you again soon.",
    errorMessage: "Submission failed. Please try again.",
    nameRequired: "Name is required",
    attendanceRequired: "Please select your attendance",
    phoneRequired: "Phone number is required",
    guestSideRequired: "Please select one",
    requiredLabel: "Required",

    footerText: "We look forward to celebrating with you",

    langSwitch: "Language",
  },

  fr: {
    greeting: "Salutations",
    profile: "Profil",
    eventDetails: "Détails de l'événement",
    access: "Accès",
    gallery: "Galerie",
    countdown: "Compte à rebours",
    rsvp: "RSVP",

    weddingDate: "Samedi 24 octobre 2026",
    weddingDateShort: "2026.10.24 SAM",
    scrollDown: "Défiler",
    metaDescription: "Invitation au mariage d'Anthony et Natsuki.",

    greetingTitle: "Salutations",
    greetingDate: "Août 2026",
    greetingBody: `Chers famille et amis,

Nous avons le plaisir de vous annoncer notre mariage !

Nous serions très honorés de votre présence
pour célébrer avec nous
le début de notre nouvelle vie ensemble.

Nous espérons sincèrement que vous pourrez
vous joindre à nous pour cette joyeuse occasion.

Avec tout notre amour,`,

    profileTitle: "Profil",
    groomName: "Anthony",
    groomNameJp: "アントニー",
    groomBio: "Basé à Tokyo. Ingénieur. Passionné de cuisine et de voyages.",
    brideName: "Natsuki",
    brideNameJp: "夏生",
    brideBio: "Basée à Tokyo. Designer. Passionnée de photographie et de lecture.",

    eventTitle: "Programme",
    dateLabel: "Date:",
    receptionDesk: "Accueil",
    ceremony: "Cérémonie",
    party: "Fête",
    receptionDeskTime: "16h15–",
    ceremonyTime: "17h00–",
    partyTime: "18h00–",
    eventNote: "(Merci d'arriver au moins 15 minutes avant le début de la cérémonie)",
    venue: "Les Halles de Saison Sage",
    venueAddress: "1-28 Takamiyahigashi, Matsumoto, Nagano 390-0835",
    dressCode: "Code vestimentaire : Semi-formel",
    date: "Samedi 24 octobre 2026",

    accessTitle: "Accès",
    accessStation: "Gare la plus proche : Gare JR Matsumoto — 5 min en taxi\n(Des tickets de taxi gratuits vous seront fournis pour vous rendre au lieu de réception)",
    accessBus: "Bus : Alpico Kotsu (Ligne Aéroport/Asahi) pendant 10 min, arrêt « Soyanoguchi » — 3 min à pied",
    accessParking: "Parking : Parking gratuit sur place (80 places)",

    galleryTitle: "Galerie",

    countdownTitle: "Compte à rebours",
    days: "Jours",
    hours: "Heures",
    minutes: "Min",
    seconds: "Sec",

    rsvpTitle: "RSVP",
    rsvpDeadline: "Date limite de réponse : 19 septembre 2026",
    nameLabel: "Votre nom",
    namePlaceholder: "Jean Dupont",
    nameFuriganaLabel: "",
    nameFuriganaPlaceholder: "",
    coAttendeesLabel: "Accompagnants",
    coAttendeesNote: "Jusqu'à 4 personnes supplémentaires",
    coAttendeePlaceholder: "Marie Dupont",
    coAttendeeFuriganaPlaceholder: "",
    guestSideLabel: "Veuillez sélectionner",
    groomGuest: "Invité(e) du marié",
    brideGuest: "Invité(e) de la mariée",
    phoneLabel: "Téléphone",
    phonePlaceholder: "090-1234-5678",
    emailLabel: "E-mail",
    emailPlaceholder: "exemple@email.com",
    postalCodeLabel: "Code postal",
    postalCodePlaceholder: "000-0000",
    addressLabel: "Adresse",
    addressPlaceholder: "Bunkyo-ku, Tokyo...",
    attendanceLabel: "Présence",
    attending: "Présent(e)",
    notAttending: "Absent(e)",
    guestCountLabel: "Nombre d'invités (vous inclus)",
    dietaryLabel: "Allergies",
    dietaryNote: "Merci de nous informer de vos allergies alimentaires ou restrictions",
    dietaryPlaceholder: "Ex. : allergie aux crustacés",
    taxiLabel: "Ticket de taxi",
    taxiNote: "Nous fournissons des tickets de taxi gratuits de la gare de Matsumoto au lieu de réception.\nVeuillez nous indiquer si vous en avez besoin.",
    taxiNotNeeded: "Non merci",
    taxiOneWay: "Aller simple",
    taxiRoundTrip: "Aller-retour",
    messageLabel: "Message",
    messagePlaceholder: "Un message pour les mariés",
    submit: "Envoyer la réponse",
    submitting: "Envoi en cours…",
    thankYouTitle: "Merci pour votre réponse !",
    thankYouMessage: "Nous avons hâte de vous voir.",
    thankYouNotAttending: "Merci de nous avoir informés. Nous espérons vous revoir bientôt.",
    errorMessage: "L'envoi a échoué. Veuillez réessayer.",
    nameRequired: "Le nom est requis",
    attendanceRequired: "Veuillez sélectionner votre présence",
    phoneRequired: "Le numéro de téléphone est requis",
    guestSideRequired: "Veuillez sélectionner",    requiredLabel: "Requis",
    footerText: "Nous avons hâte de célébrer avec vous",

    langSwitch: "Langue",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["ja"];

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Lang;
  return defaultLang;
}
