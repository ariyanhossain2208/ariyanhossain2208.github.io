// ============================================
// PORTFOLIO DATA - Update all your information here
// ============================================

// Personal Information
export const personalInfo = {
  name: 'Ariyan Hossain',
  email: 'ariyan.hossain2208@gmail.com',
  phone: '+8801852810143',
  location: '01, Paribagh Garden Tower, Dhaka, Bangladesh',
  profileImage: '/profile.jpg',
  socialLinks: {
    github: 'https://github.com/ariyanhossain2208',
    linkedin: 'https://linkedin.com/in/ariyanhossain',
    googleScholar: 'https://scholar.google.com/citations?hl=en&user=AyQO80UAAAAJ&view_op=list_works',
  },
  aboutMe: [
    "📢 <strong> Looking for Ph.D. opportunities for Fall 2026 / Spring 2027 </strong>",
    "I'm <strong>Ariyan Hossain</strong>, a Lecturer in the <a href='https://cse.sds.bracu.ac.bd/faculty_profile/305/ariyan_hossain' className='text-blue-600 hover:text-blue-700 underline'>Department of Computer Science and Engineering</a> at <a href='https://www.bracu.ac.bd/' className='text-blue-600 hover:text-blue-700 underline'>BRAC University</a>, Dhaka, Bangladesh.",
    "My research interests span <strong>trustworthy and responsible AI</strong>, along with <strong>security and privacy in language models</strong>. Particularly, I am interested in developing methods to <strong>identify and reduce bias in AI systems,</strong> promoting fairness and inclusion across communities. I also aim to design trustworthy and transparent LLMs that are <strong>robust, interpretable, and privacy-preserving</strong> to benefit society.",
    "I graduated with <strong>Highest Distinction (GPA: 4.0/4.0)</strong> from the<a href='https://www.bracu.ac.bd/academics/schools-and-departments/school-data-and-sciences/computer-science-and-engineering' className='text-blue-600 hover:text-blue-700 underline'> Department of Computer Science and Engineering, BRAC University</a>, where I completed my undergraduate thesis on gender bias mitigation in transformer models under the supervision of <a href='https://sites.google.com/site/farigsadeque/home?authuser=0' className='text-blue-600 hover:text-blue-700 underline'>Dr. Farig Yousuf Sadeque</a>.",
  ],
}

// Work Experience
export interface WorkExperience {
  title: string
  organization: string
  advisors?: string
  department?: string
  location: string
  period: string
  description?: string
  details?: string[]
  logo?: string // Path to organization logo (e.g., '/brac-university-logo.png')
}

export const workExperience: WorkExperience[] = [
  {
    title: 'Lecturer',
    department: 'Department of Computer Science and Engineering',
    organization: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    period: 'May 2024 — Present',
    logo: '/bracu-logo.png',
    details: [
      'Teaching CSE220 (Data Structures), CSE221 (Algorithms), and CSE440 (Natural Language Processing)',
      'Taking both theory and lab classes, creating lecture notes, invigilating exams, and grading scripts',
      'Supervising thesis students and serving as thesis defense panel judge',
    ],
  },
  {
    title: 'Research Assistant',
    department: 'Department of Computer Science and Engineering',
    organization: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    period: 'November 2023 — May 2024',
    logo: '/bracu-logo.png',
    details: [
      'Worked full-time under Dr. Muhammad Nur Yanhaona',
      'Classified framing of news articles using Machine Learning and NLP',
      'Attended weekly research meetings and maintained detailed documentation',
    ],
  },
  {
    title: 'Undergraduate Teaching Assistant',
    department: 'Department of Computer Science and Engineering',
    organization: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    period: 'October 2022 — August 2023',
    logo: '/bracu-logo.png',
    details: [
      'Assisted in labs of CSE221 (Algorithms)',
      'Graded assignments and gave occasional lectures',
      'Provided up to 15 hours of weekly consultation to undergraduate students',
    ],
  },
]

// Education
export interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  gpa?: string
  details?: string[]
  logo?: string // Path to institution logo (e.g., '/bracu-logo.png')
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science and Engineering',
    institution: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    period: 'January 2020 — November 2023',
    logo: '/bracu-logo.png',
    details: [
      'GPA: 4.0/4.0; Graduated with Highest Distinction',
      'Relevant Coursework: Natural Language Processing, Neural Networks, Artificial Intelligence, Linear Algebra, Calculus',
    ],
  },
  {
    degree: 'General Certificate of Education Ordinary and Advanced Level (Cambridge)',
    institution: 'Sunnydale',
    location: 'Dhaka, Bangladesh',
    period: 'May 2017 — May 2019',
    logo: '/sunnydale-logo.png',
  },
]

