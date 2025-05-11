import React, { useState } from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type ChatOption = 'whatsapp' | 'messenger' | 'internal';

interface ChatWidgetProps {
  whatsappNumber?: string;
  messengerPageId?: string;
  initialMessage?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({
  whatsappNumber = '5562996641935', // Substitua pelo número real de WhatsApp
  messengerPageId = '123456789', // Substitua pelo ID da página do Facebook
  initialMessage = 'Olá! Como posso ajudar você hoje?',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatOption, setChatOption] = useState<ChatOption | null>(null);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{text: string; isUser: boolean}>>([
    { text: initialMessage, isUser: false }
  ]);
  
  const { siteConfig } = useDocusaurusContext();
  const siteName = siteConfig.title;

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setChatOption(null);
    }
  };

  const selectChatOption = (option: ChatOption) => {
    setChatOption(option);
    
    if (option === 'whatsapp') {
      // Abrir WhatsApp em uma nova aba
      window.open(`https://wa.me/${whatsappNumber}?text=Olá! Estou entrando em contato pelo site ${siteName}`, '_blank');
      setIsOpen(false);
    } else if (option === 'messenger') {
      // Abrir Messenger em uma nova aba
      window.open(`https://m.me/${messengerPageId}`, '_blank');
      setIsOpen(false);
    }
    // Para a opção 'internal', mantemos o chat aberto e mostramos a interface
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Adicionar mensagem do usuário ao histórico
    setChatHistory([...chatHistory, { text: message, isUser: true }]);
    
    // Simular resposta automática após 1 segundo
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          text: `Obrigado por sua mensagem! Um de nossos atendentes entrará em contato em breve.`, 
          isUser: false 
        }
      ]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <div className={styles.chatWidgetContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          {!chatOption ? (
            <div className={styles.chatOptions}>
              <h3>Como podemos ajudar?</h3>
              <button 
                className={styles.optionButton} 
                onClick={() => selectChatOption('whatsapp')}
              >
                <img 
                  src="/img/whatsapp-icon.png" 
                  alt="WhatsApp" 
                  className={styles.optionIcon}
                  onError={handleImageError} 
                />
                WhatsApp
              </button>
              <button 
                className={styles.optionButton} 
                onClick={() => selectChatOption('messenger')}
              >
                <img 
                  src="/img/messenger-icon.png" 
                  alt="Messenger" 
                  className={styles.optionIcon}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                  }} 
                />
                Messenger
              </button>
              <button 
                className={styles.optionButton} 
                onClick={() => selectChatOption('internal')}
              >
                <img 
                  src="/img/chat-icon.png" 
                  alt="Chat" 
                  className={styles.optionIcon}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                  }}
                />
                Chat
              </button>
            </div>
          ) : chatOption === 'internal' && (
            <div className={styles.internalChat}>
              <div className={styles.chatHeader}>
                <h3>Chat de Suporte</h3>
                <button 
                  className={styles.backButton}
                  onClick={() => setChatOption(null)}
                >
                  Voltar
                </button>
              </div>
              <div className={styles.chatMessages}>
                {chatHistory.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`${styles.message} ${msg.isUser ? styles.userMessage : styles.botMessage}`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={sendMessage} className={styles.chatInputForm}>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className={styles.chatInput}
                />
                <button type="submit" className={styles.sendButton}>
                  Enviar
                </button>
              </form>
            </div>
          )}
        </div>
      )}
      <button 
        className={styles.chatToggleButton} 
        onClick={toggleChat}
        aria-label="Abrir chat de suporte"
      >
        {isOpen ? (
          <span className={styles.closeIcon}>×</span>
        ) : (
          <span className={styles.chatIcon}>💬</span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;