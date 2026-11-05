import "../QuenyaRelicCard.css";

// The crest and its mirror are drawn from one path: no approximate symmetry,
// font glyphs, or ornamental pieces positioned against unrelated containers.
export function QuenyaRelicCrest() {
  return (
    <div className="qya-relic__crown" aria-hidden="true">
      <svg viewBox="0 0 340 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="qya-crest-gold" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f5e2ac" />
            <stop offset=".54" stopColor="#b99559" />
            <stop offset="1" stopColor="#684f2e" />
          </linearGradient>
          <linearGradient id="qya-crest-stone" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#b8fbe0" />
            <stop offset=".30" stopColor="#1d9d73" />
            <stop offset="1" stopColor="#073f32" />
          </linearGradient>
          <g id="qya-crest-half">
            <path d="M153 23C126 23 112 17 97 15 74 12 58 23 38 19 29 17 21 12 10 13"
              stroke="url(#qya-crest-gold)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M145 28C120 29 109 36 87 33 73 31 60 29 49 32"
              stroke="#b99b61" strokeOpacity=".65" strokeWidth=".9" strokeLinecap="round" />
            <path d="M109 16C102 6 94 6 90 8 92 17 99 21 109 16ZM75 17C68 6 61 7 56 10 59 19 66 23 75 17ZM119 30C110 38 105 40 99 39 100 30 107 26 119 30ZM60 30C52 38 45 39 40 36 43 28 50 26 60 30Z"
              fill="#a78c59" fillOpacity=".34" stroke="#d5b777" strokeWidth=".85" />
            <circle cx="24" cy="13" r="2" fill="#ddc586" />
          </g>
        </defs>
        <use href="#qya-crest-half" />
        <use href="#qya-crest-half" transform="translate(340 0) scale(-1 1)" />
        <path d="M170 3 181 22 170 42 159 22Z" fill="#4b3d26" stroke="#ead49b" strokeWidth="1.5" />
        <path d="M170 7 177 22 170 36 163 22Z" fill="url(#qya-crest-stone)" stroke="#0b3a2d" strokeWidth=".9"/>
        <path d="M170 8 170 35M163 22H177" stroke="#d5fff0" strokeOpacity=".35" strokeWidth=".65"/>
        <path d="M166 13 170 8 172 15" stroke="#e6fff2" strokeOpacity=".65" strokeWidth=".85"/>
        <path d="M151 23H157M183 23H189" stroke="#ead49b" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// One engraved leaf shape, rotated/reflected by CSS in all four corners.
export function QuenyaPhotoFiligree() {
  return (
    <div className="qya-relic__filigree" aria-hidden="true">
      {["nw", "ne", "sw", "se"].map((corner) => (
        <svg className={`qya-relic__corner qya-relic__corner--${corner}`}
          viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" key={corner}>
          <path d="M3 92C3 37 37 3 92 3" stroke="#d5b477" strokeWidth="2.3" strokeLinecap="round" />
          <path d="M10 76C12 41 40 13 75 10" stroke="#ffdf9c" strokeOpacity=".78" strokeWidth=".9" />
          <path d="M14 68C22 56 35 56 42 46 49 36 44 24 33 26 25 28 26 38 32 39 36 40 39 37 38 33"
            stroke="#cfa866" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M43 43C51 49 60 47 64 40M24 66C32 69 35 78 32 87"
            stroke="#9e834f" strokeWidth="1.1" strokeLinecap="round" />
          <path d="M19 44C11 35 13 25 20 21 28 27 29 37 19 44ZM44 20C50 12 61 10 67 14 65 23 56 28 44 20ZM44 50C55 49 61 54 63 61 53 65 46 60 44 50ZM24 65C18 72 18 83 23 88 32 83 31 72 24 65Z"
            fill="#ad8b51" fillOpacity=".53" stroke="#e2c181" strokeWidth="1.05" strokeLinejoin="round" />
          <path d="M21 24 19 40M49 20 63 15M47 53 60 60M24 68 24 85"
            stroke="#f6d994" strokeOpacity=".62" strokeWidth=".6" />
          <path d="M7 93 7 72M72 7 93 7" stroke="#72562e" strokeWidth="2" />
        </svg>
      ))}
      <span className="qya-relic__gem qya-relic__gem--left" />
      <span className="qya-relic__gem qya-relic__gem--right" />
    </div>
  );
}
