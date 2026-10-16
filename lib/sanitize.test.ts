import { expect, it } from 'vitest'
import { getExportTextColor } from './sanitize'

it('keeps artwork legible on light, dark and shorthand backgrounds', () => {
  expect(getExportTextColor('#f7f4eb')).toBe('#1f2937')
  expect(getExportTextColor('#fff')).toBe('#1f2937')
  expect(getExportTextColor('#000')).toBe('#ffffff')
  expect(getExportTextColor('#1a1a1a')).toBe('#ffffff')
  expect(getExportTextColor('invalid')).toBe('#1f2937')
})
