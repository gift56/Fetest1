const Sidebar = () => {
  return (
    <ul className="w-full h-screen p-8 shadow-sideShad sticky top-0 flex flex-col items-center justify-start gap-8">
      <div className="cursor-pointer">
        <img src="/icon/barIcon.png" alt="barIcon" className="w-full" />
      </div>
    </ul>
  );
};

export default Sidebar;
