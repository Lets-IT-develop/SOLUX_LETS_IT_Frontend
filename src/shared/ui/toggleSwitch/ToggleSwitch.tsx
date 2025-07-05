import * as S from './ToggleSwitch.styles';
import { useState } from 'react';

interface ToggleSwitchProps {
  tabContent: {
    label: string;
    onClick: () => void;
  }[];
  initialIndex: number;
}

const ToggleSwitch = ({ tabContent, initialIndex = 0 }: ToggleSwitchProps) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const selectTab = (index: number) => {
    setSelectedIndex(index);
    tabContent[index].onClick();
  };

  return (
    <S.ToggleSwitchContainer>
      {tabContent.map((tab, index) => (
        <S.ToggleSwitchButton
          key={tab.label}
          isActive={selectedIndex === index}
          onClick={() => selectTab(index)}
        >
          {tab.label}
          {selectedIndex === index && <S.ToggleSwitchUnderline layoutId="underline" />}
        </S.ToggleSwitchButton>
      ))}
    </S.ToggleSwitchContainer>
  );
};

export default ToggleSwitch;
