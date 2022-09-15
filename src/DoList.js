import { faCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "./style/Globalstyle";

const Wrap = styled.div`
  width: 100%;
  padding: 0 50px;
`;
const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListCheck = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .pen {
    color: lightgreen;
  }
  & .trash {
    color: lightgray;
  }
`;
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${mainStyle.mainColor};
  & label {
    width: 20px;
    height: 20px;
    border: 1px solid ${mainStyle.secondColor};
    margin-right: 20px;
    color: white;
  }
  & #check:checked label {
    background-color: ${mainStyle.secondColor};
  }
`;
const ListInput = styled.input`
  display: none;
`;
const ButtonWrap = styled.div`
  display: flex;
`;
const ListButton = styled.button`
  font-size: 20px;
  margin-left: 20px;
  &:hover {
    color: ${mainStyle.pointColor};
  }
`;

export const DoList = ({ todotext, setToDoText }) => {
  const listadd = () => {};
  window.addEventListener("submit", listadd);
  return (
    <Wrap>
      <ListWrap>
        {todotext &&
          todotext.map((con) => (
            <ListCheck>
              <TextWrap>
                <ListInput type="checkbox" id="check" />
                <label for="check">
                  <FontAwesomeIcon icon={faCheck} />{" "}
                </label>
                <span>{con.listtext}</span>
              </TextWrap>
              <ButtonWrap>
                <ListButton className="pen">
                  <FontAwesomeIcon icon={faPen} />
                </ListButton>
                <ListButton className="trash">
                  <FontAwesomeIcon icon={faTrashCan} />
                </ListButton>
              </ButtonWrap>
            </ListCheck>
          ))}
      </ListWrap>
    </Wrap>
  );
};
