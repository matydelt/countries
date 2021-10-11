import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Activity } from "../components/activity/activity"


configure({ adapter: new Adapter() });

describe("<Activity />", () => {
    describe("Estructura", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Activity />);
        });
        it("Renderiza un <form>", () => {
            expect(wrapper.find("form")).toHaveLength(1);
        });

        it('Renderiza un label con el texto igual a "Ingrese nombre de la Actividad"', () => {
            // El orden en el que se encuentran los Labels es importante.
            expect(wrapper.find("label").at(0).text()).toEqual("Ingrese nombre de la Actividad");
        });

        it('Renderiza un input con la propiedad "name" igual a "title"', () => {
            expect(wrapper.find('input[name="title"]')).toHaveLength(1);
        });

        it('Renderiza un label con el texto igual a "Description"', () => {
            // El orden en el que se encuentran los Labels es importante.
            expect(wrapper.find("label").at(1).text()).toEqual("Description");
        });

        it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
            expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
        });

        it('Renderiza un label con el texto igual a "Place"', () => {
            // El orden en el que se encuentran los Labels es importante.
            expect(wrapper.find("label").at(2).text()).toEqual("Place");
        });

        it('Renderiza un input con la propiedad "name" igual a "place"', () => {
            expect(wrapper.find('input[name="place"]')).toHaveLength(1);
        });

        it('Renderiza un label con el texto igual a "Date"', () => {
            // El orden en el que se encuentran los Labels es importante.
            expect(wrapper.find("label").at(3).text()).toEqual("Date");
        });

        it('Renderiza un input con la propiedad "name" igual a "date"', () => {
            expect(wrapper.find('input[name="date"]')).toHaveLength(1);
        });

        it('Renderiza un boton con el "type" "submit"', () => {
            expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
        });
    });

    describe("Manejo de inputs con estado", () => {
        let wrapper, useState, useStateSpy;
        beforeEach(() => {
            useState = jest.fn();
            useStateSpy = jest.spyOn(React, "useState");
            useStateSpy.mockImplementation((init) => [init, useState]);
            wrapper = shallow(<Activity />);
        });

        describe("station input", () => {
            it("El form deberia cambiar de estado cuando escriban en el input de station", () => {
                // deberías tener un único estado, no uno por cada input
                wrapper
                    .find('input[name="station"]')
                    .simulate("change", {
                        target: { name: "station", value: "Verano" },
                    });
                expect(useState).toHaveBeenCalledWith({
                    duration: "",
                    station: "Verano",
                    difficulty: "",
                    name: "",
                });
            });
        });

        describe("duration input", () => {
            it('deberia cambiar de estado cuando escriban en el input de "duration"', () => {
                // debe respetar el estado que ya tenía antes
                wrapper
                    .find('textarea[name="duration"]')
                    .simulate("change", {
                        target: { name: "duration", value: "3 semanas" },
                    });
                expect(useState).toHaveBeenCalledWith({
                    duration: "3 semanas",
                    station: "",
                    difficulty: "",
                    name: "",
                });
            });
        });

        describe("difficulty input", () => {
            it('deberia cambiar de estado cuando escriban en el input de "difficulty"', () => {
                wrapper
                    .find('input[name="difficulty"]')
                    .simulate("change", { target: { name: "difficulty", value: "5" } });
                expect(useState).toHaveBeenCalledWith({
                    duration: "",
                    station: "",
                    difficulty: "5",
                    name: "",
                });
            });
        });

        describe("name input", () => {
            it('deberia cambiar de estado cuando escriban en el input de "name"', () => {
                wrapper
                    .find('input[name="name"]')
                    .simulate("change", { target: { name: "name", value: "surf" } });
                expect(useState).toHaveBeenCalledWith({
                    duration: "",
                    station: "",
                    difficulty: "",
                    name: "surf",
                });
            });
        });
    });
});
