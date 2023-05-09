import parse from 'react-html-parser'

interface Props {
  content: string
}

export const HTMLTextBlock: React.FC<Props> = ({ content }) => <>{parse(content)}</>
