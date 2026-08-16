import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// --- TYPE DEFINITIONS FOR PROPS ---
interface NavLink { label: string; href: string; }
interface Project { title: string; description: string; tags: string[]; imageContent?: React.ReactNode; }
interface Stat { value: string; label: string; }

export interface PortfolioPageProps {
  logo?: { initials: React.ReactNode; name: React.ReactNode; };
  navLinks?: NavLink[];
  resume?: { label: string; onClick?: () => void; };
  hero?: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode; };
  ctaButtons?: { primary: { label: string; onClick?: () => void; }; secondary: { label: string; onClick?: () => void; }; };
  projects?: Project[];
  stats?: Stat[];
  showAnimatedBackground?: boolean;
}

// --- ANIMATED BACKGROUND COMPONENT ---
const AuroraBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!mountRef.current) return;
        const currentMount = mountRef.current;
        const parent = currentMount.parentElement;
        if (!parent) return;
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer();
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '0';
        renderer.domElement.style.display = 'block';
        currentMount.appendChild(renderer.domElement);
        const material = new THREE.ShaderMaterial({
            uniforms: { iTime: { value: 0 }, iResolution: { value: new THREE.Vector2(parent.clientWidth, parent.clientHeight) } },
            vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
            fragmentShader: `
                uniform float iTime; uniform vec2 iResolution;
                #define NUM_OCTAVES 3
                float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
                float noise(vec2 p){ vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);return res*res; }
                float fbm(vec2 x) { float v=0.0;float a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50));for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(x);x=rot*x*2.0+shift;a*=0.4;}return v;}
                void main() {
                    vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.,-4.,4.,6.);vec4 o=vec4(0.);float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;
                    for(float i=0.;i++<35.;){vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;float tailNoise=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/35.));vec4 auroraColors=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));float thinnessFactor=smoothstep(0.,1.,i/35.)*.6;o+=currentContribution*(1.+tailNoise*.8)*thinnessFactor;}
                    o=tanh(pow(o/100.,vec4(1.6)));gl_FragColor=o*1.5;
                }`
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        let animationFrameId: number;
        const animate = () => { animationFrameId = requestAnimationFrame(animate); material.uniforms.iTime.value += 0.016; renderer.render(scene, camera); };
        const updateSize = () => { const w = parent.clientWidth; const h = parent.clientHeight; renderer.setSize(w, h); material.uniforms.iResolution.value.set(w, h); };
        const ro = new ResizeObserver(updateSize);
        ro.observe(parent);
        updateSize();
        animate();
        return () => { cancelAnimationFrame(animationFrameId); ro.disconnect(); if (currentMount.contains(renderer.domElement)) currentMount.removeChild(renderer.domElement); renderer.dispose(); material.dispose(); geometry.dispose(); };
    }, []);
    return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

// --- DEFAULT DATA ---
const defaultData: PortfolioPageProps = {
  logo: { initials: 'MT', name: 'Meng To' },
  navLinks: [ { label: 'About', href: '#about' }, { label: 'Projects', href: '#projects' }, { label: 'Skills', href: '#skills' } ],
  resume: { label: 'Resume' },
  hero: { titleLine1: 'Creative Developer &', titleLine2Gradient: 'Digital Designer', subtitle: 'I craft beautiful digital experiences through code and design. Specializing in modern web development, UI/UX design, and bringing innovative ideas to life.', },
  ctaButtons: { primary: { label: 'View My Work' }, secondary: { label: 'Get In Touch' }, },
  projects: [ { title: 'FinTech Mobile App', description: 'React Native app with AI-powered financial insights.', tags: ['React Native', 'Node.js'] }, { title: 'Data Visualization Platform', description: 'Interactive dashboard for complex data analysis.', tags: ['D3.js', 'Python'] }, { title: '3D Portfolio Site', description: 'Immersive WebGL experience with 3D elements.', tags: ['Three.js', 'WebGL'] }, ],
  stats: [ { value: '50+', label: 'Projects Completed' }, { value: '5+', label: 'Years Experience' }, { value: '15+', label: 'Happy Clients' }, ],
};

