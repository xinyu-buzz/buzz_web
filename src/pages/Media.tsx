import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

export default function Media() {
  const articles = [
    {
      source: 'Drones World',
      volume: 'Volume 06, Issue 11',
      title: 'The First Fully Integrated Drone Workforce Platform',
      description: 'An in-depth interview exploring how Buzz is revolutionizing the drone industry with a flexible, military-inspired workforce model that prioritizes both pilots and customers.',
      date: 'January 2026',
      fullArticle: true,
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-text-light mb-6">
            Media & Press
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Stay updated with the latest news and articles about Buzz.
          </p>
        </AnimatedSection>

        {/* Featured Article */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-8">
            Featured Article
          </h2>
          {articles.map((article, index) => (
            <AnimatedSection key={article.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card-dark border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-accent">
                        {article.source}
                      </span>
                      <span className="text-xs text-muted">{article.volume}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-light mb-3">
                      {article.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-4">
                      {article.description}
                    </p>
                    <div className="text-sm text-muted">
                      Published: {article.date}
                    </div>
                  </div>
                </div>
                
                {/* Article Content Preview */}
                <div className="bg-background-dark/50 rounded-xl p-6 space-y-4 text-muted leading-relaxed">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-text-light mb-3">
                      What makes Buzz the "first fully integrated" drone workforce platform?
                    </h4>
                    <p>
                      Let's take a moment to reflect on what it was like before Airbnb and Uber transformed their respective industries. Finding a place to stay or hailing a taxi required a tedious search on Google with countless questions swirling in your mind: Is the driver safe? How much will the ride cost? Do they even have a valid driving license? Are they available right now? The uncertainty was overwhelming...
                    </p>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <p className="text-sm italic text-muted">
                      Read the full interview to learn about Buzz's innovative workforce model, safety management system, military-inspired ranking system, veteran support programs, flight games and racing events, accessible training approach, and international expansion plans.
                    </p>
                  </div>
                  
                  <details className="mt-6">
                    <summary className="cursor-pointer text-primary font-semibold hover:text-accent transition-colors">
                      Read Full Article
                    </summary>
                    <div className="mt-6 space-y-6 text-sm">
                      <section>
                        <h5 className="font-bold text-text-light mb-2">What makes Buzz the "first fully integrated" drone workforce platform?</h5>
                        <p className="mb-4">
                          Let's take a moment to reflect on what it was like before Airbnb and Uber transformed their respective industries. Finding a place to stay or hailing a taxi required a tedious search on Google with countless questions swirling in your mind: Is the driver safe? How much will the ride cost? Do they even have a valid driving license? Are they available right now? The uncertainty was overwhelming. In a similar vein, companies needing a drone pilot face the same significant challenges, including hefty fines for hiring unlicensed operators. Many pilots also struggle to find work, relying on potential customers to discover them through web searches. As the number of jobs and pilots increases, ensuring security for customers while providing consistent opportunities for pilots to build viable careers in the drone industry becomes increasingly crucial.
                        </p>
                        <p className="mb-4">
                          As someone who navigated the search for pilots myself in 2020, I found it challenging and exhausting. Once I located pilots and interviewed them, I had to consider how we would manage their development and skill enhancement, as well as track their recurrent qualifications, which is required every 24 months. Ultimately, it became more practical for me to qualify as a pilot myself and develop an unmanned aircraft systems training program as part of our onboarding process. This initiative ensured that our standards were consistently met, but we outgrew it quickly, which is why Buzz was born.
                        </p>
                        <p className="mb-4">
                          The culture around work has changed dramatically since aviation first took flight in the U.S. in 1903 and the Air Commerce Act passed in 1926. Today's workforce doesn't want to endure 40-80-hour weeks in rigid roles; they seek flexibility and choice in how they spend their time and earn money. While there's no disrespect to Amazon, its massive scale often prioritizes operational efficiency and customers over workforce well-being.
                        </p>
                        <p className="mb-4">
                          At Buzz, we believe pilots shouldn't be tied to 40-plus hours a week with a single company simply delivering packages. Once a pilot completes the required Amazon training through our app and earns their Amazon badge, they seamlessly enter the workforce, empowered to accept or decline Amazon gigs as they see fit. For example, if Tom, Peter, and Paul are all ranked as lieutenants with the same training and experience, why should Amazon care who shows up for an 8-hour shift? With our Buzz model, Tom can work for Amazon on Monday, Peter on Tuesday, and Paul on Wednesday, allowing each pilot the flexibility to pursue other opportunities, such as inspections for T-Mobile or shark-watching—thereby avoiding burnout and monotony.
                        </p>
                        <p className="mb-4">
                          This flexible model not only caters to Amazon, which may require 2,000 pilots per month, but also serves companies like T-Mobile and independent customers who may not be familiar with aviation regulations. For instance, it enables a realtor to hire a drone pilot to film a house or a parent looking for a drone art show for their son's Star Wars-themed birthday party. As the demand for pilots increases, our system ensures that every pilot on our app is licensed, insured, and qualified for their roles. Entry-level positions start at a minimum of $25 per hour as an Ensign, with the potential for higher pay as pilots advance through the ranks, reaching a minimum of $65 per hour for the rank of Captain. Pilots are managed by Buzz, alleviating companies and individual customers of the burdens of in-house training and oversight, allowing them to scale their operations efficiently.
                        </p>
                        <p className="mb-4">
                          Buzz's model also applies to companies like Zipline and others that rely on a drone pilot workforce. At Buzz, we are not the competition; we are the solution. By providing a flexible, scalable system for managing qualified pilots, we enhance operational efficiency across the industry, allowing companies to focus on their core missions while we handle the logistics of pilot management through our app.
                        </p>
                        <p className="mb-4">
                          Sure, some workforce companies may decline, similar to what happened with traditional taxi services. However, just as taxi drivers migrated to Uber, pilots will gravitate toward the structured, supportive environment at Buzz, which frees them from the burdens of job searching. With outdated employment models, leaving a job is not taken lightly due to the uncertainty of finding another position, along with the need to compile a resume, apply for new roles, and attend interviews. At Buzz, pilots can build their profiles and careers on the app without this cumbersome bureaucracy. If they find themselves bored with one type of assignment, they can easily explore opportunities in different sectors to keep their workweek engaging without sacrificing financial stability. This flexibility, combined with better pay, will help the industry thrive. By ensuring compliance and providing the necessary tools for success, we protect both the industry and the communities we serve.
                        </p>
                        <p>
                          At Buzz, we prioritize the needs of both pilots and customers equally, a commitment that is reflected in every aspect of our app. We are not just reshaping the landscape of the drone industry; we are setting new standards and paving the way for a more efficient, inclusive future.
                        </p>
                      </section>

                      <section>
                        <h5 className="font-bold text-text-light mb-2">How does your safety management system help advance regulations like Part 108?</h5>
                        <p>
                          Our robust safety management system aligns with the core values we uphold and is specifically designed to enhance airspace management and ensure real-time regulatory compliance, which is vital for advancing legislation like Part 108 (BVLS). By implementing best practices in safety and operational protocols, we equip pilots with the necessary tools to operate safely and confidently. This commitment not only helps the U.S. maintain its leadership position in the drone sector, but also ensures that every operation adheres to the highest safety standards, fostering trust and accountability throughout the industry.
                        </p>
                      </section>

                      <section>
                        <h5 className="font-bold text-text-light mb-2">Why did you choose a military-inspired ranking system for pilots?</h5>
                        <p className="mb-4">
                          Drone pilots are true professionals and should be recognized as such; their appearance and conduct are crucial in establishing that respect. Just as manned pilots present themselves in polished uniforms to instill confidence in their passengers, drone pilots must adopt a similar approach to be taken seriously in their communities, reinforcing the paramount importance of safety.
                        </p>
                        <p className="mb-4">
                          Unfortunately, a misconception persists that drone pilots differ from their manned counterparts, yet they are equally skilled at operating sophisticated aircraft. While some drones may appear small and harmless, without a structured workforce, communities may feel uneasy about the rapid growth of drone operations. Buzz seeks to change this perception by our implementation of a ranking system in which pilots wear flight suits that display their ranks, embodying professionalism and earning respect through their exemplary work. We are dedicated to nurturing and advancing drone pilots through structured training and rank progression, enhancing their earning potential and ultimately strengthening the entire industry.
                        </p>
                        <p>
                          Similar to military personnel and manned pilots, all pilots must complete emergency training receiving certifications in CPR and basic firefighting, underscoring our commitment to safety and professionalism. This training not only enhances their skills, but also allows pilots to earn higher hourly wages and join our Beacon program within the app. In this role, pilots become essential workers on the front lines during disasters, working in coordination with leadership to deliver medical and food supplies, warm blankets and clothing to those affected by natural disasters or emergencies within their communities.
                        </p>
                        <p>
                          Once pilots reach the rank of Captain, the exceptional among them can aspire to join TopGun—an elite group of the best pilots, reserved for extraordinary high-level gigs such as security details or drone art displays at prestigious events like the Olympics or World Cup.
                        </p>
                      </section>

                      <section>
                        <h5 className="font-bold text-text-light mb-2">How does partnering with organizations like Hire Heroes benefit veterans?</h5>
                        <p>
                          As a former military member, I understand the challenges of transitioning to civilian life— feeling lost, missing the structured camaraderie, and navigating new uncertainties. This can be a stressful experience, not only for those who have faced combat, but for many who have served. By partnering with organizations like Hire Heroes and others, we can provide veterans with valuable career opportunities in the drone industry. These collaborations ensure that veterans have access to the training and resources necessary to successfully transition into a high-demand workforce. By fostering a supportive community and connecting veterans with quality job opportunities, we honor their service and empower them to build fulfilling careers in a rapidly growing field with significant earning potential. At Buzz, we recognize that veterans bring unmatched skills and dedication to the workforce, and we are fully committed to their success.
                        </p>
                      </section>

                      <section>
                        <h5 className="font-bold text-text-light mb-2">What role do the flight games and global racing events play in your overall strategy?</h5>
                        <p>
                          Flight games and global racing events are not just vital to our strategy; they are a gateway for engaging and inspiring the next generation of drone pilots. Instead of pouring resources into traditional marketing, we proudly sponsor top-quality pilots to join our Buzz team, allowing them to represent us internationally and showcase the exceptional skills they apply in their daily commercial operations. These flight simulations enhance real-life flying capabilities in realistic environments, providing essential practice that pilots need to excel. Moreover, these exhilarating competitions serve as a platform for skill development and camaraderie, offering a unique opportunity for pilots who might not otherwise have the means to travel due to their economic backgrounds. By fostering friendly rivalry and teamwork, we create a dynamic environment where pilots can showcase their talents and broaden their horizons. Ultimately, it helps elevate the entire industry, providing opportunities for all pilots to soar to new heights.
                        </p>
                      </section>

                      <section>
                        <h5 className="font-bold text-text-light mb-2">How do you ensure training remains accessible while still being sustainable?</h5>
                        <p className="mb-4">
                          I wish more organizations would recognize that training not only enhances talent, but also bolsters the workforce. If they did, they would invest in people the way we do. By offering free UAS courses, we prepare candidates for essential FAA and Transport Canada exams while equipping them with the skills necessary to thrive in the workforce. Our commitment ensures that anyone interested in becoming a pilot can succeed without facing financial barriers.
                        </p>
                        <p className="mb-4">
                          We do charge for flight reviews and radio operator exams, as these require one-on-one interactions with a flight reviewer in person and a remote radio operator examiner via Zoom. While these services are cost-effective, they are essential for maintaining high standards across the workforce.
                        </p>
                        <p>
                          They ensure that pilots possess the necessary flight skills for success, as well as the communication knowledge required to interact with air traffic control. This includes the legal requirement for pilots to be certified as a Radio Operator – Aeronautical (ROC-A) to use a radio for communicating with the tower or emergency services during flights. We offer a subscription model through the app for ongoing education tailored to pilots in various fields such as real estate, automotive, film, agriculture, inspections, surveillance, search and rescue, and drone journalism. At just USD$9.99 per month, this affordable option allows pilots to continuously enhance their skills while supporting the program's financial sustainability. Ultimately, my goal is to provide all training free of charge, and we hope to achieve this in the future. The more qualified Buzz pilots are, the better it is for the entire industry.
                        </p>
                      </section>

                      <section>
                        <h5 className="font-bold text-text-light mb-2">What's the biggest challenge in rolling out your model internationally?</h5>
                        <p>
                          The biggest challenge in rolling out our model internationally lies in navigating the diverse regulatory landscapes and cultural contexts of different countries. Each nation has its specific aviation laws governing drone operations, which requires us to adapt our training, compliance, and operational strategies accordingly. However, we view this challenge as an opportunity to tailor our offerings to meet local needs while sharing best practices. Our commitment to innovation and safety will guide our expansion, ensuring that we maintain high standards and foster safe, effective drone operations worldwide.
                        </p>
                      </section>
                    </div>
                  </details>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </AnimatedSection>

        {/* Contact for Media */}
        <AnimatedSection className="mt-20 text-center">
          <div className="bg-card-dark border border-border rounded-2xl p-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-light mb-4">
              Media Inquiries
            </h2>
            <p className="text-muted mb-6">
              For press inquiries, interview requests, or media partnerships, please contact us.
            </p>
            <a
              href="mailto:hello@buzzbuzzin.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Media Team
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
