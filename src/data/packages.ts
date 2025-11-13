import { Package } from '../types';

export const packages: Package[] = [
  {
    name: 'Essentials',
    idealFor: 'Compliance-only needs',
    monthlyPrice: 417,
    annualPrice: 5000,
    features: [
      'Quarterly BAS & lodgement',
      'Annual tax returns',
      'Basic tax advice',
      'Email support',
      'Compliance calendar'
    ]
  },
  {
    name: 'Foundation',
    idealFor: '$500K-$1M turnover',
    monthlyPrice: 1000,
    annualPrice: 12000,
    features: [
      'Everything in Essentials',
      'Monthly bookkeeping',
      'Cashflow reports',
      'Quarterly check-ins',
      'Phone support'
    ]
  },
  {
    name: 'Growth',
    idealFor: '$1M-$2M turnover',
    monthlyPrice: 1250,
    annualPrice: 15000,
    popular: true,
    features: [
      'Everything in Foundation',
      'Fortnightly cashflow',
      'Monthly insights reports',
      'Bi-annual tax planning',
      'Payroll optimization',
      'Priority support'
    ]
  },
  {
    name: 'Scale',
    idealFor: '$2M-$3M+ turnover',
    monthlyPrice: 1667,
    annualPrice: 20000,
    features: [
      'Everything in Growth',
      'Weekly oversight',
      'Monthly consultancy',
      'Custom dashboards',
      'Direct Principal access',
      'After-hours support'
    ]
  }
];
