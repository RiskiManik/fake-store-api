import styles from "../style";
import { sepatu, sepatu1 } from "../assets";

const Hero = () => (
  <section
    id="home"
    className={` flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div className={`fle ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-[#334155] ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0"></div>
      </div>

      <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-slate-700  ss:leading-[100px] leading-[75px] w-full">
        of Store.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div
      className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 md:pb-5 sm:py-28 pb-20 relative`}
    >
      <img
        src={sepatu}
        alt="sepatu gwe"
        className="absolute w-[45%] scale-105 translate-x-20 rounded-md shadow-lg skew-y-12 z-[5]"
      />
      <img
        src={sepatu1}
        alt="sepatu gwe"
        className="absolute w-[45%]  skew-y-12  shadow-lg -translate-x-12 rounded-md z-[6]"
      />
      <div className=" absolute z-0 w-[40%] h-[35%] top-0 pink__gradient " />
      <div className=" absolute z-[1] w-[80%] h-[80%] top-0 rounded-full pink__gradient " />
      <div className=" absolute z-0 w-[50%] h-[50%] bottom-20 right-20 blue__gradient " />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}></div>
  </section>
);

export default Hero;
