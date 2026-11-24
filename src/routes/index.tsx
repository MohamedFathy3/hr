import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  FileCheck2,
  Instagram,
  Menu,
  Network,
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
import logoAsset from "@/assets/covara-logo.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COVARA | Integrated HR & Business Solutions" },
      {
        name: "description",
        content:
          "COVARA helps organizations attract talent, strengthen teams, and manage their people with integrated HR and business solutions.",
      },
      { property: "og:title", content: "COVARA | Integrated HR & Business Solutions" },
      {
        property: "og:description",
        content:
          "People-first recruitment, HR support, training, and workforce solutions for growing organizations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
];

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Recruitment & Headhunting",
    description:
      "Find and attract the right people through thoughtful search, professional selection, and a clear understanding of your team.",
    icon: UsersRound,
  },
  {
    title: "HR Outsourcing",
    description:
      "Bring dependable structure to HR operations, employee management, payroll administration, and everyday workforce needs.",
    icon: Network,
  },
  {
    title: "Training & Development",
    description:
      "Build practical skills, improve workplace performance, and help people grow through focused development programs.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Payroll & HR Support",
    description:
      "Keep essential people processes clear and organized with payroll processing, employee records, and administrative support.",
    icon: FileCheck2,
  },
];

const reasons = [
  "Professional HR expertise",
  "Tailored business solutions",
  "Reliable workforce support",
  "Efficient HR operations",
  "Long-term business partnerships",
];

