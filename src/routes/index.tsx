import { useEffect, useRef, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  FileCheck2,
  Handshake,
  Instagram,
  Lightbulb,
  Menu,
  Moon,
  Network,
  RefreshCw,
  Sun,
  UsersRound,
  X,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import aboutPhoto from "@/assets/covara-about.webp";
import heroPhoto from "@/assets/covara-team-hero.webp";
import logoAsset from "@/assets/COVARA.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "كوفارا | حلول متكاملة للموارد البشرية والأعمال" },
      {
        name: "description",
        content:
          "تساعد كوفارا المؤسسات على استقطاب الكفاءات وبناء فرق أقوى من خلال حلول متكاملة للموارد البشرية والأعمال.",
      },
      { property: "og:title", content: "كوفارا | حلول متكاملة للموارد البشرية والأعمال" },
      {
        property: "og:description",
        content:
          "حلول التوظيف ودعم الموارد البشرية والتدريب والقوى العاملة للمؤسسات النامية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Language = "ar" | "en";
type Theme = "light" | "dark";

const navigation = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "careers", href: "#careers" },
  { key: "contact", href: "#contact" },
] as const;

const services: {
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: { en: "Recruitment & Headhunting", ar: "التوظيف واستقطاب الكفاءات" },
    description: {
      en: "Find and attract the right people through thoughtful search, professional selection, and a clear understanding of your team.",
      ar: "نعثر على الكفاءات المناسبة ونستقطبها من خلال بحث دقيق واختيار مهني وفهم واضح لاحتياجات فريقك.",
    },
    icon: UsersRound,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: { en: "HR Outsourcing", ar: "إسناد خدمات الموارد البشرية" },
    description: {
      en: "Bring dependable structure to HR operations, employee management, payroll administration, and everyday workforce needs.",
      ar: "ننظم عمليات الموارد البشرية وإدارة الموظفين والرواتب واحتياجات القوى العاملة اليومية.",
    },
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: { en: "Training & Development", ar: "التدريب والتطوير" },
    description: {
      en: "Build practical skills, improve workplace performance, and help people grow through focused development programs.",
      ar: "نطور المهارات العملية ونحسن الأداء ونساعد الأفراد على النمو من خلال برامج تطوير متخصصة.",
    },
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: { en: "Payroll & HR Support", ar: "الرواتب ودعم الموارد البشرية" },
    description: {
      en: "Keep essential people processes clear and organized with payroll processing, employee records, and administrative support.",
      ar: "نضمن وضوح وتنظيم العمليات الأساسية، من إعداد الرواتب وسجلات الموظفين إلى الدعم الإداري.",
    },
    icon: FileCheck2,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
  },
];

const processSteps = [
  { en: "Understand your business needs", ar: "نفهم احتياجات أعمالك" },
  { en: "Develop the right HR strategy", ar: "نضع استراتيجية الموارد البشرية المناسبة" },
  { en: "Implement tailored solutions", ar: "ننفذ الحلول المصممة لك" },
  { en: "Monitor and improve performance", ar: "نتابع الأداء ونعمل على تحسينه" },
];

const values: {
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: LucideIcon;
}[] = [
  {
    title: { en: "Empower", ar: "تمكين" },
    description: {
      en: "We help people and organizations build the skills and structure they need to grow.",
      ar: "نساعد الأفراد والمؤسسات على بناء المهارات والأنظمة اللازمة للنمو.",
    },
    icon: UsersRound,
  },
  {
    title: { en: "Transform", ar: "تطوير" },
    description: {
      en: "We turn workforce challenges into practical opportunities for progress.",
      ar: "نحوّل تحديات العمل إلى فرص عملية للتقدم والتغيير.",
    },
    icon: RefreshCw,
  },
  {
    title: { en: "Elevate", ar: "ارتقاء" },
    description: {
      en: "We attract and develop talent so teams can do their best work.",
      ar: "نستقطب الكفاءات ونطورها لتتمكن الفرق من تحقيق أفضل أداء.",
    },
    icon: Lightbulb,
  },
  {
    title: { en: "Commit", ar: "التزام" },
    description: {
      en: "We bring dependable support and thoughtful service to every partnership.",
      ar: "نقدم دعمًا موثوقًا وخدمة مدروسة في كل شراكة.",
    },
    icon: Handshake,
  },
];

