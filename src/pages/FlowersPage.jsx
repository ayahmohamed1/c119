import { motion } from 'framer-motion'
import styles from './FlowersPage.module.css'

export default function FlowersPage({ back, content }) {
  const f = content.flowers
  const leftPoems  = f.poems.slice(0, 4)
  const rightPoems = f.poems.slice(4, 8)

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.dashedTop} />

        <div className={styles.layout}>
          {/* Left poems */}
          <div className={styles.poemCol}>
            {leftPoems.map((p, i) => (
              <motion.div
                key={i}
                className={styles.poemBox}
                dir="auto" /* 👈 الدايركشن هنا للرسايل اللي على الشمال */
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                {p}
              </motion.div>
            ))}
          </div>

          {/* Center flower */}
          <motion.div
            className={styles.flowerCenter}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.1 }}
          >
            <motion.div
              className={styles.flowerEmoji}
              animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <TulipSVG />
            </motion.div>
            <div className={styles.flowerName} dir="auto">{f.flowerName}</div>
            <div className={styles.flowerSub} dir="auto">{f.flowerSubtitle}</div>
          </motion.div>

          {/* Right poems */}
          <div className={styles.poemCol}>
            {rightPoems.map((p, i) => (
              <motion.div
                key={i}
                className={styles.poemBox}
                dir="auto" /* 👈 الدايركشن هنا للرسايل اللي على اليمين */
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.dashedBottom} />

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* 👈 الدايركشن هنا لعنوان الصفحة */}
          <h2 className={styles.title} dir="auto">{f.title}</h2>
          <button className="btn-return" onClick={back}>{f.returnButton}</button>
        </motion.div>
      </div>
    </div>
  )
}

function TulipSVG() {
  return (
    <svg width="90" height="130" viewBox="0 0 90 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* stem */}
      <path d="M45 130 Q45 90 45 75" stroke="#2d6a2d" strokeWidth="3" strokeLinecap="round"/>
      {/* leaf left */}
      <path d="M45 100 Q30 90 25 78 Q35 82 45 90" fill="#3a7d3a" opacity="0.85"/>
      {/* leaf right */}
      <path d="M45 95 Q60 85 65 73 Q55 77 45 85" fill="#3a7d3a" opacity="0.85"/>
      {/* wrapping */}
      <path d="M30 75 Q35 45 45 30 Q55 45 60 75 Q52 80 45 80 Q38 80 30 75Z"
        fill="#8B1A1A" opacity="0.85"/>
      {/* petals */}
      <path d="M38 70 Q32 50 35 35 Q40 25 45 30 Q42 50 40 70Z" fill="#c0392b" opacity="0.9"/>
      <path d="M52 70 Q58 50 55 35 Q50 25 45 30 Q48 50 50 70Z" fill="#c0392b" opacity="0.9"/>
      <path d="M45 72 Q38 55 40 38 Q45 28 50 38 Q52 55 45 72Z" fill="#e74c3c" opacity="0.9"/>
      {/* spots */}
      <circle cx="43" cy="50" r="2.5" fill="#8B1A1A" opacity="0.4"/>
      <circle cx="48" cy="42" r="2" fill="#8B1A1A" opacity="0.4"/>
      {/* bow ribbon */}
      <path d="M28 78 Q20 72 24 65 Q32 70 30 78Z" fill="#8B1A1A" opacity="0.7"/>
      <path d="M62 78 Q70 72 66 65 Q58 70 60 78Z" fill="#8B1A1A" opacity="0.7"/>
      <ellipse cx="45" cy="79" rx="8" ry="5" fill="#8B1A1A" opacity="0.8"/>
      <ellipse cx="45" cy="79" rx="5" ry="3" fill="#c0392b" opacity="0.6"/>
    </svg>
  )
}