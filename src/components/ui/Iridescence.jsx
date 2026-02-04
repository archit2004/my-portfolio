import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;
uniform float uScale;

varying vec2 vUv;

void main() {
  // FIX: Use gl_FragCoord to ensure perfect square pixels (no stretching)
  // regardless of the container's aspect ratio.
  vec2 uv = gl_FragCoord.xy / uResolution.y * uScale;

  // OPTIONAL: Local mouse interaction (subtle ripple) instead of global warping
  // We only disturb the UVs slightly near the mouse, not the whole screen.
  // Normalize mouse to canvas aspect ratio
  vec2 mouse = uMouse * uResolution.xy / uResolution.y; 
  float dist = distance(uv, mouse * uScale);
  float strength = uAmplitude / (dist + 0.1);
  uv += strength * 0.05; // Very subtle local warp

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  
  // The fluid iteration loop
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  
  d += uTime * 0.5 * uSpeed;
  
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Iridescence({ 
  color = [1, 1, 1], 
  speed = 1.0, 
  amplitude = 0.1, 
  scale = 1.0, 
  mouseReact = true, 
  ...rest 
}) {
  const ctnDom = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const renderer = new Renderer({ alpha: true }); // Enable transparency
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0); // Transparent background

    let program;

    function resize() {
      const scaleFactor = 1;
      renderer.setSize(ctn.offsetWidth * scaleFactor, ctn.offsetHeight * scaleFactor);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    window.addEventListener('resize', resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        },
        uMouse: { value: new Float32Array([mousePos.current.x, mousePos.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
        uScale: { value: scale }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animateId;
    let lastTime = 0;

    function update(t) {
      animateId = requestAnimationFrame(update);
      // Ensure smooth time progression
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      // Invert Y for shader coordinates (bottom-left origin)
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      
      mousePos.current = { x, y };
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    }
    
    if (mouseReact) {
      ctn.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', resize);
      if (mouseReact) {
        ctn.removeEventListener('mousemove', handleMouseMove);
      }
      if (ctn.contains(gl.canvas)) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, speed, amplitude, scale, mouseReact]);

  return <div ref={ctnDom} className="w-full h-full" {...rest} />;
}