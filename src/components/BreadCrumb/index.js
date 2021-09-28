import React from 'react';
import {Link} from "react-router-dom";

import {Wrapper, Content, StyledLink} from "./BreadCrumb.styles";

const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <StyledLink to ="/">
                <span>Home</span>
            </StyledLink>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

export default BreadCrumb;