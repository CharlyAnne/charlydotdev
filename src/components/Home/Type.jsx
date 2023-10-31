import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'React Developer',
          'UI Design',
          'Web Developer',
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
