import { usePathname } from 'next/navigation';
import { createContext, useEffect, useRef, useState, ReactNode } from 'react';
interface FruitfulContextType {
  isBenefit: boolean;
  setIsBenefit: React.Dispatch<React.SetStateAction<boolean>>;
  selectedGuide:string;
  setSelectedGuide:React.Dispatch<React.SetStateAction<string>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  benefitRef: React.RefObject<HTMLDivElement>;
  toggleBenefitPopup: () => void;
  handleClickOutside: (event: MouseEvent) => void;
  handleMouseEnter: (e: MouseEvent) => void;
  hoverItems: Array<{ id: string; x: number; y: number; timeoutId: number | null }>;
  isOverlayOpen: boolean;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FruitfulContext = createContext<FruitfulContextType | undefined>(undefined);

const FruitfulProvider = ({ children }: { children: ReactNode }) => {
    const [isBenefit, setIsBenefit] = useState(false);
    const linkname = usePathname();
    useEffect(() => {
setIsBenefit(false);
    }, [linkname]);

    const [isVisible, setIsVisible] = useState(false);
    const benefitRef = useRef(null);

    const toggleBenefitPopup = () => {
      if (!isBenefit) {
        setIsBenefit(true);
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setTimeout(() => setIsBenefit(false), 500);
      }
      
    };

    const handleClickOutside = (event) => {
      if (benefitRef.current && !benefitRef.current.contains(event.target)) {
        setIsVisible(false);
        setTimeout(() => setIsBenefit(false), 500);
      }
      
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
    const [hoverItems, setHoverItems] = useState([]);
    const timeoutRefs = useRef([]);

    const handleMouseEnter = (e) => {
      const id = `hover-item-${Date.now()}-${Math.random()}`;
      const { clientX: x, clientY: y } = e;
  
      const newItem = { id, x, y, timeoutId: null };
      setHoverItems((prevItems) => [...prevItems, newItem]);
  
      const timeoutId = setTimeout(() => {
        setHoverItems((prevItems) => prevItems.filter((item) => item.id !== id));
        timeoutRefs.current = timeoutRefs.current.filter((ref) => ref.current !== timeoutId);
      }, 100000);
  
      timeoutRefs.current.push({ current: timeoutId });
    };
  
    useEffect(() => {
      return () => {
        timeoutRefs.current.forEach((ref) => clearTimeout(ref.current));
        timeoutRefs.current = [];
      };
    }, []);

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [selectedGuide, setSelectedGuide] = useState('');

    return (
      <FruitfulContext.Provider value={{ 
        isBenefit, setIsBenefit, isVisible, setIsVisible,  benefitRef, toggleBenefitPopup, handleClickOutside,  handleMouseEnter,  hoverItems, isOverlayOpen, setIsOverlayOpen,selectedGuide, setSelectedGuide
  }}>
        {children}
      </FruitfulContext.Provider>
    );
  };


  export { FruitfulProvider, FruitfulContext };