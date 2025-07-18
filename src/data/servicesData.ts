import { Monitor, Megaphone, Users, Headphones, BarChart3, TrendingUp } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface ServiceData {
  id: string
  slug: string
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  extendedDescription: string
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  caseStudy?: {
    title: string
    description: string
    results: string[]
  }
  pricing?: {
    starter: string
    professional: string
    enterprise: string
  }
}

export const servicesData: ServiceData[] = [
  {
    id: '1',
    slug: 'it-services',
    title: 'IT Services',
    description: 'Comprehensive technology solutions designed to modernize your infrastructure and enhance operational efficiency.',
    features: [
      'Cloud Infrastructure Management',
      'Cybersecurity & Data Protection',
      'Custom Software Development',
      'System Integration & Migration',
      '24/7 Technical Support',
      'Disaster Recovery Planning'
    ],
    icon: Monitor,
    extendedDescription: 'Our IT Services division provides comprehensive technology solutions that modernize your infrastructure and enhance operational efficiency. We specialize in cloud migration, cybersecurity implementation, and custom software development to help businesses stay competitive in the digital age.',
    benefits: [
      'Reduced operational costs by up to 40%',
      'Enhanced security and data protection',
      'Improved system reliability and uptime',
      'Scalable solutions that grow with your business',
      'Expert 24/7 technical support',
      'Compliance with industry standards'
    ],
    process: [
      {
        title: 'Infrastructure Assessment',
        description: 'Comprehensive evaluation of your current IT infrastructure and identification of optimization opportunities.'
      },
      {
        title: 'Solution Design',
        description: 'Custom technology roadmap development aligned with your business objectives and growth plans.'
      },
      {
        title: 'Implementation & Migration',
        description: 'Seamless deployment of new systems with minimal disruption to your daily operations.'
      },
      {
        title: 'Ongoing Support',
        description: 'Continuous monitoring, maintenance, and support to ensure optimal performance.'
      }
    ],
    caseStudy: {
      title: 'Manufacturing Company Digital Transformation',
      description: 'Helped a mid-size manufacturing company migrate to cloud infrastructure and implement IoT solutions.',
      results: [
        '45% reduction in IT operational costs',
        '99.9% system uptime achievement',
        '60% faster data processing and reporting',
        'Improved compliance with industry regulations'
      ]
    }
  },
  {
    id: '2',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that drive engagement, increase brand visibility, and generate qualified leads.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Advertising',
      'Social Media Management',
      'Content Marketing Strategy',
      'Email Marketing Campaigns',
      'Analytics & Performance Tracking'
    ],
    icon: Megaphone,
    extendedDescription: 'Our Digital Marketing team crafts data-driven strategies that amplify your brand presence across all digital channels. From SEO optimization to social media management, we help businesses connect with their target audience and drive measurable growth.',
    benefits: [
      'Increased online visibility and brand awareness',
      'Higher quality lead generation',
      'Improved conversion rates and ROI',
      'Enhanced customer engagement',
      'Comprehensive analytics and reporting',
      'Multi-channel marketing coordination'
    ],
    process: [
      {
        title: 'Market Research & Analysis',
        description: 'In-depth analysis of your market, competitors, and target audience to identify opportunities.'
      },
      {
        title: 'Strategy Development',
        description: 'Creation of comprehensive digital marketing strategy tailored to your business goals.'
      },
      {
        title: 'Campaign Execution',
        description: 'Implementation of multi-channel campaigns with continuous optimization for best results.'
      },
      {
        title: 'Performance Monitoring',
        description: 'Regular tracking, analysis, and reporting of campaign performance with actionable insights.'
      }
    ],
    caseStudy: {
      title: 'E-commerce Brand Growth Campaign',
      description: 'Executed comprehensive digital marketing strategy for an emerging e-commerce brand.',
      results: [
        '300% increase in organic traffic',
        '250% improvement in conversion rate',
        '400% growth in social media engagement',
        '$2M+ in additional revenue generated'
      ]
    }
  },
  {
    id: '3',
    slug: 'hr-recruitment',
    title: 'HR & Recruitment',
    description: 'Professional human resource solutions to help you attract, retain, and develop top talent for your organization.',
    features: [
      'Executive Search & Recruitment',
      'Talent Acquisition Strategy',
      'HR Policy Development',
      'Employee Training Programs',
      'Performance Management Systems',
      'Compensation & Benefits Consulting'
    ],
    icon: Users,
    extendedDescription: 'Our HR & Recruitment services provide comprehensive human capital solutions that help organizations build high-performing teams. We specialize in executive search, talent development, and HR strategy consulting to drive organizational success.',
    benefits: [
      'Access to top-tier talent pool',
      'Reduced time-to-hire by 50%',
      'Improved employee retention rates',
      'Enhanced organizational culture',
      'Compliance with employment regulations',
      'Strategic HR planning and development'
    ],
    process: [
      {
        title: 'Needs Assessment',
        description: 'Understanding your organizational structure, culture, and specific talent requirements.'
      },
      {
        title: 'Talent Sourcing',
        description: 'Leveraging our extensive network and advanced sourcing techniques to identify candidates.'
      },
      {
        title: 'Screening & Selection',
        description: 'Comprehensive evaluation process including interviews, assessments, and background checks.'
      },
      {
        title: 'Onboarding Support',
        description: 'Assistance with integration and ongoing talent development programs.'
      }
    ],
    caseStudy: {
      title: 'Tech Startup Team Building',
      description: 'Helped a fast-growing tech startup build their leadership team and scale their workforce.',
      results: [
        'Filled 15 key positions in 3 months',
        '95% candidate satisfaction rate',
        '85% retention rate after 12 months',
        'Reduced recruitment costs by 30%'
      ]
    }
  },
  {
    id: '4',
    slug: 'customer-support',
    title: 'Customer Support',
    description: 'World-class customer service solutions that enhance customer satisfaction and build lasting relationships.',
    features: [
      '24/7 Multi-channel Support',
      'Live Chat & Phone Support',
      'Help Desk Management',
      'Customer Success Programs',
      'Quality Assurance & Training',
      'CRM Integration & Management'
    ],
    icon: Headphones,
    extendedDescription: 'Our Customer Support solutions deliver exceptional service experiences that build lasting customer relationships. We provide comprehensive support infrastructure, from 24/7 helpdesk operations to customer success programs that drive retention and growth.',
    benefits: [
      'Improved customer satisfaction scores',
      'Reduced response and resolution times',
      'Increased customer retention rates',
      'Enhanced brand reputation',
      'Scalable support operations',
      'Comprehensive analytics and insights'
    ],
    process: [
      {
        title: 'Support Strategy Design',
        description: 'Development of customer support strategy aligned with your business objectives and customer needs.'
      },
      {
        title: 'Team Training & Setup',
        description: 'Comprehensive training of support teams and implementation of support infrastructure.'
      },
      {
        title: 'Multi-channel Deployment',
        description: 'Launch of integrated support channels including phone, chat, email, and social media.'
      },
      {
        title: 'Continuous Optimization',
        description: 'Regular performance monitoring and optimization to ensure exceptional service delivery.'
      }
    ],
    caseStudy: {
      title: 'SaaS Platform Support Transformation',
      description: 'Transformed customer support operations for a growing SaaS platform.',
      results: [
        '40% improvement in customer satisfaction',
        '60% reduction in average response time',
        '25% increase in customer retention',
        '50% reduction in support ticket escalations'
      ]
    }
  },
  {
    id: '5',
    slug: 'business-process-automation',
    title: 'Business Process Automation',
    description: 'Intelligent automation solutions that streamline operations, reduce costs, and improve productivity.',
    features: [
      'Workflow Automation Design',
      'Process Optimization Analysis',
      'RPA Implementation',
      'Data Integration Solutions',
      'Performance Monitoring',
      'ROI Measurement & Reporting'
    ],
    icon: BarChart3,
    extendedDescription: 'Our Business Process Automation services leverage cutting-edge technology to streamline your operations and eliminate manual inefficiencies. We design and implement intelligent automation solutions that reduce costs, improve accuracy, and free up your team to focus on strategic initiatives.',
    benefits: [
      'Up to 80% reduction in manual processing time',
      'Improved accuracy and reduced errors',
      'Enhanced operational efficiency',
      'Better resource allocation',
      'Scalable automation solutions',
      'Detailed process analytics and insights'
    ],
    process: [
      {
        title: 'Process Analysis',
        description: 'Comprehensive evaluation of current business processes to identify automation opportunities.'
      },
      {
        title: 'Automation Design',
        description: 'Development of custom automation workflows tailored to your specific business requirements.'
      },
      {
        title: 'Implementation & Testing',
        description: 'Careful deployment of automation solutions with thorough testing and validation.'
      },
      {
        title: 'Monitoring & Optimization',
        description: 'Continuous monitoring and refinement to ensure optimal performance and ROI.'
      }
    ],
    caseStudy: {
      title: 'Financial Services Automation',
      description: 'Implemented comprehensive process automation for a financial services firm.',
      results: [
        '75% reduction in document processing time',
        '90% improvement in data accuracy',
        '$500K annual cost savings',
        '50% faster customer onboarding'
      ]
    }
  },
  {
    id: '6',
    slug: 'sentiment-marketing',
    title: 'Sentiment Marketing',
    description: 'Data-driven marketing strategies based on real-time customer sentiment analysis and market insights.',
    features: [
      'Sentiment Analysis & Monitoring',
      'Brand Reputation Management',
      'Consumer Behavior Insights',
      'Market Research & Analysis',
      'Crisis Communication Management',
      'Competitive Intelligence'
    ],
    icon: TrendingUp,
    extendedDescription: 'Our Sentiment Marketing approach combines advanced analytics with strategic marketing to help brands understand and respond to customer emotions in real-time. We monitor social sentiment, analyze consumer behavior, and develop marketing strategies that resonate with your audience.',
    benefits: [
      'Real-time brand perception insights',
      'Improved customer relationship management',
      'Proactive crisis management',
      'Enhanced marketing campaign effectiveness',
      'Competitive advantage through market intelligence',
      'Data-driven decision making'
    ],
    process: [
      {
        title: 'Sentiment Monitoring Setup',
        description: 'Implementation of comprehensive sentiment tracking across digital channels and platforms.'
      },
      {
        title: 'Data Analysis & Insights',
        description: 'Advanced analytics to extract actionable insights from sentiment data and market trends.'
      },
      {
        title: 'Strategy Development',
        description: 'Creation of sentiment-driven marketing strategies and communication plans.'
      },
      {
        title: 'Campaign Optimization',
        description: 'Continuous refinement of marketing efforts based on real-time sentiment feedback.'
      }
    ],
    caseStudy: {
      title: 'Consumer Brand Reputation Recovery',
      description: 'Helped a consumer brand recover from negative sentiment and rebuild market trust.',
      results: [
        '65% improvement in brand sentiment',
        '40% increase in positive mentions',
        '30% growth in customer loyalty scores',
        'Successful crisis communication management'
      ]
    }
  }
]

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug)
}

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map(service => service.slug)
}