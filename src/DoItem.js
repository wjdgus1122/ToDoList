import {
  faCheck,
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "./style/Globalstyle";

const ListCheck = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  & .pen {
    color: lightgreen;
  }
  & .trash {
    color: lightgray;
  }
  & .checkwrap #check:checked {
    & .pen {
      display: none;
    }
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
    border-radius: 5px;
    margin-right: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 15px;
    }
  }
  & .check:checked ~ label {
    background-color: ${mainStyle.secondColor};
  }
  & .check:checked ~ span {
    font-style: oblique;
    text-decoration: line-through;
    color: lightgray;
  }
`;
const ListInput = styled.input`
  display: none;
`;
const ChangeInput = styled.input`
  all: unset;
  width: 600px;
  height: 25px;
  font-size: 20px;
  color: ${mainStyle.secondColor};
  padding: 5px;
  border-bottom: 1px solid lightgray;
`;
const ButtonWrap = styled.div`
  display: flex;
`;
const ListButton = styled.button`
  all: unset;
  font-size: 20px;
  margin-left: 30px;
  &:hover {
    color: ${mainStyle.pointColor};
  }
`;

export const DoItem = ({ toitem, todotext, setToDoText }) => {
  const [penedit, setPenEdit] = useState(false);
  const [newList, setNewList] = useState(toitem.text);
  const edithandle = () => {
    if (penedit == true) {
      const changeinput = todotext.map((con) => ({
        ...con,
        listtext: con.id === toitem.id ? newList : con.listtext,
      }));
      console.log(newList);
      setToDoText(changeinput);
      setPenEdit(false);
    } else {
      setPenEdit(true);
    }
  };
  const listchange = (e) => {
    setNewList(e.target.value);
  };
  return (
    <ListCheck>
      <TextWrap className="checkwrap">
        <ListInput type="checkbox" className="check" id={toitem.id} />
        <label for={toitem.id}>
          <FontAwesomeIcon icon={faCheck} />{" "}
        </label>
        {penedit ? (
          <ChangeInput type="text" valus={newList} onChange={listchange} />
        ) : (
          <span>{toitem.listtext}</span>
        )}
      </TextWrap>
      <ButtonWrap className="button">
        {penedit ? (
          <ListButton className="pen" onClick={edithandle}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </ListButton>
        ) : (
          <ListButton className="pen" onClick={edithandle}>
            <FontAwesomeIcon icon={faPen} />
          </ListButton>
        )}
        <ListButton className="trash">
          <FontAwesomeIcon icon={faTrashCan} />
        </ListButton>
      </ButtonWrap>
    </ListCheck>
  );
};
