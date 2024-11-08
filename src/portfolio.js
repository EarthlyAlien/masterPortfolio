/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Set to false if you don't want Splash screen.
};

// SEO Settings
const seo = {
  title: "Chaitanya Vankadaru's Portfolio",
  description:
    "Portfolio of Chaitanya Vankadaru, a Data & AI Solutions Architect with expertise in data analytics, data science, data engineering, MLOps, and cloud computing.",
  og: {
    title: "Chaitanya Vankadaru's Portfolio",
    type: "website",
    url: "https://earthlyalien.github.io",
  },
};

// Home Page Configuration
const greeting = {
  title: "Chaitanya Vankadaru",
  logo_name: "ChaitanyaVankadaru",
  nickname: "Data & AI Solutions Architect",
  subTitle:
    "Data Scientist | MLOps Engineer | Cloud Architect | Passionate about transforming data into impactful solutions.",
  resumeLink: "https://your-resume-link.com",
  portfolio_repository: "https://github.com/YourUsername/YourRepo",
  githubProfile: "https://github.com/YourUsername",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "GitHub",
    link: "https://github.com/EarthlyAlien",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/chaitanyavankadaru",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:chaitanya.vankadaru@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills Section
const skills = {
  data: [
    {
      title: "Data Science & AI",
      skills: [
        "⚡ Building predictive models for customer insights and churn prediction",
        "⚡ Expertise in NLP, deep learning, computer vision, and time series analysis",
        "⚡ Data visualization for business intelligence and decision-making",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python" },
        { skillName: "TensorFlow", fontAwesomeClassname: "logos-tensorflow" },
        { skillName: "PyTorch", fontAwesomeClassname: "logos-pytorch" },
        { skillName: "R", fontAwesomeClassname: "simple-icons:r" },
        { skillName: "SQL", fontAwesomeClassname: "simple-icons:mysql" },
      ],
    },
    {
      title: "Data Engineering & MLOps",
      skills: [
        "⚡ Designing scalable ETL pipelines and data processing systems",
        "⚡ Cloud deployments on AWS, Azure, GCP for data and ML services",
        "⚡ Implementing CI/CD pipelines and model monitoring in production",
      ],
      softwareSkills: [
        { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws" },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker" },
        { skillName: "Kubernetes", fontAwesomeClassname: "simple-icons:kubernetes" },
        { skillName: "Apache Spark", fontAwesomeClassname: "logos-apache" },
        { skillName: "Airflow", fontAwesomeClassname: "simple-icons:apacheairflow" },
      ],
    },
    {
      title: "Business Analytics & Data Visualization",
      skills: [
        "⚡ Analyzing data for actionable insights and decision-making",
        "⚡ Creating dashboards for data visualization and reporting",
        "⚡ Forecasting and quantitative analysis for strategic planning",
      ],
      softwareSkills: [
        { skillName: "Power BI", fontAwesomeClassname: "simple-icons:powerbi" },
        { skillName: "Tableau", fontAwesomeClassname: "logos-tableau" },
        { skillName: "Plotly", fontAwesomeClassname: "logos-plotly" },
        { skillName: "Excel", fontAwesomeClassname: "simple-icons:microsoftexcel" },
      ],
    },
  ],
};

// Education Section
const degrees = {
  degrees: [
    {
      title: "University of North Texas",
      subtitle: "M.S. in Advanced Data Analytics",
      logo_path: "unt_logo.png",
      alt_name: "UNT",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Specialized in machine learning, big data, and predictive modeling",
        "⚡ Conducted research on customer segmentation using clustering techniques",
        "⚡ Developed expertise in advanced data visualization and statistical analysis",
      ],
      website_link: "https://unt.edu",
    },
  ],
};

// Certifications Section
const certifications = {
  certifications: [
    {
      title: "AWS Certified Data Engineer",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_logo.png",
      certificate_link: "https://aws.amazon.com/certification/",
      alt_name: "AWS",
      color_code: "#FF9900",
    },
    {
      title: "TensorFlow Developer",
      subtitle: "- Google",
      logo_path: "tensorflow_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/",
      alt_name: "Google",
      color_code: "#FF6F00",
    },
    {
      title: "Azure Data Engineer",
      subtitle: "- Microsoft Azure",
      logo_path: "azure_logo.png",
      certificate_link: "https://www.microsoft.com/en-us/learning",
      alt_name: "Azure",
      color_code: "#0089D6",
    },
  ],
};

// Experience Section
const experience = {
  title: "Experience",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "University of North Texas",
          duration: "June 2023 – Present",
          location: "Denton, Texas",
          description:
            "Led data science and cloud technology labs, enhancing student project quality by 12% and developing Python-based grading scripts for a 40% time savings.",
          color: "#007acc",
        },
        {
          title: "Product Lead (Data Engineer, Data Scientist, MLOps Engineer)",
          company: "Cumulus Nexus India Private Limited",
          duration: "Oct 2019 – Dec 2022",
          location: "Visakhapatnam, India",
          description:
            "Directed data engineering, MLOps, and cloud optimization projects, achieving a 25% cost reduction and 12% boost in customer retention.",
          color: "#007acc",
        },
        {
          title: "Community Lead",
          company: "Azure Developer Community India",
          duration: "May 2020 – Dec 2022",
          location: "Visakhapatnam, India",
          description:
            "Organized workshops on MLOps, Power BI, and Synapse, increasing community engagement by 70%.",
          color: "#2C8EBB",
        },
        {
          title: "Software Engineer - Data",
          company: "Dhunis Technologies Private Limited",
          duration: "Sept 2018 – July 2019",
          location: "Visakhapatnam, India",
          description:
            "Enhanced backend services for data processing, increasing system efficiency by 20%.",
          color: "#007acc",
        },
      ],
    },
  ],
};

// Projects Section
const projectsHeader = {
  title: "Projects",
  description:
    "Projects leveraging modern technologies in Data, MLOps, and cloud architecture.",
};

const publications = {
  data: [
    {
      id: "customer-churn-prediction",
      name: "Customer Churn Prediction Model",
      description:
        "Developed a machine learning model with 86.2% accuracy, deployed on AWS to enable proactive retention strategies.",
      url: "https://github.com/EarthlyAlien/churn-prediction",
    },
    {
      id: "real-time-data-streaming",
      name: "Real-Time Data Streaming Solution",
      description:
        "Architected a Kafka-based data streaming solution with 99.9% availability for instant data insights.",
      url: "https://github.com/EarthlyAlien/real-time-streaming",
    },
    {
      id: "automated-ml-pipeline",
      name: "Automated ML Pipeline",
      description:
        "Created a CI/CD-enabled ML pipeline using Apache Airflow and AWS SageMaker, achieving a 14% cost reduction.",
      url: "https://github.com/EarthlyAlien/automated-ml-pipeline",
    },
  ],
};

// Contact Page Configuration
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "Reach out to me via email at chaitanya.vankadaru@gmail.com. I am open to discussing data analytics/engineering & science, MLOps, and cloud projects. Feel free to reach out!",
  },
  addressSection: {
    title: "Address",
    subtitle: "Texas",
  },
};

// Export the configuration
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publications,
  contactPageData,
};
