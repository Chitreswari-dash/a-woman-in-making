
import './App.css'

const chapters = [
  {
    number: 'I',
    title: 'The Girl Who Keeps Things',
    note: 'a collector of little moments',
    lines: [
      'I keep the sunsets, the words unsaid,',
      'The little dreams that live inside my head.',
      'I frame the ordinary, give small things a name,',
      'And write down the feelings that never stay the same.',
    ],
    photo: '/sunset.jpeg',
    alt: 'Sunsets, coffee, flowers and little candid moments',
  },
  {
    number: 'II',
    title: 'The Things My Heart Cannot Hold Quietly',
    note: 'some feelings become words',
    lines: [
      'I turn my feelings into ink,',
      'And write the things I cannot think.',
      'A page becomes a place to start,',
      'A little home for a crowded heart.',
    ],
    photo: '/poem.jpeg',
    alt: 'My poetry and words',
  },
  {
    number: 'III',
    title: 'The Girl Who Still Lives in the Music',
    note: 'a dancer, always',
    lines: [
      'Somewhere, my dancing feet still know',
      'The rhythm of a life from long ago.',
      'Though years may change the paths I take,',
      'Some parts of me no time can make me forsake.',
    ],
    photo: '/odishi.png',
    alt: 'A memory of my Odissi dance journey',
  },
  {
    number: 'IV',
    title: 'The Things I Want to Build',
    note: 'a curious mind, a thousand possibilities',
    lines: [
      'I am learning how to build and create,',
      'To meet new challenges instead of wait.',
      'With code in my hands and dreams in my sight,',
      'I am making my way, one step at a time.',
    ],
    photo: '/whoim.jpg',
    alt: 'A picture of me with the GyanSys placement poster',
  },
  {
    number: 'V',
    title: 'A Heart That Has Never Learned to Be Halfway',
    note: 'softness is not weakness',
    lines: [
      'I give what I have with a whole-hearted flame,',
      'And rise from the days that have tested my name.',
      'I can be gentle and still choose to be strong,',
      'A heart full of love can still know where it belongs.',
    ],
    photo: '/painting.png',
    alt: 'My original paintings and artwork',
  },
]

function PhotoCard({ src, alt, label, className = '' }) {
  return (
    <div className={`photo-card ${className}`}>
      <div className="photo-frame">
        <div className="photo-placeholder">
          <span>✳</span>
          <p>YOUR LITTLE MOMENT</p>
          <small>Add your photo here</small>
        </div>

        {src && (
          <img
            src={src}
            alt={alt}
            onLoad={(event) => {
              event.currentTarget.style.display = 'block'
              event.currentTarget.previousElementSibling.style.display = 'none'
            }}
            onError={(event) => {
              event.currentTarget.style.display = 'none'
              event.currentTarget.previousElementSibling.style.display = 'flex'
            }}
          />
        )}
      </div>

      <span className="photo-caption">{label}</span>
    </div>
  )
}

