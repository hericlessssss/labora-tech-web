import React from 'react';
import LordIcon from './LordIcon';

// Exemplo de ícone (você precisará substituir pelo seu próprio JSON de ícone)
const ICON = {
  "v": "5.9.0",
  "fr": 30,
  "ip": 0,
  "op": 60,
  "w": 32,
  "h": 32,
  // ... resto do JSON do ícone
};

export default function IconExample() {
  return (
    <div className="flex gap-8 items-center">
      <div>
        <LordIcon
          icon={ICON}
          size={48}
          trigger="hover"
          colors="primary:#6a1b9a,secondary:#fde059"
        />
        <p className="text-sm text-gray-400 mt-2">Hover me</p>
      </div>

      <div>
        <LordIcon
          icon={ICON}
          size={48}
          trigger="click"
          colors="primary:#6a1b9a,secondary:#fde059"
        />
        <p className="text-sm text-gray-400 mt-2">Click me</p>
      </div>

      <div>
        <LordIcon
          icon={ICON}
          size={48}
          trigger="loop"
          delay={1000}
          colors="primary:#6a1b9a,secondary:#fde059"
        />
        <p className="text-sm text-gray-400 mt-2">Auto loop</p>
      </div>
    </div>
  );
}