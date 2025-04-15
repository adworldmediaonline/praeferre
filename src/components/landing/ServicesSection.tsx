// import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: '/icons/lightbulb.svg',
      title: 'Cybersecurity Consulting',
      description:
        "Our expert consultants assess your organization's security posture, identify vulnerabilities, and develop tailored.",
      color: 'bg-[#051431]',
      iconColor: 'text-[#00C875]',
      link: '/services/consulting',
      isActive: false,
    },
    {
      id: 2,
      icon: '/icons/radar.svg',
      title: 'Threat Detection and Response',
      description:
        'Our advanced threat detection systems monitor your network 24/7 and more facility, our identifying and responding.',
      color: 'bg-[#4B7BF5]',
      iconColor: 'text-white',
      link: '/services/threat-detection',
      isActive: true,
    },
    {
      id: 3,
      icon: '/icons/hacker.svg',
      title: 'Vulnerability Assessment',
      description:
        'We simulate real-world attacks to uncover vulnerabilities in your systems, applications, and networks. Our team.',
      color: 'bg-[#051431]',
      iconColor: 'text-[#FFCB00]',
      link: '/services/vulnerability-assessment',
      isActive: false,
    },
    {
      id: 4,
      icon: '/icons/incident.svg',
      title: 'Incident Response and Recovery',
      description:
        'When a security incident occurs, our rapid response expert team springs into action, containing the breach.',
      color: 'bg-[#051431]',
      iconColor: 'text-[#FF4D8D]',
      link: '/services/incident-response',
      isActive: false,
    },
    {
      id: 5,
      icon: '/icons/lightbulb-idea.svg',
      title: 'Security Awareness Training',
      description:
        'We empower your employees with the knowledge and skills to recognize and prevent cyber threats, more expert.',
      color: 'bg-[#051431]',
      iconColor: 'text-[#A259FF]',
      link: '/services/security-training',
      isActive: false,
    },
    {
      id: 6,
      icon: '/icons/cloud-shield.svg',
      title: 'Data Security Services',
      description:
        "Data security services protect your organization's sensitive data from unauthorized access, use, disclosure, disruption.",
      color: 'bg-[#051431]',
      iconColor: 'text-[#4B7BF5]',
      link: '/services/data-security',
      isActive: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#010817]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-[#4B7BF5] font-semibold mb-3">
            Our Top-Notch Services
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Comprehensive Cybersecurity Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div
              key={service.id}
              className={cn(
                'rounded-3xl p-8 relative overflow-hidden group',
                service.isActive ? 'bg-[#4B7BF5]' : 'bg-[#051431]'
              )}
            >
              {/* Background glow effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 bg-white"></div>

              {/* Icon */}
              <div className={`w-16 h-16 ${service.iconColor} mb-6`}>
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="16"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                  <g transform="translate(16, 16)">
                    {service.id === 1 && (
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {service.id === 2 && (
                      <>
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.24 7.76001L14.12 14.12L7.76001 16.24L9.88001 9.88001L16.24 7.76001Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}
                    {service.id === 3 && (
                      <>
                        <path
                          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 21V19C6 15.6863 8.68629 13 12 13C15.3137 13 18 15.6863 18 19V21"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}
                    {service.id === 4 && (
                      <>
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16H12.01"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}
                    {service.id === 5 && (
                      <>
                        <path
                          d="M9.00001 18C9.00001 16.3431 10.3431 15 12 15C13.6569 15 15 16.3431 15 18"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12V11C14 11 15 10 15 8C15 6 14 5 12 5C10 5 9.00001 6.5 9.00001 8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 10.01L5.01 9.99889"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 10.01L19.01 9.99889"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}
                    {service.id === 6 && (
                      <>
                        <path
                          d="M16 13V8.8C16 7.11984 16 6.27976 15.673 5.63803C15.3854 5.07354 14.9265 4.6146 14.362 4.32698C13.7202 4 12.8802 4 11.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20H12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 17C22 19.2091 20.2091 21 18 21C15.7909 21 14 19.2091 14 17C14 14.7909 15.7909 13 18 13C20.2091 13 22 14.7909 22 17Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 17C21 18.6569 19.6569 20 18 20C16.3431 20 15 18.6569 15 17C15 15.3431 16.3431 14 18 14C19.6569 14 21 15.3431 21 17Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 8H12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}
                  </g>
                </svg>
              </div>

              {/* Title and content */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p
                className={cn(
                  'mb-5 text-sm',
                  service.isActive ? 'text-white' : 'text-gray-400'
                )}
              >
                {service.description}
              </p>

              {/* Read More link */}
              <Link
                href={service.link}
                className={cn(
                  'inline-flex items-center text-sm font-medium',
                  service.isActive
                    ? 'text-white hover:text-gray-200'
                    : 'text-[#4B7BF5] hover:text-white'
                )}
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
