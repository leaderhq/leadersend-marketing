import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://send.leaderhq.io';

export const metadata: Metadata = {
  title: 'How It Works — LeaderSend',
  description:
    'From roster import to delivered broadcast in minutes. See exactly how LeaderSend connects your list, builds your send, and tracks every open and click.',
  alternates: { canonical: '/how-it-works' },
};

const STEPS: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'Connect your list.',
    body: 'Import your team roster or let LeaderSend pull it from LeaderHQ automatically. Your contacts are ready in seconds — no CSV gymnastics, no manual copy-paste.',
  },
  {
    n: '02',
    title: 'Build your send.',
    body: 'Choose a broadcast, drip sequence, or transactional template. Write once, send to everyone — or let automation send for you on the schedule you set.',
  },
  {
    n: '03',
    title: 'Watch it land.',
    body: 'Real-time delivery stats, open rates, and click tracking. Know exactly who got your message and who needs a nudge. No vanity metrics — just the data that matters.',
  },
];

const FAQS = [
  {
    q: 'How does LeaderSend pull contacts from LeaderHQ?',
    a: 'LeaderSend connects to your LeaderHQ account using your existing login. Your team roster syncs automatically — when a new teammate joins LeaderHQ, they appear in LeaderSend within minutes. No CSV exports, no manual imports required.',
  },
  {
    q: 'What is the difference between a broadcast and a drip sequence?',
    a: 'A broadcast is a one-time send to your entire list or a segment — an event recap, a product update, a recognition blast. A drip sequence is an automated series that sends on a schedule: a new teammate triggers Day 0 welcome, Day 3 training links, Day 7 check-in, and so on — all without you lifting a finger after setup.',
  },
  {
    q: 'What are transactional emails and do I need a developer to use them?',
    a: 'Transactional emails are system-triggered messages — OTP codes, password resets, receipts, account notifications. LeaderSend handles these via a simple API. You do need a developer to integrate the API into your product, but the dashboard and deliverability management require no technical skills.',
  },
  {
    q: 'How accurate are the open and click stats?',
    a: 'LeaderSend tracks opens via a pixel and clicks via redirect links. Open rates are directionally accurate but can undercount on email clients that block pixels (like Apple Mail privacy protection). Click tracking is highly reliable. The dashboard shows both alongside delivery and bounce data.',
  },
];

export default function HowItWorksPage() {
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
        <Steps />
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
            From roster to delivered
            <br />
            in minutes.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Three steps. Works for broadcasts, drip sequences, and transactional
            email — all from one dashboard.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
      <ol className="space-y-10">
        {STEPS.map((step, i) => (
          <FadeIn as="li" key={step.n} delay={i * 60}>
            <div className="flex gap-5 sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green text-base font-bold text-white shadow-md shadow-brand-green/30">
                {step.n}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">{step.body}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}

function Faqs() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50">
      <div className="mx-auto max-w-[720px] px-4 py-20 sm:px-6 sm:py-24">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Questions we hear every time
          </h2>
        </FadeIn>
        <dl className="mt-12 space-y-6">
          {FAQS.map((faq, i) => (
            <FadeIn
              key={faq.q}
              delay={i * 60}
              className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
            >
              <dt className="text-base font-bold text-brand-navy">{faq.q}</dt>
              <dd className="mt-2 leading-relaxed text-zinc-600">{faq.a}</dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Ready to see it in action?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your first broadcast is one click away.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            Set up in under a minute. Free forever on the Starter plan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start free
            </a>
            <Link
              href="/pricing"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See Pricing →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
