import React from 'react';
import { motion } from 'framer-motion';

const facultyList = [
  {
    id: 1,
    name: "Dr. Vipin Kale",
    image: "/faculty/vipin-kale.jpg",
    subjects: ["Introduction to Programming", "Data Structures and Algorithms"],
    interests: "Wireless Networks, Internet of Things (IoT), IoT Security, Fog Security, Edge Security, Blockchain Technology."
  },
  {
    id: 2,
    name: "Dr. Hrithik Ramaswamy",
    image: "/faculty/hrithik-ramaswamy.jpg",
    subjects: ["Artificial Intelligence", "Machine Learning"],
    interests: "Computational Neuroscience, Machine Learning, Artificial Intelligence, Neuro-Imaging."
  },
  {
    id: 3,
    name: "Dr. Manas Johal",
    image: "/faculty/manas-johal.jpg",
    subjects: ["Engineering Clinics", "Software Engineering"],
    interests: "Algorithms, Graph Theory."
  },
  {
    id: 4,
    name: "Dr. Upasana Sachdeva",
    image: "/faculty/upasana-sachdeva.jpg",
    subjects: ["Discrete Maths", "Graph Theory"],
    interests: "Quasilinear Partial Differential Equations; Nonlinear Waves; Classical and Nonclassical Shock Waves; Dispersive Shock Waves; Undercompressive Shock Waves"
  },
  {
    id: 5,
    name: "Dr. Bhavana Talwar",
    image: "/faculty/bhavana-talwar.jpg",
    subjects: ["Ethics and Values", "Professional Ethics"],
    interests: "English Literature, Medical/Health Humanities, Narrative Medicine, Art Therapy."
  },
  {
    id: 6,
    name: "Dr. Sarvesh Prasad",
    image: "/faculty/sarvesh-prasad.jpg",
    subjects: ["Numerical Ability", "Quantitative Methods"],
    interests: "Nonlinear Partial differential equations"
  },
  {
    id: 7,
    name: "Dr. Sergio Marquina",
    image: "/faculty/sergio-marquina.jpg",
    subjects: ["Cognitive Intelligence", "Optimization Techniques"],
    interests: "Cyber Security Systems, Malware Vulnerability Assessment, Machine Learning for Security, Deep Learning for Security."
  }
];

const Faculty = () => {
  return (
    <div className="ml-[200px] p-8 min-h-screen bg-[#1a1a1a]">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#6dc9d0] mb-8 text-center"
      >
        Our Faculty
      </motion.h1>

      {/* Faculty Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyList.map((faculty, index) => (
          <motion.div 
            key={faculty.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Faculty Image */}
            <div className="mb-4 relative">
              <div className="aspect-square w-full overflow-hidden rounded-lg border-2 border-[#6dc9d0]">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200x200?text=Faculty';
                  }}
                />
              </div>
            </div>
            
            {/* Faculty Info */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-[#6dc9d0]">{faculty.name}</h2>
              
              <div>
                <h3 className="text-gray-400 font-medium mb-1">Subjects Taught:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {faculty.subjects.map((subject, i) => (
                    <li key={i}>{subject}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-gray-400 font-medium mb-1">Areas of Interest:</h3>
                <p className="text-gray-300">{faculty.interests}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
