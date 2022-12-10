import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  border-radius: 50px;
`
export const Pages = styled(Wrapper)`
  height: 280px;
  background-color: #e2d2fe;
  padding: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
}
`
export const PageCard = styled.div`
  width: 180px;
  height: 100%;
  position: relative;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  div {
    width: 100%;
    height: 50%;
    background-color: #e2d2fe3b;
    padding: 40px 20px;
    p {
      color: #000;
      font-size: 20px;
      font-weight: 700;
    }
  }
  span {
    color: #000;
    font-size: 15px;
    font-weight: 400;
  }
`

export const Contents = styled(Wrapper)`
  height: 180px;
  background-color: #fde1ab;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`
export const ContentCard = styled.div`
  width: 510px;
  padding: 20px;
  position: relative;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  background-color: #fff;
`

export const Sites = styled(Wrapper)`
  height: 500px;
  background-color: #ccf0bf;
`
