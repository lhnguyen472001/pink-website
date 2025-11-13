import { CheckCircle, TrendingUp, Clock, Users, Award } from 'lucide-react';
import { packages } from '../data/packages';
import { testimonials } from '../data/testimonials';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const benefits = [
    {
      icon: Clock,
      title: 'Reclaim Your Time',
      description: 'Outsource bookkeeping chaos to our experts, focus on scaling while we handle the details.'
    },
    {
      icon: TrendingUp,
      title: 'Master Cashflow',
      description: 'Real-time forecasts and optimisation ensure steady profitability, avoiding common pitfalls that sink 80% of growing firms.'
    },
    {
      icon: Users,
      title: 'Build Scalable Systems',
      description: 'Custom infrastructure for $500K-$3M+ growth, from Xero setups to KPI dashboards.'
    },
    {
      icon: CheckCircle,
      title: 'Tax-Optimised Compliance',
      description: 'Stay compliant whilst minimising tax liability. Our registered tax agents ensure you\'re taking advantage of every legitimate opportunity.'
    }
  ];

  const differentiators = [
    {
      stat: '98%',
      label: 'Client Retention Since 2020',
      description: 'Our clients stay because we deliver exceptional quality, accessibility, and genuine dedication to their success.'
    },
    {
      stat: '15+',
      label: 'Years of Financial Expertise',
      description: 'Led by Pinky Bui, a qualified accountant with a Master of Professional Accounting.'
    },
    {
      stat: '24/7',
      label: 'Accessible When You Need Us',
      description: 'Available during business hours, Saturdays by appointment, and accessible online after hours.'
    }
  ];

  const industries = [
    'Professional Services',
    'Trade & Construction',
    'Healthcare & Wellness',
    'Technology & Creative',
    'Business Services'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-pink-600 font-semibold mb-4">Brisbane-Based Excellence</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Local Growth Partner for South-East Queensland Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Brisbane-based accounting firm helping service businesses ready to grow beyond $500K scale with confidence and clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Book Your Strategy Session
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200"
              >
                Explore Our Services
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              We're proud to call Brisbane home and serve businesses from Northgate to Brendale, Sunshine Coast, and the Gold Coast.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-pink-600 mb-2">{item.stat}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{item.label}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Growing Businesses Choose Pink Accounting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help service-based businesses scale with confidence through strategic financial partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Packages Designed for Growth
            </h2>
            <p className="text-xl text-gray-600">
              Flexible monthly pricing that scales with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 ${
                  pkg.popular ? 'border-pink-500 relative' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{pkg.idealFor}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900">
                        ${pkg.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-600 ml-2">+ GST/mo</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      ${pkg.annualPrice.toLocaleString()} + GST annually
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('packages')}
              className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View Full Package Details
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve Best
            </h2>
            <p className="text-xl text-gray-600">
              Specialising in service-based businesses across South-East Queensland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from businesses we've helped grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.business}, {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale with Confidence?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Schedule a complimentary 30-minute strategy session to discuss your business needs and how we can help you grow.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Strategy Session
          </button>
        </div>
      </section>
    </div>
  );
}
