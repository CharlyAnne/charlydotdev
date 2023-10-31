import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'React Developer',
          'Financial Analyst',
          'Web Programmer',
          'JavaScript Engineer',

          //   'Open Source Contributor',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
