import { useEffect, useState } from 'react';
import githubIcon from './assets/github.png';
import headerImage from './assets/image.png';
import linkedinIcon from './assets/linkedin.png';
import mailIcon from './assets/mail.png';
import resumePdf from './assets/pdf/ceren-akyar-no-info.pdf';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/CerenAkyr',
    icon: githubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ceren-akyar/',
    icon: linkedinIcon,
  },
  {
    label: 'Email',
    href: 'mailto:cerenakyar@gmail.com',
    icon: mailIcon,
  },
];

const showcasedProjects = [
  {
    title: 'Stock Checker',
    titleLines: ['Stock', 'Checker'],
    image: '/gifs/project1.png',
    github: 'https://github.com/CerenAkyr/ZaraStockChecker',
    points: [
      'Checks product availability across shopping websites.',
      'GitHub starstruck open-source project.',
      'Python-based automation.',
    ],
  },
  {
    title: 'Kombin',
    image: '/gifs/project2.png',
    website: 'https://www.kombin.fit/',
    points: [
      'Helps users build looks, organize wardrobe pieces, and get style inspiration.',
      'Launching soon with a very thought out user experience!',
    ],
  },
  {
    title: 'Tarot Reader',
    titleLines: ['Tarot', 'Reader'],
    image: '/gifs/project3.png',
    points: [
      'A Swift-based tarot reading app with a focused mobile experience.',
      'Designed around card selection, reading flow, and a polished mystical interface.',
      'Probably will release in the future because it has a huge wait list! :)',
    ],
  },
];

const academicProjects = [
  {
    title: 'Master Thesis',
    points: [
      'Process mining research on uncertainty in object-centric event logs.',
      'Combines Python hands-on implementation with theoretical approaches.',
      'Explores how uncertainty can be introduced to event logs and analyzed.',
    ],
  },
  {
    title: 'Encoder Only Discriminator',
    github: 'https://github.com/CerenAkyr/encoderOnlyDiscriminator',
    points: [
      'Data-driven global conformance checking with an encoder-only Transformer discriminator.',
      'Used dynamic padding, attention masking, and log / anti-log trace training.',
      'Reproduced controlled, noise-injection, and real-life event log experiments under compute limits.',
    ],
  },
  {
    title: '2048 AI Algorithms',
    github: 'https://github.com/cs461-project/2048',
    points: [
      'Compared Min-Max Tree Search, Monte Carlo Tree Search, and DDQN.',
      'Applied AI strategies to the 2048 game environment.',
      'Selected as the best project in the course.',
    ],
  },
];

const moreProjects = [
  {
    title: 'Capsule',
    image: '/gifs/capsule.gif',
    type: 'Smart wardrobe',
    points: ['Outfit planning', 'Wardrobe organization', 'Mobile product flow'],
  },
  {
    title: 'DataScope',
    image: '/gifs/datascope.gif',
    type: 'No-code ML',
    points: ['Landing page', 'No-code model setup', 'Frontend implementation'],
  },
  {
    title: 'ActionKit',
    image: '/gifs/actionKit.gif',
    type: 'UI library',
    points: ['Avatar component', 'Vue + TypeScript', 'Component testing'],
  },
  {
    title: 'BrewUpp',
    image: '/gifs/brewuppGif.gif',
    type: 'Landing page',
    points: ['Coffee community', 'UI/UX design', 'React frontend'],
  },
  {
    title: 'PharmVille',
    image: '/gifs/pharmville.PNG',
    type: 'Online pharmacy',
    points: ['E-commerce flow', 'Requirements work', 'Frontend development'],
  },
  {
    title: 'RoboCon',
    image: '/gifs/robocon.PNG',
    type: 'Course website',
    points: ['Visual hierarchy', 'Responsive design', 'Client collaboration'],
  },
];

const educationItems = [
  {
    period: 'Oct 2024 - Nov 2026',
    title: 'M.Sc. in Data Science',
    place: 'RWTH Aachen University',
    points: [
      'Thesis on uncertainty in object-centric event logs for process mining.',
      'Seminar on encoder-only discriminator architecture for data-driven global conformance checking.',
      'Course emphasis on machine learning, business process intelligence, and process mining.',
      'Lab work with Celonis.',
    ],
  },
  {
    period: 'Sep 2020 - Jun 2024',
    title: 'B.S. in Computer Engineering',
    place: 'Ihsan Dogramaci Bilkent University',
    points: [
      'Senior project received the Best User Experience Award.',
      'Received the Best Visual Designer Award at CS Fair.',
      'Tutor of CS115, Introduction to Python.',
      'Course emphasis on machine learning, artificial intelligence, and deep generative models.',
    ],
  },
];