// Research & Publications
export interface ResearchItem {
  title: string
  authors?: string
  year: number
  venue?: string
  description: string
  links?: { text: string; url: string }[]
}

export const research: ResearchItem[] = [
  {
    title: 'Contaminated Collaboration: Measuring Gender Bias Transfer in LLM-Assisted Student Writing',
    authors: 'Ariyan Hossain, K. K. Rabbi, Dr. Farig Yousuf Sadeque, Dr. S. M. Taiabul Haque',
    year: 2026,
    venue: 'Under Review, ARR (targeting EMNLP 2026)',
    description:
      'Conducted the first controlled study (N=153) examining how LLM writing suggestions propagate gender stereotypes during human-LLM co-authoring of career essays. Demonstrated bias transfer through a two-measure evaluation framework combining an agentic language gap (via a fine-tuned agency classifier) and a novel Stereotype Congruence Rate (SCR) metric.',
    links: [
      { text: 'arXiv', url: 'https://arxiv.org/abs/2606.15914' },
    ],
  },
  {
    title: 'Benchmarking Bengali Dialectal Bias: A Multi-Stage Framework Integrating RAG-Based Translation and Human-Augmented RLAIF',
    authors: 'K. M. J. Sami, D. Sumit, Ariyan Hossain, Dr. Farig Yousuf Sadeque',
    year: 2025,
    venue: 'Under Review, ARR (targeting EMNLP 2026)',
    description:
      'Created a benchmark evaluating 19 LLMs across 4,000 gold-labeled question sets spanning nine Bengali dialects using RAG-based translation. Proposed a RLAIF bias evaluation framework with Chain-of-Thought rubrics and introduced the CBS (Cultural Bias Score) metric for safety-critical assessment.',
    links: [
      { text: 'arXiv', url: 'https://arxiv.org/abs/2603.21359' },
    ],
  },
  {
    title: 'A Comparative Analysis of RAG Techniques for Bengali Standard-to-Dialect Machine Translation Using LLMs',
    authors: 'K. M. J. Sami, D. Sumit, Ariyan Hossain, Dr. Farig Yousuf Sadeque',
    year: 2025,
    venue: 'BLP Workshop @ IJCNLP-AACL 2025 (Published)',
    description:
      'Designed two RAG pipelines for standard-to-dialectal Bengali translation across six dialects using in-context learning. Reduced WER from 76% to 55% with sentence-pair RAG, enabling Llama-3.1-8B to outperform GPT-OSS-120B.',
    links: [
      { text: 'ACL Anthology', url: 'https://aclanthology.org/2025.banglalp-1.22/' },
    ],
  },
  {
    title: 'Identifying Framing Bias in Online Climate Change News Articles',
    authors: 'Ariyan Hossain, Dr. Muhammad Nur Yanhaona',
    year: 2024,
    description:
      'Built a frame-classified climate change news dataset via expert annotation and GPT-4 synthetic augmentation for multi-class framing classification. Fine-tuned Longformer, BigBird, BERT, and LLaMA-3.1 for long-document classification, applying QLoRA for memory-efficient parameter-efficient fine-tuning (PEFT).',
  },
  {
    title: 'Exploring and Mitigating Gender Bias in Encoder-Based Transformer Models',
    authors: 'Ariyan Hossain, K. M. A. Hannan, R. Haque, N. T. Rafa, H. Musarrat, S. A. Dipu, Dr. Farig Yousuf Sadeque',
    year: 2025,
    venue: 'Undergraduate Thesis',
    description:
      'Proposed MALoR, a novel metric for quantifying gender bias via masked-token probabilities in encoder-based models. Created gender-balanced pretraining datasets using Counterfactual Data Augmentation (CDA) by swapping gendered pronouns and names, generating over 19,000 balanced sentence pairs. Achieved up to 95% reduction in gender bias (e.g., "he–she" bias in BERT-base decreased from 1.27 → 0.08 and "his–her" from 2.51 → 0.36 MALoR score).',
    links: [
      { text: 'arXiv', url: 'https://arxiv.org/abs/2511.00519' },
    ],
  },
]

