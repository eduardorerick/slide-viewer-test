/* eslint-disable testing-library/prefer-screen-queries */
import {
  cleanup,
  fireEvent,
  render,
} from "@testing-library/react";
import { slides } from "./App";
import { SlideViewer } from "./SlideViewer";

afterEach(cleanup);

it("Deve começar com o primeiro item do slide", () => {
  const view = render(<SlideViewer slides={slides} />);

  expect(view.getByText(slides[0].title)).toBeTruthy();
});

it("Deve ir para o proximo slide ao apertar o botão próximo", () => {
  const view = render(<SlideViewer slides={slides} />);

  fireEvent.click(view.getByTestId("next"));
  expect(view.getByText(slides[1].title)).toBeTruthy();
});
it("Deve voltar para o slide anterior ao apertar o botão anterior", () => {
  const view = render(<SlideViewer slides={slides} />);

  fireEvent.click(view.getByTestId("next"));
  expect(view.getByText(slides[1].title)).toBeTruthy();
  fireEvent.click(view.getByTestId("back"));
  expect(view.getByText(slides[0].title)).toBeTruthy();
});

it("Botão anterior deve estar desabilitado se for primeiro slide", () => {
  const view = render(<SlideViewer slides={slides} />);

  expect(view.getByTestId("back")).toBeDisabled();
});
it("Botão próximo deve estar desabilitado se for ultimo slide", () => {
  const view = render(<SlideViewer slides={slides} />);
  fireEvent.click(view.getByTestId("next"));
  fireEvent.click(view.getByTestId("next"));
  fireEvent.click(view.getByTestId("next"));
  fireEvent.click(view.getByTestId("next"));
  fireEvent.click(view.getByTestId("next"));
  expect(view.getByText(slides[5].title)).toBeTruthy();
  expect(view.getByTestId("next")).toBeDisabled();
});
