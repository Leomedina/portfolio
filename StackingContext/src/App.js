import React from "react";
import styled from "styled-components";
import "@reach/tooltip/styles.css";

import Header from "./Header";
import PageContent from "./PageContent";
import GlobalStyles from "./GlobalStyles";
import HelpButton from "./HelpButton";

export default function App() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageContent />
      <GlobalStyles />
      <HelpButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 150vh;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
`;
