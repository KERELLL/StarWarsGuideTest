import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import appReducer from "@redux/appSlice";
import { setTheme } from "@redux/appSlice";

describe("Theme Reducer", () => {
  it("Should set the theme to 'dark' when the action sets it to 'dark'", async () => {
    expect(appReducer({ theme: "light" }, setTheme("dark"))).toEqual({
      theme: "dark",
    });
  });
  it("Should set the theme to 'light' when the action sets it to 'light'", async () => {
    expect(appReducer({ theme: "dark" }, setTheme("light"))).toEqual({
      theme: "light",
    });
  });
});
