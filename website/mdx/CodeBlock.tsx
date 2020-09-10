import theme from "prism-react-renderer/themes/vsDark"
import React, { useState } from "react"
import { Box, Link, Row, mixins } from '@universe-ui/core'
import styled from 'styled-components'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import scope from "./react-live-scope"

export const liveEditorStyle: React.CSSProperties = {
  fontSize: 14,
  overflowX: "auto",
  fontFamily: "Fira Code, SF Mono, Menlo, monospace",
  fontVariantLigatures: "common-ligatures",
  borderRadius: '4px'
}

export const liveErrorStyle: React.CSSProperties = {
  fontFamily: "Fira Code, SF Mono, Menlo, monospace",
  fontSize: 14,
  padding: "1em",
  overflowX: "auto",
  color: "white",
  backgroundColor: "red",
}

export const CodeBlock = (props) => {
  const { className, live = false, noInline, render, children, ...rest } = props
  const [code, setEditorCode] = useState(children.trim())
  const [showCode, setShowCode] = useState(false)

  const language = className?.replace(/language-/, "")

  const liveProviderProps = {
    theme,
    language,
    code,
    transformCode: (code: string) => code.startsWith('<') ? `<>${code}</>` : code,
    scope,
    noInline
  }

  if (render) {
    return (
      <LiveProvider {...liveProviderProps}>
        <MyLivePreview padding='4' border='T1 L1 R1' corner='T4' {...rest} />
      </LiveProvider>
    )
  }

  if (!live) {
    return (
      <LiveProvider disabled {...liveProviderProps}>
        <LiveEditor style={liveEditorStyle} />
      </LiveProvider>
    )
  }

  const onChange = (newCode) => setEditorCode(newCode.trim())

  const toggleCode = () => setShowCode(!showCode)

  const previewCorner = showCode ? '' : 'B4'
  const previewTitle = showCode ? 'Hide code' : 'Show editable code'

  return (
    <LiveProvider {...liveProviderProps}>
      <MyLivePreview padding='4' border='T1 L1 R1' corner='T4' {...rest} />
      <Row padding='1' border='1' justify='center' corner={previewCorner}>
        <Link onClick={toggleCode}>{previewTitle}</Link>
      </Row>
      {showCode && <Box padding='4' border='1' corner='B4'>
        <LiveEditor onChange={onChange} style={liveEditorStyle} />
      </Box>}
      <LiveError style={liveErrorStyle} />
    </LiveProvider>
  )
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
}

const MyLivePreview = styled(LivePreview)`
  ${mixins.clear};
  ${mixins.container};
`
