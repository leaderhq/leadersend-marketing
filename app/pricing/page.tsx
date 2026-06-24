import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://send.leaderhq.io';
const GREEN_AA = '#5CAC23';

export const metadata: Metadata = {
  title: 'Pricing — LeaderSend',
  description:
    'Simple pricing for LeaderSend. Start free with up to 500 contacts — upgrade when you\'re ready for unlimited contacts, drip sequences, and transactional email.',
  alternates: { canonical: '/pricing' },
};

interface Plan {
  name: string;
  price: string;
  cadence: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaStyle: 'outline' | 'green' | 'dark';
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    desc: 'Everything you need to start reaching your team and new teammates.',
    features: [
      'Up to 500 contacts',
      'Broadcast sends',
      'Basic analytics',
      'LeaderHQ integration',
    ],
    cta: 'Start free',
    ctaStyle: 'outline',
  },
  {
    name: 'Growth',
    price: '$19',
    cadence: '/mo · ~$15/mo billed yearly',
    desc: 'For leaders who are building fast and need automation that keeps up.',
    features: [
      'Everything in Starter',
      'Unlimited contacts',
      'Drip & onboarding sequences',
      'Transactional email API',
      'Advanced analytics',
    ],
    highlighted: true,
    cta: 'Start Growth',
    ctaStyle: 'green',
  },
  {
    name: 'Organization',
    price: '$49',
    cadence: '/mo · Unlimited seats',
    desc: 'For organizations that need sub-accounts, custom domains, and priority support.',
    features: [
      'Everything in Growth',
      'Team sub-accounts',
      'Custom sending domain',
      'Priority support',
    ],
    cta: 'Start Organization',
    ctaStyle: 'dark',
  },
];

const FAQS = [
  {
    q: 'Is the Starter plan actually free forever?',
    a: 'Yes. No credit card required. No trial that expires. Up to 500 contacts, broadcast sends, and LeaderHQ integration are free permanently. We built it this way because we believe every field leader deserves real communication tools regardless of budget.',
  },
  {
    q: 'What are drip and onboarding sequences?',
    a: 'Drip sequences are automated email series that send on a schedule you define. When a new teammate joins, a pre-built onboarding drip kicks off automatically — welcome email, training links, check-ins — without you lifting a finger after setup.',
  },
  {
    q: 'What is the transactional email API?',
    a: 'The transactional email API lets your products send system emails — OTP codes, password resets, receipts, notifications — through LeaderSend. It handles delivery reliability and tracking so you can see every transactional send in your dashboard.',
  },
  {
    q: 'What does "custom sending domain" mean?',
    a: 'Instead of email arriving from a LeaderSend address, your broadcasts and drips land in inboxes as coming from your own domain (e.g., team@yourdomain.com). This improves deliverability and looks more professional to recipients.',
  },
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. Upgrade from Starter to Growth or Organization instantly. Downgrade or cancel at the end of your billing period. No lock-in, no penalty.',
  },
  {
    q: 'What happens to my contacts if I downgrade?',
    a: 'Your contacts are always yours. If you downgrade to Starter, contacts above 500 are paused — not deleted. Upgrade again and they are immediately active. You never lose data.',
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
      <SiteNav
        productSuffix="Send"
        links={[
          { label: 'Features', href: '/#features' },
          { label: 'How It Works', href: '/how-it-works' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Blog', href: '/blog' },
        ]}
        ctaLabel="Start free"
        ctaHref={`${APP_URL}/signup`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        <Hero />
        <PlansGrid />
        <Faqs />
        <CtaBand />
      </main>
      <SiteFooter
        productSuffix="Send"
        columns={[
          {
            heading: 'Product',
            links: [
              { label: 'Features', href: '/#features' },
              { label: 'How It Works', href: '/how-it-works' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'System Status', href: 'https://leaderhq.io/status' },
            ],
          },
          {
            heading: 'Solutions',
            links: [
              { label: 'Field Leaders', href: '/for-teams' },
              { label: 'Blog & Resources', href: '/blog' },
            ],
          },
          {
            heading: 'Company',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Security & GDPR', href: '/security' },
            ],
          },
        ]}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Simple pricing.
            <br />
            Free where it counts.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Start free with up to 500 contacts. Upgrade when you&apos;re ready
            for unlimited contacts, drip sequences, and transactional email.
          </p>
          <span className="mt-8 inline-block rounded-full border border-brand-green/40 bg-brand-green/15 px-4 py-2 text-sm font-bold text-brand-green">
            Save ~20% with annual billing
          </span>
        </FadeIn>
      </div>
    </section>
  );
}

function PlansGrid() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50">
      <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-stretch gap-5 sm:grid-cols-3">
          {PLANS.map((plan, i) => (
            <FadeIn
              key={plan.name}
              delay={i * 80}
              className={`flex flex-col rounded-2xl border bg-white p-6 ${
                plan.highlighted
                  ? 'border-brand-green/40 shadow-md ring-1 ring-brand-green/20'
                  : 'border-zinc-100 shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <span
                  className="self-start rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                  style={{ backgroundColor: GREEN_AA }}
                >
                  Best value
                </span>
              )}
              <h3 className="mt-3 text-lg font-bold text-brand-navy">
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-brand-navy">
                  {plan.price}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">{plan.cadence}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {plan.desc}
              </p>
              <hr className="my-5 border-zinc-100" />
              <ul className="flex-1 space-y-2.5 text-sm text-zinc-600">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span style={{ color: GREEN_AA }} aria-hidden>
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${APP_URL}/signup`}
                className={`mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.ctaStyle === 'green'
                    ? 'bg-brand-green text-white hover:brightness-110 focus-visible:outline-brand-navy'
                    : plan.ctaStyle === 'dark'
                      ? 'bg-brand-navy text-white hover:brightness-125 focus-visible:outline-brand-green'
                      : 'border border-brand-navy/20 bg-white text-brand-navy hover:bg-zinc-50 focus-visible:outline-brand-green'
                }`}
              >
                {plan.cta}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section className="mx-auto max-w-[720px] px-4 py-20 sm:px-6 sm:py-24">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
          Pricing questions, answered.
        </h2>
      </FadeIn>
      <dl className="mt-12 space-y-6">
        {FAQS.map((faq, i) => (
          <FadeIn
            key={faq.q}
            delay={i * 50}
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
          >
            <dt className="text-base font-bold text-brand-navy">{faq.q}</dt>
            <dd className="mt-2 leading-relaxed text-zinc-600">{faq.a}</dd>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Ready to reach every leader?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            No credit card. No time limit. Set up in under a minute and send your first broadcast before your next event.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start free
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See How It Works →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
