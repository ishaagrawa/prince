
// import { useState } from "react";
import {
  Heart, Sparkles, Lock, Unlock, Gift, Mail,
  Flower2, Star, X, ArrowDown, ChevronRight,
  Crown, KeyRound
} from "lucide-react";
import "./App.css";
import { useRef, useState } from "react";

const PASSWORD = "1315"; // Change this to your own secret password

const memories = [
  {
    image: "/images/memory1.jpeg",
    title: "My favourite smile",
    message: "The smile I could look at a thousand times and never get tired of."
  },
  {
    image: "/images/memory2.jpeg",
    title: "My happy place",
    message: "Somehow, even ordinary moments become magical with you."
  },
  {
    image: "/images/memory4.jpeg",
    title: "My favourite person",
    message: "Out of everyone in this world, my heart picked you."
  },
  {
    image: "/images/memory3.jpeg",
    title: "A forever memory",
    message: "I hope we make a million more memories together."
  }
];

const reasons = [
  ["🌷", "Your smile", "It makes my entire world feel brighter."],
  ["🧸", "Your little ways", "All the tiny things you do mean so much."],
  ["✨", "Your heart", "I admire the person you are."],
  ["💗", "Your presence", "Everything feels a little better with you."],
  ["🌙", "Your comfort", "You feel like home to me."],
  ["🎀", "Just because", "I don't need a reason to adore you."]
];