const experienceItems = [
  {
    period: 'Nov 2024 - Present',
    title: 'Frontend Developer',
    place: 'Niologic',
    website: 'https://niologic.com/',
  },
  {
    period: 'Nov 2023 - Mar 2024',
    title: 'Frontend Developer',
    place: 'DataScope.ai',
    website: 'https://www.agentscope.ai/',
  },
  {
    period: '2023',
    title: 'Front-end Developer Intern',
    place: 'MobileAction',
    website: 'https://www.mobileaction.co/',
  },
  {
    period: '2023',
    title: 'Software Developer Intern',
    place: 'T2 Software',
    website: 'https://www.t2.com.tr/',
  },
  {
    period: '2023',
    title: 'Front-end Developer',
    place: 'BrewUpp Company',
  },
  {
    period: '2022',
    title: 'R&D Data Science Intern',
    place: 'Arcelik Global',
    website: 'https://www.arcelik.com.tr/',
  },
];

const technicalSkillGroups = [
  {
    title: 'Frameworks',
    skills: ['React', 'Vue', 'Spring Boot', 'React Native', 'Flutter'],
  },
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'C++', 'Java', 'HTML', 'CSS', 'TypeScript', 'Swift'],
  },
];

const clubItems = [
  {
    title: 'Bilkent Tea Club President',
    website: 'https://www.instagram.com/bilkentteaclub/',
    points: [
      'Organizing informative events and events with guest speakers.',
      'Arranging sponsorship agreements.',
      'You can check out our fun events by clicking Visit.',
    ],
  },
  {
    title: 'Ucuncukat Journal Author',
    points: [
      'Writing articles about technology and arts.',
      'Ucuncukat Journal marketing team member.',
    ],
  },
  {
    title: 'Active Member of Operational Research Club',
    website: 'https://www.instagram.com/orbilkent/',
    points: [
      'Information Technology team member.',
      'Arranging sponsorship agreements.',
      'You can check out more by clicking Visit.',
    ],
  },
];

const getToKnowMeItems = [
  'I really enjoy dancing. Currently, my new favorite is salsa. I have taken salsa courses for two years.',
  'I also sew clothes. Right now I am trying to sew some League of Legends character costumes. Let\'s see how it goes (:',
  'I am a huge bookworm. I like reading a lot! :)',
];

function HeaderInfo() {
  return (
    <div className="header-info">
      <p className="eyebrow">THis is me:</p>
      <h1 className="display-heading">
        <span>Ceren</span>
        <span>Akyar</span>
      </h1>
      <div className="title-stack" aria-label="Professional titles">
        <p>Software Engineer</p>
        <p>Data Science Master Student @ RWTH Aachen</p>
      </div>
      <nav className="social-links" aria-label="Social links">
        <a className="resume-button" href={resumePdf}>
          Resume
        </a>
        {socialLinks.map((link) => (
          <a href={link.href} key={link.label} aria-label={link.label}>
            <img src={link.icon} alt="" />
          </a>
        ))}
      </nav>
    </div>
  );
}

