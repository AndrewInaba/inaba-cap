import { QRCodeSVG } from 'qrcode.react';

const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScPi17edM1Ni76EXMJ4B95yirhFMtPM_X0rk5mdPIf12BDbXQ/viewform?usp=publish-editor';

const signs = [
  'Seems confused',
  'Forgets an instruction or is unsure of the game, position, score, or opponent',
  'Moves clumsily',
  'Answers questions slowly or repeats questions',
  'Cannot remember events before or after the impact',
  'Loses consciousness, even for a moment',
  'Behavior or personality changes',
];

const symptoms = [
  'Headaches',
  'Nausea or vomiting',
  'Dizziness or balance problems',
  'Bothered by light or noise',
  'Feeling foggy or groggy',
  'Trouble concentrating',
  'Problems with short-term or long-term memory',
];

const whatToDo = [
  'Remove the concussed athlete from play',
  'Keep an athlete with a possible concussion out of play on the same day of the injury until cleared by a healthcare provider',
  'Inform the athlete’s parent(s) about the possible concussion',
  'Ask for written instructions from the athlete’s healthcare provider on return to play',
  'Offer support during recovery',
];

const returnToPlay = [
  'Clearance by a healthcare provider with written instructions',
  'Return to non-sports activities',
  'Light aerobic exercise',
  'Sport-specific exercise',
  'Non-contact training drills',
  'Full-contact practice',
  'Return to regular sports activities',
];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function ListCard({ title, items }) {
  return (
    <article className="card list-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="modern-header">
        <div className="header-inner">
          <a href="#top" className="logo-area">
            <img src="/images/logo.png" alt="INABA CAP Logo" className="logo-img" />
            <div className="logo-text">
              <h1>INABA'S CAP</h1>
              <span>Concussion Awareness Program</span>
            </div>
          </a>

          <nav className="header-nav">
            <a href="#learn">Learn</a>
            <a href="#survey">Survey</a>
            <a href="#pamphlet">Pamphlet</a>
            <a href="#contact" className="nav-highlight">Contact</a>
          </nav>
        </div>
      </header>

      <section className="modern-hero" id="top">
        <div className="hero-backdrop" />
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-pill">Recognize • Respond • Recover</span>
            <h2>Modern concussion awareness for youth sports communities.</h2>
            <h3>Clear guidance for athletes, parents, and coaches.</h3>
            <p>
              INABA&apos;S CAP turns concussion education into something easy to understand and easy to share.
              Learn the warning signs, know what to do right away, and support a safe return to school,
              activity, and play.
            </p>

            <div className="hero-buttons">
              <a href="#learn" className="button primary">Learn About Concussions</a>
              <a href="#survey" className="button secondary">Take Awareness Survey</a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <strong>Recognize</strong>
                <span>Spot signs and symptoms early.</span>
              </div>
              <div className="stat-card">
                <strong>Respond</strong>
                <span>Remove from play and seek medical guidance.</span>
              </div>
              <div className="stat-card">
                <strong>Recover</strong>
                <span>Follow a step-by-step return-to-play protocol.</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="pamphlet-frame">
                <img src="/images/cap-image.png" alt="CAP Logo" />
            </div>
            <div className="hero-mini-grid">
              <div className="mini-card">
                <span>Safety first</span>
                <strong>No same-day return without medical clearance</strong>
              </div>
              <div className="mini-card accent">
                <span>Community outreach</span>
                <strong>Awareness tools for schools, teams, and families</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section id="survey" className="content-section survey-section">
          <SectionHeader
            eyebrow="Survey"
            title="Take the concussion awareness form"
            text="Scan the QR code or click the button to open the Google Form."
          />

          <div className="survey-grid">
            <article className="card survey-card">
              <h3>Google Form</h3>
              <a href={googleFormUrl} target="_blank" rel="noreferrer" className="button primary survey-button">
                Open Survey
              </a>
              <p className="survey-note">{googleFormUrl}</p>
            </article>

            <article className="card qr-card">
              <h3>Scan QR Code</h3>
              <div className="qr-box">
                <QRCodeSVG value={googleFormUrl} size={220} bgColor="#ffffff" fgColor="#111111" includeMargin />
              </div>
            </article>
          </div>
        </section>

        <section id="learn" className="content-section">
          <SectionHeader
            eyebrow="Mission"
            title="Why INABA'S CAP exists"
            text="Promoting concussion awareness to create safer youth sports environments."
          />
          <div className="two-column">
            <article className="card">
              <h3>Mission Statement</h3>
              <p>
                INABA'S CAP aims to improve concussion awareness among youth athletes, parents, and coaches
                to support safer sports and full recovery after head injuries.
              </p>
            </article>
            <article className="card">
              <h3>Education Goal</h3>
              <p>
                Help communities recognize concussion warning signs early and avoid rushing athletes back
                into play before they are medically cleared.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section alt">
          <SectionHeader
            eyebrow="Recognize"
            title="Signs and symptoms"
            text="Signs are what others notice. Symptoms are what the athlete feels."
          />
          <div className="two-column">
            <ListCard title="Signs" items={signs} />
            <ListCard title="Symptoms" items={symptoms} />
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow="Respond"
            title="What to do after a concussion"
            text="When in doubt, remove the athlete from play and seek medical guidance."
          />
          <div className="two-column">
            <ListCard title="Immediate Steps" items={whatToDo} />
            <ListCard title="Return-to-Play" items={returnToPlay} />
          </div>
        </section>

        <section id="pamphlet" className="content-section alt">
          <SectionHeader
            eyebrow="Pamphlet"
            title="Program pamphlet"
            text="Digital version of the concussion awareness pamphlet."
          />
          <div className="pamphlet-grid">
            <figure className="pamphlet-card">
              <img src="/images/pamphlet-outside.png" alt="Outside pages of the pamphlet" />
            </figure>
            <figure className="pamphlet-card">
              <img src="/images/pamphlet-inside.png" alt="Inside pages of the pamphlet" />
            </figure>
          </div>
        </section>

        <section id="contact" className="content-section">
          <SectionHeader
            eyebrow="Contact"
            title="Get in touch"
            text="For more information about the concussion awareness program."
          />
          <div className="contact-card">
            <div>
              <span className="contact-label">Program</span>
              <p>INABA'S CAP - Concussion Awareness Program</p>
            </div>
            <div>
              <span className="contact-label">Contact</span>
              <p>Andrew Inaba</p>
            </div>
            <div>
              <span className="contact-label">Email</span>
              <p><a href="mailto:inabaandrew@gmail.com">inabaandrew@gmail.com</a></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
