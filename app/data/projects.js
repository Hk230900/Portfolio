// Data structure for personal and academic projects (excluding job products).
const projects = [
  {
    slug: 'mom-platform',
    title: 'MOM (Minutes of Meeting) Platform',
    category: 'Personal Project',
    short: 'A secure, multi-tenant enterprise logbook designed to record agendas, generate discussion minutes, and automate action items.',
    description:
      'Developed a secure, multi-tenant enterprise logbook enabling team members to log discussions, track action items, and link follow-up sessions. Designed a custom backend task scheduler using database row locks (select_for_update) to prevent duplicate notification runs under heavy concurrency, coupled with web push alerts via VAPID-certified Service Workers. Supported stateless JWT auth with rotation policies and an optimistic UI update layer to ensure responsive task management.',
    tech: ['Next.js', 'React', 'Django REST', 'PostgreSQL', 'Web Push API', 'Service Workers', 'SimpleJWT'],
    liveLink: 'https://mom-frontend-nine.vercel.app/login',
    features: [
      'Single-database application-level tenant isolation',
      'Real-time browser notifications using VAPID and Service Workers',
      'Transactional atomic locks to handle concurrent cron dispatches without race conditions',
      'Custom JWT request interceptors for token refresh rotation',
      'Optimistic state updates for instant action-item checking',
      'Markdown MOM summary copy utility'
    ]
  },
  {
    slug: 'doorstep-services',
    title: 'Door-Step Technical Services Website',
    category: 'Academic Project (for NS Computer Hub)',
    short: 'A full-stack client booking and hardware repair ticketing portal for local hardware engineers.',
    description:
      'Engineered a complete service request management portal allowing clients to book technicians online. Developed custom backend routing in Java, managed transaction statements through JDBC, and modeled tables using MySQL. Delivered the application on a strict timeline, handling comprehensive debugging and functional testing.',
    tech: ['Java', 'JDBC', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Bootstrap'],
    features: [
      'Customer service booking registration forms',
      'Admin request dispatch management panel',
      'Relational database design for technicians, bookings, and customer profiles',
      'JDBC-driven statement execution and transactional queries'
    ]
  }
];

export default projects;
