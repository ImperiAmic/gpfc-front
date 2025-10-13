import { BrowserRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Godzilla Poblenou Fan Club' inside a level 1 heading", () => {
      const expectedPageTitle = "Godzilla Poblenou Fan Club";

      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
