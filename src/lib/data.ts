import { Profile, Skill, Project, Contact, BlogArticle } from '@/types';

export const profileData: Profile = {
  name: 'SAIF ALI',
  title: 'Frontend Developer',
  subtitle: 'Building Modern Web Experiences',
  description: 'I am a passionate frontend developer with expertise in creating responsive, accessible, and performant web applications. I specialize in React, Next.js, and modern CSS frameworks.',
  email: 'khanalisaif0102@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saif-ali-khan-5908b7395',
  github: 'https://github.com/saifali',
  heroImage: '/hero.png'
};

export const skillsData: Skill[] = [
  { id: '1', name: 'HTML5', category: 'Frontend', level: 95 },
  { id: '2', name: 'CSS3', category: 'Frontend', level: 90 },
  { id: '3', name: 'JavaScript', category: 'Frontend', level: 85 },
  { id: '4', name: 'React', category: 'Frontend', level: 80 },
  { id: '5', name: 'Next.js', category: 'Frontend', level: 75 },
  { id: '6', name: 'TypeScript', category: 'Frontend', level: 70 },
  { id: '7', name: 'Tailwind CSS', category: 'Frontend', level: 85 },
  { id: '8', name: 'Node.js', category: 'Backend', level: 60 },
  { id: '9', name: 'Git', category: 'Tools', level: 80 },
  { id: '10', name: 'Responsive Design', category: 'Design', level: 90 }
];

export const projectsData: Project[] = [
  {
    id: '1',
    name: 'Job Application',
    description: 'A complete job application portal with resume upload, application tracking, and user authentication system.',
    image: '/project1.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    category: 'web',
    githubLink: '#',
    demoLink: '#'
  },
  {
    id: '2',
    name: 'Parallax Website',
    description: 'A visually stunning website featuring parallax scrolling effects and smooth animations for an immersive user experience.',
    image: '/project2.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    category: 'web',
    githubLink: '#',
    demoLink: '#'
  },
  {
    id: '3',
    name: 'Landing Page',
    description: 'A modern, conversion-focused landing page with responsive design and call-to-action elements.',
    image: '/project3.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    category: 'uiux',
    githubLink: '#',
    demoLink: '#'
  },
  {
    id: '4',
    name: 'Restaurant Website',
    description: 'A complete restaurant website with menu display, online reservation system, and contact information.',
    image: '/project4.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    category: 'web',
    githubLink: '#',
    demoLink: '#'
  },
  {
    id: '5',
    name: 'Music Website',
    description: 'A music streaming platform interface with playlist management, audio player, and music discovery features.',
    image: '/project5.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
    category: 'web',
    githubLink: '#',
    demoLink: '#'
  },
  {
    id: '6',
    name: 'Documentation Website',
    description: 'A clean and organized documentation site with search functionality, navigation, and code examples.',
    image: '/project6.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Markdown'],
    category: 'web',
    githubLink: '#',
    demoLink: '#'
  },
  {
    id: '7',
    name: 'Blog Website',
    description: 'A fully functional blog platform with post creation, commenting system, and category management.',
    image: '/project7.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    category: 'web',
    githubLink: '#',
    demoLink: '#'
  }
];

export const contactData: Contact = {
  email: 'khanalisaif0102@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saif-ali-khan-5908b7395',
  github: 'https://github.com/saifali'
};

export const blogArticlesData: BlogArticle[] = [
  {
    id: 'css-techniques',
    title: 'Modern CSS Techniques Every Developer Should Know',
    excerpt: 'Explore the latest CSS features including Grid, Flexbox, custom properties, and modern layout techniques.',
    content: `
      <p>CSS has evolved significantly over the years, offering developers powerful tools to create stunning, responsive designs. In this comprehensive guide, we'll explore the most important modern CSS techniques that every frontend developer should master in 2024.</p>
      <h3>CSS Grid Layout</h3>
      <p>CSS Grid is a revolutionary two-dimensional layout system that allows you to create complex layouts with ease. Unlike Flexbox, which is one-dimensional, Grid gives you complete control over both rows and columns simultaneously.</p>
      <h3>Custom Properties (CSS Variables)</h3>
      <p>CSS custom properties allow you to define reusable values throughout your stylesheet. This makes it easier to maintain consistent theming and enables dynamic styling through JavaScript.</p>
      <h3>Container Queries</h3>
      <p>Container queries enable you to style elements based on the size of their parent container rather than the viewport.</p>
    `,
    image: '/blog1.jpg',
    date: 'June 15, 2024',
    category: 'Frontend'
  },
  {
    id: 'js-performance',
    title: 'JavaScript Performance Optimization Tips',
    excerpt: 'Learn essential techniques to optimize your JavaScript code for better performance.',
    content: `
      <p>Performance is crucial for modern web applications. Slow JavaScript can lead to poor user experience and lower search engine rankings.</p>
      <h3>Lazy Loading</h3>
      <p>Lazy loading defers the loading of non-critical resources until they're needed. This significantly improves initial page load time.</p>
      <h3>Code Splitting</h3>
      <p>Split your code into smaller chunks that can be loaded on demand. This is especially effective for single-page applications.</p>
      <h3>Efficient DOM Manipulation</h3>
      <p>Minimize DOM reflows and repaints by batching DOM operations, using document fragments, and avoiding layout thrashing.</p>
    `,
    image: '/blog2.png',
    date: 'June 10, 2024',
    category: 'JavaScript'
  },
  {
    id: 'accessibility',
    title: 'Building Accessible Web Applications',
    excerpt: 'A comprehensive guide to web accessibility covering ARIA labels, keyboard navigation, and semantic HTML.',
    content: `
      <p>Web accessibility ensures that everyone, including people with disabilities, can use your website. It's not just a moral imperative—it's often a legal requirement.</p>
      <h3>ARIA Labels and Roles</h3>
      <p>Accessible Rich Internet Applications (ARIA) attributes help screen readers understand your content when semantic HTML isn't enough.</p>
      <h3>Keyboard Navigation</h3>
      <p>Ensure all interactive elements are accessible via keyboard. This includes proper focus management and visible focus indicators.</p>
      <h3>Semantic HTML</h3>
      <p>Use proper HTML elements for their intended purpose. Semantic HTML provides meaning to your content and improves both accessibility and SEO.</p>
    `,
    image: '/blog3.png',
    date: 'June 5, 2024',
    category: 'Accessibility'
  }
];
