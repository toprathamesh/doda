import { motion } from "framer-motion";
import Logo from "./Logo";

const Preloader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-doda-black z-[100]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={itemVariants}>
        <Logo size="large" />
      </motion.div>
      <motion.div
        className="mt-4 text-lg text-doda-gray"
        variants={itemVariants}
      >
        The future of flexible urban living is loading...
      </motion.div>
    </motion.div>
  );
};

export default Preloader; 