import { render, screen } from "@testing-library/react";
import Navigator from "./Navigator";

describe("Given the Navigator component", () => {
  describe("When it renders", () => {
    test("Then it should show an image with 'Icona d'una casa' as an alternative text", () => {
      const expectedAltText = "Icona d'una casa";

      render(<Navigator />);

      const icon = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(icon).toBeInTheDocument();
    });

    test("Then it should show an image with 'Icona del cap d'un drac' as an alternative text", () => {
      const expectedAltText = "Icona del cap d'un drac";

      render(<Navigator />);

      const icon = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(icon).toBeInTheDocument();
    });

    test("Then it should show an image with 'Icona del símbol de sumar' as an alternative text", () => {
      const expectedAltText = "Icona del símbol de sumar";

      render(<Navigator />);

      const icon = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(icon).toBeInTheDocument();
    });

    test("Then it should show an image with 'Icona de dues espases creuades' as an alternative text", () => {
      const expectedAltText = "Icona de dues espases creuades";

      render(<Navigator />);

      const icon = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(icon).toBeInTheDocument();
    });

    test("Then it should show an image with 'Icona d'un formulari' as an alternative text", () => {
      const expectedAltText = "Icona d'un formulari";

      render(<Navigator />);

      const icon = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(icon).toBeInTheDocument();
    });

    test("Then it should show an image with 'Icona d'una bafarada rectangular' as an alternative text", () => {
      const expectedAltText = "Icona d'una bafarada rectangular";

      render(<Navigator />);

      const icon = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(icon).toBeInTheDocument();
    });
  });
});
