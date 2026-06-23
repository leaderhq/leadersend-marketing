import Link from 'next/link';
import { SiteNav, SuiteBar, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { EmailBroadcastMock } from './_marketing/mocks';

// ─── Feature cards ───────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: '✉',
    title: 'Broadcast in One Click',
    body: 'Send a personalized message to your entire team or lead list — instantly. No mail-merge gymnastics.',
  },
  {
    icon: '📬',
    title: 'Track Every Open',
    body: 'Know exactly who opened, who clicked, and who needs a follow-up nudge — all in your dashboard.',
  },
  {
    icon: '🤝',
    title: 'Built for Field Leaders',
    body: 'Templates crafted for network marketing, D2D, and conference follow-up. Real language that converts.',
  },
  {
    icon: '🔗',
    title: 'Integrates with LeaderLeads',
    body: 'Your leads flow directly from LeaderLeads into LeaderSend. No CSV exports, no copy-paste.',
  },
  {
    icon: '📅',
    title: 'Scheduled Sends',
    body: 'Queue messages for the perfect moment — follow up 24 hours after a meeting without lifting a finger.',
  },
  {
    icon: '🔒',
    title: 'GDPR & CAN-SPAM Ready',
    body: 'Unsubscribe handling, consent tracking, and compliance built in so you stay focused on selling.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MarketingHomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SuiteBar appUrl="https://send.leaderhq.io" />
      <SiteNav
        productSuffix="Send"
        links={[{ label: 'Features', href: '/features' }, { label: 'How It Works', href: '/how-it-works' }, { label: 'Solutions', href: '#' }, { label: 'Blog', href: '/blog' }]}
        ctaLabel="Get Started Free"
        ctaHref="/signup"
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
                    staticPrefix="Send to"
                    phrases={['your leads.', 'your whole team.', 'every follow-up.', 'your new reps.', 'your downline.']}
                    className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
                  />
                </FadeIn>

                <FadeIn delay={160}>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
                    LeaderSend gives field leaders a dead-simple way to broadcast messages, track opens, and follow up with every lead — without leaving the Leader ecosystem.
                  </p>
                </FadeIn>

                <FadeIn delay={240}>
                  <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <Link
                      href="/signup"
                      className="rounded-full bg-brand-green px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green/90"
                    >
                      Get Started Free
                    </Link>
                    <Link
                      href="/how-it-works"
                      className="rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-brand-navy hover:text-brand-navy"
                    >
                      See How It Works →
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

        {/* ── Features grid ───────────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-24">
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
                { step: '1', title: 'Connect your leads', body: "LeaderLeads syncs your contacts automatically. Or import a CSV — either way you're set up in seconds." },
                { step: '2', title: 'Write (or pick) your message', body: 'Use a proven template or write your own. Personalization tokens drop in names and details automatically.' },
                { step: '3', title: 'Send and track', body: 'Hit send and watch the opens roll in. Follow-up reminders surface the contacts who need another touch.' },
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
          </div>
        </section>

        {/* ── CTA band ────────────────────────────────────────────────────── */}
        <FadeIn as="section" className="bg-brand-navy py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stop losing leads to silence.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-zinc-300">
              Every day without follow-up is a day someone else closes your prospect. LeaderSend makes follow-up effortless.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/signup"
                className="rounded-full bg-brand-green px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green/90"
              >
                Get Started Free
              </Link>
              <Link
                href="/features"
                className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                See All Features
              </Link>
            </div>
          </div>
        </FadeIn>
      </main>

      <SiteFooter
        productSuffix="Send"
        columns={[{"heading":"Product","links":[{"label":"Features","href":"/features"},{"label":"How It Works","href":"/how-it-works"},{"label":"Pricing","href":"/pricing"},{"label":"Field Leaders","href":"/for-field-leaders"},{"label":"System Status","href":"https://leaderhq.io/status"}]},{"heading":"Solutions","links":[{"label":"Field Leaders","href":"/for-field-leaders"},{"label":"Teams","href":"/for-teams"},{"label":"Blog & Resources","href":"/blog"}]},{"heading":"Company","links":[{"label":"About LeaderHQ","href":"/about"},{"label":"Contact","href":"/contact"},{"label":"Privacy Policy","href":"/privacy"},{"label":"Terms of Service","href":"/terms"},{"label":"Security & GDPR","href":"/security"}]}]}
      />
    </div>
  );
}
