import {programTitleMap} from "../../data/movies";
import {useFetch} from "../../hooks/useFetch";
import MainContent from "./MainContent";
import type {Mock} from "vitest";
import {vi} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";

vi.mock("../../hooks/useFetch");

describe("MainContent", () => {
  const mockUseFetch = useFetch as Mock;

  it("renders loading state", () => {
    mockUseFetch.mockReturnValue({data: null, loading: true, error: null});
    render(<MainContent />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    mockUseFetch.mockReturnValue({data: null, loading: false, error: true});
    render(<MainContent />);
    expect(screen.getByText("Oops, something went wrong...")).toBeInTheDocument();
  });

  it("renders program list when no filter is selected", () => {
    mockUseFetch.mockReturnValue({
      data: {entries: []},
      loading: false,
      error: null,
    });
    render(<MainContent />);
    expect(screen.getByText("Popular Titles")).toBeInTheDocument();

    Object.values(programTitleMap).forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });

  it("renders filtered movie list when a filter is selected", () => {
    const mockMovies = [
      {
        title: "Movie A",
        programType: "movie",
        images: {
          "Poster Art": {
            url: "",
          },
        },
        releaseYear: 2015,
      },
      {
        title: "Movie B",
        programType: "movie",
        images: {
          "Poster Art": {
            url: "",
          },
        },
        releaseYear: 2020,
      },
      {
        title: "Show A",
        programType: "series",
        images: {
          "Poster Art": {
            url: "",
          },
        },
        releaseYear: 2018,
      },
    ];
    mockUseFetch.mockReturnValue({
      data: {entries: mockMovies},
      loading: false,
      error: null,
    });

    render(<MainContent />);
    const movieFilterButton = screen.getByText("Movies");
    fireEvent.click(movieFilterButton);

    expect(screen.getByText("Popular Movies")).toBeInTheDocument();
    expect(screen.getByText("Movie A")).toBeInTheDocument();
    expect(screen.getByText("Movie B")).toBeInTheDocument();
    expect(screen.queryByText("Show A")).not.toBeInTheDocument();
  });

  it("filters movies by release year >= 2010", () => {
    const mockMovies = [
      {
        title: "Old Movie",
        programType: "movie",
        images: {
          "Poster Art": {
            url: "",
          },
        },
        releaseYear: 2005,
      },
      {
        title: "New Movie",
        programType: "movie",
        images: {
          "Poster Art": {
            url: "",
          },
        },
        releaseYear: 2015,
      },
    ];
    mockUseFetch.mockReturnValue({
      data: {entries: mockMovies},
      loading: false,
      error: null,
    });

    render(<MainContent />);
    const movieFilterButton = screen.getByText("Movies");
    fireEvent.click(movieFilterButton);

    expect(screen.getByText("New Movie")).toBeInTheDocument();
    expect(screen.queryByText("Old Movie")).not.toBeInTheDocument();
  });
});
