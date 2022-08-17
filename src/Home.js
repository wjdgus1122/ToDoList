import { useEffect, useState } from "react";
import styled from "styled-components";
import { DoInput } from "./DoInput";

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
`;
const TitleWrap = styled.div`
  background-color: salmon;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 900;
  color: beige;
  padding-top: 70px;
  padding-bottom: 20px;
`;
const TDate = styled.h4`
  font-size: 25px;
  font-weight: 900;
  color: beige;
  padding-bottom: 20px;
`;

export const Home = () => {
  const [tdset, setTdset] = useState(``);

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
        <DoInput />
      </TodoWrap>
    </Wrap>
  );
};
