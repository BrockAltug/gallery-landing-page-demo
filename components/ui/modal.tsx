"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: ModalProps) {
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement
      setIsAnimating(true)
      document.body.style.overflow = "hidden"

      // Focus trap
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      const firstElement = focusableElements?.[0] as HTMLElement
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus()
              e.preventDefault()
            }
          }
        }
      }

      document.addEventListener("keydown", handleTabKey)
      firstElement?.focus()

      return () => {
        document.removeEventListener("keydown", handleTabKey)
      }
    } else {
      document.body.style.overflow = "unset"
      previousFocusRef.current?.focus()
      setIsAnimating(false)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose, closeOnEscape])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose()
    }
  }

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-[95vw] max-h-[95vh]",
  }

  if (!mounted) return null

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative bg-white rounded-3xl shadow-artisan-xl max-h-[90vh] overflow-hidden transition-all duration-500 ${
          sizeClasses[size]
        } ${isOpen && isAnimating ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"}`}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-sand">
            {title && (
              <h2 id="modal-title" className="text-2xl font-display font-bold text-foreground">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="rounded-full hover:bg-sand/50 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close modal</span>
              </Button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
