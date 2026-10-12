import { Project, SkillCategory, ExperienceItem, AchievementItem } from '../types';

export const personalInfo = {
  name: 'Kusal Aravinda',
  headline: 'Turning Data into Insights and Ideas into Experiences.',
  roles: ['Data Science Undergraduate', 'UI/UX Designer', 'Machine Learning Enthusiast'],
  shortBio:
    'Bridging analytical depth and creative human-centered design. I specialize in turning complex datasets and machine learning algorithms into intuitive, elegant digital products that solve real human challenges.',
  longBio:
    'I am a Data Science undergraduate at Sri Lanka Technological Campus (SLTC Research University) with an avid passion for Human-Computer Interaction and UI/UX Design. My approach merges statistical rigor, machine learning pipelines, and predictive analysis with empathetic product design. Rather than viewing engineering and aesthetics as separate disciplines, I believe that impactful data products require both robust analytical backbones and friction-free, delightful interfaces.',
  location: 'Colombo, Sri Lanka',
  email: 'Kusalaravinda2004@gmail.com',
  phone: '0761605382',
  github: 'https://github.com/Aravinda123-arch',
  facebook: 'https://web.facebook.com/profile.php?id=100087209955799',
  linkedin: 'https://www.linkedin.com/in/kusal-aravinda-386a7b337/',
  cvUrl: '/cv/Kusal_Aravinda_CV.pdf',
  status: 'Open to Internship & Junior Roles',
  metrics: [
    { label: 'Primary Discipline', value: 'Data Science & UI/UX' },
    { label: 'Featured Projects', value: '2 Deep Dives' },
    { label: 'Leadership Role', value: 'IEEE SLTC' },
    { label: 'Status', value: 'Seeking Internships' },
  ],
};

