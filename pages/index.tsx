import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useAccount } from 'wagmi';
import { GetTokens, SendTokens } from '../components/contract';

const Wordmark = () => (
  <div className="wordmark" aria-label="Drain home">
    <span className="wordmark__drop" aria-hidden />
    <span className="wordmark__text">DRAIN</span>
  </div>
);

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="drain-shell">
      <header className="drain-topbar">
        <Link href="/" aria-label="Drain home">
          <Wordmark />
        </Link>
        <nav className="topnav" aria-label="Primary navigation">
          <a href="#how-it-works">How it works</a>
          <Link href="/compromised-wallet-rescue/">Rescue guide</Link>
        </nav>
        <ConnectButton showBalance={false} />
      </header>

      {isConnected ? (
        <main className="drain-main">
          <div className="connected-intro">
            <span className="eyebrow">Wallet console / ready</span>
            <h1>
              Move assets with <em>certainty.</em>
            </h1>
            <p>
              Your wallet is connected. Select the assets you want to move, then
              choose a safe destination.
            </p>
          </div>
          <GetTokens />
          <SendTokens />
        </main>
      ) : (
        <main>
          <section className="hero">
            <div className="hero__orb" aria-hidden="true" />
            <div className="hero__kicker">
              <span className="status-dot" /> Non-custodial wallet utility{' '}
              <span className="kicker-line" />
            </div>
            <h1 className="hero__title">
              Your assets.
              <br />
              <em>Your move.</em>
            </h1>
            <p className="hero__lede">
              A precise, private way to consolidate your on-chain assets. One
              wallet, one destination, <strong>nothing left behind.</strong>
            </p>
            <div className="hero__cta">
              <ConnectButton showBalance={false} />
              <a className="text-link" href="#how-it-works">
                Explore the flow <span aria-hidden>↗</span>
              </a>
            </div>
            <p className="hero__hint">
              Connect a wallet to open your private console
            </p>
          </section>
          <section className="signal-strip" aria-label="Product highlights">
            <div>
              <strong>01</strong>
              <span>Self-custody first</span>
            </div>
            <div>
              <strong>02</strong>
              <span>One signature flow</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Built for EVM chains</span>
            </div>
          </section>
          <section className="how-section" id="how-it-works">
            <div>
              <span className="eyebrow">The protocol</span>
              <h2>
                Less friction.
                <br />
                <em>More control.</em>
              </h2>
            </div>
            <div className="steps">
              <article>
                <span>01</span>
                <h3>Connect</h3>
                <p>
                  Bring the wallet you already trust. We never take custody.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Review</h3>
                <p>See every supported token and decide exactly what moves.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Consolidate</h3>
                <p>
                  Sign once. Your assets arrive at the destination you choose.
                </p>
              </article>
            </div>
          </section>
        </main>
      )}

      <footer className="drain-footer">
        <span>DRN / 2026</span>
        <span>Built for the paranoid &amp; the fresh-starters</span>
        <Link href="/compromised-wallet-rescue/">Rescue guide ↗</Link>
      </footer>
    </div>
  );
}
