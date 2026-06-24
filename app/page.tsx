import Link from 'next/link';
import { SiteNav, SuiteBar, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { EmailBroadcastMock } from './_marketing/mocks';

// ─── Feature cards ───────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: '📣',
    title: 'Broadcast to your whole team.',
    body: 'One send reaches every teammate — whether it\'s 12 people or 1,200. Event recaps, product updates, recognition blasts.',
  },
  {
    icon: '🤝',
    title: 'Automated onboarding sequences.',
    body: 'New teammate joins? A pre-built drip kicks off automatically — welcome, training links, check-ins — on your schedule.',
  },
  {
    icon: '⚡',
    title: 'Transactional emails, handled.',
    body: 'OTP codes, receipts, password resets — the emails your product has to send, delivered reliably every time.',
  },
  {
    icon: '📊',
    title: 'Open and click analytics.',
    body: 'See exactly who opened, who clicked, and who you need to follow up with. Real data, not vanity metrics.',
  },
  {
    icon: '🔗',
    title: 'Connects to LeaderHQ.',
    body: 'Your team roster pulls in from LeaderHQ automatically. No CSV exports, no copy-paste, no manual sync.',
  },
  {
    icon: '🔒',
    title: 'GDPR & CAN-SPAM Ready.',
    body: 'Unsubscribe handling, consent tracking, and compliance built in so you stay focused on leading.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MarketingHomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SuiteBar appUrl="https://send.leaderhq.io" />
      <SiteNav
        productSuffix="Send"
        links={[
          { label: 'Features', href: '/#features' },
          { label: 'How It Works', href: '/how-it-works' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Blog', href: '/blog' },
        ]}
        ctaLabel="Start free"
        ctaHref="https://send.leaderhq.io/signup"
        loginHref="https://send.leaderhq.io/login"
      />

      <main className="flex-1">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <FadeIn>
                  <TypewriterHeadline
                    staticPrefix="Never miss a"
                    phrases={[
                      'broadcast send.',
                      'welcome email.',
                      'drip sequence.',
                      'follow-up message.',
                      'onboarding email.',
                      'campaign launch.',
                    ]}
                    className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
                  />
                </FadeIn>

                <FadeIn delay={160}>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
                    Transactional and broadcast email built for field leaders. One dashboard to onboard new teammates, blast event recaps, and keep your whole organization in the loop.
                  </p>
                </FadeIn>

                <FadeIn delay={240}>
                  <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <Link
                      href="https://send.leaderhq.io/signup"
                      className="rounded-full bg-brand-green px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green/90"
                    >
                      Start free
                    </Link>
                    <Link
                      href="/#features"
                      className="rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-brand-navy hover:text-brand-navy"
                    >
                      See all features →
                    </Link>
                  </div>
                </FadeIn>

                <FadeIn delay={320}>
                  <p className="mt-5 text-xs text-zinc-400">
                    Free forever on the Starter plan. No credit card required.
                  </p>
                </FadeIn>
              </div>

              <FadeIn delay={120} className="flex justify-center lg:justify-end">
                <EmailBroadcastMock />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Social proof strip ──────────────────────────────────────────── */}
        <FadeIn as="section" className="border-y border-zinc-100 bg-zinc-50 py-5">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Trusted by field leaders across the Leader ecosystem
            </p>
          </div>
        </FadeIn>

        {/* ── Problem band ────────────────────────────────────────────────── */}
        <section className="bg-brand-navy py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
            <FadeIn>
              <p className="text-xl font-bold text-white sm:text-2xl">
                You onboarded 12 new teammates last month. Did all 12 hear from you?
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 text-base leading-relaxed text-zinc-300">
                Copy-pasted welcome texts. Forgotten follow-ups. Broadcast announcements buried in a group chat nobody checks. The best leaders lose momentum in their own organizations because the tooling can&apos;t keep up.
              </p>
            </FadeIn>
            <FadeIn delay={180}>
              <p className="mt-4 text-base font-semibold text-brand-green">
                LeaderSend fixes all of it.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── Features grid ───────────────────────────────────────────────── */}
        <section id="features" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Everything you need to stay in touch
                </h2>
                <p className="mt-3 text-base text-zinc-500">
                  Built for the way field leaders actually communicate — fast, personal, and on the move.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f, i) => (
                <FadeIn key={f.title} delay={i * 60}>
                  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-xl">
                      {f.icon}
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-brand-navy">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-600">{f.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ────────────────────────────────────────────────── */}
        <section className="bg-zinc-50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Up and sending in minutes
                </h2>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '01',
                  title: 'Connect your list.',
                  body: 'Import your team roster or let LeaderSend pull it from LeaderHQ automatically. Your contacts are ready in seconds.',
                },
                {
                  step: '02',
                  title: 'Build your send.',
                  body: 'Choose a broadcast, drip sequence, or transactional template. Write once, send to everyone — or let automation send for you.',
                },
                {
                  step: '03',
                  title: 'Watch it land.',
                  body: 'Real-time delivery stats, open rates, and click tracking. Know exactly who got your message and who needs a nudge.',
                },
              ].map((item, i) => (
                <FadeIn key={item.step} delay={i * 80}>
                  <div className="text-center">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-xl font-bold text-white">
                      {item.step}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-brand-navy">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-600">{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={320}>
              <div className="mt-10 text-center">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:underline"
                >
                  See the full walkthrough →
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── CTA band ────────────────────────────────────────────────────── */}
        <FadeIn as="section" className="bg-brand-navy py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
              Ready to reach every leader?
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your next send is one click away.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-zinc-300">
              Set up your free account in under a minute. Send your first broadcast before your next event.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="https://send.leaderhq.io/signup"
                className="rounded-full bg-brand-green px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green/90"
              >
                Start free
              </Link>
              <Link
                href="/#features"
                className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                See all features →
              </Link>
            </div>
          </div>
        </FadeIn>
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
