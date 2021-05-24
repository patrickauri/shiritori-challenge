import { useEffect, useState, useRef } from "react"

import { GenerateName } from "./NameGenerator"
import { GenerateWord } from "./WordGenerator"
import { ValidateWord } from "./WordValidation"

export const ComputerMatch = () => {
  const [messages, setMessages] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [computerName, setComputerName] = useState()
  const [playerTurn, setPlayerTurn] = useState(true)
  const [currentWord, setCurrentWord] = useState("")

  const bottomRef = useRef(null)

  useEffect(() => {
    setComputerName(GenerateName())
    ComputerMessage()
  }, [])

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const ComputerMessage = () => {
    const msg = GenerateWord()
    AddMessage(msg, false)
    setCurrentWord(msg)
    setPlayerTurn(true)
  }

  const AddMessage = (msg, me) => {
    const now = new Date()
    const newMsg = { msg: msg, me: me, date: now }
    setMessages((messages) => [...messages, newMsg])
    if (me) {
      setUserInput("")
      setTimeout(() => {
        ComputerMessage()
      }, 500)
    }
  }

  const HandleInput = (e) => {
    setUserInput(e.target.value)
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (ValidateWord(userInput, currentWord)) {
      if (userInput !== "" && playerTurn) {
        AddMessage(userInput, true)
        setCurrentWord(userInput)
        setPlayerTurn(false)
      }
    } else {
      setGameOver(true)
    }
  }

  if (gameOver) {
    return "Game Over"
  } else {
    return (
      <>
        <div className="game-wrapper">
          <div className="game-header">
            <button className="header-btn">⬅ End Game</button>
            <h2 style={{ marginLeft: "auto", marginRight: "auto" }}>
              {computerName}
            </h2>
          </div>
          <div className="current-word">{currentWord}</div>
          <div className="chat-wrapper">
            {messages.map((e, i) => (
              <ChatMessage key={i} me={e.me} msg={e.msg} date={e.date} />
            ))}
            <div ref={bottomRef} />
          </div>
          <form
            className="chat-input-wrapper"
            onSubmit={(e) => HandleSubmit(e)}
          >
            <input
              autoFocus
              onChange={(e) => HandleInput(e)}
              className="chat-input"
              type="text"
              placeholder="Enter message here"
              value={userInput || ""}
            />
            <button className="chat-btn">Send</button>
          </form>
        </div>
      </>
    )
  }
}

const ChatMessage = ({ msg, me, date }) => {
  const cls = me === true ? "chat-msg-right" : "chat-msg-left"

  return (
    <div className="chat-msg-wrapper">
      <div className={`chat-msg ${cls}`}>{msg || "Nothing here :("}</div>
      <div className={me === true ? "chat-date-right" : "chat-date-left"}>
        {date !== undefined
          ? date.toLocaleString("en-US", { hour: "numeric", minute: "numeric" })
          : "No Date"}
      </div>
    </div>
  )
}
