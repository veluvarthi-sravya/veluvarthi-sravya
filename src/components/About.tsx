import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section >
      <div>
       

        <div>
          <div>
            <div>
             
            </div>
            <div ></div>
          </div>

          <div >
           
            <div >
              <div>
             
              </div>
              <div>
                
              </div>
              <div>
               
              </div>
              <div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;