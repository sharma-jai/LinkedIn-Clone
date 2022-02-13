import styled from "styled-components";
import { parse, evaluate, ComputeEngine } from "@cortex-js/compute-engine";

const Vat = 20;
const Invoice = 20;
const Exchange = 2;

const expr = ["Multiply", ["Add", Vat, Invoice], Exchange];

const ce = new ComputeEngine();
console.log(expr);

console.log(ce.N(expr));

const Home = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/assets/images/linkedin.svg" alt="Linkedin"></img>
        </a>
        <div>
          <Join href="/">Join Us</Join>
          <SignIn href="/login">Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAADCLr3coQt8AQiyj4giyWxfjsg.svg" />
        </Hero>
      </Section>
      <Block>
        <Search>
          Search for a job{" "}
          <img src="/assets/images/rightArrow.svg" alt="Right Arrow" />
        </Search>
        <Search>
          Find a person you know{" "}
          <img src="/assets/images/rightArrow.svg" alt="Right Arrow" />
        </Search>
        <Search>
          Learn a new skill{" "}
          <img src="/assets/images/rightArrow.svg" alt="Right Arrow" />
        </Search>
      </Block>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;
  & > a {
    width: 100px;
    height: 40px;
  }
`;

const Join = styled.a`
  font-size: 16px;
  color: grey;
  padding: 10px 15px;
  text-decoration: none;
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
    transition-duration: 167ms;
    transition-property: background-color, box-shadow, color, -webkit-box-shadow;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    border-radius: 4px;
  }
`;

const SignIn = styled.a`
  font-size: 16px;
  color: #0a66c2;
  padding: 10px 15px;
  text-decoration: none;
  border: 1px solid #0a66c2;
  border-radius: 20px;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    cursor: pointer;
    transition-duration: 167ms;
    transition-property: background-color, box-shadow, color, -webkit-box-shadow;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    border-radius: 20px;
  }
`;

const Section = styled.section`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;
`;

const Hero = styled.div`
  padding-top: 40px;
  h1 {
    font-size: 56px;
    max-width: 70%;
    font-weight: 100;
    color: rgba(143, 88, 73, 1);
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    top: 0px;
    right: -200px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Block = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0px 16px;
  display: block;
`;

const Search = styled.a`
  color: #000;
  display: block;
  height: 65px;
  width: 350px;
  background: transparent;
  line-height: 65px;
  margin: 20px 0px;
  padding: 0px 20px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  img {
    position: relative;
    top: 20px;
    float: right;
  }
  &:hover {
    box-shadow: 0px 4px 12px rgb(0 0 0 / 30%);
  }
`;
