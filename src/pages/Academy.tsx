import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function Academy() {
  const courses = [
    {
      title: 'ROC-A Certification',
      level: 'Advanced',
      duration: 'In-Person & Online',
      students: 'XXX students',
      description: 'Remotely Piloted Aircraft - Advanced certification with comprehensive in-person flight reviews.',
    },
    {
      title: 'In-Person Flight Review',
      level: 'All Levels',
      duration: 'Scheduled Sessions',
      students: 'XXX students',
      description: 'Hands-on flight training and assessment with experienced instructors to elevate your skills.',
    },
    {
      title: 'Basic Firefighting Training',
      level: 'Professional Development',
      duration: 'XX hours',
      students: 'XXX students',
      description: 'Essential firefighting skills for drone pilots working in emergency response scenarios.',
    },
    {
      title: 'CPR & First Aid',
      level: 'All Levels',
      duration: 'XX hours',
      students: 'XXX students',
      description: 'Critical emergency response training for field operations and safety compliance.',
    },
    {
      title: 'UAS Pilot Certification',
      level: 'Beginner to Advanced',
      duration: 'XX hours',
      students: 'XXX students',
      description: 'Complete online certification program for aspiring commercial drone pilots.',
    },
    {
      title: 'Advanced Flight Techniques',
      level: 'Advanced',
      duration: 'XX hours',
      students: 'XXX students',
      description: 'Master complex maneuvers and challenging flight scenarios with expert instruction.',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6"
          >
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-text-light mb-6">
            Buzz Academy
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
            Comprehensive online training platform for drone pilots, featuring in-person flight reviews 
            and ROC-A certification to elevate the drone industry. We also partner with leading organizations 
            to offer essential training including basic Firefighting, CPR, and other critical skills. 
            From beginner to expert, we provide the complete education you need.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="https://www.buzzacademy.world/" external>
              Visit Academy
            </Button>
            <Button variant="ghost" href="/contact">
              Contact Us
            </Button>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { value: 'XXX', label: 'Students Enrolled' },
            { value: 'XXX', label: 'Expert Courses' },
            { value: 'XXX', label: 'Pass Rate' },
            { value: 'XXX', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </AnimatedSection>

        {/* Popular Courses */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            Popular Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <AnimatedSection key={course.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card-dark border border-border rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-text-light">
                      {course.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <p className="text-muted mb-4">{course.description}</p>
                  <div className="flex items-center gap-6 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {course.students}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Features */}
        <AnimatedSection className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-light text-center mb-8">
            Comprehensive Training Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Online Platform',
                description: 'HD video lessons and interactive content accessible anytime',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'In-Person Reviews',
                description: 'Hands-on flight reviews with expert instructors',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'ROC-A Certification',
                description: 'Advanced certification programs for professional pilots',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
                title: 'Emergency Training',
                description: 'Firefighting, CPR, and other essential safety courses',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 bg-primary/30 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-text-light mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="primary" href="https://www.buzzacademy.world/" external>
              Start Learning Today
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

