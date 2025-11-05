import { motion } from 'framer-motion';
import { Target, Award, Globe, Users, Heart, CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '15+', label: 'Years in Service', icon: Award },
    { value: '5000+', label: 'Happy Families', icon: Users },
    { value: '50+', label: 'Countries Served', icon: Globe },
    { value: '99.8%', label: 'Satisfaction Rate', icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Vision',
      description:
        'To be the most trusted friend and partner for NRI families in India—making every connection back home simple, smooth, and stress-free.',
    },
    {
      icon: Award,
      title: 'Our Mission',
      description:
        'To simplify NRI life with expert, caring support across all services—saving you time, money, and worry through reliable, trustworthy professionals.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        'Serving NRI families across the world with trusted partners in major cities and offices in key locations globally.',
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-indigo-500 mb-6"
            ></motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 tracking-tight"
            >
              About{' '}
              <span className="text-indigo-600 relative">
                Tipping Bridge
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-yellow-400"
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed mb-6"
            >
              We understand what it means to be an NRI. Whether you're managing a home in India while living abroad,
              caring for aging parents, or handling complex documentation, we're here to make your life easier.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-slate-600 leading-relaxed mb-6"
            >
              With over 15 years of experience serving NRI families, we've built deep relationships with trusted partners,
              government officials, and professionals across India. We know the challenges you face, and we're experts at solving them.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-slate-600 leading-relaxed mb-8"
            >
              Our goal is simple: to help you feel connected to India without the stress and worry. We handle the details
              so you can focus on what truly matters—your family.
            </motion.p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              {[
                '24/7 Dedicated Support',
                'Verified & Trusted Partners',
                'Transparent Pricing',
                'Quick Response Times',
              ].map((point) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-indigo-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 border-2 border-indigo-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="space-y-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="flex items-start gap-4"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 bg-white rounded-2xl shadow-lg flex-shrink-0 border border-indigo-100"
                >
                  <Icon size={32} className="text-indigo-600" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t-2 border-b-2 border-indigo-200 py-12"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <Icon size={24} className="text-indigo-600" />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl font-bold text-indigo-600 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-slate-600 font-semibold">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
