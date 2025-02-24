import styled from 'styled-components';
import { colorText } from '/imports/ui/stylesheets/styled-components/palette';

export const ChatMessage = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row;
  flex-direction: column;
  color: ${colorText};
  word-break: break-word;
  ${({ emphasizedMessage }) =>
    emphasizedMessage &&
    `
    font-weight: bold;
  `}

  & img {
    max-width: 100%;
    max-height: 100%;
  }

  & p {
    margin: 0;
  }
`;

export default {
  ChatMessage,
};
