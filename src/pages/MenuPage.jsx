import { motion } from 'framer-motion'
import styles from './MenuPage.module.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}
const itemV = {
  hidden:  { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1,   y: 0, transition: { type: 'spring', stiffness: 160, damping: 16 } }
}

export default function MenuPage({ go, back, content }) {
  const m = content.menu

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>{m.title}</h1>
          <p className={styles.subtitle}>{m.subtitle}</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {m.items.map((item, index) => (
            <motion.button
              key={item.id}
              className={`${styles.gridItem} ${item.id === 'letter' || index === 2 ? styles.centerItem : ''}`}
              variants={itemV}
              whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(27,42,74,0.18)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => go(item.id)}
            >
              <span className={styles.gridIcon}>{item.icon}</span>
              <span className={styles.gridLabel}>{item.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <button className={styles.returnBtn} onClick={back}>RETURN</button>
        </motion.div>
      </div>
    </div>
  )
}
