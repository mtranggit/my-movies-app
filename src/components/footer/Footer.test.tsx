import Footer from "./Footer";
import {render, screen} from "@testing-library/react";

describe("Footer Component", () => {
  it("renders the Home link", () => {
    render(<Footer />);
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders all footer links", () => {
    render(<Footer />);
    const links = [
      {text: "Home", href: "/"},
      {text: "Terms and Conditions", href: "/terms"},
      {text: "Privacy Policy", href: "/privacy"},
      {text: "Collection Statement", href: "/collection"},
      {text: "Help", href: "/help"},
      {text: "Manage Account", href: "/account"},
    ];

    links.forEach(({text, href}) => {
      const linkElement = screen.getByText(text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", href);
    });
  });

  it("renders the copyright text with the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(`© ${currentYear} DEMO Streaming. All rights reserved.`);
    expect(copyrightText).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Footer />);
    const links = [
      {text: "Facebook", href: "https://facebook.com"},
      {text: "Twitter", href: "https://x.com"},
      {text: "Instagram", href: "https://instagram.com"},
    ];
    links.forEach(({text, href}) => {
      const linkElement = screen.getByText(text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", href);
    });
  });

  it("renders store links", () => {
    render(<Footer />);
    const links = [
      {text: "AppStore", href: "https://itunes.apple.com"},
      {text: "PlayStore", href: "https://play.google.com"},
      {text: "WindowStore", href: "https://apps.microsoft.com"},
    ];
    links.forEach(({text, href}) => {
      const linkElement = screen.getByText(text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", href);
    });
  });
});
