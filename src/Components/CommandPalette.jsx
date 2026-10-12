import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHome, FiBriefcase, FiBookOpen, FiHeart, FiMail, FiDownload, FiCopy, FiLinkedin, FiGithub, FiSearch, FiCornerDownLeft } from 'react-icons/fi'
import { RESUME, RESUME_NAME, EMAIL } from './ui'

// Opens with Ctrl/⌘+K or the "open-command-palette" event (fired by the navbar button)
const CommandPalette = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [toast, setToast] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const download = () => {
    const a = document.createElement('a')
    a.href = RESUME
    a.download = RESUME_NAME
    a.click()
  }

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setToast('Email copied') } catch { setToast(EMAIL) }
    setTimeout(() => setToast(''), 1800)
  }

  const commands = useMemo(() => [
    { group: 'Pages', label: 'Home', Icon: FiHome, run: () => navigate('/') },
    { group: 'Pages', label: 'Work: experience & projects', Icon: FiBriefcase, run: () => navigate('/Work') },
    { group: 'Pages', label: 'Education & skills', Icon: FiBookOpen, run: () => navigate('/Education') },
    { group: 'Pages', label: 'Hobbies', Icon: FiHeart, run: () => navigate('/Hobbies') },
    { group: 'Pages', label: 'Contact', Icon: FiMail, run: () => navigate('/Contact') },
    { group: 'Actions', label: 'Download resume', Icon: FiDownload, run: download },
    { group: 'Actions', label: 'Copy email address', Icon: FiCopy, run: copyEmail },
    { group: 'Links', label: 'LinkedIn', Icon: FiLinkedin, run: () => window.open('https://www.linkedin.com/in/d-yaa-a-1b56b9144/', '_blank', 'noopener') },
    { group: 'Links', label: 'GitHub', Icon: FiGithub, run: () => window.open('https://github.com/AlyassinDyaa', '_blank', 'noopener') },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [navigate])

  const results = commands.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase()))

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      setTimeout(() => inputRef.current && inputRef.current.focus(), 30)
    }
  }, [open])

  useEffect(() => setActive(0), [query])

  const runAt = (i) => {
    const cmd = results[i]
    if (!cmd) return
    setOpen(false)
    cmd.run()
  }

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((v) => Math.min(v + 1, results.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive((v) => Math.max(v - 1, 0)) }
    if (e.key === 'Enter') { e.preventDefault(); runAt(active) }
  }

  let lastGroup = null

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="cmdk-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpen(false)}
          >
            <motion.div
              className="cmdk"
              role="dialog"
              aria-label="Command palette"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="cmdk__search">
                <FiSearch />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onInputKey}
                  placeholder="Jump to a page or run an action..."
                  aria-label="Search commands"
                />
                <kbd>Esc</kbd>
              </div>

              <ul className="cmdk__list">
                {results.length === 0 && <li className="cmdk__empty">No results</li>}
                {results.map((c, i) => {
                  const header = c.group !== lastGroup ? c.group : null
                  lastGroup = c.group
                  return (
                    <React.Fragment key={c.label}>
                      {header && <li className="cmdk__group">{header}</li>}
                      <li>
                        <button
                          className={`cmdk__item${i === active ? ' is-active' : ''}`}
                          onMouseEnter={() => setActive(i)}
                          onClick={() => runAt(i)}
                        >
                          <c.Icon />
                          <span>{c.label}</span>
                          {i === active && <FiCornerDownLeft className="cmdk__enter" />}
                        </button>
                      </li>
                    </React.Fragment>
                  )
                })}
              </ul>

              <div className="cmdk__foot">
                <span><kbd>↑</kbd><kbd>↓</kbd> to move</span>
                <span><kbd>Enter</kbd> to open</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div className="ui-toast" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CommandPalette
