import React from 'react'
import {mount} from 'enzyme'
import {MemoryRouter} from 'react-router-dom'

import {List} from './List'
import MockNotes from '../__mocks__/notes'

// Mocks
import * as NotePreview from '../components/NotePreview'
NotePreview.default = () => <li>NotePreview</li>

it('should render notes', () => {
  // NOTE have to use mount when using MemoryRouter
  const wrapper = mount(
    <MemoryRouter>
      <List notes={MockNotes} />
    </MemoryRouter>
  )

  expect(wrapper.find('ul').children().length).toEqual(2)
})
