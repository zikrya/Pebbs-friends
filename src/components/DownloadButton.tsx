import React from 'react'
import styled from 'styled-components'

type DownloadButtonProps = {
  handleDownload: () => void
  disabled: boolean
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ handleDownload, disabled }) => {
  return (
    <DownloadContainer>
      <DownloadBtn onClick={handleDownload} disabled={disabled}>
        Download Selected
      </DownloadBtn>
    </DownloadContainer>
  )
}

export default DownloadButton

const DownloadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`

const DownloadBtn = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  background: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${({ disabled }) => (disabled ? '#ccc' : '#0056b3')};
  }
`
