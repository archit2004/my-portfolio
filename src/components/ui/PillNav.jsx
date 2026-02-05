import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const PillNav = ({
  logo,
  logoText, // <--- NEW PROP for text logo
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoTargetRef = useRef(null); // Renamed from logoImgRef to generic target
  const logoTweenRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.5, ease, overwrite: 'auto' }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 0.5, ease, overwrite: 'auto' }, 0);
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 0.5, ease, overwrite: 'auto' }, 0);
        }
        tlRefs.current[index] = tl;
      });
    };

    layout();
    const onResize = () => layout();
    window.addEventListener('resize', onResize);
    if (document.fonts?.ready) document.fonts.ready.then(layout).catch(() => {});

    if (initialLoadAnimation) {
      if (logoRef.current) gsap.fromTo(logoRef.current, { scale: 0 }, { scale: 1, duration: 0.6, ease });
      if (navItemsRef.current) gsap.fromTo(navItemsRef.current, { width: 0, opacity:0 }, { width: 'auto', opacity:1, duration: 0.8, ease });
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = i => {
    const tl = tlRefs.current[i];
    if (tl) activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease });
  };

  const handleLeave = i => {
    const tl = tlRefs.current[i];
    if (tl) activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease });
  };

  const handleLogoEnter = () => {
    const target = logoTargetRef.current;
    if (!target) return;
    logoTweenRef.current?.kill();
    gsap.set(target, { rotate: 0 });
    logoTweenRef.current = gsap.to(target, {
      rotate: 360,
      duration: 0.4, // Slower rotation for text
      ease,
      overwrite: 'auto'
    });
  };

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
    '--nav-h': '50px',
    '--pill-pad-x': '24px',
    '--pill-gap': '4px'
  };

  return (
    // Centering Container
    <div className="fixed top-6 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <nav className={`pointer-events-auto flex items-center justify-center ${className}`} style={cssVars}>
        
        {/* LOGO SECTION (Image or Text) */}
        {(logo || logoText) && (
          <a
             href="#"
             ref={logoRef}
             onMouseEnter={handleLogoEnter}
             className="rounded-full inline-flex items-center justify-center overflow-hidden mr-2 shadow-lg hover:scale-105 transition-transform"
             style={{ width: 'var(--nav-h)', height: 'var(--nav-h)', background: 'var(--base)' }}
          >
             {logo ? (
                <img ref={logoTargetRef} src={logo} alt={logoAlt} className="w-full h-full object-cover rounded-full p-1" />
             ) : (
                <span ref={logoTargetRef} className="font-bold text-white text-lg tracking-tight select-none">
                  {logoText}
                </span>
             )}
          </a>
        )}

        {/* NAV ITEMS */}
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex shadow-2xl overflow-hidden"
          style={{ height: 'var(--nav-h)', background: 'var(--base)' }}
        >
          <ul className="list-none flex items-stretch m-0 p-[4px] h-full" style={{ gap: 'var(--pill-gap)' }}>
            {items.map((item, i) => (
              <li key={i} className="flex h-full">
                <a
                  href={item.href}
                  className="relative overflow-hidden inline-flex items-center justify-center h-full rounded-full font-bold text-sm uppercase tracking-wider px-6 cursor-pointer"
                  style={{ background: 'var(--pill-bg)', color: 'var(--pill-text)' }}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] pointer-events-none"
                    style={{ background: '#3b82f6' }} 
                    ref={el => (circleRefs.current[i] = el)}
                  />
                  <span className="relative z-[2] block overflow-hidden">
                     <span className="pill-label block">{item.label}</span>
                     <span className="pill-label-hover absolute top-0 left-0 block text-white">{item.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default PillNav;