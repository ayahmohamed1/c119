import { motion } from 'framer-motion'
import styles from './LetterPage.module.css'

export default function LetterPage({ back, content }) {
  const l = content.letter
  const lines = l.message.split('\n')

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.dashedTop} />

        <motion.div
          className={styles.letter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {lines.map((line, i) =>
            line.trim() === '' ? (
              <div key={i} className={styles.spacer} />
            ) : (
              <motion.p
                key={i}
                className={styles.line}
                dir="auto" /* 👈 ضفنا الدايركشن هنا عشان سطور الجواب */
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.04 }}
              >
                {line}
              </motion.p>
            )
          )}

         <motion.div
  className={styles.signoff}
  dir="auto" /* 👈 ضفنا الـ dir هنا عشان يخلي الـ div كله ياخد اتجاه المحتوى */
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
>
  <p>{l.signoff}</p>
  <p className={styles.signature}>{l.signature}</p>
</motion.div>
        </motion.div>

        <div className={styles.dashedBottom} />

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* 👈 وهنا عشان عنوان الصفحة */}
          <h2 className={styles.title} dir="auto">{l.title}</h2>
          <button className="btn-return" onClick={back}>{l.returnButton}</button>
        </motion.div>
      </div>
    </div>
  )
}