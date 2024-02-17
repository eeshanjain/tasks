import App from '../src/components/App'
import React from 'react'
import TaskForm from '../src/components/TaskForm'
import TaskList from '../src/components/TaskList'
import renderer from 'react-test-renderer'

test('should render App', () => {
  const component = renderer.create(<App />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('should render TaskForm', () => {
  const component = renderer.create(<TaskForm addTask={jest.fn} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('should render TaskList', () => {
  const tasks = [
    {
      _id: '1',
      description: 'test description 1',
      done: false,
      title: 'test title 1',
    },
    {
      _id: '2',
      description: 'test description 2',
      done: true,
      title: 'test title 2'
    }
  ]
  const component = renderer.create(<TaskList tasks={tasks} editTask={jest.fn} deleteTask={jest.fn} markAsDone={jest.fn} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
