import React from 'react'

export function useToggle() {
  const [editMode, setEditMode] = useState(false)
  function toggle() {
    setEditMode(!editMode)
  }

  return { editMode, toggle }
}