const partnerNames = [
  "Amazon",
  "Banque Misr",
  "InstaShop",
  "B.TECH",
  "Flyin.com",
  "Coca-Cola",
  "Capgemini",
  "JTI",
  "Concentrix",
];

const copy = {
  en: {
    navigation: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      careers: "Careers",
      contact: "Contact Us",
    },
    homeLabel: "COVARA home",
    logoAlt: "COVARA — Integrated HR & Business Solutions",
    mainNavigation: "Main navigation",
    getInTouch: "Get in Touch",
    closeMenu: "Close navigation menu",
    openMenu: "Open navigation menu",
    switchLanguage: "عربي",
    switchLanguageLabel: "Switch language to Arabic",
    enableDarkMode: "Enable dark mode",
    enableLightMode: "Enable light mode",
    heroAlt: "Colleagues sharing ideas around a table in a bright, modern office",
    heroKicker: "Integrated HR & Business Solutions",
    heroTitle: ["Building better", "businesses through", "people."],
    heroDescription:
      "We provide integrated HR and business solutions that help organizations attract talent, optimize workforce management, and build stronger teams.",
    exploreServices: "Explore Our Services",
    contactTeam: "Contact Our Team",
    discover: "Discover COVARA",
    partnersTitle: "Trusted Partners",
    partnersDescription:
      "We’re proud to work alongside organizations that trust us to support their people and growth.",
    aboutKicker: "About COVARA",
    aboutTitle: "People are our greatest business solution.",
    aboutDescription:
      "COVARA is an integrated HR and business solutions company supporting organizations through recruitment, workforce management, training, and practical HR services.",
    story: "Our Story",
    storyDescription: "We bring people and business needs together with thoughtful, hands-on support.",
    mission: "Our Mission",
    missionDescription: "Help organizations build stronger teams and more effective workplaces.",
    vision: "Our Vision",
    visionDescription: "Make people-focused solutions an enduring source of business strength.",
    whyChoose: "Why Choose COVARA?",
    whyDescription:
      "A considered partner for the everyday work of finding, supporting, and developing people.",
    aboutImageAlt: "An HR advisor listening to colleagues during a workplace conversation",
    photoCaption: "Human insight. Business focus.",
    servicesKicker: "Our Services",
    servicesTitle: "Practical support for every stage of work.",
    servicesDescription:
      "From the first hire to the everyday details, we help make people operations work better.",
    learnMore: "Learn More",
    learnMoreAbout: "Learn more about",
    valuesTitle: "Our Values in Action",
    processKicker: "Our Process",
    processTitle: "Clear steps. Thoughtful outcomes.",
    careersKicker: "Careers",
    careersTitle: "Your next career opportunity starts here.",
    careersDescription:
      "Discover career opportunities and connect with organizations looking for talented professionals.",
    exploreOpportunities: "Explore Opportunities",
    contactKicker: "Contact Us",
    contactTitle: "Let’s build a stronger team.",
    contactDescription: "Tell us a little about what you need. We’ll help you find the right next step.",
    email: "Email",
    phone: "Phone",
    office: "Office",
    officePlaceholder: "Add your city and country",
    fullName: "Full Name",
    fullNamePlaceholder: "Your full name",
    companyName: "Company Name",
    companyPlaceholder: "Your company",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    phonePlaceholder: "Your phone number",
    serviceRequired: "Service Required",
    selectService: "Select a service",
    careerOpportunities: "Career Opportunities",
    message: "Message",
    messagePlaceholder: "How can we support your organization?",
    submitInquiry: "Send via WhatsApp",
    whatsappNote: "Your inquiry will open in WhatsApp so you can send it.",
    footerDescription:
      "Integrated people and business solutions for stronger organizations and more capable teams.",
    explore: "Explore",
    connect: "Connect",
    copyright: "All rights reserved.",
  },
  ar: {
    navigation: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      careers: "الوظائف",
      contact: "تواصل معنا",
    },
    homeLabel: "الصفحة الرئيسية لكوفارا",
    logoAlt: "كوفارا — حلول متكاملة للموارد البشرية والأعمال",
    mainNavigation: "القائمة الرئيسية",
    getInTouch: "تواصل معنا",
    closeMenu: "إغلاق قائمة التنقل",
    openMenu: "فتح قائمة التنقل",
    switchLanguage: "EN",
    switchLanguageLabel: "تغيير اللغة إلى الإنجليزية",
    enableDarkMode: "تفعيل الوضع الداكن",
    enableLightMode: "تفعيل الوضع الفاتح",
    heroAlt: "زملاء يتبادلون الأفكار حول طاولة في مكتب عصري ومشرق",
    heroKicker: "حلول متكاملة للموارد البشرية والأعمال",
    heroTitle: ["نبني أعمالًا أقوى", "من خلال", "الأفراد."],
    heroDescription:
      "نقدم حلولًا متكاملة للموارد البشرية والأعمال تساعد المؤسسات على استقطاب الكفاءات وإدارة القوى العاملة وبناء فرق أقوى.",
    exploreServices: "اكتشف خدماتنا",
    contactTeam: "تواصل مع فريقنا",
    discover: "اكتشف كوفارا",
    partnersTitle: "شركاء النجاح",
    partnersDescription: "نفخر بالتعاون مع مؤسسات تثق بنا لدعم كوادرها وتحقيق النمو.",
    aboutKicker: "عن كوفارا",
    aboutTitle: "الأفراد هم أعظم حلول الأعمال.",
    aboutDescription:
      "كوفارا شركة متخصصة في حلول الموارد البشرية والأعمال، تدعم المؤسسات عبر التوظيف وإدارة القوى العاملة والتدريب وخدمات الموارد البشرية العملية.",
    story: "قصتنا",
    storyDescription: "نربط بين الأفراد واحتياجات الأعمال من خلال دعم عملي ومدروس.",
    mission: "رسالتنا",
    missionDescription: "نساعد المؤسسات على بناء فرق أقوى وبيئات عمل أكثر فاعلية.",
    vision: "رؤيتنا",
    visionDescription: "أن تصبح الحلول التي تضع الأفراد أولًا مصدرًا مستدامًا لقوة الأعمال.",
    whyChoose: "لماذا كوفارا؟",
    whyDescription: "شريك موثوق لمساعدتك في استقطاب الأفراد ودعمهم وتطويرهم.",
    aboutImageAlt: "مستشارة موارد بشرية تستمع إلى زملائها أثناء حوار في مكان العمل",
    photoCaption: "رؤية إنسانية. تركيز على الأعمال.",
    servicesKicker: "خدماتنا",
    servicesTitle: "دعم عملي في كل مرحلة من مراحل العمل.",
    servicesDescription:
      "من أول تعيين إلى تفاصيل العمل اليومية، نساعدك على تطوير إدارة الأفراد.",
    learnMore: "اعرف المزيد",
    learnMoreAbout: "اعرف المزيد عن",
    valuesTitle: "قيمنا في العمل",
    processKicker: "منهجيتنا",
    processTitle: "خطوات واضحة. نتائج مدروسة.",
    careersKicker: "الوظائف",
    careersTitle: "فرصتك المهنية القادمة تبدأ من هنا.",
    careersDescription:
      "اكتشف الفرص المهنية وتواصل مع المؤسسات التي تبحث عن أصحاب الكفاءات.",
    exploreOpportunities: "اكتشف الفرص",
    contactKicker: "تواصل معنا",
    contactTitle: "لنبنِ فريقًا أقوى.",
    contactDescription: "أخبرنا باحتياجاتك، وسنساعدك في تحديد الخطوة التالية.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    office: "المكتب",
    officePlaceholder: "أضف مدينتك وبلدك",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "أدخل اسمك الكامل",
    companyName: "اسم الشركة",
    companyPlaceholder: "أدخل اسم شركتك",
    emailAddress: "البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    phonePlaceholder: "أدخل رقم هاتفك",
    serviceRequired: "الخدمة المطلوبة",
    selectService: "اختر خدمة",
    careerOpportunities: "الفرص الوظيفية",
    message: "الرسالة",
    messagePlaceholder: "كيف يمكننا دعم مؤسستك؟",
    submitInquiry: "إرسال عبر واتساب",
    whatsappNote: "سيتم فتح واتساب لتتمكن من إرسال استفسارك.",
    footerDescription: "حلول متكاملة للأفراد والأعمال لبناء مؤسسات أقوى وفرق أكثر كفاءة.",
    explore: "استكشف",
    connect: "تواصل",
    copyright: "جميع الحقوق محفوظة.",
  },
} as const;

