import React from "react";
import { Wrapper, Item, ItemName, Slash } from "./breadcrumbStyled";

export default function Breadcrumb({ links }) {
  return (
    <Wrapper>
      {links.map((link, idx) => (
        <Item key={idx} onClick={link.onClick}>
          {idx === 0 ? <img src={link.icon} alt="Link Icon" /> : null}
          <ItemName>{link.name}</ItemName>
          {idx !== links.length - 1 ? <Slash>/</Slash> : null}
        </Item>
      ))}
    </Wrapper>
  );
}
