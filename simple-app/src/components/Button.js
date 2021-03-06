import styled from 'styled-components';

export const ButtonContainer = styled.button`
 
position: relative;
padding: 1.6em 2.8em;
text-decoration: none;

&__canvas {
  --offset: 32px;
  
  position: absolute;
  top: calc(var(--offset) * -1);
  left: calc(var(--offset) * -1);
  width: calc(100% + var(--offset) * 2);
  height: calc(100% + var(--offset) * 2);
  transition: opacity 2s ease;
}

&__text {
  position: relative;
  color: white;
  font-weight: bold;
  letter-spacing: .02em;
  pointer-events: none;
}

&:hover &__canvas {
  opacity: .85;
  transition: opacity .2s ease;
}

&:active &__canvas {
  opacity: 1;
  transition: none;
}
`;