import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import UnicodeTextTool from './UnicodeTextTool'

afterEach(() => { cleanup(); vi.restoreAllMocks() })

function clipboard(writeText: ReturnType<typeof vi.fn>) {
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } })
}

describe('Unicode clipboard interaction', () => {
  it('copies generated symbols, then reports success', async () => {
    const write = vi.fn().mockResolvedValue(undefined)
    clipboard(write)
    render(<UnicodeTextTool />)
    fireEvent.change(screen.getByLabelText('Your text'), { target: { value: 'Hi 中文' } })
    fireEvent.click(screen.getByRole('button', { name: 'Copy Old English', exact: true }))
    await waitFor(() => expect(screen.getByRole('status').textContent).toContain('copied'))
    expect(write).toHaveBeenCalledWith('ℌ𝔦 中文')
  })
  it('selects the result for manual copying when clipboard access is denied', async () => {
    clipboard(vi.fn().mockRejectedValue(new Error('Permission denied')))
    vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<UnicodeTextTool />)
    fireEvent.click(screen.getByRole('button', { name: 'Copy Bold Old English' }))
    await waitFor(() => expect(screen.getByRole('status').textContent).toContain('Copy was blocked'))
    const output = screen.getByRole('textbox', { name: 'Bold Old English result' }) as HTMLTextAreaElement
    expect(document.activeElement).toBe(output)
    expect(output.selectionEnd - output.selectionStart).toBe(output.value.length)
  })
  it('does not report an old request as success after the input changes', async () => {
    let resolve!: () => void
    clipboard(vi.fn(() => new Promise<void>(done => { resolve = done })))
    render(<UnicodeTextTool />)
    fireEvent.click(screen.getByRole('button', { name: 'Copy Old English', exact: true }))
    fireEvent.change(screen.getByLabelText('Your text'), { target: { value: 'New text' } })
    await act(async () => resolve())
    expect(screen.getByRole('status').textContent).toBe('')
  })
  it('disables copying whitespace-only input', () => {
    render(<UnicodeTextTool />)
    fireEvent.change(screen.getByLabelText('Your text'), { target: { value: '  \n' } })
    expect((screen.getByRole('button', { name: 'Copy Old English', exact: true }) as HTMLButtonElement).disabled).toBe(true)
  })
})
