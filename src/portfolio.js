/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bismay Kumar",
  title: "Hello, I'm Bismay",
  subTitle: emoji(
    "An ambitious engineer  🚀 aspiring to become a skilled data scientist."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Codsssworth",
  linkedin: "https://www.linkedin.com/in/bismay-kumar-72b762252/",
  gmail: "bismay80@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AN IMPASSIONED ENGINEER, SPECIALIZING IN MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE, EAGER TO DELVE INTO DIVERSE TECHNOLOGICAL STACKS.",
  skills: [
    
     emoji( " ✔️ Design and train advanced machine learning models tailored for real-world applications")
    ,
    emoji("✔️ Generate intelligent data through data mining and web scraping, employing diverse data cleaning techniques."),
    emoji(
      "✔️ Implement machine learning models as progressive web applications (PWAs) with interactive user interfaces and integrated data visualization."),
      emoji(
        "✔️ Seamlessly integrate with Lambda, Kafka to leverage serverless computing and real-time data streaming.")

  ],
  techstack: [
    {
      name: "C/C++",
      logo : <img alt="Working" src={require("./assets/images/c.png")  } height={30} width={30}/>
      
    },
    {
      name: 'Java',
      logo : <img alt="Working" src={require("./assets/images/java.png")} height={30} width={30}/>
    },
    {
      name: 'Python',
      logo : <img alt="Working" src={require("./assets/images/py.png")} height={30} width={30}/>
      
    },
    {
      name: 'Keras',
      logo : <img alt="Working" src={require("./assets/images/keras.png")} height={30} width={30}/>
      
    },
    {
      name: 'Tensorflow',
      logo : <img alt="Working" src={require("./assets/images/tf.png")} height={30} width={30}/>
      
    },
    {
      name: 'Pytorch',
      logo : <img alt="Working" src={require("./assets/images/pyt.png")} height={30} width={30}/>
      
    },
    {
      name: 'Scikit-Learn',
      logo : <img alt="Working" src={require("./assets/images/sk.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'Flask',
      logo : <img alt="Working" src={require("./assets/images/flask.png")} height={30} width={30}/>
      
    },
    {
      name: 'Kakfa',
      logo : <img alt="Working" src={require("./assets/images/kfk.png")} height={30} width={30}/>
      
    },
    {
      name: 'Lambda',
      logo : <img alt="Working" src={require("./assets/images/lamb.png")} height={30} width={30}/>
      
    },
    {
      name: 'Kubernetes',
      logo : <img alt="Working" src={require("./assets/images/Kubernetes_logo_without_workmark.svg.png")} height={30} width={30}/>
      
    },
    {
      name: 'S3',
      logo : <img alt="Working" src={require("./assets/images/s3.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'Dynamo DB',
      logo : <img alt="Working" src={require("./assets/images/adb.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'JavaScript',
      logo : <img alt="Working" src={require("./assets/images/js.png")} height={30} width={30}/>
      
    },
    {
      name: 'Firebase',
      logo : <img alt="Working" src={require("./assets/images/fb.png")} height={30} width={30}/>
      
    },
    {
      name: 'React',
      logo : <img alt="Working" src={require("./assets/images/react.png")} height={30} width={30}/>
      
    },
    {
      name: 'MongoDB',
      logo : <img alt="Working" src={require("./assets/images/mongo.png")} height={30} width={30}/>
      
    },
    {
      name: 'Node.js',
      logo : <img alt="Working" src={require("./assets/images/node.png")} height={30} width={30}/>
      
    },
    {
      name: 'Nginx',
      logo : <img alt="Working" src={require("./assets/images/ngx.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'ExpressJS',
      logo : <img alt="Working" src={require("./assets/images/exp.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'Kotlin',
      logo : <img alt="Working" src={require("./assets/images/kt.jpg")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'Android Studio',
      logo : <img alt="Working" src={require("./assets/images/as.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'Spark',
      logo : <img alt="Working" src={require("./assets/images/aps.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'Postgre',
      logo : <img alt="Working" src={require("./assets/images/pgre.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'PWA',
      logo : <img alt="Working" src={require("./assets/images/pwa.webp")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'Selenium',
      logo : <img alt="Working" src={require("./assets/images/sl.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'R',
      logo : <img alt="Working" src={require("./assets/images/r.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'Postman',
      logo : <img alt="Working" src={require("./assets/images/pm.png")} height={30} width={30}/>
      
    }
    ,
    {
      name: 'Github',
      logo : <img alt="Working" src={require("./assets/images/git.png")} height={30} width={30}/>
      
    }  ,
    {
      name: 'Docker',
      logo : <img alt="Working" src={require("./assets/images/doc.png")} height={30} width={30}/>
      
    },
    {
      name: 'Reddis',
      logo : <img alt="Working" src={require("./assets/images/red.png")} height={30} width={30}/>
      
    }],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    name: "AI & ML",
    value: 85,
    
  },
  {
    name: 'PWA',
    value: 70,
  },
  {
    name: 'Automation',
    value: 60,
    
  },
  {
    name: 'DBMS',
    value: 50,
    
  },
  {
    name: 'IOT',
    value: 50,
    
  },
  {
    name: 'AWS/Firebase',
    value: 50,
    
  },
  {
    name: 'UI/UX',
    value: 40,
    
  }
],


languages: [
  {
    name: "C/CPP",
    value: 85,
    
  },
  {
    name: 'Python',
    value: 80,
  },
  {
    name: 'JavaScript/Golang',
    value: 70,
    
  },
  {
    name: 'Java/Kotlin',
    value: 60,
    
  },
  {
    name: 'MySQL/Mongo',
    value: 50,
    
  },
  {
    name: 'R/Julia',
    value: 40,
    
  },
  {
    name: 'PHP',
    value: 20,
    
  }
],
display: true // Set false to hide this section, defaults to true
}

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Presidency University",
      logo: require("./assets/images/pu.png"),
      subHeader: "Bachelor of Technology in Information Science and Engineering",
      duration: "August 2018 - June 2023",
      desc: "Bangalore,Karnataka",
      descBullets: [  ]
    },
    {
      schoolName: "Kendriya Vidyalaya Sangathan",
      logo: require("./assets/images/kv.png"),
      subHeader: "12th and 10th from CBSE board",
      duration: "September 2005 - April 2018",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DSA",
      progressPercentage: "90%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Keras, TensorFlow, Pytorch", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "NLTK, Open-CV, Time Series",
      progressPercentage: "80%"
    },
    {
      Stack: "Pandas, Numpy, Matplotlib",
      progressPercentage: "80%"
    },
    {
      Stack: "Regression/ SVM / Reinforcement ",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Mining and Scraping",
      progressPercentage: "70%"
    },
    {
      Stack: "MERN (Mongo Express React Node)",
      progressPercentage: "70%"
    },
    {
      Stack: "LAMP (Linux Appache MySQL PHP)",
      progressPercentage: "50%"
    },
    {
      Stack: "Selenium and Automation",
      progressPercentage: "50%"
    },
    {
      Stack: "AWS/ Firebase/ Docker",
      progressPercentage: "50%"
    }
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  title: "github",
  subtitle: "my github",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "gitopt",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "gitop",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Noteworthy projects and Academical Involvements",
  projects: [
    {
      image: require("./assets/images/fmi.png"),
      projectName: "Fetal MRI classifications",
      projectDesc: "Conducted a comprehensive analysis by comparing ten distinct Convolutional Neural Network (CNN) image classification models trained on MRI images of fetal brains. The objective was to identify the most effective architecture for enhancing medical scanning of the brain.",
      footerLink: [
        {
          name: "Open Project",
          url: "https://github.com/Codsssworth/fetal-mri-classification"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/smi.png"),
      projectName: "Semantic Segmentation over Ariel Images",
      projectDesc: "Employing a segmentation model trained on satellite images to accurately identify various terrain types, enhancing the ability to recognize and analyze diverse landscapes from input images.",
      footerLink: [
        {
          name: "open Project",
          url: "https://github.com/Codsssworth/Semantic-segmentaion-of-ariel-images"
        }
      ]
    },
    {
      image: require("./assets/images/br.png"),
      projectName: "Segmentaion Model for Masking Brain",
      projectDesc: "Developed a binary segmentation model trained on annotated brain images to proficiently recognize and generate masks for the human brain",
      footerLink: [
        {
          name: "Open Project",
          url: "https://github.com/Codsssworth/Binary-Segmentation-of-brain"
        }
      ]
    },
    {
      image: require("./assets/images/sel.webp"),
      projectName: "Selenium Web Automater",
      projectDesc: "Utilizing the Selenium web driver tool to automate and streamline web browser tasks, enhancing efficiency and productivity in online workflows.",
      footerLink: [
        {
          name: "Open Project",
          url: "https://github.com/Codsssworth/Selenium-for-teams"
        }
      ]
    }

  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Accomplishments and Extracurriculars 🌟 "),
  subtitle:
    "Achievements, Certifications and Open Source Engagements !",

  achievementsCards: [
    {
      title: "NCRACIT-2013",
      subtitle:
        "Presented Machine Learning Paper titled 'Fetal Health Classification' at the proceedings of NATIONAL CONFERENCE ON RECENT ADVANCEMENTS and CHALLENGES IN INFORMATION TECHNOLOGY-2023 ",
      image: require("./assets/images/paper.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NoxqtNqIzxmagOViz6I-LvH-v6baX97J/view?usp=drive_link"
        },
        {
          name: "Paper",
          url: "https://presidencyuniversity.in/wp-content/uploads/2023/11/NCRACIT-2023.pdf"
        },
      
      ]
    },
    {
      title: "KWOC",
      subtitle:
        "Contributed to IIT-Kharagpur Winter of Code-2018 and succesfully cleared Priliminary Rounds competeting againsts 30+ teams.",
      image: require("./assets/images/kwoc.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Visit KwoC",
          url: "https://kwoc.kossiitkgp.org/"
        }
      ]
    },

    {
      title: "GirlScript Summer of Code",
      subtitle: "Participated in GirlScript Summer of Code-2019, Learned about Project Mentorship and working with remote teams.",
      image: require("./assets/images/ggsoc.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        
        {
          name: "Visit GGSoc",
          url: "https://gssoc.girlscript.tech/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Connect with me",
  subtitle: "",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
