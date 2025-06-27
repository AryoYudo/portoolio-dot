import React from 'react';
import { motion } from 'framer-motion';

const HastagSection = ({ title = "DOT PROJECT" }) => {
  const hashtags = [
    "#AdaptiveLeadership",
    "#StartupVisionary",
    "#InnoMaestro",
    "#TeamAgility",
    "#UsersObsessed",
    "#VelocityDecisionMaking"
  ];

  return (
    <div className='mt-5 mb-5'>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}
        className="text-center mt-3"
      >
        <h2>{title}</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {hashtags.map((tag, index) => (
            <h6 key={index} style={{ color: "#E31F52", opacity: "0.4" }}>
              {tag}
            </h6>
          ))}
        </div>
        <hr style={{ borderTop: '2px solid', margin: '10px 0' }} />
      </motion.div>
    </div>
  );
};

export default HastagSection;
