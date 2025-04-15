export default function StatsSection() {
  const stats = [
    {
      id: 1,
      value: '25+',
      label: 'Years Experience',
      description: 'Over two decades of cybersecurity expertise',
    },
    {
      id: 2,
      value: '1,500+',
      label: 'Clients Protected',
      description: 'Businesses and organizations secured worldwide',
    },
    {
      id: 3,
      value: '99.9%',
      label: 'Protection Rate',
      description: 'Success rate in preventing security breaches',
    },
    {
      id: 4,
      value: '24/7',
      label: 'Monitoring',
      description: 'Round-the-clock surveillance and protection',
    },
  ];

  return (
    <section className="py-20 bg-[#0A1224]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#4318FF]">Trust</span> in Our Numbers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our track record speaks for itself with proven results in
            cybersecurity excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div
              key={stat.id}
              className="bg-background/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-[#4318FF]/40 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-[#4318FF] font-bold mb-3">{stat.label}</div>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Horizontal banner with CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#4318FF]/80 to-[#9f7aea]/80 rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to secure your digital assets?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations that trust Secur for their
            cybersecurity needs
          </p>
          <button className="bg-white text-[#4318FF] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
