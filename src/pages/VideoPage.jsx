import { motion } from 'framer-motion'
import styles from './VideoPage.module.css'

export default function VideoPage({ back, content }) {
  const v = content.video

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.dashedTop} />

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.videoWrapper}>
            <video
              src={v.videoSrc}
              controls
              playsInline
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <p className={styles.caption}>{v.caption}</p>
        </motion.div>

        <div className={styles.dashedBottom} />

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className={styles.title}>{v.title}</h2>
          <button className="btn-return" onClick={back}>{v.returnButton}</button>
        </motion.div>
      </div>
    </div>
  )
}