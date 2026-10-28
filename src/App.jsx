import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import clientConfig from './data/clientConfig.js' 
import content from "./content.js"

import EnvelopeCover from './components/EnvelopeCover.jsx'
import EnvelopeOpen from './components/EnvelopeOpen.jsx'
import FinalPage from './pages/FinalPage.jsx' // 👈 استدعاء الملف الخارجي
import MenuPage from './pages/MenuPage.jsx'
import MemoriesPage from './pages/MemoriesPage.jsx'
import SongPage from './pages/SongPage.jsx'
import VideoPage from './pages/VideoPage.jsx'
import LetterPage from './pages/LetterPage.jsx'

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
  transition: { duration: 0.35 },
}

export default function App() {
  const [page, setPage] = useState('cover')
  const go = (p) => setPage(p)

  return (
    <div className="w-full min-h-screen bg-cream">
      <AnimatePresence mode="wait">
        <motion.div key={page} {...fade} className="w-full min-h-screen">

          {/* 1. الظرف المغلق */}
          {page === 'cover' && (
            <EnvelopeCover
              config={clientConfig}
              onOpen={() => go('envelopeOpen')} 
            />
          )}

          {/* 2. الظرف المفتوح والبالونات */}
          {page === 'envelopeOpen' && (
            <EnvelopeOpen
              config={clientConfig}
              onContinue={() => go('photos')} 
            />
          )}

          {/* 3. صفحة الصورتين (FinalPage) */}
          {page === 'photos' && (
            <FinalPage
              config={clientConfig}
              onRestart={() => go('menu')} // يوديك للمنيو لما تدوس Next
            />
          )}

          {/* 4. صفحة المنيو */}
          {page === 'menu' && (
            <MenuPage
              go={go}
              back={() => go('photos')} 
              content={content}
            />
          )}

          {/* الهدايا الفرعية */}
          {page === 'memories' && (
  <MemoriesPage back={() => go('menu')} config={clientConfig} content={content} />
)}

          {page === 'song' && (
            <SongPage back={() => go('menu')} content={content} />
          )}

          {page === 'video' && (
            <VideoPage back={() => go('menu')} content={content} />
          )}

          {page === 'letter' && (
            <LetterPage back={() => go('menu')} content={content} />
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  )
}