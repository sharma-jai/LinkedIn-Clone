import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <ContainerBox>
        <h2>Sign in</h2>
        <p>Stay updated on your professional world</p>
        <div>
          <input placeholder="Email or Phone number"></input>
          <input placeholder="Password"></input>
        </div>
        <a>Forgot Password ?</a>
        <ButtonContainer>
          <Button>Sign in</Button>
        </ButtonContainer>
        <Border></Border>
      </ContainerBox>
    </Container>
  );
};
export default Login;

const Container = styled.div``;

const ContainerBox = styled.div`
  height: 55vh;
  width: 34ch;
  margin: auto;
  background: #fff;
  position: relative;
  top: 7rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  padding: 30px;
  h2 {
    font-size: 26px;
    font-style: normal;
  }
  p {
    margin-top: 5px;
  }
  div {
    margin-top: 2rem;

    input {
      border: 1px solid grey;
      width: -webkit-fill-available;
      padding: 1rem;
      border-radius: 7px;
      font-size: 16px;
      margin: 10px 0px;
    }
  }
  a {
    color: #006097;
    margin-top: 6px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem !important;
`;
const Button = styled.a`
  background: #006097;
  color: #fff !important;
  width: 100%;
  padding: 1rem;
  border-radius: 50px;
  flex: 1;
  text-align: center;
`;

const Border = styled.div`
  border-bottom: 1px solid lightgray;
`;