function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <a href="#home" className="signature">c.</a>
        <span className="nav-center">A LITTLE WORLD, ENTIRELY MINE</span>
        <a href="#story" className="nav-link">READ MY STORY ↗</a>
      </nav>

      <section className="hero-section hero-with-photo" id="home">
        <div className="hero-photo" />
        <div className="hero-overlay" />

        <p className="eyebrow">✳ THE ART OF BECOMING</p>
        <h1>
          A woman
          <br />
          in the <span>making.</span>
        </h1>
        <p className="hero-description">
          An artist at heart. A lover by nature.
          <br />
          A woman becoming everything she dreams of.
        </p>
        <a href="#about" className="discover-button">
          STEP INTO MY WORLD <span>↓</span>
        </a>

        <div className="hero-note note-left">
          <span>IN PROGRESS</span>
          <p>still learning,<br />always becoming.</p>
        </div>

        <div className="hero-note note-right">
          <span>MADE OF</span>
          <p>dreams, little things<br />& a little stubbornness.</p>
        </div>

        <div className="hero-decoration">✳</div>
        <span className="hero-caption">a life still unfolding ♡</span>
      </section>

      <section className="portrait-section" id="about">
        <div className="portrait-heading">
          <p className="eyebrow">A FACE, A THOUSAND STORIES</p>
          <h2>More than meets <span>the eye.</span></h2>
        </div>

        <div className="portrait-layout">
          <span className="scribble scribble-one">this is me, lately ♡</span>

          <PhotoCard
            src="/portrait2.jpeg"
            alt="A portrait of me"
            label="the girl behind the pages"
            className="main-portrait"
          />

          <p className="portrait-side-note">
            A little bit of art.
            <br />
            A little bit of chaos.
            <br />
            <span>A whole lot of becoming.</span>
          </p>
        </div>
      </section>

      <section className="intro-section">
        <p className="eyebrow">01 — A LITTLE ABOUT ME</p>
        <h2>
          I was never meant
          <br />
          to be <span>just one thing.</span>
        </h2>
        <p className="intro-copy">
          I collect moments, fall in love with little things,
          turn feelings into words, and find pieces of myself
          in everything I create.
        </p>
        <p className="intro-copy">
          There is a dancer in me who never quite left,
          a curious mind that wants to learn everything,
          and a woman who intends to give every dream
          she has a fighting chance.
        </p>
      </section>

      <section className="becoming-section" id="becoming">
        <p className="eyebrow">02 — THE MANY SIDES OF ME</p>
        <h2>Soft heart. <span>Steady ambition.</span></h2>

        <div className="qualities">
          <article>
            <span>✍</span>
            <h3>The storyteller</h3>
            <p>
              Turning feelings, fleeting moments and unfinished
              thoughts into words worth keeping.
            </p>
          </article>

          <article>
            <span>✳</span>
            <h3>The artist</h3>
            <p>
              Finding beauty in colours, photographs, dance,
              and the ordinary magic of life.
            </p>
          </article>

          <article>
            <span>↗</span>
            <h3>The builder</h3>
            <p>
              Learning to create with technology, growing with
              every challenge, and building a career of my own.
            </p>
          </article>
        </div>
      </section>

      <section className="poem-section" id="story">
        <div className="poem-heading">
          <p className="eyebrow">03 — A PAGE FROM MY HEART</p>
          <h2>
            An Atlas of All
            <br />
            My <span>Becoming.</span>
          </h2>
          <p>For the girl who was never made of just one thing.</p>
        </div>

        {chapters.map((chapter, index) => (
          <article
            className={`poem-chapter ${
              index % 2 ? 'reverse' : ''
            }`}
            key={chapter.number}
          >
            <div className="chapter-text">
              <p className="eyebrow">CHAPTER {chapter.number}</p>
              <h3>{chapter.title}</h3>
              <p className="chapter-note">— {chapter.note}</p>

              <div className="poem-lines">
                {chapter.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <PhotoCard
              src={chapter.photo}
              alt={chapter.alt}
              label={chapter.note}
              className="chapter-photo"
            />
          </article>
        ))}

        <div className="last-page">
          <p className="eyebrow">VI — THE LAST PAGE THAT ISN'T</p>
          <h3>So, who am I?</h3>
          <p>
            I am the art, the code, the movement,
            <br />
            The camera, the page, the restless soul.
            <br />
            I am all the things I've been,
            <br />
            And all the dreams still making me whole.
          </p>
          <p>
            Not a finished story waiting to be read,
            <br />
            But a thousand stories learning to be true.
          </p>
          <span>And this is only the beginning. ♡</span>
        </div>
      </section>

      <footer className="footer">
        <p className="eyebrow">STILL BECOMING. ALREADY SOMEONE.</p>
        <h2>And this is only <span>the beginning.</span></h2>
        <p className="footer-signature">With love, Chitreswari Dash ♡</p>
        <a href="#home" className="back-to-top">
          BACK TO THE BEGINNING ↑
        </a>
      </footer>
    </main>
  )
}

export default App
