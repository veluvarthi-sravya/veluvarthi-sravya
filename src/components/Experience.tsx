import React from 'react';
import { useInView } from '../hooks/useInView';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const jobs: Job[] = [
    {
      id: 1,
      title: "Intern",
      company: "HMI",
      location: "Visakhapatanam",
      period: "July 2022 - October2022",
      description: [
        "During the internship I have Gained the knowledge on Full stack development and I have Certified in that course.I developed the Online Student Registration Form Web Page"
      ]
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className={`h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My professional journey and career growth in the tech industry. Here's where I've worked and what I've accomplished.
          </p>
        </div>

        <ol className="list-decimal space-y-8 text-gray-700 dark:text-gray-300 pl-5">
          {jobs.map((job, index) => (
            <li key={job.id} className='text-xl lg:text-3xl md:text-2xl'>
              <div className="mb-2">
                <h3 className="text-xl lg:text-3xl md:text-2xl
                 font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                <p><span className="font-medium text-blue-600 dark:text-blue-400">Company:</span> {job.company}</p>
                <p><span className="font-medium text-blue-600 dark:text-blue-400">Location:</span> {job.location}</p>
                <p><span className="font-medium text-blue-600 dark:text-blue-400">Period:</span> {job.period}</p>
              </div>
              <ul className="list-disc pl-6 space-y-1">
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

 
      </div>

    </section>
  );
};

export default Experience;