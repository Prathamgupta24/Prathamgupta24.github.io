/* ═══════════════════════════════════════════════════════════════════════════
   ANIMATIONS.JS - Main Site Animations
   PRATHAM.EXE - Retro Futuristic Portfolio
   ═══════════════════════════════════════════════════════════════════════════ */

class MainAnimations {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.cursorFollower = document.getElementById('cursor-follower');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.soundToggle = document.getElementById('sound-toggle');
        this.isSoundEnabled = false;
        this.isInitialized = false;
    }
    
    init() {
        if (this.isInitialized) return;
        this.isInitialized = true;
        
        this.setupCustomCursor();
        this.animateHeroSection();
        this.animateGitTree();
        this.setupScrollAnimations();
        this.setupNavigation();
        this.animateStats();
        this.setupSkillBars();
        this.setupTerminal();
        this.setupSoundToggle();
        this.setupProjectCardEffects();
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       CUSTOM CURSOR
       ═══════════════════════════════════════════════════════════════════════ */
    setupCustomCursor() {
        if (!this.cursor || !this.cursorFollower) return;
        
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let followerX = 0;
        let followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Smooth cursor animation
        const animateCursor = () => {
            // Main cursor - fast follow
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            this.cursor.style.left = `${cursorX - 6}px`;
            this.cursor.style.top = `${cursorY - 6}px`;
            
            // Follower - slow follow
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            this.cursorFollower.style.left = `${followerX - 20}px`;
            this.cursorFollower.style.top = `${followerY - 20}px`;
            
            requestAnimationFrame(animateCursor);
        };
        
        animateCursor();
        
        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item, .contact-card');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('hover');
                this.cursorFollower.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('hover');
                this.cursorFollower.classList.remove('hover');
            });
        });
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       HERO SECTION ANIMATIONS
       ═══════════════════════════════════════════════════════════════════════ */
    animateHeroSection() {
        const timeline = gsap.timeline({ delay: 0.3 });
        
        // Profile Image
        timeline.from('.profile-image-wrapper', {
            opacity: 0,
            scale: 0.5,
            rotation: -180,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
        
        // Badge
        timeline.from('.hero-badge', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4');
        
        // Title lines
        timeline.from('.hero-title .line-1', {
            opacity: 0,
            x: -50,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.3');
        
        timeline.from('.hero-title .line-2', {
            opacity: 0,
            x: -50,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.3');
        
        timeline.from('.hero-title .line-3', {
            opacity: 0,
            x: -50,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.3');
        
        // Description
        timeline.from('.hero-description', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.2');
        
        // CTA buttons
        timeline.from('.hero-cta .btn', {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.2');
        
        // Stats
        timeline.from('.stat', {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.2');
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       GIT TREE ANIMATION
       ═══════════════════════════════════════════════════════════════════════ */
    animateGitTree() {
        const branches = document.querySelectorAll('.branch');
        const commits = document.querySelectorAll('.commit');
        
        // Animate branches drawing
        gsap.to(branches, {
            strokeDashoffset: 0,
            duration: 2,
            stagger: 0.3,
            ease: 'power2.inOut',
            delay: 1
        });
        
        // Animate commits appearing
        gsap.to(commits, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            delay: 1.5
        });
        
        // Pulse effect on commits
        commits.forEach((commit, index) => {
            gsap.to(commit, {
                scale: 1.3,
                duration: 0.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                delay: index * 0.2 + 2.5
            });
        });
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       SCROLL ANIMATIONS
       ═══════════════════════════════════════════════════════════════════════ */
    setupScrollAnimations() {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        
        // Section headers
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
        
        // Project cards
        gsap.utils.toArray('.project-card').forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 50,
                rotation: 5,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power3.out'
            });
        });
        
        // Skill categories
        gsap.utils.toArray('.skill-category').forEach((category, index) => {
            gsap.from(category, {
                scrollTrigger: {
                    trigger: category,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
        
        // Contact cards
        gsap.utils.toArray('.contact-card').forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: -30,
                duration: 0.5,
                delay: index * 0.15,
                ease: 'power3.out'
            });
        });
        
        // Contact form
        gsap.from('.contact-form', {
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       NAVIGATION
       ═══════════════════════════════════════════════════════════════════════ */
    setupNavigation() {
        // Smooth scroll for nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    gsap.to(window, {
                        scrollTo: { y: target, offsetY: 80 },
                        duration: 1,
                        ease: 'power3.inOut'
                    });
                    
                    // Update active state
                    this.navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
        
        // Update active nav on scroll
        const sections = document.querySelectorAll('section');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       STATS COUNTER
       ═══════════════════════════════════════════════════════════════════════ */
    animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            
            gsap.to(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 80%',
                    toggleActions: 'play none none reset'
                },
                textContent: target,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                onUpdate: function() {
                    stat.textContent = Math.floor(this.targets()[0].textContent);
                }
            });
        });
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       SKILL BARS
       ═══════════════════════════════════════════════════════════════════════ */
    setupSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            const fill = item.querySelector('.skill-fill');
            const fillValue = getComputedStyle(fill).getPropertyValue('--fill');
            
            ScrollTrigger.create({
                trigger: item,
                start: 'top 80%',
                onEnter: () => {
                    gsap.to(fill, {
                        width: fillValue,
                        duration: 1,
                        ease: 'power3.out'
                    });
                }
            });
        });
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       PROJECT CARD EFFECTS
       ═══════════════════════════════════════════════════════════════════════ */
    setupProjectCardEffects() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            });
        });
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       TERMINAL
       ═══════════════════════════════════════════════════════════════════════ */
    setupTerminal() {
        const terminal = document.getElementById('terminal');
        const terminalToggle = document.getElementById('terminal-toggle');
        const terminalClose = document.getElementById('terminal-close');
        const terminalInput = document.getElementById('terminal-input');
        const terminalOutput = document.getElementById('terminal-output');
        
        if (!terminal || !terminalToggle) return;
        
        // Toggle terminal
        terminalToggle.addEventListener('click', () => {
            terminal.classList.toggle('hidden');
            if (!terminal.classList.contains('hidden')) {
                terminalInput.focus();
            }
        });
        
        terminalClose.addEventListener('click', () => {
            terminal.classList.add('hidden');
        });
        
        // Terminal commands
        const commands = {
            help: () => `
Available commands:
  help     - Show this help message
  about    - About me
  skills   - View my skills
  projects - View projects
  contact  - Contact information
  clear    - Clear terminal
  secret   - ???
            `.trim(),
            about: () => `
═══════════════════════════════════════
  PRATHAM - Full Stack Developer
═══════════════════════════════════════
Passionate about building scalable web 
applications and AI-powered solutions.
3+ years of experience.
            `.trim(),
            skills: () => `
[Frontend]  React, Vue.js, TypeScript, Next.js
[Backend]   Node.js, Python, PostgreSQL, MongoDB
[DevOps]    AWS, Docker, Kubernetes, CI/CD
            `.trim(),
            projects: () => {
                // Scroll to projects
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                return 'Navigating to projects...';
            },
            contact: () => `
Email:    pratham@example.com
GitHub:   github.com/pratham
LinkedIn: linkedin.com/in/pratham
            `.trim(),
            clear: () => {
                terminalOutput.innerHTML = '<p class="terminal-line">Terminal cleared.</p>';
                return null;
            },
            secret: () => `
  ╔══════════════════════════════════╗
  ║  🎮 KONAMI CODE ACTIVATED! 🎮    ║
  ║  ↑ ↑ ↓ ↓ ← → ← → B A           ║
  ║  You found an easter egg!        ║
  ╚══════════════════════════════════╝
            `.trim(),
            unlock: (args) => {
                if (args[0] === 'pratham') {
                    return '🔓 Access granted! Welcome, admin.';
                }
                return '🔒 Access denied. Try again.';
            }
        };
        
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const input = terminalInput.value.trim();
                terminalInput.value = '';
                
                if (!input) return;
                
                // Show command
                const cmdLine = document.createElement('p');
                cmdLine.className = 'terminal-line';
                cmdLine.innerHTML = `<span class="cmd-highlight">❯</span> ${input}`;
                terminalOutput.appendChild(cmdLine);
                
                // Parse command
                const parts = input.toLowerCase().split(' ');
                const cmd = parts[0];
                const args = parts.slice(1);
                
                // Execute command
                let result;
                if (commands[cmd]) {
                    result = commands[cmd](args);
                } else {
                    result = `Command not found: ${cmd}. Type 'help' for available commands.`;
                }
                
                // Show result
                if (result) {
                    const resultLine = document.createElement('p');
                    resultLine.className = 'terminal-line';
                    resultLine.innerHTML = result.replace(/\n/g, '<br>');
                    terminalOutput.appendChild(resultLine);
                }
                
                // Scroll to bottom
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       SOUND TOGGLE
       ═══════════════════════════════════════════════════════════════════════ */
    setupSoundToggle() {
        if (!this.soundToggle) return;
        
        this.soundToggle.addEventListener('click', () => {
            this.isSoundEnabled = !this.isSoundEnabled;
            
            const soundOn = this.soundToggle.querySelector('.sound-on');
            const soundOff = this.soundToggle.querySelector('.sound-off');
            
            soundOn.classList.toggle('hidden');
            soundOff.classList.toggle('hidden');
            
            // Play a confirmation sound if enabled
            if (this.isSoundEnabled) {
                this.playSound('toggle');
            }
        });
    }
    
    playSound(type) {
        if (!this.isSoundEnabled) return;
        
        // Using Web Audio API for simple sounds
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        switch(type) {
            case 'toggle':
                oscillator.frequency.value = 800;
                gainNode.gain.value = 0.1;
                oscillator.type = 'sine';
                break;
            case 'hover':
                oscillator.frequency.value = 400;
                gainNode.gain.value = 0.05;
                oscillator.type = 'square';
                break;
            case 'click':
                oscillator.frequency.value = 600;
                gainNode.gain.value = 0.1;
                oscillator.type = 'triangle';
                break;
        }
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    }
}

// Create global instance
window.mainAnimations = new MainAnimations();

// Add GSAP ScrollTo plugin (inline)
gsap.registerPlugin({
    name: 'scrollTo',
    init(target, value) {
        this.target = target;
        this.value = value;
    },
    render(progress) {
        const y = typeof this.value === 'object' ? this.value.y : this.value;
        const offsetY = typeof this.value === 'object' ? (this.value.offsetY || 0) : 0;
        const targetElement = typeof y === 'string' ? document.querySelector(y) : null;
        const targetY = targetElement ? targetElement.offsetTop - offsetY : y;
        
        window.scrollTo(0, targetY * progress);
    }
});
