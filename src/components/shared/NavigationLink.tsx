
interface NavigationLinkProps{
    activeTab: string;
    title: string;
    setActiveTab: (name:string) => void;
}



const NavigationLink:React.FC<NavigationLinkProps> = ({activeTab, setActiveTab,title}) => {
    return ( 
         <button 
          className={`px-4 py-1 ${activeTab === title ? 'border-b-2 border-white' : ''}`}
          onClick={() => setActiveTab(title)}
        >
         {title}
        </button>
    );
}
 
export default NavigationLink;