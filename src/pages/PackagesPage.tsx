import { Check, X } from 'lucide-react';
import { packages } from '../data/packages';

interface PackagesPageProps {
  onNavigate: (page: string) => void;
}

export default function PackagesPage({ onNavigate }: PackagesPageProps) {
  const packageDetails = [
    {
      name: 'Essentials',
      description: 'For businesses seeking compliance-focused support',
      perfectFor: 'Businesses with in-house bookkeeping who need tax compliance only',
      features: {
        'Quarterly BAS preparation and lodgement': true,
        'Annual tax return preparation': true,
        'Basic tax planning advice': true,
        'Email support during business hours': true,
        'Annual compliance calendar': true,
        'Monthly bookkeeping and reconciliation': false,
        'Cashflow monitoring and reporting': false,
        'Quarterly financial health check-ins': false,
        'Phone support': false,
        'Fortnightly cashflow management': false,
        'Monthly management reporting': false,
        'Strategic tax planning sessions': false,
        'Payroll optimisation': false,
        'Priority support': false,
        'Weekly cashflow oversight': false,
        'Monthly strategic consultancy': false,
        'Custom dashboards': false,
        'Direct Principal access': false,
        'After-hours support': false
      }
    },
    {
      name: 'Foundation',
      description: 'For businesses $500K-$1M turnover',
      perfectFor: 'Growing businesses ready to outsource bookkeeping and gain financial clarity',
      features: {
        'Quarterly BAS preparation and lodgement': true,
        'Annual tax return preparation': true,
        'Basic tax planning advice': true,
        'Email support during business hours': true,
        'Annual compliance calendar': true,
        'Monthly bookkeeping and reconciliation': true,
        'Cashflow monitoring and reporting': true,
        'Quarterly financial health check-ins': true,
        'Phone support': true,
        'Fortnightly cashflow management': false,
        'Monthly management reporting': false,
        'Strategic tax planning sessions': false,
        'Payroll optimisation': false,
        'Priority support': false,
        'Weekly cashflow oversight': false,
        'Monthly strategic consultancy': false,
        'Custom dashboards': false,
        'Direct Principal access': false,
        'After-hours support': false
      }
    },
    {
      name: 'Growth',
      description: 'For businesses $1M-$2M turnover',
      perfectFor: 'Established businesses scaling operations and needing proactive financial partnership',
      features: {
        'Quarterly BAS preparation and lodgement': true,
        'Annual tax return preparation': true,
        'Basic tax planning advice': true,
        'Email support during business hours': true,
        'Annual compliance calendar': true,
        'Monthly bookkeeping and reconciliation': true,
        'Cashflow monitoring and reporting': true,
        'Quarterly financial health check-ins': true,
        'Phone support': true,
        'Fortnightly cashflow management': true,
        'Monthly management reporting': true,
        'Strategic tax planning sessions': true,
        'Payroll optimisation': true,
        'Priority support': true,
        'Weekly cashflow oversight': false,
        'Monthly strategic consultancy': false,
        'Custom dashboards': false,
        'Direct Principal access': false,
        'After-hours support': false
      }
    },
    {
      name: 'Scale',
      description: 'For businesses $2M-$3M+ turnover',
      perfectFor: 'Ambitious businesses requiring comprehensive financial partnership and strategic guidance',
      features: {
        'Quarterly BAS preparation and lodgement': true,
        'Annual tax return preparation': true,
        'Basic tax planning advice': true,
        'Email support during business hours': true,
        'Annual compliance calendar': true,
        'Monthly bookkeeping and reconciliation': true,
        'Cashflow monitoring and reporting': true,
        'Quarterly financial health check-ins': true,
        'Phone support': true,
        'Fortnightly cashflow management': true,
        'Monthly management reporting': true,
        'Strategic tax planning sessions': true,
        'Payroll optimisation': true,
        'Priority support': true,
        'Weekly cashflow oversight': true,
        'Monthly strategic consultancy': true,
        'Custom dashboards': true,
        'Direct Principal access': true,
        'After-hours support': true
      }
    }
  ];

  const allFeatures = [
    'Quarterly BAS preparation and lodgement',
    'Annual tax return preparation',
    'Basic tax planning advice',
    'Email support during business hours',
    'Annual compliance calendar',
    'Monthly bookkeeping and reconciliation',
    'Cashflow monitoring and reporting',
    'Quarterly financial health check-ins',
    'Phone support',
    'Fortnightly cashflow management',
    'Monthly management reporting',
    'Strategic tax planning sessions',
    'Payroll optimisation',
    'Priority support',
    'Weekly cashflow oversight',
    'Monthly strategic consultancy',
    'Custom dashboards',
    'Direct Principal access',
    'After-hours support'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Service Packages Designed for Every Stage of Growth
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Flexible monthly pricing that scales with your business. All packages available as monthly investments with no long-term contracts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg border-2 ${
                  pkg.popular ? 'border-pink-500 relative ring-2 ring-pink-200' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-600 mb-6 h-10">{pkg.idealFor}</p>
                  <div className="mb-8">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-gray-900">
                        ${pkg.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-600 ml-2">+ GST</span>
                    </div>
                    <p className="text-sm text-gray-500">per month</p>
                    <p className="text-xs text-gray-400 mt-1">
                      ${pkg.annualPrice.toLocaleString()} + GST annually
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-pink-600 text-white hover:bg-pink-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 min-w-[300px]">
                      Features
                    </th>
                    {packageDetails.map((pkg, index) => (
                      <th key={index} className="px-6 py-4 text-center min-w-[140px]">
                        <div className="text-lg font-bold text-gray-900">{pkg.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{pkg.description}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allFeatures.map((feature, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">{feature}</td>
                      {packageDetails.map((pkg, pkgIndex) => (
                        <td key={pkgIndex} className="px-6 py-4 text-center">
                          {pkg.features[feature as keyof typeof pkg.features] ? (
                            <div className="flex justify-center">
                              <Check className="w-5 h-5 text-green-500" />
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <X className="w-5 h-5 text-gray-300" />
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packageDetails.map((pkg, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Perfect for:</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{pkg.perfectFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Flexible Payment Options
          </h2>
          <div className="bg-slate-50 p-8 rounded-xl border-2 border-gray-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                All packages are available as monthly investments, making budgeting easier and demonstrating our commitment to ongoing value. You're investing in a monthly partnership, not paying for a year upfront.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Need something different? We understand every business has unique needs. Contact us to discuss unbundled services tailored to your specific requirements, including:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Bookkeeping only (from $750 + GST per month)</li>
                <li>Cashflow management (from $500 + GST per month)</li>
                <li>Tax compliance only (from $417 + GST per month)</li>
                <li>Custom combinations designed for your business</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Package Is Right for You?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Schedule a complimentary consultation to discuss your business needs and get our recommendation.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
