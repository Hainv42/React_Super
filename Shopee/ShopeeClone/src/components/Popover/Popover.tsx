import React, { useRef, useState, useId, ElementType } from 'react'
import { Link } from 'react-router-dom'
import { FloatingPortal, useFloating, arrow, shift, offset, type Placement } from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FALSE } from 'sass'
import { flatMap } from 'lodash'

type PopoverType = {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  as?: ElementType
  initalOpen?: boolean
  placement?: Placement
}

export default function Popover(props: PopoverType) {
  const { children, renderPopover, className, as: Element = 'div', initalOpen, placement = 'bottom-end' } = props

  const [isOpen, setIsOpen] = useState(initalOpen || false)
  const arrowRef = useRef<HTMLElement>(null)
  const id = useId()
  const { x, y, strategy, refs, middlewareData } = useFloating({
    middleware: [
      offset(6),
      shift(),
      arrow({
        element: arrowRef
      })
    ],
    placement: placement
  })

  const showPopover = () => {
    setIsOpen(true)
  }
  const hiddenPopover = () => {
    setIsOpen(false)
  }
  return (
    <Element className={className} ref={refs.setReference} onMouseEnter={showPopover} onMouseLeave={hiddenPopover}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <FloatingPortal id={id}>
            <motion.div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <span
                ref={arrowRef}
                className=' absolute z-10 -translate-y-[95%] border-[11px] border-x-transparent border-y-transparent border-b-white'
                style={{ left: middlewareData.arrow?.x, top: middlewareData.arrow?.y }}
              />
              {renderPopover}
            </motion.div>
          </FloatingPortal>
        )}
      </AnimatePresence>
    </Element>
  )
}
