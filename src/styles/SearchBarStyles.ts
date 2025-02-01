import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`

export const SearchInput = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`
