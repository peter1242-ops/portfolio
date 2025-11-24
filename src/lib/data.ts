import { Github, Linkedin, Mail } from "lucide-react";

export const DATA = {
  profile: {
    name: "Prasanna Kumar",
    role: "Data Scientist & Machine Learning Engineer",
    tagline: "Turning data into decisions. Building intelligent systems that create real business impact.",
    bio: "I’m Prasanna Kumar, a Data Scientist & Machine Learning Engineer focused on building predictive models, scalable pipelines, and data-driven solutions. I use Python, SQL, ML, and analytics to solve real business problems and deliver measurable impact.",
    location: "Bangalore, India",
    email: "prasanna.vaddemanu8@gmail.com",
    resumeUrl: "/Prasanna_resume.pdf",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Prasanna-kumar-creator",
        icon: Github,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prasanna-kumar12",
        icon: Linkedin,
      },
      {
        name: "Email",
        url: "mailto:prasanna.vaddemanu8@gmail.com",
        icon: Mail,
      },
    ],
  },
  skills: {
    "Data Science": ["Machine Learning", "EDA", "Feature Engineering", "Statistical Analysis"],
    Programming: ["Python", "SQL"],
    "Tools & Libraries": ["Pandas", "NumPy", "Scikit-Learn", "Git", "Docker", "MySQL Workbench"],
    "Data Engineering": ["ETL Pipelines", "Airflow", "Spark (beginner)", "Data Warehousing"],
    Visualization: ["Power BI", "Tableau"],
    Cloud: ["AWS"],
    Databases: ["MySQL", "PostgreSQL"],
  },
  projects: [
    {
      title: "Customer Churn Prediction",
      description: "Predicting customer churn to improve retention strategies.",
      image: "/ecommerce_segmentation_cluster.jpg",
      stack: ["Python", "Pandas", "Scikit-Learn", "SQL"],
      highlights: ["84% accuracy", "feature engineering", "business insights"],
      github: "https://github.com/Prasanna-kumar-creator",
    },
    {
      title: "Sales Forecasting",
      description: "Forecasting sales trends to optimize inventory and planning.",
      image: "/sales_trend_prediction.jpg",
      stack: ["Python", "ARIMA", "Statsmodels", "Power BI"],
      highlights: ["4 years data processed", "MAPE < 8%"],
      github: "https://github.com/Prasanna-kumar-creator",
    },
    {
      title: "TMDB Movie Recommendation System",
      description: "Personalized movie recommendations based on user preferences.",
      image: "/tmdb_ml_project.jpg",
      stack: ["Python", "Pandas", "Scikit-Learn", "TMDB API", "Streamlit"],
      highlights: ["10K+ records", "cosine similarity", "interactive UI"],
      github: "https://github.com/Prasanna-kumar-creator",
    },
  ],
  experience: [
    {
      role: "Data Science Trainee (Fresher)",
      company: "Open to Opportunities",
      period: "Present",
      description: "Focused on data cleaning, EDA, basic ML, SQL, Power BI dashboards, and end-to-end mini projects.",
    },
  ],
  education: [
    {
      degree: "B.Tech CSE",
      institution: "Dr. Samuel George Institute of Engineering & Technology",
      period: "2019–2023",
    },
  ],
  achievements: [
    {
      title: "Gen AI & Data Science Bootcamp 2.0",
      issuer: "Codebasics",
      link: "https://codebasics.io/certificate/ABC123XYZ",
    },
  ],
};
