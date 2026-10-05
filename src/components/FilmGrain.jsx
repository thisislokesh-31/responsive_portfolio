export default function FilmGrain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9000] mix-blend-overlay opacity-[0.04]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.85" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"></rect>
      </svg>
    </div>
  );
}
