import { HamburgerMenuInnerElementI } from '../config/types';

interface HamburgerInnnerElementProps {
  data: HamburgerMenuInnerElementI;
  customStyling?: string;
}

const HamburgerInnerElement = ({
  data,
  customStyling,
}: HamburgerInnnerElementProps) => {
  return (
    <div
      className={`${customStyling} text-sm text-darkgray cursor-pointer hover:text-black transition ease-in duration-200`}
    >
      {data.name}
    </div>
  );
};

export default HamburgerInnerElement;