function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Music could not play:", error);
      }
    }
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src="/music/our-song.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <button
        className={`music-button ${isPlaying ? "playing" : ""}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "♫" : "▶"}
      </button>

      <span className="music-label">
        {isPlaying ? "Playing our song ♡" : "Our little melody ♡"}
      </span>
    </div>
  );
}


function App() {
  const [giftOpen, setGiftOpen] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [musicNote, setMusicNote] = useState(false);

  const unlockSecret = (e) => {
    e.preventDefault();

    if (password.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Oops! That's not our magic word. Try again, handsome. 💗");
    }
  };

  return (
    <main>
      {/* Floating fairytale decorations */}
      <div className="floating-decor" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={`float-item float-${i % 6}`}>
            {["♡", "✧", "✿", "⋆", "❀", "♥"][i % 6]}
          </span>
        ))}
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <Heart size={19} fill="currentColor" />
          our little fairytale
        </a>

        <div className="nav-links">
          <a href="#surprise">Surprise</a>
          <a href="#letter">Love letter</a>
          <a href="#memories">Memories</a>
          <a href="#secret">Secret</a>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="hero" id="home">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <div className="hero-content">
          <div className="crown-decoration">
            <Crown size={33} />
          </div>

          <span className="eyebrow">
            ✧ A magical little place made just for you ✧
          </span>

          <div className="hero-heart">
            <Heart fill="currentColor" />
            <Sparkles className="sparkle sparkle-one" />
            <Sparkles className="sparkle sparkle-two" />
          </div>

          <p className="small-heading">To my one and only</p>

          <h1>
            My Prince
            <span>Charming</span>
          </h1>

          <p className="hero-description">
            If I could create a little world just for you,
            it would be filled with flowers, magic,
            endless happiness and all the love in my heart.
          </p>

          <a href="#surprise" className="magic-button">
            Enter our little world <Heart size={17} />
          </a>

          <div className="scroll-text">
            <ArrowDown size={15} /> A little fairytale awaits
          </div>
        </div>

        <div className="hero-bottom-flower">❀</div>
      </section>

      {/* 2. SURPRISE */}
      <section className="section surprise-section" id="surprise">
        <div className="section-heading">
          <span className="eyebrow">Chapter I · A little surprise</span>
          <h2>A gift from my heart</h2>
          <p>Every prince deserves a little magic. ♡</p>
        </div>

        <div className="gift-card">
          <div className="gift-decoration">✧ ❀ ✧</div>

          <div className="gift-illustration">
            <Gift size={57} strokeWidth={1.2} />
            <span className="gift-heart">♡</span>
          </div>

          <h3>Something special awaits...</h3>
          <p>
            I wrapped a little piece of my heart
            just for you. Are you ready to open it?
          </p>

          <button
            className="magic-button"
            onClick={() => setGiftOpen(!giftOpen)}
          >
            {giftOpen ? "Close your gift" : "Unwrap your gift"}
            <Sparkles size={17} />
          </button>

          {giftOpen && (
            <div className="gift-reveal">
              <div className="reveal-icon">💗</div>
              <span className="eyebrow">A wish for my prince</span>
              <h3>Happy Men's Day, my love!</h3>
              <p>
                Today, I celebrate you. Your dreams, your
                kindness, your strength, your silly side,
                and everything that makes you who you are.
                I hope life gives you endless reasons to
                smile. You deserve the most beautiful things
                in this world, and I hope I get to be there
                cheering for you through all of them.
              </p>
              <strong>You're my favourite blessing. ♡</strong>
            </div>
          )}
        </div>
      </section>
 <MusicPlayer />
      {/* 3. LOVE LETTER */}
      <section className="section letter-section" id="letter">
        <div className="section-heading">
          <span className="eyebrow">Chapter II · Words from my heart</span>
          <h2>A letter for my prince</h2>
          <p>Some feelings deserve their own little page.</p>
        </div>

        <div className={`letter-card ${letterOpen ? "opened" : ""}`}>
          <div className="letter-top">
            <span>♡ A little love note ♡</span>
            <Flower2 size={24} />
          </div>

          <div className="letter-seal">💌</div>

          <h3>To my dearest Prince Charming,</h3>

          <p className="letter-preview">
            I have a thousand little things I want to tell you...
          </p>

          <button
            className="outline-button"
            onClick={() => setLetterOpen(!letterOpen)}
          >
            <Mail size={17} />
            {letterOpen ? "Fold my letter" : "Open my letter"}
          </button>

          {letterOpen && (
            <div className="full-letter">
              <p>My sweetest Penguin Ji,</p>

              <p>
                I wish I could put my feelings into a little
                box and give them to you, so you could see
                just how much space you take up in my heart.
              </p>

              <p>
                You make ordinary days feel special.
                You make me smile at random moments.
                And somehow, even when words are not enough,
                just having you around makes everything
                feel a little more beautiful.
              </p>

              <p>
                I admire you more than I probably tell you.
                I admire your efforts, your dreams, your
                strength, and even the little things you
                might not notice about yourself.
              </p>

              <p>
                On this Men's Day, I want you to remember
                that you are appreciated, admired, cherished,
                and loved more than you know.
              </p>

              <p>
                I don't need a perfect fairytale.
                I just want a thousand imperfect,
                beautiful days with you.
              </p>

              <p className="letter-signature">
                All my love, forever and always. ♡
                <br />
                Your 
                Madam ji
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. MY HEART */}
      <section className="section heart-section" id="heart">
        <div className="section-heading">
          <span className="eyebrow">Chapter III · A piece of my heart</span>
          <h2>Why you're my favourite</h2>
          <p>Six little reasons. A million more waiting.</p>
        </div>

        <div className="reasons-grid">
          {reasons.map(([emoji, title, message], index) => (
            <div className="reason-card" key={title}>
              <span className="reason-number">0{index + 1}</span>
              <div className="reason-icon">{emoji}</div>
              <h3>{title}</h3>
              <p>{message}</p>
            </div>
          ))}
        </div>

        <div className="heart-quote">
          <Heart fill="currentColor" />
          <h3>
            In a universe full of stars,
            <br /> my heart found its favourite.
          </h3>
          <p>And that favourite will always be you.</p>
        </div>
      </section>

      {/* 5. MEMORIES */}
      <section className="section memories-section" id="memories">
        <div className="section-heading">
          <span className="eyebrow">Chapter IV · Our little universe</span>
          <h2>Memories I treasure</h2>
          <p>Little photographs, enormous feelings.</p>
        </div>

        <div className="memory-grid">
          {memories.map((memory, index) => (
            <button
              key={memory.title}
              className={`memory-card memory-${index + 1}`}
              onClick={() => setSelectedPhoto(memory)}
            >
              <div className="memory-image">
                <img src={memory.image} alt={memory.title} />
              </div>
              <div className="memory-caption">
                <span>{memory.title}</span>
                <Heart size={16} fill="currentColor" />
              </div>
              <span className="memory-sticker">♡</span>
            </button>
          ))}
        </div>

        <p className="memory-footer">
          Every picture holds a little piece of my heart. 🌷
        </p>
      </section>

      {/* PHOTO LIGHTBOX */}
      {selectedPhoto && (
        <div
          className="photo-modal"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="modal-close"
            aria-label="Close photo"
            onClick={() => setSelectedPhoto(null)}
          >
            <X />
          </button>

          <div
            className="photo-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedPhoto.image} alt={selectedPhoto.title} />
            <h3>{selectedPhoto.title}</h3>
            <p>{selectedPhoto.message}</p>
            <span>Captured with love ♡</span>
          </div>
        </div>
      )}

      {/* 6. SECRET MESSAGE */}
      <section className="section secret-section" id="secret">
        <div className="section-heading">
          <span className="eyebrow">Chapter V · A secret just for you</span>
          <h2>The secret garden</h2>
          <p>
            Not everything in a fairytale is revealed at once...
          </p>
        </div>

        <div className="secret-card">
          <div className="secret-lock">
            {unlocked ? (
              <Unlock size={45} />
            ) : (
              <Lock size={45} />
            )}
          </div>

          {!unlocked ? (
            <>
              <h3>A little secret is waiting</h3>
              <p>
                Only my Prince Charming knows the magic word.
                Enter it to discover your secret message.
              </p>

              <form className="secret-form" onSubmit={unlockSecret}>
                <div className="password-input">
                  <KeyRound size={18} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter our secret word..."
                    aria-label="Secret password"
                  />
                </div>

                <button type="submit" className="magic-button">
                  Unlock my secret <Sparkles size={17} />
                </button>

                {error && <p className="error-message">{error}</p>}
              </form>

              <span className="secret-hint">
                A little hint: It's a mixer of your and mine birth dates. 🌙
              </span>
            </>
          ) : (
            <div className="secret-reveal">
              <div className="secret-stars">✧ ♡ ✧</div>
              <span className="eyebrow">You found my secret!</span>
              <h3>Something I've been keeping in my heart...</h3>

              <p>
                If I could make one wish, it would be to
                see you happy, healthy, loved, and proud
                of the life you're building.
              </p>

              <p>
                I hope you never doubt yourself.
                I hope you always chase your dreams.
                And when life gets difficult, I hope you
                remember that you don't have to face
                everything alone.
              </p>

              <p>
                I am so proud of you, my love.
                I choose you in every little universe,
                in every lifetime, in every fairytale.
              </p>

              <h3 className="secret-final">
                I love you, my Prince Charming. ♡
              </h3>

              <div className="secret-stars">🌷 💗 🌷</div>
            </div>
          )}
        </div>
      </section>

      {/* 7. FINAL PAGE */}
      <section className="final-section">
        <div className="final-stars">✧ · ♡ · ✧</div>
        <div className="final-crown"><Crown size={40} /></div>

        <span className="eyebrow">And they lived with lots of love...</span>

        <h2>
          Happy Men's Day,
          <span>my Prince Charming.</span>
        </h2>

        <p>
          May your life always be filled with magic,
          your heart with peace, your dreams with possibility,
          and your days with reasons to smile.
        </p>

        <p className="final-love">
          If I had to write our story again,
          I'd still choose you. Every single time.
        </p>

        <div className="final-heart">♡</div>

        <h3>With all my love,</h3>
        <p className="signature">Your girl, forever. 🎀</p>

        <a href="#home" className="back-top">
          Back to our fairytale ↑
        </a>

        <footer>
          Made with love, a little magic, and lots of kisses.
          <br /> © Just for my Prince Charming ♡
        </footer>
      </section>
    
    </main>
  );
}

export default App;