// --- MAIN CUSTOMIZABLE PORTFOLIO COMPONENT ---
const PortfolioPage: React.FC<PortfolioPageProps> = (props) => {
  const logo = props.logo ?? defaultData.logo!;
  const navLinks = props.navLinks ?? defaultData.navLinks!;
  const resume = props.resume ?? defaultData.resume!;
  const hero = props.hero ?? defaultData.hero!;
  const ctaButtons = props.ctaButtons ?? defaultData.ctaButtons!;
  const projects = props.projects ?? defaultData.projects!;
  const stats = props.stats ?? defaultData.stats!;
  const showAnimatedBackground = props.showAnimatedBackground ?? true;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-white text-[#111] dark:bg-[#111] dark:text-[#f6f3ec]">
      {showAnimatedBackground && <AuroraBackground />}
      <div className="relative">
        <nav className="w-full px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg border border-[#e3e7ec] dark:border-[#2b2a25] bg-[#e3e7ec]/30 dark:bg-[#2b2a25]/30 backdrop-blur-md flex items-center justify-center">
                        <span className="text-sm font-bold text-[#111] dark:text-[#f6f3ec]">{logo.initials}</span>
                    </div>
                    <span className="text-lg font-medium text-[#111] dark:text-[#f6f3ec]">{logo.name}</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} className="text-[#646b75] hover:text-[#111] dark:text-[#9a958a] dark:hover:text-[#f6f3ec] transition-colors text-sm">{link.label}</a>
                    ))}
                </div>
                <button onClick={() => { resume.onClick?.(); scrollTo("about"); }} className="rounded-lg border border-[#e3e7ec] dark:border-[#2b2a25] bg-white/80 dark:bg-[#111]/80 backdrop-blur-md px-4 py-2 text-sm font-medium text-[#111] dark:text-[#f6f3ec]">{resume.label}</button>
            </div>
        </nav>
        <div className="h-px bg-[#e3e7ec] dark:bg-[#2b2a25]" />
        <main id="about" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-8">
                    <h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-light text-[#111] dark:text-[#f6f3ec] tracking-tight mb-4">
                        {hero.titleLine1}
                        <span className="block tracking-tight bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">{hero.titleLine2Gradient}</span>
                    </h1>
                    <p className="md:text-xl max-w-3xl leading-relaxed text-lg font-light text-[#646b75] dark:text-[#9a958a] mx-auto">{hero.subtitle}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <button onClick={() => { ctaButtons.primary.onClick?.(); scrollTo("projects"); }} className="rounded-lg bg-[#111] dark:bg-[#f6f3ec] text-white dark:text-[#111] px-6 py-3 font-medium text-sm min-w-[160px]">{ctaButtons.primary.label}</button>
                    <button onClick={() => { ctaButtons.secondary.onClick?.(); scrollTo("skills"); }} className="min-w-[160px] rounded-lg border border-[#e3e7ec] dark:border-[#2b2a25] bg-white/80 dark:bg-[#111]/80 backdrop-blur-md px-6 py-3 text-sm font-medium text-[#111] dark:text-[#f6f3ec]">{ctaButtons.secondary.label}</button>
                </div>
                <div className="h-px bg-[#e3e7ec] dark:bg-[#2b2a25] mb-16" />
                <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                    {projects.map((project, index) => (
                        <div key={index} className="rounded-2xl border border-[#e3e7ec] dark:border-[#2b2a25] bg-white/60 dark:bg-[#111]/60 backdrop-blur-sm p-6 text-left">
                            <div className="rounded-xl h-32 mb-4 flex items-center justify-center bg-[#f5f7fa] dark:bg-[#171716]">{project.imageContent}</div>
                            <h3 className="text-lg font-medium text-[#111] dark:text-[#f6f3ec] mb-2">{project.title}</h3>
                            <p className="text-[#646b75] dark:text-[#9a958a] text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="rounded bg-[#f5f7fa] dark:bg-[#171716] px-2 py-1 text-xs text-[#646b75] dark:text-[#9a958a]">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-px bg-[#e3e7ec] dark:bg-[#2b2a25] mb-16" />
                <div id="skills" className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
                    {stats.map((stat, index) => (
                        <React.Fragment key={stat.label}>
                            <div>
                                <div className="text-3xl md:text-4xl font-light text-[#111] dark:text-[#f6f3ec] mb-1 tracking-tight">{stat.value}</div>
                                <div className="text-[#646b75] dark:text-[#9a958a] text-sm font-normal">{stat.label}</div>
                            </div>
                            {index < stats.length - 1 && <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-[#e3e7ec] dark:via-[#2b2a25] to-transparent" />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
      </div>
    </div>
  );
};

export { AuroraBackground, PortfolioPage };