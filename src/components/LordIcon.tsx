import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Player } from '@lordicon/react';

type LordIconProps = {
  icon: any;
  size?: number;
  trigger?: 'hover' | 'click' | 'loop' | 'morph';
  delay?: number;
  colors?: string;
  stroke?: 'light' | 'regular' | 'bold';
  isHovered?: boolean;
};

export default function LordIcon({ 
  icon, 
  size = 32, 
  trigger = 'hover',
  delay = 0,
  colors,
  stroke = 'regular',
  isHovered = false
}: LordIconProps) {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    if (trigger === 'loop') {
      const timer = setInterval(() => {
        playerRef.current?.playFromBeginning();
      }, delay);

      return () => clearInterval(timer);
    }
  }, [trigger, delay]);

  useEffect(() => {
    if (isHovered) {
      playerRef.current?.playFromBeginning();
    }
  }, [isHovered]);

  return (
    <div style={{ width: size, height: size }}>
      <Player
        ref={playerRef}
        icon={icon}
        size={size}
        colorize={colors?.split(',')[0]?.split(':')[1]}
        state="hover-pinch"
      />
    </div>
  );
}