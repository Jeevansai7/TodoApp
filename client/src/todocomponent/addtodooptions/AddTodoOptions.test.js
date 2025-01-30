import React from 'react';
import {render,screen} from '../../test/test-utils';
import userEvent from '@testing-library/user-event'
import TestRenderer from 'react-test-renderer';
import AddTodoOption from './AddTodoOption';
import store from '../../store/store'
import { addRecord } from '../../store/action';
import * as allActions from '../../store/action';

describe('AddTodoOption Component',()=>{
    
    test('input box renders',()=>{
        render(<AddTodoOption />);

        const inputElement=screen.getByRole('searchbox');

        expect(inputElement).toBeInTheDocument();
    });

    test('user should be able to see add button',()=>{
        
        render(<AddTodoOption />)

        const addButton=screen.getByRole('button',{name:'Add'});
       
        expect(addButton).toBeInTheDocument();

    });

    test('user should be able to type the value inside input box ',()=>{
        
        render(<AddTodoOption />)

        const inputElement=screen.getByRole('searchbox');
       
        expect(inputElement).toHaveValue('');

        userEvent.type(inputElement, 'Risk');
        expect(inputElement).toHaveValue('Risk');

        userEvent.type(inputElement,'100');
        expect(inputElement).toHaveValue('Risk100');

    });

    test('click handler should not be called when input box is empty',()=>{
        const addHandler=jest.fn()
        render(<AddTodoOption clickHandler={addHandler}/>)

        const inputElement=screen.getByRole('searchbox');
       
        expect(inputElement).toHaveValue('');

        userEvent.type(inputElement,'{enter}');
        expect(addHandler).not.toHaveBeenCalled();

    });

    test('click handler should be called when input box is not empty',()=>{
        const fetchTodoData =async() =>{
            await dispatch(fetchData())
        }
        const useDispatchMock = jest.spyOn(allActions,'addRecord')
        
        const addHandler=jest.fn((userValue)=>store.dispatch(addRecord(userValue,fetchTodoData)))
        render(<AddTodoOption clickHandler={addHandler}/>)

        const inputElement=screen.getByRole('searchbox');
       
        expect(inputElement).toHaveValue('');

        userEvent.type(inputElement, 'need to check exercise');
        expect(inputElement).toHaveValue('need to check exercise');

        userEvent.type(inputElement,'{enter}');

        expect(addHandler).toHaveBeenCalled();
        expect(addHandler).toHaveBeenCalledWith('need to check exercise');
        expect(useDispatchMock).toHaveBeenCalled()
        expect(useDispatchMock).toHaveBeenCalledWith('need to check exercise',fetchTodoData)
       
    });

    test('renders correctly', () => {
        const addHandler=jest.fn((userValue)=>store.dispatch(addRecord(userValue,fetchTodoData)))
        const tree = TestRenderer.create(<AddTodoOption clickHandler={addHandler} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});