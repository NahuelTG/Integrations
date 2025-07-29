// VoiceActivatedApp.jsx
import useMicrophone from '../hooks/useMicrophone.ts'

export function VoiceActivatedApp() {
  const { isListening, volume, error, startListening, stopListening } = useMicrophone()

  // 🎯 Acciones basadas en volumen
  const getVolumeAction = () => {
    if (volume < 10) return { text: '🤫 Silencio', color: 'blue' }
    if (volume < 30) return { text: '🗣️ Hablando normal', color: 'green' }
    if (volume < 60) return { text: '📢 Hablando fuerte', color: 'orange' }
    return { text: '🚨 ¡GRITANDO!', color: 'red' }
  }

  const currentAction = getVolumeAction()

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>🎤 Control por Voz</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ margin: '20px 0' }}>
        <button
          onClick={isListening ? stopListening : startListening}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: isListening ? 'red' : 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}>
          {isListening ? '🛑 Detener' : '🎤 Iniciar'}
        </button>
      </div>

      {isListening && (
        <div>
          <div
            style={{
              fontSize: '24px',
              color: currentAction.color,
              margin: '20px 0',
            }}>
            {currentAction.text}
          </div>

          {/* Barra de volumen visual */}
          <div
            style={{
              width: '300px',
              height: '20px',
              backgroundColor: '#ddd',
              margin: '0 auto',
              borderRadius: '10px',
              overflow: 'hidden',
            }}>
            <div
              style={{
                width: `${volume}%`,
                height: '100%',
                backgroundColor: currentAction.color,
                transition: 'width 0.1s ease',
              }}
            />
          </div>

          <p>Volumen: {volume}%</p>
        </div>
      )}
    </div>
  )
}