// Technical Skills
export interface Skill {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'Bash', 'MATLAB', 'x86 Assembly', 'Verilog'],
  },
  {
    category: 'Web Technologies',
    items: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
  },
  {
    category: 'ML/AI Libraries & Frameworks',
    items: [
      'TensorFlow',
      'PyTorch',
      'Transformers',
      'Keras',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'NLTK',
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      'Git',
      'GitHub',
      'Visual Studio Code',
      'Jupyter Notebook',
      'Cisco Packet Tracer',
      'Proteus',
      'Quartus',
      'Linux',
    ],
  },
]

// Projects
export interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'BiasGuard: Explainable Sexism Detection in Online Texts',
    description:
      'NLP project focused on detecting sexist vs. non-sexist content in online texts. Performed EDA and preprocessing with class balance checks, text cleaning, tokenization, and embeddings. Built classifiers using CNN, BiLSTM, and GRU models for explainable sexism detection.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NLTK', 'Pandas'],
    github: 'https://github.com/ariyanhossain2208/Detection-of-Online-Sexism-NLP',
    image: '/online-sexism.PNG',
  },
  {
    title: 'Sentiment Analysis on IMDB Movie Reviews',
    description:
      'Classified movie reviews as positive or negative using Naive Bayes, Logistic Regression, and LSTM models. Analyzed accuracy and limitations of traditional ML vs. deep learning approaches for sentiment classification.',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'NLTK'],
    github: 'https://github.com/ariyanhossain2208/Sentiment-Analysis-NLP',
    image: '/sentiment-analysis.png',
  },
  {
    title: 'Image Classification with CNN Variants on CIFAR-10',
    description:
      'Designed and trained CNN models with varied activation functions, kernel sizes, filters, and strides. Compared model performance to analyze the impact of different architectural choices on image classification accuracy.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
    github: 'https://github.com/ariyanhossain2208/Exploring-Traditional-CNNs',
    image: '/image-classification.png',
  },
  {
    title: 'Wine Quality Prediction using Machine Learning',
    description:
      'Predicted wine quality using Random Forest Classifier, Logistic Regression, Naive Bayes Classifier, and SVM. Performed feature engineering, scaling, and feature importance analysis to identify key factors affecting wine quality.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/ariyanhossain2208/Wine-Quality-Prediction-ML',
    image: '/wine-quality.png',
  },
  {
    title: 'DisasterGuard: Home Security System using Arduino and Sensors',
    description:
      'Created a device using sensors and Arduino for home security system. Detects earthquake, gas leakage, smoke and intruder and alerts users through SMS and buzzer.',
    technologies: ['Arduino', 'C++', 'Sensors'],
    github: 'https://github.com/ariyanhossain2208/Disaster-Guard',
    image: '/disaster-guard.png',
  },
  {
    title: 'Pet Care: Veterinary and Adoption Services Platform',
    description:
      'Created pet care system with food, medicine, grooming and cleaning, veterinarian and adoption services. Used CSS, HTML, and JavaScript for the front end, PHP for the back end, and MySQL as the database.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/ariyanhossain2208/Pet-Care',
    image: '/petcare.PNG',
  },
]

// Achievements
export interface Achievement {
  title: string
  type: 'competition' | 'award' | 'honor'
  organization: string
  date: string
  description: string
  link?: string
  position?: string
  logo?: string // Path to organization logo (e.g., '/bracu-logo.png')
}

export const achievements: Achievement[] = [
  {
    title: 'BRAC University Highest Distinction',
    type: 'honor',
    organization: 'BRAC University',
    date: '2023',
    description:
      'Awarded Highest Distinction for achieving a CGPA of 3.80 or higher. Graduated with perfect 4.0/4.0 GPA.',
    position: 'Top in Class',
    logo: '/bracu-logo.png',
  },
  {
    title: 'BRAC University Performance Based 100% Scholarship',
    type: 'honor',
    organization: 'BRAC University',
    date: '2020-2023',
    description:
      'Received 100% scholarship for maintaining perfect CGPA of 4.0/4.0 throughout undergraduate studies.',
    logo: '/bracu-logo.png',
  },
  {
    title: 'BRAC University Vice Chancellor\'s List',
    type: 'honor',
    organization: 'BRAC University',
    date: '2020-2023',
    description:
      'Recognized on Vice Chancellor\'s List 10 times during Bachelor\'s for achieving a GPA of 3.90-4.00 in multiple semesters.',
    logo: '/bracu-logo.png',
  },
  {
    title: 'Outstanding Cambridge Learner Awards',
    type: 'award',
    organization: 'Cambridge International',
    date: '2019',
    description:
      'Awarded World Highest Marks (100%) in AS Level Mathematics.',
    position: 'World Highest',
    logo: '/cambridge-logo.png',
  },
  {
    title: 'The Daily Star Award for A Level Outstanding Results',
    type: 'award',
    organization: 'The Daily Star',
    date: '2019',
    description:
      'Recognized for achieving a minimum of 3 A\'s in A Level examinations.',
    logo: '/dailystar-logo.png',
  },
]


