<motion.section
  // initial={{
  //   opacity: 1,
  //   x: 0,
  // }}
  // whileInView={{
  //   opacity: 0,
  //   x: '-10px',
  //   transition: {
  //     duration: 0.6,
  //     ease: 'easeOut',
  //   },
  // }}
  // viewport={{
  //   margin: '-125px',
  // }}
  className="sidebar absolute top-[50%] -translate-y-[60%] -md:-translate-y-[40%] -4xsm:-translate-y-[30%] right-0 z-[9999] flex flex-col items-end"
>
  <div className="sidebar-btn bg-secondary h-[109px] rounded-tl-[20px] w-[50px] flex flex-col gap-[10px] items-center justify-center hover:cursor-pointer group transition-all duration-300 ease-out hover:w-[60px] hover:rounded-tl-[0px]">
    <div className="sidebar-btn__menu-icon menu-icon h-[12px] w-[25px] flex flex-col justify-between items-end">
      <span className="menu-icon__line block h-[1px] w-full bg-secondary group-hover:w-[15px] transition-all duration-300 ease-out"></span>
      <span className="menu-icon__line block h-[1px] w-full bg-secondary group-hover:w-[32px] transition-all duration-300 ease-out"></span>
      <span className="menu-icon__line block h-[1px] w-full bg-secondary group-hover:w-[15px] transition-all duration-300 ease-out"></span>
    </div>
    <div className="sidebar-btn__text h-[39px]">
      <span className="btn text-secondary rotate-[270deg] translate-y-[12px]">
        Menu
      </span>
    </div>
  </div>
  <div className="sidebar-btn bg-tertiary overflow-hidden h-[145px] w-[50px] rounded-bl-[20px] flex flex-col gap-[13px] items-center justify-center hover:cursor-pointer group transition-all duration-300 ease-out hover:w-[60px] hover:rounded-bl-[0px] hover:bg-primary hover:text-white">
    <div className="sidebar-btn__book-icon book-icon h-[6px] w-[12px] rotate-180 flex flex-col justify-between">
      <span className="book-icon__line h-[1px] w-[9px] bg-tertiary -rotate-45 group-hover:translate-x-[-8px] transition-all duration-300 ease-out"></span>
      <span className="book-icon__line book-icon__line--hover block h-[1px] w-0 bg-tertiary group-hover:translate-x-[-7px] group-hover:w-[30px] transition-all duration-300 ease-out"></span>
      <span className="book-icon__line h-[1px] w-[9px] bg-tertiary rotate-45 translate-y-[1px] group-hover:translate-x-[-8px] transition-all duration-300 ease-out"></span>
    </div>
    <div className="sidebar-btn__text h-[73.5px]">
      <span className="btn text-tertiary rotate-[270deg] translate-y-[32px] translate-x-[1.75px] whitespace-nowrap">
        Book Now
      </span>
    </div>
  </div>
</motion.section>;
