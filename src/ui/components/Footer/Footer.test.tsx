import { BrowserRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given the Footer component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Godzilla Poblenou Fan Club' as a text", () => {
      const expectedText = /godzilla poblenou fan club/i;

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    test("Then it should show a 'CC BY-NC-SA 4.0' link", () => {
      const expectedLink = "CC BY-NC-SA 4.0";

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );

      const link = screen.getByRole("link", {
        name: expectedLink,
      });

      expect(link).toBeInTheDocument();
    });

    test("Then it should show an 'Imperi Amic' link", () => {
      const expectedLink = /imperi amic/i;

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );

      const link = screen.getByRole("link", {
        name: expectedLink,
      });

      expect(link).toBeInTheDocument();
    });

    test("Then it should show current year", () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const expectedYear = currentYear.toString();

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );

      const year = screen.getByText(expectedYear);

      expect(year).toBeInTheDocument();
    });
  });
});