type TimelineEntry = {
  title: string;
  description: string;
};

function AboutTimeline({ entries, label }: { entries: TimelineEntry[]; label: string }) {
  const timelineRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" },
    );

    timeline.classList.add("is-animated");
    timeline.querySelectorAll(".about-timeline-item").forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      timeline.classList.remove("is-animated");
    };
  }, []);

  return (
    <ol ref={timelineRef} className="about-timeline mt-9" aria-label={label}>
      {entries.map((entry, index) => (
        <li
          key={entry.title}
          className={`about-timeline-item ${index % 2 === 0 ? "is-start" : "is-end"}`}
        >
          <span className="about-timeline-dot" aria-hidden="true" />
          <div className="about-timeline-copy">
            <h3 className="font-display text-2xl text-brand-charcoal">{entry.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{entry.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ProcessTimeline({
  steps,
  language,
  label,
}: {
  steps: (typeof processSteps)[number][];
  language: Language;
  label: string;
}) {
  const timelineRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeline.classList.add("is-visible");
          observer.unobserve(timeline);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    timeline.classList.add("is-animated");
    observer.observe(timeline);

    return () => {
      observer.disconnect();
      timeline.classList.remove("is-animated", "is-visible");
    };
  }, []);

  return (
    <ol
      ref={timelineRef}
      className="process-timeline mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
      aria-label={label}
    >
      {steps.map((step, index) => (
        <li key={step.en} className="process-step relative min-w-0">
          <span className="process-step-number font-display text-4xl text-brand-mint">
            0{index + 1}
          </span>
          <h3 className="mt-5 max-w-[240px] text-base font-semibold leading-6 text-brand-charcoal">
            {step[language]}
          </h3>
        </li>
      ))}
    </ol>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [language, setLanguage] = useState<Language>("ar");
  const [theme, setTheme] = useState<Theme>("light");
  const t = copy[language];
  const aboutTimeline = [
    { title: t.story, description: t.storyDescription },
    { title: t.mission, description: t.missionDescription },
    { title: t.vision, description: t.visionDescription },
    { title: t.whyChoose, description: t.whyDescription },
  ];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.title =
      language === "ar"
        ? "كوفارا | حلول متكاملة للموارد البشرية والأعمال"
        : "COVARA | Integrated HR & Business Solutions";
  }, [language, theme]);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      `${t.fullName}: ${formData.get("name")}`,
      `${t.companyName}: ${formData.get("company")}`,
      `${t.emailAddress}: ${formData.get("email")}`,
      `${t.phoneNumber}: ${formData.get("phone") || "-"}`,
      `${t.serviceRequired}: ${services.find((service) => service.title.en === formData.get("service"))?.title[language] ?? t.careerOpportunities}`,
      `${t.message}: ${formData.get("message")}`,
    ].join("\n");
    window.location.assign(`https://wa.me/201515207541?text=${encodeURIComponent(message)}`);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-charcoal/10 bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:flex sm:justify-between sm:px-8 lg:px-12">
          <a href="#home" onClick={closeMenu} aria-label={t.homeLabel} className="min-w-0">
            <img
              src={logoAsset}
              alt={t.logoAlt}
              className="logo-backdrop h-auto w-[150px] sm:w-[176px]"
              width="2000"
              height="604"
            />
          </a>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <nav
              aria-label={t.mainNavigation}
              className={`${menuOpen ? "grid" : "hidden"} absolute start-0 top-full w-full gap-1 border-b border-brand-charcoal/10 bg-background px-5 py-4 shadow-sm md:static md:flex md:w-auto md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="nav-link py-3 text-sm font-medium text-brand-charcoal/80 transition-colors hover:text-brand-charcoal md:py-2"
                >
                  {t.navigation[item.key]}
                </a>
              ))}
              <Button asChild className="mt-2 h-11 px-5 md:hidden">
                <a href="#contact" onClick={closeMenu}>
                  {t.getInTouch} <ArrowRight className="directional-arrow" aria-hidden="true" />
                </a>
              </Button>
            </nav>

            <Button asChild className="hidden h-11 px-5 md:inline-flex">
              <a href="#contact">
                {t.getInTouch} <ArrowRight className="directional-arrow" aria-hidden="true" />
              </a>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-10 px-2"
              aria-label={t.switchLanguageLabel}
              onClick={() => setLanguage((current) => (current === "ar" ? "en" : "ar"))}
            >
              {t.switchLanguage}
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              aria-pressed={theme === "dark"}
              aria-label={theme === "light" ? t.enableDarkMode : t.enableLightMode}
              title={theme === "light" ? t.enableDarkMode : t.enableLightMode}
              onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            >
              {theme === "light" ? (
                <Moon aria-hidden="true" />
              ) : (
                <Sun aria-hidden="true" />
              )}
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-10 w-10 md:hidden"
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero relative isolate flex items-center overflow-hidden">
          <div className="absolute inset-0 -z-20" aria-hidden="true">
            <img
              src={heroPhoto}
              alt={t.heroAlt}
              className="hero-photo h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="hero-wash absolute inset-0 -z-10" aria-hidden="true" />
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-[-1] h-[clamp(4.5rem,9vw,7.5rem)] w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0 C300 18 470 70 720 70 C970 70 1140 18 1440 0 V120 H0 Z"
              fill="var(--background)"
              className="hero-wave-fill"
            />
            <path
              d="M0 0 C300 18 470 70 720 70 C970 70 1140 18 1440 0"
              fill="none"
              stroke="var(--brand-mint)"
              strokeWidth="3"
              className="hero-wave-line"
            />
          </svg>

          <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="max-w-[690px] motion-rise">
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-charcoal">
                <span className="h-px w-10 bg-brand-mint" aria-hidden="true" />
                {t.heroKicker}
              </p>
              <h1 className="max-w-[700px] font-display text-5xl leading-[1.04] text-brand-charcoal sm:text-6xl xl:text-7xl">
                {t.heroTitle.map((line, index) => (
                  <span key={line}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-[570px] text-base leading-7 text-brand-charcoal/80 sm:text-lg sm:leading-8">
                {t.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="h-12 px-6">
                  <a href="#services">
                    {t.exploreServices} <ArrowRight className="directional-arrow" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 border-brand-charcoal/30 bg-brand-white/70 px-6">
                  <a href="#contact">{t.contactTeam}</a>
                </Button>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-6 end-5 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-charcoal/70 sm:flex lg:end-12"
          >
            {t.discover} <ArrowDownRight className="directional-arrow h-4 w-4" aria-hidden="true" />
          </a>
        </section>

      

        <section id="about" className="scroll-mt-24 bg-brand-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:px-12">
            <div className="order-2 lg:order-1">
              <p className="section-kicker">{t.aboutKicker}</p>
              <h2 className="section-title mt-4 max-w-[590px]">
                {t.aboutTitle}
              </h2>
              <p className="mt-6 max-w-[570px] text-base leading-7 text-muted-foreground">
                {t.aboutDescription}
              </p>

              <AboutTimeline key={language} entries={aboutTimeline} label={t.aboutKicker} />
            </div>

            <figure className="relative order-1 min-w-0 lg:order-2">
              <img
                src={aboutPhoto}
                alt={t.aboutImageAlt}
                loading="lazy"
                className="about-photo aspect-[4/4.5] w-full object-cover object-center"
                width="1024"
                height="1536"
              />
              <figcaption className="absolute bottom-4 start-4 flex items-center gap-3 bg-brand-white px-4 py-3 text-sm font-semibold text-brand-charcoal sm:bottom-6 sm:start-6">
                <span className="grid h-9 w-9 shrink-0 place-items-center bg-brand-mint">
                  <UsersRound className="h-4 w-4" aria-hidden="true" />
                </span>
                {t.photoCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-brand-gray py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(260px,0.65fr)] sm:items-end sm:gap-10">
              <div>
                <p className="section-kicker">{t.servicesKicker}</p>
                <h2 className="section-title mt-4 max-w-[640px]">{t.servicesTitle}</h2>
              </div>
              <p className="max-w-[420px] text-base leading-7 text-muted-foreground sm:justify-self-end">
                {t.servicesDescription}
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title.en}
                    className="service-item group relative isolate flex min-h-[350px] flex-col overflow-hidden border border-brand-charcoal/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-charcoal/30 hover:shadow-md sm:min-h-[380px]"
                  >
                    <img
                      src={service.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="service-card-shade absolute inset-0 -z-10" aria-hidden="true" />
                    <div className="relative z-10 flex items-center justify-between p-6 sm:p-7">
                      <span className="text-sm font-semibold tabular-nums text-white/90">
                        0{index + 1}
                      </span>
                      <span className="grid h-12 w-12 place-items-center bg-brand-mint text-brand-charcoal">
                        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                    </div>
                    <div className="service-card-content absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-7">
                      <h3 className="font-display text-[26px] leading-tight">
                        {service.title[language]}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/85">
                        {service.description[language]}
                      </p>
                      <a
                        href="#contact"
                        onClick={() => setSelectedService(service.title.en)}
                        className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-mint"
                        aria-label={`${t.learnMoreAbout} ${service.title[language]}`}
                      >
                        {t.learnMore} <ArrowRight className="directional-arrow h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="values-section relative isolate overflow-hidden py-20 text-brand-white sm:py-28"
          aria-labelledby="values-title"
        >
          <img
            src={heroPhoto}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="values-overlay absolute inset-0 -z-10" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <h2
              id="values-title"
              className="text-center font-display text-3xl text-brand-white sm:text-4xl"
            >
              {t.valuesTitle}
            </h2>
            <ul className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <li
                    key={value.title.en}
                    className="group text-center transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="values-icon-shell mx-auto grid h-24 w-24 place-items-center rounded-full border-2 border-white/85 p-1 transition-transform duration-300 group-hover:scale-105">
                      <span className="grid h-full w-full place-items-center rounded-full bg-brand-white text-brand-charcoal">
                        <Icon className="h-9 w-9" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold text-brand-white">
                      {value.title[language]}
                    </h3>
                    <p className="mx-auto mt-4 max-w-[270px] text-sm leading-6 text-brand-white/85">
                      {value.description[language]}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="bg-brand-white py-20 sm:py-28" aria-labelledby="process-title">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-[700px]">
              <p className="section-kicker">{t.processKicker}</p>
              <h2 id="process-title" className="section-title mt-4">
                {t.processTitle}
              </h2>
            </div>
            <ProcessTimeline
              key={language}
              steps={processSteps}
              language={language}
              label={t.processTitle}
            />
          </div>
        </section>
  <section className="partners-section bg-brand-white py-12 sm:py-16" aria-labelledby="partners-title">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <h2 id="partners-title" className="font-display text-3xl text-brand-charcoal sm:text-4xl">
                {t.partnersTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-[680px] text-sm leading-6 text-muted-foreground sm:text-base">
                {t.partnersDescription}
              </p>
            </div>
            <div className="partners-marquee mt-9">
              <div className="partners-track">
                <ul className="partners-list" aria-label={t.partnersTitle}>
                  {partnerNames.map((name) => (
                    <li key={name} className="partner-wordmark">
                      {name}
                    </li>
                  ))}
                </ul>
                <ul className="partners-list" aria-hidden="true">
                  {partnerNames.map((name) => (
                    <li key={name} className="partner-wordmark">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="careers" className="scroll-mt-24 bg-brand-mint py-16 sm:py-20">
          <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:px-12">
            <div className="max-w-[780px]">
              <p className="section-kicker">{t.careersKicker}</p>
              <h2 className="section-title mt-4">{t.careersTitle}</h2>
              <p className="mt-4 max-w-[640px] leading-7 text-brand-charcoal/80">
                {t.careersDescription}
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="h-12 w-fit border-brand-charcoal/40 bg-brand-white/70 px-6">
              <a
                href="#contact"
                onClick={() => setSelectedService("Career Opportunities")}
              >
                {t.exploreOpportunities} <ArrowRight className="directional-arrow" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-brand-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
            <div>
              <p className="section-kicker">{t.contactKicker}</p>
              <h2 className="section-title mt-4">{t.contactTitle}</h2>
              <p className="mt-5 max-w-[420px] leading-7 text-muted-foreground">
                {t.contactDescription}
              </p>

              <address className="mt-9 not-italic">
                <div className="border-t border-brand-charcoal/15 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{t.email}</p>
                  <a className="mt-2 inline-block text-brand-charcoal hover:underline" href="mailto:covarasolutions@gmail.com">
                    covarasolutions@gmail.com
                  </a>
                </div>
                <div className="border-t border-brand-charcoal/15 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{t.phone}</p>
                  <a className="mt-2 inline-block text-brand-charcoal hover:underline" href="tel:+201515207541">
                    +20 151 520 7541
                  </a>
                </div>
                <div className="border-t border-brand-charcoal/15 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{t.office}</p>
                  <p className="mt-2 text-brand-charcoal">{t.officePlaceholder}</p>
                </div>
              </address>
            </div>

            <div className="border-t border-brand-charcoal/15 pt-8 lg:border-s lg:border-t-0 lg:ps-12 lg:pt-0">
              <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal">
                  {t.fullName}
                  <Input name="name" autoComplete="name" placeholder={t.fullNamePlaceholder} required className="h-12 rounded-none border-brand-charcoal/20 bg-brand-white shadow-none" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal">
                  {t.companyName}
                  <Input name="company" autoComplete="organization" placeholder={t.companyPlaceholder} required className="h-12 rounded-none border-brand-charcoal/20 bg-brand-white shadow-none" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal">
                  {t.emailAddress}
                  <Input name="email" type="email" autoComplete="email" dir="ltr" placeholder="name@company.com" required className="h-12 rounded-none border-brand-charcoal/20 bg-brand-white shadow-none" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal">
                  {t.phoneNumber}
                  <Input name="phone" type="tel" autoComplete="tel" dir="ltr" placeholder={t.phonePlaceholder} className="h-12 rounded-none border-brand-charcoal/20 bg-brand-white shadow-none" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal sm:col-span-2">
                  {t.serviceRequired}
                  <select
                    name="service"
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                    required
                    className="h-12 w-full border border-brand-charcoal/20 bg-brand-white px-3 text-base font-normal text-brand-charcoal outline-none transition-shadow focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option value="" disabled>{t.selectService}</option>
                    {services.map((service) => (
                      <option key={service.title.en} value={service.title.en}>{service.title[language]}</option>
                    ))}
                    <option value="Career Opportunities">{t.careerOpportunities}</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal sm:col-span-2">
                  {t.message}
                  <Textarea
                    name="message"
                    placeholder={t.messagePlaceholder}
                    required
                    className="min-h-32 resize-y rounded-none border-brand-charcoal/20 bg-brand-white shadow-none"
                  />
                </label>
                <div className="flex flex-col items-start gap-3 sm:col-span-2">
                  <Button type="submit" size="lg" className="h-12 px-6">
                    {t.submitInquiry} <ArrowRight className="directional-arrow" aria-hidden="true" />
                  </Button>
                  <p id="form-note" className="text-xs leading-5 text-muted-foreground">
                    {t.whatsappNote}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-charcoal py-12 text-brand-white">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 border-b border-brand-white/20 pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
            <div>
              <img
                src={logoAsset}
                alt={t.logoAlt}
                className="logo-backdrop h-auto w-[176px] bg-brand-white p-2"
                width="2000"
                height="604"
                loading="lazy"
              />
              <p className="mt-5 max-w-[380px] text-sm leading-6 text-brand-white/75">
                {t.footerDescription}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-brand-white">{t.explore}</h2>
              <ul className="mt-4 grid gap-3 text-sm text-brand-white/75">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a className="transition-colors hover:text-brand-mint" href={item.href}>{t.navigation[item.key]}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-brand-white">{t.connect}</h2>
              <p className="mt-4 text-sm text-brand-white/75">covarasolutions@gmail.com</p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center border border-brand-white/25 text-brand-white transition-colors hover:border-brand-mint hover:text-brand-mint"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center border border-brand-white/25 text-brand-white transition-colors hover:border-brand-mint hover:text-brand-mint"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-xs text-brand-white/65 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} COVARA. {t.copyright}</p>
            <p>{t.heroKicker}</p>
          </div>
        </div>
      </footer>
    </>
  );
}