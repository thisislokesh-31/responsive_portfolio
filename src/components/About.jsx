import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cocoa/30 border-y border-muted-gold/10 film-grain relative">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-marathon text-4xl md:text-5xl text-muted-gold mb-10 tracking-wide">About Me</h2>
        
        <div className="space-y-8 font-light">
          <p className="text-cream/90 text-xl leading-relaxed">
            I am a <span className="text-muted-gold font-normal">Data Scientist</span> and software engineer driven by the power of raw data. I specialize in architecting intelligent systems, training machine learning models, and transforming complex datasets into actionable, beautiful insights.
          </p>
          <p className="text-cream/70 text-lg leading-relaxed">
            My technical foundation is built on Python, SQL, and modern JavaScript, allowing me to not only design complex algorithms but also deploy them into full-stack web applications. Whether it's predictive modeling, exploratory data analysis, or computer vision, I thrive on solving high-impact problems.
          </p>
          <p className="text-cream/70 text-lg leading-relaxed mb-12">
            Currently an aspiring data professional, I am seeking opportunities to collaborate with elite engineering teams, push the boundaries of AI, and build the next generation of data-driven solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left border-t border-muted-gold/20 pt-10">
          {[
            { title: "Languages", items: ["Python", "Java Basics", "JavaScript", "HTML", "CSS", "NumPy", "Pandas"] },
            { title: "Frameworks", items: ["React", "Node.js"] },
            { title: "Tools", items: ["Tableau", "Power BI", "Google Collab"] },
            { title: "Concepts", items: ["OOP", "DBMS", "Data Structures"] }
          ].map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
            >
              <h4 className="font-marathon text-rust text-3xl mb-3">{cat.title}</h4>
              <ul className="text-cream/60 space-y-2 text-sm tracking-wide">
                {cat.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
