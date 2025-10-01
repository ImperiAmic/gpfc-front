import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Godzilla Poblenou Fan Club' inside a level 1 heading", () => {
      const expectedPageTitle = "Godzilla Poblenou Fan Club";

      render(<Header />);

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
        level: 1,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show an image with 'Perfil del cap i part del coll del Godzilla sobre rodona vermella' as alternative text", () => {
      const expectedAltText =
        "Perfil del cap i part del coll del Godzilla sobre rodona vermella";

      render(<Header />);

      const image = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(image).toBeInTheDocument();
    });
  });
});
