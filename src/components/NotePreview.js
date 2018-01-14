import React from 'react'

import concatText from '../lib/concatText'

export default function NotePreview({note}) {
  const {title, body} = note

  return (
    <li className="notepreview">
      <h3>{title}</h3>
      <p>{concatText(body, 160)}</p>
    </li>
  )
}
