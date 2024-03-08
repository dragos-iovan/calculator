// import {render, screen} from "testing-library/react"
import { add, subtract, multiply, divide, percent, factorial } from '../calculations';

describe('calculation functions tests', () => {
  describe('add function', () => {
    it('adds two positive numbers correctly', () => {
      expect(add(1, 2)).toBe(3);
    });
    it('adds a positive and a negative number correctly', () => {
      expect(add(3, -1)).toBe(2);
    });
    it('adds floating point numbers correctly', () => {
      expect(add(1.22, 3.11)).toBe(4.33);
    });
  });

  describe('subtract function', () => {
    it('subtract two positive numbers correctly', () => {
      expect(subtract(3, 2)).toBe(1);
    });
    it('subtract a positive number from a negative number correctly', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });
    it('subtracts floating point numbers correctly', () => {
      expect(subtract(5.5, 3.25)).toBe(2.25);
    });
  });

  describe('multiply function', () => {
    it('multiplies two positive numbers correctly', () => {
      expect(multiply(3, 2)).toBe(6);
    });
    it('multiplies a positive number and a negative number correctly', () => {
      expect(multiply(-5, 3)).toBe(-15);
    });
    it('multiplies floating point numbers correctly', () => {
      expect(multiply(5.5, 3.25)).toBe(17.875);
    });
  });

  describe('divide function', () => {
    it('divides two positive numbers correctly', () => {
      expect(divide(4, 2)).toBe(2); 
    });
    it('divides a positive number and a negative number correctly', () => {
      expect(divide(-6, 3)).toBe(-2);
    });
    it('divides floating point numbers correctly', () => {
      expect(divide(6.25, 2.5)).toBe(2.5);
    });
  });

  describe('percent function', () => {
    it('returns 1% percent of number correctly', () => {
      expect(percent(120)).toBe(1.2);
    });
    it('returns 1% of negative number correctly', () => {
      expect(percent(-120)).toBe(-1.2);
    });
    it('returns 1% of floating point numbers correctly', () => {
      expect(percent(126.5)).toBe(1.265);
    });
  });

  describe('factorial function', () => {
    it('calculates factorial of a number correctly', () => {
      expect(factorial(3)).toBe(6);
      expect(factorial(5)).toBe(120);
    });
  });
})