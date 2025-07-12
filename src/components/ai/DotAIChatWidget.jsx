import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const DotAIChatWidget = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [runningText, setRunningText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState('');
  const [fromVoice, setFromVoice] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef(null);
  const isMobile = window.innerWidth <= 576;

  const fullText = "Need any help? Ask any information to AI Intelligence DOT now!";

  // Running text bubble
  useEffect(() => {
    let interval;
    if (showBubble && !isTypingDone) {
      interval = setInterval(() => {
        setRunningText(prev => {
          const next = fullText.substring(0, prev.length + 1);
          if (next === fullText) {
            clearInterval(interval);
            setIsTypingDone(true);
            setTimeout(() => {
              setRunningText('');
              setIsTypingDone(false);
            }, 4000);
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [runningText, showBubble, isTypingDone]);

  useEffect(() => {
    if (showModal) {
      setShowBubble(false);
    } else {
      setTimeout(() => {
        setRunningText('');
        setIsTypingDone(false);
        setShowBubble(true);
      }, 1000);
    }
  }, [showModal]);

  // Initialize SpeechRecognition
    useEffect(() => {
        if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
            console.warn("SpeechRecognition not supported in this browser.");
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const voiceInput = event.results[0][0].transcript;
            setFromVoice(true); // aktifkan TTS
            handleSubmit(null, voiceInput); // kirim langsung ke AI
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognitionRef.current = recognition;
    }, []);

  const handleSubmit = async (e, customInput = null) => {
    if (e) e.preventDefault();

        const userMessage = customInput || input;
    if (!userMessage.trim()) return;

    setChatHistory(prev => [...prev, { from: 'user', text: userMessage }]);
    setInput('');

    try {
        const res = await axios.post(
        'http://127.0.0.1:8000/api/ai_asistant/gemini_chat_view',
        JSON.stringify({ user_input: userMessage }),
        { headers: { 'Content-Type': 'application/json' } }
        );

        const aiResponse = res.data.response || "Sorry, I couldn't get that.";
        setChatHistory(prev => [...prev, { from: 'ai', text: aiResponse }]);

        // TTS hanya jika input berasal dari mic
        if (fromVoice) {
        const synth = window.speechSynthesis;
        const utter = new SpeechSynthesisUtterance(aiResponse);
        utter.lang = 'en-US';
        synth.speak(utter);

        // Reset flag voice setelah TTS
        utter.onend = () => {
            setFromVoice(false);
        };
        }

    } catch (err) {
        console.error("Axios error:", err);
        setChatHistory(prev => [...prev, { from: 'ai', text: "Error: unable to reach AI." }]);
        setFromVoice(false); // reset meskipun gagal
    }
    };


  const handleMicDown = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleMicUp = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  return (
    <>
      {/* Bubble Text */}
      {showBubble && (
        <div style={{
          position: 'fixed',
          bottom: 65,
          right: 95,
          backgroundColor: 'white',
          border: '2px solid #EB2D66',
          borderRadius: '15px',
          padding: '10px 15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          zIndex: 9998,
          maxWidth: 200
        }}>
          <div style={{ fontSize: '0.8rem' }}>
            <strong>{runningText}</strong>
          </div>
          <button onClick={() => setShowBubble(false)} style={{
            position: 'absolute',
            top: 5,
            right: 7,
            border: 'none',
            background: 'none',
            fontWeight: 'bold'
          }}>×</button>
        </div>
      )}

      {/* Chat Icon */}
      <div onClick={() => setShowModal(true)} style={{
        position: 'fixed',
        bottom: 65,
        right: 20,
        zIndex: 9999,
        cursor: 'pointer'
      }}>
        <img src="/ai.jpeg" alt="DOT AI" width="60" height="60"
          style={{ borderRadius: '50%', border: '4px solid #EB2D66' }} />
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9998
        }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 85,
              right: isMobile ? 10 : 100,
              width: isMobile ? 'calc(100% - 20px)' : 390,
              backgroundColor: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ backgroundColor: '#EB2D66', color: 'white', padding: '10px 15px', fontWeight: 'bold' }}>
              Ask anything to DOT AI
            </div>

            <div style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', color: '#999' }}>
              {new Date().toLocaleDateString('id-ID', {
                weekday: 'short',
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })}
            </div>

            {/* Chat Messages */}
            <div style={{ maxHeight: '250px', overflowY: 'auto', paddingBottom: '1rem' }}>
              {chatHistory.map((chat, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.25rem 1rem',
                    display: 'flex',
                    justifyContent: chat.from === 'user' ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: chat.from === 'user' ? '#EB2D66' : '#f1f1f1',
                      color: chat.from === 'user' ? 'white' : '#333',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '15px',
                      maxWidth: '80%',
                      fontSize: '0.875rem'
                    }}
                  >
                    {chat.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div style={{
              padding: '0.5rem 1rem',
              borderTop: '1px solid #eee',
              backgroundColor: '#fff',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center'
            }}>
              <Form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
                <Form.Group controlId="chatInput" style={{ marginBottom: 0, display: 'flex', gap: '0.5rem' }}>
                  <Form.Control type="text" placeholder="Type your message here..."
                    value={input} onChange={(e) => setInput(e.target.value)}
                    style={{ fontSize: '0.875rem' }} />
                  <Button type="submit" variant="danger"
                    style={{ borderRadius: '50%', width: '2.5rem', height: '2.5rem' }}>
                    <i className="bi bi-send-fill" style={{ color: 'white' }}></i>
                  </Button>
                </Form.Group>
              </Form>

              {/* Mic Button */}
              {/* <Button
                variant={isListening ? 'secondary' : 'outline-secondary'}
                onMouseDown={handleMicDown}
                onMouseUp={handleMicUp}
                onTouchStart={handleMicDown}
                onTouchEnd={handleMicUp}
                style={{ borderRadius: '50%', width: '2.5rem', height: '2.5rem' }}
              >
                <i className={`bi ${isListening ? 'bi-mic-mute-fill' : 'bi-mic-fill'}`} />
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DotAIChatWidget;
