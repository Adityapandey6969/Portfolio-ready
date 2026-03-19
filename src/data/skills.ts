export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number;
  icon?: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', proficiency: 95, icon: 'PY' },
      { name: 'Java', proficiency: 80, icon: 'JV' },
      { name: 'JavaScript', proficiency: 75, icon: 'JS' },
      { name: 'C', proficiency: 65, icon: 'C' },
      { name: 'SQL', proficiency: 90, icon: 'DB' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', proficiency: 75, icon: 'RE' },
      { name: 'Next.js', proficiency: 65, icon: 'NX' },
      { name: 'Node.js', proficiency: 70, icon: 'ND' },
      { name: 'Express.js', proficiency: 70, icon: 'EX' },
      { name: 'Tailwind CSS', proficiency: 80, icon: 'TW' },
      { name: 'HTML5', proficiency: 90, icon: 'H5' },
      { name: 'NumPy', proficiency: 90, icon: 'NP' },
      { name: 'Pandas', proficiency: 90, icon: 'PD' },
      { name: 'Matplotlib', proficiency: 85, icon: 'MP' },
      { name: 'Seaborn', proficiency: 85, icon: 'SB' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', proficiency: 70, icon: 'MG' },
      { name: 'MySQL', proficiency: 90, icon: 'MY' },
      { name: 'Oracle SQL', proficiency: 80, icon: 'OR' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', proficiency: 88, icon: 'GH' },
      { name: 'Power BI', proficiency: 85, icon: 'BI' },
      { name: 'Figma', proficiency: 60, icon: 'FG' },
      { name: 'MS Excel', proficiency: 85, icon: 'XL' },
    ],
  },
  {
    category: 'ML/DL Techniques',
    skills: [
      { name: 'SARIMA & Time-Series', proficiency: 85 },
      { name: 'Isolation Forest', proficiency: 80 },
      { name: 'LSTM Autoencoders', proficiency: 75 },
      { name: 'Gradient Boosting', proficiency: 85 },
      { name: 'Clustering Algorithms', proficiency: 80 },
      { name: 'Feature Engineering', proficiency: 88 },
    ],
  },
];

export const stats = [
  { label: 'CGPA', value: '8.09' },
  { label: 'Projects', value: '6+' },
  { label: 'Certifications', value: '2' },
  { label: 'Skills', value: '25+' },
];
