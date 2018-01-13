import React from 'react'

export default function NotePreview({note}) {
  const {title, body} = note

  return (
    <li className="notepreview">
      <h3>{note.id} - {title}</h3>
      <p>{body}</p>
    </li>
  )
}
