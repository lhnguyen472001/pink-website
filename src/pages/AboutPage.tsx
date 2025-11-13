import { Mail, Award, Target, Heart, Shield, TrendingUp } from 'lucide-react';
import { principalTeam, supportTeam } from '../data/team';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Award,
      title: 'Quality Over Everything',
      description: 'We don\'t cut corners. Every piece of work reflects our commitment to excellence.'
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'You shouldn\'t have to wait weeks to talk to your accountant. We\'re here when you need us.'
    },
    {
      icon: Heart,
      title: 'Dedication',
      description: 'Your success is our success. We\'re invested in your growth journey, not just processing transactions.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clear communication, honest advice, and no surprise fees. You always know where you stand.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'We\'re always learning, adapting, and finding better ways to serve our clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your Financial Partners
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2020 during the challenging COVID-19 period, Pink Accounting & Tax Solutions was born from a mission to help South-East Queensland business owners navigate uncertainty and emerge stronger.
            </p>
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
              <p className="text-gray-700 font-semibold mb-2">Our Promise</p>
              <p className="text-gray-700">
                Quality work, accessible service, and dedicated partnership at every stage of your growth journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed mb-4">
                  What started as supporting businesses through crisis has evolved into a specialised practice helping growth-focused service-based companies scale with confidence. We now focus on partnering with businesses ready to invest in strategic financial management.
                </p>
                <p className="leading-relaxed">
                  Under the leadership of Pinky Bui, qualified accountant and official member of the Institute of Public Accountants, our practice combines technical excellence with real-world business acumen.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-slate-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Client Retention</div>
              <p className="text-gray-600 text-sm">Since 2020</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">15+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Years Experience</div>
              <p className="text-gray-600 text-sm">Principal Accountant</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">100s</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Businesses Served</div>
              <p className="text-gray-600 text-sm">Across SEQ</p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Principal Team
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {principalTeam.map((member, index) => (
                <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-3xl">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                      {member.name}
                    </h3>
                    <p className="text-pink-600 font-semibold text-center mb-4">
                      {member.role}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-pink-600 transition-colors mb-6"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                    {member.credentials && member.credentials.length > 0 && (
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Credentials:</p>
                        <ul className="space-y-1">
                          {member.credentials.map((credential, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="text-pink-500 mt-0.5">•</span>
                              <span>{credential}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {member.bio && (
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-sm text-gray-600 leading-relaxed italic">
                          "{member.bio}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Extended Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportTeam.map((member, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-pink-300 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-pink-600 font-bold text-xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-pink-600 font-semibold text-center mb-3">
                    {member.role}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-xs text-gray-600 hover:text-pink-600 transition-colors mb-3"
                  >
                    <Mail className="w-3 h-3" />
                    {member.email}
                  </a>
                  {member.bio && (
                    <p className="text-xs text-gray-600 text-center leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              The Pink Accounting Difference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Hybrid Team Power</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Australian professionals + offshore specialists for premium, cost-effective service.
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Service Business Specialists</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We understand the unique challenges of time-based revenue and project cashflow cycles.
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">SEQ Focused</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Local expertise with deep understanding of the Queensland business landscape.
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Always Accessible</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Business hours, Saturday appointments, online after-hours—no more waiting for answers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Experience the Pink Accounting difference. Let's discuss how we can support your business growth.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
