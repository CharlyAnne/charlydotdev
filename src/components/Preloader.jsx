/* eslint-disable react/prop-types */
const Pre = (props) => {
  return <div id={props.load ? 'preloader' : 'preloader-none'}></div>;
};

export default Pre;
