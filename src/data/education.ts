export interface Education {
  degree: string;
  school: string;
  year: string;
  percentage: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon?: string;
}

export interface ExtracurricularActivity {
  organization: string;
  role: string;
  description: string;
}

export const educationData: Education[] = [
  {
    degree: 'B.Tech in CSE (Data Science)',
    school: 'Shri Ramdeobaba College of Engineering & Management, Nagpur',
    year: '2023 - 2027 (Expected)',
    percentage: 'CGPA: 8.09 (till 5th Semester)',
  },
  {
    degree: 'HSC (12th Grade)',
    school: "Bhavan's B. P. Vidya Mandir, Srikrishna Nagar",
    year: '2021 - 2023',
    percentage: '87.6%',
  },
  {
    degree: 'SSC (10th Grade)',
    school: 'CIPS, Kapsi',
    year: '2019 - 2021',
    percentage: '87%',
  },
];

export const certificationsData: Certification[] = [
  {
    name: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    date: '2024',
    icon: 'DL',
    credentialUrl: '/certificates/nvidia/My Learning _ NVIDIA.pdf',
  },
  {
    name: 'Data Analytics Essentials',
    issuer: 'Cisco',
    date: '2024',
    icon: 'DA',
    credentialUrl:
      '/certificates/cisco/Data_Analytics_Essentials_certificate_pandeyan-rknec-edu_5eea98b0-cffb-47cc-8427-b6ac9b2eb42b.pdf',
  },
];

export const extracurricularData: ExtracurricularActivity[] = [
  {
    organization: 'DASCA (Data Science Association)',
    role: 'Venue Incharge',
    description:
      'Organizing data science events, workshops, and hackathons at RCOEM',
  },
  {
    organization: 'ACM (Association for Computing Machinery)',
    role: 'Executive Member',
    description:
      'Driving technical events and community engagement on campus',
  },
];
