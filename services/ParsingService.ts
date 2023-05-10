import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import { marked } from 'marked'

export const parseStringToSanitizedMarkdown = (content: string): string => {
  const mockWindow = new JSDOM('').window
  const DOMPurify = createDOMPurify(mockWindow)

  marked.use({ silent: true })
  const sanitizedString = DOMPurify.sanitize(marked.parse(content))

  return sanitizedString
}
