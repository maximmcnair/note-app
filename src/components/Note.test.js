import React from 'react'
import {shallow} from 'enzyme'

import Note from './Note'

it('should render note', () => {
  const data = {
    id: '123',
    title: 'Gregor Samsa woke from troubled dreams',
    body: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly'
  }

  const wrapper = shallow(<Note note={data} />)
  expect(wrapper.contains(data.title)).toEqual(true)
  expect(wrapper.contains(data.body)).toEqual(true)
})
