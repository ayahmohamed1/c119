// src/content.js
const content = {
  music: "/path-to-your-music.mp3",

  menu: {
    title: "pick a gift",
    subtitle: "choose one to open ↓",
    items: [
      { id: "video", icon: "🎬", label: "Our Video" },
      { id: "song", icon: "🎵", label: "our song" },
      { id: "letter", icon: "💌", label: "Love Letter" }
    ]
  },

  song: {
    audioSrc: "/music/music.mp3",
    coverImage: "/images/placeholder-3.jpg", // 👈 تقدري تحطي مسار صورتك هنا (مثلاً /images/your-photo.jpg)
    songTitle: "I dedicate this song to you🤍",
    artist: "I love you",
    title: "our song",
    returnButton: "RETURN"
  },

  // استخدام علامات ` بدل "" يسمح لك بالنزول بالـ Enter مباشرة بدون \n
  letter: {
    title: "a letter",
    message: `كل سنة وانت طيب يا حبيب الروح إن شاء الله تكون سنة حلوة مريحة ومليانة ذكريات حلوة وجميلة تجمعنا مع بعض وتكون أسعد إنسان في الدنيا لأنك تستاهل كل الخير

هذا أول عيد ميلاد لك وأنا معاك وحبيت أكتب كلام طالع من كل قلبي وبكل مشاعر الحب والشوق والفرح والدموع الله يجعل كل سنيني معاك والله لا يغير علينا إلا للأفضل. أبغاك تعرف إنك أغلى ناسي أحبك حب مجنون وغير مشروط ولا محدود 

أحب كل دقيقه معك والأشياء اللي نسويها مع بعض والوقت اللي نقضيه سوى أحب صوتك ودفى صوتك وكل تفصيلة فيك لما نسمع أغانينا مع بعض وأتأمل ضحكاتك وعيونك اللي أذوب فيهم ووقت ما نلعب مع بعض ونضحك ونتابع ووقت ما تكلمني وتحكيني عن يومك وحياتك وعائلتك والأشياء اللي تحبها ووقت ما تنصحني وتعلمني حبيت كل شي تسويه وصرت أسوي كل شي زيك وحبيت كل أطباعك حتى أطباعي صارت مثلك تعلمت منك أشياء كثيرة وابغا اتعلّم منك واسمعلك أكثر وأكثر

أدعي في صلاتي إني أكون الحبيبة والصاحبة والأم اللي تفتخر وترفع راسك فيها وتسند نفسك وتعتمد عليها الله يجعلني مصدر راحتك وفرحك يا أغلى إنسان عندي

لم تكن الحبيب الذي دخل حياتي بل الروح التي غيرت معنى الحياة كلها ولذلك كلما دعوتُ الله دعوتُ لك عمر مديد بقربي لأن الخير الذي أرجوه لي هو وجودك 

كل عام وانت الجهة التي لا أمل الوصول إليها وكل عام وأنا أحمد الله أن جعل بين أيامي يوماً وُلدتَ فيه وجعل بين أقداري قدراً يقودني إليك`,

    returnButton: "RETURN"
  },

  memories: {
    title: "our memories",
    images: [
      { src: "/images/placeholder-3.jpg", label: "" },
      { src: "/images/placeholder-4.jpg", label: "" },
      { src: "/images/placeholder-5.jpg", label: "" },
      { src: "/images/placeholder-6.jpg", label: "" },
      { src: "/images/placeholder-7.jpg", label: "" },
      { src: "/images/placeholder-8.jpg", label: "" },
      { src: "/images/placeholder-9.jpg", label: "" },
      { src: "/images/placeholder-10.jpg", label: "" },
      { src: "/images/placeholder-11.jpg", label: "" },
      { src: "/images/placeholder-12.jpg", label: "" },
    ],
    returnButton: "RETURN"
  },

  video: {
    title: "for you",
    videoSrc: "/videos/video.mp4",
    caption: "a little something I put together",
    returnButton: "RETURN"
  }
};

export default content;