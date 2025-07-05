import { useRef } from "react";
import { Cpu, Maximize, Leaf, ShieldCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: Cpu,
    title: "Smart Technology",
    description: "Every Doda space comes equipped with cutting-edge smart technology that learns your preferences and adapts to you.",
    delay: 100
  },
  {
    icon: Maximize,
    title: "Maximum Flexibility",
    description: "Our spaces can transform from a living room to a bedroom to an office in seconds, giving you more from your square footage.",
    delay: 200
  },
  {
    icon: Leaf,
    title: "Sustainable Living",
    description: "Our modular approach reduces waste and optimizes energy usage, making Doda a leader in sustainable urban living.",
    delay: 300
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    description: "With integrated smart locks and building security, you can rest assured that your space is always safe and secure.",
    delay: 400
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="features" className="py-24 bg-doda-blue relative overflow-hidden" ref={ref}>
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-doda-cyan">Doda</span>
          </h2>
          <p className="text-lg md:text-xl text-doda-gray/90 max-w-3xl mx-auto">
            Discover the features that make Doda the future of urban living and working.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 text-center glass-card border rounded-xl"
              variants={itemVariants}
            >
              <div className="bg-doda-cyan/20 p-3 rounded-xl inline-flex text-doda-cyan mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-doda-gray/80 leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-doda-cyan/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-doda-cyan/5 rounded-full translate-y-1/3 -translate-x-1/3"></div>
    </section>
  );
};

export default Features;
