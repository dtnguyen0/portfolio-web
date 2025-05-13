interface TooltipProps {
  title: string;
  children: React.ReactNode;
}

function Tooltip(popup: TooltipProps) {
return(
  <div className="relative inline-block cursor-pointer group">
    {popup.children}
    <span className="absolute bottom-[-48%] left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black text-center px-[8px] py-[5px] rounded-[4px] opacity-0 invisible transition-all duration-150 z-[100] group-hover:opacity-100 group-hover:visible group-hover:bottom-[-65%]">{popup.title}</span>
  </div>
);
}

export default Tooltip