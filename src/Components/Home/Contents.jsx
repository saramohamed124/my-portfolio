import ReactTypingEffect from 'react-typing-effect';

function Contents() {
  return (
    <div className="parent-header jetbrains-mono my-custom-20 mx-auto flex flex-col items-start gap-6  pt-3 pb-0 mb-0">
      <p className='badge w-fit py-1 px-4 text-sm bg-[var(--color-ivory)] border border-[var(--color-blush-soft)] text-[var(--color-burgundy-deep)] font-medium'>Hello There!</p>
      <div className="content  lg:text-start text-center lg:block flex justify-center items-center flex-col">
        <h1 className="lg:text-4xl text-3xl pb-6 text-[var(--color-charcoal-dark)] font-bold ">
          I am{" "}
          <span className=" text-[var(--color-ruby)] px-3 lg:text-5xl text-xl">
            <ReactTypingEffect
              text={["Sara Mohammed", "Front End Developer", "React Developer", "Content Creator", "Web Instructor", "ICDL Instructor"]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
              />
          </span>
        </h1>
        <p className=" w-4/5 lg:text-xl text-[var(--color-brown-earth)]" >
          I'm a Front-end web Developer, I love to create beautiful and
          functional websites. my goal is to learn new thing every day.
        </p>
      </div>
    </div>
  );
}
export default Contents;
