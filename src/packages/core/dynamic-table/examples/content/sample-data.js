// @flow
/* sample-data.js */
import React from "react";
import Avatar from "@atlaskit/avatar";
import DropdownMenu, {
  DropdownItemGroup,
  DropdownItem
} from "@atlaskit/dropdown-menu";
import styled from "styled-components";
import presidents from "./presidents.json";
import lorem from "./lorem.json";
import { flights } from "./bs";

function createKey(input) {
  return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
}

function getRandomString() {
  return `${lorem[Math.floor(Math.random() * lorem.length)]}`;
}

const NameWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  margin-right: 8px;
`;

export const caption = "List of US Presidents";

export const createHead = (withWidth: boolean) => {
  return {
    cells: [
      {
        key: "flight",
        content: "Flight",
        isSortable: true,
        width: withWidth ? 10 : undefined
      },
      {
        key: "carrier",
        content: "Carrier",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 15 : undefined
      },
      {
        key: "destination",
        content: "Destination",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 30 : undefined
      },
      {
        key: "departure",
        content: "Departure",
        shouldTruncate: true
      },
      {
        key: "status",
        content: "Status",
        shouldTruncate: true
      }
    ]
  };
};

export const head = createHead(true);

export const rows = flights.map((flight, index) => ({
  key: `row-${index}-${flight[0]}`,
  cells: [
    {
      key: createKey(flight[0]),
      content: (
        <NameWrapper>
          <a href="https://atlassian.design">{flight[0]}</a>
        </NameWrapper>
      )
    },
    {
      key: createKey(flight[1]),
      content: flight[1]
    },
    {
      key: flight[2],
      content: flight[2]
    },
    {
      key: flight[3],
      content: flight[3]
    },
    {
      key: flight[4],
      content: flight[4]
    }
  ]
}));
