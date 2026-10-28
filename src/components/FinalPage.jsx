import { motion } from 'framer-motion';

export default function FinalPage({ config, onRestart }) {
  const finale = config.finale;

  return (
    <motion.section
      key="finale"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-cream overflow-hidden"
    >
      {/* الصورتين المتداخلتين */}
      <div className="relative w-72 h-80 sm:w-96 sm:h-[400px] flex items-center justify-center mb-6">
        {finale.images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0, rotate: index === 0 ? -6 : 6 }}
            animate={{ scale: 1, opacity: 1, rotate: index === 0 ? -4 : 4 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`absolute w-56 sm:w-72 bg-white p-3 pb-8 shadow-2xl rounded-sm ${
              index === 0 ? '-translate-x-6 -rotate-6 z-10' : 'translate-x-6 rotate-6 z-20'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 sm:h-60 object-cover rounded-sm"
            />
          </motion.div>
        ))}
      </div>

      {/* العنوان وزرار التالي/القراءة */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="z-30 mt-4"
      >
        <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
          {finale.heading}{' '}
          <span className="font-script text-wax text-4xl sm:text-5xl">{finale.headingScript}</span>
        </h2>

        <button
          onClick={onRestart}
          className="text-navy/70 hover:text-navy font-serif italic text-sm sm:text-base underline underline-offset-4 cursor-pointer transition-colors focus-visible:outline-none"
        >
          {finale.restartLabel || 'Next'}
        </button>
      </motion.div>
    </motion.section>
  );
}