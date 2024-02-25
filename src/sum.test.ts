// import {render, screen} from "testing-library/react"
import sum from './sum'

describe("sum function", () => {
    it("adds two positive numbers correctly", () => {
        expect(sum(1,2)).toBe(3)
    })
    it("adds a positive and a negative number correctly", () => {
        expect(sum(3,-1)).toBe(2)
    })
    it("adds floating point numbers correctly", () => {
        expect(sum(1.22,3.11)).toBe(4.33)
    })
    it("returns NaN if either parameters are not a number", () => {
        expect(sum("2",3)).toBeNaN()
    })
})