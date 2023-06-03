import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold text-[30.89px] leading-[43.16px] text-white xs:text-[40.89px] xs:leading-[53.16px]">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal text-[15.45px] leading-[21.58px] text-gradient uppercase ml-3 xs:text-[20.45px] xs:leading-[26.58px]">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
