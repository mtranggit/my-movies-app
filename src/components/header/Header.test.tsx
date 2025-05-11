import Header from "./Header";
import {render, screen} from "@testing-library/react";

describe("Header Component", () => {
  it("renders the header with the correct logo text", () => {
    render(<Header />);
    const logoText = screen.getByText(/DEMO Streaming/i);
    expect(logoText).toBeInTheDocument();
  });

  it("renders the login link", () => {
    render(<Header />);
    const loginLink = screen.getByRole("link", {name: /Log in/i});
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");
  });

  it("renders the free trial link", () => {
    render(<Header />);
    const freeTrialLink = screen.getByRole("link", {name: /Start your free trial/i});
    expect(freeTrialLink).toBeInTheDocument();
    expect(freeTrialLink).toHaveAttribute("href", "/free-trial");
  });
});