const processSteps = [
  "Understand your business needs",
  "Develop the right HR strategy",
  "Implement tailored solutions",
  "Monitor and improve performance",
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-charcoal/10 bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:flex sm:justify-between sm:px-8 lg:px-12">
          <a href="#home" onClick={closeMenu} aria-label="COVARA home" className="min-w-0">
            <img
              src={logoAsset.url}
              alt="COVARA — Integrated HR & Business Solutions"
              className="h-auto w-[150px] sm:w-[176px]"
              width="1920"
              height="580"
            />
          </a>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <nav
              aria-label="Main navigation"
              className={`${menuOpen ? "grid" : "hidden"} absolute left-0 top-full w-full gap-1 border-b border-brand-charcoal/10 bg-background px-5 py-4 shadow-sm md:static md:flex md:w-auto md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="nav-link py-3 text-sm font-medium text-brand-charcoal/80 transition-colors hover:text-brand-charcoal md:py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-2 h-11 px-5 md:hidden">
                <a href="#contact" onClick={closeMenu}>
                  Get in Touch <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </nav>

            <Button asChild className="hidden h-11 px-5 md:inline-flex">
              <a href="#contact">
                Get in Touch <ArrowRight aria-hidden="true" />
              </a>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-10 w-10 md:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
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
              alt="Colleagues sharing ideas around a table in a bright, modern office"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="hero-wash absolute inset-0 -z-10" aria-hidden="true" />

          <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="max-w-[690px] motion-rise">
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-charcoal">
                <span className="h-px w-10 bg-brand-mint" aria-hidden="true" />
                Integrated HR & Business Solutions
              </p>
              <h1 className="max-w-[700px] font-display text-5xl leading-[1.04] text-brand-charcoal sm:text-6xl xl:text-7xl">
                Building better
                <br />
                businesses through
                <br />
                <span className="text-brand-charcoal">people.</span>
              </h1>
              <p className="mt-6 max-w-[570px] text-base leading-7 text-brand-charcoal/80 sm:text-lg sm:leading-8">
                We provide integrated HR and business solutions that help organizations attract talent,
                optimize workforce management, and build stronger teams.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="h-12 px-6">
                  <a href="#services">
                    Explore Our Services <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 border-brand-charcoal/30 bg-brand-white/70 px-6">
                  <a href="#contact">Contact Our Team</a>
                </Button>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-6 right-5 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-charcoal/70 sm:flex lg:right-12"
          >
            Discover COVARA <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </section>

        <section id="about" className="scroll-mt-24 bg-brand-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:px-12">
            <div className="order-2 lg:order-1">
              <p className="section-kicker">About COVARA</p>
              <h2 className="section-title mt-4 max-w-[590px]">
                People are our greatest business solution.
              </h2>
              <p className="mt-6 max-w-[570px] text-base leading-7 text-muted-foreground">
                COVARA is an integrated HR and business solutions company supporting organizations through
                recruitment, workforce management, training, and practical HR services.
              </p>

              <div className="mt-9 grid gap-x-8 sm:grid-cols-2">
                <div className="border-t border-brand-charcoal/15 py-5">
                  <h3 className="font-display text-2xl text-brand-charcoal">Our Story</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    We bring people and business needs together with thoughtful, hands-on support.
                  </p>
                </div>
                <div className="border-t border-brand-charcoal/15 py-5">
                  <h3 className="font-display text-2xl text-brand-charcoal">Our Mission</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Help organizations build stronger teams and more effective workplaces.
                  </p>
                </div>
                <div className="border-t border-brand-charcoal/15 py-5">
                  <h3 className="font-display text-2xl text-brand-charcoal">Our Vision</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Make people-focused solutions an enduring source of business strength.
                  </p>
                </div>
                <div className="border-t border-brand-charcoal/15 py-5">
                  <h3 className="font-display text-2xl text-brand-charcoal">Why Choose COVARA?</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    A considered partner for the everyday work of finding, supporting, and developing people.
                  </p>
                </div>
              </div>
            </div>

            <figure className="relative order-1 min-w-0 lg:order-2">
              <img
                src={aboutPhoto}
                alt="An HR advisor listening to colleagues during a workplace conversation"
                loading="lazy"
                className="aspect-[4/4.5] w-full object-cover object-center"
                width="1024"
                height="1536"
              />
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-3 bg-brand-white px-4 py-3 text-sm font-semibold text-brand-charcoal sm:bottom-6 sm:left-6">
                <span className="grid h-9 w-9 shrink-0 place-items-center bg-brand-mint">
                  <UsersRound className="h-4 w-4" aria-hidden="true" />
                </span>
                Human insight. Business focus.
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-brand-gray py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(260px,0.65fr)] sm:items-end sm:gap-10">
              <div>
                <p className="section-kicker">Our Services</p>
                <h2 className="section-title mt-4 max-w-[640px]">Practical support for every stage of work.</h2>
              </div>
              <p className="max-w-[420px] text-base leading-7 text-muted-foreground sm:justify-self-end">
                From the first hire to the everyday details, we help make people operations work better.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="service-item group flex min-h-[310px] flex-col border border-brand-charcoal/10 bg-brand-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-charcoal/30 hover:shadow-md sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center bg-brand-mint/65 text-brand-charcoal">
                        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-[26px] leading-tight text-brand-charcoal">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      onClick={() => setSelectedService(service.title)}
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-charcoal transition-colors hover:text-brand-charcoal/65"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-brand-charcoal py-20 text-brand-white sm:py-24" aria-labelledby="why-title">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12">
            <div>
              <p className="section-kicker section-kicker-light">Why Choose COVARA?</p>
              <h2 id="why-title" className="section-title mt-4 text-brand-white">
                Good work starts with the right people.
              </h2>
              <p className="mt-5 max-w-[500px] leading-7 text-brand-white/75">
                We combine professional HR knowledge with practical support shaped around each organization.
              </p>
            </div>

            <ul className="grid gap-x-8 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <li key={reason} className="flex items-start gap-4 border-t border-brand-white/20 py-5">
                  <span className="mt-1 text-xs font-semibold tabular-nums text-brand-mint">0{index + 1}</span>
                  <span className="max-w-[280px] font-display text-xl leading-snug text-brand-white">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-brand-white py-20 sm:py-28" aria-labelledby="process-title">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-[700px]">
              <p className="section-kicker">Our Process</p>
              <h2 id="process-title" className="section-title mt-4">
                Clear steps. Thoughtful outcomes.
              </h2>
            </div>
            <ol className="mt-12 grid gap-8 border-t border-brand-charcoal/15 pt-8 sm:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <li key={step} className="relative min-w-0">
                  <span className="font-display text-4xl text-brand-mint">0{index + 1}</span>
                  <h3 className="mt-5 max-w-[240px] text-base font-semibold leading-6 text-brand-charcoal">
                    {step}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="careers" className="scroll-mt-24 bg-brand-mint py-16 sm:py-20">
          <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:px-12">
            <div className="max-w-[780px]">
              <p className="section-kicker">Careers</p>
              <h2 className="section-title mt-4">Your next career opportunity starts here.</h2>
              <p className="mt-4 max-w-[640px] leading-7 text-brand-charcoal/80">
                Discover career opportunities and connect with organizations looking for talented professionals.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="h-12 w-fit border-brand-charcoal/40 bg-brand-white/70 px-6">
              <a
                href="#contact"
                onClick={() => setSelectedService("Career Opportunities")}
              >
                Explore Opportunities <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-brand-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
            <div>
              <p className="section-kicker">Contact Us</p>
              <h2 className="section-title mt-4">Let’s build a stronger team.</h2>
              <p className="mt-5 max-w-[420px] leading-7 text-muted-foreground">
                Tell us a little about what you need. We’ll help you find the right next step.
              </p>

              <address className="mt-9 not-italic">
                <div className="border-t border-brand-charcoal/15 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Email</p>
                  <a className="mt-2 inline-block text-brand-charcoal hover:underline" href="mailto:hello@yourdomain.com">
                    hello@yourdomain.com
                  </a>
                </div>
                <div className="border-t border-brand-charcoal/15 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Phone</p>
                  <a className="mt-2 inline-block text-brand-charcoal hover:underline" href="tel:+000000000000">
                    +00 000 000 0000
                  </a>
                </div>
                <div className="border-t border-brand-charcoal/15 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Office</p>
                  <p className="mt-2 text-brand-charcoal">Add your city and country</p>
                </div>
              </address>
            </div>

            <div className="border-t border-brand-charcoal/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal">
                  Full Name
                  <Input name="name" autoComplete="name" placeholder="Your full name" required className="h-12 rounded-none border-brand-charcoal/20 bg-brand-white shadow-none" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal">
                  Company Name
                  <Input name="company" autoComplete="organization" placeholder="Your company" required className="h-12 rounded-none border-brand-charcoal/20 bg-brand-white shadow-none" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal">
                  Email Address
                  <Input name="email" type="email" autoComplete="email" placeholder="name@company.com" required className="h-12 rounded-none border-brand-charcoal/20 bg-brand-white shadow-none" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal">
                  Phone Number
                  <Input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" className="h-12 rounded-none border-brand-charcoal/20 bg-brand-white shadow-none" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal sm:col-span-2">
                  Service Required
                  <select
                    name="service"
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                    required
                    className="h-12 w-full border border-brand-charcoal/20 bg-brand-white px-3 text-base font-normal text-brand-charcoal outline-none transition-shadow focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>{service.title}</option>
                    ))}
                    <option value="Career Opportunities">Career Opportunities</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-charcoal sm:col-span-2">
                  Message
                  <Textarea
                    name="message"
                    placeholder="How can we support your organization?"
                    required
                    className="min-h-32 resize-y rounded-none border-brand-charcoal/20 bg-brand-white shadow-none"
                  />
                </label>
                <div className="flex flex-col items-start gap-3 sm:col-span-2">
                  <Button type="submit" size="lg" className="h-12 px-6">
                    Submit Inquiry <ArrowRight aria-hidden="true" />
                  </Button>
                  <p id="form-note" className="text-xs leading-5 text-muted-foreground">
                    This frontend preview does not send or store messages.
                  </p>
                  {submitted && (
                    <p role="status" className="flex items-center gap-2 text-sm font-medium text-brand-charcoal">
                      <Check className="h-4 w-4 text-brand-charcoal" aria-hidden="true" />
                      Your inquiry is ready. No message was sent.
                    </p>
                  )}
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
                src={logoAsset.url}
                alt="COVARA — Integrated HR & Business Solutions"
                className="h-auto w-[176px] bg-brand-white p-2"
                width="1920"
                height="580"
                loading="lazy"
              />
              <p className="mt-5 max-w-[380px] text-sm leading-6 text-brand-white/75">
                Integrated people and business solutions for stronger organizations and more capable teams.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-brand-white">Explore</h2>
              <ul className="mt-4 grid gap-3 text-sm text-brand-white/75">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a className="transition-colors hover:text-brand-mint" href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-brand-white">Connect</h2>
              <p className="mt-4 text-sm text-brand-white/75">hello@yourdomain.com</p>
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
            <p>© {new Date().getFullYear()} COVARA. All rights reserved.</p>
            <p>Integrated HR & Business Solutions</p>
          </div>
        </div>
      </footer>
    </>
  );
}