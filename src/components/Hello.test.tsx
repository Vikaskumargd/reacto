// import * as React from 'react';
// import * as enzyme from 'enzyme';
// import Hello from './Hello';

// it('renders the correct text when no enthusiasm level is given', () => {
//   const hello = enzyme.shallow(<Hello name="Daniel" />);
//   expect(hello.find('.greeting').text()).toEqual('Hello Daniel!')
// });

// it('renders the correct text with an explicit enthusiasm of 1', () => {
//   const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
//   expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
// });

// it('renders the correct text with an explicit enthusiasm level of 5', () => {
//   const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
//   expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
// });

// it('throws when the enthusiasm level is 0', () => {
//   expect(() => {
//     enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
//   }).toThrow();
// });

// it('throws when the enthusiasm level is negative', () => {
//   expect(() => {
//     enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
//   }).toThrow();
// });

// it('should call increment/decrement when corresponding button is clicked', () => {

//   const handleDecrement = jest.fn();
//   const handleIncrement = jest.fn();
//   const hello = enzyme.shallow(<Hello name="Daniel" onDecrement={handleDecrement} onIncrement={handleIncrement} />);

//   hello.find('.decrement-button').simulate('click');
//   expect(handleDecrement.mock.calls.length).toBe(1);

//   hello.find('.decrement-button').simulate('click');
//   hello.find('.decrement-button').simulate('click');
//   hello.find('.decrement-button').simulate('click');
//   expect(handleDecrement.mock.calls.length).toBe(4);
  
//   hello.find('.increment-button').simulate('click');
//   hello.find('.increment-button').simulate('click');
//   expect(handleIncrement.mock.calls.length).toBe(2);

//   hello.find('.increment-button').simulate('click');
//   hello.find('.increment-button').simulate('click');
//   hello.find('.increment-button').simulate('click');
//   hello.find('.increment-button').simulate('click');
//   expect(handleIncrement.mock.calls.length).toBe(6);

// });