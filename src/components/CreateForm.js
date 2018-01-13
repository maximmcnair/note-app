import React from 'react'

export default function CreateForm({
  titleValue,
  bodyValue,
  handleTitleChange,
  handleBodyChange,
}) {
  return (
    <div>
      <input
        value={titleValue}
        placeholder="Title"
        onChange={(event) => {
          handleTitleChange(event.target.value)
        }}
        className="createform__title"
      />
      <textarea
        value={bodyValue}
        placeholder="Take a note"
        onChange={(event) => {
          handleBodyChange(event.target.value)
        }}
        className="createform__body"
      />
    </div>
  )
}
