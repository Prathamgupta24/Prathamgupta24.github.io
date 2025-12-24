/* ═══════════════════════════════════════════════════════════════════════════
   PROJECTS.JS - Dynamic Project Loading & Modal System
   PRATHAM.EXE - Retro Futuristic Portfolio
   ═══════════════════════════════════════════════════════════════════════════ */

class ProjectManager {
    constructor() {
        this.projectsGrid = document.getElementById('projects-grid');
        this.modal = document.getElementById('project-modal');
        this.modalClose = document.getElementById('modal-close');
        this.modalOverlay = document.querySelector('.modal-overlay');
        this.projects = [];
        
        this.init();
    }
    
    async init() {
        await this.loadProjects();
        this.renderProjectCards();
        this.setupModal();
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       LOAD PROJECTS
       ═══════════════════════════════════════════════════════════════════════ */
    async loadProjects() {
        try {
            const response = await fetch('data/projects.json');
            if (!response.ok) throw new Error('Failed to load projects');
            this.projects = await response.json();
        } catch (error) {
            console.log('Loading fallback projects data');
            // Fallback to embedded data if JSON fails to load
            this.projects = this.getFallbackProjects();
        }
    }
    
    getFallbackProjects() {
        return [
            {
                id: 1,
                title: "NutriTracker.ai",
                icon: "🍎",
                summary: "AI-powered nutrition tracking application with real-time meal analysis and personalized health insights.",
                tech: ["React", "Node.js", "TensorFlow", "PostgreSQL", "AWS"],
                demoUrl: "#",
                githubUrl: "#",
                details: {
                    fullDescription: "A comprehensive nutrition tracking platform that uses computer vision to analyze meals and provide instant nutritional information. The AI model was trained on 100,000+ food images to achieve 95% accuracy in food recognition.",
                    architecture: [
                        { step: 1, name: "React Frontend", description: "Mobile-first PWA with camera integration" },
                        { step: 2, name: "API Gateway", description: "Rate limiting and authentication" },
                        { step: 3, name: "Node.js Backend", description: "Business logic and data processing" },
                        { step: 4, name: "TensorFlow Model", description: "Image classification for food items" },
                        { step: 5, name: "PostgreSQL", description: "User data and nutrition logs" }
                    ],
                    schema: [
                        { name: "Users", icon: "👤" },
                        { name: "Meals", icon: "🍽️" },
                        { name: "Foods", icon: "🥗" },
                        { name: "Nutrition", icon: "📊" },
                        { name: "Goals", icon: "🎯" }
                    ],
                    techStack: {
                        frontend: ["React", "TypeScript", "TailwindCSS", "PWA"],
                        backend: ["Node.js", "Express", "GraphQL"],
                        database: ["PostgreSQL", "Redis"],
                        devops: ["AWS", "Docker", "GitHub Actions"]
                    },
                    features: [
                        "Real-time food recognition using device camera",
                        "Personalized meal recommendations based on health goals",
                        "Progress tracking with interactive charts",
                        "Integration with fitness wearables",
                        "Social features for meal sharing and challenges"
                    ]
                }
            },
            {
                id: 2,
                title: "DevFlow Pro",
                icon: "🔄",
                summary: "Enterprise CI/CD platform with intelligent pipeline optimization and real-time deployment analytics.",
                tech: ["Vue.js", "Go", "Kubernetes", "MongoDB", "gRPC"],
                demoUrl: "#",
                githubUrl: "#",
                details: {
                    fullDescription: "An enterprise-grade CI/CD platform that reduces deployment time by 60% through intelligent caching and parallel execution. Features ML-based failure prediction and automatic rollback capabilities.",
                    architecture: [
                        { step: 1, name: "Vue Dashboard", description: "Real-time pipeline monitoring" },
                        { step: 2, name: "gRPC Gateway", description: "High-performance communication" },
                        { step: 3, name: "Go Services", description: "Pipeline orchestration engine" },
                        { step: 4, name: "K8s Cluster", description: "Dynamic job runners" },
                        { step: 5, name: "MongoDB", description: "Logs and metrics storage" }
                    ],
                    schema: [
                        { name: "Pipelines", icon: "🔄" },
                        { name: "Jobs", icon: "⚙️" },
                        { name: "Artifacts", icon: "📦" },
                        { name: "Logs", icon: "📝" },
                        { name: "Metrics", icon: "📈" }
                    ],
                    techStack: {
                        frontend: ["Vue.js", "Vuex", "Chart.js"],
                        backend: ["Go", "gRPC", "WebSockets"],
                        database: ["MongoDB", "InfluxDB"],
                        devops: ["Kubernetes", "Helm", "Terraform"]
                    },
                    features: [
                        "Intelligent pipeline caching for 3x faster builds",
                        "ML-based failure prediction system",
                        "Automatic rollback on deployment failures",
                        "Real-time log streaming and search",
                        "Cost optimization recommendations"
                    ]
                }
            },
            {
                id: 3,
                title: "CryptoVault",
                icon: "🔐",
                summary: "Secure cryptocurrency wallet with multi-chain support and DeFi integration.",
                tech: ["React Native", "Rust", "Solidity", "Web3.js", "AWS"],
                demoUrl: "#",
                githubUrl: "#",
                details: {
                    fullDescription: "A non-custodial cryptocurrency wallet supporting 50+ blockchains with built-in DeFi features. Implements military-grade encryption and biometric authentication for maximum security.",
                    architecture: [
                        { step: 1, name: "React Native App", description: "Cross-platform mobile wallet" },
                        { step: 2, name: "Rust Core", description: "Cryptographic operations" },
                        { step: 3, name: "Smart Contracts", description: "DeFi protocol integration" },
                        { step: 4, name: "Node Indexers", description: "Blockchain data aggregation" },
                        { step: 5, name: "AWS KMS", description: "Secure key management" }
                    ],
                    schema: [
                        { name: "Wallets", icon: "💰" },
                        { name: "Transactions", icon: "💸" },
                        { name: "Tokens", icon: "🪙" },
                        { name: "DeFi Positions", icon: "🏦" },
                        { name: "NFTs", icon: "🖼️" }
                    ],
                    techStack: {
                        frontend: ["React Native", "TypeScript", "Reanimated"],
                        backend: ["Rust", "Node.js", "Web3.js"],
                        database: ["SQLite", "IPFS"],
                        devops: ["AWS", "Cloudflare", "GitHub Actions"]
                    },
                    features: [
                        "Support for 50+ blockchains",
                        "Built-in DEX aggregator for best swap rates",
                        "NFT gallery with OpenSea integration",
                        "Staking and yield farming features",
                        "Hardware wallet support (Ledger, Trezor)"
                    ]
                }
            },
            {
                id: 4,
                title: "TeamSync",
                icon: "👥",
                summary: "Real-time team collaboration platform with video conferencing and project management.",
                tech: ["Next.js", "Python", "WebRTC", "Redis", "PostgreSQL"],
                demoUrl: "#",
                githubUrl: "#",
                details: {
                    fullDescription: "An all-in-one team collaboration platform combining the best features of Slack, Zoom, and Notion. Supports up to 1000 concurrent users in video calls with 99.9% uptime.",
                    architecture: [
                        { step: 1, name: "Next.js Frontend", description: "SSR for optimal performance" },
                        { step: 2, name: "WebRTC Gateway", description: "P2P video/audio streaming" },
                        { step: 3, name: "Python Backend", description: "Real-time event processing" },
                        { step: 4, name: "Redis Cluster", description: "Pub/sub messaging" },
                        { step: 5, name: "PostgreSQL", description: "Persistent data storage" }
                    ],
                    schema: [
                        { name: "Teams", icon: "👥" },
                        { name: "Channels", icon: "💬" },
                        { name: "Messages", icon: "✉️" },
                        { name: "Projects", icon: "📋" },
                        { name: "Files", icon: "📁" }
                    ],
                    techStack: {
                        frontend: ["Next.js", "TypeScript", "Socket.io"],
                        backend: ["Python", "FastAPI", "Celery"],
                        database: ["PostgreSQL", "Redis", "S3"],
                        devops: ["AWS", "Docker", "Kubernetes"]
                    },
                    features: [
                        "HD video calls with up to 1000 participants",
                        "Real-time document collaboration",
                        "Kanban boards and sprint planning",
                        "Screen sharing with annotation tools",
                        "AI-powered meeting transcription"
                    ]
                }
            },
            {
                id: 5,
                title: "CodeMentor AI",
                icon: "🤖",
                summary: "AI-powered code review and mentoring platform for developers at all skill levels.",
                tech: ["React", "Python", "OpenAI", "FastAPI", "MongoDB"],
                demoUrl: "#",
                githubUrl: "#",
                details: {
                    fullDescription: "An intelligent code review platform that provides instant feedback, suggests improvements, and explains complex code patterns. Used by 10,000+ developers to improve their coding skills.",
                    architecture: [
                        { step: 1, name: "React Editor", description: "Monaco-based code editor" },
                        { step: 2, name: "API Gateway", description: "Load balancing and caching" },
                        { step: 3, name: "FastAPI Backend", description: "Request processing" },
                        { step: 4, name: "OpenAI GPT-4", description: "Code analysis and suggestions" },
                        { step: 5, name: "MongoDB", description: "User progress and history" }
                    ],
                    schema: [
                        { name: "Users", icon: "👤" },
                        { name: "Sessions", icon: "📝" },
                        { name: "Reviews", icon: "✅" },
                        { name: "Progress", icon: "📊" },
                        { name: "Badges", icon: "🏆" }
                    ],
                    techStack: {
                        frontend: ["React", "Monaco Editor", "TailwindCSS"],
                        backend: ["Python", "FastAPI", "LangChain"],
                        database: ["MongoDB", "Redis"],
                        devops: ["GCP", "Cloud Run", "GitHub Actions"]
                    },
                    features: [
                        "Instant AI code reviews with actionable feedback",
                        "Support for 20+ programming languages",
                        "Interactive coding challenges",
                        "Progress tracking and skill assessment",
                        "Community-driven code discussions"
                    ]
                }
            },
            {
                id: 6,
                title: "EcoTrack",
                icon: "🌱",
                summary: "Environmental impact tracking app helping individuals reduce their carbon footprint.",
                tech: ["Flutter", "Node.js", "Firebase", "TensorFlow", "Maps API"],
                demoUrl: "#",
                githubUrl: "#",
                details: {
                    fullDescription: "A gamified sustainability app that tracks daily activities and calculates carbon footprint. Features include eco-challenges, community leaderboards, and partnerships with carbon offset programs.",
                    architecture: [
                        { step: 1, name: "Flutter App", description: "Cross-platform mobile experience" },
                        { step: 2, name: "Firebase", description: "Real-time sync and auth" },
                        { step: 3, name: "Node.js API", description: "Carbon calculation engine" },
                        { step: 4, name: "TensorFlow", description: "Receipt/label scanning" },
                        { step: 5, name: "Maps API", description: "Transportation tracking" }
                    ],
                    schema: [
                        { name: "Activities", icon: "🚗" },
                        { name: "Emissions", icon: "💨" },
                        { name: "Challenges", icon: "🎯" },
                        { name: "Rewards", icon: "🏅" },
                        { name: "Offsets", icon: "🌳" }
                    ],
                    techStack: {
                        frontend: ["Flutter", "Dart", "Provider"],
                        backend: ["Node.js", "Express", "Firebase"],
                        database: ["Firestore", "BigQuery"],
                        devops: ["GCP", "Cloud Functions", "Firebase Hosting"]
                    },
                    features: [
                        "Automatic carbon footprint calculation",
                        "Receipt scanning for purchase impact",
                        "Weekly eco-challenges with rewards",
                        "Carbon offset marketplace integration",
                        "Community challenges and leaderboards"
                    ]
                }
            }
        ];
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       RENDER PROJECT CARDS
       ═══════════════════════════════════════════════════════════════════════ */
    renderProjectCards() {
        if (!this.projectsGrid) return;
        
        this.projectsGrid.innerHTML = this.projects.map((project, index) => `
            <div class="project-card" data-project-id="${project.id}">
                <div class="card-header">
                    <div class="card-icon">${project.icon}</div>
                    <span class="card-number">#${String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 class="card-title">${project.title}</h3>
                <p class="card-summary">${project.summary}</p>
                <div class="card-tech">
                    ${project.tech.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    ${project.tech.length > 4 ? `<span class="tech-tag">+${project.tech.length - 4}</span>` : ''}
                </div>
                <div class="card-footer">
                    <span class="card-link">
                        VIEW MISSION <span class="card-arrow">→</span>
                    </span>
                </div>
            </div>
        `).join('');
        
        // Add click listeners
        const cards = this.projectsGrid.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = parseInt(card.dataset.projectId);
                this.openModal(projectId);
            });
        });
    }
    
    /* ═══════════════════════════════════════════════════════════════════════
       MODAL SYSTEM
       ═══════════════════════════════════════════════════════════════════════ */
    setupModal() {
        // Close button
        this.modalClose?.addEventListener('click', () => this.closeModal());
        
        // Overlay click
        this.modalOverlay?.addEventListener('click', () => this.closeModal());
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openModal(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project || !this.modal) return;
        
        // Populate modal content
        document.getElementById('modal-tag').textContent = `MISSION #${String(projectId).padStart(2, '0')}`;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-summary').textContent = project.details?.fullDescription || project.summary;
        document.getElementById('modal-demo-link').href = project.demoUrl;
        document.getElementById('modal-github-link').href = project.githubUrl;
        
        // Build modal body
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = this.buildModalContent(project);
        
        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animate modal content
        gsap.from('.modal-content', {
            scale: 0.9,
            y: 20,
            duration: 0.3,
            ease: 'power3.out'
        });
    }
    
    closeModal() {
        if (!this.modal) return;
        
        gsap.to('.modal-content', {
            scale: 0.9,
            y: 20,
            duration: 0.2,
            ease: 'power3.in',
            onComplete: () => {
                this.modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    buildModalContent(project) {
        const { details } = project;
        if (!details) return '<p>No additional details available.</p>';
        
        let content = `
            <!-- Architecture Section -->
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span class="icon">🧱</span> System Architecture
                </h3>
                <div class="architecture-flow">
                    ${details.architecture?.map((step, index) => `
                        <div class="arch-step">
                            <span class="step-num">${step.step}</span>
                            <div class="step-info">
                                <span class="step-name">${step.name}</span>
                                <span class="step-desc">${step.description}</span>
                            </div>
                        </div>
                        ${index < details.architecture.length - 1 ? '<span class="arch-arrow">↓</span>' : ''}
                    `).join('') || ''}
                </div>
            </div>
            
            <!-- Schema Section -->
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span class="icon">🗂️</span> Data Schema
                </h3>
                <div class="schema-visual">
                    ${details.schema?.map(item => `
                        <div class="schema-item">
                            <div class="schema-icon">${item.icon}</div>
                            <span class="schema-name">${item.name}</span>
                            ${item.description ? `<span class="schema-desc">${item.description}</span>` : ''}
                        </div>
                    `).join('') || ''}
                </div>
            </div>`;
        
        // API Endpoints Section (if available)
        if (details.apiEndpoints && details.apiEndpoints.length > 0) {
            content += `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span class="icon">📡</span> API Endpoints
                </h3>
                <div class="api-endpoints">
                    ${details.apiEndpoints.map(api => `
                        <div class="api-item">
                            <span class="api-method ${api.method.toLowerCase()}">${api.method}</span>
                            <code class="api-endpoint">${api.endpoint}</code>
                            <span class="api-desc">${api.description}</span>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }
        
        // Calculations Section (if available - for NutriTracker)
        if (details.calculations) {
            content += `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span class="icon">🧮</span> Calculation Formulas
                </h3>
                <div class="calculations-grid">
                    ${Object.entries(details.calculations).map(([key, value]) => `
                        <div class="calc-item">
                            <span class="calc-name">${key.toUpperCase().replace(/_/g, ' ')}</span>
                            <code class="calc-formula">${value}</code>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }
        
        // Project Structure Section (if available)
        if (details.projectStructure && details.projectStructure.length > 0) {
            content += `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span class="icon">📁</span> Project Structure
                </h3>
                <div class="project-structure">
                    ${details.projectStructure.map(item => `
                        <div class="structure-item">
                            <span class="structure-path">${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }
        
        // Tech Stack Section
        content += `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span class="icon">⚙️</span> Tech Stack
                </h3>
                <div class="modal-tech-stack">
                    ${Object.entries(details.techStack || {}).map(([category, techs]) => `
                        <div class="tech-category">
                            <span class="tech-category-name">${category.replace(/_/g, ' ').toUpperCase()}</span>
                            <div class="tech-tags">
                                ${techs.map(t => `<span class="modal-tech-tag ${category}">${t}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Features Section -->
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span class="icon">✨</span> Key Features
                </h3>
                <ul class="features-list">
                    ${details.features?.map(f => `<li>${f}</li>`).join('') || ''}
                </ul>
            </div>
        `;
        
        return content;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ProjectManager();
});

// Form submission handler
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message
    const btn = e.target.querySelector('.btn-submit');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<span class="btn-icon">✓</span> MESSAGE SENT!';
    btn.style.background = 'linear-gradient(135deg, #27ca40, #00FFE1)';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        e.target.reset();
    }, 3000);
});
