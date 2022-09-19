import styled from "styled-components";
import { DoItem } from "./DoItem";

const Wrap = styled.div`
  width: 100%;
  padding: 0 50px;
  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
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
          todotext.map((con) => {
            if (con.delete) return null;
            return (
              <DoItem
                toitem={con}
                todotext={todotext}
                setToDoText={setToDoText}
              />
            );
          })}
      </ListWrap>
    </Wrap>
  );
};
