import './tooltip.css'

interface TooltipProps {
  title: string;
  children: React.ReactNode;
}

function Tooltip(popup: TooltipProps) {
return(
  <div className="tooltip">
    {popup.children}
    <span className="tooltip-text">{popup.title}</span>
  </div>
);
}

export default Tooltip