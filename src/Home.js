import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
`;
const TodoWrap = styled.div`
  width: 70%;
  height: 80%;
  background-color: white;
`;
const TitleWrap = styled.div`
  background-color: salmon;
  padding: 0 50px;
`;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 900;
  color: beige;
  padding-top: 70px;
  padding-bottom: 20px;
`;
const Date = styled.h4`
  font-size: 25px;
  font-weight: 900;
  color: beige;
  padding-bottom: 20px;
`;
const ListWrap = styled.form`
  padding: 50px 50px 0 50px;
`;
const List = styled.div`
  width: 100%;
  height: 50px;
`;
const Text = styled.input`
  all: unset;
  width: 90%;
  height: 100%;
  border-bottom: 1px solid salmon;
`;
const Btn = styled.button`
  all: unset;
  font-size: 20px;
  font-weight: 500;
  color: salmon;
`;

export const Home = () => {
  const [tdset, setTdset] = useState(``);
  useEffect(() => {
    const homesetting = () => {
      const date = new Date();
      const tdyear = String(date.getYear());
      const tdmonth = String(date.getMonth());
      const tddate = String(date.getDate());
      setTdset(`${tdyear}.${tdmonth}.${tddate}`);
    };
    homesetting();
  }, []);

  return (
    <Wrap>
      <TodoWrap>
        <TitleWrap>
          <Title>To_Do_List</Title>
          <Date>{tdset}</Date>
        </TitleWrap>
        <ListWrap>
          <List>
            <Text placehorder="내용을 입력하세요."></Text>
            <Btn>
              <FontAwesomeIcon icon={faPlus} />
            </Btn>
          </List>
        </ListWrap>
      </TodoWrap>
    </Wrap>
  );
};
