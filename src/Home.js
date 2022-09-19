import { useEffect, useState } from "react";
import styled from "styled-components";
import { DoInput } from "./DoInput";
import { DoList } from "./DoList";
import { mainStyle } from "./style/Globalstyle";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
`;
const TodoWrap = styled.div`
  width: 50%;
  height: 80%;
  background-color: white;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
const TitleWrap = styled.div`
  background-color: ${mainStyle.mainColor};
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 900;
  color: ${mainStyle.thirdColor};
  padding-top: 70px;
  padding-bottom: 20px;
  @media screen and (max-width: 500px) {
    padding-top: 40px;
  }
`;
const TDate = styled.h4`
  font-size: 25px;
  font-weight: 900;
  color: ${mainStyle.thirdColor};
  padding-bottom: 20px;
`;

export const Home = () => {
  const [tdset, setTdset] = useState(``);
  const [todotext, setToDoText] = useState([]);

  useEffect(() => {
    const homesetting = () => {
      const dateset = new Date();
      const tdyear = String(dateset.getFullYear());
      const tdmonth = String(dateset.getMonth() + 1);
      const tddate = String(dateset.getDate());
      setTdset(`${tdyear}.${tdmonth}.${tddate}`);
    };
    homesetting();
  }, []);

  return (
    <Wrap>
      <TodoWrap>
        <TitleWrap>
          <Title>To_Do_List</Title>
          <TDate>{tdset}</TDate>
        </TitleWrap>
        <DoInput todotext={todotext} setToDoText={setToDoText} />
        <DoList todotext={todotext} setToDoText={setToDoText} />
      </TodoWrap>
    </Wrap>
  );
};
