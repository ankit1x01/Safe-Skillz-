import { useState } from 'react'
import { Shield, Lock, Eye, Zap, CheckCircle, XCircle, Trophy } from 'lucide-react'

interface ThreatCard {
  id: number
  title: string
  description: string
  isThreat: boolean
  icon: any
  color: string
}

const threats: ThreatCard[] = [
  {
    id: 1,
    title: 'Suspicious Email',
    description: 'Email from unknown sender asking for password reset',
    isThreat: true,
    icon: Eye,
    color: 'from-danger to-warning',
  },
  {
    id: 2,
    title: 'HTTPS Website',
    description: 'Shopping site with valid SSL certificate and padlock',
    isThreat: false,
    icon: Lock,
    color: 'from-success to-primary',
  },
  {
    id: 3,
    title: 'Public WiFi Login',
    description: 'Free airport WiFi requesting personal information',
    isThreat: true,
    icon: Zap,
    color: 'from-warning to-danger',
  },
  {
    id: 4,
    title: 'Two-Factor Auth',
    description: 'Bank app requesting verification code from phone',
    isThreat: false,
    icon: Shield,
    color: 'from-primary to-success',
  },
]

export const InteractiveCyberGame = () => {
  const [flipped, setFlipped] = useState<number[]>([])
  const [selected, setSelected] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  const handleCardClick = (card: ThreatCard) => {
    if (flipped.includes(card.id)) return

    setFlipped([...flipped, card.id])

    setTimeout(() => {
      if (card.isThreat) {
        setSelected([...selected, card.id])
        setScore(score + 1)
      } else {
        // Show wrong selection briefly
        setSelected([...selected, card.id])
        setTimeout(() => {
          setSelected(selected.filter(id => id !== card.id))
        }, 1000)
      }

      // Check if game is complete
      if (flipped.length + 1 === threats.length) {
        setTimeout(() => setGameComplete(true), 500)
      }
    }, 600)
  }

  const resetGame = () => {
    setFlipped([])
    setSelected([])
    setScore(0)
    setGameComplete(false)
  }

  const correctThreats = threats.filter(t => t.isThreat).length

  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-4">
          <span className="text-sm font-bold text-primary">🎮 Interactive Challenge</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Test Your Security Awareness
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Click on the cards to identify potential security threats. Can you spot them all?
        </p>
      </div>

      {/* Score Board */}
      <div className="flex justify-center gap-8 mb-8">
        <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-dark-surface rounded-2xl shadow-lg border-2 border-primary/20">
          <Trophy className="w-6 h-6 text-primary" />
          <div>
            <div className="text-xs text-muted">Score</div>
            <div className="text-2xl font-bold text-primary">{score}/{correctThreats}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-dark-surface rounded-2xl shadow-lg border-2 border-accent/20">
          <Eye className="w-6 h-6 text-accent" />
          <div>
            <div className="text-xs text-muted">Revealed</div>
            <div className="text-2xl font-bold text-accent">{flipped.length}/{threats.length}</div>
          </div>
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {threats.map((card) => {
          const isFlipped = flipped.includes(card.id)
          const isSelected = selected.includes(card.id)
          const isCorrect = isSelected && card.isThreat
          const isWrong = isSelected && !card.isThreat

          return (
            <div
              key={card.id}
              onClick={() => !isFlipped && handleCardClick(card)}
              className={`relative h-64 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                isFlipped ? '' : 'hover:rotate-1'
              }`}
              style={{ perspective: '1000px' }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-white/50 dark:border-gray-700 shadow-xl flex items-center justify-center backdrop-blur-sm"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/90 dark:bg-dark-surface flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm font-bold text-gray-800 dark:text-white">
                      Click to Reveal
                    </p>
                    <p className="text-xs text-muted mt-2">Scenario #{card.id}</p>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className={`absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br ${card.color} border-2 shadow-xl p-6 flex flex-col justify-between rotate-y-180 ${
                    isCorrect ? 'ring-4 ring-success' : isWrong ? 'ring-4 ring-danger' : ''
                  }`}
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <card.icon className="w-8 h-8 text-white" />
                      {isCorrect && (
                        <CheckCircle className="w-6 h-6 text-white animate-bounce" />
                      )}
                      {isWrong && (
                        <XCircle className="w-6 h-6 text-white animate-pulse" />
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-white/90">{card.description}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/30">
                    <div className="flex items-center gap-2">
                      {card.isThreat ? (
                        <>
                          <XCircle className="w-5 h-5 text-white" />
                          <span className="text-xs font-bold text-white">THREAT DETECTED</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5 text-white" />
                          <span className="text-xs font-bold text-white">SAFE PRACTICE</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Game Complete Modal */}
      {gameComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-dark-surface rounded-3xl p-8 md:p-12 max-w-md mx-4 shadow-2xl border-4 border-primary animate-slide-up">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-bounce">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {score === correctThreats ? 'Perfect Score!' : 'Challenge Complete!'}
              </h3>
              <p className="text-lg text-muted mb-2">
                You identified <span className="font-bold text-primary">{score}</span> out of{' '}
                <span className="font-bold text-primary">{correctThreats}</span> threats
              </p>
              <div className="my-6 p-4 bg-primary/10 rounded-xl">
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  {score === correctThreats
                    ? '🎉 Excellent! You have great security awareness!'
                    : score >= correctThreats / 2
                    ? '👍 Good job! Keep learning about cybersecurity.'
                    : '📚 Consider taking our training to improve your security knowledge.'}
                </p>
              </div>
              <button
                onClick={resetGame}
                className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="text-center mt-8">
        <button
          onClick={resetGame}
          className="px-6 py-3 bg-gray-100 dark:bg-dark-surface text-gray-800 dark:text-white font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Reset Game
        </button>
      </div>
    </div>
  )
}
