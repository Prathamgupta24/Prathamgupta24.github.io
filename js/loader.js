/* ═══════════════════════════════════════════════════════════════════════════
   LOADER.JS - Epic 5-Second Intro Sequence
   PRATHAM.EXE - Retro Futuristic Portfolio
   ═══════════════════════════════════════════════════════════════════════════ */

class LoaderSequence {
    constructor() {
        this.loader = document.getElementById('loader');
        this.mainContent = document.getElementById('main-content');
        this.progressFill = document.querySelector('.progress-fill');
        this.progressPercent = document.getElementById('progress-percent');
        this.bootLines = document.querySelectorAll('.boot-line');
        this.pacmanLoader = document.querySelector('.pacman-loader');
        this.nameReveal = document.querySelector('.name-reveal');
        this.subtitle = document.querySelector('.subtitle');
        this.rocketContainer = document.querySelector('.rocket-container');
        this.progressContainer = document.querySelector('.progress-container');
        this.pressStart = document.querySelector('.press-start');
        
        this.isComplete = false;
        this.progress = 0;
        
        this.init();
    }
    
    init() {
        // Start the epic sequence
        this.startSequence();
        
        // Listen for skip (any key)
        this.setupSkip();
    }
    
    async startSequence() {
        // Phase 1: Boot sequence text (0-1.2s)
        await this.animateBootSequence();
        
        // Phase 2: Show Pac-Man loader (1.2s-2s)
        await this.animatePacman();
        
        // Phase 3: Name reveal with glitch (2s-3s)
        await this.animateNameReveal();
        
        // Phase 4: Progress bar (3s-4s)
        await this.animateProgress();
        
        // Phase 5: Rocket animation + Press Start (4s-5s)
        await this.animateRocket();
        
        // Mark as complete
        this.isComplete = true;
        this.showPressStart();
    }
    
    animateBootSequence() {
        return new Promise((resolve) => {
            this.bootLines.forEach((line, index) => {
                const delay = parseInt(line.dataset.delay) || index * 300;
                
                gsap.to(line, {
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                    delay: delay / 1000,
                    ease: 'power2.out',
                    onStart: () => {
                        // Typing sound effect simulation
                        this.typewriterEffect(line);
                    }
                });
            });
            
            // Resolve after all boot lines
            setTimeout(resolve, 1200);
        });
    }
    
    typewriterEffect(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 20);
    }
    
    animatePacman() {
        return new Promise((resolve) => {
            gsap.to(this.pacmanLoader, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            setTimeout(resolve, 800);
        });
    }
    
    animateNameReveal() {
        return new Promise((resolve) => {
            const timeline = gsap.timeline();
            
            // First, fade in the name container
            timeline.to(this.nameReveal, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: 'back.out(1.7)'
            });
            
            // Then reveal subtitle
            timeline.to(this.subtitle, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            }, '-=0.2');
            
            // Add extra glitch effect
            timeline.call(() => {
                const glitchText = document.querySelector('.glitch-text');
                glitchText.classList.add('intense-glitch');
                
                setTimeout(() => {
                    glitchText.classList.remove('intense-glitch');
                }, 500);
            }, [], '-=0.3');
            
            setTimeout(resolve, 1000);
        });
    }
    
    animateProgress() {
        return new Promise((resolve) => {
            gsap.to(this.progressContainer, {
                opacity: 1,
                duration: 0.3
            });
            
            // Animate progress bar
            const duration = 1000;
            const startTime = Date.now();
            
            const updateProgress = () => {
                const elapsed = Date.now() - startTime;
                this.progress = Math.min((elapsed / duration) * 100, 100);
                
                this.progressFill.style.width = `${this.progress}%`;
                this.progressPercent.textContent = Math.floor(this.progress);
                
                if (this.progress < 100) {
                    requestAnimationFrame(updateProgress);
                } else {
                    resolve();
                }
            };
            
            requestAnimationFrame(updateProgress);
        });
    }
    
    animateRocket() {
        return new Promise((resolve) => {
            gsap.to(this.rocketContainer, {
                opacity: 1,
                duration: 0.3
            });
            
            // Rocket launch animation
            gsap.to(this.rocketContainer, {
                bottom: '120%',
                duration: 1.5,
                ease: 'power2.in',
                delay: 0.2
            });
            
            setTimeout(resolve, 1000);
        });
    }
    
    showPressStart() {
        gsap.to(this.pressStart, {
            opacity: 1,
            duration: 0.3
        });
    }
    
    setupSkip() {
        const skipLoader = () => {
            if (this.isComplete) {
                this.transitionToMain();
            }
        };
        
        // Any key press
        document.addEventListener('keydown', skipLoader, { once: true });
        
        // Click/Touch
        document.addEventListener('click', skipLoader, { once: true });
        document.addEventListener('touchstart', skipLoader, { once: true });
        
        // Auto-transition after 6 seconds
        setTimeout(() => {
            if (!this.loader.classList.contains('hidden')) {
                this.transitionToMain();
            }
        }, 6000);
    }
    
    transitionToMain() {
        // Epic transition out
        const timeline = gsap.timeline();
        
        // Flash effect
        timeline.to(this.loader, {
            backgroundColor: '#00FFE1',
            duration: 0.1
        });
        
        timeline.to(this.loader, {
            backgroundColor: '#050505',
            duration: 0.1
        });
        
        // Fade out loader
        timeline.to(this.loader, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
                this.loader.classList.add('hidden');
                this.mainContent.classList.remove('hidden');
                this.mainContent.classList.add('visible');
                
                // Trigger main content animations
                if (window.mainAnimations) {
                    window.mainAnimations.init();
                }
            }
        });
    }
}

// Initialize loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LoaderSequence();
});
