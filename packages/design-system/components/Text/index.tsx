import React from "react";
import { styled } from "styled-components"

interface ITextProps {
    tag: 'h1' | 'h2' | 'p'
    children: React.ReactNode
}

const StyledText = styled.span`
    font-family: sans-serif;
`;

export function Text({tag, children, ...props}: ITextProps){
    return(
        <StyledText as={tag} {...props}>
            {children}
        </StyledText>
    )
}