import React, { JSX, ReactNode } from 'react';
import ChatWidget from '../ChatWidget';

// Componente Root que envolve toda a aplicação Docusaurus
export default function Root({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      {children}
      <ChatWidget 
        whatsappNumber="5562996641935" // Substitua pelo número real
        messengerPageId="123456789"     // Substitua pelo ID da página do Facebook
        initialMessage="Olá! Como posso ajudar você hoje?"
      />
    </>
  );
}