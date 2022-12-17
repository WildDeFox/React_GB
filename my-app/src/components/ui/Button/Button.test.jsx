import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Button from './Button'

describe('Button', () => {
  it('render component Button', () => {
    render(<Button>Change name</Button>)
  })

  it('render with snapshot', () => {
    const {asFragment} = render(<Button>Change name</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('render component with text name button', () => {
    render(<Button>Change name</Button>) 
    expect(screen.getByText(/Change name/)).toBeInTheDocument()
  })

  it('render multiply component', () => {
    render(
      <>
        <Button>Click</Button>
        <Button>Delete</Button>
      </>
    )
    expect(screen.getAllByRole('button').length).toBe(2)
  })

  it('button is disable', () => {
    render(<Button disabled>Delete</Button>)
    expect(screen.getByText('Delete')).toBeDisabled()
  })

  it('button have style color green', () => {
    render(<Button>Click</Button>)
    expect(screen.getByText('Click')).toHaveStyle({color: 'green'})
  })

  it('button click with userEvent', async () => {
    const mockHandler = jest.fn()
    render(<Button click={mockHandler}>Click</Button>)
    await userEvent.click(screen.getByText('Click'))
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  it('text example', async () => {
    const onChange = jest.fn()
    render(<input type="checkbox" onChange={onChange} />)

    const checkbox = screen.getByRole('checkbox')
    await userEvent.dblClick(checkbox)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(checkbox).not.toBeChecked()
  })
})