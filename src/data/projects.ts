export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  solutionApproach: string;
  techStack: string[];
  features: string[];
  outcomes: string[];
  category: 'data-science' | 'full-stack' | 'analytics';
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  emoji?: string;
}

export const projects: Project[] = [
  {
    id: 'electricity-anomaly',
    title: 'Electricity Demand Anomaly Detection System',
    shortDescription:
      'Smart-grid anomaly detection using SARIMA, Isolation Forest, and LSTM Autoencoders',
    fullDescription:
      'Developed an intelligent system to detect electricity theft and abnormal consumption patterns in smart-grids',
    problemStatement:
      'Electricity theft and abnormal consumption patterns cause significant revenue loss for utility companies',
    solutionApproach:
      'Combined SARIMA for baseline modeling, Isolation Forest for unsupervised detection, and LSTM Autoencoders for deep learning-based anomaly detection',
    techStack: [
      'Python',
      'SARIMA',
      'Isolation Forest',
      'LSTM',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],
    features: [
      'SARIMA residual modeling for baseline establishment',
      'Isolation Forest unsupervised anomaly detection',
      'LSTM Autoencoder for sequence-based detection',
      'Multi-model ensemble for robustness',
      'Visual dashboards for monitoring',
    ],
    outcomes: [
      'Successfully identified anomalous consumption patterns',
      'High precision in detecting electricity theft indicators',
    ],
    category: 'data-science',
    image: '/images/projects/electricity.png',
    githubUrl: 'https://github.com/',
    featured: true,
    emoji: 'AI',
  },
  {
    id: 'credit-default',
    title: 'Credit Default Early-Warning System',
    shortDescription:
      'Predictive system using Gradient Boosting for loan default risk classification',
    fullDescription:
      'Built a prediction system to identify high-risk loans before default occurs',
    problemStatement:
      'Financial institutions need to predict loan defaults early to minimize risk and take proactive measures',
    solutionApproach:
      'Time-series feature engineering combined with Gradient Boosting models for probabilistic risk scoring',
    techStack: [
      'Python',
      'XGBoost',
      'LightGBM',
      'Pandas',
      'Scikit-learn',
      'Matplotlib',
    ],
    features: [
      'Time-series feature engineering from payment history',
      'Gradient Boosting models for default probability',
      'Risk tier classification (Low/Medium/High)',
      'Feature importance analysis',
      'Alert thresholds for early warning',
    ],
    outcomes: [
      'Advanced prediction of loan default risk',
      'Supported proactive risk management decisions',
    ],
    category: 'data-science',
    image: '/images/projects/credit-default.png',
    githubUrl: 'https://github.com/',
    featured: true,
    emoji: 'ML',
  },
  {
    id: 'traffic-analytics',
    title: 'Urban Traffic Congestion Analytics',
    shortDescription:
      'Clustering and time-series analysis for traffic hotspot detection and predictions',
    fullDescription:
      'Comprehensive traffic analytics platform for urban planning and smart-city initiatives',
    problemStatement:
      'Urban planners lack data-driven tools to identify congestion hotspots and predict peak traffic periods',
    solutionApproach:
      'Spatial clustering for hotspot detection combined with time-series decomposition for pattern analysis',
    techStack: [
      'Python',
      'K-Means',
      'DBSCAN',
      'Power BI',
      'Pandas',
      'Matplotlib',
      'Seaborn',
    ],
    features: [
      'Spatial clustering for hotspot detection',
      'Time-series decomposition for trends',
      'Peak traffic period prediction',
      'Interactive geographic heatmaps',
      'Power BI dashboards for stakeholders',
    ],
    outcomes: [
      'Identified actionable congestion patterns',
      'Supported data-driven urban planning decisions',
    ],
    category: 'analytics',
    image: '/images/projects/traffic.png',
    githubUrl: 'https://github.com/',
    featured: true,
    emoji: 'BI',
  },
  {
    id: 'log-analytics',
    title: 'Distributed Log Analytics Platform',
    shortDescription:
      'Scalable log ingestion and real-time anomaly detection for distributed systems',
    fullDescription:
      'Built a production-grade log analytics system for large-scale application monitoring',
    problemStatement:
      'Large applications generate massive log volumes; teams need real-time anomaly detection across distributed systems',
    solutionApproach:
      'Scalable log ingestion pipeline with ElasticSearch indexing and ML-based anomaly detection',
    techStack: ['Python', 'Java', 'ElasticSearch', 'ML', 'REST APIs'],
    features: [
      'Scalable log ingestion pipeline',
      'Real-time parsing and indexing',
      'ML-based anomaly detection',
      'Real-time monitoring dashboard',
      'Alert system for critical events',
    ],
    outcomes: [
      'Enabled real-time application health monitoring',
      'Automated anomaly detection at scale',
    ],
    category: 'full-stack',
    image: '/images/projects/log-analytics.png',
    githubUrl: 'https://github.com/',
    featured: false,
    emoji: 'LOG',
  },
  {
    id: 'code-quality',
    title: 'Real-Time Code Quality Analyzer',
    shortDescription:
      'AST parsing and ML-based code smell detection for GitHub repositories',
    fullDescription:
      'Automated tool for detecting code quality issues and technical debt in repositories',
    problemStatement:
      'Code quality degradation often goes unnoticed, leading to technical debt and maintenance issues',
    solutionApproach:
      'Combined AST parsing for structural analysis with ML classification for quality scoring',
    techStack: ['Python', 'AST Parsing', 'ML', 'React.js', 'GitHub API'],
    features: [
      'GitHub repository integration',
      'AST-based code smell detection',
      'Rule-based and ML-based quality scoring',
      'Real-time web interface feedback',
      'Quality report generation',
    ],
    outcomes: [
      'Automated code quality assessment',
      'Real-time actionable feedback for developers',
    ],
    category: 'full-stack',
    image: '/images/projects/code-quality.png',
    githubUrl: 'https://github.com/',
    featured: false,
    emoji: 'QA',
  },
  {
    id: 'placement-analytics',
    title: 'Campus Placement Analytics System',
    shortDescription:
      'Full-stack ML platform with interactive dashboards for placement predictions and trend analysis',
    fullDescription:
      'Complete analytics platform for tracking placement trends and predicting student placement probability',
    problemStatement:
      'Students and placement cells lack data-driven tools to track trends and predict placement probability',
    solutionApproach:
      'Full-stack application combining ML models with interactive React dashboards for data visualization',
    techStack: [
      'Flask',
      'React.js',
      'MySQL',
      'Python',
      'Machine Learning',
    ],
    features: [
      'Student placement probability prediction',
      'Historical placement trend analysis',
      'Interactive React dashboards',
      'Data visualization and insights',
      'Structured MySQL database',
    ],
    outcomes: [
      'Provided actionable placement insights',
      'Personalized probability predictions for students',
    ],
    category: 'full-stack',
    image: '/images/projects/placement.png',
    githubUrl: 'https://github.com/',
    featured: false,
    emoji: 'APP',
  },
];
