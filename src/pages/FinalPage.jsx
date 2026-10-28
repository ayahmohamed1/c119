import { motion } from 'framer-motion';

const FinalPage = ({ config, onRestart }) => {
  const { finale } = config;

  return (
    <motion.section
      key="finale"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center bg-cream overflow-hidden"
    >
      <div className="relative w-full max-w-[360px] sm:max-w-[480px] aspect-[5/4] mx-auto mb-8 z-10 mt-8">
        
        {/* عنصر ديكوري بديل للوردة أعلى اليمين */}
        <div className="absolute top-[-5%] right-[10%] w-16 h-16 rounded-full bg-balloon/40 blur-sm pointer-events-none z-0" />

        {/* عنصر ديكوري بديل للوردة أسفل اليسار */}
        <div className="absolute bottom-[-10%] left-[5%] w-20 h-20 rounded-full bg-balloon/50 blur-sm pointer-events-none z-30" />

        {/* الصورة الأولى */}
        {finale.images[0] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15, x: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -5, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute top-[5%] left-[8%] w-[55%] aspect-[4/5] p-1 sm:p-1.5 bg-white rounded-sm shadow-[0_10px_25px_rgba(27,42,74,0.25)] border-2 border-navy/20 z-10 overflow-hidden"
          >
            <img
              src={finale.images[0].src}
              alt={finale.images[0].alt || 'Memory 1'}
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>
        )}

        {/* الصورة الثانية */}
        {finale.images[1] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 15, x: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 7, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-[25%] right-[2%] w-[48%] aspect-[4/5] p-1 sm:p-1.5 bg-white rounded-sm shadow-[0_15px_30px_rgba(27,42,74,0.3)] border-2 border-navy/20 z-20 overflow-hidden"
          >
            <img
              src={finale.images[1].src}
              alt={finale.images[1].alt || 'Memory 2'}
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>
        )}
      </div>

      {/* العنوان */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-20 mt-4"
      >
        <p className="font-serif text-2xl sm:text-3xl text-navy tracking-wide mb-0">
          {finale.heading || 'Happy'}
        </p>
        <h1 className="font-script text-6xl sm:text-7xl text-navy leading-tight -mt-4">
          {finale.headingScript || 'Birthday'}
        </h1>
      </motion.div>

      {/* زر الانتقال للمنيو */}
      {onRestart && (
        <button
          type="button"
          onClick={onRestart}
          className="mt-8 underline underline-offset-4 font-serif text-navy/70 hover:text-navy transition-colors focus-visible:outline-none z-20 text-sm sm:text-base cursor-pointer"
        >
          {finale.restartLabel || 'Next'}
        </button>
      )}
    </motion.section>
  );
};

export default FinalPage;