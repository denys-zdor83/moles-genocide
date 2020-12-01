import HoleList from './HoleList';
import styled from 'styled-components';

const HolesOfMoles = () => {
    return (
    <StyledWrapper className="game-container">
      <HoleList />
    </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
`

export default HolesOfMoles;
