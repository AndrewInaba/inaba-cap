import { QRCodeSVG } from 'qrcode.react';

const googleFormUrl = 'https://docs.google.com/forms/d/YOUR_FORM_ID/viewform';
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
      <header className="hero">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-badge">INABA'S CAP</span>
            <span className="brand-subtitle">Concussion Awareness Program</span>
          </div>
          <div className="nav-actions">
            <a href="#survey" className="nav-link">Survey</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Youth sports safety starts with awareness</p>
            <h1>Recognize concussions early. Respond fast. Support safe recovery.</h1>
            <p className="hero-text">
              INABA'S CAP helps youth athletes, parents, and coaches understand concussion warning signs,
              common symptoms, next steps after an injury, and the gradual return-to-play process.
            </p>

            <div className="hero-actions">
              <a href="#learn" className="button primary">Explore the program</a>
              <a href="#survey" className="button secondary">Open survey and QR code</a>
            </div>

            <div className="hero-highlights">
              <div>
                <strong>Recognize</strong>
                <span>Know the signs and symptoms.</span>
              </div>
              <div>
                <strong>Respond</strong>
                <span>Remove from play and seek medical guidance.</span>
              </div>
              <div>
                <strong>Recover</strong>
                <span>Follow a step-by-step return-to-play protocol.</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="quick-card">
              <h3>What is a concussion?</h3>
              <p>
                A concussion is a mild traumatic brain injury caused by a hit to the head or body that
                makes the brain move rapidly inside the skull. Early recognition and proper care matter.
              </p>
            </div>
            <div className="quick-card emphasis">
              <h3>Important reminder</h3>
              <p>
                An athlete with a possible concussion should stay out of play the same day until cleared
                by a healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="survey" className="content-section survey-section">
          <SectionHeader
            eyebrow="Survey"
            title="Take the concussion awareness form"
            text="Use the button or scan the QR code to open the Google Form on a phone, tablet, or computer."
          />
          <div className="survey-grid">
            <article className="card survey-card">
              <h3>Google Form link</h3>
              <p>
                Replace the sample link in <code>src/App.jsx</code> with your live Google Form URL,
                then redeploy on Vercel.
              </p>
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noreferrer"
                className="button primary survey-button"
              >
                Open Google Form
              </a>
              <p className="survey-note">
                Current placeholder: <span>{googleFormUrl}</span>
              </p>
            </article>

            <article className="card qr-card">
              <h3>Scan the QR code</h3>
              <div className="qr-wrap">
                <QRCodeSVG
                  value={googleFormUrl}
                  size={220}
                  bgColor="#ffffff"
                  fgColor="#1d2939"
                  includeMargin={true}
                />
              </div>
              <p>
                After you paste your real Google Form link into the code, this QR code updates automatically.
              </p>
            </article>
          </div>
        </section>

        <section id="learn" className="content-section">
          <SectionHeader
            eyebrow="Mission"
            title="Why INABA'S CAP exists"
            text="The program promotes concussion awareness among youth athletes and families to create a safer sports environment and support complete recovery."
          />
          <div className="two-column">
            <article className="card">
              <h3>Mission statement</h3>
              <p>
                INABA'S CAP shares knowledge and supports community outreach to build a culture that
                prioritizes concussion safety and the well-being of every young athlete.
              </p>
            </article>
            <article className="card">
              <h3>Education goal</h3>
              <p>
                The goal is simple: help more people recognize concussion warning signs, understand what
                to do next, and avoid rushing athletes back into sports before they are ready.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section alt">
          <SectionHeader
            eyebrow="Recognize"
            title="Signs and symptoms to watch for"
            text="Signs are what others may notice. Symptoms are what the athlete may feel or report."
          />
          <div className="two-column">
            <ListCard title="Signs" items={signs} />
            <ListCard title="Symptoms" items={symptoms} />
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow="Respond"
            title="What to do after a possible concussion"
            text="When in doubt, remove the athlete from play and follow medical guidance."
          />
          <div className="two-column">
            <ListCard title="Immediate action steps" items={whatToDo} />
            <ListCard title="Return-to-play protocol" items={returnToPlay} />
          </div>
        </section>

        <section id="pamphlet" className="content-section alt">
          <SectionHeader
            eyebrow="Pamphlet"
            title="Program pamphlet pages"
            text="The original awareness pamphlet is included below so this website can also serve as a digital version of your printed materials."
          />
          <div className="pamphlet-grid">
            <figure className="pamphlet-card">
              <img src="/images/pamphlet-outside.png" alt="Outside pages of the INABA'S CAP pamphlet" />
              <figcaption>Outside / cover layout</figcaption>
            </figure>
            <figure className="pamphlet-card">
              <img src="/images/pamphlet-inside.png" alt="Inside pages of the INABA'S CAP pamphlet" />
              <figcaption>Inside educational content</figcaption>
            </figure>
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <SectionHeader
            eyebrow="Contact"
            title="Get in touch"
            text="Use the details below for more information about the concussion awareness program."
          />
          <div className="contact-card">
            <div>
              <span className="contact-label">Program</span>
              <p>INABA'S CAP — Concussion Awareness Program</p>
            </div>
            <div>
              <span className="contact-label">Contact person</span>
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
