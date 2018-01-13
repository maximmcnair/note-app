import React from 'react'
import {shallow} from 'enzyme'

import CreateForm from './CreateForm'

it('should render title value', () => {
  const wrapper = shallow(<CreateForm titleValue={'1'} />)

  expect(wrapper.find('.createform__title').prop('value')).toEqual('1')
})

it('should call handleTitleChange() on title change', () => {
  // create mock function to pass in
  const handleTitleChange = jest.fn()

  const wrapper = shallow(<CreateForm handleTitleChange={handleTitleChange} />)

  // simulate click event
  wrapper.find('.createform__title').simulate(
    'change',
    {target: {name: 'test', value: '4'}}
  )

  // expect complete fn to have been called
  expect(handleTitleChange.mock.calls.length).toEqual(1)
  expect(handleTitleChange.mock.calls[0][0]).toEqual('4')
})

it('should render body value', () => {
  const wrapper = shallow(<CreateForm bodyValue={'1'} />)

  expect(wrapper.find('.createform__body').prop('value')).toEqual('1')
})

it('should call handleBodyChange() on body change', () => {
  // create mock function to pass in
  const handleBodyChange = jest.fn()

  const wrapper = shallow(<CreateForm handleBodyChange={handleBodyChange} />)

  // simulate click event
  wrapper.find('.createform__body').simulate(
    'change',
    {target: {name: 'test', value: '4'}}
  )

  // expect complete fn to have been called
  expect(handleBodyChange.mock.calls.length).toEqual(1)
  expect(handleBodyChange.mock.calls[0][0]).toEqual('4')
})
