export function getA11yText(el: HTMLElement): string {
  const role =
    el.getAttribute('role') ||
    el.tagName.toLowerCase()

  const label =
    el.getAttribute('aria-label') ||
    el.textContent?.trim() ||
    ''

  const checked =
    el.getAttribute('aria-checked') === 'true' ||
    (el as HTMLInputElement).checked

  const state = checked ? 'checked' : ''

  return [role, label, state].filter(Boolean).join('  ')
}