// Teaching section 
export interface Course {
  code: string
  name: string
  period: string
  slides?: string
}

export interface Workshop {
  title: string
  organization: string
  period?: string
  date?: string
  description: string
  images?: string[]
  imageTitles?: string[]
  slides?: string
}

export interface Service {
  title: string
  organization?: string
  description: string
}

export interface MiscItem {
  category: string
  description?: string
  image?: string
  sections?: {
    title: string
    items?: string[]
    courses?: Course[]
    workshops?: Workshop[]
    services?: Service[]
    image?: string
    imageTitle?: string
  }[]
  items?: string[]
  color: string
}

export const miscellaneous: MiscItem[] = [
  {
    category: 'Teaching',
    color: 'from-blue-500 to-indigo-500',
    sections: [
      {
        title: 'Courses I Teach/Taught',
        image: '/teaching.jpg', // Add your courses image here
        imageTitle: 'My first cohort of CSE221 students during my teaching tenure',
        courses: [
          {
            code: 'CSE220',
            name: 'Data Structures (Theory)',
            period: 'Summer 2024 - Spring 2025',
            slides: 'https://docs.google.com/spreadsheets/d/1ZcMMnk4UEPrlD5R-ziy8_pPdZ4OlLcineKvrrOgr9lA/edit?gid=1488164682#gid=1488164682',
          },
          {
            code: 'CSE220',
            name: 'Data Structures (Lab)',
            period: 'Summer 2024 - Present',
            slides: '', // Add slide link if available
          },
          {
            code: 'CSE221',
            name: 'Algorithms (Theory)',
            period: 'Summer 2024 - Present',
            slides: 'https://docs.google.com/spreadsheets/d/1ZcMMnk4UEPrlD5R-ziy8_pPdZ4OlLcineKvrrOgr9lA/edit?gid=0#gid=0',
          },
          {
            code: 'CSE440',
            name: 'Natural Language Processing (Lab)',
            period: 'Spring 2025 - Present',
            slides: '', // Add slide link if available
          },
          {
            code: 'CSE422',
            name: 'Artificial Intelligence (Lab)',
            period: 'Summer 2026 - Present',
            slides: '', // Add slide link if available
          },
        ],
      },
      {
        title: 'Seminars/Workshop I Took',
        image: '/workshops.jpg', // Add your workshops image here
        workshops: [
          {
            title: 'Talking to Machines: The Power of Natural Language Processing Workshop',
            organization: 'IEEE Robotics and Automation Society, BRAC University',
            date: 'May 2025',
            description: 'Introduced NLP from how machines understand language to recent technologies including LLMs to 140+ undergraduate students',
            images: ['/workshop11.jpg', '/workshop12.jpg'],
            imageTitles: ['Introducing the Bag of Words model as a word representation', 'Recognized as the leading speaker at the workshop'],
            slides: 'https://drive.google.com/file/d/1bjlkFnfC3_dmXofq4458BKBdlIJYkuSn/view?usp=drive_link',
          },
        ],
      },
      {
        title: 'Other Services',
        image: '/csedept.jpg', // Add your services image here
        imageTitle: 'Faculty of Computer Science and Engineering, BRAC University',
        services: [
          {
            title: 'Pre-Thesis I Panel Judge',
            organization: 'BRAC University',
            description: 'Reviewed and provided feedback on initial thesis drafts of undergraduate teams',
          },
          {
            title: 'Final Thesis Defense Panel Judge',
            organization: 'BRAC University',
            description: 'Reviewed and evaluated completed undergraduate research works',
          },
          {
            title: 'Thesis Supervisor',
            organization: 'BRAC University',
            description: 'Co-supervised and supervised 50+ students working on NLP undergraduate thesis',
          },
          {
            title: 'CSE440 NLP Lab Coordinator',
            organization: 'BRAC University',
            description: 'Introduced and coordinated CSE440 NLP Lab at BRAC University, including content creation and lab organization',
          },
          {
            title: 'Course Advisor',
            organization: 'BRAC University',
            description: 'Advised students on and approved undergraduate courses, and created course routines',
          },
        ],
      },
    ],
  },
]


