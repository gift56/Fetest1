const Sidebar = () => {
  const sideBardIcon = ["/icon/homeIcon.png", "/icon/taskIcon.png"];
  return (
    <div className="w-full h-screen p-8 shadow-sideShad sticky top-0 flex flex-col items-center justify-between">
      <ul className="w-full flex flex-col items-center justify-center gap-16">
        <div className="cursor-pointer">
          <img src="/icon/barIcon.png" alt="barIcon" className="w-full" />
        </div>
        <nav
          aria-label="navigate"
          className="flex w-full flex-col items-center gap-6"
        >
          {sideBardIcon.map((item, i) => (
            <img
              src={item}
              alt="barIcon"
              className="cursor-pointer w-8 h-8"
              key={i}
            />
          ))}
        </nav>
      </ul>
      <span className="w-10 h-10 bg-[#1D4ED8] rounded-full uppercase text-white text-base font-semibold flex items-center justify-center select-none cursor-pointer">NT</span>
    </div>
  );
};

export default Sidebar;
