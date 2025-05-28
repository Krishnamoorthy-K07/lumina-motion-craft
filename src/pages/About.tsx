
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm Krishnamoorthy K, a passionate Technology Analyst at Infosys with over 3 years of experience 
              in backend development and cloud technologies. I specialize in Java Spring Boot microservices, 
              having successfully migrated legacy systems and built scalable solutions for enterprise clients.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              My journey began with a B.E. in Mechanical Engineering, but my passion for technology led me to 
              transition into software development. At Infosys, I've led the migration of a 60-year-old C++ 
              system to 15+ Java Spring Boot microservices, achieving 95% test coverage and implementing 
              modern DevOps practices with Docker, Kubernetes, and AWS.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I'm particularly excited about AI integration in backend systems, having recently worked with 
              OpenAI APIs and Spring AI for building intelligent applications. When I'm not coding, I'm 
              exploring new technologies, contributing to open-source projects, and sharing knowledge with 
              the developer community.
            </motion.p>
          </div>
          
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">3+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">15+</h3>
              <p className="text-gray-300">Microservices Built</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">4+</h3>
              <p className="text-gray-300">Infosys Certifications</p>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Technology Analyst</h3>
                <p className="text-blue-400 mb-4">Infosys | Nov 2023 – Present | Tech Stack: Java 11, Spring Boot 3.1, Docker, Kubernetes, Jenkins, Elasticsearch, AWS</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Migrated a 60-year-old C++ subnet management system to Java, refactoring 200k+ lines into 15+ domain-specific Spring Boot microservices</li>
                  <li>• Designed REST APIs with Spring Security for RBAC, boosting modularity & scalability by 40%</li>
                  <li>• Wrote 300+ unit/integration tests using JUnit & Mockito, reaching 95% coverage and cutting production defects by 30%</li>
                  <li>• Automated testing via Jenkins CI/CD, with regression testing and streamlined deployments</li>
                  <li>• Dockerized and deployed services via Kubernetes, reducing release time by 50%</li>
                  <li>• Centralized logs using Elasticsearch, cutting incident resolution time by 25%</li>
                  <li>• Aligned system design with AWS EC2/S3 for cloud migration</li>
                  <li>• Led Agile Scrum for a 6-member team, resolved 15+ Fortify security issues ensuring OWASP compliance</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Systems Engineer</h3>
                <p className="text-blue-400 mb-4">Infosys | Feb 2022 – Nov 2023 | Tech Stack: Java 8, Spring Boot 2.7, Groovy, XSLT, PostgreSQL</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Built a Groovy/XSLT mediator tool to automate API workflows, reducing manual mapping by 70%</li>
                  <li>• Engineered microservices for PostgreSQL data access, reducing query latency from 500ms to 200ms</li>
                  <li>• Built 15+ Spring Boot APIs and documented with OpenAPI/Swagger, halving integration time</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Systems Engineer Trainee</h3>
                <p className="text-blue-400 mb-2">Infosys | Nov 2021 – Feb 2022</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Completed a 3-month Java/Spring Boot training program with a Dockerized capstone project</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Education</h3>
              <div>
                <h4 className="text-lg font-semibold text-white">B.E. Mechanical Engineering</h4>
                <p className="text-blue-400">Government College of Engineering – Tirunelveli</p>
                <p className="text-gray-300">CGPA: 7.81 | 2017 – 2021</p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Certifications</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Infosys Certified AWS Developer Associate</li>
                <li>• Infosys Certified Spring Microservices Professional</li>
                <li>• Infosys Certified React Professional</li>
                <li>• Infosys Certified Java Programmer</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