function ProjectShowcase() {
  return (
    <div className="project-columns">
      {showcasedProjects.map((project) => (
        <article
          className={`project-column ${project.titleLines ? 'project-column-offset-title' : ''}`}
          key={project.title}
        >
          <div className="project-column-body">
            <div className="project-column-header">
              <h3>
                {project.titleLines
                  ? project.titleLines.map((line) => <span key={line}>{line}</span>)
                  : project.title}
              </h3>
              {project.website ? (
                <a className="project-website-button" href={project.website}>
                  Visit Website
                </a>
              ) : (
                project.github ? <a
                  className="project-github-button"
                  href={project.github}
                  aria-label={`${project.title} GitHub repository`}
                >
                  <img src={githubIcon} alt="" />
                </a> : null
              )}
            </div>
            <img className="project-inline-image" src={project.image} alt="" />
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function AcademicShowcase() {
  return (
    <div className="project-columns academic-columns">
      {academicProjects.map((project) => (
        <article className="project-column academic-card" key={project.title}>
          <div className="project-column-body">
            <div className="project-column-header">
              <h3>{project.title}</h3>
              {project.github && (
                <a
                  className="project-github-button"
                  href={project.github}
                  aria-label={`${project.title} GitHub repository`}
                >
                  <img src={githubIcon} alt="" />
                </a>
              )}
            </div>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function MoreProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const moveCarousel = (direction) => {
    setSlideDirection(direction > 0 ? 'next' : 'previous');
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0) {
        return moreProjects.length - 1;
      }

      if (nextIndex >= moreProjects.length) {
        return 0;
      }

      return nextIndex;
    });

    window.setTimeout(() => {
      setSlideDirection(null);
    }, 430);
  };

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      moveCarousel(1);
    }, 4200);

    return () => window.clearInterval(slideTimer);
  }, []);

  const startDrag = (event) => {
    setDragStart(event.clientX);
    setDragOffset(0);
  };

  const updateDrag = (event) => {
    if (dragStart === null) {
      return;
    }

    const nextOffset = event.clientX - dragStart;
    setDragOffset(Math.max(-90, Math.min(90, nextOffset)));
  };

  const endDrag = () => {
    if (dragStart === null) {
      return;
    }

    if (dragOffset > 45) {
      moveCarousel(-1);
    }

    if (dragOffset < -45) {
      moveCarousel(1);
    }

    setDragStart(null);
    setDragOffset(0);
  };

  const visibleProjects = [-2, -1, 0, 1, 2].map((offset) => {
    const projectIndex = (activeIndex + offset + moreProjects.length) % moreProjects.length;

    return {
      ...moreProjects[projectIndex],
      offset,
    };
  });

  return (
    <div className="more-projects-carousel">
      <div
        className={[
          'carousel-track',
          dragStart !== null ? 'carousel-track-dragging' : '',
          slideDirection === 'next' ? 'carousel-track-slide-next' : '',
          slideDirection === 'previous' ? 'carousel-track-slide-previous' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ '--drag-offset': `${dragOffset}px` }}
        aria-live="polite"
        onPointerDown={startDrag}
        onPointerMove={updateDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        {visibleProjects.map((project) => (
          <article
            className={`mini-project-card ${project.offset === 0 ? 'mini-project-card-active' : ''}`}
            key={`${project.title}-${project.offset}`}
          >
            <img src={project.image} alt="" />
            <div>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="carousel-controls">
        <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous project">
          ‹
        </button>
        <button type="button" onClick={() => moveCarousel(1)} aria-label="Next project">
          ›
        </button>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="content-section about-section" id="about">
      <div className="about-intro">
        <p className="eyebrow">About Me</p>
      </div>

      <div className="about-grid">
        <article className="about-panel about-panel-large">
          <div className="about-panel-heading">
            <span>01</span>
            <h3>Work Experience</h3>
          </div>
          <div className="about-timeline">
            {experienceItems.map((item) => (
              <div className="timeline-item" key={`${item.period}-${item.title}`}>
                <p>{item.period}</p>
                <h4>{item.title}</h4>
                {item.website ? (
                  <a className="timeline-link" href={item.website}>
                    {item.place}
                  </a>
                ) : (
                  <strong>{item.place}</strong>
                )}
              </div>
            ))}
          </div>
        </article>

        <article className="about-panel">
          <div className="about-panel-heading">
            <span>02</span>
            <h3>Education</h3>
          </div>
          <div className="about-stack">
            {educationItems.map((item) => (
              <div className="about-chip-card" key={`${item.period}-${item.title}`}>
                <p>{item.period}</p>
                <h4>{item.title}</h4>
                <span>{item.place}</span>
                {item.points && (
                  <ul className="education-points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </article>

        <article className="about-panel skills-panel">
          <div className="about-panel-heading">
            <span>03</span>
            <h3>Technical Skills</h3>
          </div>
          <div className="skills-groups">
            {technicalSkillGroups.map((group) => (
              <div className="skills-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="skills-cloud">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="about-panel clubs-panel">
          <div className="about-panel-heading">
            <span>04</span>
            <h3>Clubs</h3>
          </div>
          <div className="club-list">
            {clubItems.map((club) => (
              <div className="club-card" key={club.title}>
                <h4>{club.title}</h4>
                <ul>
                  {club.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {club.website && (
                  <a className="club-link" href={club.website}>
                    Visit
                  </a>
                )}
              </div>
            ))}
          </div>
        </article>

        <article className="about-panel about-panel-dark">
          <div className="about-panel-heading">
            <span>05</span>
            <h3>Hobbies</h3>
          </div>
          <ul>
            {getToKnowMeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="app-shell">
      <div className="page-frame">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="nav-brand" href="#home">
            CA
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About Me</a>
            <a href={resumePdf}>Resume</a>
          </div>
        </nav>

        <section className="halftone-bg" id="home">
          <div className="header-page">
            <div className="header-image">
              <img src={headerImage} alt="" />
            </div>
            <HeaderInfo />
          </div>
        </section>

        <section className="content-section" id="projects">
          <p className="eyebrow">Projects</p>
          <h2 className="secondary-heading">My most beloved hobby projects.</h2>
          <ProjectShowcase />

          <h2 className="secondary-heading">Academic research.</h2>
          <AcademicShowcase />

          <h2 className="secondary-heading">Check out more stuff!</h2>
          <MoreProjectsCarousel />

        </section>

        <AboutSection />

        <footer className="site-footer">
          <div>
            <p className="footer-name">Ceren Akyar</p>
            <p className="footer-note">Software Engineer & Data Science Master Student</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About Me</a>
            <a href="mailto:cerenakyar@gmail.com">Email</a>
          </nav>
        </footer>
      </div>
    </main>
  );
}

export default App;
