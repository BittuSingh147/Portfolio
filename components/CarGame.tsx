'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Car, TreesIcon as Tree } from 'lucide-react'

const CAR_SPEED = 5
const OBSTACLE_SPEED = 3

const CarGame = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [carPosition, setCarPosition] = useState(50)
  const [obstacles, setObstacles] = useState<{ x: number; y: number }[]>([])
  const [score, setScore] = useState(0)

  const moveCar = useCallback((e: { key: string }) => {
    if (e.key === 'ArrowLeft' && carPosition > 0) {
      setCarPosition((prev) => Math.max(prev - CAR_SPEED, 0))
    } else if (e.key === 'ArrowRight' && carPosition < 100) {
      setCarPosition((prev) => Math.min(prev + CAR_SPEED, 100))
    }
  }, [carPosition])

  useEffect(() => {
    if (gameStarted) {
      window.addEventListener('keydown', moveCar)
      const gameLoop = setInterval(() => {
        setObstacles((prev) => {
          const newObstacles = prev
            .map((obs) => ({ ...obs, y: obs.y + OBSTACLE_SPEED }))
            .filter((obs) => obs.y < 100)
          
          if (Math.random() < 0.05) {
            newObstacles.push({ x: Math.random() * 100, y: 0 })
          }

          return newObstacles
        })
        setScore((prev) => prev + 1)
      }, 50)

      return () => {
        window.removeEventListener('keydown', moveCar)
        clearInterval(gameLoop)
      }
    }
  }, [gameStarted, moveCar])

  const checkCollision = useCallback(() => {
    return obstacles.some(
      (obs) => Math.abs(obs.x - carPosition) < 5 && obs.y > 80 && obs.y < 100
    )
  }, [obstacles, carPosition])

  useEffect(() => {
    if (checkCollision()) {
      setGameStarted(false)
      alert(`Game Over! Your score: ${score}`)
    }
  }, [checkCollision, score])

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-gray-800 aspect-video rounded-lg overflow-hidden">
        {gameStarted ? (
          <>
            <motion.div
              className="absolute bottom-4 w-8 h-12"
              animate={{ left: `${carPosition}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Car className="w-full h-full text-primary" />
            </motion.div>
            {obstacles.map((obs, index) => (
              <motion.div
                key={index}
                className="absolute w-6 h-6"
                style={{ left: `${obs.x}%`, top: `${obs.y}%` }}
              >
                <Tree className="w-full h-full text-green-500" />
              </motion.div>
            ))}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button onClick={() => setGameStarted(true)}>Start Game</Button>
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">Score: {score}</p>
        <p className="text-sm text-muted-foreground">
          Use left and right arrow keys to move the car
        </p>
      </div>
    </div>
  )
}

export default CarGame

