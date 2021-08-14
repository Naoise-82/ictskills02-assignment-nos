import React from "react";
import GameListHeader from "../components/gameListHeader";
import { MemoryRouter } from "react-router";

export default {
    title: "Home Page/Header",
    component: GameListHeader,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
      ],
};

export const Basic = () => <GameListHeader title={'Browse All Games'} />;

Basic.storyName = "Default";