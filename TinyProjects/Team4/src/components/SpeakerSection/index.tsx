import React from 'react';
import { motion } from 'framer-motion';

/**
 *
 * https://www.framer.com/docs/gestures/#viewport
 * https://www.framer.com/docs/motionvalue/##useviewportscroll
 */
export function SpeakerSection(): React.ReactElement {
  return (
    <motion.section
      style={{ height: 5000 }}
      whileInView={{ backgroundColor: '#eee' }}
      onViewportEnter={(en) => console.log('SpeakerSection viewport enter', en)}
      onViewportLeave={(en) => console.log('SpeakerSection viewport leave', en)}
    />
  );
}
