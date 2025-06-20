import { TypeAnimation } from 'react-type-animation';

export default function Landing() {
  return (
    <div className="container flex">
        
        <div className="w-1/2 flex flex-col justify-center items-center">
          <TypeAnimation 
            sequence={[
              'Set Your Closet Ablaze',
              1500,
              'Upscale Your Drip',
              1500,
              'This is Araçan Clothing',
              1500
            ]}
            wrapper="span"
            speed={50}
            className="ml-20 text-8xl text-fuchsia-950 font-macherie"
          />
        </div>
        
        <div className="w-1/2 ml-20 flex justify-center">
          <img 
            src="/Aracan.gif" 
            style={{ width: '500px', height: '670px' }} 
          />
        </div>
                
    </div>
  );
}
