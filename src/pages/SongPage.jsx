import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './SongPage.module.css'

function formatTime(sec) {
  if (isNaN(sec) || sec < 0) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s < 10 ? '0' : ''}${s}`
}

export default function SongPage({ back, content }) {
  const s = content.song
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const coverImage = s.coverImage || '/images/placeholder-1.jpg'

  // تهيئة الصوت وتشغيله
  useEffect(() => {
    if (!s.audioSrc) return
    const audio = new Audio(s.audioSrc)
    audioRef.current = audio
    audio.volume = volume

    const onLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const onEnded = () => {
      setPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)

    // تشغيل تلقائي
    audio.play().then(() => setPlaying(true)).catch(() => {})

    return () => {
      audio.pause()
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
      audio.src = ''
    }
  }, [s.audioSrc])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  const handleSeek = (e) => {
    const newProgress = parseFloat(e.target.value)
    if (audioRef.current && duration) {
      const newTime = (newProgress / 100) * duration
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const skip = (seconds) => {
    if (!audioRef.current) return
    const nextTime = Math.max(0, Math.min(duration || 0, audioRef.current.currentTime + seconds))
    audioRef.current.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  const handleVolume = (e) => {
    const v = parseFloat(e.target.value)
    setVolume(v)
    if (audioRef.current) {
      audioRef.current.volume = v
    }
  }

  const progressPercent = duration ? (currentTime / duration) * 100 : 0
  const remainingTime = duration ? duration - currentTime : 0

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        
        {/* مشغل الموسيقى بتصميم الكارت مع الأسطوانة الخلفية */}
        <div className={styles.cardContainer}>
          {/* الأسطوانة الخلفية البارزة بتلف وقت التشغيل */}
          <motion.div
            className={styles.vinylPeeking}
            animate={{ rotate: playing ? 360 : 0 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <div className={styles.vinylGrooves}>
              <div className={styles.vinylCenterLabel}>
                <span className={styles.vinylStar}>✦</span>
              </div>
            </div>
          </motion.div>

          {/* الكارت الأبيض الرئيسي */}
          <motion.div 
            className={styles.playerCard}
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {/* مكان الصورة المخصص - يتم تحديدها من الكود فقط */}
            <div className={styles.coverBox}>
              <img
                src={coverImage}
                alt={s.songTitle || 'Song Cover'}
                className={styles.coverImg}
              />
            </div>

            {/* تفاصيل الأغنية */}
            <div className={styles.songDetails}>
              <h2 className={styles.songTitle}>{s.songTitle || 'Our Song'}</h2>
              <p className={styles.artistName}>{s.artist || 'every word for you'}</p>
            </div>

            {/* شريط التقدم والوقت */}
            <div className={styles.timelineSection}>
              <div className={styles.progressBarWrapper}>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progressPercent || 0}
                  onChange={handleSeek}
                  className={styles.progressBar}
                  style={{
                    background: `linear-gradient(to right, var(--primary) ${progressPercent}%, #e2ebf6 ${progressPercent}%)`
                  }}
                />
              </div>

              <div className={styles.timeRow}>
                <span>{formatTime(currentTime)}</span>
                <span>-{formatTime(remainingTime)}</span>
              </div>
            </div>

            {/* أزرار التحكم بالتشغيل */}
            <div className={styles.controlsRow}>
              {/* ترجيع 10 ثواني */}
              <button
                type="button"
                className={styles.secondaryBtn}
                onClick={() => skip(-10)}
                aria-label="Skip backward"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 6L2 12l9 6V6zm11 0l-9 6 9 6V6z"/>
                </svg>
              </button>

              {/* زر التشغيل / الإيقاف المؤقت الدائري */}
              <motion.button
                type="button"
                className={styles.playButton}
                onClick={togglePlay}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                aria-label={playing ? 'Pause' : 'Play'}
              >
                {playing ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '3px' }}>
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </motion.button>

              {/* تقديم 10 ثواني */}
              <button
                type="button"
                className={styles.secondaryBtn}
                onClick={() => skip(10)}
                aria-label="Skip forward"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 6l9 6-9 6V6zM2 6l9 6-9 6V6z"/>
                </svg>
              </button>
            </div>

            {/* شريط التحكم بالصوت */}
            <div className={styles.volumeRow}>
              <svg className={styles.volIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 9v6h4l5 5V4L11 9H7z"/>
              </svg>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolume}
                className={styles.volumeBar}
                style={{
                  background: `linear-gradient(to right, var(--primary) ${volume * 100}%, #e2ebf6 ${volume * 100}%)`
                }}
              />

              <svg className={styles.volIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* زر الرجوع للمنيو */}
        <motion.div
          className={styles.returnWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button className={styles.returnBtn} onClick={back}>
            {s.returnButton || 'RETURN'}
          </button>
        </motion.div>

      </div>
    </div>
  )
}