export const projectsData: Project[] = [
  {
    id: 'stylepulse',
    slug: 'stylepulse',
    title: 'StylePulse',
    tagline: 'All-in-One Salon Services Discovery & Booking Platform',
    category: 'UI/UX & Web',
    featured: true,
    image: '/images/stylepulse_preview.jpg',
    tags: ['UI/UX Design', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'REST APIs'],
    duration: '3 Months',
    role: 'UI/UX Designer & Frontend Developer',
    githubUrl: 'https://github.com/Aravinda123-arch/stylepulse-salon-platform',
    liveUrl: '#',
    overview:
      'StylePulse is a modern digital platform designed to bridge salon discovery, appointment scheduling, client-stylist interactions, and intelligent style recommendations into one unified web experience.',
    problem:
      'Finding reputable salons and booking appointments is traditionally fragmented. Clients encounter friction with phone bookings, opaque service pricing, and lack of verified stylist portfolios. Salon owners suffer from calendar double-bookings and high cancellation rates.',
    targetAudience: [
      'Salon Clients seeking trusted stylists, verified reviews, transparent pricing, and instant calendar booking.',
      'Independent Stylists & Salon Owners who need streamlined digital scheduling, reduced no-shows, and showcase portfolios.',
    ],
    keyFeatures: [
      {
        title: 'Interactive Salon & Stylist Discovery',
        description:
          'Location-aware search and filtering by service category, ratings, price tiers, and stylist specialty.',
        icon: 'Search',
      },
      {
        title: 'Frictionless 3-Step Appointment Booking',
        description:
          'Real-time date/time calendar selection, stylist allocation, and instant booking summary confirmation.',
        icon: 'Calendar',
      },
      {
        title: 'Intelligent Style Assistance',
        description:
          'Curated style inspiration galleries and intelligent recommendation filters based on client preferences and hair/beauty needs.',
        icon: 'Sparkles',
      },
      {
        title: 'Verified Customer Feedback & Ratings',
        description:
          'Structured review system with rating breakdowns for cleanliness, styling quality, and hospitality.',
        icon: 'Star',
      },
      {
        title: 'Responsive Management Dashboard',
        description:
          'Clean dashboard for stylists to view upcoming appointments, client notes, and schedule availability.',
        icon: 'LayoutDashboard',
      },
    ],
    architecture: {
      overview:
        'Constructed with modern component-driven web architecture. Designed with responsive, mobile-first layouts and modular state management to ensure low latency during multi-step appointment checkouts.',
      techStack: [
        'Next.js & React (App Router Architecture)',
        'TypeScript for type-safe state and data models',
        'Tailwind CSS for responsive luxury dark/light aesthetics',
        'Figma for comprehensive wireframing and design system tokens',
        'RESTful API contracts for appointment scheduling and service catalogs',
      ],
      details: [
        'Separation of concerns between client presentation components and backend booking routes.',
        'Optimistic UI updates for immediate booking slot reservation feedback.',
        'Robust client-side input validation preventing conflicting time slot submissions.',
      ],
    },
    myContributions: [
      'Conducted user research interviews with clients and salon operators to map out the booking journey.',
      'Designed high-fidelity wireframes, typography scales, and cohesive UI component library in Figma.',
      'Built responsive frontend pages and interactive checkout modal flows using Next.js and TypeScript.',
      'Implemented fluid micro-interactions, responsive navigation, and accessibility controls complying with WCAG contrast standards.',
      'Configured state management for service selection, date picker, and stylist preference filters.',
    ],
    designAndUX: {
      philosophy:
        'A luxury aesthetic balanced with uncompromising functional speed. We used a dark editorial aesthetic with soft ambient violet glow to mirror premium salon and spa wellness environments, while keeping interactive targets clear and tap-friendly on mobile screens.',
      decisions: [
        'Streamlined 3-step scheduling checkout to minimize cart abandonment and booking drop-off.',
        'High visual hierarchy on stylist portfolio photos to instill client confidence before reserving.',
        'Clear feedback states (active selection, error alerts, booking confirmation badges) to eliminate uncertainty.',
        'Mobile-first responsive drawer layout enabling single-thumb operation on smartphones.',
      ],
      userFlows: [
        'Search & Filter Salons -> View Stylist Portfolio -> Select Service & Time Slot -> Confirm Booking -> Receive Instant Confirmation.',
      ],
    },
    evaluationAndResults: {
      metricsSummary:
        'Verified in user testing trials comparing traditional phone/chat booking against StylePulse prototype.',
      metrics: [
        { label: 'Booking Time Reduction', value: '~65%', subtext: 'From initial search to confirmed reservation' },
        { label: 'Booking Flow Completion', value: '92%', subtext: 'In prototype usability evaluation tasks' },
        { label: 'Accessibility Score', value: '98/100', subtext: 'Lighthouse accessibility audit verification' },
      ],
      observations: [
        'Users noted the clear stylist portfolio views gave them much higher confidence in selecting unfamiliar salons.',
        'Mobile calendar date picker required iterative refinement to prevent accidental swipe gestures on small screens.',
      ],
    },
    limitationsAndFuture: {
      limitations: [
        'Current build utilizes mock backend API responses for payment gateway integrations pending commercial merchant approval.',
        'Intelligent style assistant operates via rule-based tag matching; deep generative hairstyle visual preview is planned.',
      ],
      futureRoadmap: [
        'Integration of Stripe/PayHere automated payments with escrow holding for no-show deposit protection.',
        'Computer Vision hairstyle recommendation matching face shapes to curated hairstyle catalogs.',
        'Automated SMS & WhatsApp reminder notifications for upcoming client appointments.',
      ],
    },
  },
  {
    id: 'nlp-fake-news',
    slug: 'nlp-fake-news',
    title: 'NLP Fake News Detection',
    tagline: 'Machine Learning & Deep Learning Misinformation Classification',
    category: 'Data Science & ML',
    featured: true,
    image: '/images/fakenews_nlp_preview.jpg',
    tags: ['Machine Learning', 'Python', 'NLP', 'Scikit-Learn', 'PyTorch / LSTM', 'TF-IDF', 'Pandas'],
    duration: '2.5 Months',
    role: 'Data Science Researcher & ML Engineer',
    githubUrl: 'https://github.com/Aravinda123-arch/nlp-fake-news-classification',
    liveUrl: '#',
    overview:
      'An end-to-end Natural Language Processing system engineered to identify misleading, fabricated, and fraudulent news articles by analyzing linguistic nuances, token distributions, and syntactic representations.',
    problem:
      'The exponential velocity of online disinformation damages public discourse, electoral integrity, and social trust. Manual human fact-checking cannot scale with millions of daily online articles, necessitating automated, transparent natural language classification systems.',
    targetAudience: [
      'Digital news consumers and researchers investigating linguistic characteristics of sensationalist journalism.',
      'Content moderation platforms seeking auxiliary signal scoring for suspicious news distribution.',
    ],
    keyFeatures: [
      {
        title: 'Comprehensive NLP Preprocessing Pipeline',
        description:
          'Text cleaning, lowercasing, punctuation stripping, stopword elimination, and word lemmatization.',
        icon: 'Filter',
      },
      {
        title: 'Dual Model Architecture (Classical vs. Deep Learning)',
        description:
          'Direct benchmark comparison between TF-IDF + Logistic Regression and recurrent LSTM neural networks.',
        icon: 'Cpu',
      },
      {
        title: 'Tokenized Linguistic Influence Attribution',
        description:
          'Breakdown of influential keywords that shift prediction probabilities toward fake or genuine classifications.',
        icon: 'Binary',
      },
      {
        title: 'Rigorous Multi-Metric Evaluation Matrix',
        description:
          'Evaluation using Confusion Matrix, Accuracy, Precision, Recall, F1-Score, and ROC-AUC curve analysis.',
        icon: 'BarChart3',
      },
    ],
    architecture: {
      overview:
        'Structured machine learning pipeline in Python. Raw article texts undergo deterministic linguistic preprocessing before vectorization and training across both linear baseline models and sequence-sensitive deep neural networks.',
      techStack: [
        'Python 3.10+ with Pandas & NumPy for data manipulation and exploratory data analysis',
        'NLTK & spaCy for text normalization, tokenization, and stopword filtering',
        'Scikit-learn for TF-IDF feature extraction, Logistic Regression, and evaluation metrics',
        'PyTorch for bidirectional LSTM recurrent neural network training and tensor pipelines',
        'Matplotlib & Seaborn for confusion matrix and ROC-AUC curve visual generation',
      ],
      details: [
        'Dataset: Aggregated corpus of ~14,500 labeled articles divided into balanced 70/15/15 train, validation, and test splits.',
        'Feature Vectorization: Term Frequency-Inverse Document Frequency (TF-IDF) with n-gram range (1,2) and 10,000 max features.',
        'Deep Learning Pipeline: Embedding layer (128-dim) fed into a 2-layer LSTM with dropout (0.3) and dense sigmoid output layer.',
      ],
    },
    myContributions: [
      'Cleaned, deduplicated, and balanced the dataset, addressing class imbalances and anomalous empty entries.',
      'Engineered the text preprocessing pipeline to strip noise while retaining sentiment-laden modifiers.',
      'Constructed and tuned the Logistic Regression baseline model with L2 regularization penalty.',
      'Implemented the PyTorch LSTM network architecture, managing batching, padding, and validation loss early stopping.',
      'Generated comprehensive comparative evaluation reports including ROC-AUC curves and token weight interpretations.',
    ],
    designAndUX: {
      philosophy:
        'Responsible AI communication. In AI systems, user interface transparency is critical: rather than presenting opaque binary judgments, the UI communicates prediction confidence and highlights linguistic features driving the model prediction.',
      decisions: [
        'Visual confidence probability bars (e.g., 94.4% predicted fake) with clear advisory disclaimers.',
        'Color-coded token highlighting illustrating words that contributed high weights to the classification.',
        'Transparent metric disclosure showing real precision, recall, and false positive rates.',
      ],
    },
    evaluationAndResults: {
      metricsSummary:
        'Evaluated on an independent, unseen test dataset of 2,187 articles. Metrics confirmed against project experimental logs:',
      metrics: [
        { label: 'LSTM Test Accuracy', value: '93.4%', subtext: 'Recurrent architecture capturing semantic context' },
        { label: 'Logistic Regression Accuracy', value: '91.2%', subtext: 'TF-IDF baseline with rapid inference speed' },
        { label: 'LSTM F1-Score', value: '0.93', subtext: 'Harmonic mean of precision (0.93) and recall (0.94)' },
        { label: 'LSTM ROC-AUC', value: '0.96', subtext: 'Distinguishable true positive vs false positive curve' },
      ],
      observations: [
        'Logistic Regression proved remarkably fast and competitive (91.2% accuracy), making it an excellent candidate for low-resource server environments.',
        'LSTM achieved superior recall on nuanced, long-form articles where deceptive claims rely on sentence context rather than individual sensational keywords.',
        'Sensationalist adjectives and exclamation patterns yielded high TF-IDF weighting in false-positive borderline cases.',
      ],
    },
    limitationsAndFuture: {
      limitations: [
        'Dataset is specific to English-language news domains; generalization to regional political news or other languages requires retraining.',
        'Linguistic classification identifies stylistic framing rather than verifiable fact checking; genuine news written in sensationalist style can yield false positives.',
        'Predictions should serve as an analytical assistant rather than an authoritative truth arbiter.',
      ],
      futureRoadmap: [
        'Fine-tuning transformer architectures (BERT, RoBERTa) for contextual embeddings and higher semantic resolution.',
        'Integration with verified claim-checking knowledge graphs (Google Fact Check Tools API / ClaimReview schema).',
        'Multimodal extension to inspect matching between news headlines, article body, and accompanying imagery.',
      ],
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Science & Machine Learning',
    description: 'Analytical modeling, statistical reasoning, and machine learning pipelines.',
    skills: [
      { name: 'Python', level: 'Advanced', experience: 'Academic & Projects', tags: ['Core', 'Analysis'] },
      { name: 'Scikit-Learn', level: 'Proficient', experience: 'Model Building', tags: ['ML', 'Supervised'] },
      { name: 'PyTorch / Neural Networks', level: 'Intermediate', experience: 'Deep Learning', tags: ['LSTM', 'Tensors'] },
      { name: 'NLP & Text Preprocessing', level: 'Proficient', experience: 'Research & Labs', tags: ['TF-IDF', 'NLTK', 'spaCy'] },
      { name: 'Pandas & NumPy', level: 'Advanced', experience: 'Data Wrangling', tags: ['ETL', 'Vectorization'] },
      { name: 'Model Evaluation & Metrics', level: 'Advanced', experience: 'Validation', tags: ['F1-Score', 'ROC-AUC', 'Confusion Matrix'] },
      { name: 'Exploratory Data Analysis (EDA)', level: 'Advanced', experience: 'Visual Analytics', tags: ['Seaborn', 'Matplotlib'] },
    ],
  },
  {
    title: 'UI/UX & Product Design',
    description: 'Human-centered design, interactive prototyping, and design systems.',
    skills: [
      { name: 'User Interface (UI) Design', level: 'Advanced', experience: 'Digital Products', tags: ['Figma', 'Visual Hierarchy'] },
      { name: 'User Experience (UX) Research', level: 'Proficient', experience: 'User Journeys', tags: ['Personas', 'Journey Maps'] },
      { name: 'Wireframing & Prototyping', level: 'Advanced', experience: 'Figma & InVision', tags: ['Interactive', 'Micro-interactions'] },
      { name: 'Design Systems & Tokens', level: 'Proficient', experience: 'Scalable UI', tags: ['Components', 'Typography', 'Spacing'] },
      { name: 'Accessibility (WCAG 2.1)', level: 'Proficient', experience: 'Inclusive Design', tags: ['Color Contrast', 'ARIA', 'A11y'] },
      { name: 'Information Architecture', level: 'Proficient', experience: 'Product Strategy', tags: ['User Flows', 'Navigation'] },
    ],
  },
  {
    title: 'Programming & Web Development',
    description: 'Front-end engineering, type-safe development, and modern web architectures.',
    skills: [
      { name: 'TypeScript & JavaScript', level: 'Proficient', experience: 'Full-Stack Apps', tags: ['ES6+', 'Type Safety'] },
      { name: 'Next.js & React', level: 'Proficient', experience: 'Modern Web Apps', tags: ['App Router', 'Server Components'] },
      { name: 'Tailwind CSS & Vanilla CSS', level: 'Advanced', experience: 'Responsive UI', tags: ['Tokens', 'Transitions'] },
      { name: 'HTML5 & Semantic Web', level: 'Advanced', experience: 'SEO & Structure', tags: ['Semantics', 'Meta'] },
      { name: 'SQL & Database Design', level: 'Intermediate', experience: 'Relational Data', tags: ['PostgreSQL', 'Queries'] },
      { name: 'RESTful API Integration', level: 'Proficient', experience: 'Client-Server', tags: ['Fetch', 'JSON'] },
    ],
  },
  {
    title: 'Tools, Systems & Workflow',
    description: 'Engineering workflows, developer tooling, and version control.',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient', experience: 'Version Control', tags: ['Branches', 'CI/CD'] },
      { name: 'Figma', level: 'Advanced', experience: 'Primary Design Tool', tags: ['Auto-layout', 'Variants'] },
      { name: 'VS Code & Jupyter Notebooks', level: 'Advanced', experience: 'Daily Workflows', tags: ['Dev Tools'] },
      { name: 'Linux / Windows CLI', level: 'Proficient', experience: 'Terminal', tags: ['PowerShell', 'Bash'] },
      { name: 'Agile & Team Collaboration', level: 'Proficient', experience: 'Student Leadership', tags: ['Scrum', 'Sprints'] },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'ieee-sltc',
    role: 'Committee Member / Design & Tech Lead',
    organization: 'IEEE Student Branch of SLTC',
    period: '2023 - Present',
    location: 'Sri Lanka Technological Campus (SLTC)',
    badge: 'Verified Leadership',
    description:
      'Active leadership and executive contribution to the IEEE Student Branch of Sri Lanka Technological Campus. Driving technical workshops, hackathons, and creative digital media initiatives to cultivate engineering and data science skills across the student body.',
    responsibilities: [
      'Spearheading the creative design direction and UI branding for national student hackathons, workshops, and IEEE flagship summits.',
      'Collaborating with branch executive officers to organize student-led technical bootcamps focusing on programming, design, and data science.',
      'Designing promotional assets, digital event interfaces, and community newsletters reaching hundreds of undergraduate students.',
      'Mentoring junior members on design toolchains (Figma) and front-end development fundamentals.',
    ],
    highlights: [
      'Co-organized university-wide technical symposiums fostering student innovation.',
      'Created standardized design guidelines for IEEE SLTC digital publication channels.',
      'Recognized for exceptional commitment to student development and community impact.',
    ],
  },
  {
    id: 'academic-leadership',
    role: 'Data Science Project Lead & Peer Mentor',
    organization: 'School of Computing & IT, SLTC',
    period: '2022 - Present',
    location: 'Colombo, Sri Lanka',
    badge: 'Academic & Projects',
    description:
      'Leading undergraduate group research projects in machine learning, exploratory data analytics, and human-computer interface design.',
    responsibilities: [
      'Facilitating collaborative code repositories, branch workflows, and code reviews for data science term projects.',
      'Assisting peers with statistical analysis, Python data cleaning pipelines, and UI prototyping techniques.',
      'Presenting project demonstrations to faculty review boards, highlighting empirical results and product usability.',
    ],
    highlights: [
      'Top-graded research capstone for NLP classification pipeline methodology.',
      'Fostered cross-disciplinary design thinking among computing peers.',
    ],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Outstanding Executive Contributor',
    issuer: 'IEEE Student Branch of SLTC',
    date: '2024',
    category: 'Leadership',
    description:
      'Awarded in recognition of outstanding design direction, technical coordination, and dedicated leadership in student branch events.',
  },
  {
    id: 'ach-2',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford Online',
    date: '2024',
    category: 'Certification',
    description:
      'Comprehensive verification in linear/logistic regression, cost functions, gradient descent, feature engineering, and regularization.',
  },
  {
    id: 'ach-3',
    title: 'Natural Language Processing Fundamentals',
    issuer: 'Data Science Specialization',
    date: '2023',
    category: 'Certification',
    description:
      'Practical training in text processing, tokenization, n-grams, sentiment analysis, sequence modeling, and evaluation metrics.',
  },
  {
    id: 'ach-4',
    title: 'UI/UX Design Foundations & Design Systems',
    issuer: 'Interaction Design & Prototyping',
    date: '2023',
    category: 'Certification',
    description:
      'Mastery of Figma auto-layout, design tokens, usability heuristics, wireframing workflows, and responsive design systems.',
  },
  {
    id: 'ach-5',
    title: 'National Student Hackathon Participant & UI Lead',
    issuer: 'Sri Lanka Technological Campus',
    date: '2023',
    category: 'Competition',
    description:
      'Led the rapid prototyping and UI presentation for an intelligent scheduling solution, pitching live to industry judges.',
  },
];
