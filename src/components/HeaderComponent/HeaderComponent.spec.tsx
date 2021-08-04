import { render, RenderResult } from "@testing-library/react";

import { HeaderComponent } from "./HeaderComponent";

describe("Tests for HeaderComponent", () => {
    let renderResult: RenderResult;

    beforeEach(() => {
        renderResult = renderHeaderComponent();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("HeaderComponent should be rendered", () => {
        // Arrange
        const { baseElement } = renderResult;

        // Act

        // Assert
        expect(baseElement).toBeTruthy();
    });
});

function renderHeaderComponent(): RenderResult {
    return render(<HeaderComponent />);
}
