import styled from "styled-components";
import { DoItem } from "./DoItem";

const Wrap = styled.div`
  width: 100%;
  padding: 0 50px;
`;
const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DoList = ({ todotext, setToDoText }) => {
  return (
    <Wrap>
      <ListWrap>
        {todotext &&
          todotext.map((con) => (
            <DoItem
              toitem={con}
              todotext={todotext}
              setToDoText={setToDoText}
            />
          ))}
      </ListWrap>
    </Wrap>
  );
};
