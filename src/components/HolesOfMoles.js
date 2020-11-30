import GetMoles from './GetMoles';
import styled from 'styled-components';

const HolesOfMoles = () => {
    return (
    <StyledWrapper>
        <div className="game-container">
            <GetMoles />
        </div>
    </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
  height: 100%;
  .game-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;
  }
`

export default HolesOfMoles;
