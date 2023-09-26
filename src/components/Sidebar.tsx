const Sidebar = () => {
  const sideBardIcon = ["/icon/homeIcon.png", "/icon/taskIcon.png"];
  return (
    <ul className="w-full h-screen p-8 shadow-sideShad sticky top-0 flex flex-col items-center justify-start gap-16">
      <div className="cursor-pointer">
        <img src="/icon/barIcon.png" alt="barIcon" className="w-full" />
      </div>
      <nav
        aria-label="navigate"
        className="flex w-full flex-col items-center gap-6"
      >
        {sideBardIcon.map((item, i) => (
          <img src={item} alt="barIcon" className="cursor-pointer w-full h-8" key={i} />
        ))}
      </nav>
    </ul>
  );
};

export default Sidebar;
