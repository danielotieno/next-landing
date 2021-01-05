import { Tick } from '../../icons';

const outcomes = [
  'How to build this landing page with Next.js',
  'How to create API endpoint and integrate with ConvertKit API',
  'How to use React Hook Form and TailwindCSS',
];

const ComingSoonBadge = () => (
  <span className='inline-block px-2 py-1 mb-4 text-xs text-white bg-blue-500 rounded-md'>
    Coming Soon!
  </span>
);

const Hero = () => {
  return (
    <div className='border border-gray-200 md:flex md:flex-row'>
      <div className='text-center bg-gray-100 md:w-1/3'>
        <img
          className='object-contain mx-auto'
          alt='Next.js 101'
          src='/assets/img_nextjs-101-cover.png'
        />
      </div>
      <div className='self-center px-4 py-6 md:px-8 md:w-2/3'>
        <h2 className='mb-3 text-2xl font-bold'>What you'll learn</h2>
        {outcomes && (
          <ul className='mb-6'>
            {outcomes.map((i) => (
              <li key={i} className='flex mb-2 text-gray-700'>
                <span className='self-center mr-2'>
                  <Tick className='h-4' />
                </span>
                <span className='opacity-75'>{i}</span>
              </li>
            ))}
          </ul>
        )}
        <ComingSoonBadge />
        <div>SIGNUP FORM GOES HERE</div>
      </div>
    </div>
  );
};

export default Hero;
