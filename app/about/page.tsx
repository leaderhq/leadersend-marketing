import type { Metadata } from 'next';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon } from '@/app/_marketing/icons';

const APP_URL = 'https://send.leaderhq.io';

export const metadata: Metadata = {
  title: 'About — LeaderSend',
  description:
    'LeaderSend is part of the Leader Suite — built for the field leaders who onboard, motivate, and communicate with entire organizations from their phone.',
  alternates: { canonical: '/about' },
};

const VALUES = [
  {
    icon: 'bolt',
    title: 'Communication at the speed of leadership',
    body: 'The best leaders don\'t wait. LeaderSend is built to match that pace — broadcasts go out in seconds, drips start automatically, and nothing falls through the cracks because the tooling was too slow.',
  },
  {
    icon: 'handshake',
    title: 'Every teammate deserves to hear from you',
    body: 'A team that hears from its leader regularly performs better. LeaderSend exists to make sure no new recruit gets a silent first week and no event announcement stays buried in a group chat.',
  },
  {
    icon: 'gift',
    title: 'Free where it matters',
    body: 'The Starter plan is free permanently — not a crippled preview, not a trial. We believe every field leader deserves real communication tools regardless of team size or budget.',
  },
] as const;

export default function AboutPage() {
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
        {/* Hero */}
        <section className="bg-brand-navy text-white">
          <div className="mx-auto max-w-[820px] px-4 py-24 sm:px-6">
            <FadeIn>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                We built this because
                <br />
                leaders deserve better tools.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                LeaderSend is part of the Leader Suite — a set of tools built
                for the people who lead, sell, and build organizations in the
                real world. Not the boardroom. The field.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              The problem we kept watching
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-600">
              Field leaders onboard new teammates every week. They run events,
              product launches, recognition programs. They have organizations
              of 12, 120, or 1,200 people who need to hear from them — and the
              tooling keeps getting in the way.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Copy-pasted welcome texts that go out once, then stop. Broadcast
              announcements sent to a group chat that half the team muted.
              Onboarding left to memory when a busy week hits. New recruits
              who never hear from their upline after day one.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderSend was built to close the gap between the leader and the
              organization. Not with a complicated marketing platform that takes
              weeks to configure. With a dashboard that connects to your existing
              LeaderHQ roster and puts broadcasts, drip sequences, and
              transactional email in one place — ready in minutes.
            </p>
            <div className="mt-10">
              <a
                href={`${APP_URL}/signup`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Start free — no credit card required
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Values */}
        <section className="border-y border-zinc-100 bg-zinc-50">
          <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                What we stand for
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <FadeIn
                  key={v.title}
                  delay={i * 80}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <MarketingIcon name={v.icon} size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{v.body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Suite CTA */}
        <section className="mx-auto max-w-[560px] px-4 py-20 text-center sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Part of the Leader Suite
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderSend is one product in a growing suite of tools for leaders,
              sales professionals, and the organizations they build. Visit
              LeaderHQ to see what else we&apos;re building.
            </p>
            <a
              href="https://leaderhq.io"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-navy px-6 text-base font-semibold text-white shadow-md transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              Visit LeaderHQ →
            </a>
          </FadeIn>
        </section>
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
