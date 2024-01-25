import { expect, test } from 'vitest'

async function callCalendar() {
  return fetch('http://localhost:3000/events').then(r => r.json())
}

test('Calendar returns calendar events', async () => {
  await expect(callCalendar()).resolves.toEqual([ { id: expect.any(Number), start: expect.any(String), title: expect.any(String) }])
})