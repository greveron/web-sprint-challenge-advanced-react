import React from "react";
import { render, getByLabelText, fireEvent, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";



// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
const {getByText} = render(<CheckoutForm/>)

const header =getByText(/checkout form/i)
expect(header).toBeInTheDocument()
    
});

test("form shows success message on submit with form details", () => {
const { getByLabelText, getByText, getByTestId, findByLabelText, findAllByAltText } = render (< CheckoutForm />);
const firstName = getByLabelText(/first name:/i);
const lastName = getByLabelText(/last name:/i);
const address = getByLabelText(/address:/i);
const city = getByLabelText(/city:/i);
const state = getByLabelText(/state:/i);
const zip = getByLabelText(/zip:/i);


fireEvent.change(firstName, {target: {value:"germain"}});
fireEvent.change(lastName, {target: {value:"reveron"}});
fireEvent.change(address, {target: {value:"572 lake wildmere"}});
fireEvent.change(city, {target: {value:"longwood"}});
fireEvent.change(state, {target: {value:"fl"}});
fireEvent.change(zip, {target: {value:"32750"}});


const button = getByTestId(/enviar/i)
fireEvent.click(button);

const Mensaje = getByText(/Your new green friends will be shipped to:/i)
expect(Mensaje).toBeInTheDocument()
});
