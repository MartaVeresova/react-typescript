import React from 'react';
import {create} from 'react-test-renderer';
import {Pagination} from './Pagination';

describe('Pagination component', () => {
    test('pages count is 11 but should be showed only 10', () => {
        const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} currentPage={1} onPageChanged={() => {}}/>)
        const root = component.root
        const spans = root.findAllByType('span')
        // @ts-ignore
        expect(spans.length).toBe(10)
    });
    test('if pages count is more 10 button NEXT should be present', () => {
        const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} currentPage={1} onPageChanged={() => {}}/>)
        const root = component.root
        const button = root.findAllByType('button')
        // @ts-ignore
        expect(button.length).toBe(1)
    });
})