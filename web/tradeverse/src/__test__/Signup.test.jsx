import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";

// Manual mock for AuthData
jest.mock("../auth/AuthWrapper", () => ({
  AuthData: () => ({
    register: jest.fn(async ({ email, username, password, name, tag }) => {
      // Simulate success or failure based on inputs
      if (email && username && password && name && tag !== -1) {
        return { isSuccessful: true };
      }
      return { isSuccessful: false, message: "Error: Invalid data" };
    }),
  }),
}));

describe("SignUp Component", () => {
  const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };

  test("renders SignUp component with step 1 inputs", () => {
    renderWithRouter(<SignUp />);
    expect(screen.getByText(/Join Tradeverse community/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your full name/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your username/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your email/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your password/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
  });

  test("shows error when fields are empty and Next button is clicked", async () => {
    renderWithRouter(<SignUp />);
    fireEvent.click(screen.getByText(/Next/i));
    expect(
      await screen.findByText(/All fields are required/i)
    ).toBeInTheDocument();
  });

  test("navigates to step 2 on valid input", async () => {
    renderWithRouter(<SignUp />);
    fireEvent.change(screen.getByPlaceholderText(/Enter your full name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your username/i), {
      target: { value: "johndoe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText(/Next/i));
    expect(
      await screen.findByText(/Select Your User Type/i)
    ).toBeInTheDocument();
  });

  test("shows error when no user type is selected", async () => {
    renderWithRouter(<SignUp />);
    // Fill step 1 and proceed to step 2
    fireEvent.change(screen.getByPlaceholderText(/Enter your full name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your username/i), {
      target: { value: "johndoe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText(/Next/i));

    // Do not select a user type
    fireEvent.click(screen.getByText(/Submit/i));
    expect(
      await screen.findByText(/Please select a user type/i)
    ).toBeInTheDocument();
  });

  test("completes registration successfully", async () => {
    renderWithRouter(<SignUp />);
    // Fill step 1
    fireEvent.change(screen.getByPlaceholderText(/Enter your full name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your username/i), {
      target: { value: "johndoe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText(/Next/i));

    // Fill step 2
    expect(
      screen.getByRole("button", { name: /Beginner/i })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Submit/i));
  });

  // test("shows error message if registration fails", async () => {
  //   renderWithRouter(<SignUp />);
  //   // Fill step 1 with invalid email
  //   fireEvent.change(screen.getByPlaceholderText(/Enter your full name/i), {
  //     target: { value: "John Doe" },
  //   });
  //   fireEvent.change(screen.getByPlaceholderText(/Enter your username/i), {
  //     target: { value: "johndoe" },
  //   });
  //   fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
  //     target: { value: "" }, // Invalid email
  //   });
  //   fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
  //     target: { value: "password123" },
  //   });
  //   fireEvent.click(screen.getByText(/Next/i));

  //   fireEvent.click(screen.getByText((content, element) => {
  //     return element.textContent === "Submit";
  //   }));

  //   // Fill step 2 and submit
  //   fireEvent.click(screen.getByText(/Submit/i));

  //   // Mock returns failure for invalid input
  //   expect(await screen.findByText(/Error: Invalid data/i)).toBeInTheDocument();
  // });
});
