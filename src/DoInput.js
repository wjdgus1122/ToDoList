import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ListWrap = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const List = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid salmon;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
`;
const Text = styled.input`
  all: unset;
  width: 95%;
  height: 100%;
`;
const Btn = styled.button`
  all: unset;
  font-size: 20px;
  font-weight: 500;
  color: salmon;
`;

export const DoInput = ({ todotext, setToDoText }) => {
  const [listtext, setListText] = useState();
  const inputRef = useRef(null);
  const inputchange = (e) => {
    setListText(e.target.value);
  };
  const buttonhandle = () => {
    const dolist = todotext.concat({
      id: todotext.length,
      listtext,
    });
    setToDoText(dolist);
    setListText(``);
    inputRef.current.focus();
  };
  useEffect(() => {
    console.log(todotext);
  }, [todotext]);
  return (
    <>
      <ListWrap>
        <List>
          <Text
            type="text"
            name="todolist"
            value={listtext}
            ref={inputRef}
            onChange={inputchange}
            placeholder="오늘 할 일을 입력하세요."
          ></Text>
          <Btn type="submit" onClick={buttonhandle}>
            <FontAwesomeIcon icon={faPlus} />
          </Btn>
        </List>
      </ListWrap>
    </>
  );
};

DoInput.propTypes = {
  todotext: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ),
  setToDoText: PropTypes.func,
};
