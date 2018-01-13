import React from 'react'

export default function NotePreview({note}) {
  const {title, body} = note

  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}
