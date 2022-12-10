import styled from 'styled-components'

export const MainWrap = styled.div`
  width: 1200px;
  height: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`
export const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: #bae5f4;
  padding: 10px 20px;
  p {
    font-size: 20px;
    font-weight: 700;
  }
`
export const BodyWrap = styled.div`
  width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 25px;
  p {
    margin: 20px 0;
    color: #ccc;
    font-size: 18px;
    font-weight: 700;
  }
`
